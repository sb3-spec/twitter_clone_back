(this.webpackJsonpworse_twitter=this.webpackJsonpworse_twitter||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(9),r=n.n(s),a=n(2),i=n(4),o=n(5);n(16);function l(e){var t=new XMLHttpRequest;t.responseType="json",t.open("GET","http://127.0.0.1:8000/api/tweets/"),t.onload=function(){e(t.response,t.status)},t.onerror=function(){e({message:"The request was an error"},400)},t.send()}var u=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var s=n[c].trim();if(s.substring(0,e.length+1)===e+"="){t=decodeURIComponent(s.substring(e.length+1));break}}return t},j=n(1);var d=function(e){var t=e.tweet,n=(e.idx,e.loadTweets),s=e.callback,r=Object(c.useState)(!1),i=Object(a.a)(r,2),l=i[0],d=i[1],b=Object(c.useState)(!1),f=Object(a.a)(b,2),O=f[0],w=f[1],v=Object(c.useState)(!1),m=Object(a.a)(v,2),h=m[0],x=m[1],p=Object(c.useState)(t.likes),N=Object(a.a)(p,2),k=N[0],T=N[1];function g(e,c){var r=u("csrftoken");if(c.preventDefault(),"like"===e){if(l)return;d(!0),T(k+1),w(!1)}else if("dislike"===e){if(O)return;w(!0),d(!1),T(k-1)}else if("retweet"===e){if(h)return;x(!0)}console.log("".concat(e," button pressed"));var a=JSON.stringify({id:t.id,action:e}),i=new XMLHttpRequest;i.open("POST","http://127.0.0.1:8000/api/tweets/action/"),i.setRequestHeader("Content-Type","application/json"),i.setRequestHeader("X-CSRFToken",r),i.onload=function(){n(s),console.log(a)},i.send(a)}return Object(j.jsx)("div",{className:"border bg-white overall-container",children:Object(j.jsxs)("div",{className:"tweet-container",children:[Object(j.jsx)("div",{className:"tweet-content-wrapper",children:Object(j.jsx)("p",{className:"tweet-text",children:t.content})}),Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsxs)(o.a,{variant:"outline",onClick:function(e){return g("like",e)},children:[Object(j.jsx)("i",{className:"far fa-thumbs-up"}),k]}),Object(j.jsx)(o.a,{variant:"outline",onClick:function(e){return g("dislike",e)},children:Object(j.jsx)("i",{className:"far fa-thumbs-down"})}),Object(j.jsx)("div",{className:"retweet-btn",children:Object(j.jsx)(o.a,{variant:"outline",color:"success",onClick:function(e){return g("retweet",e)},children:Object(j.jsx)("i",{className:"fas fa-retweet"})})})]})]})})},b=(n(18),function(e){var t=e.newTweets,n=e.setNewTweets,s=Object(c.useState)([]),r=Object(a.a)(s,2),o=r[0],u=r[1],b=function(e,t){200===t?u(e):alert("There was an error")};return Object(c.useEffect)((function(){t.length>0&&(u([].concat(Object(i.a)(t),Object(i.a)(o))),n([]))}),[t]),Object(c.useEffect)((function(){l(b)}),[]),Object(j.jsx)("div",{className:"tweet_list__container",children:o.map((function(e,t){return Object(j.jsx)(d,{tweet:e,idx:t,loadTweets:l,callback:b},"".concat(t,"-{tweet.id}"))}))})});n(19),n(20);var f=function(e){var t=e.newTweets,n=e.setNewTweets,s=Object(c.useRef)("");return Object(j.jsxs)("div",{className:"tweet-form-container",children:[Object(j.jsx)("div",{className:"profile_pic",children:"IMG"}),Object(j.jsx)("div",{className:"form_container",children:Object(j.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault();var c={content:s.current.value,likes:0,id:1e3};s.current.value="";var r=Object(i.a)(t);r.unshift(c),n(r)}(e)},children:[Object(j.jsx)("textarea",{ref:s,required:!0,className:"form-control"}),Object(j.jsx)(o.a,{variant:"primary",children:"Send Tweet"})]})})]})};var O=function(){return Object(j.jsx)("div",{children:"Hello World"})};var w=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],s=t[1];return Object(j.jsxs)("div",{className:"home-container",children:[Object(j.jsx)(O,{}),Object(j.jsxs)("div",{className:"twitter_feed",children:[Object(j.jsx)(f,{newTweets:n,setNewTweets:s}),Object(j.jsx)(b,{newTweets:n,setNewTweets:s})]}),Object(j.jsx)(O,{})]})};var v=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(w,{})})},m=document.getElementById("root");m&&r.a.render(Object(j.jsx)(v,{}),m);var h=document.getElementById("worse-twitter");h&&r.a.render(Object(j.jsx)(b,{}),h)}},[[21,1,2]]]);
//# sourceMappingURL=main.2b9751b5.chunk.js.map