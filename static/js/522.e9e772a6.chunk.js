"use strict";(self.webpackChunkgoit_team_project_03=self.webpackChunkgoit_team_project_03||[]).push([[522],{666:function(e,r,n){n.d(r,{t:function(){return a},v:function(){return s}});var o=n(4942),t=n(6934),i=n(890),a=(0,t.ZP)("form")((function(e){var r=e.theme;return(0,o.Z)({display:"flex",flexDirection:"column",gap:"24px",width:"280px",margin:"50px auto 0",boxShadow:" 3px 8px 14px rgba(136, 198, 253, 0.19)",padding:"40px 20px",borderRadius:"20px"},r.breakpoints.up("tablet"),{padding:"60px 75px",width:"608px",margin:"82px auto 0"})})),s=(0,t.ZP)(i.Z)((function(e){var r,n=e.theme;return r={letterSpacing:"0.04em",margin:"0 0 15px 0"},(0,o.Z)(r,n.breakpoints.down("tablet"),{fontSize:"24px",fontWeight:n.typography.fontWeightMedium}),(0,o.Z)(r,n.breakpoints.up("tablet"),{fontSize:"36px",fontWeight:n.typography.fontWeightMedium}),r}))},7522:function(e,r,n){n.r(r),n.d(r,{default:function(){return y}});var o=n(9439),t=n(2791),i=n(3827),a=n(3466),s=n(3400),d=n(890),l=n(3746),u=n(165),p=n(1087),c=n(5705),m=n(6727),h=n(666),f=n(4942),x=n(6934),w=n(6151),g=(0,x.ZP)(w.Z)((function(e){var r,n=e.theme;return r={},(0,f.Z)(r,n.breakpoints.down("desktop"),{margin:"40px 0 0 0"}),(0,f.Z)(r,n.breakpoints.up("desktop"),{margin:"5px 0 0 0"}),r})),Z=n(9273),b=n(8687),v=n(4217),j=n(184),P=m.Ry({email:m.Z_("Enter your email").email("Enter a valide email").required("Email is required"),password:m.Z_("Enter your password").min(3,"Password should be of minimum 3 characters length ").required("Password is required"),confirmPassword:m.Z_().oneOf([m.iH("password"),null],"Password must match").required("Confirm password is required")}),k=function(){var e=(0,t.useState)(!1),r=(0,o.Z)(e,2),n=r[0],m=r[1],f=(0,t.useState)(!1),x=(0,o.Z)(f,2),w=x[0],k=x[1],y=(0,b.useDispatch)(),C=(0,b.useSelector)(v.selectIsLoading),S=(0,c.TA)({initialValues:{email:"",password:"",confirmPassword:""},validationSchema:P,onSubmit:function(e,r){var n=e.email,o=e.password,t=r.resetForm;y((0,Z.z2)({email:n,password:o})),t()}});return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(h.t,{onSubmit:S.handleSubmit,children:[(0,j.jsx)(h.v,{component:"h2",sx:{textAlign:"center"},children:"Registration"}),(0,j.jsx)(i.Z,{fullWidth:!0,id:"email",name:"email",label:"Email",value:S.values.email,onChange:S.handleChange,error:S.touched.email&&Boolean(S.errors.email),helperText:S.touched.email&&S.errors.email}),(0,j.jsx)(i.Z,{fullWidth:!0,id:"password",name:"password",label:"Password",value:S.values.password,onChange:S.handleChange,error:S.touched.password&&Boolean(S.errors.password),helperText:S.touched.password&&S.errors.password,type:n?"text":"password",InputProps:{endAdornment:(0,j.jsx)(a.Z,{position:"end",children:(0,j.jsx)(s.Z,{"aria-label":"toggle password visibility",onClick:function(){return m((function(e){return!e}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:n?(0,j.jsx)(u.Z,{}):(0,j.jsx)(l.Z,{})})})}}),(0,j.jsx)(i.Z,{fullWidth:!0,id:"confirmPassword",name:"confirmPassword",label:"Confirm Password",value:S.values.confirmPassword,onChange:S.handleChange,error:S.touched.confirmPassword&&Boolean(S.errors.confirmPassword),helperText:S.touched.confirmPassword&&S.errors.confirmPassword,type:w?"text":"password",InputProps:{endAdornment:(0,j.jsx)(a.Z,{position:"end",children:(0,j.jsx)(s.Z,{"aria-label":"toggle password visibility",onClick:function(){return k((function(e){return!e}))},onMouseDown:function(e){e.preventDefault()},edge:"end",children:w?(0,j.jsx)(u.Z,{}):(0,j.jsx)(l.Z,{})})})}}),(0,j.jsx)(g,{type:"submit",variant:"contained",disabled:C,children:"Registration"}),(0,j.jsxs)(d.Z,{component:"p",sx:{textAlign:"center",mt:"15px",fontSize:"12px"},children:["If tou have an account. ",(0,j.jsx)(p.NavLink,{to:"/login",children:"Login"})]})]})})},y=function(){return(0,t.useEffect)((function(){document.title="YourPet | Rregister"})),(0,j.jsx)(k,{})}}}]);
//# sourceMappingURL=522.e9e772a6.chunk.js.map