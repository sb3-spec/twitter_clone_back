(this.webpackJsonpworse_twitter=this.webpackJsonpworse_twitter||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(9),a=n.n(s),i=n(2);var o=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var r=n[c].trim();if(r.substring(0,e.length+1)===e+"="){t=decodeURIComponent(r.substring(e.length+1));break}}return t};function u(e,t,n,c){var r;c&&(r=JSON.stringify(c));var s=new XMLHttpRequest,a="http://localhost:8000/api".concat(t),i=o("csrftoken");s.responseType="json",s.open(e,a),s.setRequestHeader("Content-Type","application/json"),i&&(s.setRequestHeader("X-Requested-With","XMLHttpRequest"),s.setRequestHeader("X-CSRFToken",i)),s.onload=function(e){403!==s.status&&401!==s.status||"Authentication credentials were not provided."===s.response.detail&&(window.location.href="/login?showLoginRequired=true");n(s.response,s.status)},s.onerror=function(){n({message:"The request was an error"},400)},s.send(r)}function l(e,t){var n="/tweets/";e&&(n+="?username=".concat(e)),u("GET",n,t)}var j=n(6),d=(n(16),n(1));var f=function e(t){var n=t.tweet,r=t.callback,s=t.className,a=t.props,o=Object(c.useState)(!1),f=Object(i.a)(o,2),b=f[0],w=f[1],O=Object(c.useState)(!1),v=Object(i.a)(O,2),p=v[0],m=v[1],h=Object(c.useState)(n.likes?n.likes:0),x=Object(i.a)(h,2),N=x[0],k=x[1],g=r,T=function(e){e.preventDefault(),e.stopPropagation(),window.location.href="/".concat(n.id)},S=function(e,t){console.log(t,e),201===t||200===t?(k(e.likes),w((function(e){return!e})),201===t&&m((function(e){return!e})),l(a.username,r)):w((function(e){return!e}))};function R(e,t){t.stopPropagation(),t.preventDefault();var c=e;if("like"===e)b&&(c="unlike");else if("retweet"===e&p)return;!function(e,t,n){u("POST","/tweets/action/",n,{id:e,action:t})}(n.id,c,S)}var y=function(){return n.parent?Object(d.jsxs)("div",{onClick:function(e){return T(e)},children:[Object(d.jsx)("p",{children:"Retweet"}),Object(d.jsx)("div",{className:"",children:Object(d.jsx)(e,{tweet:n.parent,callback:g,className:"retweet",props:a})})]}):null};return Object(c.useEffect)((function(){k(n.likes)}),[n.likes]),Object(d.jsx)("div",{className:s+" overall-container",onClick:function(e){return T(e)},children:Object(d.jsxs)("div",{className:"tweet-container",children:[Object(d.jsx)("div",{className:"tweet-content-wrapper",children:Object(d.jsx)("p",{className:"tweet-text",children:"".concat(n.id,"   ").concat(n.content)})}),Object(d.jsx)("div",{className:"retweet-container",children:Object(d.jsx)(y,{})}),!n.parent&&Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsxs)(j.a,{variant:b?"primary":"outline",onClick:function(e){return R("like",e)},children:[Object(d.jsx)("i",{className:"far fa-thumbs-up"}),N]}),Object(d.jsx)("div",{className:"retweet-btn",children:Object(d.jsx)(j.a,{variant:!p&&"outline",color:"success",onClick:function(e){return R("retweet",e)},children:Object(d.jsx)("i",{className:"fas fa-retweet"})})})]})]})})};var b=function(e){var t=e.tweetId,n=Object(c.useState)(!1),r=Object(i.a)(n,2),s=r[0],a=r[1],o=Object(c.useState)(null),l=Object(i.a)(o,2),j=l[0],b=l[1],w=function(e,t){200===t?(b(e),console.log(e)):alert("There was an error finding your tweet. Please try again.")};return Object(c.useEffect)((function(){!1===s&&(!function(e,t){var n="/tweets/";e&&(n+="".concat(e)),u("GET",n,t)}(t,w),a(!0))}),[a,t,s]),null===j?null:Object(d.jsx)(f,{tweet:j})},w=n(4),O=(n(18),function(e){var t=e.newTweets,n=e.setNewTweets,r=e.props,s=r.username,a=Object(c.useState)([]),o=Object(i.a)(a,2),u=o[0],j=o[1],b=Object(c.useState)(!1),O=Object(i.a)(b,2),v=O[0],p=O[1];function m(e,t){200===t?(j(e),p(!0)):alert("There was an error")}return Object(c.useEffect)((function(){t.length>0&&(j([].concat(Object(w.a)(t),Object(w.a)(u))),n([]))}),[t]),Object(c.useEffect)((function(){!1===v&&(l(s,m),p(!0))}),[u,v,p,s]),Object(d.jsx)("div",{className:"tweet_list__container",children:u.map((function(e,t){return Object(d.jsx)(f,{tweet:e,idx:t,callback:m,props:r},"".concat(t,"-{tweet.id}"))}))})});n(19),n(20);var v=function(e){var t=e.newTweets,n=e.setNewTweets,r=Object(c.useRef)(""),s=function(e,c){var r=Object(w.a)(t);201===c?(r.unshift(e),n(r)):(console.log(e),alert("An error has occurred. Please try again"))},a=function(e){e.preventDefault();var t=r.current.value;u("POST","/tweets/create/",s,{content:t}),r.current.value=""};return Object(d.jsxs)("div",{className:"tweet-form-container",children:[Object(d.jsx)("div",{className:"profile_pic",children:"IMG"}),Object(d.jsx)("div",{className:"form_container",children:Object(d.jsxs)("form",{onSubmit:function(e){return a(e)},children:[Object(d.jsx)("textarea",{ref:r,required:!0,className:"form-control"}),Object(d.jsx)(j.a,{variant:"primary",children:"Tweet"})]})})]})};var p=function(){return Object(d.jsx)("div",{children:"Hello World"})};var m=function(e){var t=Object(c.useState)([]),n=Object(i.a)(t,2),r=n[0],s=n[1];return console.log(e),Object(d.jsxs)("div",{className:"home-container",children:[Object(d.jsx)(p,{}),Object(d.jsxs)("div",{className:"twitter_feed",children:[Object(d.jsx)(v,{newTweets:r,setNewTweets:s}),Object(d.jsx)(O,{newTweets:r,setNewTweets:s,props:e})]}),Object(d.jsx)(p,{})]})},h=r.a.createElement,x=document.getElementById("root");if(x){var N=h(m,x.dataset);a.a.render(N,x)}var k=document.getElementById("tweet-detail-view");k&&a.a.render(h(b,k.dataset),k)}},[[21,1,2]]]);
//# sourceMappingURL=main.a6e21a96.chunk.js.map