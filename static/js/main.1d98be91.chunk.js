(this.webpackJsonpimmobiliaria=this.webpackJsonpimmobiliaria||[]).push([[0],{23:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var i=n(2),c=n(1),a=n.n(c),s=n(13),l=n.n(s),r=n(6),o=n(3),j=n(14),u=(n(23),[{title:"About",link:"/about"},{title:"Homes",link:"/homes"},{title:"Rentals",link:"/rentals"}]);var m=function(e){var t=e.toggle,n=e.isOpen;return console.log(n),console.log(t),Object(i.jsxs)("div",{className:"dropdown",style:{opacity:n?"1":"0",top:n?"0":"-100%"},isOpen:n,onClick:t,children:[Object(i.jsx)("div",{className:"dropdown__icon",onClick:t,children:Object(i.jsx)(j.a,{className:"dropdown__iconClose"})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"dropdown__menu",children:u.map((function(e,t){return Object(i.jsx)(o.b,{to:e.link,className:"dropdown__link",children:e.title},t)}))}),Object(i.jsx)("div",{className:"dropdown__button",children:Object(i.jsx)(o.b,{to:"/contact",children:"Contact Us"})})]})]})},b=n(16);n(29);var d=function(e){var t=e.link,n=e.children;return Object(i.jsx)(o.b,{to:t,className:"button",children:n})};n(30);var h=function(e){var t=e.link,n=e.title;return Object(i.jsx)(o.b,{to:t,className:"menulink",children:n})};n(31);var p=function(e){var t=e.toggle;return Object(i.jsxs)("nav",{children:[Object(i.jsx)(o.b,{className:"nav__logo",to:"/",children:Object(i.jsx)("h2",{children:"HSH"})}),Object(i.jsx)(b.a,{className:"nav__burgerMenu",onClick:t}),Object(i.jsx)("div",{className:"nav__menu",children:u.map((function(e,t){var n=e.link,c=e.title;return Object(i.jsx)(h,{link:n,title:c},t)}))}),Object(i.jsx)("div",{className:"nav__button",children:Object(i.jsx)(d,{link:"/contacts",children:"Contact Us"})})]})},O=n(11),g=n(17);n(32);var x=function(e){var t=e.items,n=e.index,c=e.current;return Object(i.jsx)("div",{className:"slide",children:n===c&&Object(i.jsxs)("div",{className:"slide__slider",children:[Object(i.jsx)("img",{src:t.image,alt:t.alt,className:"slide__image"}),Object(i.jsxs)("div",{className:"slide__content",children:[Object(i.jsx)("h1",{children:t.title}),Object(i.jsx)("p",{children:t.price}),Object(i.jsxs)(o.b,{to:t.path,className:"button",style:{maxWidth:"160px"},children:[t.label,Object(i.jsx)(g.a,{style:{marginLeft:"0.5rem"}})]})]})]})})};n(33);var v=function(e){var t=e.slides,n=Object(c.useState)(0),a=Object(r.a)(n,2),s=a[0],l=a[1],o=t.length,j=Object(c.useRef)(null);return Object(c.useEffect)((function(){return j.current=setTimeout((function(){l(s===o-1?0:s+1)}),4e3),function(){j.current&&clearTimeout(j.current)}}),[s,o]),!Array.isArray(t)||t.length<=0?null:Object(i.jsxs)("section",{className:"slider",children:[Object(i.jsx)("div",{className:"slider__wrapper",children:t.map((function(e,t){return Object(i.jsx)(x,{index:t,items:e,current:s},t)}))}),Object(i.jsxs)("div",{className:"slider__buttons",children:[Object(i.jsx)(O.a,{className:"arrow__buttons",onClick:function(){j.current&&clearTimeout(j.current),l(0===s?o-1:s-1),console.log(s)}}),Object(i.jsx)(O.b,{className:"arrow__buttons",onClick:function(){j.current&&clearTimeout(j.current),l(s===o-1?0:s+1),console.log(s)}})]})]})},f=[{title:"Beachside Apartment in Barcelona - Spain",price:"1.800.000\u20ac",path:"/homes",label:"View Home",image:n.p+"static/media/ImageOne.5a3889dc.jpg",alt:"House"},{title:"House in San Jose - Costa Rica",price:"1.235.000\u20ac",path:"/homes",label:"View Home",image:n.p+"static/media/ImageTwo.b2ccf256.jpg",alt:"House"},{title:"Villa in Lisboa - Portugal",price:"6.890.000\u20ac",path:"/homes",label:"View Home",image:n.p+"static/media/ImageThree.b349bb3c.jpg",alt:"House"},{title:"House in Huston - Texas",price:"5.200.000\u20ac",path:"/homes",label:"View Home",image:n.p+"static/media/ImageFour.f3d40252.jpg",alt:"House"},{title:"Bungalow in New Delhi - India",price:"1.170.000\u20ac",path:"/homes",label:"View Home",image:n.p+"static/media/ImageFive.361a6407.jpg",alt:"House"},{title:"Rural Home - Nepal",price:"170.000\u20ac",path:"/homes",label:"View Home",image:n.p+"static/media/ImageSix.832b4040.jpg",alt:"House"}];var _=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],s=function(){return a(!n)};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(p,{toggle:s}),Object(i.jsx)(m,{isOpen:n,toggle:s}),Object(i.jsx)(v,{slides:f})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),i(e),c(e),a(e),s(e)}))};n(34);l.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(o.a,{children:Object(i.jsx)(_,{})})}),document.getElementById("root")),N()}},[[35,1,2]]]);
//# sourceMappingURL=main.1d98be91.chunk.js.map