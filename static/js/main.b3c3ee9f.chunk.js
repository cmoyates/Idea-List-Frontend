(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{60:function(e,t,n){},61:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var c,o=n(0),s=n.n(o),i=n(13),a=n.n(i),r=(n(60),n(61),n(53)),j=n(28),l=n.n(j),u=n(37),d=n(32),h=n(125),b=n(127),f=n(128),O=n(124),p=n(123),g=n(126),m=n(51),x=n.n(m),v=n(4),y=function(e){var t=Object(o.useState)([]),n=Object(d.a)(t,2),s=n[0],i=n[1],a=Object(o.useState)(""),j=Object(d.a)(a,2),m=(j[0],j[1],Object(o.useState)("")),y=Object(d.a)(m,2),S=(y[0],y[1],function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://still-sands-81765.herokuapp.com/suggestions/",console.log(t),e.next=4,fetch(t,{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}});case 4:return n=e.sent,e.next=7,n.json();case 7:c=e.sent,console.log(c),i(c),console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return Object(o.useEffect)((function(){return S(),c=x()("https://still-sands-81765.herokuapp.com"),console.log(c),c.emit("join",(function(){console.log("Socket connection established")})),function(){c.disconnect(),c.off()}}),[]),Object(o.useEffect)((function(){c.off("suggestionAdded").on("suggestionAdded",(function(e){i([e].concat(Object(r.a)(s)))}))})),Object(v.jsx)(p.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",children:Object(v.jsxs)(p.a,{item:!0,children:[Object(v.jsx)("h1",{children:"Idea List"}),Object(v.jsx)(O.a,{style:{width:600,maxWidth:600,marginBottom:20},children:Object(v.jsx)(h.a,{children:0===s.length?Object(v.jsx)(b.a,{children:Object(v.jsx)(f.a,{children:"You don't have any ideas!"})}):s.map((function(e,t){var n=new Date(e.ts);return Object(v.jsxs)("div",{children:[Object(v.jsx)(b.a,{children:Object(v.jsxs)(f.a,{children:[Object(v.jsx)("h2",{style:{marginBottom:-5},children:e.content}),e.user_name," @ ",n.toLocaleString()]})}),s[t+1]?Object(v.jsx)(g.a,{}):null]},t)}))})})]})})};var S=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(y,{})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,129)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),s(e),i(e)}))};a.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(S,{})}),document.getElementById("root")),k()}},[[99,1,2]]]);
//# sourceMappingURL=main.b3c3ee9f.chunk.js.map