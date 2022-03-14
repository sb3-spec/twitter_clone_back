from django.test import TestCase
from rest_framework.test import APIClient
from django.contrib.auth import get_user_model

from .models import Profile


User = get_user_model()

class ProfileTestCase(TestCase):
    def setUp(self):
        self.user= User.objects.create_user(username='robert', password='1234')
        self.userb = User.objects.create_user(username='mary', password='ron')
    
    def get_client(self):
        client = APIClient()
        client.login(username='robert', password='1234')
        return client
    
    def test_profile_created(self):
        qs = Profile.objects.all()
        self.assertEqual(qs.count(), 2)    
    
    def test_following(self):
        first = self.user
        second = self.userb
        first_profile = first.profile
        first_profile.followers.add(second) # add second to first's followers list
        qs = second.following.filter(user=first)
        self.assertTrue(qs.exists())
        first_following_list = first.following.all()
        self.assertFalse(first_following_list.exists())
        
    def test_follow_api_endpoint(self):
        client = self.get_client()
        second = self.userb
        
        response = client.post(f"/api/profile/{second.username}/follow", {"action": "follow"})
        r_data = response.json()
        count = r_data.get('count')
        self.assertEquals(response.status_code, 200)
        self.assertEquals(count, 1)
        
       
    
    def test_unfollow_api_endpoint(self):
        client = self.get_client()
        second = self.userb
        
        response = client.post(f"/api/profile/{second.username}/follow", {"action": "unfollow"})
        r_data = response.json()
        count = r_data.get('count')
        self.assertEquals(response.status_code, 200)
        self.assertEquals(count, 0)
        
    def test_cannot_follow_self(self):
        client = self.get_client()
        user1 = self.user
        user2 = self.user
        response = client.post(f"/api/profile/{user2.username}/follow", {"action": "follow"})
        r_data = response.json()
        count = r_data.get('count')
        self.assertEquals(response.status_code, 200)
        self.assertEquals(count, 0)
        
        
    def get_client(self):
        client = APIClient()
        client.login(username=self.user.username, password='1234')
        
        return client 
    
        