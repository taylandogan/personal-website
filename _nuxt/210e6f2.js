(window.webpackJsonp=window.webpackJsonp||[]).push([[12,5],{250:function(t,n,e){var content=e(254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(104).default)("69fd37e0",content,!0,{sourceMap:!1})},251:function(t,n,e){"use strict";t.exports=function(t,n){return n||(n={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},252:function(t,n,e){t.exports=e.p+"fonts/Lato-Regular.9919edf.ttf"},253:function(t,n,e){"use strict";e(250)},254:function(t,n,e){var r=e(103),o=e(251),l=e(252),c=r(!1),f=o(l);c.push([t.i,'@font-face{font-family:"Lato";src:local("Lato"),url('+f+') format("truetype")}nav{margin-top:50px;margin-bottom:20px;padding:0}nav .container{max-width:1200px;margin:0 auto;display:table;width:100%;padding:0 50px}nav .container a.logo{display:inline-block;cursor:pointer;font-family:"lato";letter-spacing:1px;font-size:22px;color:#000}nav .container a{transition:all .3s ease 0s}nav .container .links{text-align:right;font-family:"lato";height:auto}nav .container .links a{font-family:"lato";font-size:22px;color:#000;letter-spacing:2px}nav .container>div{display:table-cell;width:50%;vertical-align:middle}nav .container .links>a:last-child{margin-right:0}.lite{opacity:.3}a{text-decoration:none}',""]),t.exports=c},255:function(t,n,e){"use strict";e.r(n);var r={name:"CustomNavbar"},o=(e(253),e(45)),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nav",[e("div",{staticClass:"container"},[e("a",{staticClass:"logo",attrs:{href:"/"}},[t._v("\n      taylan\n      "),e("span",{staticClass:"lite"},[t._v("dogan")])]),t._v(" "),e("div",{staticClass:"links"},[e("a",{staticStyle:{margin:"0px 10px 0px 10px"},attrs:{href:"/projects/"}},[t._v("projects")]),t._v(" "),e("span",[t._v("|")]),t._v(" "),e("a",{staticStyle:{margin:"0px 10px 0px 10px"},attrs:{href:"/blogs/"}},[t._v("blog")]),t._v(" "),e("span",[t._v("|")]),t._v(" "),e("a",{staticStyle:{"margin-left":"10px"},attrs:{href:"/taylan_cv.pdf",target:"_blank"}},[t._v("resume")])])])])}],!1,null,null,null);n.default=component.exports},281:function(t,n,e){var content=e(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(104).default)("2c350a03",content,!0,{sourceMap:!1})},297:function(t,n,e){"use strict";e(281)},298:function(t,n,e){var r=e(103)(!1);r.push([t.i,'.container>div{max-width:800px;margin:30px auto;display:table;width:100%}nav .container{max-width:100%;padding:0}h1{font-size:20px}h1,p{font-family:"lato"}p{font-size:18px}.date{font-size:14px;float:right}.date,ul>li{font-family:"lato"}ul>li{font-size:18px}',""]),t.exports=r},322:function(t,n,e){"use strict";e.r(n);var r=e(8),o=(e(46),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e,r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.$content,r=t.params,n.next=3,e("projects",r.slug).fetch();case 3:return o=n.sent,n.abrupt("return",{project:o});case 5:case"end":return n.stop()}}),n)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}),l=(e(297),e(45)),component=Object(l.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("div",[e("CustomNavbar"),t._v(" "),e("project",[e("br"),t._v(" "),e("br"),t._v(" "),e("h1",[t._v(t._s(t.project.title))]),t._v(" "),e("hr"),t._v(" "),e("nuxt-content",{attrs:{document:t.project}}),t._v(" "),e("br"),t._v(" "),e("hr"),t._v(" "),e("p",{staticClass:"date"},[t._v(t._s(t.formatDate(t.project.updatedAt)))])],1)],1)])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{CustomNavbar:e(255).default})}}]);