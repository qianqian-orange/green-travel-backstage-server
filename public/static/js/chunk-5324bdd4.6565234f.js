(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5324bdd4"],{"0653":function(t,e,a){},"173d":function(t,e,a){"use strict";var n=a("f46c"),i=a.n(n);i.a},"225b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"public-welfare-list-container"},[a("div",{staticClass:"header"},[a("public-welfare-search",{on:{submit:t.search}}),a("el-button",{attrs:{type:"danger",size:"medium",disabled:t.disabled||0===t.list.length||0===t.ids.length},on:{click:function(e){return t.openDialog(t.batchDelete)}}},[t._v("批量删除")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.list},on:{"selection-change":t.select}},[a("el-table-column",{attrs:{type:"selection"}}),a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-form",{attrs:{"label-width":"60px","label-position":"left"}},[a("el-form-item",{attrs:{label:"标题"}},[t._v(t._s(e.row.title))]),a("el-form-item",{attrs:{label:"描述"}},[a("p",{staticClass:"description"},[t._v(t._s(e.row.description))])])],1)]}}])}),a("el-table-column",{attrs:{label:"用户名称",prop:"name"}}),a("el-table-column",{attrs:{label:"标题",prop:"name","min-width":"100px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"multipart-line-3"},[t._v(t._s(e.row.title))])]}}])}),a("el-table-column",{attrs:{prop:"integral",label:"积分",formatter:function(e){return t.integralFormatter(e.integral)}}}),a("el-table-column",{attrs:{label:"创建日期",prop:"create_time",formatter:function(e){return t.dateFormatter(e.create_time)},"min-width":"140px"}}),a("el-table-column",{attrs:{label:"截止日期",prop:"end_time",formatter:function(e){return t.dateFormatter(e.end_time)},"min-width":"140px"}}),a("el-table-column",{attrs:{label:"图片","min-width":"170px"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("div",{staticClass:"avatar-container"},[a("custom-preview",{attrs:{path:t.row.path}})],1)]}}])}),a("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-popover",{attrs:{trigger:"hover",placement:"bottom",disabled:2!==e.row.status}},[a("p",[t._v(t._s(e.row.reason))]),a("el-tag",{staticClass:"tag",attrs:{slot:"reference",type:t.status(e.row.status).type},slot:"reference"},[t._v(" "+t._s(t.status(e.row.status).text)+" ")])],1)]}}])}),a("el-table-column",{attrs:{label:"操作",width:"280px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("public-welfare-operator",{attrs:{id:e.row.id,status:e.row.status},on:{audit:t.audit,"single-delete":t.singleDelete,"open-dialog":t.openDialog}})]}}])})],1),a("custom-pagination",{attrs:{currentPage:t.currentPage,pageSize:t.pageSize,total:t.total},on:{pageChange:t.pageChange}}),a("custom-dialog",{attrs:{visible:t.dialog,title:"确定删除？"},on:{close:t.closeDialog,determine:t.handler}})],1)},i=[],r=(a("7db0"),a("b0c0"),a("bc3a")),s=a.n(r),l=a("a9b3"),o=a("55c3"),u=a("7621"),c=a("dfc6"),d=a("daef"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[0===t.status?a("el-button",{attrs:{type:"success",size:"medium",disabled:t.disabled},on:{click:function(e){return t.audit(1)}}},[t._v("通过")]):t._e(),0===t.status?a("el-button",{attrs:{type:"warning",size:"medium",disabled:t.disabled},on:{click:t.prompt}},[t._v("不通过")]):t._e(),0!==t.status?a("el-button",{attrs:{type:"primary",size:"medium",disabled:t.disabled},on:{click:function(e){return t.audit(0)}}},[t._v("重审")]):t._e(),a("el-button",{attrs:{type:"danger",size:"medium",disabled:t.disabled},on:{click:t.openDialog}},[t._v("删除")])],1)},f=[],p=(a("a9e3"),a("d3b7"),a("e6cf"),a("a79d"),a("498a"),{name:"PublicWelfareOperator",props:{id:{type:Number,required:!0},status:{type:Number,required:!0}},data:function(){return{disabled:!1}},methods:{audit:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.disabled=!0,s.a.post("/api/publicWelfare/audit",{status:t,id:this.id,reason:a}).then((function(n){var i=n.data.code;if(0===i)return e.$emit("audit",{id:e.id,status:t,reason:a}),void e.$message({type:"success",message:"操作成功！"});e.$message({type:"error",message:"操作失败！"})})).finally((function(){e.disabled=!1}))},prompt:function(){var t=this;this.$prompt("原因:",{confirmButtonText:"确定",cancelButtonText:"取消",inputType:"textarea",inputValidator:function(t){return 0!==t.trim().length||"数据不符合要求！"}}).then((function(e){var a=e.value;t.audit(2,a.trim())}))},singleDelete:function(){var t=this;return this.disabled?Promise.resolve():(this.disabled=!0,s.a.post("/api/publicWelfare/delete",{ids:[this.id]}).then((function(e){0===e.data.code?(t.$message.success("删除成功！"),t.$emit("single-delete")):t.$message.error("删除失败！")})).finally((function(){t.disabled=!1})))},openDialog:function(){this.$emit("open-dialog",this.singleDelete)}}}),b=p,g=a("2877"),h=Object(g["a"])(b,m,f,!1,null,null,null),v=h.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",{attrs:{inline:!0,model:t.formData},nativeOn:{submit:function(t){t.preventDefault()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"用户名称"},on:{input:t.input},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1)],1)},w=[],y=a("e49c"),x=a("cf45"),D={name:"PublicWelfareSearch",mixins:[y["a"]],data:function(){var t=this;return{formData:{name:""},input:Object(x["a"])((function(){t.trim("name"),t.submit()}))}},methods:{submit:function(){this.$emit("submit",{name:this.formData.name})}}},P=D,$=(a("173d"),Object(g["a"])(P,_,w,!1,null,"0d1fafd2",null)),k=$.exports,C={name:"PublicWelfare",mixins:[o["a"]],data:function(){return{character:"publicWelfare",url:{data:"/api/publicWelfare/list",total:"/api/publicWelfare/total"},condition:{name:""},currentPage:1,pageSize:6,handler:function(){}}},components:{CustomPreview:u["a"],CustomPagination:c["a"],CustomDialog:d["a"],PublicWelfareSearch:k,PublicWelfareOperator:v},methods:{status:function(t){return 0===t?{text:"待审核",type:"primary"}:1===t?{text:"已通过",type:"success"}:2===t?{text:"未通过",type:"warning"}:{}},search:function(t){var e=t.name;this.condition.name=e,this.currentPage=1,l["a"].set(this.character,{}),this.getData(),this.getTotal()},batchDelete:function(){var t=this;return s.a.post("/api/publicWelfare/delete",{ids:this.ids}).then((function(e){var a=e.data.code;0===a?(t.$message.success("删除成功！"),1!==t.currentPage&&t.currentPage===t.pageCount&&t.ids.length===t.list.length&&(t.currentPage-=1),t.total-=t.ids.length,t.core(),t.ids=[]):t.$message.error("删除失败！")}))},audit:function(t){var e=t.id,a=t.status,n=t.reason,i=this.list.find((function(t){return t.id===e}));i.status=a,i.reason=n}}},W=C,S=(a("b9fe"),a("c3d5"),Object(g["a"])(W,n,i,!1,null,"8d239568",null));e["default"]=S.exports},"7db0":function(t,e,a){"use strict";var n=a("23e7"),i=a("b727").find,r=a("44d2"),s=a("ae40"),l="find",o=!0,u=s(l);l in[]&&Array(1)[l]((function(){o=!1})),n({target:"Array",proto:!0,forced:o||!u},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r(l)},b420:function(t,e,a){t.exports={menuText:"#bfcbd9",menuActiveText:"#f4f4f5",menuBg:"#304156"}},b9fe:function(t,e,a){"use strict";var n=a("0653"),i=a.n(n);i.a},c3d5:function(t,e,a){"use strict";var n=a("b420"),i=a.n(n);i.a},f46c:function(t,e,a){}}]);