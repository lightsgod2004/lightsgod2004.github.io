(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{114:function(e,t,a){},121:function(e,t,a){},242:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),n=a(21),o=a.n(n),i=(a(114),a(8)),l=a(247),r=a(244),j=a(248),d=a(1),b=function(){return Object(d.jsx)(l.a,{collapseOnSelect:!0,fixed:"top",bg:"dark",variant:"dark",expand:"lg",children:Object(d.jsxs)(r.a,{fluid:"lg",children:[Object(d.jsx)(l.a.Brand,{href:"/",children:"Jason Mace's Portfolio"}),Object(d.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsx)(l.a.Collapse,{id:"basic-navbar-nav",children:Object(d.jsxs)(j.a,{className:"me-auto",activeKey:"/",children:[Object(d.jsx)(j.a.Link,{href:"/",children:"Home"}),Object(d.jsx)(j.a.Link,{href:"#bio-section",children:"Bio"}),Object(d.jsx)(j.a.Link,{href:"#projects-section",children:"Projects"}),Object(d.jsx)(j.a.Link,{href:"#contact-section",children:"Contact"})]})})]})})},h=(a(120),a(121),a(245)),m=a(98),u=function(){return Object(d.jsx)(r.a,{as:"section",fluid:"lg",className:"boxed-layout p-5",style:{color:"#EFEDE8"},children:Object(d.jsx)(h.a,{children:Object(d.jsx)(m.a,{children:Object(d.jsx)("h1",{style:{color:"#FF8038",textDecoration:"underline"},children:"Bio"})})})})},p=a(250),x=a(100),O=a(246),f=a(99),g=function(){return Object(d.jsxs)(r.a,{as:"section",fluid:"lg",className:"boxed-layout p-5",children:[Object(d.jsx)(h.a,{children:Object(d.jsx)(m.a,{children:Object(d.jsx)("h1",{style:{color:"#FF8038",textDecoration:"underline"},children:"Projects"})})}),Object(d.jsx)(h.a,{xs:1,md:2,lg:3,className:"g-4",children:f.projects.map((function(e){return Object(d.jsx)(m.a,{children:Object(d.jsxs)(p.a,{children:[Object(d.jsx)(x.a,{variant:"top",src:e.image}),Object(d.jsxs)(p.a.Body,{children:[Object(d.jsx)(p.a.Title,{children:e.title}),Object(d.jsx)(p.a.Text,{children:e.description}),Object(d.jsx)(O.a,{variant:"primary",href:e.link,target:"_blank",children:e.linkText})]})]})})}))})]})},y=a(249),k=a(22),v=a(101),N=a(107),w=a(108),C=a(26),F=(a(224),a(109)),E=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=(t[1],Object(c.useState)(null)),n=Object(i.a)(s,2),o=n[0],l=(n[1],C.a().shape({firstName:C.b().required("Required"),lastName:C.b().required("Required"),email:C.b().email("Invalid email").required("Required"),subject:C.b().required("Required"),content:C.b().required("Required")}));return console.log(a),console.log(o),Object(d.jsxs)(r.a,{as:"section",fluid:"lg",className:"boxed-layout p-5",children:[Object(d.jsx)(h.a,{children:Object(d.jsxs)(m.a,{children:[Object(d.jsx)("h1",{style:{color:"#FF8038",textDecoration:"underline"},children:"Contact Me"}),Object(d.jsxs)("p",{style:{color:"#EFEDE8"},children:["Fill out the below form to send me an email or find me on ",Object(d.jsx)("a",{href:"https://www.linkedin.com/in/jasonrmace/",target:"_blank",title:"LinkedIn",children:Object(d.jsx)(v.a,{icon:N.a,size:"lg"})})]})]})}),Object(d.jsxs)(h.a,{children:[Object(d.jsx)(m.a,{}),Object(d.jsx)(m.a,{md:10,lg:8,children:Object(d.jsx)(w.a,{validationSchema:l,onSubmit:function(e){console.log(e),F.a.send("service_ysjyjuo","template_7etij9p",e,"user_sLzPPIDe6tZ5N3DZzjTWd").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)}))},initialValues:{firstName:"",lastName:"",email:"",subject:"",content:""},children:function(e){var t=e.handleSubmit,a=e.handleChange,c=(e.handleBlur,e.values),s=e.touched,n=(e.isValid,e.errors);return Object(d.jsxs)(y.a,{onSubmit:t,children:[Object(d.jsxs)(h.a,{children:[Object(d.jsx)(m.a,{children:Object(d.jsx)(y.a.Group,{className:"mb-3",controlId:"formGroupFirstName",children:Object(d.jsxs)(k.a,{controlId:"formGroupFirstName",label:"First Name",children:[Object(d.jsx)(y.a.Control,{type:"text",name:"firstName",value:c.firstName,onChange:a,isValid:s.firstName&&!n.firstName,placeholder:"First Name"}),Object(d.jsx)(y.a.Control.Feedback,{type:"invalid",tooltip:!0,children:n.firstName})]})})}),Object(d.jsx)(m.a,{children:Object(d.jsx)(y.a.Group,{className:"mb-3",controlId:"formGroupLastName",children:Object(d.jsxs)(k.a,{controlId:"formGroupLastName",label:"Last Name",children:[Object(d.jsx)(y.a.Control,{type:"text",name:"lastName",value:c.lastName,onChange:a,isValid:s.lastName&&!n.lastName,placeholder:"Last Name"}),Object(d.jsx)(y.a.Control.Feedback,{type:"invalid",tooltip:!0,children:n.lastName})]})})})]}),Object(d.jsx)(h.a,{children:Object(d.jsx)(m.a,{children:Object(d.jsx)(y.a.Group,{className:"mb-3",controlId:"formGroupEmail",children:Object(d.jsxs)(k.a,{controlId:"formGroupEmail",label:"Email Address",children:[Object(d.jsx)(y.a.Control,{type:"email",name:"email",value:c.email,onChange:a,isValid:s.email&&!n.email,placeholder:"name@example.com"}),Object(d.jsx)(y.a.Control.Feedback,{type:"invalid",tooltip:!0,children:n.email})]})})})}),Object(d.jsx)(h.a,{children:Object(d.jsx)(m.a,{children:Object(d.jsx)(y.a.Group,{className:"mb-3",controlId:"formGroupSubject",children:Object(d.jsxs)(k.a,{controlId:"formGroupSubject",label:"Email Subject",children:[Object(d.jsx)(y.a.Control,{type:"text",name:"subject",value:c.subject,onChange:a,isValid:s.subject&&!n.subject,placeholder:"Email Subject"}),Object(d.jsx)(y.a.Control.Feedback,{type:"invalid",tooltip:!0,children:n.subject})]})})})}),Object(d.jsx)(h.a,{children:Object(d.jsx)(m.a,{children:Object(d.jsx)(y.a.Group,{className:"mb-3",controlId:"formGroupContent",children:Object(d.jsxs)(k.a,{controlId:"formGroupContent",label:"Email Content",children:[Object(d.jsx)(y.a.Control,{as:"textarea",name:"content",value:c.content,onChange:a,isValid:s.content&&!n.content,placeholder:"Email Content",rows:5}),Object(d.jsx)(y.a.Control.Feedback,{type:"invalid",tooltip:!0,children:n.content})]})})})}),Object(d.jsx)(h.a,{children:Object(d.jsx)(m.a,{children:Object(d.jsx)(O.a,{type:"submit",children:"Send"})})})]})}})}),Object(d.jsx)(m.a,{})]})]})},I=a.p+"static/media/mockup.b5088756.png",S=function(){return Object(d.jsx)(r.a,{as:"section",fluid:"lg",className:"boxed-layout p-5",style:{color:"#EFEDE8"},children:Object(d.jsxs)(h.a,{className:"align-items-center p-4 pb-0 pe-lg-0 pt-lg-5 rounded-3 border shadow-sm",children:[Object(d.jsxs)(m.a,{lg:7,className:"p-3 p-lg-4 pt-lg-3",children:[Object(d.jsx)("h1",{className:"jm-port-display-4 lh-1",style:{color:"#FF8038"},children:"Jason Mace"}),Object(d.jsx)("h4",{className:"lh-1",children:"Front-End Web Developer/Designer"}),Object(d.jsx)("hr",{}),Object(d.jsx)("p",{className:"lead",children:"Hi, I am Jason Mace.  Below you will find several examples of my work, as well as, more information about me. Please feel free to reach out with any questions you might have. I look forward to speaking with you soon."})]}),Object(d.jsx)(m.a,{lg:{span:4,offset:1},className:"overflow-hidden shadow-lg p-0",children:Object(d.jsx)("img",{className:"rounded-lg-3",src:I,alt:"Astros Mockup",width:"720"})})]})})},D=function(){return Object(d.jsx)("footer",{style:{backgroundColor:"#033249",color:"#EFEDE8"},children:Object(d.jsx)(r.a,{fluid:"lg",as:"section",className:"py-3",children:Object(d.jsx)(h.a,{children:Object(d.jsxs)(m.a,{children:["This page was created using ",Object(d.jsx)("a",{href:"https://reactjs.org/",target:"_blank",children:"React"})," & ",Object(d.jsx)("a",{href:"https://getbootstrap.com/",target:"_blank",children:"Bootstrap 5"}),"."]})})})})},T=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){var e=document.querySelector(".navbar");s(e.offsetHeight+parseInt(getComputedStyle(e).marginTop))})),Object(d.jsxs)("div",{className:"App",style:{marginTop:a},children:[Object(d.jsx)(b,{}),Object(d.jsx)(S,{}),Object(d.jsx)(u,{}),Object(d.jsx)(g,{}),Object(d.jsx)(E,{}),Object(d.jsx)(D,{})]})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,251)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,o=t.getTTFB;a(e),c(e),s(e),n(e),o(e)}))};o.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(T,{})}),document.getElementById("root")),G()},99:function(e){e.exports=JSON.parse('{"projects":[{"title":"Discover Our Parks","description":"DiscoverOurParks.com was founded and created by myself. Though the code is not available to the general public, feel free to have a look at the website and if you have any other questions or would like to see anything specific, please let me know.","image":"/static/media/dop1.0ff99ba1.png","link":"https://discoverourparks.com","linkText":"View this website"},{"title":"Houston Astros Management Website","description":"This is an example site created for the Houston Astros to showcase the design and look of a new management website for coaches and staff to view player stats.","image":"/static/media/AstrosPart2ScreenCapture.7797ca4d.png","link":"https://codesandbox.io/s/jason-mace-part-2-oduuj","linkText":"View this project"},{"title":"Houston Astros Player Information Image Mockup","description":"This is a web page mockup created for the Houston Astros to view player specific information, maintaining the given information in the top 1/3 of the pageview area.","image":"/static/media/Desktop1920px.2b3d20fc.png","link":"/static/media/Desktop1920px.2b3d20fc.png","linkText":"View this image"}]}')}},[[242,1,2]]]);
//# sourceMappingURL=main.a297fb4a.chunk.js.map