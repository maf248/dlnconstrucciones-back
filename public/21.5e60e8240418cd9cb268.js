(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"r+F7":function(t,e,n){"use strict";n.r(e),n.d(e,"LotesModule",function(){return h});var s=n("ofXK"),o=n("tyNb"),a=n("XNiG"),r=n("1G5W"),i=n("AytR"),l=n("fXoL"),c=n("N+K7"),p=n("TuUY");const d=[{path:"",component:(()=>{class t{constructor(t){this.http=t,this.postalZonesToPresent=[],this.destroy$=new a.a}ngOnInit(){this.subscribeToPostalZones()}subscribeToPostalZones(){this.http.getAllZones().pipe(Object(r.a)(this.destroy$)).subscribe(t=>{var e;this.postalZones=null==t?void 0:t.data,null===(e=this.postalZones)||void 0===e||e.forEach(t=>{t.url=`/main/lotes/${t.id}`,t.image=`${i.a.API_IMAGE_URL}/${t.image}`}),this.mapPostalZonesToPresent()},t=>console.warn(t,"Error en el pedido de las categor\xedas"))}mapPostalZonesToPresent(){var t;null===(t=this.postalZones)||void 0===t||t.forEach(t=>{this.postalZonesToPresent.push({titulo:t.title,urlFoto:t.image,ruta:t.url,sendDataByRoute:!0,urlData:{data:t.id}})})}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(l.Jb(c.a))},t.\u0275cmp=l.Db({type:t,selectors:[["app-lotes"]],decls:5,vars:1,consts:[[1,"main-lotes","animate__animated","animate__fadeIn","animate__slow"],[1,"primary-dark"],[3,"presentationCard"]],template:function(t,e){1&t&&(l.Ob(0,"div",0),l.Ob(1,"h1",1),l.jc(2,"Lotes"),l.Nb(),l.Kb(3,"hr"),l.Kb(4,"app-presentation-card",2),l.Nb()),2&t&&(l.zb(4),l.bc("presentationCard",e.postalZonesToPresent))},directives:[p.a],styles:[".main-lotes[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center}"]}),t})()},{path:":loteId",loadChildren:()=>n.e(20).then(n.bind(null,"5OOt")).then(t=>t.LoteModule)}];let u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.Hb({type:t}),t.\u0275inj=l.Gb({imports:[[o.f.forChild(d)],o.f]}),t})();var b=n("bqc1");let h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.Hb({type:t}),t.\u0275inj=l.Gb({imports:[[s.b,u,b.a]]}),t})()}}]);