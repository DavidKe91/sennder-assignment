(function(e){function t(t){for(var r,s,i=t[0],c=t[1],u=t[2],p=0,m=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&m.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(m.length)m.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/sennder-assignment/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"1fa6":function(e,t,n){},"33e1":function(e,t,n){"use strict";var r=n("39cb"),o=n.n(r);o.a},"39cb":function(e,t,n){},4822:function(e,t,n){"use strict";var r=n("1fa6"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"mutations",(function(){return J})),n.d(t,"getters",(function(){return L})),n.d(t,"store",(function(){return G}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("2f62"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("Tabs",{attrs:{testProp:"Tabs test"}}),this.stepOneCompleted&&this.stepTwoCompleted?r("ModalBody"):e._e()],1)},s=[],i=n("5530"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tabs"},[n("ul",{staticClass:"parent-tab"},e._l(e.tabs,(function(t,r){return n("li",{key:r,class:{activeTab:e.currentTab===r},on:{click:function(t){return e.changeTab(r)}}},[n("p",[e._v(e._s(t))])])})),0),n("div",{staticClass:"tab-content"},[n("Tab",{attrs:{type:"Employer Maximum"}})],1)])},u=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.errors.length?n("div",[n("ul",{staticClass:"errors"},e._l(e.errors,(function(t){return n("li",{key:t},[e._v(e._s(t))])})),0)]):e._e(),n("div",{directives:[{name:"show",rawName:"v-show",value:0===e.currentTab,expression:"currentTab === 0"}]},[n("h2",[e._v(e._s(this.type))]),n("span",{staticClass:"input-euro-symbol"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.employerMax,expression:"employerMax"}],attrs:{id:"employerMax",type:"text",placeholder:"Please Enter Maximum Salary"},domProps:{value:e.employerMax},on:{input:function(t){t.target.composing||(e.employerMax=t.target.value)}}})]),n("button",{on:{click:function(t){return e.checkForm(e.employerMax)}}},[e._v("Submit")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:1===e.currentTab,expression:"currentTab === 1"}]},[n("h2",[e._v(e._s(this.type))]),n("span",{staticClass:"input-euro-symbol"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.employeeMin,expression:"employeeMin"}],attrs:{id:"employeeMax",type:"text",placeholder:"Please Enter Minimum Salary"},domProps:{value:e.employeeMin},on:{input:function(t){t.target.composing||(e.employeeMin=t.target.value)}}})]),n("button",{on:{click:function(t){return e.checkForm(e.employeeMin)}}},[e._v("Submit")])])])},p=[],m={name:"Tab",props:{type:String},data:function(){return{errors:[]}},computed:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["currentTab"])),{},{employerMax:{get:function(){return this.$store.state.employerMax},set:function(e){this.$store.commit("updateEmployerMax",parseInt(e))}},employeeMin:{get:function(){return this.$store.state.employeeMin},set:function(e){this.$store.commit("updateEmployeeMin",e)}},toggleClass:{get:function(){return this.$store.state.isActive}}}),methods:{checkForm:function(e){if(!e)return this.errors.push("Input required"),!1;var t=/^\d+$/.test(e);return t?0==this.currentTab?(this.employerMax,this.$store.commit("changeTab",1),this.errors=[],this.$store.state.stepOneCompleted=!0,console.log("Step One: "+this.$store.state.stepOneCompleted),!0):(this.employeeMin,this.errors=[],this.$store.state.stepTwoCompleted=!0,console.log("Step Two: "+this.$store.state.stepTwoCompleted),!0):(this.errors.pop(),this.errors.push("Please use positive whole numbers only"),!1)}}},d=m,f=(n("daea"),n("2877")),h=Object(f["a"])(d,l,p,!1,null,"a0476b58",null),b=h.exports,v={name:"Tabs",props:{testProp:String},components:{Tab:b},computed:Object(o["b"])(["stepOneCompleted","tabs","currentTab"]),methods:{changeTab:function(e){this.$store.commit("changeTab",e)}}},y=v,M=(n("33e1"),Object(f["a"])(y,c,u,!1,null,"e0b9defe",null)),g=M.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"modal",class:{opened:this.$store.state.stepOneCompleted&&this.$store.state.stepTwoCompleted}},[n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-header"},[n("Temperature")],1),n("div",{staticClass:"modal-body"},[this.employerMax>this.employeeMin?n("h1",[e._v("Success!")]):this.employerMax==this.employeeMin?n("h1",[e._v("Great Minds Think Alike!")]):n("h1",[e._v("Failure!")]),n("p",[e._v("Maximum offer was: € "+e._s(this.employerMax))]),n("p",[e._v("Minimum expected salary was: € "+e._s(this.employeeMin))])]),n("div",{staticClass:"modal-footer"},[n("button",{on:{click:function(t){return e.resetState()}}},[e._v("Reset")])])])])},T=[],w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"weather"},[n("img",{attrs:{src:this.iconUrl}}),n("p",[e._v("London Temperature: "+e._s(e._f("decimalTemperature")(e.temperature))+"°")])])},_=[],O=(n("b680"),n("96cf"),n("1da1")),C=n("bc3a"),j=n.n(C),$={name:"Temperature",data:function(){return{temperature:null,icon:null,iconUrl:null}},mounted:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.get("http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&id=524901&appid=".concat("2e2e6a6e5be53700c6e2a6aa0dc54101")).then((function(t){e.temperature=t.data.main.temp,e.icon=t.data.weather[0].icon,e.iconUrl="http://openweathermap.org/img/wn/".concat(e.icon,"@2x.png")}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()},filters:{decimalTemperature:function(e){return e.toFixed(1)}}},S=$,k=Object(f["a"])(S,w,_,!1,null,"97e1d82a",null),E=k.exports,P={name:"Modal",components:{Temperature:E},data:function(){return{success:null,equal:null}},methods:{resetState:function(){this.$store.commit("resetState")}},computed:Object(i["a"])({},Object(o["b"])(["currentTab","employerMax","employeeMin"]))},A=P,F=(n("4822"),Object(f["a"])(A,x,T,!1,null,"afe4dde4",null)),N=F.exports,q={name:"App",components:{Tabs:g,ModalBody:N},computed:Object(i["a"])({},Object(o["b"])(["stepOneCompleted","stepTwoCompleted"]))},R=q,U=(n("034f"),Object(f["a"])(R,a,s,!1,null,null,null)),B=U.exports;r["a"].config.productionTip=!1,r["a"].use(o["a"]);var I={employerMax:null,employeeMin:null,isActive:!1,currentTab:0,tabs:["Employer","Employee"],stepOneCompleted:!1,stepTwoCompleted:!1},J={updateEmployerMax:function(e,t){e.employerMax=t},updateEmployeeMin:function(e,t){e.employeeMin=t},changeTab:function(e,t){e.currentTab=t},completedStepOne:function(e){e.stepOneCompleted=!0,console.log(e.stepOneCompleted)},resetState:function(e){e.employeeMin=null,e.employerMax=null,e.isActive=null,e.currentTab=0,e.stepOneCompleted=!1,e.stepTwoCompleted=!1}},L={stepOneCompleted:function(e){return e.stepOneCompleted},stepTwoCompleted:function(e){return e.stepTwoCompleted},tabs:function(e){return e.tabs},employerMax:function(e){return e.employerMax},employeeMin:function(e){return e.employeeMin},currentTab:function(e){return e.currentTab}},G=new o["a"].Store({state:I,mutations:J,getters:L}),V=new r["a"]({render:function(e){return e(B)},store:G}).$mount("#app");window.Cypress&&(window.app=V)},"85ec":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},cf69:function(e,t,n){},daea:function(e,t,n){"use strict";var r=n("cf69"),o=n.n(r);o.a}});
//# sourceMappingURL=app.7ebbf65f.js.map