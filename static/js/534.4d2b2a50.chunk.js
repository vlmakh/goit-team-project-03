"use strict";(self.webpackChunkgoit_team_project_03=self.webpackChunkgoit_team_project_03||[]).push([[534],{3083:function(n,e,t){t.d(e,{Z:function(){return M}});var r,i=t(5705),o=t(2791),a=["title","titleId"];function s(){return s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},s.apply(this,arguments)}function l(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function u(n,e){var t=n.title,i=n.titleId,u=l(n,a);return o.createElement("svg",s({width:19,height:19,viewBox:"0 0 19 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":i},u),t?o.createElement("title",{id:i},t):null,r||(r=o.createElement("path",{d:"M17.4697 18.5303C17.7626 18.8232 18.2374 18.8232 18.5303 18.5303C18.8232 18.2374 18.8232 17.7626 18.5303 17.4697L17.4697 18.5303ZM15.25 8.5C15.25 12.2279 12.2279 15.25 8.5 15.25V16.75C13.0563 16.75 16.75 13.0563 16.75 8.5H15.25ZM8.5 15.25C4.77208 15.25 1.75 12.2279 1.75 8.5H0.25C0.25 13.0563 3.94365 16.75 8.5 16.75V15.25ZM1.75 8.5C1.75 4.77208 4.77208 1.75 8.5 1.75V0.25C3.94365 0.25 0.25 3.94365 0.25 8.5H1.75ZM8.5 1.75C12.2279 1.75 15.25 4.77208 15.25 8.5H16.75C16.75 3.94365 13.0563 0.25 8.5 0.25V1.75ZM18.5303 17.4697L14.3428 13.2821L13.2821 14.3428L17.4697 18.5303L18.5303 17.4697Z",fill:"#54ADFF"})))}var c,d=o.forwardRef(u),p=(t.p,["title","titleId"]);function h(){return h=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},h.apply(this,arguments)}function f(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function x(n,e){var t=n.title,r=n.titleId,i=f(n,p);return o.createElement("svg",h({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),t?o.createElement("title",{id:r},t):null,c||(c=o.createElement("path",{d:"M15 1L1 15M1.00004 1L15 15",stroke:"#FFC107",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var b=o.forwardRef(x),m=(t.p,t(3457)),g=(0,m.Z)("div")({border:"none",backgroundColor:"inherit",position:"absolute",right:"10px",top:"12px",display:"flex"}),v=(0,m.Z)("button")({border:"none",backgroundColor:"inherit",cursor:"pointer"}),w=(0,m.Z)("button")({border:"none",backgroundColor:"inherit",cursor:"pointer"}),j=(0,m.Z)("form")({position:"relative",maxWidth:"608px",margin:"40px auto"}),Z=(0,m.Z)("form")({position:"relative",maxWidth:"280px",margin:"24px auto 20px"}),y=(0,m.Z)("input")({fontSize:"20px;",color:"#888888",width:"100%",maxWidth:"608px",height:"44px",borderRadius:"20px",boxShadow:"3px 8px 14px rgba(136, 198, 253, 0.19)",border:"none",padding:"10px 20px",boxSizing:"border-box","&:focus-visible":{outline:"unset"}}),O=(0,m.Z)("input")({color:"#888888",width:"100%",maxWidth:"608px",fontSize:"14px;",height:"44px",boxShadow:"3px 8px 14px rgba(136, 198, 253, 0.19)",border:"none",borderRadius:"20px",padding:"13px 20px",boxSizing:"border-box","&:focus-visible":{outline:"unset"}}),C=t(5193),S=t(5218),k=t(184),M=function(n){var e=n.handleSearch,t=(0,i.TA)({initialValues:{search:""},onSubmit:function(n,t){var r=n.search;""===r.trim()||r.trim().length>50?S.Am.error("Invalid query"):e(r)}}),r=(0,C.Z)("(max-width: 767px)");return(0,k.jsx)(k.Fragment,{children:r?(0,k.jsxs)(Z,{onSubmit:t.handleSubmit,onReset:t.handleReset,children:[(0,k.jsx)(O,{id:"search",name:"search",type:"text",onChange:t.handleChange,value:t.values.search}),(0,k.jsxs)(g,{children:[t.values.search&&(0,k.jsx)(w,{type:"reset",children:(0,k.jsx)(b,{})}),(0,k.jsx)(v,{type:"submit",children:(0,k.jsx)(d,{})})]})]}):(0,k.jsxs)(j,{onSubmit:t.handleSubmit,onReset:t.handleReset,children:[(0,k.jsx)(y,{id:"search",name:"search",type:"text",onChange:t.handleChange,value:t.values.search}),(0,k.jsxs)(g,{children:[t.values.search&&(0,k.jsx)(w,{type:"reset",onClick:function(){e(""),t.resetForm()},children:(0,k.jsx)(b,{})}),(0,k.jsx)(v,{type:"submit",children:(0,k.jsx)(d,{})})]})]})})}},1534:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,i,o,a,s,l,u,c,d,p,h,f=t(3083),x=t(168),b=t(225),m=b.Z.h1(r||(r=(0,x.Z)(["\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 33px;\n  text-align: center;\n  color: #111111;\n"]))),g=t(184),v=function(){return(0,g.jsx)(m,{children:"News"})},w=t(2791),j=b.Z.ul(i||(i=(0,x.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n"]))),Z=b.Z.li(o||(o=(0,x.Z)(["\n  background: #ffffff;\n  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);\n  border-radius: 20px;\n  flex-basis: calc((100% - 20px * (1 - 1)) / 1);\n\n  @media (min-width: 768px) {\n    flex-basis: calc((100% - 20px * (2 - 1)) / 2);\n  }\n  @media (min-width: 1280px) {\n    flex-basis: calc((100% - 20px * (3 - 1)) / 3);\n  }\n"]))),y=b.Z.img(a||(a=(0,x.Z)(["\n  height: 252px;\n  min-width: 100%;\n  border-radius: 20px;\n  margin-bottom: 16px;\n"]))),O=b.Z.h2(s||(s=(0,x.Z)(["\n  font-weight: 700;\n  font-size: 24px;\n  line-height: 33px;\n  letter-spacing: -0.01em;\n  margin-bottom: 16px;\n"]))),C=b.Z.p(l||(l=(0,x.Z)(["\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 22px;\n  color: #111111;\n  margin-bottom: 40px;\n"]))),S=b.Z.div(u||(u=(0,x.Z)(["\n  padding: 12px;\n  padding-top: 0;\n"]))),k=b.Z.div(c||(c=(0,x.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),M=b.Z.span(d||(d=(0,x.Z)(["\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 22px;\n  color: #888888;\n"]))),L=b.Z.button(p||(p=(0,x.Z)(["\n  background: none;\n  border: none;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 22px;\n  color: #54adff;\n\n  &:hover,\n  :focus {\n    border-bottom: 1px solid #54adff;\n  }\n"]))),E=(b.Z.div(h||(h=(0,x.Z)(["\n  height: 8px;\n  background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);\n  border-radius: 40px;\n  margin-top: 12px;\n"]))),t(8687)),z=function(n){return n.news.newsList},R=t(7753),F=function(){var n=(0,E.useDispatch)(),e=(0,E.useSelector)(z).news;return(0,w.useEffect)((function(){n((0,R.O)())}),[n]),(0,g.jsx)(g.Fragment,{children:e&&(0,g.jsx)(j,{children:e.map((function(n){var e=n.img,t=n.title,r=n.desc,i=n.date,o=n._id;return(0,g.jsxs)(Z,{children:[(0,g.jsx)(y,{src:e,alt:"Img",width:"280",height:"252"}),(0,g.jsxs)(S,{children:[(0,g.jsx)(O,{children:t}),(0,g.jsx)(C,{children:r}),(0,g.jsxs)(k,{children:[(0,g.jsx)(M,{children:i}),(0,g.jsx)(L,{children:"Read more"})]})]})]},o)}))})})},I=function(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(v,{}),(0,g.jsx)(f.Z,{}),(0,g.jsx)(F,{})]})},_=function(){return(0,g.jsx)(I,{})}},5193:function(n,e,t){var r;t.d(e,{Z:function(){return p}});var i=t(9439),o=t(2791),a=t(9120),s=t(3073),l=t(162);function u(n,e,t,r,a){var s=o.useState((function(){return a&&t?t(n).matches:r?r(n).matches:e})),u=(0,i.Z)(s,2),c=u[0],d=u[1];return(0,l.Z)((function(){var e=!0;if(t){var r=t(n),i=function(){e&&d(r.matches)};return i(),r.addListener(i),function(){e=!1,r.removeListener(i)}}}),[n,t]),c}var c=(r||(r=t.t(o,2))).useSyncExternalStore;function d(n,e,t,r,a){var s=o.useCallback((function(){return e}),[e]),l=o.useMemo((function(){if(a&&t)return function(){return t(n).matches};if(null!==r){var e=r(n).matches;return function(){return e}}return s}),[s,n,r,a,t]),u=o.useMemo((function(){if(null===t)return[s,function(){return function(){}}];var e=t(n);return[function(){return e.matches},function(n){return e.addListener(n),function(){e.removeListener(n)}}]}),[s,t,n]),d=(0,i.Z)(u,2),p=d[0],h=d[1];return c(h,p,l)}function p(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=(0,a.Z)(),r="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,i=(0,s.Z)({name:"MuiUseMediaQuery",props:e,theme:t}),o=i.defaultMatches,l=void 0!==o&&o,p=i.matchMedia,h=void 0===p?r?window.matchMedia:null:p,f=i.ssrMatchMedia,x=void 0===f?null:f,b=i.noSsr,m=void 0!==b&&b;var g="function"===typeof n?n(t):n;g=g.replace(/^@media( ?)/m,"");var v=void 0!==c?d:u,w=v(g,l,h,x,m);return w}},162:function(n,e,t){var r=t(5721);e.Z=r.Z}}]);
//# sourceMappingURL=534.4d2b2a50.chunk.js.map