(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25bf00cf"],{"054f":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"blogDetail"}},[a("b-container",[a("b-row",[a("b-col",{staticClass:"d-flex mt-2 flex-column align-items-center justify-content-center"},[a("b-card",{staticClass:"mb-2 blogEntry",attrs:{title:t.title,"img-src":t.coverImageUrl,"img-top":"","header-tag":"header","footer-tag":"footer",tag:"article"},scopedSlots:t._u([{key:"footer",fn:function(){return[a("b-button",{attrs:{to:"/blog",variant:"danger"}},[t._v("Back")]),a("b-card-text",[t._v("Created: "+t._s(new Date(t.when).toLocaleString("en-us")))]),a("b-card-text",[t._v("Keywords:")]),a("div",{staticClass:"d-flex align-items-center flex-wrap"},t._l(t.keywords,(function(e){return a("span",{key:e,staticClass:"keyword"},[t._v(t._s(e))])})),0)]},proxy:!0}])},[a("span",{domProps:{innerHTML:t._s(t.content)}})])],1)],1),a("b-row",[a("b-col",[a("div",{attrs:{id:"disqus_thread"}}),a("noscript",[t._v(" Please enable JavaScript to view the "),a("a",{attrs:{href:"https://disqus.com/?ref_noscript"}},[t._v("comments powered by Disqus.")])])])],1)],1)],1)},r=[],o=a("bc3a"),s=a.n(o),c=a("4ad9"),i={data:function(){return{content:"",keywords:[],title:"",when:null,coverImageUrl:""}},created:function(){var t=this;s.a.get(c["a"]+"/blog/blogEntries/"+this.$route.params.id).then((function(e){t.title=e.data.blogEntry.title,t.content=e.data.blogEntry.content,t.coverImageUrl=e.data.blogEntry.coverImageUrl,t.keywords=e.data.blogEntry.keywords,t.when=e.data.blogEntry.when})).catch((function(e){e.response?t.$bvToast.toast(e.response.data.message):t.$bvToast.toast("An error occured: "+JSON.stringify(e))}));(function(){var t=document,e=t.createElement("script");e.src="https://serkanozel.disqus.com/embed.js",e.setAttribute("data-timestamp",+new Date),(t.head||t.body).appendChild(e)})()}},l=i,d=(a("23f5"),a("2877")),u=Object(d["a"])(l,n,r,!1,null,null,null);e["default"]=u.exports},"23f5":function(t,e,a){"use strict";var n=a("72f8"),r=a.n(n);r.a},"72f8":function(t,e,a){}}]);
//# sourceMappingURL=chunk-25bf00cf.595a068c.js.map