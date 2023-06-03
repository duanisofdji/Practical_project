"use strict";(self["webpackChunkd_houtai"]=self["webpackChunkd_houtai"]||[]).push([[653],{8510:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"rights-container"},[t("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),t("el-breadcrumb-item",[e._v("权限管理")]),t("el-breadcrumb-item",[e._v("权限列表")])],1),t("el-card",{staticClass:"box-card"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.rightsList,border:"",stripe:""}},[t("el-table-column",{attrs:{type:"index",label:"#"}}),t("el-table-column",{attrs:{prop:"authName",label:"权限名称"}}),t("el-table-column",{attrs:{prop:"path",label:"路径"}}),t("el-table-column",{attrs:{prop:"level",label:"等级"},scopedSlots:e._u([{key:"default",fn:function(s){return["0"===s.row.level?t("el-tag",[e._v("一级")]):"1"===s.row.level?t("el-tag",{attrs:{type:"success"}},[e._v("二级")]):t("el-tag",{attrs:{type:"warning"}},[e._v("三级")])]}}])})],1)],1)],1)},a=[],l={name:"MyRights",data(){return{rightsList:[]}},created(){this.getRightsList()},methods:{async getRightsList(){const{data:e}=await this.$http.get("rights/list");if(200!==e.meta.status)return this.$message.error("获取失败");this.$message.success("获取成功"),this.rightsList=e.data}}},r=l,o=s(1001),n=(0,o.Z)(r,i,a,!1,null,"55d7d596",null),d=n.exports},6881:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"roles-continer"},[t("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),t("el-breadcrumb-item",[e._v("权限管理")]),t("el-breadcrumb-item",[e._v("权限列表")])],1),t("el-card",{staticClass:"box-card"},[t("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addRightVisible=!0}}},[e._v("添加角色")]),t("el-table",{attrs:{data:e.rolesList,stripe:"",border:""}},[t("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(s){return e._l(s.row.children,(function(i,a){return t("el-row",{key:i.id,class:["bdbottom",0===a?"bdtop":"","vcenter"]},[t("el-col",{attrs:{span:5}},[t("el-tag",{attrs:{closable:""},on:{close:function(t){return e.removeRightById(s.row,i.id)}}},[e._v(" "+e._s(i.authName))]),t("i",{staticClass:"el-icon-caret-right"})],1),t("el-col",{attrs:{span:19}},e._l(i.children,(function(i,a){return t("el-row",{key:i.id,class:[0===a?"":"bdtop","vcenter"]},[t("el-col",{attrs:{span:6}},[t("el-tag",{attrs:{type:"success",closable:""},on:{close:function(t){return e.removeRightById(s.row,i.id)}}},[e._v(" "+e._s(i.authName))]),t("i",{staticClass:"el-icon-caret-right"})],1),t("el-col",{attrs:{span:18}},e._l(i.children,(function(i){return t("el-tag",{key:i.id,attrs:{closable:"",type:"warning"},on:{close:function(t){return e.removeRightById(s.row,i.id)}}},[e._v(" "+e._s(i.authName)+" ")])})),1)],1)})),1)],1)}))}}])}),t("el-table-column",{attrs:{type:"index",label:"#"}}),t("el-table-column",{attrs:{prop:"roleName",label:"角色名称"}}),t("el-table-column",{attrs:{prop:"roleDesc",label:"角色描述"}}),t("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("el-tooltip",{attrs:{effect:"dark",content:"修改",placement:"top",enterable:"","hide-after":1e3}},[t("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"small"},on:{click:function(t){return e.getEditRoles(s.row.id)}}},[e._v(" 编辑 ")])],1),t("el-tooltip",{attrs:{effect:"dark",content:"删除",placement:"top",enterable:"","hide-after":1e3}},[t("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"small"},on:{click:function(t){return e.reomveRoles(s.row.id)}}},[e._v(" 删除")])],1),t("el-tooltip",{attrs:{effect:"dark",content:"分配角色",placement:"top",enterable:"","hide-after":1e3}},[t("el-button",{attrs:{type:"warning",icon:"el-icon-setting",size:"small"},on:{click:function(t){return e.showSetRightDialog(s.row)}}},[e._v("分配权限")])],1)]}}])})],1)],1),t("el-dialog",{attrs:{title:"提示",visible:e.setRightDialogVisible,width:"30%"},on:{"update:visible":function(t){e.setRightDialogVisible=t},close:e.removeRightDialogVisible}},[t("el-tree",{ref:"treeRef",attrs:{data:e.rightList,props:e.treeProps,"node-key":"id","default-expand-all":"","show-checkbox":"","default-checked-keys":e.defKey}}),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.setRightDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.allotRights}},[e._v("确 定")])],1)],1),t("el-dialog",{attrs:{title:"添加角色",visible:e.addRightVisible,width:"50"},on:{"update:visible":function(t){e.addRightVisible=t},close:e.addRightDialog}},[t("el-form",{ref:"addRightRef",attrs:{model:e.addRolesList,"label-width":"80px",rules:e.addRightRules}},[t("el-form-item",{attrs:{label:"角色名称",prop:"roleName"}},[t("el-input",{model:{value:e.addRolesList.roleName,callback:function(t){e.$set(e.addRolesList,"roleName",t)},expression:"addRolesList.roleName"}})],1),t("el-form-item",{attrs:{label:"角色描述"}},[t("el-input",{model:{value:e.addRolesList.roleDesc,callback:function(t){e.$set(e.addRolesList,"roleDesc",t)},expression:"addRolesList.roleDesc"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.addRightVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.addRoles}},[e._v("确 定")])],1)],1),t("el-dialog",{attrs:{title:"修改",visible:e.editRightVisible,width:"50%"},on:{"update:visible":function(t){e.editRightVisible=t},close:e.editRightDialog}},[t("el-form",{ref:"editRolesRef",attrs:{model:e.editRoles,"label-width":"70px"}},[t("el-form-item",{attrs:{label:"角色名称",prop:"roleName"}},[t("el-input",{model:{value:e.editRoles.roleName,callback:function(t){e.$set(e.editRoles,"roleName",t)},expression:"editRoles.roleName"}})],1),t("el-form-item",{attrs:{label:"角色描述",prop:"roleDesc"}},[t("el-input",{model:{value:e.editRoles.roleDesc,callback:function(t){e.$set(e.editRoles,"roleDesc",t)},expression:"editRoles.roleDesc"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.editRightVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.setsEditRoles}},[e._v("确 定")])],1)],1)],1)},a=[],l=(s(7658),{name:"MyRoles",data(){return{rolesList:[],rightList:[],setRightDialogVisible:!1,treeProps:{label:"authName",children:"children"},defKey:[],roleId:"",addRightVisible:!1,editRightVisible:!1,addRolesList:{roleName:"",roleDesc:""},editRoles:{},addRightRules:{roleName:[{required:!0,message:"请输入角色名称",trigger:"blur"}]}}},created(){this.getRolesList()},methods:{async getRolesList(){const{data:e}=await this.$http.get("roles");if(200!==e.meta.status)return this.$message.error("获取角色权限失败");this.$message.success("获取角色权限成功"),this.rolesList=e.data},async removeRightById(e,t){const s=await this.$confirm("此操作将永久删除该权限, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((e=>e));if("confirm"!==s)return this.$message.info("取消了删除");const{data:i}=await this.$http.delete(`roles/${e.id}/rights/${t}`);if(200!==i.meta.status)return this.$message.error("删除权限失败");this.$message.success("删除权限成功"),e.children=i.data},async showSetRightDialog(e){this.roleId=e.id;const{data:t}=await this.$http.get("rights/tree");if(200!==t.meta.status)return this.$message.error("获取权限数据失败");this.rightList=t.data,this.setRightDialogVisible=!0,this.getLeafKey(e,this.defKey)},getLeafKey(e,t){if(!e.children)return t.push(e.id);e.children.forEach((e=>{this.getLeafKey(e,t)}))},removeRightDialogVisible(){this.defKey=[]},async allotRights(){const e=[...this.$refs.treeRef.getCheckedKeys(),...this.$refs.treeRef.getHalfCheckedKeys()],t=e.join(","),{data:s}=await this.$http.post(`roles/${this.roleId}/rights`,{rids:t});if(200!==s.meta.status)return this.$message.error("分配失败");this.$message.success("分配成功"),this.getRolesList(),this.setRightDialogVisible=!1},async addRoles(){const{data:e}=await this.$http.post("roles",this.addRolesList);if(201!==e.meta.status)return this.$message.error("添加失败");this.$message.success("添加成功"),this.getRolesList()},addRightDialog(){this.$refs.addRightRef.resetFields(),this.setRightDialogVisible=!1},editRightDialog(){this.$refs.editRolesRef.resetFields(),this.editRightVisible=!1},async getEditRoles(e){const{data:t}=await this.$http.get("roles/"+e);if(200!==t.meta.status)return this.$message.error("获取失败");this.$message.success("获取成功"),this.editRoles=t.data,this.editRightVisible=!0},async setsEditRoles(){const{data:e}=await this.$http.put("roles/"+this.editRoles.roleId,{roleName:this.editRoles.roleName,roleDesc:this.editRoles.roleDesc});if(200!==e.meta.status)return this.$message.error("修改失败");this.$message.success("修改成功"),this.getRolesList(),this.editRightVisible=!1},async reomveRoles(e){const t=await this.$confirm("此操作将永久删除该角色, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((e=>e));if("confirm"!==t)return this.$message.info("取消删除");const{data:s}=await this.$http.delete("roles/"+e);if(200!==s.meta.status)return this.$message.error("删除角色失败");this.$message.success("删除角色成功"),this.getRolesList()}}}),r=l,o=s(1001),n=(0,o.Z)(r,i,a,!1,null,"09b7da4a",null),d=n.exports},5654:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"use-container"},[t("el-breadcrumb",{staticClass:"el-breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},[t("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),t("el-breadcrumb-item",[e._v("用户管理")]),t("el-breadcrumb-item",[e._v("用户列表")])],1),t("el-card",[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:8}},[t("el-input",{attrs:{placeholder:"请输入内容",clearable:""},on:{clear:e.getUserList},model:{value:e.userListAPI.query,callback:function(t){e.$set(e.userListAPI,"query",t)},expression:"userListAPI.query"}},[t("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.getUserList},slot:"append"})],1)],1),t("el-col",{attrs:{span:4}},[t("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addlogVisible=!0}}},[e._v("添加用户")])],1)],1),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.userList,border:"",stripe:""}},[t("el-table-column",{attrs:{type:"index",label:"#"}}),t("el-table-column",{attrs:{prop:"username",label:"姓名"}}),t("el-table-column",{attrs:{prop:"email",label:"邮箱"}}),t("el-table-column",{attrs:{prop:"mobile",label:"电话"}}),t("el-table-column",{attrs:{prop:"role_name",label:"角色"}}),t("el-table-column",{attrs:{prop:"mg_state",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("el-switch",{on:{change:function(t){return e.userStatusChange(s.row)}},model:{value:s.row.mg_state,callback:function(t){e.$set(s.row,"mg_state",t)},expression:"scope.row.mg_state"}})]}}])}),t("el-table-column",{attrs:{label:"操作",width:"220px"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("el-tooltip",{attrs:{effect:"dark",content:"修改",placement:"top",enterable:"","hide-after":1e3}},[t("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(t){return e.editDialogVisiblebtn(s.row.id)}}})],1),t("el-tooltip",{attrs:{effect:"dark",content:"删除",placement:"top",enterable:"","hide-after":1e3}},[t("el-button",{attrs:{type:"primary",icon:"el-icon-delete",size:"mini"},on:{click:function(t){return e.removeUser(s.row.id)}}})],1),t("el-tooltip",{attrs:{effect:"dark",content:"分配角色",placement:"top",enterable:"","hide-after":1e3}},[t("el-button",{attrs:{type:"primary",icon:"el-icon-setting",size:"mini"},on:{click:function(t){return e.getAlloRoles(s.row)}}})],1)]}}])})],1),t("el-pagination",{attrs:{"current-page":e.userListAPI.pagenum,"page-sizes":[1,2,3,5],"page-size":e.userListAPI.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),t("el-dialog",{attrs:{title:"添加内容",visible:e.addlogVisible,width:"50%"},on:{"update:visible":function(t){e.addlogVisible=t},close:e.addDialogClose}},[t("el-form",{ref:"addFormRef",attrs:{model:e.addForm,rules:e.addRules,"label-width":"70px"}},[t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{model:{value:e.addForm.username,callback:function(t){e.$set(e.addForm,"username",t)},expression:"addForm.username"}})],1),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{model:{value:e.addForm.password,callback:function(t){e.$set(e.addForm,"password",t)},expression:"addForm.password"}})],1),t("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[t("el-input",{model:{value:e.addForm.email,callback:function(t){e.$set(e.addForm,"email",t)},expression:"addForm.email"}})],1),t("el-form-item",{attrs:{label:"手机号",prop:"mobile"}},[t("el-input",{model:{value:e.addForm.mobile,callback:function(t){e.$set(e.addForm,"mobile",t)},expression:"addForm.mobile"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.addlogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v("确 定")])],1)],1),t("el-dialog",{attrs:{title:"修改",visible:e.editDialogVisible,width:"50%"},on:{"update:visible":function(t){e.editDialogVisible=t},close:e.editDialogClose}},[t("el-form",{ref:"editFormRef",attrs:{model:e.editUser,rules:e.editRules,"label-width":"70px"}},[t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{attrs:{disabled:""},model:{value:e.editUser.username,callback:function(t){e.$set(e.editUser,"username",t)},expression:"editUser.username"}})],1),t("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[t("el-input",{model:{value:e.editUser.email,callback:function(t){e.$set(e.editUser,"email",t)},expression:"editUser.email"}})],1),t("el-form-item",{attrs:{label:"手机号",prop:"mobile"}},[t("el-input",{model:{value:e.editUser.mobile,callback:function(t){e.$set(e.editUser,"mobile",t)},expression:"editUser.mobile"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.editDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.editUsers}},[e._v("确 定")])],1)],1),t("el-dialog",{attrs:{title:"分配角色",visible:e.alloRolesVisible,width:"50%"},on:{"update:visible":function(t){e.alloRolesVisible=t}}},[t("p",[e._v("当前用户 : "+e._s(e.alloList.username))]),t("p",[e._v("当前角色 : "+e._s(e.alloList.role_name))]),t("div",[e._v(" 分配新角色 "),t("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.selectedRoles,callback:function(t){e.selectedRoles=t},expression:"selectedRoles"}},e._l(e.rolesList,(function(e){return t("el-option",{key:e.id,attrs:{label:e.roleName,value:e.id}})})),1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.alloRolesVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.changeRoles}},[e._v("确 定")])],1)])],1)},a=[],l={name:"MyUser",data(){const e=(e,t,s)=>{const i=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;if(i.test(t))return s();s(new Error("请输入合法的邮箱"))},t=(e,t,s)=>{const i=/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;if(i.test(t))return s();s(new Error("请输入合法的手机号"))};return{userList:[],total:0,userListAPI:{query:"",pagenum:1,pagesize:5},addlogVisible:!1,editDialogVisible:!1,alloRolesVisible:!1,addForm:{username:"",password:"",email:"",mobile:""},editUser:{},alloList:{},rolesList:[],selectedRoles:"",addRules:{username:[{required:!0,message:"请输入用户名称",trigger:"blur"},{min:2,max:5,message:"长度在 2 到 5 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入用户名称",trigger:"blur"},{min:6,max:12,message:"长度在 6 到 10 个字符",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:e,trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:t,trigger:"blur"}]},editRules:{email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:e,trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:t,trigger:"blur"}]}}},created(){this.getUserList()},methods:{async getUserList(){const{data:e}=await this.$http.get("users",{params:this.userListAPI});if(200!==e.meta.status)return this.$message.error("获取失败");this.userList=e.data.users,this.total=e.data.total},handleSizeChange(e){this.userListAPI.pagesize=e,this.getUserList()},handleCurrentChange(e){this.userListAPI.pagenum=e,this.getUserList()},async userStatusChange(e){const{data:t}=await this.$http.put(`users/${e.id}/state/${e.mg_state}`);200!==t.meta.status&&(e.mg_state=!e.mg_state,this.$message.error("更新状态失败")),this.$message.success("更新状态成功")},addDialogClose(){this.$refs.addFormRef.resetFields()},addUser(){this.$refs.addFormRef.validate((async e=>{if(!e)return;const{data:t}=await this.$http.post("users",this.addForm);if(201!==t.meta.status)return this.$message.error("添加失败");this.$message.success("添加成功"),this.addlogVisible=!1}))},editUsers(){this.$refs.editFormRef.validate((async e=>{if(!e)return;const{data:t}=await this.$http.put("users/"+this.editUser.id,{email:this.editUser.email,mobile:this.editUser.mobile});if(200!==t.meta.status)return this.$message.error("修改失败");this.$message.success("修改成功")})),this.getUserList(),this.editDialogVisible=!1},async editDialogVisiblebtn(e){this.editDialogVisible=!0;const{data:t}=await this.$http.get("users/"+e);if(200!==t.meta.status)return this.$message.error("获取用户失败");this.$message.success("获取用户成功"),this.editUser=t.data},editDialogClose(){this.$refs.editFormRef.resetFields()},removeUser(e){this.$confirm("此操作将永久删除该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{const{data:t}=await this.$http.delete("users/"+e);if(200!==t.meta.status)return this.$message.error("删除失败");this.$message({type:"success",message:"删除成功!"}),this.getUserList()})).catch((()=>{this.$message({type:"info",message:"已取消删除"})}))},async getAlloRoles(e){this.alloList=e,this.alloRolesVisible=!0;const{data:t}=await this.$http.get("roles");if(200!==t.meta.status)return this.$message.error("获取角色列表失败");this.$message.success("获取角色列表成功"),this.rolesList=t.data},async changeRoles(){if(!this.selectedRoles)return this.$message.error("请分配角色");const{data:e}=await this.$http.put(`users/${this.alloList.id}/role`,{rid:this.selectedRoles});if(200!==e.meta.status)return this.$message.error("分配角色失败");this.$message.success("分配角色成功"),this.alloRolesVisible=!1,this.getUserList(),this.selectedRoles=""}}},r=l,o=s(1001),n=(0,o.Z)(r,i,a,!1,null,null,null),d=n.exports}}]);
//# sourceMappingURL=User_Rights_Roles.3ad09847.js.map