(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17671ca8"],{"1f67":function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"portfolioDetail"}},[o("b-container",[o("b-row",[o("b-col",{staticClass:"d-flex mt-2 flex-column align-items-center justify-content-center"},[o("b-card",{staticClass:"mb-2 portfolioEntry",attrs:{title:t.title,"img-src":t.coverImageUrl,"img-top":"","header-tag":"header","footer-tag":"footer",tag:"article"},scopedSlots:t._u([{key:"footer",fn:function(){return[o("b-button",{attrs:{to:"/portfolio",variant:"danger"}},[t._v("Back")]),o("b-card-text",[t._v("Team Size: "+t._s(t.teamSize))]),o("b-card-text",[t._v("Created: "+t._s(new Date(t.when).toLocaleString("en-us")))]),o("b-button",{attrs:{variant:"success",target:"_blank",href:t.demoLink}},[t._v("Click for demo")]),o("b-card-text",[t._v("Keywords:")]),o("div",{staticClass:"d-flex align-items-center flex-wrap"},t._l(t.keywords,(function(e){return o("span",{key:e,staticClass:"keyword"},[t._v(t._s(e))])})),0)]},proxy:!0}])},[o("span",{domProps:{innerHTML:t._s(t.content)}})])],1)],1),o("b-row",[o("b-col",[o("div",{attrs:{id:"disqus_thread"}}),o("noscript",[t._v(" Please enable JavaScript to view the "),o("a",{attrs:{href:"https://disqus.com/?ref_noscript"}},[t._v("comments powered by Disqus.")])])])],1)],1)],1)},a=[],n=o("bc3a"),s=o.n(n),i=o("4ad9"),c={data:function(){return{content:"",keywords:[],title:"",coverImageUrl:"",when:null,teamSize:0,demoLink:""}},created:function(){var t=this;s.a.get(i["a"]+"/portfolio/portfolioEntries/"+this.$route.params.id).then((function(e){t.title=e.data.portfolioEntry.title,t.content=e.data.portfolioEntry.content,t.coverImageUrl=e.data.portfolioEntry.coverImageUrl,t.keywords=e.data.portfolioEntry.keywords,t.when=e.data.portfolioEntry.when,t.teamSize=e.data.portfolioEntry.teamSize,t.demoLink=e.data.portfolioEntry.demoLink})).catch((function(e){e.response?t.$bvToast.toast(e.response.data.message):t.$bvToast.toast("An error occured: "+JSON.stringify(e))}));(function(){var t=document,e=t.createElement("script");e.src="https://serkanozel.disqus.com/embed.js",e.setAttribute("data-timestamp",+new Date),(t.head||t.body).appendChild(e)})()}},l=c,d=(o("2316"),o("2877")),f=Object(d["a"])(l,r,a,!1,null,null,null);e["default"]=f.exports},2316:function(t,e,o){"use strict";var r=o("9c5f"),a=o.n(r);a.a},"9c5f":function(t,e,o){}}]);
//# sourceMappingURL=chunk-17671ca8.e49c2267.js.map