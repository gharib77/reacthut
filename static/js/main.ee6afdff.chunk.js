(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e){e.exports={users:[{id:1,nom:"jouali",prenom:"gharib",age:34,test:"2022-12-28"},{id:2,nom:"baba",prenom:"mohammed",age:34,test:"2022-12-28"},{id:3,nom:"montassir",prenom:"abderrahim",age:34,test:"2022-12-28"},{id:4,nom:"idrissi",prenom:"brahim",age:34,test:"2022-12-28"},{id:5,nom:"allouch",prenom:"farid",age:34,test:"2022-12-28"}]}},117:function(e,t,n){e.exports=n(279)},273:function(e,t,n){},279:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(102),i=n.n(o),l=n(14),c=Object(r.createContext)({}),u=n(289),s=n(290),m=n(294),h=n(291),d=n(292),f=n(287),p=n(288),g=function(e){var t=e.user,n=e.onDelete;return a.a.createElement(a.a.Fragment,null,a.a.createElement("td",null,t.id),a.a.createElement("td",null,t.nom),a.a.createElement("td",null,t.prenom),a.a.createElement("td",null,t.age),a.a.createElement("td",null,new Date(t.test).toLocaleDateString("Fr")),a.a.createElement("td",null,a.a.createElement(m.a,{variant:"light",size:"sm",onClick:function(){return n(t.id)}},a.a.createElement(f.a,{color:"red",size:20})),"\xa0\xa0",a.a.createElement(m.a,{variant:"light",size:"sm",onClick:function(){return n(t.id)}},a.a.createElement(p.a,{color:"#ffc107",size:20}))))},v=n(103),y=n.n(v),E=n(109),b=n.n(E),w=(n(127),n(114)),L=n(293),x=n(229),j=n(230),N=n(35),k=N.c({nom:N.d().required("nom obligatoire"),prenom:N.d().required("prenom obligatoire"),age:N.b().min(18,"hjkjkjk"),dateNais1:N.a().nullable().required("date obligatoire")}),O=function(){var e=Object(r.useContext)(c).dispatch;return a.a.createElement(u.a,null,a.a.createElement(w.a,{initialValues:{nom:"",prenom:"",age:0,dateNais1:null},validationSchema:k,onSubmit:function(t){if(null!==t.dateNais1){t.dateNais1.toLocaleDateString("fr-CA");var n={id:(new Date).getTime(),nom:t.nom,prenom:t.prenom,age:t.age,test:t.dateNais1.toLocaleDateString("fr-CA")};console.log(t.dateNais1.toLocaleDateString("fr-CA")),e({type:"ADD",payload:n})}}},function(e){return a.a.createElement(L.a,{onSubmit:e.handleSubmit},a.a.createElement(x.a,null,a.a.createElement(j.a,{type:"text",name:"nom",value:e.values.nom,onChange:e.handleChange,isInvalid:!!e.errors.nom}),a.a.createElement(L.a.Control.Feedback,{type:"invalid"},e.errors.nom)),a.a.createElement(x.a,null,a.a.createElement(j.a,{type:"text",name:"prenom",value:e.values.prenom,onChange:e.handleChange})),a.a.createElement(x.a,null,a.a.createElement(j.a,{type:"text",name:"age",value:e.values.age,onChange:e.handleChange,isInvalid:!!e.errors.age}),a.a.createElement(L.a.Control.Feedback,{type:"invalid"},e.errors.age)),a.a.createElement(x.a,null,a.a.createElement(b.a,{name:"dateNais",selected:e.values.dateNais1,dateFormat:"dd/MM/yyyy",className:"form-control",onChange:function(t){e.setFieldValue("dateNais1",t)},onBlur:e.handleBlur}),a.a.createElement(L.a.Text,{className:"text-danger"},e.touched.dateNais1&&e.errors.dateNais1?a.a.createElement("div",{className:"text-danger"},e.errors.dateNais1):null),"              "),a.a.createElement(x.a,null,a.a.createElement(m.a,{variant:"info",size:"sm",type:"submit"},"Enregistrer")))}))},C=(n(273),function(){var e=Object(r.useContext)(c),t=e.state,n=e.dispatch,o=Object(r.useState)(!1),i=Object(l.a)(o,2),f=i[0],p=i[1],v=t.users,E=function(){return p(!1)},b=function(e){n({type:"DELETE",payload:e}),S(1)},w=Object(r.useState)(0),L=Object(l.a)(w,2),x=L[0],j=L[1],N=Object(r.useState)(1),k=Object(l.a)(N,2),C=k[0],S=k[1],D=Object(r.useState)(12),F=Object(l.a)(D,1)[0],_=C*F,A=_-F;Object(r.useEffect)(function(){j(Math.ceil(v.length/F))},[v.length,F]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(u.a,{className:"mt-5"},a.a.createElement(s.a,{className:"no-gutters justify-content-end"},a.a.createElement(m.a,{variant:"success mb-2",size:"sm",onClick:function(){return p(!0)}},"Add User")),a.a.createElement(h.a,{striped:!0,bordered:!0,size:"sm"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"id"),a.a.createElement("th",null,"nom"),a.a.createElement("th",null,"prenom"),a.a.createElement("th",null,"age"),a.a.createElement("th",null,"date"),a.a.createElement("th",null,"Actions"))),a.a.createElement("tbody",null,v&&v.slice(A,_).map(function(e){return a.a.createElement("tr",{key:e.id},a.a.createElement(g,{user:e,onDelete:b}))}))),a.a.createElement(y.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",pageCount:x,marginPagesDisplayed:2,pageRangeDisplayed:2,onPageChange:function(e){var t=e.selected;console.log(t),S(t+1)},containerClassName:"pagination pagination-sm justify-content-center",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",activeClassName:"active",forcePage:C-1})),a.a.createElement(d.a,{show:f,onHide:E,backdrop:"static",keyboard:!1},a.a.createElement(d.a.Header,{closeButton:!0},a.a.createElement(d.a.Title,null,"Form d'Ajout")),a.a.createElement(d.a.Body,null,a.a.createElement(O,null)),a.a.createElement(d.a.Footer,{className:"d-flex justify-content-center"},a.a.createElement(m.a,{variant:"danger",size:"sm",onClick:E},"Cancel"))))}),S=n(11),D=n(34),F=n(112),_=function(e,t){switch(t.type){case"ADD":return console.log(t.payload),Object(D.a)({},e,{users:[].concat(Object(S.a)(e.users),[t.payload])});case"DELETE":return Object(D.a)({},e,{users:e.users.filter(function(e){return e.id!==t.payload})});case"LISTDATA":return Object(D.a)({},e,t.payload);default:return e}},A=n(113);function T(){T=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(k){l=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),i=new x(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return N()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var l=b(i,n);if(l){if(l===s)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=u(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(e,n,i),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(k){return{type:"throw",arg:k}}}e.wrap=c;var s={};function m(){}function h(){}function d(){}var f={};l(f,a,function(){return this});var p=Object.getPrototypeOf,g=p&&p(p(j([])));g&&g!==t&&n.call(g,a)&&(f=g);var v=d.prototype=m.prototype=Object.create(f);function y(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var r;this._invoke=function(a,o){function i(){return new t(function(r,i){!function r(a,o,i,l){var c=u(e[a],e,o);if("throw"!==c.type){var s=c.arg,m=s.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then(function(e){r("next",e,i,l)},function(e){r("throw",e,i,l)}):t.resolve(m).then(function(e){s.value=e,i(s)},function(e){return r("throw",e,i,l)})}l(c.arg)}(a,o,r,i)})}return r=r?r.then(i,i):i()}}function b(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return h.prototype=d,l(v,"constructor",d),l(d,"constructor",h),h.displayName=l(d,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,l(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},y(E.prototype),l(E.prototype,o,function(){return this}),e.AsyncIterator=E,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new E(c(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},y(v),l(v,i,"Generator"),l(v,a,function(){return this}),l(v,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=j,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;L(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}var P={users:[]},z=function(e){var t=e.children;Object(r.useEffect)(function(){(function(){var e=Object(F.a)(T().mark(function e(){var t;return T().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=A.users,u({type:"LISTDATA",payload:Object(D.a)({},P,{users:Object(S.a)(t)})});case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},[]);var n=Object(r.useReducer)(_,P),o=Object(l.a)(n,2),i=o[0],u=o[1];return a.a.createElement(a.a.Fragment,null,i.users.length>0&&a.a.createElement(c.Provider,{value:{state:i,dispatch:u}},t))},G=function(){var e=new Date;return console.log(e.toLocaleDateString()),a.a.createElement(a.a.Fragment,null,a.a.createElement(z,null,a.a.createElement(C,null)))};n(275);i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.Fragment,null,a.a.createElement(G,null)))}},[[117,2,1]]]);
//# sourceMappingURL=main.ee6afdff.chunk.js.map