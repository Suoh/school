webpackJsonp([86],{CECs:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("mDFR"),r=n.n(a);e.default={name:"error-toolbar",components:{LangManager:r.a},methods:{redirect:function(){this.$router.replace({name:"public.index"})}}}},E6L6:function(t,e,n){var a=n("Oy5s");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("174a12b8",a,!0,{})},I9n8:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("q-select",{attrs:{options:t.list},model:{value:t.language,callback:function(e){t.language=e},expression:"language"}})],1)},staticRenderFns:[]}},Oy5s:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"",""])},Qfh0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("NYxO"),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t};e.default={name:"LangManager",computed:r({},Object(a.c)("lang",["list","lang"]),{language:{get:function(){return this.lang},set:function(t){this.setLanguage(t)}}}),methods:r({},Object(a.b)("lang",["setLanguage"]))}},lOkG:function(t,e,n){var a=n("tfBw");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("ab04d402",a,!0,{})},mDFR:function(t,e,n){var a=n("VU/8")(n("Qfh0"),n("I9n8"),!1,function(t){n("E6L6")},"data-v-7800c6dc",null);t.exports=a.exports},tfBw:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"",""])},ufIu:function(t,e,n){var a=n("VU/8")(n("CECs"),n("xFVq"),!1,function(t){n("lOkG")},"data-v-087cafd6",null);t.exports=a.exports},xFVq:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("q-toolbar",{attrs:{color:"blue-grey-14"}},[e("q-toolbar-title",[e("span",[this._v("Laravel with Quasar Framework (SPA) by Manfred047")])]),this._v(" "),e("lang-manager"),this._v(" "),e("q-btn",{attrs:{flat:"",dense:"",label:"Go to welcome"},on:{click:this.redirect}})],1)],1)},staticRenderFns:[]}}});