(function(e){function t(t){for(var n,r,i=t[0],c=t[1],l=t[2],u=0,d=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],n=!0,r=1;r<o.length;r++){var i=o[r];0!==a[i]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=o[0]))}return e}var n={},r={app:0},a={app:0},s=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"32480bed","chunk-17671ca8":"e49c2267","chunk-25bf00cf":"595a068c","chunk-2d0a4b20":"6c8fe049","chunk-2d0c1d76":"4e95528d","chunk-00fa4d86":"b9a397dc","chunk-1e5c348e":"9de67183","chunk-559d6362":"3d320e99","chunk-6a84aa19":"d0ba4281","chunk-43af1ee7":"ff786e08","chunk-6fedeada":"71a09207"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(e){var t=[],o={about:1,"chunk-17671ca8":1,"chunk-25bf00cf":1,"chunk-00fa4d86":1,"chunk-1e5c348e":1,"chunk-559d6362":1,"chunk-6a84aa19":1,"chunk-6fedeada":1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=new Promise((function(t,o){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"8cc09d11","chunk-17671ca8":"a22de653","chunk-25bf00cf":"5b8027bf","chunk-2d0a4b20":"31d6cfe0","chunk-2d0c1d76":"31d6cfe0","chunk-00fa4d86":"69dfbdc0","chunk-1e5c348e":"f02f82d2","chunk-559d6362":"3e5b98d7","chunk-6a84aa19":"94bcd256","chunk-43af1ee7":"31d6cfe0","chunk-6fedeada":"3ad82d75"}[e]+".css",a=c.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===n||u===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete r[e],f.parentNode.removeChild(f),o(s)},f.href=a;var g=document.getElementsByTagName("head")[0];g.appendChild(f)})).then((function(){r[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,o){n=a[e]=[t,o]}));t.push(n[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var o=a[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,o[1](d)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(o,n,function(t){return e[t]}.bind(null,n));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;s.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"26fe":function(e,t,o){},4360:function(e,t,o){"use strict";o("c740"),o("4160"),o("fb6a"),o("a434"),o("d3b7"),o("25f0"),o("159b"),o("96cf");var n=o("1da1"),r=o("2b0e"),a=o("2f62"),s=o("bc3a"),i=o.n(s),c=o("4ad9");r["default"].use(a["a"]),t["a"]=new a["a"].Store({state:{loggedIn:!1,blogEntries:[],portfolioEntries:[]},mutations:{login:function(e){e.loggedIn=!0},logout:function(e){e.loggedIn=!1},setBlogEntries:function(e,t){e.blogEntries=t},setPortfolioEntries:function(e,t){e.portfolioEntries=t},pushBlogEntry:function(e,t){e.blogEntries.push(t)},pushPortfolioEntry:function(e,t){e.portfolioEntries.push(t)},deleteBlog:function(e,t){var o=e.blogEntries.findIndex((function(e){return e._id===t}));-1!=o&&e.blogEntries.splice(o,1)},deletePortfolio:function(e,t){var o=e.portfolioEntries.findIndex((function(e){return e._id===t}));-1!=o&&e.portfolioEntries.splice(o,1)},editBlogChangeCover:function(e,t){var o=e.blogEntries.findIndex((function(e){return e._id.toString()===t._id}));-1!=o&&(e.blogEntries[o].content=t.content,e.blogEntries[o].title=t.title,e.blogEntries[o].keywords=t.keywords,e.blogEntries[o].coverImageUrl=t.coverImageUrl)},editBlog:function(e,t){var o=e.blogEntries.findIndex((function(e){return e._id.toString()===t._id}));-1!=o&&(e.blogEntries[o].content=t.content,e.blogEntries[o].title=t.title,e.blogEntries[o].keywords=t.keywords)},editPortfolioChangeCover:function(e,t){var o=e.portfolioEntries.findIndex((function(e){return e._id.toString()===t._id}));-1!=o&&(e.portfolioEntries[o].content=t.content,e.portfolioEntries[o].title=t.title,e.portfolioEntries[o].keywords=t.keywords,e.portfolioEntries[o].coverImageUrl=t.coverImageUrl,e.portfolioEntries[o].when=t.when)},editPortfolio:function(e,t){var o=e.portfolioEntries.findIndex((function(e){return e._id.toString()===t._id}));-1!=o&&(e.portfolioEntries[o].content=t.content,e.portfolioEntries[o].title=t.title,e.portfolioEntries[o].keywords=t.keywords,e.portfolioEntries[o].when=t.when)}},actions:{checkLogin:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=e.commit,e.state,t.next=3,i.a.post(c["a"]+"/auth/check-login",{},{withCredentials:!0}).then((function(e){o("login")})).catch((function(e){o("logout")}));case 3:case"end":return t.stop()}}),t)})))()},logout:function(e,t){var o=e.commit;e.state;i.a.post(c["a"]+"/auth/logout",{},{withCredentials:!0}).then((function(e){t.$bvToast.toast("Logged out successfully."),o("logout")})).catch((function(e){e.response?t.$bvToast.toast(e.response.data.message):t.$bvToast.toast("Could not logged out : "+JSON.stringify(e))}))},login:function(e,t){var o=e.commit;e.state;i.a.post(c["a"]+"/auth/login",t.form).then((function(e){t.$bvToast.toast(e.data.message),t.loading=!1,o("login"),t.redirect?t.$router.push(t.redirect):t.$router.push("/")})).catch((function(e){if(e.response)if(422==e.response.data.error.statusCode&&e.response.data.error.problems.length>0){var o="";e.response.data.error.problems.forEach((function(e){o+=" * "+e.msg})),t.$bvToast.toast(e.response.data.message+":     "+o)}else t.$bvToast.toast(e.response.data.message);else t.$bvToast.toast("An error occured : "+JSON.stringify(e));t.loading=!1}))},fetchBlogsAndPortfolios:function(e){var t=e.commit;e.state;i.a.get(c["a"]+"/blog/blogEntries").then((function(e){t("setBlogEntries",e.data.blogEntries)})).catch((function(e){console.log(e)})),i.a.get(c["a"]+"/portfolio/portfolioEntries").then((function(e){t("setPortfolioEntries",e.data.portfolioEntries)})).catch((function(e){console.log(e)}))},fetchBlogs:function(e,t){var o=e.commit,n=e.state;0==n.blogEntries.length?i.a.get(c["a"]+"/blog/blogEntries").then((function(e){o("setBlogEntries",e.data.blogEntries),t.blogEntries=n.blogEntries.slice(4*((t.$route.query.page?t.$route.query.page:1)-1),4*((t.$route.query.page?t.$route.query.page:1)-1)+4),t.blogsLoading=!1})).catch((function(e){e.response?t.$bvToast.toast(e.response.data.message):t.$bvToast.toast("Could not get blog entries : "+JSON.stringify(e)),t.blogsLoading=!1})):(t.blogEntries=n.blogEntries.slice(4*((t.$route.query.page?t.$route.query.page:1)-1),4*((t.$route.query.page?t.$route.query.page:1)-1)+4),t.blogsLoading=!1)},fetchPortfolios:function(e,t){var o=e.commit,n=e.state;0==n.portfolioEntries.length?i.a.get(c["a"]+"/portfolio/portfolioEntries").then((function(e){o("setPortfolioEntries",e.data.portfolioEntries),t.portfolioEntries=n.portfolioEntries.slice(4*((t.$route.query.page?t.$route.query.page:1)-1),4*((t.$route.query.page?t.$route.query.page:1)-1)+4),t.portfoliosLoading=!1})).catch((function(e){e.response?t.$bvToast.toast(e.response.data.message):t.$bvToast.toast("Could not get portfolio entries : "+JSON.stringify(e)),t.portfoliosLoading=!1})):(t.portfolioEntries=n.portfolioEntries.slice(4*((t.$route.query.page?t.$route.query.page:1)-1),4*((t.$route.query.page?t.$route.query.page:1)-1)+4),t.portfoliosLoading=!1)},addBlogEntry:function(e,t){var o=e.commit;e.state;i.a.post(c["a"]+"/blog/addBlogEntry",{content:t.content,title:t.title,keywords:t.keywords,coverImageUrl:t.coverImageBase64}).then((function(e){t.$bvToast.toast(e.data.message),o("pushBlogEntry",{content:t.content,title:t.title,keywords:t.keywords,coverImageUrl:t.coverImageBase64,_id:e.data._id,when:(new Date).toISOString()}),t.newBlogLoading=!1})).catch((function(e){if(e.response)if(422==e.response.data.error.statusCode&&e.response.data.error.problems.length>0){var o="";e.response.data.error.problems.forEach((function(e){o+=" * "+e.msg})),t.$bvToast.toast(e.response.data.message+":     "+o)}else t.$bvToast.toast(e.response.data.message);else t.$bvToast.toast("An error occured: "+JSON.stringify(e));t.newBlogLoading=!1}))},addPortfolioEntry:function(e,t){var o=e.commit;e.state;i.a.post(c["a"]+"/portfolio/addPortfolioEntry",{content:t.content,title:t.title,keywords:t.keywords,coverImageUrl:t.coverImageBase64,demoLink:t.demoLink,when:t.when,teamSize:t.teamSize}).then((function(e){t.$bvToast.toast(e.data.message),o("pushPortfolioEntry",{content:t.content,title:t.title,keywords:t.keywords,coverImageUrl:t.coverImageBase64,_id:e.data._id}),t.newPortfolioLoading=!1})).catch((function(e){if(e.response)if(422==e.response.data.error.statusCode&&e.response.data.error.problems.length>0){var o="";e.response.data.error.problems.forEach((function(e){o+=" * "+e.msg})),t.$bvToast.toast(e.response.data.message+":     "+o)}else t.$bvToast.toast(e.response.data.message);else t.$bvToast.toast("An error occured: "+JSON.stringify(e));t.newPortfolioLoading=!1}))},deleteBlog:function(e,t){var o=e.commit,n=(e.state,t.vm),r=t._id;i.a.delete(c["a"]+"/blog/deleteBlogEntry/"+r.toString()).then((function(e){n.$bvToast.toast(e.data.message);var t=document.querySelector("#blog"+r.toString());t.parentNode.removeChild(t),n.deleteLoading=!1,o("deleteBlog",r)})).catch((function(e){if(e.response)if(422==e.response.data.error.statusCode&&e.response.data.error.problems.length>0){var t="";e.response.data.error.problems.forEach((function(e){t+=" * "+e.msg})),n.$bvToast.toast(e.response.data.message+":     "+t)}else n.$bvToast.toast(e.response.data.message);else n.$bvToast.toast("An error occured: "+JSON.stringify(e));n.deleteLoading=!1}))},deletePortfolio:function(e,t){var o=e.commit,n=(e.state,t.vm),r=t._id;i.a.delete(c["a"]+"/portfolio/deletePortfolioEntry/"+r.toString()).then((function(e){n.$bvToast.toast(e.data.message);var t=document.querySelector("#portfolio"+r.toString());t.parentNode.removeChild(t),n.deleteLoading=!1,o("deletePortfolio",r)})).catch((function(e){if(e.response)if(422==e.response.data.error.statusCode&&e.response.data.error.problems.length>0){var t="";e.response.data.error.problems.forEach((function(e){t+=" * "+e.msg})),n.$bvToast.toast(e.response.data.message+":     "+t)}else n.$bvToast.toast(e.response.data.message);else n.$bvToast.toast("An error occured: "+JSON.stringify(e));n.deleteLoading=!1}))}}})},"4ad9":function(e,t,o){"use strict";var n="localhost"==window.location.hostname?"https://serkanozel.me":"";t["a"]=n},"4e18":function(e,t,o){"use strict";var n=o("26fe"),r=o.n(n);r.a},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("router-link",{staticStyle:{"background-color":"transparent",border:"none"},attrs:{to:"/"}},[o("b-img",{attrs:{center:"",id:"logo",alt:"Vue logo",src:"/assets/logo.png"}})],1),o("div",{staticStyle:{"text-align":"center"},attrs:{id:"nav"}},[o("b-navbar-brand",[e._v("Serkan Özel's Personal Site")]),o("b-navbar",{staticClass:"d-flex justify-content-between",attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[o("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e.loggedIn?e._e():o("b-button",{attrs:{to:"/login",variant:"success"}},[e._v("Login")]),e.loggedIn?o("b-button",{attrs:{variant:"danger"},on:{click:function(t){return t.preventDefault(),e.logout(t)}}},[e._v("Logout")]):e._e(),o("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[o("b-navbar-nav",{staticStyle:{display:"contents"},attrs:{fill:"",align:"center"}},[o("b-nav-item",{attrs:{to:"/"}},[e._v("Home")]),o("b-nav-item",{attrs:{to:"/blog"}},[e._v("Blog")]),o("b-nav-item",{attrs:{to:"/portfolio"}},[e._v("Portfolio")]),o("b-nav-item",{attrs:{to:"/about"}},[e._v("About")])],1)],1)],1)],1),o("router-view")],1)},a=[],s=o("4360"),i={data:function(){return{}},created:function(){s["a"].dispatch("checkLogin"),s["a"].dispatch("fetchBlogsAndPortfolios")},computed:{loggedIn:function(){return s["a"].state.loggedIn}},methods:{logout:function(){s["a"].dispatch("logout",this)}}},c=i,l=(o("5c0b"),o("2877")),u=Object(l["a"])(c,r,a,!1,null,null,null),d=u.exports,f=(o("99af"),o("a15b"),o("d81d"),o("13d5"),o("45fc"),o("d3b7"),o("2909"),o("96cf"),o("1da1")),g=o("8c4f"),p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("b-container",{staticClass:"homeContainer"},[o("b-row",{attrs:{"align-h":"center"}},[o("b-col",[o("p",[e._v("Welcome to my personal blog")])])],1)],1)],1)},h=[],b={name:"Home",components:{},data:function(){return{}},methods:{}},m=b,v=(o("4e18"),Object(l["a"])(m,p,h,!1,null,"c73761ce",null)),y=v.exports;n["default"].use(g["a"]);var k=[{path:"/",name:"Home Page",component:y},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}},{path:"/blog",name:"Blog",component:function(){return Promise.all([o.e("chunk-2d0c1d76"),o.e("chunk-559d6362")]).then(o.bind(null,"fd3f"))}},{path:"/blog/:id",name:"Blog detail",component:function(){return o.e("chunk-25bf00cf").then(o.bind(null,"054f"))}},{path:"/edit-blog/:id",name:"Edit blog",component:function(){return Promise.all([o.e("chunk-2d0c1d76"),o.e("chunk-1e5c348e")]).then(o.bind(null,"1b9a"))},meta:{requiresAuth:!0}},{path:"/portfolio",name:"Portfolio",component:function(){return Promise.all([o.e("chunk-2d0c1d76"),o.e("chunk-00fa4d86")]).then(o.bind(null,"c9e5"))}},{path:"/portfolio/:id",name:"Portfolio Detail",component:function(){return o.e("chunk-17671ca8").then(o.bind(null,"1f67"))}},{path:"/edit-portfolio/:id",name:"Edit portfolio",component:function(){return Promise.all([o.e("chunk-2d0c1d76"),o.e("chunk-6a84aa19")]).then(o.bind(null,"32a8"))},meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:function(){return o.e("chunk-6fedeada").then(o.bind(null,"a55b"))}},{path:"/resetPassword",name:"Reset Password",component:function(){return o.e("chunk-2d0a4b20").then(o.bind(null,"0813"))}},{path:"/newPassword/:token",name:"New Password",component:function(){return o.e("chunk-43af1ee7").then(o.bind(null,"d9b6"))}}],E=new g["a"]({mode:"history",base:"/",routes:k});E.beforeEach(function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t,o,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.matched.some((function(e){return e.meta.requiresAuth}))){e.next=7;break}if(s["a"].state.loggedIn){e.next=4;break}return e.next=4,s["a"].dispatch("checkLogin",{redirect:"noredirect"});case 4:s["a"].state.loggedIn?n():n({path:"/login",query:{redirect:t.fullPath}}),e.next=8;break;case 7:n();case 8:case"end":return e.stop()}}),e)})));return function(t,o,n){return e.apply(this,arguments)}}());var w=E,$=o("5f5b");o("a1d2");n["default"].config.productionTip=!1,n["default"].use($["a"]),new n["default"]({router:w,store:s["a"],render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,o){"use strict";var n=o("9c0c"),r=o.n(n);r.a},"9c0c":function(e,t,o){},a1d2:function(e,t,o){}});
//# sourceMappingURL=app.a4706be7.js.map