(this.webpackJsonpworld_of_doctor=this.webpackJsonpworld_of_doctor||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/error.aa9aacc3.png"},function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),u=a(2),o=a(3),i=a(5),s=a(4),m=a(1),v=a.n(m),d=a(6),h=function(){function e(){Object(u.a)(this,e),this._apiUrl="https://restcountries.eu/rest/v2/all",this.filterData=function(e,t){var a=[],n=t.length;if(n>0)for(var r=0;r<e.length;r++){e[r].countryName.split("").slice(0,n).join("").toLowerCase()===t.toLowerCase()&&a.push(e[r])}else a=null;return a},this._transformCountries=function(e){return{countryID:"".concat(e.cioc).concat(e.numericCode),countryName:"".concat(e.name),imgFlag:"".concat(e.flag)}}}return Object(o.a)(e,[{key:"getResource",value:function(){var e=Object(d.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(this._apiUrl);case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:throw e.prev=9,e.t0=e.catch(0),new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 ".concat(e.t0,"."));case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"getAllCountries",value:function(){var e=Object(d.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource();case 2:return t=e.sent,e.abrupt("return",t.map(this._transformCountries));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"sortCountries",value:function(){var e=Object(d.a)(v.a.mark((function e(t){var a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getAllCountries();case 2:return a=e.sent,n=this.filterData(a,t),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),E=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.changeSearchInt=function(t){var a=t.target.value;e.setState({value:a}),e.props.onValueSerh(a)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.value;return r.a.createElement("div",{className:"blockSearchInput"},r.a.createElement("input",{className:"searchInput",id:"search",type:"text",placeholder:"input country",value:e,onChange:this.changeSearchInt}),r.a.createElement("label",{htmlFor:"name",className:"searchLabel"},"Country"))}}]),a}(n.Component),p=a(9),f=a.n(p),g=function(){return r.a.createElement("div",{className:"blockError"},r.a.createElement("img",{className:"errorImg",src:f.a,alt:"error"}),r.a.createElement("p",{className:"errorMsg"},"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043d\u0435 \u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441 \u043f\u043e\u0437\u0436\u0435."))},b=(a(16),function(){return r.a.createElement("div",{className:"loadingio-spinner-spinner-i3zk22cdv5i"},r.a.createElement("div",{className:"ldio-jg0nozfzrl"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),y=function(e){var t=e.data,a=e.load,n=e.error,l=e.renderItem,c=e.searchValue,u=e.selectValue,o=t&&!a,i=n?r.a.createElement(g,null):null,s=a?r.a.createElement(b,null):null,m=o?l(t,u,c):null;return r.a.createElement("div",{className:"blockMatch"},i,s,m)},S=function(e){var t=e.onValueSelect;return r.a.createElement(r.a.Fragment,null,r.a.createElement("select",{className:"inpSelect",onChange:t},r.a.createElement("option",{value:"10"},"10"),r.a.createElement("option",{value:"20"},"20"),r.a.createElement("option",{value:"50"},"50")))},V=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).apiService=new h,e.state={data:null,load:!0,error:!1,searchValue:"",selectValue:10},e.onLoadData=function(t){e.apiService.sortCountries(t).then((function(t){return e.setState({data:t,load:!1})})).catch(e.onError)},e.onValueSerh=function(t){e.setState((function(e){e.searchValue;return{searchValue:t}})),e.onLoadData(t)},e.onValueSelect=function(t){var a=t.target.value;e.setState((function(e){e.selectValue;return{selectValue:a}}))},e.onError=function(t){e.setState({error:!0,load:!1})},e}return Object(o.a)(a,[{key:"renderItem",value:function(e,t,a){for(var n=new RegExp("^[a-zA-Z]+$"),l=[],c=t>e.length?e.length:t,u=0;u<c;u++)l.push(r.a.createElement("span",{className:"matchItem",key:e[u].countryID},"".concat(u+1,". ").concat(e[u].countryName)," ",r.a.createElement("img",{className:"matchImg",src:e[u].imgFlag,alt:e[u].countryName})));return l.length||(l="\u0422\u0430\u043a\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"),n.test(a)||(l="\u0422\u043e\u043b\u044c\u043a\u043e \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u0438\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b"),l}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.load,n=e.error,l=e.searchValue,c=e.selectValue,u=l?r.a.createElement(y,{data:t,load:a,error:n,renderItem:this.renderItem,searchValue:l,selectValue:c}):null;return r.a.createElement("section",{className:"searchPanel"},r.a.createElement("div",{className:"blockInp"},r.a.createElement(E,{onValueSerh:this.onValueSerh}),r.a.createElement(S,{onValueSelect:this.onValueSelect})),u)}}]),a}(n.Component);var w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(V,null))};a(17),a(18),a(19);c.a.render(r.a.createElement(w,null),document.querySelector("#root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.ec471513.chunk.js.map