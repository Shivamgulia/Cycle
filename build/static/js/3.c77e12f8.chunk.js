(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[3,5],{66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));n(66);var c=n(0);function r(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"About"}),Object(c.jsx)("p",{children:"Green rides is an application developed to make the renting of cycles easier just by scanning the qr code present on cycles. Students can rent the cycles from any stand and then return it to the guard present in any stand."}),Object(c.jsx)("h1",{children:"How to Use Green Rides"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"Download the Green Rides app with the link below."}),Object(c.jsx)("a",{href:"",children:"Download the App"}),Object(c.jsx)("li",{children:"Sign Up using your University email Id in the signup option. Do not use your personal email if you do you will have to uninstall and then reinstall the app. After that you will be prompted to create a password for your account, create a password and create an account."}),Object(c.jsx)("li",{children:"Now, you can eaily login with you email and password."}),Object(c.jsx)("li",{children:"To Rent a cycle just go the the rent option, scan the QR code present on the cycle and confirm that you want to rent this cycle."}),Object(c.jsx)("li",{children:"To Return the cycle just take it to the guard, he will scan the qr code with his device and return the cycle."})]})]})}function s(){return Object(c.jsx)(r,{})}},70:function(e,t,n){e.exports={auth:"AuthForm_auth__2ZSKH",control:"AuthForm_control__1evQ4",actions:"AuthForm_actions__25Vmz",toggle:"AuthForm_toggle__1Wxr6"}},75:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(1),s=n(6),i=n(29),o=n(67),a=n(5),l=n(70),u=n.n(l),h=n(0),d=function(){var e=Object(s.g)(),t=Object(r.useState)(!1),n=Object(c.a)(t,2),l=n[0],d=n[1],j=Object(r.useState)(!1),b=Object(c.a)(j,2),p=b[0],O=b[1],f=Object(r.useContext)(a.b),x=Object(r.useRef)(),m=Object(r.useRef)(),g=Object(r.useState)(!1),y=Object(c.a)(g,2),w=y[0],v=y[1];return Object(h.jsxs)(r.Fragment,{children:[Object(h.jsx)(s.b,{path:"/auth/howtouse",children:Object(h.jsx)(o.default,{})}),Object(h.jsxs)("section",{className:u.a.auth,children:[Object(h.jsx)("h1",{children:"Login"}),Object(h.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),l){var n=x.current.value,c=m.current.value;v(!0);fetch("https://app.hbtu.ac.in/users/login",{method:"POST",body:JSON.stringify({email:n,password:c}),headers:{"Content-Type":"application/json"}}).then((function(e){return v(!1),e.ok?e.json():e.json().then((function(e){var t="Authentication Failed";throw e&&e.error&&e.error.message&&(v(!1),t=e.error.message),new Error(t)}))})).then((function(t){var n=new Date((new Date).getTime()+36e6);f.login(t,c,t.token,t._id,t.role,t.cycleid,n.toISOString()),e.replace("/")})).catch((function(e){alert(e.message)}))}else alert("Verify if you are human")},children:[Object(h.jsxs)("div",{className:u.a.control,children:[Object(h.jsx)("label",{htmlFor:"email",children:"Your Email"}),Object(h.jsx)("input",{type:"userName",id:"userName",required:!0,ref:x})]}),Object(h.jsxs)("div",{className:u.a.control,children:[Object(h.jsx)("label",{htmlFor:"password",children:"Your Password"}),Object(h.jsx)("input",{type:p?"text":"password",id:"password",required:!0,ref:m})]}),Object(h.jsx)("input",{type:"checkbox",onClick:function(){p&&O(!1),p||O(!0)}})," Show Password",Object(h.jsx)("div",{className:"centered",children:Object(h.jsx)(i.a,{sitekey:"6LcU0VQjAAAAAHdKzj2Ub7RAbfQCf6QXbgOif9Le",onChange:function(e){d(!0)}})}),Object(h.jsxs)("div",{className:u.a.actions,children:[!w&&Object(h.jsx)("button",{children:"Login"}),w&&Object(h.jsx)("p",{children:"Sending Request...."})]})]}),Object(h.jsx)("div",{className:u.a.actions,children:Object(h.jsx)("button",{onClick:function(){e.push("/signup")},children:" Sign Up"})})]})]})};t.default=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(d,{})})}}}]);
//# sourceMappingURL=3.c77e12f8.chunk.js.map