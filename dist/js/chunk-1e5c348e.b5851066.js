(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e5c348e"],{"1b9a":function(e,t,r){"use strict";r.r(t);var a,o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"editblog"}},[r("b-container",[e.error?r("b-row",[r("b-card-text",{staticStyle:{color:"white"}},[e._v("Error fetching blog.")])],1):e._e(),e.error?e._e():r("b-row",[e.fetchLoading?r("b-col",{staticClass:"d-flex flex-column align-items-center justify-content-center"},[r("b-spinner",{attrs:{variant:"success"}})],1):e._e(),e.fetchLoading?e._e():r("b-col",{staticClass:"d-flex flex-column align-items-center justify-content-center"},[r("b-card",{staticClass:"mb-2",staticStyle:{"max-width":"40rem",width:"100%"},attrs:{"header-tag":"header","footer-tag":"footer","img-alt":"Image","img-src":e.oldImage,tag:"article"},scopedSlots:e._u([{key:"footer",fn:function(){return[r("b-button-group",{staticClass:"d-flex flex-wrap"},[r("b-button",{staticClass:"mr-2",attrs:{variant:"success"},on:{click:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e.editLoading?r("b-spinner",{attrs:{variant:"danger",small:""}}):e._e(),e.editLoading?e._e():r("span",[e._v("Submit")])],1),r("b-button",{attrs:{to:"/blog",variant:"danger"}},[e._v("Back")])],1),r("b-card-text",[e._v("Created: "+e._s(new Date(e.when).toLocaleString("en-us")))])]},proxy:!0}],null,!1,3773607986)},[r("form",{ref:"form",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit(t)}}},[r("b-form-group",{attrs:{state:e.titleState,label:"Title: ","label-for":"name-input","invalid-feedback":"You need to enter a title"}},[r("b-form-input",{attrs:{id:"name-input",state:e.titleState,required:""},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1),r("b-form-group",{attrs:{label:"Content: ","label-for":"content-input"}},[r("medium-editor",{attrs:{text:e.content,options:e.options,"custom-tag":"div"},on:{edit:e.processEditOperation}})],1),r("b-form-group",{attrs:{state:e.coverImageState,label:"Cover Image:(Leave blank not to change current) ","label-for":"cover-image-input"}},[r("b-form-file",{attrs:{id:"cover-image-input",accept:"image/*","browse-text":"Select",placeholder:"Select or drag an image","drop-placeholder":"You can drop"},model:{value:e.coverImageUrl,callback:function(t){e.coverImageUrl=t},expression:"coverImageUrl"}})],1),r("b-form-group",{attrs:{label:"Keywords: ","label-for":"keywords-input","invalid-feedback":"Enter keywords comma-seperated "}},[r("b-form-tags",{attrs:{id:"keywords-input","tag-pills":"","tag-variant":"primary","remove-on-delete":"",separator:",","duplicate-tag-text":"Same keyword entered",placeholder:"Add via pressing enter or comma"},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}})],1)],1)])],1)],1)],1)],1)},n=[],s=(r("4160"),r("d3b7"),r("159b"),r("ade3")),i=(r("96cf"),r("1da1")),c=r("bc3a"),l=r.n(c),d=r("4ad9"),u=r("4884"),m=r.n(u),g=r("4360"),b=(a={data:function(){return{options:{buttonLabels:"fontawesome",toolbar:{buttons:["h1","h2","h3","anchor","bold","italic","unorderedlist","orderedlist","table"]},extensions:{table:new MediumEditorTable},placeholder:!1},error:!1,content:"",keywords:[],title:"",coverImageUrl:null,oldImage:"",editLoading:!1,fetchLoading:!1}},components:{"medium-editor":m.a},computed:{titleState:function(){return this.title.length>0},coverImageState:function(){return null!=this.coverImageUrl}},created:function(){var e=this;this.fetchLoading=!0,l.a.get(d["a"]+"/blog/blogEntries/"+this.$route.params.id).then((function(t){e.title=t.data.blogEntry.title,e.content=t.data.blogEntry.content,e.oldImage=t.data.blogEntry.coverImageUrl,e.keywords=t.data.blogEntry.keywords,e.when=t.data.blogEntry.when,e.fetchLoading=!1})).catch((function(t){if(t.response)if(422==t.response.data.error.statusCode&&t.response.data.error.problems.length>0){var r="";t.response.data.error.problems.forEach((function(e){r+=" * "+e.msg})),e.$bvToast.toast(t.response.data.message+":     "+r)}else e.$bvToast.toast(t.response.data.message);else e.$bvToast.toast("An error occured: "+JSON.stringify(t));e.error=!0,e.fetchLoading=!1}))}},Object(s["a"])(a,"components",{"medium-editor":m.a}),Object(s["a"])(a,"methods",{toBase64:function(e){return new Promise((function(t,r){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){return t(a.result)},a.onerror=function(e){return r(e)}}))},processEditOperation:function(e){this.content=e.api.origElements.innerHTML},checkFormValidity:function(){var e=this.$refs.form.checkValidity();return e},onSubmit:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.checkFormValidity()){t.next=2;break}return t.abrupt("return");case 2:if(e.editLoading=!0,null!=e.coverImageUrl){t.next=7;break}l.a.put(d["a"]+"/blog/editBlogEntry/"+e.$route.params.id,{content:e.content,coverImageUrl:e.oldImage,title:e.title,keywords:e.keywords}).then((function(t){g["a"].commit("editBlog",{_id:e.$route.params.id,content:e.content,title:e.title,keywords:e.keywords}),e.$bvToast.toast(t.data.message),e.editLoading=!1})).catch((function(t){if(t.response)if(422==t.response.data.error.statusCode&&t.response.data.error.problems.length>0){var r="";t.response.data.error.problems.forEach((function(e){r+=" * "+e.msg})),e.$bvToast.toast(t.response.data.message+":     "+r)}else e.$bvToast.toast(t.response.data.message);else e.$bvToast.toast("An error occured: "+JSON.stringify(t));e.editLoading=!1})),t.next=19;break;case 7:return t.prev=7,t.next=10,e.toBase64(e.coverImageUrl);case 10:r=t.sent,t.next=18;break;case 13:return t.prev=13,t.t0=t["catch"](7),e.$bvToast.toast("An error occured: "+JSON.stringify(t.t0)),e.editLoading=!1,t.abrupt("return");case 18:l.a.put(d["a"]+"/blog/editBlogEntry/"+e.$route.params.id,{content:e.content,coverImageUrl:r,title:e.title,keywords:e.keywords}).then((function(t){g["a"].commit("editBlogChangeCover",{_id:e.$route.params.id,content:e.content,title:e.title,coverImageUrl:e.coverImageUrl,keywords:e.keywords}),e.$bvToast.toast(t.data.message),e.oldImage=r,e.editLoading=!1})).catch((function(t){if(t.response)if(422==t.response.data.error.statusCode&&t.response.data.error.problems.length>0){var r="";t.response.data.error.problems.forEach((function(e){r+=" * "+e.msg})),e.$bvToast.toast(t.response.data.message+":     "+r)}else e.$bvToast.toast(t.response.data.message);else e.$bvToast.toast("An error occured: "+JSON.stringify(t));e.editLoading=!1}));case 19:case"end":return t.stop()}}),t,null,[[7,13]])})))()}}),a),f=b,p=(r("d7c1"),r("2877")),v=Object(p["a"])(f,o,n,!1,null,null,null);t["default"]=v.exports},ade3:function(e,t,r){"use strict";function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return a}))},c796:function(e,t,r){},d7c1:function(e,t,r){"use strict";var a=r("c796"),o=r.n(a);o.a}}]);
//# sourceMappingURL=chunk-1e5c348e.b5851066.js.map