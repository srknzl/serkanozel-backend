(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17671ca8"],{"1f67":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"blogDetail"}},[n("b-container",[n("b-row",[n("b-col",{staticClass:"d-flex flex-column align-items-center justify-content-center"},[n("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"40rem",width:"100%"},attrs:{title:t.title,"img-src":t.coverImageUrl,"img-top":"",tag:"article"},scopedSlots:t._u([{key:"footer",fn:function(){return[n("b-card-text",[t._v("Keywords:")]),t._l(t.keywords,(function(e){return n("span",{key:e,staticStyle:{"font-style":"italic"}},[t._v(t._s(e)+", ")])}))]},proxy:!0}])},[n("span",{domProps:{innerHTML:t._s(t.content)}}),n("b-button",{attrs:{to:"/blog",variant:"danger"}},[t._v("Back")])],1)],1)],1)],1)],1)},a=[],o=n("bc3a"),c=n.n(o),s={data:function(){return{content:"",keywords:[],title:"",coverImageUrl:""}},created:function(){var t=this;c.a.get("/blog/blogEntries/"+this.$route.params.id).then((function(e){t.title=e.data.blogEntry.title,t.content=e.data.blogEntry.content,t.coverImageUrl=e.data.blogEntry.coverImageUrl,t.keywords=e.data.blogEntry.keywords})).catch((function(e){e.response?t.$bvToast.toast(e.response.data.message):t.$bvToast.toast("An error occured: "+JSON.stringify(e))}))}},i=s,l=(n("2316"),n("2877")),u=Object(l["a"])(i,r,a,!1,null,null,null);e["default"]=u.exports},2316:function(t,e,n){"use strict";var r=n("9c5f"),a=n.n(r);a.a},"9c5f":function(t,e,n){}}]);
//# sourceMappingURL=chunk-17671ca8.300b948c.js.map