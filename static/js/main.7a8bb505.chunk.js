(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e){e.exports={key:"68febc47d8d64b22ade3070775840e38"}},15:function(e,t,n){e.exports=n(29)},21:function(e,t,n){},26:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(6),r=n.n(i),c=(n(21),n(7)),s=n(8),l=n(13),u=n(9),f=n(14),h=n(10),d=n(4),p=n(11),g=n(3),v=n(12),w=(n(26),["Title","Description","Author","Source",""]),b=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={tableData:[],count:1,page:1,sourceData:null},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this._fetchData()}},{key:"_buildTableRows",value:function(){var e=this.state.sourceData.map(function(e){var t=e.title,n=e.description,o=e.author,i=e.source.name,r=e.url;return{rowData:[t,n,o,i,a.a.createElement(d.Button,{option:"emphasized",glyph:"initiative",onClick:function(){return window.open(r,"_blank")}},"Read")]}});this.setState({tableData:e})}},{key:"_fetchData",value:function(){var e=this,t=this.state.page;fetch("https://newsapi.org/v2/top-headlines?country=gb&apiKey=".concat(v.key,"&pageSize=10&page=").concat(t)).then(function(e){return e.json()}).then(function(t){return e.setState({count:t.totalResults}),t.articles}).catch(function(e){return console.error(e)}).then(function(t){return e.setState({sourceData:t})}).then(function(){return e._buildTableRows()})}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"app-container fd-has-margin-large"},a.a.createElement(g.ActionBar,null,a.a.createElement(g.ActionBarHeader,{title:"Leon's Fiori App",description:"React Edition"}),a.a.createElement(g.ActionBarActions,null,a.a.createElement(d.Button,{glyph:"refresh",option:"light",onClick:function(){return e._fetchData()}},"Refresh"))),a.a.createElement(h.Table,{headers:w,tableData:this.state.tableData}),a.a.createElement(p.Pagination,{itemsTotal:this.state.count,onClick:function(t){"number"===typeof t&&e.setState({page:t},function(){return e._fetchData()})}}))}}]),t}(o.Component),m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(a.a.createElement(b,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/fiori-react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/fiori-react","/service-worker.js");m?(function(e,t){fetch(e).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):k(t,e)})}}()}},[[15,2,1]]]);
//# sourceMappingURL=main.7a8bb505.chunk.js.map