(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(21)},17:function(e,t,a){},2:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(5),r=a.n(c),s=(a(17),a(1)),l=a(6),o=a(7),d=a(9),m=a(8),u=a(10),v=function(e){return i.a.createElement("div",{className:"card-body"},e.children)},f=function(e){return i.a.createElement("img",{src:e.image,alt:"Logo",className:"picture"})},g=function(e){return i.a.createElement("div",{className:"name"},e.name)},h=function(e){return i.a.createElement("div",{className:"details"},e.details)},p=function(e){var t=e.selected,a=void 0!==t&&t,n=e.onClick,c=void 0===n?function(e){return e}:n;return i.a.createElement("div",{className:a?"star selected":"star",onClick:c})},E=function(e){return i.a.createElement(v,null,i.a.createElement("div",{className:"inner-body"},i.a.createElement(f,{image:e.image}),i.a.createElement("div",{className:"body"},i.a.createElement("div",{className:"inner-body"},i.a.createElement(g,{name:e.name})),i.a.createElement(h,{details:e.details}),i.a.createElement("div",{className:"inner-body"},Object(s.a)(Array(5)).map(function(t,a){return i.a.createElement(p,{key:a,selected:a<e.starsSelected,onClick:function(){return e.change(e.id,a+1)}})})))))},b=a(2),y=a.n(b),k=a(3),w=a.n(k),N=(a(20),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={places:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.getData()}},{key:"getData",value:function(){this.setState({places:[{id:w()(),name:"16 Handles",details:"Froyo",image:y.a,starsSelected:0},{id:w()(),name:"Tasti D-Lite",details:"Froyo",image:y.a,starsSelected:0},{id:w()(),name:"Target",details:"Shopping",image:y.a,starsSelected:0}]})}},{key:"OnChange",value:function(e,t){this.setState(Object(s.a)(this.state.places).map(function(a){a.id===e&&(a.starsSelected=t)}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"main-body"},i.a.createElement("div",{className:"heading"},"Places we've been"),Object(s.a)(this.state.places).map(function(t,a){var n=t.name,c=t.image,r=t.details,s=t.starsSelected,l=t.id;return i.a.createElement(E,{key:a,name:n,details:r,image:c,starsSelected:s,id:l,change:function(t,a){return e.OnChange(t,a)}})}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.ca7dd203.chunk.js.map