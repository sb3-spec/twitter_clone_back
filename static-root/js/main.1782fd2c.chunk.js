(this.webpackJsonpworse_twitter=this.webpackJsonpworse_twitter||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(9),a=n.n(s),i=n(2);var o=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var r=n[c].trim();if(r.substring(0,e.length+1)===e+"="){t=decodeURIComponent(r.substring(e.length+1));break}}return t};function u(e,t,n,c){var r;c&&(r=JSON.stringify(c));var s=new XMLHttpRequest,a="http://localhost:8000/api".concat(t),i=o("csrftoken");s.responseType="json",s.open(e,a),s.setRequestHeader("Content-Type","application/json"),i&&(s.setRequestHeader("X-Requested-With","XMLHttpRequest"),s.setRequestHeader("X-CSRFToken",i)),s.onload=function(e){401===s.status&&"Authentication credentials were not provided."===s.response.detail&&(window.location.href="/login?showLoginRequired=true"),console.log(n),n(s.response,s.status)},s.onerror=function(){n({message:"The request was an error"},400)},s.send(r)}function l(e,t){var n="/tweets/";e&&(n+="?username=".concat(e)),u("GET",n,t)}var j=n(6),d=(n(16),n(1));var f=function e(t){var n=t.tweet,r=t.callback,s=t.className,a=t.currentUser,o=Object(c.useState)(!1),f=Object(i.a)(o,2),w=f[0],b=f[1],O=Object(c.useState)(!1),v=Object(i.a)(O,2),m=v[0],h=v[1],p=Object(c.useState)(n.likes?n.likes:0),x=Object(i.a)(p,2),k=x[0],N=x[1],T=r,g=function(e){e.preventDefault(),e.stopPropagation(),window.location.href="/".concat(n.id)},S=function(e,t){console.log(t,e),201===t||200===t?(N(e.likes),b((function(e){return!e})),201===t?h((function(e){return!e})):200===t&&e.is_logged_in&&(window.location.href="/"),l(a,r)):b((function(e){return!e}))};function R(e,t){t.stopPropagation(),t.preventDefault();var c=e;if("like"===e)w&&(c="unlike");else if("retweet"===e&m)return;!function(e,t,n,c){u("POST","/tweets/action/",n,{id:e,action:t,username:c})}(n.id,c,S,a)}var y=function(){return n.parent?Object(d.jsxs)("div",{onClick:function(e){return g(e)},children:[Object(d.jsx)("p",{children:"Retweet"}),Object(d.jsx)("div",{className:"",children:Object(d.jsx)(e,{tweet:n.parent,callback:T,className:"retweet",currentUser:a})})]}):null};return Object(c.useEffect)((function(){N(n.likes)}),[n.likes]),Object(d.jsx)("div",{className:s+" overall-container",onClick:function(e){return g(e)},children:Object(d.jsxs)("div",{className:"tweet-container",children:[Object(d.jsx)("div",{className:"tweet-content-wrapper",children:Object(d.jsx)("p",{className:"tweet-text",children:"".concat(n.id?n.id:-1,"   ").concat(n.content)})}),Object(d.jsx)("div",{className:"retweet-container",children:Object(d.jsx)(y,{})}),!n.parent&&Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsxs)(j.a,{variant:w?"primary":"outline",onClick:function(e){return R("like",e)},children:[Object(d.jsx)("i",{className:"far fa-thumbs-up"}),k]}),Object(d.jsx)("div",{className:"retweet-btn",children:Object(d.jsx)(j.a,{variant:!m&&"outline",color:"success",onClick:function(e){return R("retweet",e)},children:Object(d.jsx)("i",{className:"fas fa-retweet"})})})]})]})})};var w=function(e){var t=e.tweetId,n=Object(c.useState)(!1),r=Object(i.a)(n,2),s=r[0],a=r[1],o=Object(c.useState)(null),l=Object(i.a)(o,2),j=l[0],w=l[1],b=function(e,t){200===t?(w(e),console.log(e)):alert("There was an error finding your tweet. Please try again.")};return Object(c.useEffect)((function(){!1===s&&(!function(e,t){var n="/tweets/";e&&(n+="".concat(e)),u("GET",n,t)}(t,b),a(!0))}),[a,t,s]),null===j?null:Object(d.jsx)(f,{tweet:j})},b=n(4),O=(n(18),function(e){var t=e.newTweets,n=e.setNewTweets,r=e.tweets,s=e.setTweets,a=e.username,i=e.tweetsDidSet,o=e.callback;return Object(c.useEffect)((function(){t.length>0&&(s([].concat(Object(b.a)(t),Object(b.a)(r))),n([]))}),[t]),Object(c.useEffect)((function(){!1===i&&l(a,o)}),[i,a]),Object(d.jsx)("div",{className:"tweet_list__container",children:r.map((function(e,t){return Object(d.jsx)(f,{tweet:e,idx:t,callback:o,currentUser:a},"".concat(t,"-{tweet.id}"))}))})});n(19),n(20);var v=function(e){var t=Object(c.useRef)(""),n=function(t,n){var c=Object(b.a)(e.newTweets);201===n?(c.unshift(t),e.setNewTweets(c),l(e.username,e.callback)):alert("An error has occurred. Please try again")},r=function(c){c.preventDefault();var r,s,a,i=t.current.value;r=i,s=n,a=e.username,u("POST","/tweets/create/",s,{content:r,username:a}),t.current.value=""};return Object(d.jsx)("div",{className:"tweet-form-container",children:Object(d.jsx)("div",{className:"form_container",children:Object(d.jsxs)("form",{onSubmit:function(e){return r(e)},children:[Object(d.jsx)("textarea",{ref:t,required:!0,className:"form-control"}),Object(d.jsx)(j.a,{variant:"primary",children:"Tweet"})]})})})};var m=function(){return Object(d.jsx)("div",{children:"Hello World"})};var h=function(e){var t=Object(c.useState)([]),n=Object(i.a)(t,2),r=n[0],s=n[1],a=Object(c.useState)([]),o=Object(i.a)(a,2),u=o[0],l=o[1],j=Object(c.useState)(!1),f=Object(i.a)(j,2),w=f[0],b=f[1];function h(e,t){200===t?(l(e),b(!0)):alert("There was an error")}return Object(d.jsxs)("div",{className:"home-container",children:[Object(d.jsx)(m,{}),Object(d.jsxs)("div",{className:"twitter_feed",children:[Object(d.jsx)(v,{username:e.username,newTweets:r,setNewTweets:s,tweets:u,setTweets:l,tweetsDidSet:w,callback:h}),Object(d.jsx)(O,{newTweets:r,setNewTweets:s,tweets:u,setTweets:l,username:e.username,tweetsDidSet:w,setTweetsDidSet:b,callback:h})]})]})},p=r.a.createElement,x=document.getElementById("root");if(x){var k=p(h,x.dataset);a.a.render(k,x)}var N=document.getElementById("tweet-detail-view");N&&a.a.render(p(w,N.dataset),N)}},[[21,1,2]]]);
//# sourceMappingURL=main.1782fd2c.chunk.js.map