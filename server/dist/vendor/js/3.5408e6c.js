(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{djVK:function(t,e,n){},gEGz:function(t,e,n){"use strict";var a=n("djVK"),i=n.n(a);i.a},iyQ6:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"flex flex-center row bg-grey-3"},[n("q-table",{staticClass:"col-xs-12 col-xl-10 bg-white",attrs:{title:"Requests",columns:t.columns,data:t.appointments,"no-data-label":"No pending collect request"}})],1)},i=[];a._withStripped=!0;n("rGqo");var l={created:function(){var t=this;this.$axios.get("/api/appointment").then(function(e){var n=[];if(e.data.length>0){var a={};e.data.forEach(function(t){a.name="Lala",a.city=t.city,a.time=new Date(t.time).toLocaleString(),a.status="Pending"}),n.push(a)}console.log(n),t.appointments=n}).catch(function(t){console.log(t)})},data:function(){return{appointments:[],columns:[{label:"Requestor name",field:"name",align:"center"},{label:"City",field:"city",align:"center"},{label:"Status",field:"status",align:"center"},{label:"Time",field:"time",align:"center"}]}}},c=l,o=(n("gEGz"),n("KHd+")),s=Object(o["a"])(c,a,i,!1,null,null,null);e["default"]=s.exports}}]);