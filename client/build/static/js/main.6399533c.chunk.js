(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{114:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(9),r=a.n(i),s=a(17),o=a(26),l=a(70),d=a(76),u="CREATE",j="UPDATE",p="DELETE",b="FETCH_ALL",m="LIKE",h=Object(o.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return t.payload;case m:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case u:return[].concat(Object(d.a)(e),[t.payload]);case j:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case p:return e.filter((function(e){return e._id!==t.payload}));default:return e}}}),x=a(23),g=a(157),O=a(156),f=a(160),v=a(155),y=a(161),C=a(153),N=a(150),k=a(152),S=a(47),w=a(12),I=a(154),R=(a(91),a(147)),P=Object(R.a)({media:{height:"50px",paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative",width:"200px"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),E=a(3),D=function(e){var t=e.post,a=(e.setCurrentId,Object(s.b)(),P());return Object(E.jsx)("div",{style:{marginLeft:"185%"},children:Object(E.jsxs)(N.a,{className:a.card,children:[Object(E.jsx)(k.a,{className:a.media,image:t.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:t.title}),Object(E.jsx)("div",{className:a.overlay,children:Object(E.jsx)(C.a,{variant:"h6",children:t.creator})}),Object(E.jsx)("div",{className:a.details,children:Object(E.jsx)(C.a,{variant:"body2",color:"textSecondary",component:"h2",children:t.tags.map((function(e){return"#".concat(e," ")}))})}),Object(E.jsx)(C.a,{className:a.title,gutterBottom:!0,variant:"h5",component:"h2",children:t.title}),Object(E.jsxs)(I.a,{children:[Object(E.jsx)(C.a,{variant:"body2",color:"textSecondary",component:"p",children:t.Price}),Object(E.jsx)(C.a,{variant:"body2",color:"textSecondary",component:"p",children:t.Role})]})]})})},_=Object(R.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),B=function(e){var t=Object(s.c)((function(e){return e.posts})),a=Object(n.useState)(0),i=Object(x.a)(a,2),r=i[0],o=i[1],l=c.a.useState(!1),d=Object(x.a)(l,2),u=(d[0],d[1]),j=_(),p=0;Object(n.useEffect)((function(){o(p)}));var b=function(){u(!0)};return Object(E.jsxs)("div",{children:[e.setSearch?Object(E.jsx)("div",{style:{backgroundColor:"white",padding:"20px 0px",textAlign:"center",fontSize:"24px",width:"200px",margin:"10px auto 20px auto"},children:r}):null,Object(E.jsx)(v.a,{className:j.container,container:!0,alignItems:"stretch",spacing:3,children:t.filter((function(t){return t.title===e.setSearch})).map((function(t){return p++,console.log(p),Object(E.jsx)("div",{children:Object(E.jsx)(S.b,{style:{textDecoration:"none"},to:"/playerdetails",children:Object(E.jsx)(v.a,{onClick:b,item:!0,xs:12,sm:6,md:6,children:Object(E.jsx)(D,{post:t,setCurrentId:e})},t._id)})})}))})]})},T=a(19),A=a(28),W=a.n(A),L=a(41),M=a(78),F=a(158),z=a(159),U=a(75),J=a.n(U),K=Object(R.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),G=a(55),q=a.n(G),H="https://mernapp11.herokuapp.com/posts",Q=function(e){return function(){var t=Object(L.a)(W.a.mark((function t(a){var n,c;return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i=e,q.a.post(H,i);case 3:n=t.sent,c=n.data,a({type:u,payload:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}var i}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},V=function(e){var t=e.currentId,a=e.setCurrentId,c=Object(n.useState)({creator:"",title:"",Price:"",tags:"",selectedFile:"",Role:""}),i=Object(x.a)(c,2),r=i[0],o=i[1],l=Object(s.c)((function(e){return t?e.posts.find((function(e){return e._id===t})):null})),d=Object(s.b)(),u=K();Object(n.useEffect)((function(){l&&o(l)}),[l]);var j=function(){a(0),o({creator:"",title:"",Price:"",tags:"",selectedFile:"",Role:""})},p=function(){var e=Object(L.a)(W.a.mark((function e(a){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),0===t&&(d(Q(r)),j());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(E.jsx)(M.a,{className:u.paper,children:Object(E.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(u.root," ").concat(u.form),onSubmit:p,children:[Object(E.jsx)(C.a,{variant:"h6",children:t?'Editing "'.concat(l.title,'"'):"Add a Player"}),Object(E.jsx)(F.a,{name:"creator",variant:"outlined",label:"Player Name",fullWidth:!0,value:r.creator,onChange:function(e){return o(Object(T.a)(Object(T.a)({},r),{},{creator:e.target.value}))}}),Object(E.jsx)(F.a,{name:"title",variant:"outlined",label:"Team",fullWidth:!0,value:r.title,onChange:function(e){return o(Object(T.a)(Object(T.a)({},r),{},{title:e.target.value}))}}),Object(E.jsx)(F.a,{name:"Price",variant:"outlined",label:"Price",fullWidth:!0,value:r.Price,onChange:function(e){return o(Object(T.a)(Object(T.a)({},r),{},{Price:e.target.value}))}}),Object(E.jsx)(F.a,{name:"tags",variant:"outlined",label:"Playing Status",fullWidth:!0,value:r.tags,onChange:function(e){return o(Object(T.a)(Object(T.a)({},r),{},{tags:e.target.value.split(",")}))}}),Object(E.jsx)(F.a,{name:"Role",variant:"outlined",label:"Role",fullWidth:!0,value:r.Role,onChange:function(e){return o(Object(T.a)(Object(T.a)({},r),{},{Role:e.target.value}))}}),Object(E.jsx)("div",{className:u.fileInput,children:Object(E.jsx)(J.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return o(Object(T.a)(Object(T.a)({},r),{},{selectedFile:t}))}})}),Object(E.jsx)(z.a,{className:u.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(E.jsx)(z.a,{variant:"contained",color:"secondary",size:"small",onClick:j,fullWidth:!0,children:"Clear"})]})})},Y=Object(R.a)((function(){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"Teal"},heading:{color:"rgba(0,183,255, 1)"},image:{padding:"-15px"},media:{height:0,paddingTop:"60%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},title:{padding:"0 18px",alignContent:"Center"}}})),X=a.p+"static/media/ipl.c488ac2e.png";var Z=function(e){var t=Object(s.c)((function(e){return e.posts})),a=Y();return Object(E.jsxs)("div",{children:[Object(E.jsx)(O.a,{style:{position:"relative"},className:a.appBar,position:"static",color:"inherit",children:Object(E.jsx)("img",{className:a.image,src:X,alt:"icon",height:"180"})}),Object(E.jsx)(v.a,{className:a.container,container:!0,alignItems:"stretch",spacing:3,children:t.filter((function(t){return t.title===e.setSearch})).map((function(t){return Object(E.jsx)(v.a,{item:!0,xs:12,sm:6,md:6,children:Object(E.jsx)(D,{post:t,setCurrentId:e})},t._id)}))})]})},$=(a(68),function(){var e=Object(n.useState)(0),t=Object(x.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)("block"),o=Object(x.a)(r,2),l=o[0],d=o[1],u=c.a.useState(!1),j=Object(x.a)(u,2),p=j[0],m=j[1],h=Object(n.useState)(""),I=Object(x.a)(h,2),R=I[0],P=I[1],D=Object(s.b)(),_=Y();Object(n.useEffect)((function(){D(function(){var e=Object(L.a)(W.a.mark((function e(t){var a,n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q.a.get(H);case 3:a=e.sent,n=a.data,t({type:b,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[a,D]);var T=function(e){e.preventDefault(),""===e.target.search.value?d("block"):d("none")};function A(e){P(e.target.value.toUpperCase()),""===e.target.value?d("block"):d("none")}var M=function(){console.log("mi"),d("none"),P("MI")},F=function(){console.log("dc"),d("none"),P("DC")},z=function(){console.log("rc"),d("none"),P("RC")},U=function(){console.log("csk"),d("none"),P("CSK")},J=function(){m(!0)},K=function(){m(!1)};return Object(E.jsx)(S.a,{children:Object(E.jsxs)(w.c,{children:[Object(E.jsx)(w.a,{path:"/playerdetails",render:function(){return Object(E.jsx)(Z,{setSearch:R})}}),Object(E.jsx)(w.a,{path:"/",render:function(){return Object(E.jsxs)("div",{children:[Object(E.jsxs)(g.a,{maxWidth:"lg",children:[Object(E.jsxs)(O.a,{style:{position:"relative"},className:_.appBar,position:"static",color:"inherit",children:[Object(E.jsx)("img",{className:_.image,src:X,alt:"icon",height:"180"}),Object(E.jsx)("form",{onSubmit:T,style:{position:"absolute",right:"35px"},children:Object(E.jsx)("input",{onChange:A,class:"form-input",type:"text",name:"search",placeholder:"Search Team's Name"})}),Object(E.jsxs)("div",{children:[Object(E.jsx)("button",{class:"btn",type:"button",onClick:J,children:"Add Player"}),Object(E.jsx)(f.a,{open:p,onClose:K,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:Object(E.jsx)(v.a,{style:{margin:"50px auto"},item:!0,xs:12,sm:4,children:Object(E.jsx)(V,{currentId:a,setCurrentId:i})})})]})]}),Object(E.jsx)(y.a,{in:!0,children:Object(E.jsx)(g.a,{children:Object(E.jsxs)(v.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(E.jsx)(v.a,{style:{display:l,cursor:"pointer"},item:!0,xs:12,sm:3,children:Object(E.jsxs)(N.a,{onClick:M,className:_.card,children:[Object(E.jsx)(k.a,{className:_.media,image:"https://etimg.etb2bimg.com/photo/78145880.cms"}),Object(E.jsx)(C.a,{className:_.title,gutterBottom:!0,variant:"h5",component:"h2",children:"Mumbai Indians(MI)"})]})}),Object(E.jsx)(v.a,{style:{display:l,cursor:"pointer"},item:!0,xs:12,sm:3,children:Object(E.jsxs)(N.a,{onClick:F,className:_.card,children:[Object(E.jsx)(k.a,{className:_.media,image:"https://sportslightmedia.com/wp-content/uploads/2020/09/fotojet-2-jpg_710x400xt.jpg"}),Object(E.jsx)(C.a,{className:_.title,gutterBottom:!0,variant:"h5",component:"h2",children:"Delhi Capitals(DC)"})]})}),Object(E.jsx)(v.a,{style:{display:l,cursor:"pointer"},item:!0,xs:12,sm:3,children:Object(E.jsxs)(N.a,{onClick:z,className:_.card,children:[Object(E.jsx)(k.a,{className:_.media,image:"https://images.hindustantimes.com/img/2021/01/15/550x309/RR_logo_1610701396766_1610701407865.PNG"}),Object(E.jsx)(C.a,{className:_.title,gutterBottom:!0,variant:"h5",component:"h2",children:"Rajasthan Royals(RC)"})]})}),Object(E.jsx)(v.a,{style:{display:l,cursor:"pointer"},item:!0,xs:12,sm:3,children:Object(E.jsxs)(N.a,{onClick:U,className:_.card,children:[Object(E.jsx)(k.a,{className:_.media,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIxRTJzYeP2KeuP47EGuJLle7TrgRz5uULUQ&usqp=CAU"}),Object(E.jsx)(C.a,{className:_.title,gutterBottom:!0,variant:"h5",component:"h2",children:"Chennai Superkings(CSK)"})]})})]})})})]}),Object(E.jsx)(B,{setSearch:R,setCurrentId:i})]})}})]})})}),ee=Object(o.e)(h,Object(o.d)(Object(o.a)(l.a)));r.a.render(Object(E.jsx)(s.a,{store:ee,children:Object(E.jsx)($,{})}),document.getElementById("root"))},68:function(e,t,a){}},[[114,1,2]]]);
//# sourceMappingURL=main.6399533c.chunk.js.map