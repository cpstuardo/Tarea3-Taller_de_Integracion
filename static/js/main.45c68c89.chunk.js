(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,n,t){e.exports=t(66)},35:function(e,n,t){},36:function(e,n,t){},66:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),r=t(28),c=t.n(r),i=(t(35),t(29)),u=(t(36),t(37)("wss://tarea-3-websocket.2021-1.tallerdeintegracion.cl",{path:"/flights"}));var o=function(){var e=Object(a.useState)([{code:"Sin Informaci\xf3n",airline:"",origin:[-100,-100],destination:[-100,-100],plane:"",seats:1,passengers:[{name:"",age:1}]}]),n=Object(i.a)(e,2),t=n[0],r=n[1];return Object(a.useEffect)(function(){u.on("FLIGHTS",function(e){r(e)})}),l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,"Bienvenido a Vuelos"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u.emit("FLIGHTS")}},l.a.createElement("button",null,"Solicitar informaci\xf3n de vuelos"))),l.a.createElement("div",{className:"column-info"},l.a.createElement("h2",null,"Informaci\xf3n de vuelos"),t.map(function(e,n){var t=e.code,a=e.airline,r=e.origin,c=e.destination,i=e.plane,u=e.seats,o=e.passengers;return l.a.createElement("div",{key:n},l.a.createElement("br",null),l.a.createElement("div",{className:"card"},l.a.createElement("b",null,t,"- ",a),l.a.createElement("br",null),l.a.createElement("b",null,"Origen:")," ",r.map(function(e,n){return l.a.createElement("div",{key:n},l.a.createElement("li",null,e))}),l.a.createElement("b",null,"Destino:")," ",c.map(function(e,n){return l.a.createElement("div",{key:n},l.a.createElement("li",null,e))}),l.a.createElement("b",null,"Avi\xf3n:")," ",i,l.a.createElement("br",null),l.a.createElement("b",null,"Cantidad asientos:")," ",u,l.a.createElement("br",null),l.a.createElement("b",null,"Pasajeros:")," ",o.map(function(e,n){var t=e.name,a=e.age;return l.a.createElement("div",{key:n},l.a.createElement("li",null,t," - ",a))})))})))},m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,67)).then(function(n){var t=n.getCLS,a=n.getFID,l=n.getFCP,r=n.getLCP,c=n.getTTFB;t(e),a(e),l(e),r(e),c(e)})};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(o,null)),document.getElementById("root")),m()}},[[30,1,2]]]);
//# sourceMappingURL=main.45c68c89.chunk.js.map