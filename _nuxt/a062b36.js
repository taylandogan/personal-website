(window.webpackJsonp=window.webpackJsonp||[]).push([[7,3],{250:function(t,e,n){var content=n(254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(104).default)("69fd37e0",content,!0,{sourceMap:!1})},252:function(t,e,n){t.exports=n.p+"fonts/Lato-Regular.9919edf.ttf"},253:function(t,e,n){"use strict";n(250)},254:function(t,e,n){var o=n(103),l=n(251),r=n(252),c=o(!1),d=l(r);c.push([t.i,'@font-face{font-family:"Lato";src:local("Lato"),url('+d+') format("truetype")}nav{margin-top:50px;margin-bottom:20px;padding:0}nav .container{max-width:1200px;margin:0 auto;display:table;width:100%;padding:0 50px}nav .container a.logo{display:inline-block;cursor:pointer;font-family:"lato";letter-spacing:1px;font-size:22px;color:#000}nav .container a{transition:all .3s ease 0s}nav .container .links{text-align:right;font-family:"lato";height:auto}nav .container .links a{font-family:"lato";font-size:22px;color:#000;letter-spacing:2px}nav .container>div{display:table-cell;width:50%;vertical-align:middle}nav .container .links>a:last-child{margin-right:0}.lite{opacity:.3}',""]),t.exports=c},255:function(t,e,n){t.exports=n.p+"img/pp.8d1b338.jpeg"},256:function(t,e,n){var content=n(259);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(104).default)("1bc130ad",content,!0,{sourceMap:!1})},257:function(t,e,n){"use strict";n.r(e);var o={name:"CustomNavbar"},l=(n(253),n(45)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("div",{staticClass:"container"},[n("a",{staticClass:"logo"},[t._v("\n      taylan\n      "),n("span",{staticClass:"lite"},[t._v("dogan")])]),t._v(" "),n("div",{staticClass:"links"},[n("a",{staticStyle:{margin:"0px 10px 0px 10px"},attrs:{href:"#"}},[t._v("projects")]),t._v(" "),n("span",[t._v("|")]),t._v(" "),n("a",{staticStyle:{margin:"0px 10px 0px 10px"},attrs:{href:"#"}},[t._v("blog")]),t._v(" "),n("span",[t._v("|")]),t._v(" "),n("a",{staticStyle:{"margin-left":"10px"},attrs:{href:"/taylan_cv.pdf",target:"_blank"}},[t._v("resume")])])])])}],!1,null,null,null);e.default=component.exports},258:function(t,e,n){"use strict";n(256)},259:function(t,e,n){var o=n(103)(!1);o.push([t.i,'.container>div[data-v-3063808b]{max-width:1200px;margin:30px auto;display:table;padding:0 50px;width:100%}.container>div>div[data-v-3063808b]{display:table-cell;width:50%;vertical-align:middle}.intro-body .name[data-v-3063808b]{font-family:"lato";font-size:24px;letter-spacing:1.5px;color:#1f9102}.intro-body .subtitle[data-v-3063808b]{margin-top:5px;margin-bottom:5px;font-family:"lato";color:#89c979;font-size:18px;letter-spacing:2px}.intro-body .intro[data-v-3063808b]{color:#000}.container .profile-img img[data-v-3063808b]{float:right;border-radius:50%}.img-responsive[data-v-3063808b]{display:block;max-width:100%;height:auto;margin-right:10%}img[data-v-3063808b]{vertical-align:middle;border:0}p.intro[data-v-3063808b]{line-height:26px}p[data-v-3063808b]{font-size:18px;font-family:"lato"}hr[data-v-3063808b]{opacity:.4}',""]),t.exports=o},260:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("div",[o("div",{staticClass:"intro-body"},[o("br"),t._v(" "),o("div",{staticClass:"name"},[t._v("Hey, I am Taylan :)")]),t._v(" "),o("div",{staticClass:"subtitle"},[t._v("DEVELOPER")]),t._v(" "),o("br"),t._v(" "),o("p",{staticClass:"intro"},[t._v("A developer living in Amsterdam with broad interests including deep learning, game design, data compression and bioinformatics.")]),t._v(" "),o("br"),t._v(" "),o("hr"),t._v(" "),o("br")]),t._v(" "),o("div",{staticClass:"profile-img"},[o("img",{staticClass:"img-responsive",attrs:{src:n(255),width:"150px"}})])])])}],l={name:"CustomHeader"},r=(n(258),n(45)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),o,!1,null,"3063808b",null);e.default=component.exports},262:function(t,e,n){var content=n(271);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(104).default)("1b7833da",content,!0,{sourceMap:!1})},270:function(t,e,n){"use strict";n(262)},271:function(t,e,n){var o=n(103),l=n(251),r=n(252),c=o(!1),d=l(r);c.push([t.i,'@font-face{font-family:"Lato";src:local("Lato"),url('+d+') format("truetype")}',""]),t.exports=c},297:function(t,e,n){"use strict";n.r(e);var o=n(2),l=n(267),r=n.n(l),c=(n(268),n(257)),d=n(260);o.default.use(r.a);var v={name:"IndexPage",components:{CustomNavbar:c.default,CustomHeader:d.default}},f=(n(270),n(45)),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("CustomNavbar"),t._v(" "),n("CustomHeader")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CustomNavbar:n(257).default,CustomHeader:n(260).default})}}]);