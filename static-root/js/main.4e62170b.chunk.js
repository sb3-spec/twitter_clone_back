(this.webpackJsonpworse_twitter=this.webpackJsonpworse_twitter||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(11),a=n.n(r),i=n(2);var l=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var s=n[c].trim();if(s.substring(0,e.length+1)===e+"="){t=decodeURIComponent(s.substring(e.length+1));break}}return t};function o(e,t,n,c){var s;c&&(s=JSON.stringify(c));var r=new XMLHttpRequest,a="http://localhost:8000/api".concat(t),i=l("csrftoken");r.responseType="json",r.open(e,a),r.setRequestHeader("Content-Type","application/json"),i&&(r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.setRequestHeader("X-CSRFToken",i)),r.onload=function(){n(r.response,r.status)},r.onerror=function(){n({message:"The request was an error"},400)},r.send(s)}function u(e,t,n){var c="/tweets/";e&&(c+="?username=".concat(e)),null!==n&&void 0!==n&&(c=n.replace("http://localhost:8000/api","")),o("GET",c,t)}function j(e,t,n){var c="/tweets/feed/";null!==n&&void 0!==n&&(c=n.replace("http://localhost:8000/api","")),o("GET",c,t,{username:e})}function b(e,t){var n="/tweets/data/";t&&(n+="".concat(t)),o("GET",n,e)}function d(e,t,n){var c="/tweets/";null!==t&&void 0!==t&&(c+="".concat(t,"/tweets/")),null!==n&&void 0!==n&&(c=n.replace("http://localhost:8000/api","")),o("GET",c,e)}var f=n(6),O=n.n(f),m=n(8);function x(e,t,n){o(n,"/profiles/".concat(t&&t),e)}var h=n(0),v=function(e){var t=e.user,n=e.hideLink,c=e.isProfile;return c&&console.log("this is the profile pic"),n?Object(h.jsx)("div",{className:"profile__picture__shell",children:Object(h.jsx)(p,{user:t,hideLink:n,children:Object(h.jsx)("span",{className:c?"profile__large bg-dark text-white rounded-circle":"px-3 py-2 my-2 rounded-circle bg-dark text-white",children:t.username?t.username[0]:"a"})})}):Object(h.jsx)("span",{className:c?"profile__large":"px-3 py-2 my-2 rounded-circle bg-dark text-white",children:t.username?t.username[0]:"a"})},p=function(e){var t=e.user,n=e.children;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("span",{className:"pointer",onClick:function(e){e.stopPropagation(),window.location.href="/profile/".concat(t&&t.username)},children:n})})};function w(e){var t=e.user,n=e.includeFullName,c=e.hideLink,s=n?"".concat(t.first_name," ").concat(t.last_name):"".concat(t.username);return Object(h.jsxs)(h.Fragment,{children:[s," ",c?"@".concat(t.username):Object(h.jsx)(p,{user:t,children:"@".concat(t.username)})]})}function N(e){var t=e.user,n=e.banner;return Object(h.jsxs)("div",{className:"images__container",children:[Object(h.jsx)("div",{className:"profile__banner_picture",children:Object(h.jsx)("img",{className:"banner-img",src:n,alt:"mountain in front of sunset"})}),Object(h.jsx)("div",{className:"profile__picture",children:Object(h.jsx)(v,{user:t,isProfile:!0,hideLink:!0})})]})}var _=n(14),g=n.n(_),k=n.p+"static/media/forest_banner.2143f87a.jpg";n(15),n(22);var S=function(e){var t=e.user,n=e.closeModal,s=e.callback,r=Object(c.useRef)(t.username),a=Object(c.useRef)(t.bio),i=Object(c.useRef)(t.location),l=function(){return console.log(r.current.value,t.username),r.current.value!==t.username||(a.current.value!==t.bio||i.current.value!==t.location)};return Object(h.jsxs)("div",{className:"modal-container",children:[Object(h.jsx)("div",{className:"overlay"}),Object(h.jsxs)("div",{className:"edit-profile__container",children:[Object(h.jsxs)("div",{className:"edit__banner",children:[Object(h.jsx)("div",{className:"close-modal__container",children:Object(h.jsx)("span",{className:"close-modal__bg",onClick:n,children:Object(h.jsx)("i",{class:"fas fa-times close-modal"})})}),Object(h.jsx)("div",{className:"banner__text__container",children:Object(h.jsx)("p",{className:"banner__text",children:"Edit Profile"})}),Object(h.jsx)("button",{className:"save-btn",onClick:function(e){if(e.preventDefault(),l()){var t={username:r.current.value,bio:a.current.value,location:i.current.value};!function(e,t){o("POST","/profiles/edit",e,t)}(s,t)}n(e)},children:"Save"})]}),Object(h.jsx)(N,{user:t,banner:k}),Object(h.jsx)("div",{className:"profile-forms",children:Object(h.jsxs)("form",{children:[Object(h.jsxs)("div",{className:"form-container",children:[Object(h.jsx)("label",{children:"Username"}),Object(h.jsx)("textarea",{className:"edit username",ref:r,children:r.current})]}),Object(h.jsxs)("div",{className:"form-container",children:[Object(h.jsx)("label",{children:"Bio"}),Object(h.jsx)("textarea",{className:"edit bio",ref:a,children:a.current})]}),Object(h.jsxs)("div",{className:"form-container small-form",children:[Object(h.jsx)("label",{children:"Location"}),Object(h.jsx)("textarea",{className:"edit location",ref:i,children:i.current})]})]})})]})]})},T=function(e){var t=e.currUser,n=e.className,c=e.setCurrUser,s=e.setProfile;return console.log(t),t?Object(h.jsx)(U,{user:t,setProfile:s,className:n,setCurrUser:c}):Object(h.jsx)("span",{children:"User Not Found"})};function U(e){var t=Object(c.useState)(!1),n=Object(i.a)(t,2),s=n[0],r=n[1],a=e.user,l=e.setProfile,o=e.className,u=e.setCurrUser,j=function(e){e.preventDefault(),r((function(e){return!e}))};return a?Object(h.jsxs)("div",{className:"profile-container ".concat(o),children:[Object(h.jsx)(N,{user:a,banner:k}),Object(h.jsxs)("div",{className:"profile__info",children:[Object(h.jsx)("h3",{children:a.username}),Object(h.jsx)("p",{children:"@".concat(a.username)}),Object(h.jsx)("div",{className:"bio",children:a.bio}),Object(h.jsx)("div",{className:"location",children:a.location}),Object(h.jsxs)("div",{className:"follower-following-display",children:[Object(h.jsxs)("div",{className:"following-count",children:[Object(h.jsx)("p",{className:"number",children:g()(a.following_count||0).format("0a")}),Object(h.jsxs)("p",{className:"text",children:[" ","Following"," "]})]}),Object(h.jsxs)("div",{className:"follower-count",children:[Object(h.jsx)("p",{className:"number",children:g()(a.follower_count||0).format("0a")}),Object(h.jsxs)("p",{className:"text",children:[" ",1===a.follower_count?"Follower":"Followers"]})]})]})]}),Object(h.jsx)("div",{className:"profile__buttons",children:Object(h.jsx)("button",{onClick:j,className:"profile__action-button",children:"Edit Profile"})}),s&&Object(h.jsx)(S,{user:a,closeModal:j,setProfile:l,callback:function(e,t){200===t&&u(e),window.location.href="/profile/".concat(e.username)}})]}):null}n(23);var C=function(e){var t=e.tweet,n=e.currentUser,s=e.setIsDeleted,r=Object(c.useState)(!1),a=Object(i.a)(r,2),l=a[0],u=a[1],j=Object(c.useState)([]),b=Object(i.a)(j,2),d=b[0],f=b[1],O=Object(c.createRef)();function m(e){var c=e.content,r=function(e,t){200===t&&s(!0)};return Object(h.jsx)("div",{className:"option",onClick:function(e){e.preventDefault(),e.stopPropagation(),u(!1),"Delete Tweet"===c&&function(e,t,n){var c="/tweets/";t&&(c+="".concat(t,"/delete/")),o("POST",c,e,{username:n})}(r,t.id,n)},children:Object(h.jsx)("p",{className:"option__content",children:c})})}return window.addEventListener("mousedown",(function(e){O.current&&!O.current.contains(e.target)&&(e.preventDefault(),e.stopPropagation(),u(!1))})),Object(c.useEffect)((function(){t.user&&(t.user.username!==n?f(["Report Tweet","Block @".concat(t.user.username),"Follow @".concat(t.user.username)]):f(["Delete Tweet","Pin to profile"]))}),[f,n,t.user]),l?Object(h.jsx)("div",{className:"modal__background",children:Object(h.jsx)("div",{className:"options-btn__toggled",ref:O,children:d.map((function(e){return Object(h.jsx)(m,{content:e,currentUser:n})}))})}):Object(h.jsx)("div",{onClick:function(e){e.stopPropagation(),e.preventDefault(),u(!0)},className:"options-btn__untoggled",children:Object(h.jsx)("i",{className:"fas fa-ellipsis-h options-icon"})})};n(24);var D=function e(t){var n=t.tweet,s=t.className,r=t.currentUser,a=(t.nextUrl,Object(c.useState)(!1)),l=Object(i.a)(a,2),u=l[0],j=l[1],d=Object(c.useState)(!1),f=Object(i.a)(d,2),N=f[0],_=f[1],g=Object(c.useState)(n.likes?n.likes:0),k=Object(i.a)(g,2),S=k[0],T=k[1],U=Object(c.useState)(!1),D=Object(i.a)(U,2),R=D[0],P=D[1],E=Object(c.useState)(),L=Object(i.a)(E,2),y=(L[0],L[1]),H=Object(c.useState)(!1),M=Object(i.a)(H,2),F=M[0],q=M[1],G=Object(c.useState)(!1),I=Object(i.a)(G,2),B=I[0],X=I[1],A=function(e){e.preventDefault(),e.stopPropagation(),window.location.href="/".concat(n.id)},J=function(e,t){403===t?window.location.href="/login/":404!==t&&b(K,n.id)};function W(e,t){t.stopPropagation(),t.preventDefault();var c=e;if("like"===e)u&&(c="unlike");else if("retweet"===e&N)return;!function(e,t,n,c){o("POST","/tweets/action/",n,{id:e,action:t,username:c})}(n.id,c,J)}var z=function(t){t.callback;return n.parent?Object(h.jsxs)("div",{onClick:function(e){return A(e)},children:[console.log(n.user),Object(h.jsxs)("p",{className:"retweet-header",children:["retweeted by ",Object(h.jsx)(p,{user:n.user,children:n.user.username})]}),Object(h.jsx)(e,{tweet:n.parent,className:n.content?"retweet":"retweet no-border",currentUser:r})]}):null},K=function(e,t){200===t?(_(e.didRetweet),j(e.didLike),T(e.likes),X(!0),0===e.likes&&j(!1)):console.log(e,t)},Q=function(e,t){200===t?(y(e),q(!0)):console.log(e,t)};return Object(c.useEffect)((function(){var e=!0,t=function(){var t=Object(m.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:B||b(K,n.id),F||x(Q,n.user.username,"GET");case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return t(),function(){e=!1}}),[F,B,n]),!R&&(n.content||n.parent)&&Object(h.jsxs)("div",{className:s+" overall-container",onClick:function(e){return A(e)},children:[!n.parent&&Object(h.jsxs)("div",{className:"profile-container d-flex",children:[Object(h.jsx)("div",{className:"mx-1 profile-picture",children:n.user?Object(h.jsx)(p,{children:Object(h.jsx)(v,{user:n.user})}):"Loading..."}),Object(h.jsx)("p",{className:"tweet-header",children:Object(h.jsx)(w,{user:n.user})}),Object(h.jsx)(C,{tweet:n,currentUser:r,setIsDeleted:P})]}),Object(h.jsxs)("div",{className:"tweet-container",children:[""!==n.content&&Object(h.jsx)("div",{className:"tweet-content-wrapper",children:Object(h.jsx)("p",{className:"tweet-text",children:"".concat(n.content)})}),n.parent?Object(h.jsx)("div",{className:"retweet-container",children:Object(h.jsx)(z,{})}):Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)("i",{className:N?"fas fa-retweet btn-icon rt-icon text-green":"fas fa-retweet btn-icon rt-icon",onClick:function(e){return W("retweet",e)}}),Object(h.jsxs)("div",{className:"like-btn__container",children:[Object(h.jsx)("i",{className:u?"fas fa-heart btn-icon like-icon red-text":"far fa-heart btn-icon like-icon",onClick:function(e){return W("like",e)}}),S]})]})]})]})};n(25);var R=function(e){var t=e.tweetId,n=Object(c.useState)(!1),s=Object(i.a)(n,2),r=s[0],a=s[1],l=Object(c.useState)(),u=Object(i.a)(l,2),j=u[0],b=u[1],d=Object(c.useState)(null),f=Object(i.a)(d,2),O=f[0],m=f[1],x=function(e,t){200===t&&m(e)},v=function(e,t){200===t&&b(e.username)};return Object(c.useEffect)((function(){!1===r&&(!function(e,t){var n="/tweets/";e&&(n+="".concat(e)),o("GET",n,t,{tweet_id:e})}(t,x),o("GET","/users/auth/",v),a(!0))}),[a,t,r]),null!==O&&Object(h.jsx)("div",{className:"detail-container",children:Object(h.jsx)("div",{className:"d-flex",children:Object(h.jsx)("div",{className:"col-11",children:Object(h.jsx)(D,{tweet:O,currentUser:j})})})})},P=n(9),E=n(3),L=n(5);var y=function(){return Object(h.jsx)("div",{})},H=(n(26),n(13),function(e){var t=e.newTweets,n=e.setNewTweets,s=e.tweets,r=e.setTweets,a=e.username,i=e.tweetsDidSet,l=e.callback,o=e.nextUrl,u=e.handleLoadNextResponse;return Object(c.useEffect)((function(){t.length>0&&(r([].concat(Object(L.a)(t),Object(L.a)(s))),n([]))}),[t]),Object(c.useEffect)((function(){var e=!0,t=function(){var t=Object(m.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:i||j(a,l);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return t(),function(){e=!1}}),[i,a,l]),Object(h.jsxs)("div",{className:"tweet_feed__container",children:[s.map((function(e,t){return Object(h.jsx)(D,{tweet:e,idx:t,callback:l,currentUser:a,nextUrl:o},"".concat(t,"-{tweet.id}"))})),null!==o&&Object(h.jsx)("button",{className:"btn btn-outline btn-primary",onClick:function(e){e.preventDefault(),null!==o&&j(a,u,o)},children:"Load More"})]})});n(27);var M=function(e){var t=e.currUser;console.log(t);var n=t&&t.username,s=Object(c.useRef)(""),r=function(t,n){var c=Object(L.a)(e.newTweets);201===n?(c.unshift(t),e.setNewTweets(c),u(e.username,e.callback)):alert("An error has occurred. Please try again")};return Object(h.jsxs)("div",{className:"tweet-form__container-outer",children:[Object(h.jsxs)("div",{className:"tweet-form__container-inner",children:[Object(h.jsx)("div",{className:"profile__container",children:Object(h.jsx)(v,{user:t||{username:"anon"}})}),Object(h.jsxs)("form",{className:"tweet-form",children:[Object(h.jsx)("label",{className:""}),Object(h.jsx)("textarea",{placeholder:"What's happening?",ref:s,required:!0,className:"tweet-form__textarea"})]})]}),Object(h.jsx)("div",{className:"tweet-form__buttons",children:Object(h.jsx)("button",{className:"tweet-form__submit",onClick:function(e){e.preventDefault();var t=s.current.value;""!==t&&o("POST","/tweets/create/",r,{content:t,username:n}),s.current.value=""},children:"Tweet"})})]})},F=function(e){var t=e.newTweets,n=e.setNewTweets,s=e.tweets,r=e.setTweets,a=e.username,i=e.tweetsDidSet,l=e.callback,o=e.nextUrl,j=e.handleLoadNextResponse;return Object(c.useEffect)((function(){t.length>0&&(r([].concat(Object(L.a)(t),Object(L.a)(s))),n([]))}),[t,s,r,n]),Object(c.useEffect)((function(){!1===i&&u(a,l)}),[i,a,l]),Object(h.jsxs)("div",{className:"tweet_feed__container",children:[s.map((function(e,t){return Object(h.jsx)(D,{tweet:e,idx:t,callback:l,currentUser:a},"".concat(t,"-{tweet.id}"))})),null!==o&&Object(h.jsx)("button",{className:"btn btn-outline btn-primary",onClick:function(e){e.preventDefault(),null!==o&&u(a,j,o)},children:"Load More"})]})};n(28);var q=function(e){var t=e.currUser,n=e.newTweets,c=e.setNewTweets,s=e.tweets,r=e.setTweets,a=e.tweetsDidSet,i=e.callback,l=e.setTweetsDidSet,o=e.nextUrl,u=e.handleLoadNextResponse;return Object(h.jsxs)("div",{className:"twitter_feed",children:[Object(h.jsx)("div",{className:"home__header",children:Object(h.jsx)("p",{className:"header__content",children:"Home"})}),Object(h.jsxs)("div",{className:"twitter-feed__container",children:[Object(h.jsx)(M,{currUser:t,newTweets:n,setNewTweets:c,tweets:s,setTweets:r,tweetsDidSet:a,callback:i}),t?Object(h.jsx)(H,{newTweets:n,setNewTweets:c,tweets:s,setTweets:r,username:t,tweetsDidSet:a,setTweetsDidSet:l,callback:i,nextUrl:o,handleLoadNextResponse:u}):Object(h.jsx)(F,{newTweets:n,setNewTweets:c,tweets:s,setTweets:r,username:t,tweetsDidSet:a,setTweetsDidSet:l,callback:i,nextUrl:o,handleLoadNextResponse:u})]})]})};var G=function(e){var t=Object(c.useState)([]),n=Object(i.a)(t,2),s=n[0],r=n[1],a=Object(c.useState)(!1),l=Object(i.a)(a,2),o=l[0],u=l[1],j=Object(c.useState)(!0),b=Object(i.a)(j,2),f=b[0],O=b[1],m=Object(c.useState)(),x=Object(i.a)(m,2),v=x[0],p=x[1],w=e.user,N=e.handleLoadNextResponse,_=e.callback,g=function(e,t){console.log(e),200===t&&(r(e.results),u(!0),p(e.next))};return Object(c.useEffect)((function(){var e=!0;return!0===e&&w&&(d(g,w.username),O(!1)),function(){e=!1}}),[O,N,w]),!f&&o?Object(h.jsxs)("div",{className:"tweet_feed__container",children:[s.map((function(e,t){return Object(h.jsx)(D,{tweet:e,idx:t,callback:_,currentUser:w},"".concat(t,"-{tweet.id}"))})),null!==v&&Object(h.jsx)("button",{className:"btn btn-outline btn-primary",onClick:function(e){e.preventDefault(),e.stopPropagation(),null!==v&&d(N,w.username,v)},children:"Load More"})]}):null};n(29);var I=function(e){var t=e.currUser,n=e.className,c=e.handleLoadNextResponse,s=e.nextUrl,r=e.callback,a=e.setCurrUser;return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"profile__header",children:Object(h.jsx)("p",{className:"profile__content",children:t?t.username:""})}),Object(h.jsxs)("div",{className:"profile__body",children:[Object(h.jsx)("div",{className:"profile",children:Object(h.jsx)(T,{currUser:t,className:n,handleLoadNextResponse:c,setCurrUser:a})}),Object(h.jsx)(G,{user:t,handleLoadNextResponse:c,nextUrl:s,callback:r})]})]})};n(30);var B=function(e){var t=e.currentUser;function n(e){var t=e.content,n=e.currentUser,s=Object(c.useState)("/"),r=Object(i.a)(s,2),a=r[0],l=r[1],o=Object(c.useState)(""),u=Object(i.a)(o,2),j=u[0],b=u[1],d=Object(c.useState)(!1),f=Object(i.a)(d,2),O=f[0],m=f[1];return Object(c.useEffect)((function(){"Profile"===t?l("/profile/".concat(n.username)):"Settings"===t?l("/settings"):"Messages"===t&&l("/messages")}),[t,n]),Object(c.useEffect)((function(){var e=window.location.href;e.includes("settings")?b("Settings"):e.includes("messages")?b("Messages"):e.includes("profile")?b("Profile"):"http://localhost:3000/"===e&&b("Home"),m(t===j)}),[j,t,O]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(P.b,{className:"navbar__link",to:a,children:Object(h.jsxs)("div",{className:"navbar__list-item ".concat(O&&"bold"),children:[Object(h.jsx)("div",{className:"list-item__icon",children:"Home"===t?Object(h.jsx)("i",{className:"fas fa-home text-thin"}):"Profile"===t?O?Object(h.jsx)("i",{className:"fas fa-user-circle"}):Object(h.jsx)("i",{class:"far fa-user-circle"}):"Settings"===t?O?Object(h.jsx)("i",{className:"fas fa-cog bold"}):Object(h.jsx)("i",{class:"fas fa-cog"}):"Messages"===t?O?Object(h.jsx)("i",{className:"fas fa-envelope"}):Object(h.jsx)("i",{className:"far fa-envelope"}):void 0}),Object(h.jsx)("div",{className:"list-item__content",children:t&&t})]})})})}return Object(h.jsx)("div",{className:"navbar__container__outer",children:Object(h.jsx)("div",{className:"navbar__container__inner",children:Object(h.jsxs)("ul",{className:"navbar__list",children:[Object(h.jsx)("li",{className:"navbar__header",children:Object(h.jsx)("i",{onClick:function(e){e.stopPropagation(),e.preventDefault(),"http://localhost:3000/"!==window.location.href&&(window.location.href="/")},className:"fab fa-twitter twitter-icon"})}),["Home","Profile","Messages","Settings"].map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(n,{content:e,currentUser:t})})}))]})})})};var X=function(e){var t=e.user;console.log(t);var n=Object(c.useState)([]),s=Object(i.a)(n,2),r=s[0],a=s[1],l=Object(c.useState)([]),u=Object(i.a)(l,2),j=u[0],b=u[1],d=Object(c.useState)(!1),f=Object(i.a)(d,2),x=f[0],v=f[1],p=Object(c.useState)(),w=Object(i.a)(p,2),N=w[0],_=w[1],g=Object(c.useState)(),k=Object(i.a)(g,2),S=k[0],T=k[1],U=Object(c.useState)("Home"),C=Object(i.a)(U,2),D=C[0],R=C[1],P=Object(c.useState)(!1),H=Object(i.a)(P,2),M=H[0],F=H[1];function G(e,t){200===t?(b(e.results),v(!0),_(e.next)):alert("There was an error")}var X=function(e,t){if(200===t){var n=Object(L.a)(j).concat(e.results);b(n),_(e.next)}else alert("There was an error")},A=function(e,t){console.log(e),200===t?T(e):window.location.href="/register"};return Object(c.useEffect)((function(){var e=!0,t=function(){var t=Object(m.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:o("GET","/profiles/auth",A);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return M||(t(),F(!0)),function(){e=!1}}),[M]),Object(h.jsxs)("div",{className:"home-container",children:[Object(h.jsx)(B,{setCurrentSection:R,currentSection:D,currentUser:S}),Object(h.jsxs)(E.c,{children:[Object(h.jsx)(E.a,{exact:!0,path:"/",element:Object(h.jsx)(q,{currUser:S,newTweets:r,setNewTweets:a,tweets:j,setTweets:b,tweetsDidSet:x,callback:G,setTweetsDidSet:v,nextUrl:N,handleLoadNextResponse:X})}),Object(h.jsx)(E.a,{path:"profile/".concat(S?S.username:""),element:Object(h.jsx)(I,{currUser:S,callback:G,setCurrUser:T,className:"profile-view",handleLoadNextResponse:X})}),Object(h.jsx)(E.a,{exact:!0,path:"messages",element:Object(h.jsx)(y,{})}),Object(h.jsx)(E.a,{exact:!0,path:"settings"})]})]})};n(31);var A=function(e){var t=e.callback,n=e.setCurrUser,s=Object(c.useState)(""),r=Object(i.a)(s,2),a=r[0],l=r[1],u=Object(c.useRef)(""),j=Object(c.useRef)(""),b=function(e,t){console.log(e,t),200===t?(n(e),window.location.href="/"):500!==t&&l(e.details)};return Object(h.jsx)("div",{className:"login__outer",children:Object(h.jsxs)("div",{className:"login__inner",children:[a&&Object(h.jsx)("div",{children:a}),Object(h.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),0!==u.current.value.length&&0!==j.current.value.length){var t={username:u.current.value,password:j.current.value};!function(e,t){o("POST","/auth/login",e,t)}(b,t)}else l("Both fields must be filled in")},children:[Object(h.jsxs)("div",{className:"form__item",children:[Object(h.jsx)("label",{children:"Username"}),Object(h.jsx)("input",{ref:u})]}),Object(h.jsxs)("div",{className:"form__item",children:[Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("input",{ref:j})]}),Object(h.jsx)("button",{type:"submit",children:"Login"})]}),Object(h.jsxs)("div",{children:["Don't have an account?",Object(h.jsx)("p",{onClick:t,children:"Register Here"})]})]})})};var J=function(){return Object(h.jsx)("div",{})};var W=function(e){e.currUser;var t=e.setCurrUser,n=Object(c.useState)(!0),s=Object(i.a)(n,2),r=s[0],a=s[1],l=function(e){e.preventDefault(),a((function(e){return!e}))};return Object(h.jsx)("div",{className:"auth__outer",children:Object(h.jsx)("div",{className:"auth__inner",children:r?Object(h.jsx)(A,{callback:l,setCurrUser:t}):Object(h.jsx)(J,{callback:l,setCurrUser:t})})})};var z=function(){var e=Object(c.useState)(),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(P.a,{children:Object(h.jsxs)(E.c,{children:[Object(h.jsx)(E.a,{exact:!0,path:"/auth",element:Object(h.jsx)(W,{setCurrUser:s,currUser:n})}),Object(h.jsx)(E.a,{exact:!0,path:"/",element:Object(h.jsx)(X,{currUser:n})})]})})})},K=s.a.createElement,Q=document.getElementById("root");Q&&a.a.render(Object(h.jsx)(z,{}),Q);var V=document.getElementById("global_tweets");V&&a.a.render(Object(h.jsx)(F,{}),V);var Y=document.getElementById("tweet-detail-view");Y&&a.a.render(K(R,Y.dataset),Y),document.querySelectorAll(".twitter-profile-badge").forEach((function(e){a.a.render(K(I,e.dataset),e)}))}],[[32,1,2]]]);
//# sourceMappingURL=main.4e62170b.chunk.js.map