(window.webpackJsonp=window.webpackJsonp||[]).push([[10,3,5],{250:function(t,e,n){var content=n(254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(104).default)("69fd37e0",content,!0,{sourceMap:!1})},251:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},252:function(t,e,n){t.exports=n.p+"fonts/Lato-Regular.9919edf.ttf"},253:function(t,e,n){"use strict";n(250)},254:function(t,e,n){var r=n(103),l=n(251),o=n(252),c=r(!1),f=l(o);c.push([t.i,'@font-face{font-family:"Lato";src:local("Lato"),url('+f+') format("truetype")}nav{margin-top:50px;margin-bottom:20px;padding:0}nav .container{max-width:1200px;margin:0 auto;display:table;width:100%;padding:0 50px}nav .container a.logo{display:inline-block;cursor:pointer;font-family:"lato";letter-spacing:1px;font-size:22px;color:#000}nav .container a{transition:all .3s ease 0s}nav .container .links{text-align:right;font-family:"lato";height:auto}nav .container .links a{font-family:"lato";font-size:22px;color:#000;letter-spacing:2px}nav .container>div{display:table-cell;width:50%;vertical-align:middle}nav .container .links>a:last-child{margin-right:0}.lite{opacity:.3}a{text-decoration:none}',""]),t.exports=c},255:function(t,e,n){"use strict";n.r(e);var r={name:"CustomNavbar"},l=(n(253),n(45)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("div",{staticClass:"container"},[n("a",{staticClass:"logo",attrs:{href:"/"}},[t._v("\n      taylan\n      "),n("span",{staticClass:"lite"},[t._v("dogan")])]),t._v(" "),n("div",{staticClass:"links"},[n("a",{staticStyle:{margin:"0px 10px 0px 10px"},attrs:{href:"/projects/"}},[t._v("projects")]),t._v(" "),n("span",[t._v("|")]),t._v(" "),n("a",{staticStyle:{margin:"0px 10px 0px 10px"},attrs:{href:"/blogs/"}},[t._v("blog")]),t._v(" "),n("span",[t._v("|")]),t._v(" "),n("a",{staticStyle:{"margin-left":"10px"},attrs:{href:"/taylan_cv.pdf",target:"_blank"}},[t._v("resume")])])])])}],!1,null,null,null);e.default=component.exports},257:function(t,e,n){var content=n(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(104).default)("2b1ebc80",content,!0,{sourceMap:!1})},268:function(t,e,n){"use strict";n(257)},269:function(t,e,n){var r=n(103)(!1);r.push([t.i,'p{font-size:16px}p,p.tag{font-family:"lato"}p.tag{font-size:12px;align-content:right}a{font-size:20px;font-family:"lato";color:#1f9102}',""]),t.exports=r},278:function(t,e,n){var content=n(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(104).default)("3ec0ee0c",content,!0,{sourceMap:!1})},286:function(t,e,n){"use strict";n.r(e);var r={props:{article:Object},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},l=(n(268),n(45)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("li",[n("a",{attrs:{href:"/blog/"+t.article.slug}},[t._v("\n      "+t._s(t.article.title)+"\n    ")]),t._v(" "),n("p",[t._v(t._s(t.article.description))]),t._v(" "),n("p",{staticClass:"tag"},[t._v(" "+t._s(t.formatDate(t.article.updatedAt))+"  /  "+t._s(t.article.tags)+" ")])]),t._v(" "),n("hr")])}),[],!1,null,null,null);e.default=component.exports},287:function(t,e,n){"use strict";n(278)},288:function(t,e,n){var r=n(103)(!1);r.push([t.i,".container{max-width:1200px;margin:30px auto;display:table;width:100%}ul{list-style-type:none}li{margin:30px 0}",""]),t.exports=r},319:function(t,e,n){"use strict";n.r(e);var r=n(8),l=(n(46),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("articles").sortBy("createdAt","desc").fetch();case 3:return r=e.sent,e.abrupt("return",{articles:r});case 5:case"end":return e.stop()}}),e)})))()}}),o=(n(287),n(45)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("CustomNavbar"),t._v(" "),n("div",{staticClass:"container"},[n("br"),t._v(" "),n("br"),t._v(" "),n("ul",{staticClass:"grid grid-cols-3 gap-8 mt-8"},[n("hr"),t._v(" "),t._l(t.articles,(function(article){return n("ArticlePreview",{key:article.slug,attrs:{article:article}})}))],2)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CustomNavbar:n(255).default,ArticlePreview:n(286).default})}}]);