(function(t){function e(e){for(var o,i,s=e[0],c=e[1],u=e[2],f=0,l=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&l.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(l.length)l.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(o=!1)}o&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},i={app:0},r={app:0},a=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-0e3e7f34":"311859a1","chunk-2d0e95df":"9bc2b220","chunk-4d640cd0":"ad59ea71","chunk-d9712282":"9e3ab338"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-0e3e7f34":1,"chunk-4d640cd0":1,"chunk-d9712282":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-0e3e7f34":"9196ef73","chunk-2d0e95df":"31d6cfe0","chunk-4d640cd0":"62ca7c0d","chunk-d9712282":"8b3faa7e"}[t]+".css",r=c.p+o,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var u=a[s],f=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(f===o||f===r))return e()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){u=l[s],f=u.getAttribute("data-href");if(f===o||f===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var o=e&&e.target&&e.target.src||r,a=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete i[t],d.parentNode.removeChild(d),n(a)},d.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){i[t]=0})));var o=r[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise((function(e,n){o=r[t]=[e,n]}));e.push(o[2]=a);var u,f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=s(t);var l=new Error;u=function(e){f.onerror=f.onload=null,clearTimeout(d);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,n[1](l)}r[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:f})}),12e4);f.onerror=f.onload=u,document.head.appendChild(f)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],f=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var d=f;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{mode:"out-in"}},[n("Main")],1)},r=[],a=(n("b0c0"),n("5530")),s=n("2f62"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("div",[n("v-app-bar",{attrs:{color:"deep-purple accent-4",dark:""}},[n("div",{staticStyle:{width:"100%",display:"flex","justify-content":"space-between","align-items":"center"}},[n("v-toolbar-title",[t._v("InnKeep")]),n("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[t.is_authenticated?n("v-btn",{staticStyle:{"margin-right":"16px"},on:{click:function(e){return t.$store.dispatch("open_create_institution_form")}}},[t._v("Create Institution")]):t._e(),t.is_authenticated?n("v-btn",{on:{click:t.logout}},[t._v("Logout")]):t._e()],1)],1)]),n("v-main",[n("router-view"),t.$store.state.show_create_institution_form?n("create-institution",{on:{close:function(e){return t.$store.dispatch("close_create_institution_form")}}}):t._e()],1)],1)])},u=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"space-around"}},[n("v-col",{attrs:{cols:"auto"}},[n("v-dialog",{attrs:{"max-width":"600",value:!0},scopedSlots:t._u([{key:"default",fn:function(){return[n("v-card",[n("v-toolbar",{attrs:{color:"primary",dark:""}},[t._v(" New Institution ")]),n("v-card-text",[n("div",[n("v-text-field",{attrs:{label:"Name*","hide-details":"auto"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),n("v-select",{attrs:{items:t.$store.getters["institution_types"],label:"Institution Type*"},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}}),n("v-text-field",{attrs:{label:"Total Resources"},model:{value:t.form.total_resources,callback:function(e){t.$set(t.form,"total_resources",e)},expression:"form.total_resources"}})],1)]),n("v-card-actions",{staticClass:"justify-end"},[n("v-btn",{staticStyle:{"margin-right":"12px"},attrs:{text:"",disabled:t.saving},on:{click:function(e){return t.$emit("close")}}},[t._v("Close ")]),n("v-btn",{attrs:{text:"",disabled:t.saving||t.is_save_disabled,loading:t.saving},on:{click:t.save}},[t._v("Save")])],1)],1)]},proxy:!0}])})],1)],1)},l=[],d=n("260b"),h=(n("ea7b"),n("e71f"),{apiKey:"AIzaSyAzKwxsGXcfgPExNEOAUWWRhIWcCOOh7rk",authDomain:"innkeep-13353.firebaseapp.com",databaseURL:"https://innkeep-13353-default-rtdb.firebaseio.com",projectId:"innkeep-13353",storageBucket:"innkeep-13353.appspot.com",messagingSenderId:"797260103533",appId:"1:797260103533:web:6873599abe9c98d3a0a464",measurementId:"G-QQLVYTKCED"});d["a"].initializeApp(h);var p=d["a"].firestore(),m=d["a"].auth(),_=(p.collection("rooms"),p.collection("users")),g=p.collection("institution_types"),v=p.collection("institutions"),b={data:function(){return{saving:!1,form:{name:"",type:"",total_resources:null}}},computed:{is_save_disabled:function(){return!this.form.name||!this.form.type}},methods:{save:function(){var t=this;this.saving=!0,v.doc().set({name:this.form.name,type:this.form.type,total_resources:this.form.total_resources}).then((function(){console.log("Document successfully written!"),t.$store.dispatch("AdminDashboard/fetch_institutions"),t.$emit("close")})).catch((function(e){console.error("Error writing document: ",e),t.saving=!1}))}}},T=b,S=n("2877"),y=n("6544"),E=n.n(y),I=n("8336"),w=n("b0af"),O=n("99d9"),k=n("62ad"),N=n("169a"),A=n("0fd9"),x=n("b974"),U=n("8654"),j=n("71d9"),C=Object(S["a"])(T,f,l,!1,null,null,null),R=C.exports;E()(C,{VBtn:I["a"],VCard:w["a"],VCardActions:O["a"],VCardText:O["b"],VCol:k["a"],VDialog:N["a"],VRow:A["a"],VSelect:x["a"],VTextField:U["a"],VToolbar:j["a"]});var $={components:{CreateInstitution:R},computed:{is_authenticated:function(){return this.$store.getters["is_authenticated"]}},methods:{logout:function(){this.$store.dispatch("AuthStore/logout",{})}}},P=$,V=n("7496"),D=n("40dc"),L=n("f6c4"),F=n("2a7f"),G=Object(S["a"])(P,c,u,!1,null,null,null),M=G.exports;E()(G,{VApp:V["a"],VAppBar:D["a"],VBtn:I["a"],VMain:L["a"],VToolbarTitle:F["a"]});var H={name:"App",components:{Main:M},mounted:function(){this.check_authenticated()},computed:Object(a["a"])({},Object(s["c"])("AuthStore",["is_authenticated"])),created:function(){this.$store.dispatch("fetch_institution_types")},methods:{check_authenticated:function(){this.$auth.is_authenticated()||"signin"==this.$route.name||"signup"==this.$route.name||this.$router.push({name:"signin"})}},watch:{}},B=H,W=Object(S["a"])(B,i,r,!1,null,null,null),K=W.exports,Y=n("9483");Object(Y["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("99af"),n("d3b7");var q=n("2909"),z=n("8c4f"),J=[{name:"signin",path:"/login",component:function(){return n.e("chunk-4d640cd0").then(n.bind(null,"3cd4"))}},{name:"signup",path:"/register",component:function(){return n.e("chunk-0e3e7f34").then(n.bind(null,"490e"))}}],Q=[{name:"home",path:"/admin",component:function(){return n.e("chunk-d9712282").then(n.bind(null,"e96c"))}}];o["default"].use(z["a"]);var X=[].concat(Object(q["a"])(J),Object(q["a"])(Q),[{path:"*",component:function(){return n.e("chunk-2d0e95df").then(n.bind(null,"8cdb"))}}]),Z=new z["a"]({mode:"history",base:"/",routes:X}),tt=Z,et=(n("d81d"),n("b64b"),n("96cf"),n("1da1")),nt=n("2591"),ot={user:{authenticated:!1},login:function(t){var e=t.email,n=t.password;return new Promise((function(t,o){nt["a"].auth().signInWithEmailAndPassword(e,n).then((function(e){var n=e.user;t(n)})).catch((function(t){o(t)}))}))},register:function(t){var e=t.email,n=t.password;return new Promise((function(t,o){nt["a"].auth().createUserWithEmailAndPassword(e,n).then((function(n){var o=n.user;_.doc(o.uid).set({email:e,name:"DUMMY"}).then((function(){t(o)}))})).catch((function(t){o(t)}))}))},logout:function(){return Object(et["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:m.signOut().then((function(){ut.commit("SET_USER",{}),tt.push({name:"signin"})})).catch((function(){}));case 1:case"end":return t.stop()}}),t)})))()},is_authenticated:function(){return m.currentUser}},it={namespaced:!0,state:{user:null,loading:!1},getters:{get_user:function(t){return t.user},is_authenticated:function(t){return!!t.user},loading:function(t){return t.loading}},mutations:{SET_USER:function(t,e){var n=e.user;o["default"].set(t,"user",n)},SET_LOADING:function(t,e){o["default"].set(t,"loading",e)}},actions:{signUserIn:function(t,e){var n=t.commit,o=t.dispatch,i=e.email,r=e.password;return new Promise((function(t,e){n("SET_LOADING",!0),ot.login({email:i,password:r}).then((function(e){n("SET_USER",e),o("fetchUserInfo",e,{root:!0}),t()})).catch((function(t){e(t)})).finally((function(){n("SET_LOADING",!1)}))}))},signUp:function(t,e){var n=t.commit,o=t.dispatch,i=e.email,r=e.password;return new Promise((function(t,e){n("SET_LOADING",!0),ot.register({email:i,password:r}).then((function(e){n("SET_USER",e),o("fetchUserInfo",e,{root:!0}),t()})).catch((function(t){e(t)})).finally((function(){n("SET_LOADING",!1)}))}))},logout:function(t){var e=t.commit;m.signOut().then((function(){e("SET_USER",{},{root:!0}),tt.push({name:"signin"})})).catch((function(){}))}}},rt=it,at={namespaced:!0,state:{institutions:[],fetching_institutions:!1,fetching_institutions_error:""},getters:{get_institutions:function(t){return t.institutions},fetching_institutions:function(t){return t.fetch_institutions},fetching_institutions_error:function(t){return t.fetching_institutions_error}},mutations:{SET_INSTITUTIONS:function(t,e){o["default"].set(t,"institutions",e)},SET_FETCHING_INSTITUTIONS:function(t,e){o["default"].set(t,"fetching_institutions",e)},SET_FETCHING_INSTITUTIONS_ERROR:function(t,e){o["default"].set(t,"fetching_institutions_error",e)}},actions:{fetch_institutions:function(t){var e=t.commit;e("SET_FETCHING_INSTITUTIONS",!0),v.get().then((function(t){e("SET_INSTITUTIONS",t.docs.map((function(t){return t.data()})))})).catch((function(){e("SET_FETCHING_INSTITUTIONS_ERROR","Oops! something went wrong.")})).then((function(){e("SET_FETCHING_INSTITUTIONS",!1)}))}}},st=at;o["default"].use(s["a"]);var ct=new s["a"].Store({state:{user:{},show_create_institution_form:!1,institution_types:[]},getters:{is_authenticated:function(t){return console.log({user:t.user}),t.user&&Object.keys(t.user).length},user:function(t){return t.user},institution_types:function(t){return t.institution_types.map((function(t){return t.type}))}},mutations:{SET_USER:function(t,e){o["default"].set(t,"user",e)},SET_SHOW_CREATE_INSTITUTION_FORM:function(t,e){o["default"].set(t,"show_create_institution_form",e)},SET_INSTITUTION_TYPES:function(t,e){o["default"].set(t,"institution_types",e)}},actions:{fetchUserInfo:function(t,e){return Object(et["a"])(regeneratorRuntime.mark((function n(){var o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=t.commit,n.next=3,_.doc(e.uid).get();case 3:i=n.sent,o("SET_USER",i.data()),tt.push({name:"home"}).catch((function(){}));case 6:case"end":return n.stop()}}),n)})))()},open_create_institution_form:function(t){var e=t.commit;e("SET_SHOW_CREATE_INSTITUTION_FORM",!0)},close_create_institution_form:function(t){var e=t.commit;e("SET_SHOW_CREATE_INSTITUTION_FORM",!1)},fetch_institution_types:function(t){var e=t.commit;g.get().then((function(t){e("SET_INSTITUTION_TYPES",t.docs.map((function(t){return t.data()})))}))}},modules:{AuthStore:rt,AdminDashboard:st}}),ut=ct,ft=n("5f5b"),lt=n("b1e0"),dt=(n("f9e3"),n("2dd8"),n("f309"));o["default"].use(dt["a"]);var ht,pt=new dt["a"]({});n("d1e78");o["default"].use(ft["a"]),o["default"].use(lt["a"]),o["default"].config.productionTip=!1,o["default"].prototype.$auth=ot,m.onAuthStateChanged((function(t){ht||(ht=new o["default"]({router:tt,store:ut,vuetify:pt,render:function(t){return t(K)}}).$mount("#app")),t&&ut.dispatch("fetchUserInfo",t)}))}});
//# sourceMappingURL=app.bb7a8246.js.map