"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8727],{8727:(y,x,c)=>{c.r(x),c.d(x,{RegisterPageModule:()=>Q});var u=c(6814),a=c(6223),l=c(1929),w=c(638),p=c(5861),e=c(9212),d=c(3704),f=c(1327),m=c(7346),h=c(2548),b=c(3076);const Z=["swiper"];function M(o,s){if(1&o&&(e.TgZ(0,"ion-select-option",26),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&o){const t=s.$implicit;e.Q6J("value",t.nombre),e.xp6(1),e.Oqu(e.lcZ(2,2,"sign_up.looking_for."+t.nombre))}}const C=o=>({activo:o});function T(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"ion-chip",31),e.NdJ("click",function(){const r=e.CHM(t).$implicit,g=e.oxw().$implicit,_=e.oxw(2);return e.KtG(_.toggleInteres(g,r.nombre))}),e._uU(1),e.qZA()}if(2&o){const t=s.$implicit,i=e.oxw().$implicit,n=e.oxw(2);e.Q6J("ngClass",e.VKq(2,C,null==n.misIntereses[i]?null:n.misIntereses[i].includes(t.nombre))),e.xp6(1),e.Oqu(t.nombre)}}function v(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"ion-button",12),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(3);return e.KtG(n.next(!0))}),e._uU(1,"Siguiente"),e.qZA()}}function P(o,s){1&o&&(e.TgZ(0,"ion-button",32),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&o&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"login.boton_Sign_Up")))}function J(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"swiper-slide",27)(1,"ion-grid",6)(2,"ion-row")(3,"ion-col")(4,"p"),e._uU(5),e.ALo(6,"translate"),e.qZA(),e.YNc(7,T,2,4,"ion-chip",28),e.TgZ(8,"ion-grid",11)(9,"ion-row")(10,"ion-col")(11,"ion-button",12),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.next(!1))}),e._uU(12,"Antras"),e.qZA()(),e.TgZ(13,"ion-col"),e.YNc(14,v,2,0,"ion-button",29)(15,P,3,3,"ion-button",30),e.qZA()()()()()()()}if(2&o){const t=s.$implicit,i=s.index,n=e.oxw(2);e.xp6(1),e.Q6J("fullscreen",!0),e.xp6(4),e.Oqu(e.lcZ(6,6,"interests."+t)),e.xp6(2),e.Q6J("ngForOf",n.intereses[t]),e.xp6(1),e.Q6J("fixed",!0),e.xp6(6),e.Q6J("ngIf",i<n.categorias.length-1),e.xp6(1),e.Q6J("ngIf",i===n.categorias.length-1)}}function A(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"swiper-container",4,5)(2,"swiper-slide")(3,"ion-grid",6)(4,"ion-row")(5,"ion-col")(6,"h2"),e._uU(7,"\xa1Hola! Queremos conocerte mejor. \xbfCu\xe1l es tu nombre?"),e.qZA(),e.TgZ(8,"div",7)(9,"ion-input",8),e.NdJ("ngModelChange",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.registroUser.nombre=n)}),e.qZA()(),e.TgZ(10,"ion-button",9),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.next(!0))}),e._uU(11,"Siguiente"),e.qZA()()()()(),e.TgZ(12,"swiper-slide")(13,"ion-grid",6)(14,"ion-row")(15,"ion-col")(16,"h2"),e._uU(17,"\xbfCu\xe1l es tu correo electr\xf3nico? "),e.qZA(),e.TgZ(18,"div",7)(19,"ion-input",10),e.NdJ("ngModelChange",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.registroUser.username=n)}),e.qZA()(),e.TgZ(20,"ion-grid",11)(21,"ion-row")(22,"ion-col")(23,"ion-button",12),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.next(!1))}),e._uU(24,"Atras"),e.qZA()(),e.TgZ(25,"ion-col")(26,"ion-button",9),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.next(!0))}),e._uU(27,"Siguiente"),e.qZA()()()()()()()(),e.TgZ(28,"swiper-slide")(29,"ion-grid",6)(30,"ion-row")(31,"ion-col")(32,"h2"),e._uU(33,"Elige una contrase\xf1a"),e.qZA(),e.TgZ(34,"div",7)(35,"ion-input",13),e.NdJ("ngModelChange",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.password=n)}),e.qZA()(),e.TgZ(36,"h2"),e._uU(37,"Confirma tu contrase\xf1a"),e.qZA(),e.TgZ(38,"div",7)(39,"ion-input",14),e.NdJ("ngModelChange",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.confirmPassword=n)})("input",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.checkPasswordMatch())}),e.qZA()(),e.TgZ(40,"ion-item",15)(41,"ion-label"),e._uU(42,"Mostrar contrase\xf1as"),e.qZA(),e.TgZ(43,"ion-checkbox",16),e.NdJ("ngModelChange",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.showPasswords=n)})("ionChange",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.togglePasswordVisibility())}),e.qZA()(),e.TgZ(44,"ion-grid",11)(45,"ion-row")(46,"ion-col")(47,"ion-button",12),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.next(!1))}),e._uU(48,"Atras"),e.qZA()(),e.TgZ(49,"ion-col")(50,"ion-button",9),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.next(!0))}),e._uU(51,"Siguiente"),e.qZA()()()()()()()(),e.TgZ(52,"swiper-slide")(53,"ion-grid",6)(54,"ion-row")(55,"ion-col")(56,"h2"),e._uU(57,"\xbfcu\xe1l es tu fecha de nacimiento? "),e.qZA(),e.TgZ(58,"div",7)(59,"ion-input",17),e.NdJ("ngModelChange",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.registroUser.birthdate=n)}),e.qZA()(),e.TgZ(60,"ion-grid",11)(61,"ion-row")(62,"ion-col")(63,"ion-button",12),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.next(!1))}),e._uU(64,"Atras"),e.qZA()(),e.TgZ(65,"ion-col")(66,"ion-button",9),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.next(!0))}),e._uU(67,"Siguiente"),e.qZA()()()()()()()(),e.TgZ(68,"swiper-slide")(69,"ion-grid",6)(70,"ion-row")(71,"ion-col")(72,"h2"),e._uU(73,"\xbfCu\xe1l es tu g\xe9nero? "),e.qZA(),e.TgZ(74,"div",7)(75,"ion-select",18),e.NdJ("ngModelChange",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.registroUser.genero=n)}),e.TgZ(76,"ion-select-option",19),e._uU(77),e.ALo(78,"translate"),e.qZA(),e.TgZ(79,"ion-select-option",20),e._uU(80),e.ALo(81,"translate"),e.qZA(),e.TgZ(82,"ion-select-option",21),e._uU(83),e.ALo(84,"translate"),e.qZA()()(),e.TgZ(85,"ion-grid",11)(86,"ion-row")(87,"ion-col")(88,"ion-button",12),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.next(!1))}),e._uU(89,"Antras"),e.qZA()(),e.TgZ(90,"ion-col")(91,"ion-button",9),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.next(!0))}),e._uU(92,"Siguiente"),e.qZA()()()()()()()(),e.TgZ(93,"swiper-slide")(94,"ion-grid",6)(95,"ion-row")(96,"ion-col")(97,"h2"),e._uU(98,"\xbfCon qu\xe9 g\xe9nero te gustar\xeda conectar? "),e.qZA(),e.TgZ(99,"div",7)(100,"ion-select",22),e.NdJ("ngModelChange",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.registroUser.busca=n)}),e.TgZ(101,"ion-select-option",19),e._uU(102),e.ALo(103,"translate"),e.qZA(),e.TgZ(104,"ion-select-option",20),e._uU(105),e.ALo(106,"translate"),e.qZA(),e.TgZ(107,"ion-select-option",21),e._uU(108),e.ALo(109,"translate"),e.qZA()()(),e.TgZ(110,"ion-grid",11)(111,"ion-row")(112,"ion-col")(113,"ion-button",12),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.next(!1))}),e._uU(114,"Antras"),e.qZA()(),e.TgZ(115,"ion-col")(116,"ion-button",9),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.next(!0))}),e._uU(117,"Siguiente"),e.qZA()()()()()()()(),e.TgZ(118,"swiper-slide")(119,"ion-grid",6)(120,"ion-row")(121,"ion-col")(122,"h2"),e._uU(123,"\xbfQu\xe9 tipo de conexi\xf3n buscas?"),e.qZA(),e.TgZ(124,"div",7)(125,"ion-select",23),e.NdJ("ngModelChange",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.registroUser.looking_for=n)}),e.YNc(126,M,3,4,"ion-select-option",24),e.qZA()(),e.TgZ(127,"ion-grid",11)(128,"ion-row")(129,"ion-col")(130,"ion-button",12),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.next(!1))}),e._uU(131,"Antras"),e.qZA()(),e.TgZ(132,"ion-col")(133,"ion-button",9),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.next(!0))}),e._uU(134,"Siguiente"),e.qZA()()()()()()()(),e.YNc(135,J,16,8,"swiper-slide",25),e.TgZ(136,"swiper-slide")(137,"ion-grid",6)(138,"ion-row")(139,"ion-col")(140,"h2"),e._uU(141),e.ALo(142,"translate"),e.qZA(),e.TgZ(143,"ion-button",12),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.next(!0))}),e._uU(144,"Siguiente"),e.qZA()()()()(),e.TgZ(145,"swiper-slide")(146,"ion-grid",6)(147,"ion-row")(148,"ion-col")(149,"h2"),e._uU(150),e.ALo(151,"translate"),e.qZA(),e.TgZ(152,"ion-button",12),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.next(!0))}),e._uU(153,"Siguiente"),e.qZA()()()()(),e.TgZ(154,"swiper-slide")(155,"ion-grid",6)(156,"ion-row")(157,"ion-col")(158,"h2"),e._uU(159),e.ALo(160,"translate"),e.qZA(),e.TgZ(161,"ion-button",12),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.finish())}),e._uU(162,"Siguiente"),e.qZA()()()()()()}if(2&o){const t=e.oxw();e.Q6J("options",t.slideOptsProgressbar),e.xp6(3),e.Q6J("fullscreen",!0),e.xp6(6),e.Q6J("ngModel",t.registroUser.nombre),e.xp6(1),e.Q6J("disabled",!t.registroUser.nombre),e.xp6(3),e.Q6J("fullscreen",!0),e.xp6(6),e.Q6J("ngModel",t.registroUser.username),e.xp6(1),e.Q6J("fixed",!0),e.xp6(6),e.Q6J("disabled",!t.registroUser.username),e.xp6(3),e.Q6J("fullscreen",!0),e.xp6(6),e.Q6J("ngModel",t.password)("type",t.passwordType),e.xp6(4),e.Q6J("type",t.passwordType)("ngModel",t.confirmPassword),e.xp6(4),e.Q6J("ngModel",t.showPasswords),e.xp6(1),e.Q6J("fixed",!0),e.xp6(6),e.Q6J("disabled",!t.passwordsMatch),e.xp6(3),e.Q6J("fullscreen",!0),e.xp6(6),e.Q6J("ngModel",t.registroUser.birthdate),e.xp6(1),e.Q6J("fixed",!0),e.xp6(6),e.Q6J("disabled",!t.registroUser.birthdate),e.xp6(3),e.Q6J("fullscreen",!0),e.xp6(6),e.Q6J("ngModel",t.registroUser.genero),e.xp6(2),e.Oqu(e.lcZ(78,47,"sign_up.gender.female")),e.xp6(3),e.Oqu(e.lcZ(81,49,"sign_up.gender.male")),e.xp6(3),e.Oqu(e.lcZ(84,51,"sign_up.gender.fluid")),e.xp6(2),e.Q6J("fixed",!0),e.xp6(6),e.Q6J("disabled",!t.registroUser.genero),e.xp6(3),e.Q6J("fullscreen",!0),e.xp6(6),e.Q6J("ngModel",t.registroUser.busca),e.xp6(2),e.Oqu(e.lcZ(103,53,"sign_up.gender.female")),e.xp6(3),e.Oqu(e.lcZ(106,55,"sign_up.gender.male")),e.xp6(3),e.Oqu(e.lcZ(109,57,"sign_up.gender.fluid")),e.xp6(2),e.Q6J("fixed",!0),e.xp6(6),e.Q6J("disabled",!t.registroUser.busca),e.xp6(3),e.Q6J("fullscreen",!0),e.xp6(6),e.Q6J("ngModel",t.registroUser.looking_for)("label",t.translate.instant("sign_up.looking_for.text")),e.xp6(1),e.Q6J("ngForOf",t.lookingfor),e.xp6(1),e.Q6J("fixed",!0),e.xp6(6),e.Q6J("disabled",!t.registroUser.looking_for),e.xp6(2),e.Q6J("ngForOf",t.categorias),e.xp6(2),e.Q6J("fullscreen",!0),e.xp6(4),e.hij("",e.lcZ(142,59,"sign_up.finish.sentence_1")," "),e.xp6(5),e.Q6J("fullscreen",!0),e.xp6(4),e.Oqu(e.lcZ(151,61,"sign_up.finish.sentence_2")),e.xp6(5),e.Q6J("fullscreen",!0),e.xp6(4),e.Oqu(e.lcZ(160,63,"sign_up.finish.sentence_3"))}}const U=[{path:"",component:(()=>{var o;class s{constructor(i,n,r,g,_){this.translate=i,this.uiService=n,this.navCtrl=r,this.loadingService=g,this.userService=_,this.misIntereses={},this.registroUser={},this.isLast=!1,this.passwordsMatch=!1,this.showPasswords=!1,this.passwordType="password",this.confirmPasswordType="password",this.slideOptsProgressbar={pagination:{el:".swiper-pagination",type:"progressbar"}}}ngOnInit(){this.getInteresesInfo(),this.getLookingFor()}separarClaves(){const i=Object.keys(this.intereses);this.categorias=i}getInteresesInfo(){var i=this;return(0,p.Z)(function*(){i.userService.getInfointereses().then(n=>{i.intereses=n,console.log(i.intereses),i.separarClaves()}).catch(n=>{console.error(n)})})()}getLookingFor(){var i=this;return(0,p.Z)(function*(){i.userService.getLookingFor().then(n=>{i.lookingfor=n}).catch(n=>{console.error(n)})})()}toggleInteres(i,n){this.misIntereses[i]?this.misIntereses[i].includes(n)?this.misIntereses[i]=this.misIntereses[i].filter(r=>r!==n):this.misIntereses[i].push(n):this.misIntereses[i]=[n],console.log(this.misIntereses)}next(i){i?(this.swiper.nativeElement.swiper.slideNext(),this.isLast=this.swiper.nativeElement.swiper.snapIndex===this.swiper.nativeElement.swiper.slides.length-1):(this.swiper.nativeElement.swiper.slidePrev(),this.isLast=!1)}registro(i){var n=this;return(0,p.Z)(function*(){const r=yield n.loadingService.presentLoading();if(i.invalid)return;n.loadingService.dismissLoading(r),n.registroUser.intereses=n.misIntereses,console.log(n.registroUser);const g=yield n.userService.registro(n.registroUser);1==g?(n.swiper.nativeElement.swiper.slideNext(),n.loadingService.dismissLoading(r)):(n.uiService.alertaInformativa(String(g.error.message)),n.loadingService.dismissLoading(r))})()}finish(){this.navCtrl.navigateRoot("/main/tabs/tab1",{animated:!0})}checkPasswordMatch(){console.log(this.passwordsMatch),this.passwordsMatch=this.password===this.confirmPassword,this.passwordsMatch&&(this.registroUser.password=this.confirmPassword)}togglePasswordVisibility(){this.passwordType=this.showPasswords?"text":"password"}}return(o=s).\u0275fac=function(i){return new(i||o)(e.Y36(d.sK),e.Y36(f.y),e.Y36(m.SH),e.Y36(h.b),e.Y36(b.K))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-register"]],viewQuery:function(i,n){if(1&i&&e.Gf(Z,5),2&i){let r;e.iGM(r=e.CRH())&&(n.swiper=r.first)}},decls:4,vars:1,consts:[[1,"registro-content"],[3,"ngSubmit"],["fRegistro","ngForm"],["class","mySwiper","pagination","true","pagination-type","progressbar","allow-touch-move","false",3,"options",4,"ngIf"],["pagination","true","pagination-type","progressbar","allow-touch-move","false",1,"mySwiper",3,"options"],["swiper",""],[1,"grid-registro",3,"fullscreen"],[1,"input-group"],["required","","name","nombre","label","Nombre","label-placement","floating","fill","outline",3,"ngModel","ngModelChange"],["expand","block",1,"next-button",3,"disabled","click"],["required","","type","email","name","Correo electronico","label","Correo electronico","label-placement","floating","fill","outline",3,"ngModel","ngModelChange"],[3,"fixed"],["expand","block",1,"next-button",3,"click"],["required","","name","password","label","Contrase\xf1a","label-placement","floating","fill","outline",3,"ngModel","type","ngModelChange"],["required","","name","confirmPassword","label","Confirmar contrase\xf1a","label-placement","floating","fill","outline",3,"type","ngModel","ngModelChange","input"],["lines","none"],["slot","start",3,"ngModel","ngModelChange","ionChange"],["required","","type","date","name","birthdate","label","Fecha de nacimiento","label-placement","floating","fill","outline",3,"ngModel","ngModelChange"],["label","G\xe9nero","name","genero","label-placement","floating","fill","outline","required","",3,"ngModel","ngModelChange"],["value","Femenino"],["value","Masculino"],["value","Fluido"],["label","\xbfCon qu\xe9 g\xe9nero te gustar\xeda conectar?","name","busca","label-placement","floating","fill","outline","required","",3,"ngModel","ngModelChange"],["label-placement","floating","fill","outline","required","",3,"ngModel","label","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["style","overflow-y: scroll;",4,"ngFor","ngForOf"],[3,"value"],[2,"overflow-y","scroll"],[3,"ngClass","click",4,"ngFor","ngForOf"],["expand","block","class","next-button",3,"click",4,"ngIf"],["type","submit","expand","block","class","next-button",4,"ngIf"],[3,"ngClass","click"],["type","submit","expand","block",1,"next-button"]],template:function(i,n){if(1&i){const r=e.EpF();e.TgZ(0,"ion-content",0)(1,"form",1,2),e.NdJ("ngSubmit",function(){e.CHM(r);const _=e.MAs(2);return e.KtG(n.registro(_))}),e.YNc(3,A,163,65,"swiper-container",3),e.qZA()()}2&i&&(e.xp6(3),e.Q6J("ngIf",n.categorias))},dependencies:[u.mk,u.sg,u.O5,a._Y,a.JJ,a.JL,a.Q7,a.On,a.F,l.YG,l.nz,l.hM,l.wI,l.W2,l.jY,l.pK,l.Ie,l.Q$,l.Nd,l.t9,l.n0,l.w,l.QI,l.j9,d.X$],styles:["swiper-container[_ngcontent-%COMP%]{--swiper-pagination-bullet-inactive-color: var(--ion-color-step-200, #cccccc);--swiper-pagination-color: var(--ion-color-primary);--swiper-pagination-progressbar-bg-color: rgba(var(--ion-text-color-rgb, 0, 0, 0), .25);--swiper-scrollbar-bg-color: rgba(var(--ion-text-color-rgb, 0, 0, 0), .1);--swiper-scrollbar-drag-bg-color: rgba(var(--ion-text-color-rgb, 0, 0, 0), .5);--swiper-navigation-color: var(--ion-color-primary);--swiper-pagination-progressbar-size: 9px}swiper-container[_ngcontent-%COMP%]{width:100%;height:98%}.activo[_ngcontent-%COMP%]{background-color:var(--ion-color-primary)}.registro-content[_ngcontent-%COMP%]{text-align:center}.grid-registro[_ngcontent-%COMP%]{margin:3rem 2rem}.grid-registro[_ngcontent-%COMP%]   .next-button[_ngcontent-%COMP%]{margin:1rem 0}.grid-registro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:2rem 0;font-size:1.5rem}.grid-registro[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{text-align:left}"]}),s})()}];let q=(()=>{var o;class s{}return(o=s).\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[w.Bz.forChild(U),w.Bz]}),s})();var k=c(822);(0,c(9257).z2)();let Q=(()=>{var o;class s{}return(o=s).\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.ez,a.u5,l.Pc,k.K,q,d.aw]}),s})()}}]);