(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-559d6362"],{"9d5a":function(e,t,n){"use strict";var a=n("b198"),o=n.n(a);o.a},b198:function(e,t,n){},fd3f:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"blog"}},[n("b-container",{staticClass:"blogContainer"},[n("b-row",[n("b-col",{staticClass:"d-flex justify-content-center"},[n("b-button-group",{attrs:{vertical:""}},[e.loggedIn?n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.blog-modal",modifiers:{"blog-modal":!0}}],attrs:{variant:"success"},on:{click:e.resetData}},[e._v("New blog")]):e._e(),e.newBlogLoading?n("b-spinner",{staticClass:"mt-2",attrs:{variant:"warning"}}):e._e(),n("b-modal",{attrs:{size:"xl",id:"blog-modal","ok-variant":"success","cancel-variant":"danger","ok-title":"Submit","cancel-title":"Cancel",title:"Add new blog!","no-enforce-focus":""},on:{ok:e.handleOk}},[n("form",{ref:"form",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit(t)}}},[n("b-form-group",{attrs:{state:e.titleState,label:"Title: ","label-for":"name-input","invalid-feedback":"You need to enter a title"}},[n("b-form-input",{attrs:{id:"name-input",state:e.titleState,required:""},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1),n("b-form-group",{attrs:{label:"Content: ","label-for":"content-input"}},[n("medium-editor",{attrs:{text:e.content,options:e.options,"custom-tag":"div"},on:{edit:e.processEditOperation}})],1),n("b-form-group",{attrs:{state:e.coverImageState,label:"Cover Image: ","label-for":"cover-image-input","invalid-feedback":"You need to add a cover image"}},[n("b-form-file",{attrs:{id:"cover-image-input",accept:"image/*","browse-text":"Select",placeholder:"Select or drag an image","drop-placeholder":"You can drop",state:e.coverImageState,required:""},model:{value:e.coverImageUrl,callback:function(t){e.coverImageUrl=t},expression:"coverImageUrl"}})],1),n("b-form-group",{attrs:{label:"Keywords: ","label-for":"keywords-input","invalid-feedback":"Enter keywords comma seperated"}},[n("b-form-tags",{attrs:{id:"keywords-input","tag-pills":"","tag-variant":"primary","remove-on-delete":"",separator:",","duplicate-tag-text":"Same keyword exists",placeholder:"Add keywords via pressing enter or comma"},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}})],1)],1)])],1)],1)],1),n("b-row",{staticClass:"mt-2"},[e.blogsLoading?n("b-col",{staticClass:"d-flex flex-column align-items-center justify-content-center"},[n("b-spinner",{attrs:{variant:"success"}})],1):e._e(),e.blogsLoading?e._e():n("b-col",{staticClass:"d-flex flex-column align-items-center justify-content-center"},[0==e.blogEntries.length?n("p",[e._v("No blog entries found")]):e._e(),0!=e.blogEntries.length?n("div",{staticStyle:{width:"100%",display:"flex","flex-direction":"column","align-items":"center"}},e._l(e.blogEntries,(function(t,a){return n("b-card",{key:t._id,staticClass:"mb-5 blogEntry",attrs:{"header-tag":"header","footer-tag":"footer",id:"blog"+t._id.toString(),title:t.title,"img-src":t.coverImageUrl,"img-top":"",tag:"article"},scopedSlots:e._u([{key:"footer",fn:function(){return[n("b-button-group",{staticClass:"d-flex flex-wrap"},[e.loggedIn?n("b-button",{staticClass:"mr-2",attrs:{to:"/edit-blog/"+t._id,variant:"success"}},[e._v("Edit")]):e._e(),e.loggedIn?n("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"deletemodal"+a,expression:"'deletemodal'+ind"}],staticClass:"mr-2",attrs:{variant:"danger"}},[e.deleteLoading?n("b-spinner",{attrs:{variant:"warning",small:""}}):e._e(),e.deleteLoading?e._e():n("span",[e._v("Delete")])],1):e._e(),n("b-modal",{attrs:{id:"deletemodal"+a,title:"Delete","ok-title":"Delete","cancel-title":"Cancel","ok-variant":"danger","cancel-variant":"success"},on:{ok:function(n){return e.onDeleteOk(t._id)}}},[n("p",{staticClass:"my-4"},[e._v("Are you sure to delete?")])])],1),n("b-card-text",[e._v("Created: "+e._s(new Date(t.when).toLocaleString("en-us")))]),n("b-card-text",[e._v("Keywords:")]),n("div",{staticClass:"d-flex align-items-center flex-wrap"},e._l(t.keywords,(function(t){return n("span",{key:t,staticClass:"keyword"},[e._v(e._s(t))])})),0)]},proxy:!0}],null,!0)},[n("b-card-body",{staticStyle:{overflow:"hidden","max-height":"20rem"}},[n("span",{domProps:{innerHTML:e._s(t.content)}})]),n("div",{staticClass:"d-flex align-items-center flex-column justify-content-center"},[n("b-button",{staticClass:"mt-2",attrs:{to:"/blog/"+t._id,variant:"primary"}},[e._v("Read more")])],1)],1)})),1):e._e()])],1)],1)],1)},o=[],r=(n("d3b7"),n("96cf"),n("1da1")),i=n("4884"),l=n.n(i),s=n("4360"),c={data:function(){return{keywords:[],options:{placeholder:!1,buttonLabels:"fontawesome",toolbar:{buttons:["h1","h2","h3","anchor","bold","italic","unorderedlist","orderedlist","table"]},extensions:{table:new MediumEditorTable}},content:"",title:"",coverImageUrl:null,deleteLoading:!1,blogsLoading:!1,newBlogLoading:!1,coverImageBase64:""}},components:{"medium-editor":l.a},computed:{titleState:function(){return this.title.length>0},coverImageState:function(){return null!=this.coverImageUrl},loggedIn:function(){return s["a"].state.loggedIn},blogEntries:function(){return s["a"].state.blogEntries}},created:function(){this.blogsLoading=!0,s["a"].dispatch("fetchBlogs",this)},methods:{toBase64:function(e){return new Promise((function(t,n){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){return t(a.result)},a.onerror=function(e){return n(e)}}))},handleOk:function(e){e.preventDefault(),this.handleSubmit()},checkFormValidity:function(){var e=this.$refs.form.checkValidity();return e},handleSubmit:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.checkFormValidity()){t.next=2;break}return t.abrupt("return");case 2:return e.newBlogLoading=!0,t.prev=3,t.next=6,e.toBase64(e.coverImageUrl);case 6:e.coverImageBase64=t.sent,t.next=14;break;case 9:return t.prev=9,t.t0=t["catch"](3),e.$bvToast.toast("An error occured: "+JSON.stringify(t.t0)),e.newBlogLoading=!1,t.abrupt("return");case 14:s["a"].dispatch("addBlogEntry",e),e.$nextTick((function(){e.$bvModal.hide("blog-modal")}));case 16:case"end":return t.stop()}}),t,null,[[3,9]])})))()},processEditOperation:function(e){this.content=e.api.origElements.innerHTML},onDeleteOk:function(e){this.onDelete(e)},onDelete:function(e){this.deleteLoading=!0,s["a"].dispatch("deleteBlog",{vm:this,_id:e})},resetData:function(){this.content="",this.coverImageUrl=null,this.keywords=[],this.title=""},onLinkLoad:function(){DISQUSWIDGETS.getCount()}}},d=c,u=(n("9d5a"),n("2877")),g=Object(u["a"])(d,a,o,!1,null,null,null);t["default"]=g.exports}}]);
//# sourceMappingURL=chunk-559d6362.d118e85e.js.map