(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"0st6":function(e,r,o){"use strict";o.r(r),o.d(r,"UserProfileModule",function(){return X});var t=o("ofXK"),n=o("tyNb"),i=o("Tj/N"),a=o("3Pt+"),s=o("XNiG"),l=o("1G5W"),c=o("PSD3"),d=o.n(c),b=o("ZLyn"),m=o("fXoL"),u=o("IT5Z"),f=o("AytR");function p(e,r){if(1&e&&(m.Pb(0,"th",19),m.mc(1),m.Zb(2,"titlecase"),m.Ob()),2&e){const e=r.$implicit;m.zb(1),m.oc(" ",m.ac(2,1,e)," ")}}function g(e,r){if(1&e&&(m.Pb(0,"tr"),m.Pb(1,"td"),m.mc(2),m.Ob(),m.Pb(3,"td"),m.mc(4),m.Zb(5,"date"),m.Ob(),m.Pb(6,"td"),m.mc(7),m.Zb(8,"currency"),m.Ob(),m.Ob()),2&e){const e=r.$implicit;m.zb(2),m.oc("#",e.receipt,""),m.zb(2),m.nc(m.bc(5,3,e.datetime,"dd/MM/yyyy")),m.zb(3),m.nc(m.ac(8,6,e.amount))}}function P(e,r){if(1&e&&(m.Pb(0,"div",12),m.Pb(1,"div",13),m.Pb(2,"div",14),m.Pb(3,"div",15),m.Pb(4,"div",16),m.Pb(5,"table",17),m.Pb(6,"thead"),m.Pb(7,"tr"),m.kc(8,p,3,3,"th",18),m.Ob(),m.Ob(),m.Pb(9,"tbody"),m.kc(10,g,9,8,"tr",1),m.Ob(),m.Ob(),m.Ob(),m.Ob(),m.Ob(),m.Ob(),m.Ob()),2&e){const e=m.Yb().$implicit,r=m.Yb();m.zb(8),m.dc("ngForOf",r.encabezados),m.zb(2),m.dc("ngForOf",e.Payments)}}function h(e,r){if(1&e){const e=m.Qb();m.Pb(0,"div",20),m.Pb(1,"button",21),m.Wb("click",function(){m.gc(e);const r=m.Yb().$implicit;return m.Yb().descargarCashFlow(r.cashflow)}),m.Lb(2,"i",22),m.mc(3," Descargar cashflow "),m.Ob(),m.Ob()}}function v(e,r){if(1&e){const e=m.Qb();m.Nb(0),m.Pb(1,"img",29),m.Wb("click",function(){m.gc(e);const r=m.Yb().$implicit,o=m.Yb(3);return o.expandImage(o.setAssetUrl(r.asset))}),m.Ob(),m.Mb()}if(2&e){const e=m.Yb().$implicit,r=m.Yb(3);m.zb(1),m.dc("src",r.setAssetUrl(e.asset),m.hc)}}function O(e,r){if(1&e&&m.Lb(0,"video",30),2&e){const e=m.Yb().$implicit,r=m.Yb(3);m.dc("src",r.setAssetUrl(e.asset),m.hc)("autoplay",!1)("muted",!0)("loop",!0)("controls",!0)}}function w(e,r){if(1&e&&(m.Pb(0,"div",25),m.Pb(1,"div",14),m.kc(2,v,2,1,"ng-container",26),m.kc(3,O,1,5,"ng-template",27,28,m.lc),m.Ob(),m.Ob()),2&e){const e=r.$implicit,o=m.fc(4);m.zb(2),m.dc("ngIf","image"===e.type)("ngIfElse",o)}}function y(e,r){if(1&e&&(m.Pb(0,"div",23),m.Pb(1,"h6"),m.mc(2,"Galer\xeda:"),m.Ob(),m.Lb(3,"hr"),m.kc(4,w,5,2,"div",24),m.Ob()),2&e){const e=m.Yb().$implicit;m.zb(4),m.dc("ngForOf",e.Assets)}}function F(e,r){if(1&e&&(m.Pb(0,"div"),m.Pb(1,"h5",2),m.mc(2),m.Pb(3,"span",3),m.mc(4),m.Ob(),m.Ob(),m.Pb(5,"div",4),m.Lb(6,"div",5),m.Ob(),m.Pb(7,"h5",6),m.mc(8," Total "),m.Pb(9,"span",7),m.mc(10),m.Zb(11,"currency"),m.Ob(),m.Ob(),m.Pb(12,"h5",8),m.mc(13," Balance: "),m.Lb(14,"br"),m.Pb(15,"span"),m.mc(16),m.Lb(17,"i"),m.Ob(),m.Pb(18,"span",3),m.mc(19),m.Zb(20,"currency"),m.Ob(),m.Ob(),m.kc(21,P,11,2,"div",9),m.kc(22,h,4,0,"div",10),m.kc(23,y,5,1,"div",11),m.Ob()),2&e){const e=r.$implicit,o=r.index,t=m.Yb();m.zb(2),m.oc(" ",e.title?e.title:t.user.nombre+"_"+t.user.apellido+"_"+e.id," "),m.zb(2),m.oc("",t.porcentaje[o],"%"),m.zb(2),m.jc(t.progressBarStyle[o]),m.zb(4),m.nc(m.ac(11,14,e.total)),m.zb(2),m.Bb(e.balance?"text-warning":"text-success"),m.zb(4),m.oc(" ",e.balance?"Falta pagar":"\xa1Estas al d\xeda!"," "),m.zb(1),m.Bb(e.balance?"":"ti ti-face-smile"),m.zb(2),m.nc(m.ac(20,16,e.balance)),m.zb(2),m.dc("ngIf",null==e.Payments?null:e.Payments.length),m.zb(1),m.dc("ngIf",e.cashflow),m.zb(1),m.dc("ngIf",e.Assets.length)}}let k=(()=>{class e{get encabezados(){var e;let r=[];const o=[];if(null===(e=this.user.projects)||void 0===e||e.forEach(e=>{var o;return null===(o=e.Payments)||void 0===o?void 0:o.forEach(e=>r=Object.keys(e))}),null==r?void 0:r.length)for(const t of r)switch(t){case"amount":o.push("Monto");break;case"receipt":o.push("Comprobante");break;case"datetime":o.push("Fecha")}return o.sort(),o}get progressBarStyle(){var e,r;const o=[];return null===(r=null===(e=this.user)||void 0===e?void 0:e.projects)||void 0===r||r.forEach(e=>{const r=this.setPers(e.total,e.balance);o.push(`width: ${r}%`)}),o}get porcentaje(){var e,r;const o=[];return null===(r=null===(e=this.user)||void 0===e?void 0:e.projects)||void 0===r||r.forEach(e=>{const r=this.setPers(e.total,e.balance);o.push(r)}),o}setPers(e,r){let o=e-r;return o=100*o/e,Math.round(o)}setAssetUrl(e){return`${f.a.API_IMAGE_URL}/${e}`}descargarCashFlow(e){console.log(e)}checkProyect(e){console.log(e)}expandImage(e){d.a.fire({imageUrl:e,imageWidth:400,imageHeight:400,showClass:{popup:"animate__animated animate__fadeInDown"},hideClass:{popup:"animate__animated animate__fadeOutUp"}})}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=m.Eb({type:e,selectors:[["app-proyects"]],inputs:{user:"user"},decls:4,vars:1,consts:[[1,"font-medium","m-t-30"],[4,"ngFor","ngForOf"],[1,"m-t-30","primary-dark"],[1,"pull-right"],[1,"progress"],["role","progressbar","aria-valuenow","80","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","bgc-primary-dark"],[1,"m-t-10","primary-dark"],[1,"pull-right","primary-dark"],[1,"m-t-10"],["class","row animated fadeIn rows-container",4,"ngIf"],["class","cashflow m-t-5 b-b-5",4,"ngIf"],["class","container row proyect-carrousel m-t-5 b-b-5",4,"ngIf"],[1,"row","animated","fadeIn","rows-container"],[1,"col-12"],[1,"card"],[1,"card-body"],[1,"table-responsive"],[1,"table","table-bordered"],["class","text-nowrap primary-dark",4,"ngFor","ngForOf"],[1,"text-nowrap","primary-dark"],[1,"cashflow","m-t-5","b-b-5"],[1,"btn","bgc-primary-dark","text-white",3,"click"],[1,"ti","ti-file"],[1,"container","row","proyect-carrousel","m-t-5","b-b-5"],["class","col-lg-4 col-md-6",4,"ngFor","ngForOf"],[1,"col-lg-4","col-md-6"],[4,"ngIf","ngIfElse"],["class","embed-responsive embed-responsive-21by9"],["videoTemplate",""],["alt","Construcci\xf3n",1,"img-responsive",3,"src","click"],[1,"embed-responsive-item",3,"src","autoplay","muted","loop","controls"]],template:function(e,r){1&e&&(m.Pb(0,"h4",0),m.mc(1,"Proyectos:"),m.Ob(),m.Lb(2,"hr"),m.kc(3,F,24,18,"div",1)),2&e&&(m.zb(3),m.dc("ngForOf",r.user.projects))},directives:[t.k,t.l],pipes:[t.c,t.p,t.e],styles:[".progress-bar[_ngcontent-%COMP%]{height:6px}.cashflow[_ngcontent-%COMP%]{display:flex;justify-content:center;align-content:center}"]}),e})();function z(e,r){1&e&&(m.Pb(0,"div",31),m.Pb(1,"span",41),m.mc(2,"Formato de im\xe1gen inv\xe1lido"),m.Ob(),m.Ob())}function I(e,r){1&e&&(m.Pb(0,"li",42),m.Pb(1,"a",43),m.mc(2,"Administrar p\xe1gina"),m.Ob(),m.Ob())}function _(e,r){if(1&e&&(m.Nb(0),m.Lb(1,"app-proyects",44),m.Mb()),2&e){const e=m.Yb();m.zb(1),m.dc("user",e.user)}}function L(e,r){1&e&&(m.Pb(0,"h4",45),m.mc(1,"Proyectos:"),m.Ob(),m.Lb(2,"hr"),m.Pb(3,"h5",46),m.mc(4," Todav\xeda no tenes un proyecto asignado "),m.Pb(5,"span"),m.mc(6,"\xa1No te quedes esperando y escribinos!"),m.Ob(),m.Ob())}function E(e,r){1&e&&(m.Pb(0,"span",41),m.mc(1,"Este dato es requerido"),m.Ob())}function x(e,r){1&e&&(m.Pb(0,"span",41),m.mc(1,"Debe tener al menos 3 caracteres"),m.Ob())}function j(e,r){1&e&&(m.Pb(0,"span",41),m.mc(1,"Este dato es requerido"),m.Ob())}function C(e,r){1&e&&(m.Pb(0,"span",41),m.mc(1,"Debe tener al menos 3 caracteres"),m.Ob())}function M(e,r){1&e&&(m.Pb(0,"span",41),m.mc(1,"Este dato es requerido"),m.Ob())}function S(e,r){1&e&&(m.Pb(0,"span",41),m.mc(1,"Debe contenter al menos 7 caracteres"),m.Ob())}function A(e,r){1&e&&(m.Pb(0,"span",41),m.mc(1,"N\xfamero m\xe1ximo 999.999.999"),m.Ob())}function N(e,r){1&e&&(m.Pb(0,"span",41),m.mc(1,"Este dato es requerido"),m.Ob())}function D(e,r){1&e&&(m.Pb(0,"span",41),m.mc(1,"Por favor ingres\xe1 un email v\xe1lido"),m.Ob())}function U(e,r){1&e&&(m.Pb(0,"span",41),m.mc(1,"La contrase\xf1a debe tener un m\xednimo de 8 caracteres, incluyendo una min\xfascula, una may\xfascula, un n\xfamero y un s\xedmbolo"),m.Ob())}function $(e,r){1&e&&(m.Pb(0,"li"),m.mc(1," La contrase\xf1a debe tener al menos 8 caracteres "),m.Ob())}function q(e,r){1&e&&(m.Pb(0,"li"),m.mc(1," La contrase\xf1a debe contener al menos un n\xfamero "),m.Ob())}function R(e,r){1&e&&(m.Pb(0,"li"),m.mc(1," La contrase\xf1a debe contener al menos una letra min\xfascula "),m.Ob())}function Y(e,r){1&e&&(m.Pb(0,"li"),m.mc(1," La contrase\xf1a debe tener al menos una letra may\xfascula "),m.Ob())}function B(e,r){1&e&&(m.Pb(0,"li"),m.mc(1," La contrase\xf1a debe tener al menos alguno de los siguientes s\xedmbolos *._%+- "),m.Ob())}function T(e,r){if(1&e&&(m.Pb(0,"div",31),m.Pb(1,"ul",47),m.kc(2,$,2,0,"li",48),m.kc(3,q,2,0,"li",48),m.kc(4,R,2,0,"li",48),m.kc(5,Y,2,0,"li",48),m.kc(6,B,2,0,"li",48),m.Ob(),m.Ob()),2&e){const e=m.Yb();m.zb(2),m.dc("ngIf",e.showStrongPasswordErrorMsgs()),m.zb(1),m.dc("ngIf",e.showStrongPasswordErrorMsgs()),m.zb(1),m.dc("ngIf",e.showStrongPasswordErrorMsgs()),m.zb(1),m.dc("ngIf",e.showStrongPasswordErrorMsgs()),m.zb(1),m.dc("ngIf",e.showStrongPasswordErrorMsgs())}}function W(e,r){1&e&&(m.Pb(0,"span",41),m.mc(1,"Este dato es requerido"),m.Ob())}function Z(e,r){1&e&&(m.Pb(0,"span",41),m.mc(1,"Las contrase\xf1as no coinciden"),m.Ob())}function G(e,r){if(1&e&&(m.Pb(0,"div",49),m.Pb(1,"div",29),m.Lb(2,"input",50),m.Pb(3,"div",31),m.kc(4,W,2,0,"span",32),m.kc(5,Z,2,0,"span",32),m.Ob(),m.Ob(),m.Ob()),2&e){const e=m.Yb();m.zb(4),m.dc("ngIf",(null==e.editProfileForm.controls.passwordRepeat.errors?null:e.editProfileForm.controls.passwordRepeat.errors.required)&&e.editProfileForm.controls.passwordRepeat.touched),m.zb(1),m.dc("ngIf",(null==e.editProfileForm.controls.passwordRepeat.errors?null:e.editProfileForm.controls.passwordRepeat.errors.notMatch)&&e.editProfileForm.controls.passwordRepeat.touched)}}const H=[{path:"",component:(()=>{class e{constructor(e,r){this.authService=e,this.fb=r,this.emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",this.destroy$=new s.a,this.mostrarRepetirContrasena=!1,this.formatoImagenNoAceptado=!1,this.createForm()}createForm(){var e,r,o,t,n;this.editProfileForm=this.fb.group({first_name:[null===(e=this.user)||void 0===e?void 0:e.nombre,[a.m.required,a.m.minLength(3)]],last_name:[null===(r=this.user)||void 0===r?void 0:r.apellido,[a.m.required,a.m.minLength(3)]],dni:[null===(o=this.user)||void 0===o?void 0:o.dni,[a.m.required,a.m.max(999999999),a.m.min(1e6)]],email:[null===(t=this.user)||void 0===t?void 0:t.email,[a.m.required,a.m.pattern(this.emailPattern)]],phone:[null===(n=this.user)||void 0===n?void 0:n.phone],password:[""],passwordRepeat:["",[a.m.required]]},{validator:[this.passwordMatchFormValidator("password","passwordRepeat"),this.validateStrongPassword]})}validateStrongPassword(e){const r=e.get("password");(null==r?void 0:r.value)&&(/\d/.test(null==r?void 0:r.value)?/[a-z]/.test(null==r?void 0:r.value)?/[A-Z]/.test(null==r?void 0:r.value)?/[*._%+-]/.test(null==r?void 0:r.value)?(null==r?void 0:r.value.length)<8&&(null==r||r.setErrors({minlength:!0})):null==r||r.setErrors({notSymbols:!0}):null==r||r.setErrors({noUppercase:!0}):null==r||r.setErrors({noLowercase:!0}):null==r||r.setErrors({notDigits:!0}))}showStrongPasswordErrorMsgs(){var e,r,o,t,n;return this.editProfileForm.controls.password.touched&&((null===(e=this.editProfileForm.controls.password.errors)||void 0===e?void 0:e.notDigits)||(null===(r=this.editProfileForm.controls.password.errors)||void 0===r?void 0:r.noLowercase)||(null===(o=this.editProfileForm.controls.password.errors)||void 0===o?void 0:o.noUppercase)||(null===(t=this.editProfileForm.controls.password.errors)||void 0===t?void 0:t.notSymbols)||(null===(n=this.editProfileForm.controls.password.errors)||void 0===n?void 0:n.minlength))}get user(){return this.authService.getUser()}cambiarFoto(e){const r=e.target.files[0],o=new FormData;if(o.append("avatar",r),o.get("avatar"))switch(null==r?void 0:r.type){case"image/jpg":case"image/png":case"image/jpeg":return this.formatoImagenNoAceptado=!1,void this.actualizarImagenEnDB(o);default:this.formatoImagenNoAceptado=!0}}actualizarImagenEnDB(e){this.authService.actualizarImagenUsuario(e).pipe(Object(l.a)(this.destroy$)).subscribe(e=>{e.meta.status.toString().includes("20")?this.modifyLoggedUser(null==e?void 0:e.data):Object(b.d)(e)},e=>Object(b.c)(e))}cambiarPerfil(){this.editProfileForm.markAllAsTouched(),this.editProfileForm.valid&&(this.editProfileForm.controls.password.value?this.confirmAndModifyLoggedUser():this.guardarCambiosEnBaseDeDatos())}guardarCambiosEnBaseDeDatos(){this.authService.actualizarUsuario(this.editProfileForm.value).pipe(Object(l.a)(this.destroy$)).subscribe(e=>{var r;(null===(r=null==e?void 0:e.meta)||void 0===r?void 0:r.status.toString().includes("20"))?this.modifyLoggedUser(null==e?void 0:e.data):Object(b.d)(e)},e=>Object(b.c)(e))}confirmAndModifyLoggedUser(){d.a.fire({title:"\xbfEst\xe1s seguro que quer\xe9s cambiar tu contrase\xf1a?",showDenyButton:!0,confirmButtonText:"Si, continuar",denyButtonText:"No"}).then(e=>{e.isConfirmed&&this.guardarCambiosEnBaseDeDatos()}).catch(e=>Object(b.c)(e))}modifyLoggedUser(e){const r=new i.a(null==e?void 0:e.id,null==e?void 0:e.first_name,null==e?void 0:e.last_name,null==e?void 0:e.email,null==e?void 0:e.role,null==e?void 0:e.dni,null==e?void 0:e.avatar,null==e?void 0:e.phone,null==e?void 0:e.Projects);this.authService.setUser(r),d.a.fire("\xa1Excelente!","Actualizamos tus datos sin problemas","success")}toggleRepetirConstrasena(){this.mostrarRepetirContrasena=!!this.editProfileForm.controls.password.value}passwordMatchFormValidator(e,r){return o=>{const t=o.get(e),n=o.get(r);n.setErrors(t.value===n.value?null:{notMatch:!0})}}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.unsubscribe()}}return e.\u0275fac=function(r){return new(r||e)(m.Kb(u.a),m.Kb(a.c))},e.\u0275cmp=m.Eb({type:e,selectors:[["app-user-profile"]],decls:100,vars:28,consts:[[1,"row","animate__animated","animate__fadeIn","animate__slow"],[1,"col-lg-4","col-xlg-3","col-md-5"],[1,"card"],[1,"card-body"],[1,"m-t-30","text-center"],["width","150",1,"img-circle","pointer",3,"src","click"],["class","p-2",4,"ngIf"],["type","file",1,"d-none",3,"change"],["inputFoto",""],[1,"card-title","m-t-10","primary-dark"],[1,"text-muted"],[1,"text-muted","p-t-30","db",3,"hidden"],[3,"hidden"],[1,"col-lg-8","col-xlg-9","col-md-7"],["role","tablist",1,"nav","nav-tabs","profile-tab"],[1,"nav-item"],["data-toggle","tab","href","#profile","role","tab","aria-expanded","true",1,"nav-link","active"],["data-toggle","tab","href","#settings","role","tab","aria-expanded","false",1,"nav-link"],["class","nav-item bgc-primary",4,"ngIf"],[1,"tab-content"],["id","profile","role","tabpanel","aria-expanded","true",1,"tab-pane","active"],[1,"row"],[1,"col-md-4","col-xs-6","b-r"],[1,"col-md-4","col-xs-6"],[4,"ngIf","ngIfElse"],["noProjects",""],["id","settings","role","tabpanel","aria-expanded","false",1,"tab-pane"],[1,"form-horizontal","form-material",3,"formGroup","ngSubmit"],[1,"form-group"],[1,"col-md-12"],["type","text","formControlName","first_name","placeholder","Nombre",1,"form-control","form-control-line","primary-dark"],[1,"p-2"],["class","text-danger",4,"ngIf"],["type","text","formControlName","last_name","placeholder","Apellido",1,"form-control","form-control-line","primary-dark"],["type","text","formControlName","dni","placeholder","DNI",1,"form-control","form-control-line","primary-dark"],["type","email","formControlName","email","placeholder","Email","name","example-email","id","example-email",1,"form-control","form-control-line","primary-dark"],["type","number","placeholder","Tel\xe9fono","formControlName","phone",1,"form-control","form-control-line","primary-dark"],["type","password","placeholder","Escrib\xed tu contrase\xf1a nueva","formControlName","password",1,"form-control","form-control-line","primary-dark",3,"change"],["class","\n                  form-group\n                  animate__animated animate__slideInLeft animate__fast\n                ",4,"ngIf"],[1,"col-sm-12"],["type","submit",1,"btn","btn-success"],[1,"text-danger"],[1,"nav-item","bgc-primary"],["id","admin-pag","routerLink","/admin","aria-expanded","false",1,"nav-link"],[3,"user"],[1,"font-medium","m-t-30"],[1,"m-t-30"],[1,"form-text","text-danger","list-unstyled"],[4,"ngIf"],[1,"form-group","animate__animated","animate__slideInLeft","animate__fast"],["type","password","placeholder","Repet\xed tu contrase\xf1a nueva","formControlName","passwordRepeat",1,"form-control","form-control-line","primary-dark"]],template:function(e,r){if(1&e){const e=m.Qb();m.Pb(0,"div",0),m.Pb(1,"div",1),m.Pb(2,"div",2),m.Pb(3,"div",3),m.Pb(4,"div",4),m.Pb(5,"img",5),m.Wb("click",function(){return m.gc(e),m.fc(8).click()}),m.Ob(),m.kc(6,z,3,0,"div",6),m.Pb(7,"input",7,8),m.Wb("change",function(e){return r.cambiarFoto(e)}),m.Ob(),m.Pb(9,"h4",9),m.mc(10),m.Ob(),m.Ob(),m.Ob(),m.Pb(11,"div"),m.Lb(12,"hr"),m.Ob(),m.Pb(13,"div",3),m.Pb(14,"h4",10),m.mc(15,"Email"),m.Ob(),m.Pb(16,"h6"),m.mc(17),m.Ob(),m.Pb(18,"h4",11),m.mc(19,"Tel\xe9fono"),m.Ob(),m.Pb(20,"h6",12),m.mc(21),m.Ob(),m.Ob(),m.Ob(),m.Ob(),m.Pb(22,"div",13),m.Pb(23,"div",2),m.Pb(24,"ul",14),m.Pb(25,"li",15),m.Pb(26,"a",16),m.mc(27,"Yo"),m.Ob(),m.Ob(),m.Pb(28,"li",15),m.Pb(29,"a",17),m.mc(30,"Editar perfil"),m.Ob(),m.Ob(),m.kc(31,I,3,0,"li",18),m.Ob(),m.Pb(32,"div",19),m.Pb(33,"div",20),m.Pb(34,"div",3),m.Pb(35,"div",21),m.Pb(36,"div",22),m.Pb(37,"strong"),m.mc(38,"Nombre completo"),m.Ob(),m.Lb(39,"br"),m.Pb(40,"p",10),m.mc(41),m.Ob(),m.Ob(),m.Pb(42,"div",22),m.Pb(43,"strong"),m.mc(44,"Tel\xe9fono"),m.Ob(),m.Lb(45,"br"),m.Pb(46,"p",10),m.mc(47),m.Ob(),m.Ob(),m.Pb(48,"div",23),m.Pb(49,"strong"),m.mc(50,"Email"),m.Ob(),m.Lb(51,"br"),m.Pb(52,"p",10),m.mc(53),m.Ob(),m.Ob(),m.Ob(),m.Lb(54,"hr"),m.kc(55,_,2,1,"ng-container",24),m.kc(56,L,7,0,"ng-template",null,25,m.lc),m.Ob(),m.Ob(),m.Pb(58,"div",26),m.Pb(59,"div",3),m.Pb(60,"form",27),m.Wb("ngSubmit",function(){return r.cambiarPerfil()}),m.Pb(61,"div",28),m.Pb(62,"div",29),m.Lb(63,"input",30),m.Pb(64,"div",31),m.kc(65,E,2,0,"span",32),m.kc(66,x,2,0,"span",32),m.Ob(),m.Ob(),m.Ob(),m.Pb(67,"div",28),m.Pb(68,"div",29),m.Lb(69,"input",33),m.Ob(),m.Pb(70,"div",31),m.kc(71,j,2,0,"span",32),m.kc(72,C,2,0,"span",32),m.Ob(),m.Ob(),m.Pb(73,"div",28),m.Pb(74,"div",29),m.Lb(75,"input",34),m.Pb(76,"div",31),m.kc(77,M,2,0,"span",32),m.kc(78,S,2,0,"span",32),m.kc(79,A,2,0,"span",32),m.Ob(),m.Ob(),m.Ob(),m.Pb(80,"div",28),m.Pb(81,"div",29),m.Lb(82,"input",35),m.Pb(83,"div",31),m.kc(84,N,2,0,"span",32),m.kc(85,D,2,0,"span",32),m.Ob(),m.Ob(),m.Ob(),m.Pb(86,"div",28),m.Pb(87,"div",29),m.Lb(88,"input",36),m.Lb(89,"div",31),m.Ob(),m.Ob(),m.Pb(90,"div",28),m.Pb(91,"div",29),m.Pb(92,"input",37),m.Wb("change",function(){return r.toggleRepetirConstrasena()}),m.Ob(),m.kc(93,U,2,0,"span",32),m.Ob(),m.kc(94,T,7,5,"div",6),m.Ob(),m.kc(95,G,6,2,"div",38),m.Pb(96,"div",28),m.Pb(97,"div",39),m.Pb(98,"button",40),m.mc(99," Actualizar perfil "),m.Ob(),m.Ob(),m.Ob(),m.Ob(),m.Ob(),m.Ob(),m.Ob(),m.Ob(),m.Ob(),m.Ob()}if(2&e){const e=m.fc(57);m.zb(5),m.dc("src",r.user.getAvatar(),m.hc),m.zb(1),m.dc("ngIf",r.formatoImagenNoAceptado),m.zb(4),m.pc(" ",null==r.user?null:r.user.nombre," ",r.user.apellido," "),m.zb(7),m.nc(null==r.user?null:r.user.email),m.zb(1),m.dc("hidden",!(null!=r.user&&r.user.phone)),m.zb(2),m.dc("hidden",!(null!=r.user&&r.user.phone)),m.zb(1),m.nc(null==r.user?null:r.user.phone),m.zb(10),m.dc("ngIf","admin"===(null==r.user?null:r.user.role)||"master"===(null==r.user?null:r.user.role)),m.zb(10),m.pc(" ",null==r.user?null:r.user.nombre," ",null==r.user?null:r.user.apellido," "),m.zb(6),m.nc(null==r.user?null:r.user.phone),m.zb(6),m.nc(null==r.user?null:r.user.email),m.zb(2),m.dc("ngIf",null==r.user?null:r.user.projects)("ngIfElse",e),m.zb(5),m.dc("formGroup",r.editProfileForm),m.zb(5),m.dc("ngIf",(null==r.editProfileForm.controls.first_name.errors?null:r.editProfileForm.controls.first_name.errors.required)&&r.editProfileForm.controls.first_name.touched),m.zb(1),m.dc("ngIf",(null==r.editProfileForm.controls.first_name.errors?null:r.editProfileForm.controls.first_name.errors.minlength)&&r.editProfileForm.controls.first_name.touched),m.zb(5),m.dc("ngIf",(null==r.editProfileForm.controls.last_name.errors?null:r.editProfileForm.controls.last_name.errors.required)&&r.editProfileForm.controls.last_name.touched),m.zb(1),m.dc("ngIf",(null==r.editProfileForm.controls.last_name.errors?null:r.editProfileForm.controls.last_name.errors.minlength)&&r.editProfileForm.controls.last_name.touched),m.zb(5),m.dc("ngIf",(null==r.editProfileForm.controls.dni.errors?null:r.editProfileForm.controls.dni.errors.required)&&r.editProfileForm.controls.dni.touched),m.zb(1),m.dc("ngIf",(null==r.editProfileForm.controls.dni.errors?null:r.editProfileForm.controls.dni.errors.min)&&r.editProfileForm.controls.dni.touched),m.zb(1),m.dc("ngIf",(null==r.editProfileForm.controls.dni.errors?null:r.editProfileForm.controls.dni.errors.max)&&r.editProfileForm.controls.dni.touched),m.zb(5),m.dc("ngIf",(null==r.editProfileForm.controls.email.errors?null:r.editProfileForm.controls.email.errors.required)&&r.editProfileForm.controls.email.touched),m.zb(1),m.dc("ngIf",(null==r.editProfileForm.controls.email.errors?null:r.editProfileForm.controls.email.errors.pattern)&&r.editProfileForm.controls.email.touched),m.zb(8),m.dc("ngIf",(null==r.editProfileForm.controls.password.errors?null:r.editProfileForm.controls.password.errors.pattern)&&r.editProfileForm.controls.password.touched),m.zb(1),m.dc("ngIf",r.showStrongPasswordErrorMsgs()),m.zb(1),m.dc("ngIf",r.mostrarRepetirContrasena)}},directives:[t.l,a.n,a.h,a.e,a.b,a.g,a.d,a.j,n.e,k],styles:["#admin-pag[_ngcontent-%COMP%]{color:#fff}"]}),e})()}];let K=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=m.Ib({type:e}),e.\u0275inj=m.Hb({imports:[[n.f.forChild(H)],n.f]}),e})(),Q=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=m.Ib({type:e}),e.\u0275inj=m.Hb({imports:[[t.b]]}),e})(),X=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=m.Ib({type:e}),e.\u0275inj=m.Hb({imports:[[t.b,K,n.f,a.k,Q]]}),e})()}}]);