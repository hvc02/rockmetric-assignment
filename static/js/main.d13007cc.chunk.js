(this["webpackJsonprockmetric-assignment"]=this["webpackJsonprockmetric-assignment"]||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/undraw_.5e09ece6.svg"},26:function(e,t,a){e.exports=a(47)},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),c=a.n(l),i=a(8),o=a(1),s=a(9),m=a(10),u=(a(41),a(42),function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){fetch("https://rmimgblob.blob.core.windows.net/interviewdata/SampleRockData.json").then((function(e){return e.json()})).then((function(e){l(e)}))}),[]),r.a.createElement("div",{className:"ag-theme-material",style:{width:600,height:600}},r.a.createElement(m.AgGridReact,{rowData:a,rowSelection:"multiple"},r.a.createElement(m.AgGridColumn,{field:"date",filter:!0}),r.a.createElement(m.AgGridColumn,{field:"city",filter:!0}),r.a.createElement(m.AgGridColumn,{field:"value",filter:!0})))}),p=a(16),d=a.n(p),h=a(22),b=a(15),f=a.n(b),g=a(23),E=a.n(g),v=function(e){var t="button-".concat(e.type);return r.a.createElement("div",null,r.a.createElement("button",{className:t,onClick:e.handleClick,value:e.value},e.label))},y=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("line"),i=Object(s.a)(c,2),o=i[0],m=i[1],u=function(e){m(e.target.value)},p=function(){var e=Object(h.a)(d.a.mark((function e(){var t,a,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],a=[],n=[],"https://rmimgblob.blob.core.windows.net/interviewdata/SampleRockData.json",e.prev=4,e.next=7,fetch("https://rmimgblob.blob.core.windows.net/interviewdata/SampleRockData.json");case 7:return r=e.sent,e.next=10,r.json();case 10:e.sent.map((function(e){"Tokyo"===e.city?t.push(e.value):a.push(e.value),n.push(e.date)})),t=t.map(Number),a=a.map(Number),(n=n.map((function(e){return new Date(e).toLocaleString("default",{month:"short"})}))).length=12,l({chart:{type:o},tooltip:{backgroundColor:"#fff"},legend:{enabled:!1},title:{text:"Monthly Average Temperature"},subtitle:{text:"Source: Rockmetric Analysis"},xAxis:{categories:n},yAxis:{title:{text:"Temperature (\xb0C)"}},plotOptions:{line:{dataLabels:{enabled:!0},enableMouseTracking:!0}},series:[{name:"tokyo",data:t},{name:"London",data:a}]}),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(4),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[4,19]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){p()}),[o]),r.a.createElement("div",{style:{marginTop:200}},r.a.createElement(E.a,{highcharts:f.a,options:a}),r.a.createElement("div",{className:"cta-buttons"},r.a.createElement(v,{type:"primary",label:"Line Chart",handleClick:u,value:"line"}),r.a.createElement(v,{type:"primary",label:"Bar Chart",handleClick:u,value:"column"})))},w=a(24),k=a.n(w),x=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"main-content"},r.a.createElement("h1",{className:"heading-primary"},"Build an Intelligent Enterprise"),r.a.createElement("h3",{className:"heading-secondary"},"AI, Automation and Analytics to Inspire"),r.a.createElement("p",{className:"subtitle"},"Revolutionary platform for forward-looking teams to deliver lasting business impact. AI-powered automation to deliver sophisticated insights at scale without expanding support teams."),r.a.createElement("div",{className:"cta-buttons"},r.a.createElement(i.b,{to:"/chart"},r.a.createElement(v,{type:"primary",label:"View Chart"})),r.a.createElement(i.b,{to:"/dashboard"},r.a.createElement(v,{type:"primary",label:"View Dashboard"})))),r.a.createElement("div",{className:"main-image"},r.a.createElement("img",{src:k.a,alt:"hero-img"}))))},j=(a(46),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement(o.a,{exact:!0,path:"/",component:x}),r.a.createElement(o.a,{exact:!0,path:"/chart",component:y}),r.a.createElement(o.a,{exact:!0,path:"/dashboard",component:u})))});c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.d13007cc.chunk.js.map