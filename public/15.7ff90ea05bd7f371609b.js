(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{cH24:function(e,r,i){"use strict";i.r(r),i.d(r,"UsersModule",function(){return D});var t=i("ofXK"),o=i("tyNb"),a=i("XNiG"),s=i("nYR2"),n=i("1G5W"),l=i("PSD3"),c=i.n(l),u=i("AytR"),d=i("3Pt+"),b=i("fXoL"),m=i("3T3M"),f=i("T9Ob"),h=i("IT5Z"),p=i("FQRV");function g(e,r){if(1&e){const e=b.Qb();b.Pb(0,"app-table",6),b.Wb("onRecargar",function(r){return b.gc(e),b.Yb(2).recargarUsuarios(r)})("onCreate",function(){return b.gc(e),b.Yb(2).crearUsuario()})("onEdit",function(r){return b.gc(e),b.Yb(2).changeRole(r)})("onDelete",function(r){return b.gc(e),b.Yb(2).borrarUSuario(r)}),b.Ob()}if(2&e){const e=b.Yb(2);b.dc("encabezadosTabla",e.encabezadosTabla)("filasTabla",e.tableData)("totalSection",null==e.users?null:e.users.length)("loading",e.loading)}}function v(e,r){if(1&e&&(b.Pb(0,"div",2),b.Pb(1,"div",3),b.Pb(2,"div",4),b.kc(3,g,1,4,"app-table",5),b.Ob(),b.Ob(),b.Ob()),2&e){const e=b.Yb();b.zb(3),b.dc("ngIf",e.users&&e.tableData&&!e.isEditingRole)}}function U(e,r){1&e&&(b.Pb(0,"span",19),b.mc(1,"Este dato es requerido"),b.Ob())}function O(e,r){if(1&e){const e=b.Qb();b.Pb(0,"div",2),b.Pb(1,"div",3),b.Pb(2,"div",7),b.Pb(3,"h1",8),b.mc(4,"Editar usuario"),b.Ob(),b.Ob(),b.Pb(5,"form",9),b.Wb("ngSubmit",function(){return b.gc(e),b.Yb().formSubmit()}),b.Pb(6,"div",4),b.Pb(7,"div",10),b.Pb(8,"label"),b.mc(9,"Rol del usuario*"),b.Ob(),b.Pb(10,"select",11),b.Pb(11,"option",12),b.mc(12,"Usuario com\xfan"),b.Ob(),b.Pb(13,"option",13),b.mc(14,"Usuario adminitrativo"),b.Ob(),b.Ob(),b.Pb(15,"div",14),b.kc(16,U,2,0,"span",15),b.Ob(),b.Ob(),b.Ob(),b.Pb(17,"div",16),b.Pb(18,"button",17),b.mc(19," Confirmar "),b.Ob(),b.Pb(20,"button",18),b.Wb("click",function(){return b.gc(e),b.Yb().recargarUsuarios(!0)}),b.mc(21," Volver "),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob()}if(2&e){const e=b.Yb();b.zb(5),b.dc("formGroup",e.editRoleForm),b.zb(11),b.dc("ngIf",(null==e.editRoleForm.controls.role.errors?null:e.editRoleForm.controls.role.errors.required)&&e.editRoleForm.controls.role.touched)}}const R=[{path:"",component:(()=>{class e{constructor(e,r,i,t,o){this.usersService=e,this.router=r,this.adminPanelCrudService=i,this.fb=t,this.authService=o,this.someClass=!0,this.users=[],this.tableData=[],this.encabezadosTabla=["Nombre","Email","Tel\xe9fono","Rol"],this.loading=!0,this.isEditingRole=!1,this.destroy$=new a.a,this.createForm()}get activeUserRole(){return this.authService.getUser().role}createForm(){this.editRoleForm=this.fb.group({role:["",d.m.required]})}ngOnInit(){this.loadUsers()}formSubmit(){this.editRoleForm.valid?this.changeRoleEnLaDb():this.editRoleForm.markAllAsTouched()}loadUsers(){this.loading=!0,this.usersService.getAllUsers().pipe(Object(s.a)(()=>this.loading=!1)).subscribe(e=>{this.setUsers(e),this.mapUsersForTable()})}setUsers(e){var r;this.users=null===(r=null==e?void 0:e.data)||void 0===r?void 0:r.map(e=>({id:e.id,apellido:e.last_name,email:e.email,nombre:e.first_name,dni:e.dni,role:e.role,phone:e.phone,avatar:e.avatar,project:e.Projects,getAvatar:()=>{let r="";return r=e.avatar?`${u.a.API_IMAGE_URL}/users/${e.avatar}`:"assets/no-image.png",r}}))}mapUsersForTable(){this.tableData=this.users.map(e=>({imagen:e.getAvatar(),item2:`${e.nombre} ${e.apellido}`,item3:e.email?e.email:"Vac\xedo",item4:e.phone?e.phone:"Vac\xedo",item6:e.role?e.role:"Vac\xedo",id:e.id}))}recargarUsuarios(e){e&&(this.tableData=[],this.isEditingRole=!1,this.loadUsers())}crearUsuario(){this.router.navigateByUrl("/main/auth/register")}changeRole(e){if(this.verificarNiverDeUsuario()){const r=this.users.find(r=>r.id===e);if(r){if("master"===r.role)return void c.a.fire("Prohibido","El rol de este usuario no se puede editar","warning");this.isEditingRole=!0,this.userID=r.id,this.editRoleForm.controls.role.setValue(r.role)}}}changeRoleEnLaDb(){this.adminPanelCrudService.editUserRole(this.userID,this.editRoleForm.value).pipe(Object(n.a)(this.destroy$)).subscribe(e=>{var r;this.recargarUsuarios(!0),this.alertFailureOrSuccess(null===(r=null==e?void 0:e.meta)||void 0===r?void 0:r.status)},()=>c.a.fire("\xa1Lo sentimos!","Error inesperado, recargar p\xe1gina. Si el problema persiste llamar al administrador o a su proveedor de internet","error"))}borrarUSuario(e){if(this.verificarNiverDeUsuario()){const r=this.users.find(r=>r.id===e);if(r){if("master"===(null==r?void 0:r.role))return void c.a.fire("\xa1Prohibido!","\xa1Este usuario no se puede borrar!","warning");c.a.fire({title:"\xbfEstas seguro?",text:`Estas a punto de borrar al usuario: ${null==r?void 0:r.nombre} ${null==r?void 0:r.apellido}`,icon:"question",showCancelButton:!0,confirmButtonText:"Si",cancelButtonText:"No"}).then(e=>{e.isConfirmed&&this.borrarUsuarioDeLaDb(r)})}}}borrarUsuarioDeLaDb(e){this.adminPanelCrudService.delete(null==e?void 0:e.id,"users").pipe(Object(n.a)(this.destroy$)).subscribe(()=>this.showConfirmationOfDelete(`${null==e?void 0:e.nombre} ${null==e?void 0:e.apellido}`),()=>c.a.fire("Error","Tuvimos un problema, por favor intent\xe1 nuevamente. Si el problema persiste ponete en contacto con tu proveedor de internet","error"))}verificarNiverDeUsuario(){return"master"===this.activeUserRole||(c.a.fire("No permitido","No ten\xe9s los permisos para realizar esa acci\xf3n. Comunicate con el due\xf1o de la p\xe1gina","warning"),!1)}showConfirmationOfDelete(e){c.a.fire({title:"Eliminado",text:`El usuario ${e} fue eliminado con \xe9xito`,icon:"success",confirmButtonText:"OK"}).then(e=>{e.isConfirmed&&this.recargarUsuarios(!0)})}alertFailureOrSuccess(e){200===e||201===e?c.a.fire("\xa1Excelente!","El usuario se edit\xf3 correctamente","success"):c.a.fire("Error","No pudimos editar el usuario, por favor intent\xe1 de nuevo recargando la p\xe1gina","error")}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.unsubscribe()}}return e.\u0275fac=function(r){return new(r||e)(b.Kb(m.a),b.Kb(o.c),b.Kb(f.a),b.Kb(d.c),b.Kb(h.a))},e.\u0275cmp=b.Eb({type:e,selectors:[["app-users"]],hostVars:2,hostBindings:function(e,r){2&e&&b.Cb("admin-panel-container",r.someClass)},decls:3,vars:2,consts:[[1,"row"],["class","col",4,"ngIf"],[1,"col"],[1,"card"],[1,"card-body"],["title","Usuarios",3,"encabezadosTabla","filasTabla","totalSection","loading","onRecargar","onCreate","onEdit","onDelete",4,"ngIf"],["title","Usuarios",3,"encabezadosTabla","filasTabla","totalSection","loading","onRecargar","onCreate","onEdit","onDelete"],[1,"card-header"],[1,"primary-dark"],[1,"form","p-t-20","form-material",3,"formGroup","ngSubmit"],[1,"form-group"],["formControlName","role",1,"form-control","custom-select"],["value","user"],["value","admin"],[1,"p-2"],["class","text-danger",4,"ngIf"],[1,"card-footer"],["type","submit",1,"btn","btn-success","waves-effect","waves-light","m-r-10","bgc-primary-dark"],["type","button",1,"btn","btn-danger","waves-effect","waves-light","m-r-10",3,"click"],[1,"text-danger"]],template:function(e,r){1&e&&(b.Pb(0,"div",0),b.kc(1,v,4,1,"div",1),b.kc(2,O,22,2,"div",1),b.Ob()),2&e&&(b.zb(1),b.dc("ngIf",!r.isEditingRole),b.zb(1),b.dc("ngIf",r.isEditingRole))},directives:[t.l,p.a,d.n,d.h,d.e,d.l,d.g,d.d,d.i,d.o],styles:[""]}),e})()}];let P=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=b.Ib({type:e}),e.\u0275inj=b.Hb({imports:[[o.f.forChild(R)],o.f]}),e})();var E=i("6eV/");let D=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=b.Ib({type:e}),e.\u0275inj=b.Hb({imports:[[t.b,P,d.f,E.a,d.k]]}),e})()}}]);