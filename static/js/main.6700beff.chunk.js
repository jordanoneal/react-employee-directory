(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{16:function(e,t,n){e.exports=n(41)},21:function(e,t,n){},22:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(13),c=n.n(l),u=(n(21),n(22),n(2)),o=function(){var e=r.a.useState([]),t=Object(u.a)(e,2),n=t[0],a=t[1],l=function(){n.sort(),a(n)};return r.a.createElement("tr",null,r.a.createElement("td",{onClick:function(){return n.sort()}},"first name "),r.a.createElement("td",{onClick:function(){return l}},"last name"),r.a.createElement("td",null,"phone"),r.a.createElement("td",null,"email"),r.a.createElement("td",null,"picture"))},i=function(e){var t=r.a.useState([]),n=Object(u.a)(t,2);n[0],n[1];return r.a.createElement("tr",null,r.a.createElement("td",null,e.name.first),r.a.createElement("td",null,e.name.last),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.phone),r.a.createElement("td",null,r.a.createElement("img",{src:e.picture.thumbnail,alt:"employee"})," "))},s=n(3),m=n.n(s),f=n(14),d=n(15),E=n.n(d),p={getUsers:function(){var e=Object(f.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://randomuser.me/api/?results=20&nat=us");case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},h=function(){var e=r.a.useState([]),t=Object(u.a)(e,2),n=t[0],l=t[1];return Object(a.useEffect)((function(){p.getUsers().then((function(e){l(e.results)}))}),[]),Object(a.useEffect)((function(){return console.log(n)}),[n]),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement(o,null)),r.a.createElement("tbody",null,n.map((function(e){return r.a.createElement(i,Object.assign({key:e.id.value},e))}))))};var b=function(){return r.a.createElement(h,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.6700beff.chunk.js.map