(this.webpackJsonpinstagram_clone=this.webpackJsonpinstagram_clone||[]).push([[0],{45:function(e,a,t){e.exports=t(70)},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},67:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(12),o=t.n(r),s=(t(50),t(13)),l=t(93),i=t(94),m=(t(51),t(52),t(97));var p=function(e){var a=e.username,t=e.imgUrl,n=e.caption;return c.a.createElement("div",{className:"post"},c.a.createElement("div",{className:"post_header"},c.a.createElement(m.a,{className:"post_avatar",alt:a,src:"/static/images/avatar/1.jpg"}),c.a.createElement("h3",null,a)),c.a.createElement("img",{className:"post_image",src:t}),c.a.createElement("h4",{className:"post_text"},c.a.createElement("strong",null,a,":")," ",n))},u=t(22),g=t.n(u),d=g.a.initializeApp({apiKey:"AIzaSyAJWjmW6wAeVdWmshGhAS847ywfqIjN27g",authDomain:"notify-d67f5.firebaseapp.com",databaseURL:"https://notify-d67f5.firebaseio.com",projectId:"notify-d67f5",storageBucket:"notify-d67f5.appspot.com",messagingSenderId:"447304067357",appId:"1:447304067357:web:e19ed9d241ce335d6e59f4"}).firestore(),f=g.a.auth(),h=(g.a.storage(),t(96)),E=t(95);t(67);var v=t(40);function b(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var w=Object(l.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var _=function(){var e=w(),a=c.a.useState(b),t=Object(s.a)(a,1)[0],r=Object(n.useState)([]),o=Object(s.a)(r,2),l=o[0],m=o[1],u=Object(n.useState)(!1),g=Object(s.a)(u,2),_=g[0],y=g[1],j=Object(n.useState)(""),N=Object(s.a)(j,2),S=N[0],O=N[1],C=Object(n.useState)(""),k=Object(s.a)(C,2),I=k[0],A=k[1],W=Object(n.useState)(""),x=Object(s.a)(W,2),U=x[0],B=x[1],L=Object(n.useState)(null),D=Object(s.a)(L,2),J=D[0],P=D[1],z=Object(n.useState)(!1),R=Object(s.a)(z,2),q=R[0],F=R[1];return Object(n.useEffect)((function(){var e=f.onAuthStateChanged((function(e){e?(console.log(e),P(e)):P(e)}));return function(){e()}}),[J,S]),Object(n.useEffect)((function(){d.collection("posts").onSnapshot((function(e){m(e.docs.map((function(e){return{id:e.id,post:e.data()}})))}))}),[]),c.a.createElement("div",{className:"app"},c.a.createElement(i.a,{open:_,onClose:function(){return y(!1)}},c.a.createElement("div",{style:t,className:e.paper},c.a.createElement("form",{className:"app_signup"},c.a.createElement("center",null,c.a.createElement("img",{src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:"instagram logo",className:"app_headerImage"})),c.a.createElement(h.a,{type:"text",placeholder:"username",value:S,onChange:function(e){return O(e.target.value)}}),c.a.createElement(h.a,{type:"email",placeholder:"email",value:U,onChange:function(e){return B(e.target.value)}}),c.a.createElement(h.a,{type:"password",placeholder:"password",value:I,onChange:function(e){return A(e.target.value)}}),c.a.createElement(E.a,{onClick:function(e){e.preventDefault(),f.createUserWithEmailAndPassword(U,I).then((function(e){return e.user.updateProfile({displayName:S})})).catch((function(e){return alert(e.message)}))}},"Signup")))),c.a.createElement(i.a,{open:q,onClose:function(){return F(!1)}},c.a.createElement("div",{style:t,className:e.paper},c.a.createElement("form",{className:"app_signup"},c.a.createElement("center",null,c.a.createElement("img",{src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:"instagram logo",className:"app_headerImage"})),c.a.createElement(h.a,{type:"email",placeholder:"email",value:U,onChange:function(e){return B(e.target.value)}}),c.a.createElement(h.a,{type:"password",placeholder:"password",value:I,onChange:function(e){return A(e.target.value)}}),c.a.createElement(E.a,{onClick:function(e){e.preventDefault(),f.signInWithEmailAndPassword(U,I).catch((function(e){return alert(e.message)})),F(!1)}},"Login")))),c.a.createElement("div",{className:"app_header"},c.a.createElement("img",{src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png",alt:"instagram logo",className:"app_headerImage"}),J?c.a.createElement(E.a,{onClick:function(){return f.signOut()}},"Logout"):c.a.createElement("div",{className:"login_container"},c.a.createElement(E.a,{onClick:function(){return F(!0)}},"Sign In"),c.a.createElement(E.a,{onClick:function(){return y(!0)}},"Sign up"))),(null===J||void 0===J?void 0:J.displayName)?"Connected as ".concat(J.displayName):null,c.a.createElement("div",{className:"app_posts"},c.a.createElement("div",{className:"apppost_left"},l.map((function(e){var a=e.id,t=e.post;return c.a.createElement(p,{key:a,username:t.username,imgUrl:t.imgUrl,caption:t.caption})}))),c.a.createElement("div",{className:"apppost_right"},"Wesite created By:",c.a.createElement(v.a,{url:"https://www.instagram.com/p/B4H3-i3nQY5/?utm_source=ig_web_copy_link",maxWidth:320,hideCaption:!1,containerTagName:"div",protocol:"",injectScript:!0,onLoading:function(){},onSuccess:function(){},onAfterRender:function(){},onFailure:function(){}}))))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(_,null)),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.f6c1cb02.chunk.js.map