(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(e,t,n){e.exports=n(312)},312:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(116),i=n.n(o),c=n(15),l=Object(r.createContext)({}),u=n(319),s=n(320),f=n(324),h=n(321),p=n(322),m=function(e){var t=e.post,n=e.onDelete;return a.a.createElement(a.a.Fragment,null,a.a.createElement("td",null,t.id),a.a.createElement("td",null,t.title),a.a.createElement("td",null,t.body),a.a.createElement("td",null,a.a.createElement(f.a,{variant:"danger",onClick:function(){return n(t.id)}},"X")))},d=n(117),g=n.n(d),y=n(123),v=n.n(y),E=(n(138),n(128)),b=n(323),w=n(240),x=n(241),j=n(45),L=j.b({nom:j.c().required("nom obligatoire"),prenom:j.c().required("prenom obligatoire"),age:j.a().min(18,"hjkjkjk")}),k=function(){return a.a.createElement(u.a,null,a.a.createElement(E.a,{initialValues:{nom:"",prenom:"",age:0,dateNais:null},validationSchema:L,onSubmit:function(e){return console.log(e)}},function(e){return a.a.createElement(b.a,{onSubmit:e.handleSubmit},a.a.createElement(w.a,null,a.a.createElement(x.a,{type:"text",name:"nom",value:e.values.nom,onChange:e.handleChange})),a.a.createElement(w.a,null,a.a.createElement(x.a,{type:"text",name:"prenom",value:e.values.prenom,onChange:e.handleChange})),a.a.createElement(w.a,null,a.a.createElement(x.a,{type:"text",name:"age",value:e.values.age,onChange:e.handleChange,isInvalid:!!e.errors.age}),a.a.createElement(b.a.Control.Feedback,{type:"invalid"},e.errors.age)),a.a.createElement(w.a,null,a.a.createElement(v.a,{name:"dateNais",selected:e.values.dateNais,dateFormat:"dd/MM/yyyy",className:"form-control",onChange:function(t){e.setFieldValue("dateNais",t),console.log(t)}})),a.a.createElement(w.a,null,a.a.createElement(f.a,{variant:"info",size:"sm",type:"submit"},"Enregistrer")))}))},O=function(){var e=Object(r.useContext)(l),t=e.state,n=e.dispatch,o=Object(r.useState)(!1),i=Object(c.a)(o,2),d=i[0],y=i[1],v=t.posts,E=function(){return y(!1)},b=function(e){n({type:"DELETE",payload:e}),S(1)},w=Object(r.useState)(0),x=Object(c.a)(w,2),j=x[0],L=x[1],O=Object(r.useState)(1),C=Object(c.a)(O,2),N=C[0],S=C[1],F=Object(r.useState)(12),_=Object(c.a)(F,1)[0],T=N*_,A=T-_;Object(r.useEffect)(function(){L(Math.ceil(v.length/_))},[v.length,_]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(u.a,{className:"mt-5"},a.a.createElement(s.a,{className:"no-gutters justify-content-end"},a.a.createElement(f.a,{variant:"success mb-2",size:"sm",onClick:function(){return y(!0)}},"Add User")),a.a.createElement(h.a,{striped:!0,bordered:!0},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"id"),a.a.createElement("th",null,"Title"),a.a.createElement("th",null,"Body"),a.a.createElement("th",null,"Actions"))),a.a.createElement("tbody",null,v&&v.slice(A,T).map(function(e){return a.a.createElement("tr",{key:e.id},a.a.createElement(m,{post:e,onDelete:b}))}))),a.a.createElement(g.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",pageCount:j,marginPagesDisplayed:2,pageRangeDisplayed:2,onPageChange:function(e){var t=e.selected;console.log(t),S(t+1)},containerClassName:"pagination pagination-sm justify-content-center",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",activeClassName:"active",forcePage:N-1})),a.a.createElement(p.a,{show:d,onHide:E,backdrop:"static",keyboard:!1},a.a.createElement(p.a.Header,{closeButton:!0},a.a.createElement(p.a.Title,null,"Form d'Ajout")),a.a.createElement(p.a.Body,null,a.a.createElement(k,null)),a.a.createElement(p.a.Footer,{className:"d-flex justify-content-center"},a.a.createElement(f.a,{variant:"danger",size:"sm",onClick:E},"Cancel"))))},C=n(12),N=n(36),S=n(126),F=function(e,t){switch(t.type){case"ADD":return e;case"DELETE":return console.log(t.payload),console.log(Object(N.a)({},e,{posts:e.posts.filter(function(e){return e.id!==t.payload})})),Object(N.a)({},e,{posts:e.posts.filter(function(e){return e.id!==t.payload})});case"LISTDATA":return Object(N.a)({},e,t.payload);default:return e}},_=n(127),T=n.n(_);function A(){A=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(O){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),i=new j(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return k()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=b(i,n);if(c){if(c===s)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,i),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(O){return{type:"throw",arg:O}}}e.wrap=l;var s={};function f(){}function h(){}function p(){}var m={};c(m,a,function(){return this});var d=Object.getPrototypeOf,g=d&&d(d(L([])));g&&g!==t&&n.call(g,a)&&(m=g);var y=p.prototype=f.prototype=Object.create(m);function v(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var r;this._invoke=function(a,o){function i(){return new t(function(r,i){!function r(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(f).then(function(e){s.value=e,i(s)},function(e){return r("throw",e,i,c)})}c(l.arg)}(a,o,r,i)})}return r=r?r.then(i,i):i()}}function b(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function L(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=p,c(y,"constructor",p),c(p,"constructor",h),h.displayName=c(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},v(E.prototype),c(E.prototype,o,function(){return this}),e.AsyncIterator=E,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new E(l(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},v(y),c(y,i,"Generator"),c(y,a,function(){return this}),c(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=L,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;x(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}var D={posts:[],compteur:0},P=function(e){var t=e.children;Object(r.useEffect)(function(){(function(){var e=Object(S.a)(A().mark(function e(){var t,n;return A().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("https://jsonplaceholder.typicode.com/posts");case 2:return t=e.sent,e.next=5,t.data;case 5:n=e.sent,u({type:"LISTDATA",payload:Object(N.a)({},D,{posts:Object(C.a)(n),compteur:34})});case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},[]);var n=Object(r.useReducer)(F,D),o=Object(c.a)(n,2),i=o[0],u=o[1];return a.a.createElement(a.a.Fragment,null,i.posts.length>0&&a.a.createElement(l.Provider,{value:{state:i,dispatch:u}},t))},G=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(P,null,a.a.createElement(O,null)))};n(308);i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.Fragment,null,a.a.createElement(G,null)))}},[[131,2,1]]]);
//# sourceMappingURL=main.78c7efc1.chunk.js.map