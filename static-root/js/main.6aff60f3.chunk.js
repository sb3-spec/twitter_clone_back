(this.webpackJsonpworse_twitter=this.webpackJsonpworse_twitter||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(7),s=n.n(a),o=n(2);var i=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var r=n[c].trim();if(r.substring(0,e.length+1)===e+"="){t=decodeURIComponent(r.substring(e.length+1));break}}return t};function l(e,t,n,c){var r;c&&(r=JSON.stringify(c));var a=new XMLHttpRequest,s="http://localhost:8000/api".concat(t),o=i("csrftoken");a.responseType="json",a.open(e,s),a.setRequestHeader("Content-Type","application/json"),o&&(a.setRequestHeader("X-Requested-With","XMLHttpRequest"),a.setRequestHeader("X-CSRFToken",o)),a.onload=function(){403===a.status&&(-1===window.location.href.indexOf("login")&&(window.location.href="/login?showLoginRequired=true"));n(a.response,a.status)},a.onerror=function(){n({message:"The request was an error"},400)},a.send(r)}function u(e,t,n){var c="/tweets/";e&&(c+="?username=".concat(e)),null!==n&&void 0!==n&&(c=n.replace("http://localhost:8000/api","")),l("GET",c,t)}function d(e,t,n){var c="/tweets/feed/";null!==n&&void 0!==n&&(c=n.replace("http://localhost:8000/api","")),l("GET",c,t,{username:e})}function j(e){l("GET","/users/auth/",e)}function f(e,t){var n="/tweets/data/";t&&(n+="".concat(t)),l("GET",n,e)}function b(e,t,n){var c="/tweets/";null!==t&&void 0!==t&&(c+="".concat(t,"/tweets/")),null!==n&&void 0!==n&&(c=n.replace("http://localhost:8000/api","")),l("GET",c,e)}var w=n(5),O=n.n(w),m=n(6);function p(e,t,n){l(n,"/profiles/".concat(t&&t),e)}var x=n(1),h=function(e){var t=e.user,n=e.hideLink;return n?Object(x.jsx)(v,{user:t,hideLink:n,children:Object(x.jsx)("span",{className:"px-3 py-2 my-2 rounded-circle bg-dark text-white",children:t.username?t.username[0]:"a"})}):Object(x.jsx)("span",{className:"px-3 py-2 my-2 rounded-circle bg-dark text-white",children:t.username?t.username[0]:"a"})},v=function(e){var t=e.user,n=e.children;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("span",{className:"pointer",onClick:function(e){e.stopPropagation(),window.location.href="/profiles/".concat(t&&t.username)},children:n})})};function N(e){var t=e.user,n=e.includeFullName,c=e.hideLink,r=n?"".concat(t.first_name," ").concat(t.last_name):"".concat(t.username);return Object(x.jsxs)(x.Fragment,{children:[r," ",c?"@".concat(t.username):Object(x.jsx)(v,{user:t,children:"@".concat(t.username)})]})}var k=n(12),g=n.n(k),T=(n(13),function(e){var t=e.username,n=e.className,r=Object(c.useState)(!1),a=Object(o.a)(r,2),s=a[0],i=a[1],l=Object(c.useState)(),u=Object(o.a)(l,2),d=u[0],j=u[1],f=function(e,t){i(!0),200===t?j(e):404===t?alert("There was an error finding the requested user"):alert("server issue")};return Object(c.useEffect)((function(){var e=function(){var e=Object(m.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;break;case 2:s||p(f,t,"GET");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()})),s?d?Object(x.jsx)(S,{user:d,setProfile:j,className:n}):Object(x.jsx)("span",{children:"User not found"}):"Loading"});function S(e){var t=e.user,n=e.setProfile,c=e.className,r=function(e,t){200===t?n(e):403===t?window.location.href="/login":alert("We could not find the profile in question. Please try again later.")};return t?Object(x.jsxs)("div",{className:"profile-container ".concat(c),children:[Object(x.jsx)(h,{user:t,hideLink:!0}),Object(x.jsx)("p",{children:Object(x.jsx)(N,{user:t,hideLink:!0})}),Object(x.jsxs)("div",{className:"follower-following-display",children:[g()(t.follower_count||0).format("0a")," ",1===t.follower_count?"Follower":"Followers"," ",g()(t.following_count||0).format("0a")," ","Following"]}),Object(x.jsx)("div",{className:"location",children:t.location}),Object(x.jsx)("div",{className:"bio",children:t.bio}),Object(x.jsx)("button",{onClick:function(e){e.preventDefault(),e.stopPropagation(),t&&p(r,t.username,"POST")},className:"btn btn-primary",children:t.is_following?"Unfollow":"Follow"})]}):null}n(22);var _=function(e){var t=e.tweet,n=e.currentUser,r=e.setIsDeleted,a=Object(c.useState)(!1),s=Object(o.a)(a,2),i=s[0],u=s[1],d=Object(c.useState)([]),j=Object(o.a)(d,2),f=j[0],b=j[1],w=Object(c.createRef)();function O(e){var c=e.content,a=function(e,t){200===t&&r(!0)};return Object(x.jsx)("div",{className:"option",onClick:function(e){e.preventDefault(),e.stopPropagation(),u(!1),"Delete Tweet"===c&&function(e,t,n){var c="/tweets/";t&&(c+="".concat(t,"/delete/")),l("POST",c,e,{username:n})}(a,t.id,n)},children:Object(x.jsx)("p",{className:"option__content",children:c})})}return window.addEventListener("mousedown",(function(e){w.current&&!w.current.contains(e.target)&&(e.preventDefault(),e.stopPropagation(),u(!1))})),Object(c.useEffect)((function(){t.user&&(t.user.username!==n?b(["Report Tweet","Block @".concat(t.user.username),"Follow @".concat(t.user.username)]):b(["Delete Tweet","Pin to profile"]))}),[b,n,t.user]),i?Object(x.jsx)("div",{className:"modal__background",children:Object(x.jsx)("div",{className:"options-btn__toggled",ref:w,children:f.map((function(e){return Object(x.jsx)(O,{content:e,currentUser:n})}))})}):Object(x.jsx)("div",{onClick:function(e){e.stopPropagation(),e.preventDefault(),u(!0)},className:"options-btn__untoggled",children:Object(x.jsx)("i",{className:"fas fa-ellipsis-h options-icon"})})};n(23);var E=function e(t){var n=t.tweet,r=t.className,a=t.currentUser,s=(t.nextUrl,Object(c.useState)(!1)),i=Object(o.a)(s,2),u=i[0],d=i[1],j=Object(c.useState)(!1),b=Object(o.a)(j,2),w=b[0],k=b[1],g=Object(c.useState)(n.likes?n.likes:0),T=Object(o.a)(g,2),S=T[0],E=T[1],D=Object(c.useState)(!1),y=Object(o.a)(D,2),U=y[0],L=y[1],R=Object(c.useState)(),P=Object(o.a)(R,2),C=(P[0],P[1]),q=Object(c.useState)(!1),F=Object(o.a)(q,2),G=(F[0],F[1]),I=Object(c.useState)(!1),H=Object(o.a)(I,2),M=H[0],B=H[1],X=function(e){e.preventDefault(),e.stopPropagation(),window.location.href="/".concat(n.id)},J=function(e,t){403===t?window.location.href="/login/":404!==t&&f(z,n.id)};function A(e,t){t.stopPropagation(),t.preventDefault();var c=e;if("like"===e)u&&(c="unlike");else if("retweet"===e&w)return;!function(e,t,n,c){l("POST","/tweets/action/",n,{id:e,action:t,username:c})}(n.id,c,J)}var W=function(t){t.callback;return n.parent?Object(x.jsxs)("div",{onClick:function(e){return X(e)},children:[Object(x.jsxs)("p",{className:"retweet-header",children:["retweeted by ",Object(x.jsx)(v,{user:n.user})]}),Object(x.jsx)(e,{tweet:n.parent,className:n.content?"retweet":"retweet no-border",currentUser:a})]}):null},z=function(e,t){200===t?(k(e.didRetweet),d(e.didLike),E(e.likes),B(!0),0===e.likes&&d(!1)):console.log(e,t)},K=function(e,t){200===t?(C(e),G(!0)):console.log(e,t)};return Object(c.useEffect)((function(){var e=!0,t=function(){var t=Object(m.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:M||(f(z,n.id),p(K,n.user.username,"GET"));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return t(),function(){e=!1}}),[M,n]),!U&&(n.content||n.parent)&&Object(x.jsxs)("div",{className:r+" overall-container",onClick:function(e){return X(e)},children:[!n.parent&&Object(x.jsxs)("div",{className:"profile-container d-flex",children:[Object(x.jsx)("div",{className:"mx-1 profile-picture",children:n.user?Object(x.jsx)(v,{children:Object(x.jsx)(h,{user:n.user})}):"Loading..."}),Object(x.jsx)("p",{className:"tweet-header",children:Object(x.jsx)(N,{user:n.user})}),Object(x.jsx)(_,{tweet:n,currentUser:a,setIsDeleted:L})]}),Object(x.jsxs)("div",{className:"tweet-container",children:[""!==n.content&&Object(x.jsx)("div",{className:"tweet-content-wrapper",children:Object(x.jsx)("p",{className:"tweet-text",children:"".concat(n.content)})}),n.parent?Object(x.jsx)("div",{className:"retweet-container",children:Object(x.jsx)(W,{})}):Object(x.jsxs)("div",{className:"buttons",children:[Object(x.jsx)("i",{className:w?"fas fa-retweet btn-icon rt-icon text-green":"fas fa-retweet btn-icon rt-icon",onClick:function(e){return A("retweet",e)}}),Object(x.jsxs)("div",{className:"like-btn__container",children:[Object(x.jsx)("i",{className:u?"fas fa-heart btn-icon like-icon red-text":"far fa-heart btn-icon like-icon",onClick:function(e){return A("like",e)}}),S]})]})]})]})};n(24);var D=function(e){var t=e.tweetId,n=Object(c.useState)(!1),r=Object(o.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)(),u=Object(o.a)(i,2),d=u[0],f=u[1],b=Object(c.useState)(null),w=Object(o.a)(b,2),O=w[0],m=w[1],p=function(e,t){200===t&&m(e)},h=function(e,t){200===t&&f(e.username)};return Object(c.useEffect)((function(){!1===a&&(!function(e,t){var n="/tweets/";e&&(n+="".concat(e)),l("GET",n,t,{tweet_id:e})}(t,p),j(h),s(!0))}),[s,t,a]),null!==O&&Object(x.jsx)("div",{className:"detail-container",children:Object(x.jsx)("div",{className:"d-flex",children:Object(x.jsx)("div",{className:"col-11",children:Object(x.jsx)(E,{tweet:O,currentUser:d})})})})},y=n(4),U=(n(25),n(11),function(e){var t=e.newTweets,n=e.setNewTweets,r=e.tweets,a=e.setTweets,s=e.username,o=e.tweetsDidSet,i=e.callback,l=e.nextUrl,u=e.handleLoadNextResponse;return Object(c.useEffect)((function(){t.length>0&&(a([].concat(Object(y.a)(t),Object(y.a)(r))),n([]))}),[t]),Object(c.useEffect)((function(){var e=!0,t=function(){var t=Object(m.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:if(!1!==o){t.next=5;break}return t.next=5,d(s,i);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return t(),function(){e=!1}}),[o,s,i]),Object(x.jsxs)("div",{className:"tweet_feed__container",children:[r.map((function(e,t){return Object(x.jsx)(E,{tweet:e,idx:t,callback:i,currentUser:s,nextUrl:l},"".concat(t,"-{tweet.id}"))})),null!==l&&Object(x.jsx)("button",{className:"btn btn-outline btn-primary",onClick:function(e){e.preventDefault(),null!==l&&d(s,u,l)},children:"Load More"})]})}),L=n(14);n(27);var R=function(e){var t=Object(c.useRef)(""),n=function(t,n){var c=Object(y.a)(e.newTweets);201===n?(c.unshift(t),e.setNewTweets(c),u(e.username,e.callback)):alert("An error has occurred. Please try again")},r=function(c){c.preventDefault();var r,a,s,o=t.current.value;r=o,a=n,s=e.username,l("POST","/tweets/create/",a,{content:r,username:s}),t.current.value=""};return Object(x.jsx)("div",{className:"tweet-form-container",children:Object(x.jsx)("div",{className:"form_container",children:Object(x.jsxs)("form",{onSubmit:function(e){return r(e)},children:[Object(x.jsx)("textarea",{ref:t,required:!0,className:"form-control"}),Object(x.jsx)(L.a,{variant:"primary",children:"Tweet"})]})})})},P=function(e){var t=e.newTweets,n=e.setNewTweets,r=e.tweets,a=e.setTweets,s=e.username,o=e.tweetsDidSet,i=e.callback,l=e.nextUrl,d=e.handleLoadNextResponse;return Object(c.useEffect)((function(){t.length>0&&(a([].concat(Object(y.a)(t),Object(y.a)(r))),n([]))}),[t,r,a,n]),Object(c.useEffect)((function(){!1===o&&u(s,i)}),[o,s,i]),Object(x.jsxs)("div",{className:"tweet_feed__container",children:[r.map((function(e,t){return Object(x.jsx)(E,{tweet:e,idx:t,callback:i,currentUser:s},"".concat(t,"-{tweet.id}"))})),null!==l&&Object(x.jsx)("button",{className:"btn btn-outline btn-primary",onClick:function(e){e.preventDefault(),null!==l&&u(s,d,l)},children:"Load More"})]})};var C=function(e){var t=e.currUser,n=e.newTweets,c=e.setNewTweets,r=e.tweets,a=e.setTweets,s=e.tweetsDidSet,o=e.callback,i=e.setTweetsDidSet,l=e.nextUrl,u=e.handleLoadNextResponse;return Object(x.jsxs)("div",{className:"twitter_feed",children:[Object(x.jsx)(R,{username:t,newTweets:n,setNewTweets:c,tweets:r,setTweets:a,tweetsDidSet:s,callback:o}),t?Object(x.jsx)(U,{newTweets:n,setNewTweets:c,tweets:r,setTweets:a,username:t,tweetsDidSet:s,setTweetsDidSet:i,callback:o,nextUrl:l,handleLoadNextResponse:u}):Object(x.jsx)(P,{newTweets:n,setNewTweets:c,tweets:r,setTweets:a,username:t,tweetsDidSet:s,setTweetsDidSet:i,callback:o,nextUrl:l,handleLoadNextResponse:u})]})};var q=function(e){var t=Object(c.useState)([]),n=Object(o.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(!1),i=Object(o.a)(s,2),l=i[0],u=i[1],d=Object(c.useState)(!0),j=Object(o.a)(d,2),f=j[0],w=j[1],O=Object(c.useState)(),m=Object(o.a)(O,2),p=m[0],h=m[1],v=e.user,N=e.handleLoadNextResponse,k=e.callback,g=function(e,t){console.log(e),200===t&&(a(e.results),u(!0),h(e.next))};return Object(c.useEffect)((function(){var e=!0;return!0===e&&(b(g,v),w(!1)),function(){e=!1}}),[w,N,v]),!f&&l?Object(x.jsxs)("div",{className:"tweet_feed__container",children:[r.map((function(e,t){return Object(x.jsx)(E,{tweet:e,idx:t,callback:k,currentUser:v},"".concat(t,"-{tweet.id}"))})),null!==p&&Object(x.jsx)("button",{className:"btn btn-outline btn-primary",onClick:function(e){e.preventDefault(),e.stopPropagation(),null!==p&&b(N,v,p)},children:"Load More"})]}):null};var F=function(e){var t=e.username,n=e.className,c=e.handleLoadNextResponse,r=e.nextUrl,a=e.callback;return Object(x.jsxs)("div",{children:[Object(x.jsx)(T,{username:t,className:n,handleLoadNextResponse:c}),Object(x.jsx)(q,{user:t,handleLoadNextResponse:c,nextUrl:r,callback:a})]})};n(28);var G=function(e){var t=Object(c.useState)(),n=Object(o.a)(t,2),r=n[0],a=n[1],s=e.currentSection;function i(e){var t=e.content,n=e.currentUser,c=e.currentSection,r=c===t;console.log(c);return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("li",{onClick:function(e){e.stopPropagation(),e.preventDefault(),!0!==r&&("Profile"===t?window.location.href="/profiles/".concat(n):"Home"===t?window.location.href="/":"Settings"===t?window.location.href="/settings":"Messages"===t&&(window.location.href="/messages"))},className:"navbar__list-item ".concat(r&&"bold"),children:t&&t})})}return Object(c.useEffect)((function(){var e=!0,t=function(e,t){200===t&&a(e.username)},n=function(){var n=Object(m.a)(O.a.mark((function n(){return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=4;break}j(t),n.next=5;break;case 4:return n.abrupt("return");case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return n(),function(){e=!1}}),[]),Object(x.jsx)("div",{className:"navbar__container__outer",children:Object(x.jsxs)("div",{className:"navbar__container__inner",children:[Object(x.jsx)("div",{className:"navbar__header",children:Object(x.jsx)("i",{onClick:function(e){e.stopPropagation(),e.preventDefault();var t=window.location.href;console.log(t),"http://localhost:3000/"!==t&&(window.location.href="/")},className:"fab fa-twitter"})}),Object(x.jsx)("ul",{className:"navbar__list",children:["Home","Profile","Messages","Settings"].map((function(e){return Object(x.jsx)(i,{content:e,currentUser:r,currentSection:s})}))})]})})};var I=function(e){var t=Object(c.useState)([]),n=Object(o.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)([]),i=Object(o.a)(s,2),l=i[0],u=i[1],d=Object(c.useState)(!1),j=Object(o.a)(d,2),f=j[0],b=j[1],w=Object(c.useState)(),O=Object(o.a)(w,2),m=O[0],h=O[1],v=Object(c.useState)(),N=Object(o.a)(v,2),k=N[0],g=N[1],T=Object(c.useState)("Home"),S=Object(o.a)(T,2),_=(S[0],S[1],e.username),E=function(e,t){g(e.username)};return Object(c.useEffect)((function(){p(E,_,"GET")}),[_]),Object(x.jsx)("div",{className:"home-container",children:Object(x.jsx)(C,{currUser:k,newTweets:r,setNewTweets:a,tweets:l,setTweets:u,tweetsDidSet:f,callback:function(e,t){200===t?(u(e.results),b(!0),h(e.next)):alert("There was an error")},setTweetsDidSet:b,nextUrl:m,handleLoadNextResponse:function(e,t){if(200===t){var n=Object(y.a)(l).concat(e.results);u(n),h(e.next)}else alert("There was an error")}})})},H=r.a.createElement,M=document.getElementById("root");M&&s.a.render(H(I,M.dataset),M);var B=document.getElementById("global_tweets");B&&s.a.render(Object(x.jsx)(P,{}),B);var X=document.getElementById("tweet_feed");if(X){var J=H(U,X.dataset);s.a.render(J,X)}var A=document.getElementById("tweet-detail-view");A&&s.a.render(H(D,A.dataset),A),document.querySelectorAll(".twitter-profile-badge").forEach((function(e){s.a.render(H(F,e.dataset),e)}));var W=document.getElementById("navbar");if(W){var z=H(G,W.dataset);s.a.render(z,W)}}],[[29,1,2]]]);
//# sourceMappingURL=main.6aff60f3.chunk.js.map