(this.webpackJsonpworse_twitter=this.webpackJsonpworse_twitter||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(9),s=n.n(a),i=n(2);var o=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var r=n[c].trim();if(r.substring(0,e.length+1)===e+"="){t=decodeURIComponent(r.substring(e.length+1));break}}return t};function l(e,t,n,c){var r;c&&(r=JSON.stringify(c));var a=new XMLHttpRequest,s="http://localhost:8000/api".concat(t),i=o("csrftoken");a.responseType="json",a.open(e,s),a.setRequestHeader("Content-Type","application/json"),i&&a.setRequestHeader("X-CSRFToken",i),a.onload=function(){n(a.response,a.status)},a.onerror=function(){n({message:"The request was an error"},400)},a.send(r)}function u(e,t){var n="/tweets/";e&&(n+="?username=".concat(e)),l("GET",n,t)}var j=n(6),f=(n(16),n(1));var b=function e(t){var n=t.tweet,r=t.callback,a=t.className,s=t.props,o=Object(c.useState)(!1),b=Object(i.a)(o,2),d=b[0],O=b[1],w=Object(c.useState)(!1),v=Object(i.a)(w,2),p=v[0],m=v[1],h=Object(c.useState)(n.likes?n.likes:0),x=Object(i.a)(h,2),N=x[0],k=x[1],g=r,T=function(e){e.preventDefault(),e.stopPropagation(),window.location.href="/".concat(n.id)},S=function(e,t){console.log(t,e),201===t||200===t?(k(e.likes),O((function(e){return!e})),201===t&&m((function(e){return!e})),u(s.username,r)):O((function(e){return!e}))};function y(e,t){t.stopPropagation(),t.preventDefault();var c=e;if("like"===e)d&&(c="unlike");else if("retweet"===e&p)return;!function(e,t,n){l("POST","/tweets/action/",n,{id:e,action:t})}(n.id,c,S)}var E=function(){return n.parent?Object(f.jsxs)("div",{onClick:function(e){return T(e)},children:[Object(f.jsx)("p",{children:"Retweet"}),Object(f.jsx)("div",{className:"",children:Object(f.jsx)(e,{tweet:n.parent,callback:g,className:"retweet",props:s})})]}):null};return Object(c.useEffect)((function(){k(n.likes)}),[n.likes]),Object(f.jsx)("div",{className:a+" overall-container",onClick:function(e){return T(e)},children:Object(f.jsxs)("div",{className:"tweet-container",children:[Object(f.jsx)("div",{className:"tweet-content-wrapper",children:Object(f.jsx)("p",{className:"tweet-text",children:"".concat(n.id,"   ").concat(n.content)})}),Object(f.jsx)("div",{className:"retweet-container",children:Object(f.jsx)(E,{})}),!n.parent&&Object(f.jsxs)("div",{className:"buttons",children:[Object(f.jsxs)(j.a,{variant:d?"primary":"outline",onClick:function(e){return y("like",e)},children:[Object(f.jsx)("i",{className:"far fa-thumbs-up"}),N]}),Object(f.jsx)("div",{className:"retweet-btn",children:Object(f.jsx)(j.a,{variant:!p&&"outline",color:"success",onClick:function(e){return y("retweet",e)},children:Object(f.jsx)("i",{className:"fas fa-retweet"})})})]})]})})};var d=function(e){var t=e.tweetId,n=Object(c.useState)(!1),r=Object(i.a)(n,2),a=r[0],s=r[1],o=Object(c.useState)(null),u=Object(i.a)(o,2),j=u[0],d=u[1],O=function(e,t){200===t?(d(e),console.log(e)):alert("There was an error finding your tweet. Please try again.")};return Object(c.useEffect)((function(){!1===a&&(!function(e,t){var n="/tweets/";e&&(n+="".concat(e)),l("GET",n,t)}(t,O),s(!0))}),[s,t,a]),null===j?null:Object(f.jsx)(b,{tweet:j})},O=n(4),w=(n(18),function(e){var t=e.newTweets,n=e.setNewTweets,r=e.props,a=r.username,s=Object(c.useState)([]),o=Object(i.a)(s,2),l=o[0],j=o[1],d=Object(c.useState)(!1),w=Object(i.a)(d,2),v=w[0],p=w[1];function m(e,t){200===t?(j(e),p(!0)):alert("There was an error")}return Object(c.useEffect)((function(){t.length>0&&(j([].concat(Object(O.a)(t),Object(O.a)(l))),n([]))}),[t]),Object(c.useEffect)((function(){!1===v&&(u(a,m),p(!0))}),[l,v,p,a]),Object(f.jsx)("div",{className:"tweet_list__container",children:l.map((function(e,t){return Object(f.jsx)(b,{tweet:e,idx:t,callback:m,props:r},"".concat(t,"-{tweet.id}"))}))})});n(19),n(20);var v=function(e){var t=e.newTweets,n=e.setNewTweets,r=Object(c.useRef)(""),a=function(e,c){var r=Object(O.a)(t);201===c?(r.unshift(e),n(r)):(console.log(e),alert("An error has occurred. Please try again"))},s=function(e){e.preventDefault();var t=r.current.value;l("POST","/tweets/create/",a,{content:t}),r.current.value=""};return Object(f.jsxs)("div",{className:"tweet-form-container",children:[Object(f.jsx)("div",{className:"profile_pic",children:"IMG"}),Object(f.jsx)("div",{className:"form_container",children:Object(f.jsxs)("form",{onSubmit:function(e){return s(e)},children:[Object(f.jsx)("textarea",{ref:r,required:!0,className:"form-control"}),Object(f.jsx)(j.a,{variant:"primary",children:"Tweet"})]})})]})};var p=function(){return Object(f.jsx)("div",{children:"Hello World"})};var m=function(e){var t=Object(c.useState)([]),n=Object(i.a)(t,2),r=n[0],a=n[1];return console.log(e),Object(f.jsxs)("div",{className:"home-container",children:[Object(f.jsx)(p,{}),Object(f.jsxs)("div",{className:"twitter_feed",children:[Object(f.jsx)(v,{newTweets:r,setNewTweets:a}),Object(f.jsx)(w,{newTweets:r,setNewTweets:a,props:e})]}),Object(f.jsx)(p,{})]})},h=r.a.createElement,x=document.getElementById("root");if(x){var N=h(m,x.dataset);s.a.render(N,x)}var k=document.getElementById("tweet-detail-view");k&&s.a.render(h(d,k.dataset),k)}},[[21,1,2]]]);
//# sourceMappingURL=main.b432fd4f.chunk.js.map