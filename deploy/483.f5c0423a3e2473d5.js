"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[483],{7623:(q,C,i)=>{function v(c,d,l,s,Z,h,f){try{var g=c[h](f),a=g.value}catch(y){return void l(y)}g.done?d(a):Promise.resolve(a).then(s,Z)}function p(c){return function(){var d=this,l=arguments;return new Promise(function(s,Z){var h=c.apply(d,l);function f(a){v(h,s,Z,f,g,"next",a)}function g(a){v(h,s,Z,f,g,"throw",a)}f(void 0)})}}i.d(C,{w:()=>A});var e=i(8274),t=i(529);let A=(()=>{class c{constructor(l){this.http=l}getData(){var l=this;return p(function*(){try{return yield l.http.get("../assets/mock/produits.json").toPromise()}catch(s){return console.log(s),""}})()}getClient(){var l=this;return p(function*(){try{return yield l.http.get("../assets/mock/clients.json").toPromise()}catch(s){return console.log(s),""}})()}}return c.\u0275fac=function(l){return new(l||c)(e.LFG(t.eN))},c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},7483:(q,C,i)=>{i.r(C),i.d(C,{ClientModule:()=>x});var v=i(6895),p=i(9342),e=i(4006),t=i(8274);function A(o,m){if(1&o){const n=t.EpF();t.TgZ(0,"div",35)(1,"p"),t._uU(2),t.qZA(),t.TgZ(3,"button",36),t.NdJ("click",function(){t.CHM(n);const u=t.oxw();return t.KtG(u.clearA())}),t._uU(4," Supprimer "),t.qZA()()}if(2&o){const n=t.oxw();t.xp6(2),t.Oqu(n.Res)}}let c=(()=>{class o{constructor(n){this.formBuilder=n,this.Res="",this.FormIdentification=this.formBuilder.group({Civilite:["",e.kI.required],name:["",e.kI.required],prenom:["",e.kI.required],pays:["",e.kI.required],CP:["",e.kI.required],Ville:["",e.kI.required],adresse:["",e.kI.required],Tel:["",e.kI.required],Email:["",e.kI.required],Login:["",e.kI.required],Password:["",e.kI.required],Password2:["",e.kI.required]})}ngOnInit(){}submit(){console.log(this.FormIdentification.value),this.Res=JSON.stringify(this.FormIdentification.value)}clear(){console.log("clear"),this.Res=""}clearA(){console.log("clear"),this.Res=""}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(e.qu))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-formulaire"]],decls:64,vars:2,consts:[[3,"formGroup","ngSubmit"],[2,"margin-bottom","25px","font-weight","600","text-align","center"],[1,"form-group,row",2,"display","flex"],[1,"col-md-2"],["for","Civilit\xe9"],["formControlName","Civilite","id","Civilit\xe9",1,"form-control",2,"margin","auto"],[1,"col-md-5"],["for","Name"],["type","text","formControlName","name","id","Name",1,"form-control"],["for","prenom"],["type","text","formControlName","prenom","id","prenom",1,"form-control"],[1,"form-group",2,"display","flex"],[1,"col-md-3"],["for","pays"],["type","pays","formControlName","pays","id","pays",1,"form-control"],["for","CP"],["type","number","formControlName","CP","id","CP",1,"form-control"],["for","Ville"],["type","text","formControlName","Ville","id","Ville",1,"form-control"],[1,"col-md-4"],["for","Adresse"],["type","text","formControlName","adresse","id","Adresse",1,"form-control"],[1,"col-md-6"],["for","Telephone"],["type","tel","formControlName","Tel","id","Telephone",1,"form-control"],["for","email"],["type","email","formControlName","Email","id","email",1,"form-control"],["for","Login"],["type","text","formControlName","Login","id","Login",1,"form-control"],["for","psw"],["type","password","formControlName","Password","id","psw",1,"form-control"],["for","psw2"],["type","password","formControlName","Password2","id","psw2",1,"form-control"],["type","submit",1,"btn","btn-primary",2,"margin-left","15px"],["style","margin: 15px",4,"ngIf"],[2,"margin","15px"],["type","button",1,"btn","btn-secondary",3,"click"]],template:function(n,r){1&n&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return r.submit()}),t.TgZ(1,"h3",1),t._uU(2," Inscription "),t.qZA(),t.TgZ(3,"div",2)(4,"div",3)(5,"label",4),t._uU(6,"Civilit\xe9"),t.qZA(),t.TgZ(7,"select",5)(8,"option"),t._uU(9,"--"),t.qZA(),t.TgZ(10,"option"),t._uU(11,"M."),t.qZA(),t.TgZ(12,"option"),t._uU(13,"Mme."),t.qZA()()(),t.TgZ(14,"div",6)(15,"label",7),t._uU(16,"Nom"),t.qZA(),t._UZ(17,"input",8),t.qZA(),t.TgZ(18,"div",6)(19,"label",9),t._uU(20,"Pr\xe9nom"),t.qZA(),t._UZ(21,"input",10),t.qZA()(),t.TgZ(22,"div",11)(23,"div",12)(24,"label",13),t._uU(25,"Pays"),t.qZA(),t._UZ(26,"input",14),t.qZA(),t.TgZ(27,"div",3)(28,"label",15),t._uU(29,"Code Postal"),t.qZA(),t._UZ(30,"input",16),t.qZA(),t.TgZ(31,"div",12)(32,"label",17),t._uU(33,"Ville"),t.qZA(),t._UZ(34,"input",18),t.qZA(),t.TgZ(35,"div",19)(36,"label",20),t._uU(37,"Adresse"),t.qZA(),t._UZ(38,"input",21),t.qZA()(),t.TgZ(39,"div",11)(40,"div",22)(41,"label",23),t._uU(42,"T\xe9lephone"),t.qZA(),t._UZ(43,"input",24),t.qZA(),t.TgZ(44,"div",22)(45,"label",25),t._uU(46,"Adresse email"),t.qZA(),t._UZ(47,"input",26),t.qZA()(),t.TgZ(48,"div",11)(49,"div",19)(50,"label",27),t._uU(51,"Identifiant"),t.qZA(),t._UZ(52,"input",28),t.qZA(),t.TgZ(53,"div",19)(54,"label",29),t._uU(55,"Mot de passe"),t.qZA(),t._UZ(56,"input",30),t.qZA(),t.TgZ(57,"div",19)(58,"label",31),t._uU(59,"Confirmer le mot de passe"),t.qZA(),t._UZ(60,"input",32),t.qZA()(),t.TgZ(61,"button",33),t._uU(62," S'inscrire "),t.qZA()(),t.YNc(63,A,5,1,"div",34)),2&n&&(t.Q6J("formGroup",r.FormIdentification),t.xp6(63),t.Q6J("ngIf",""!=r.Res))},dependencies:[v.O5,e._Y,e.YN,e.Kr,e.Fj,e.wV,e.EJ,e.JJ,e.JL,e.sg,e.u]}),o})();var d=i(529),l=i(7623),s=i(1861);const Z=function(){return["/client/signup"]},f=function(){return["/client/signin"]},g=function(){return["/client/signup"]};function a(o,m){1&o&&(t.TgZ(0,"div")(1,"p"),t._uU(2,"Vous n'\xeates pas connect\xe9. Veuillez vous connecter ou cr\xe9er un compte."),t.qZA(),t.TgZ(3,"div",3)(4,"button",4),t._uU(5," Se connecter "),t.qZA(),t.TgZ(6,"button",5),t._uU(7," S'inscrire "),t.qZA()()()),2&o&&(t.xp6(4),t.Q6J("routerLink",t.DdM(2,f)),t.xp6(2),t.Q6J("routerLink",t.DdM(3,g)))}function y(o,m){if(1&o&&(t.TgZ(0,"div")(1,"p")(2,"span",6),t._uU(3,"Pr\xe9nom:"),t.qZA(),t._uU(4),t.qZA(),t.TgZ(5,"p")(6,"span",6),t._uU(7,"Nom:"),t.qZA(),t._uU(8),t.qZA()()),2&o){const n=t.oxw();t.xp6(4),t.hij(" ",n.client.Nom,""),t.xp6(4),t.hij(" ",n.client.Prenom,"")}}const T=[{path:"signup",component:c},{path:"signin",component:(()=>{class o{constructor(n,r,u,U){this.formBuilder=n,this.httpService=r,this.router=u,this.logServiceService=U,this.FormIdentification=this.formBuilder.group({Login:["",e.kI.required],Password:["",e.kI.required]})}ngOnInit(){}submit(){console.log(this.FormIdentification.value.Login),console.log(this.FormIdentification.value.Password);var n=!1;this.httpService.getClient().then(r=>{r.map(u=>{u.login==this.FormIdentification.value.Login&&u.mdp==this.FormIdentification.value.Password&&(n=!0,this.logServiceService.setCurrentClient(u.login,u.mdp,u.Nom,u.Prenom),this.router.navigate(["client/compte"]))})}).then(()=>{0==n&&alert("identifiants incorrects")})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(e.qu),t.Y36(l.w),t.Y36(p.F0),t.Y36(s.E))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-signin"]],decls:19,vars:3,consts:[[2,"text-align","center",3,"formGroup","ngSubmit"],[1,"form-group",2,"display","flex","flex-direction","column","align-items","center"],[2,"margin-bottom","25px","font-weight","600","text-align","center"],[1,"col-md-4",2,"text-align","left","margin-bottom","10px"],["for","Login"],["type","text","formControlName","Login","id","Login",1,"form-control"],[1,"col-md-4",2,"text-align","left"],["for","psw",2,"text-align","left"],["type","password","formControlName","Password","id","psw",1,"form-control"],["type","submit",1,"btn","btn-primary"],[2,"display","flex","flex-direction","row","justify-content","center","align-items","center"],[1,"nav-item","nav-link",3,"routerLink"]],template:function(n,r){1&n&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return r.submit()}),t.TgZ(1,"div",1)(2,"h3",2),t._uU(3," Connexion "),t.qZA(),t.TgZ(4,"div",3)(5,"label",4),t._uU(6,"Identifiant"),t.qZA(),t._UZ(7,"input",5),t.qZA(),t.TgZ(8,"div",6)(9,"label",7),t._uU(10,"Mot de passe"),t.qZA(),t._UZ(11,"input",8),t.qZA()(),t.TgZ(12,"button",9),t._uU(13,"Se connecter"),t.qZA()(),t.TgZ(14,"div",10)(15,"span"),t._uU(16,"Vous n'avez pas de compte ?"),t.qZA(),t.TgZ(17,"a",11),t._uU(18,"Inscrivez-vous"),t.qZA()()),2&n&&(t.Q6J("formGroup",r.FormIdentification),t.xp6(17),t.Q6J("routerLink",t.DdM(2,Z)))},dependencies:[e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u,p.rH]}),o})()},{path:"compte",component:(()=>{class o{constructor(n){this.logServiceService=n,this.client=this.logServiceService.getCurrentClient()}ngOnInit(){console.log(this.logServiceService.getCurrentClient())}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(s.E))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-compte"]],decls:5,vars:2,consts:[[2,"text-align","center"],[2,"margin-bottom","25px","font-weight","600"],[4,"ngIf"],[2,"display","flex","flex-direction","row","justify-content","center","align-items","center"],[1,"btn","bg-primary","text-white",2,"margin-right","10px",3,"routerLink"],[1,"btn","bg-primary","text-white",3,"routerLink"],[2,"font-weight","bold"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"h3",1),t._uU(2,"Mon compte"),t.qZA(),t.YNc(3,a,8,4,"div",2),t.YNc(4,y,9,2,"div",2),t.qZA()),2&n&&(t.xp6(3),t.Q6J("ngIf",""==r.client.Nom),t.xp6(1),t.Q6J("ngIf",""!=r.client.Nom))},dependencies:[v.O5,p.rH]}),o})()},{path:"store",loadChildren:()=>i.e(826).then(i.bind(i,1826)).then(o=>o.StoreModule)}];let x=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[v.ez,e.u5,d.JF,e.UX,p.Bz.forChild(T)]}),o})()}}]);