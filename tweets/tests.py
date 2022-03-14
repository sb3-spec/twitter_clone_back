from django.test import TestCase
from django.contrib.auth import get_user_model

from rest_framework.test import APIClient

from .models import Tweet

User = get_user_model()

# Create your tests here.
class TweetTestCase(TestCase):
    def setUp(self):
        self.user= User.objects.create_user(username='robert', password='1234')
        userb = User.objects.create_user(username='mary', password='ron')
        Tweet.objects.create(content='robert 1', user=self.user)
        Tweet.objects.create(content='robert 2', user=self.user)
        Tweet.objects.create(content='mary 1', user=userb)
        
        self.current_count = len(Tweet.objects.all())

    
    def get_client(self):
        client = APIClient()
        client.login(username=self.user.username, password='1234')
        
        return client 
    
    def test_tweet_list(self):
        client = self.get_client()
        response = client.get("/api/tweets/", {"username": self.user.username})
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json()), 2)
        
    def test_action_like(self):
        client = self.get_client()
        response = client.post("/api/tweets/action/", {"id": 1, "action": "like", "username": self.user.username})
        like_count = response.json().get("likes")
        self.assertEquals(like_count, 1)
        
    def test_action_like(self):
        client = self.get_client()
        user = self.user
        response = client.post("/api/tweets/action/", {"id": 2, "action": "like", "username": self.user.username})
        self.assertEqual(response.status_code, 200)
        my_likes = user.tweetlike_set.count()
        self.assertEqual(my_likes, 1)
        
        
    def test_action_retweet(self):
        client = self.get_client()
        response = client.post("/api/tweets/action/", {"id": 2, "action": "retweet", "username": self.user.username})
        data = response.json()
        self.assertEqual(response.status_code, 201)
        self.assertNotEqual(data.get("id"), 2)
    
    def test_tweet_create_api_view(self):
        request_data = {"content": "This is my test tweet", "username": self.user.username}
        client = self.get_client()
        response = client.post("/api/tweets/create/", request_data)

        new_tweet_id = Tweet.objects.count()
        self.assertEqual(self.current_count + 1, new_tweet_id)
        self.assertEqual(response.status_code, 201)

    def test_tweet_detail_api_view(self):
        client = self.get_client()
        response = client.get("/api/tweets/1")
        self.assertEqual(response.status_code, 200)
        data = response.json()
        id = data.get("id")
        self.assertEqual(id, 1)
        
        # ./manage.py test
    def test_tweet_delete_api_view(self):
        client = self.get_client()
        response = client.delete("/api/tweets/1/delete/", {"username": self.user.username, "id": 1})
        self.assertEqual(response.status_code, 200)
        client = self.get_client()
        response = client.delete("/api/tweets/1/delete/", {"username": self.user.username, "id": 1})
        self.assertEqual(response.status_code, 404)
        response = client.delete("/api/tweets/3/delete/", {"username": self.user.username, "id": 3})
        self.assertEqual(response.status_code, 401)
        
        
    def test_tweets_related_name(self):
        user = self.user
        self.assertEqual(user.tweets.count(), 2)
    
        