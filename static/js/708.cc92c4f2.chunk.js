"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[708],{708:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(439),a=n(861),c=n(757),u=n.n(c),s=n(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var e=(0,a.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t,"/reviews?api_key=").concat("31a8ef80bd42f9d6ae436f1a3ce6195b","&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=n(791),f=n(689),h="Reviews_list__f6R8E",l=n(184),d=function(){var e=(0,o.useState)([]),t=(0,r.Z)(e,2),n=t[0],a=t[1],c=(0,f.UO)().movieId;return(0,o.useEffect)((function(){i(c).then((function(e){return a(e)})).catch((function(e){return console.log(e)}))}),[c]),(0,l.jsx)("ul",{className:h,children:n.length>0?n.map((function(e){return(0,l.jsxs)("li",{children:[(0,l.jsxs)("h2",{children:["Author: ",e.author]}),(0,l.jsx)("p",{children:e.content})]},e.id)})):(0,l.jsx)("li",{children:(0,l.jsx)("p",{children:"We don't have any reviews for this movie"})})})}}}]);
//# sourceMappingURL=708.cc92c4f2.chunk.js.map