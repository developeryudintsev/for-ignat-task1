(this["webpackJsonpfor-ignat"]=this["webpackJsonpfor-ignat"]||[]).push([[0],{14:function(e,t,a){e.exports={universal:"Input_universal__1ebzZ",error:"Input_error__1Jpk0",normal:"Input_normal__15tvf","error-message":"Input_error-message__1kVfD"}},19:function(e,t,a){e.exports={TodoList:"TodoList_TodoList__2Izhb",border:"TodoList_border__2Pc5i",timer:"TodoList_timer__1a-MD",buttons:"TodoList_buttons__bz2ZJ"}},22:function(e,t,a){e.exports={telega:"TelegramStyles_telega__ZoKJK",class1:"TelegramStyles_class1__1knsX",class2:"TelegramStyles_class2__3XOFT"}},23:function(e,t,a){e.exports={Menu:"Menu_Menu__2YIBy",Monday:"Menu_Monday__2oDlu",Tuesday:"Menu_Tuesday__u7Kuz",MondayACtive:"Menu_MondayACtive__1BN8z",TuesdayActive:"Menu_TuesdayActive__1rIYg"}},33:function(e,t,a){e.exports={universalButton:"Button_universalButton__2PvYt",orangeButton:"Button_orangeButton__3Vxh5",colorFilter:"Button_colorFilter__3Ke4j"}},37:function(e,t,a){e.exports={flexContainer:"Preloader_flexContainer__dd1lC",isFetching:"Preloader_isFetching__F9qnx"}},40:function(e,t,a){},42:function(e,t,a){e.exports=a.p+"static/media/preloader.c4d45bce.svg"},43:function(e,t,a){e.exports={case:"Range_case__3UcBM"}},44:function(e,t,a){e.exports={case:"RangeDouble_case__qWkRs"}},47:function(e,t,a){e.exports=a(58)},52:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(28),c=a.n(r),i=(a(52),a(21)),o=a(27),u=a(18),s=a(7),m=(a(40),a(6)),d=a(2),f=a(22),E=a.n(f),b=a(33),v=a.n(b),p=function(e){return l.a.createElement("button",{className:e.Filter==e.title?v.a.colorFilter:v.a.universalButton,onClick:e.callback},e.title)},O=a(14),g=a.n(O),h=function(e){var t=Object(n.useState)(null),a=Object(d.a)(t,2),r=a[0],c=a[1];function i(){""!==e.sendName.trim()?(e.clickEnter(e.sendName),c("")):c(" Title is required")}return l.a.createElement("div",null,l.a.createElement("input",{className:e.sendName?g.a.universal:g.a.error,type:"text",value:e.sendName,onChange:function(t){c(""),e.setSendName(t.currentTarget.value)},onKeyPress:function(t){13===t.charCode&&(e.clickEnter(e.sendName),i())}}),l.a.createElement(p,{title:"SEND",callback:function(){i()}}),l.a.createElement("div",{className:"error-message"},r))},j=[],S=0;var T=function(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)([{id:0,name:"Sasha Yudintsev"}]),o=Object(d.a)(i,2),u=o[0],s=o[1];return l.a.createElement("div",null,l.a.createElement("div",{className:E.a.wrapper},l.a.createElement("div",{className:E.a.telega},l.a.createElement("p",null),l.a.createElement("div",null,e.name),l.a.createElement("div",null,e.surName),l.a.createElement("hr",null),l.a.createElement("table",{className:E.a.tt},l.a.createElement("th",null,"TODO"),l.a.createElement("th",null,"PRIORITET")),l.a.createElement("table",null,e.arQualities.map((function(t){return l.a.createElement("div",{key:t.id,className:"hight"===t.prioritet?E.a.class1:E.a.class2},l.a.createElement("tr",null,l.a.createElement("td",null,t.toDo),l.a.createElement("td",null,t.prioritet),l.a.createElement(p,{title:"delete",callback:function(){e.Delete(t.id)}})))}))),l.a.createElement("p",null),l.a.createElement(p,{title:"All",callback:function(){return e.changeFilter("all")}}),l.a.createElement(p,{title:"HightPrioritet",callback:function(){return e.changeFilter("HightPrioritet")}}),l.a.createElement(p,{title:"MiddlePrioritet",callback:function(){return e.changeFilter("MiddlePrioritet")}}),l.a.createElement(p,{title:"LowPrioritet",callback:function(){return e.changeFilter("LowPrioritet")}}),l.a.createElement("p",null),l.a.createElement("p",null),l.a.createElement(h,{sendName:r,setSendName:c,clickEnter:function(e){e.length>=3&&(alert("Hi USER "+e),function(e){var t={id:0,name:e};(function(e){S++,j.push(S),localStorage.setItem(S.toString(),e.name)})(t),function(){for(var e=1;e<=j.length;e++)console.log(localStorage.getItem(e.toString()))}(),s([t].concat(Object(m.a)(u)))}(e)),c("")}}),l.a.createElement("span",null,l.a.createElement("h1",null,"names count: ",u.length)))))},y=a(77),_=a(20),k=a(3),N=a(23),D=a.n(N),w=function(e){var t=Object(n.useState)(null),a=Object(d.a)(t,2),r=a[0],c=a[1],i=function(e){c(e)};return l.a.createElement("div",null,l.a.createElement(_.b,{exact:!0,to:"/"},"  ",l.a.createElement("button",{onClick:function(){e.callBack(),c(null)},className:D.a.Menu},"Menu")),e.opacity&&l.a.createElement(_.b,{to:"/monday"},l.a.createElement("button",{onClick:function(){return i("Monday")},className:"Monday"===r?D.a.MondayACtive:D.a.Monday},"Monday")),e.opacity&&l.a.createElement(_.b,{to:"/tuesday"},l.a.createElement("button",{onClick:function(){return i("Tuesday")},className:"Tuesday"===r?D.a.TuesdayActive:D.a.Tuesday},"Tuesday")))},A=a(19),M=a.n(A),C=function(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),r=a[0],c=a[1],i=function(){e.callBack(r),c("")};return l.a.createElement("div",null,l.a.createElement("input",{className:r?g.a.normal:g.a.error,value:r,onChange:function(e){c(e.currentTarget.value)},onKeyPress:function(e){13===e.charCode&&i()}}),l.a.createElement("button",{className:g.a.universal,onClick:i},"+"),!r&&l.a.createElement("div",{className:g.a.errorMessage},"This field is required"))},R=function(e){return l.a.createElement("input",{onClick:e.callBack,type:"checkbox",checked:e.isDone})},x=function(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(e.title),o=Object(d.a)(i,2),u=o[0],s=o[1];return r?l.a.createElement("input",{value:u,autoFocus:!0,onKeyPress:function(e){13==e.charCode&&c(!1)},onBlur:function(){c(!1)},onChange:function(t){s(t.currentTarget.value),e.callBack(u)}}):l.a.createElement("span",{onDoubleClick:function(){c(!r)}},e.title)},F=function(e){return l.a.createElement("div",{className:M.a.TodoList},l.a.createElement(p,{callback:function(){return e.RemoveTodolist(e.id)},title:"delete"}),l.a.createElement(x,{callBack:function(t){e.saveNewTitleTodolist(t,e.id)},title:e.title}),l.a.createElement("div",null,l.a.createElement(C,{callBack:function(t){e.addTask(t,e.id)}})),l.a.createElement("ul",null,e.Tasks.map((function(t){return l.a.createElement("li",{key:t.id},l.a.createElement(p,{callback:function(){return e.removeTask(t.id,e.id)},title:"X"}),l.a.createElement(R,{callBack:function(){return e.changeStatus(t.id,e.id)},isDone:t.isDone}),l.a.createElement(x,{callBack:function(a){e.saveNewTitle(a,e.id,t.id)},title:t.title}))}))),l.a.createElement("div",null,l.a.createElement(p,{callback:function(){return e.changeFilterTodolist("All",e.id)},title:"All",Filter:e.filter}),l.a.createElement(p,{callback:function(){return e.changeFilterTodolist("Active",e.id)},title:"Active",Filter:e.filter}),l.a.createElement(p,{callback:function(){return e.changeFilterTodolist("Completed",e.id)},title:"Completed",Filter:e.filter})))},B=function(e){var t=Object(n.useState)("1"),a=Object(d.a)(t,2),r=a[0],c=a[1];return l.a.createElement("select",{value:r,onChange:function(e){c(e.currentTarget.value)}},l.a.createElement("option",null,"none"),e.arraySkills.map((function(e){return l.a.createElement("option",{value:e.value},e.skills)})))},P=function(e){var t=Object(n.useState)("1"),a=Object(d.a)(t,2),r=a[0],c=a[1],i=function(e){c(e.currentTarget.value)};return l.a.createElement("div",null,l.a.createElement("p",null,"Please select your SKILL:"),e.arraySkills.map((function(e){return l.a.createElement("p",null,l.a.createElement("label",null,l.a.createElement("input",{type:"radio",name:"gender",value:r,onChange:i}),e.skills))})))},I=function(e,t){switch(t.type){case"SORT":return e.sort((function(e,t){switch(e.name>t.name){case!0:return 1;case!1:return-1;default:return 0}})),Object(m.a)(e);case"RSORT":return Object(m.a)(e.sort((function(e,t){switch(e.name>t.name){case!0:return-1;case!1:return 1;default:return 0}})));case"AGESORT":return Object(m.a)(e.filter((function(e){return e.age>t.payload})));default:throw new Error("I dont know this comand")}},L=function(e){var t=Object(n.useState)(e.state),a=Object(d.a)(t,2),r=a[0],c=a[1];return l.a.createElement("div",null,l.a.createElement("table",{className:"ArrayStateMap"},l.a.createElement("tr",null,l.a.createElement("th",{className:"th1"},"NAME"),l.a.createElement("th",{className:"th2"},"AGE")),r.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.age))}))),l.a.createElement("div",{className:"buttons"},l.a.createElement(p,{title:"SORT",callback:function(){return function(){var t=I(e.state,(e.SortUpValueForAction,{type:"SORT",payload:"up"}));c(t)}()}}),l.a.createElement(p,{title:"RSORT",callback:function(){return function(){var t=I(e.state,(e.SortDownValueForAction,{type:"RSORT",payload:"up"}));c(t)}()}}),l.a.createElement(p,{title:"AGE>18",callback:function(){return function(){var t=I(e.state,(e.SortAGEAC,{type:"AGESORT",payload:18}));c(t)}()}})))},J=function(){var e=Object(n.useState)(0),t=Object(d.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(new Date),i=Object(d.a)(c,2),o=i[0],u=i[1],s=Object(n.useState)(null),m=Object(d.a)(s,2),f=m[0],E=m[1],b=function(e){"stop"===e?clearInterval(f):(clearInterval(f),E(setInterval((function(){return u(new Date)}),1e3)))},v={margin:"80px",width:"150px",height:"50px",backgroundColor:"white",opacity:a};return l.a.createElement("div",{className:M.a.border},l.a.createElement("span",{style:v},(new Date).getDate(),":",(new Date).getUTCMonth()+1,":",(new Date).getFullYear()),l.a.createElement("div",{className:M.a.timer,onMouseEnter:function(){console.log("mouse enter"),r(1)},onMouseLeave:function(){console.log("mouse leave"),r(0)}},o.toLocaleTimeString()),l.a.createElement("div",{className:M.a.buttons},l.a.createElement(p,{title:"start time",callback:function(){return b("start")}}),l.a.createElement(p,{title:"stop time",callback:function(){return b("stop")}})))},K=a(37),V=a.n(K),G=a(42),H=a.n(G),Y=function(){return l.a.createElement("div",{className:V.a.flexContainer},l.a.createElement("img",{className:V.a.isFetching,src:H.a}))},z=function(e,t){switch(t.type){case"SET_PRELOADER":return t.loading;default:return e}},U=function(e){return{type:"SET_PRELOADER",loading:e}},W=a(43),q=a.n(W),X=l.a.memo((function(e){var t=Object(n.useState)(e.min),a=Object(s.a)(t,2),r=a[0],c=a[1];return l.a.createElement("div",{className:q.a.case},l.a.createElement("span",null,r),l.a.createElement("input",{type:"range",min:e.min,max:e.max,onChange:function(e){c(Number(e.currentTarget.value)),console.log(r)},value:r}))})),Z=a(73),Q=a(75),$=a(76),ee=a(44),te=a.n(ee),ae=Object(Z.a)({root:{width:300}});function ne(e){return"".concat(e,"\xb0C")}var le=l.a.memo((function(e){var t=ae(),a=l.a.useState([e.max/2,e.max-e.max/3]),n=Object(s.a)(a,2),r=n[0],c=n[1];return l.a.createElement("div",{className:te.a.case},l.a.createElement("div",{className:t.root},l.a.createElement(Q.a,{id:"range-slider",gutterBottom:!0},"Temperature range"),l.a.createElement($.a,{value:r,min:e.min,max:e.max,onChange:function(e,t){c(t)},valueLabelDisplay:"auto","aria-labelledby":"range-slider",getAriaValueText:ne})))})),re=Object(y.a)(),ce=Object(y.a)();var ie=function(){var e,t=Object(n.useState)(!1),a=Object(s.a)(t,2),r=a[0],c=a[1],m=Object(n.useReducer)(z,!1),d=Object(s.a)(m,2),f=d[0],E=d[1],b=Object(n.useState)([{id:Object(y.a)(),toDo:"JS work",prioritet:"hight"},{id:Object(y.a)(),toDo:"watch TV",prioritet:"low"},{id:Object(y.a)(),toDo:"games",prioritet:"middle"},{id:Object(y.a)(),toDo:"React",prioritet:"hight"},{id:Object(y.a)(),toDo:"HTMl",prioritet:"low"}]),v=Object(s.a)(b,2),O=v[0],g=v[1];function h(e){var t=O.filter((function(t){return t.id!==e}));g(t)}var j=Object(n.useState)("All"),S=Object(s.a)(j,2),N=S[0],D=S[1],A=O;function M(e){D(e)}"HightPrioritet"===N&&(A=O.filter((function(e){return"hight"===e.prioritet}))),"MiddlePrioritet"===N&&(A=O.filter((function(e){return"middle"===e.prioritet}))),"LowPrioritet"===N&&(A=O.filter((function(e){return"low"===e.prioritet})));var R=Object(n.useState)(!1),x=Object(s.a)(R,2),I=x[0],K=x[1],V=Object(n.useState)([{id:re,title:"What to learn",filter:"All"},{id:ce,title:"What to buy",filter:"All"}]),G=Object(s.a)(V,2),H=G[0],W=G[1],q=Object(n.useState)((e={},Object(u.a)(e,re,[{id:Object(y.a)(),title:"HTML&CSS",isDone:!0},{id:Object(y.a)(),title:"JS",isDone:!1},{id:Object(y.a)(),title:"React",isDone:!1}]),Object(u.a)(e,ce,[{id:Object(y.a)(),title:"HTML&CSS",isDone:!0},{id:Object(y.a)(),title:"JS",isDone:!1},{id:Object(y.a)(),title:"React",isDone:!1}]),e)),Z=Object(s.a)(q,2),Q=Z[0],$=Z[1],ee=function(e){var t=Object(y.a)();W([{id:t,title:e,filter:"All"}].concat(Object(o.a)(H))),$(Object(i.a)({},Q,Object(u.a)({},t,[])))},te=function(e){W(H.filter((function(t){return t.id!==e})))},ae=function(e,t){var a=Q[t];if(""!==e.trim()){var n={id:Object(y.a)(),title:e,isDone:!0};Q[t]=[n].concat(Object(o.a)(a)),$(Object(i.a)({},Q))}},ne=function(e,t){var a=Q[t];Q[t]=a.filter((function(t){return t.id!==e})),$(Object(i.a)({},Q))},ie=function(e,t){var a=H.find((function(e){return e.id==t}));a&&(a.filter=e,W(Object(o.a)(H)))},oe=function(e,t){Q[t];var a=Q[t].find((function(t){return t.id===e}));a&&(a.isDone=!a.isDone,$(Object(i.a)({},Q)))},ue=function(e,t){var a=H.find((function(e){return e.id==t}));a&&(a.title=e,W(Object(o.a)(H)))},se=function(e,t,a){var n=Q[t].find((function(e){return e.id===a}));n&&(n.title=e,$(Object(i.a)({},Q)))},me=[{value:1,skills:"Junior"},{value:2,skills:"Middle"},{value:3,skills:"Senior"}],de=[{id:Object(y.a)(),name:"Igor",age:41},{id:Object(y.a)(),name:"Olga",age:39},{id:Object(y.a)(),name:"Sasha",age:11},{id:Object(y.a)(),name:"Nadka",age:4}],fe={type:"SORT",payload:"up"},Ee={type:"RSORT",payload:"up"},be={type:"AGESORT",payload:18};return l.a.createElement("div",null,l.a.createElement("div",{className:"App"},l.a.createElement(_.a,null,l.a.createElement(w,{callBack:function(){K(!I)},opacity:I}),l.a.createElement(k.a,{path:"/monday",render:function(){return l.a.createElement(T,{name:"Sasha",surName:"Yudintsev",arQualities:A,Delete:h,changeFilter:M})}}),l.a.createElement(k.a,{path:"/tuesday",render:function(){return l.a.createElement("div",{className:"general"},l.a.createElement("div",{className:"setPreloader"},l.a.createElement(p,{title:"setPreloader",callback:function(){return c(!0),E(U(!0)),void setTimeout((function(){E(U(!1))}),3e3)}})),f&&l.a.createElement(Y,null),!f&&r&&l.a.createElement("div",{className:"lineTodolist"},l.a.createElement("div",{className:"InputTodolistStyle"},l.a.createElement(C,{callBack:ee})),H.map((function(e){var t=Q[e.id];return"Active"===e.filter&&(t=Q[e.id].filter((function(e){return!1===e.isDone}))),"Completed"===e.filter&&(t=Q[e.id].filter((function(e){return!0===e.isDone}))),l.a.createElement(F,{id:e.id,title:e.title,Tasks:t,RemoveTodolist:te,filter:e.filter,addTask:ae,removeTask:ne,changeFilterTodolist:ie,changeStatus:oe,saveNewTitleTodolist:ue,saveNewTitle:se})}))),!f&&r&&l.a.createElement("div",{className:"leftSide"},l.a.createElement("div",{className:"SelectStyles"},l.a.createElement(B,{arraySkills:me})),l.a.createElement("div",{className:"RadioStyles"},l.a.createElement(P,{arraySkills:me})),l.a.createElement("div",{className:"ArrayState"},l.a.createElement(L,{state:de,SortUpValueForAction:fe,SortDownValueForAction:Ee,SortAGEAC:be})),l.a.createElement("div",{className:"timerModule"},l.a.createElement(J,null))),l.a.createElement(X,{min:200,max:300}),l.a.createElement(le,{min:200,max:1e3}))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ie,null),","),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.b64fb441.chunk.js.map