"use strict";(self.webpackChunkng_weather=self.webpackChunkng_weather||[]).push([[185],{5185:(lt,d,s)=>{s.r(d),s.d(d,{HomeModule:()=>ct});var l=s(6895),m=s(5418),t=s(4650),u=s(2994),p=s(3094),C=s(8978),v=s(591),y=s(5254),x=s(9177),h=s(2986);function T(n,o){1&n&&(t.ynx(0),t.Hsn(1),t.BQk())}function b(n,o){1&n&&(t.ynx(0),t.Hsn(1,1),t.BQk())}function Z(n,o){1&n&&(t.ynx(0),t.Hsn(1,2),t.BQk())}function A(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"span",1),t.NdJ("click",function(c){t.CHM(e);const a=t.oxw();return t.KtG(a.onClick(c))}),t.YNc(1,T,2,0,"ng-container",2),t.YNc(2,b,2,0,"ng-container",2),t.YNc(3,Z,2,0,"ng-container",2),t.qZA()}if(2&n){const e=o.ngIf;t.xp6(1),t.Q6J("ngIf",e.clear),t.xp6(1),t.Q6J("ngIf",e.submitting),t.xp6(1),t.Q6J("ngIf",e.finished)}}const L=[[["","clear",""]],[["","submitting",""]],[["","finished",""]]],w=["[clear]","[submitting]","[finished]"];let O=(()=>{class n{constructor(){this.status$=new v.X({clear:!0})}onClick(e){this.status$.next({submitting:!0}),(0,y.D)(this.clickHandler(e)).pipe((0,u.b)(()=>this.status$.next({finished:!0})),(0,x.g)(500),(0,u.b)(()=>this.status$.next({clear:!0})),(0,h.q)(1)).subscribe()}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-button"]],inputs:{status$:"status$",clickHandler:"clickHandler"},ngContentSelectors:w,decls:2,vars:3,consts:[[3,"click",4,"ngIf"],[3,"click"],[4,"ngIf"]],template:function(e,i){1&e&&(t.F$t(L),t.YNc(0,A,4,3,"span",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,i.status$))},dependencies:[l.O5,l.Ov]}),n})();var S=s(3753),f=s(7625),g=s(3489),M=s(6014);class I{constructor(o,e){this.dueTime=o,this.scheduler=e}call(o,e){return e.subscribe(new B(o,this.dueTime,this.scheduler))}}class B extends g.L{constructor(o,e,i){super(o),this.dueTime=e,this.scheduler=i,this.debouncedSubscription=null,this.lastValue=null,this.hasValue=!1}_next(o){this.clearDebounce(),this.lastValue=o,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(Q,this.dueTime,this))}_complete(){this.debouncedNext(),this.destination.complete()}debouncedNext(){if(this.clearDebounce(),this.hasValue){const{lastValue:o}=this;this.lastValue=null,this.hasValue=!1,this.destination.next(o)}}clearDebounce(){const o=this.debouncedSubscription;null!==o&&(this.remove(o),o.unsubscribe(),this.debouncedSubscription=null)}}function Q(n){n.debouncedNext()}class N{constructor(o,e){this.compare=o,this.keySelector=e}call(o,e){return e.subscribe(new D(o,this.compare,this.keySelector))}}class D extends g.L{constructor(o,e,i){super(o),this.keySelector=i,this.hasKey=!1,"function"==typeof e&&(this.compare=e)}compare(o,e){return o===e}_next(o){let e;try{const{keySelector:c}=this;e=c?c(o):o}catch(c){return this.destination.error(c)}let i=!1;if(this.hasKey)try{const{compare:c}=this;i=c(this.key,e)}catch(c){return this.destination.error(c)}else this.hasKey=!0;i||(this.key=e,this.destination.next(o))}}var _=s(2913),r=s(4719);const U=["input"];function z(n,o){}const F=function(n){return{$implicit:n}};function E(n,o){if(1&n&&(t.ynx(0),t.YNc(1,z,0,0,"ng-template",8),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw();t.xp6(1),t.Q6J("ngTemplateOutlet",i.itemTemplate)("ngTemplateOutletContext",t.VKq(2,F,e))}}function $(n,o){if(1&n&&t._uU(0),2&n){const e=t.oxw().$implicit;t.hij(" ",e.label," ")}}function Y(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"li")(1,"a",5),t.NdJ("click",function(){const a=t.CHM(e).$implicit,st=t.oxw();return t.KtG(st.onSelect(a))}),t.YNc(2,E,2,4,"ng-container",6),t.YNc(3,$,1,1,"ng-template",null,7,t.W1O),t.qZA()()}if(2&n){const e=t.MAs(4),i=t.oxw();t.xp6(2),t.Q6J("ngIf",i.itemTemplate)("ngIfElse",e)}}let H=(()=>{class n extends _.k{constructor(){super(),this.placeholder="",this.valueChange=new t.vpe,this.isSelectBoxOpen=!1,this.localOptions=[],this.filteredList=[]}ngOnInit(){this._initValue(),this._initLocalOptions()}ngAfterViewInit(){this._initInputListener()}onSelect(e){this.value=e,this.valueChange.emit(e),this.isSelectBoxOpen=!1}_filterOptions(){this.filteredList=[],!this.value.label||this.value.label.length<this.minTermLength?this.isSelectBoxOpen=!1:this.searchMethod?this.searchMethod(this.value.label).pipe((0,f.R)(this.destroy$)).subscribe(e=>{this.filteredList=e,this._showDropdown()}):(this.filteredList=this.localOptions.filter(e=>e.label.toLowerCase().indexOf(this.value.label.toLowerCase())>=0),this._showDropdown())}_showDropdown(){this.isSelectBoxOpen=this.filteredList.length>0}_initLocalOptions(){this.options&&this.options.pipe((0,h.q)(1)).subscribe(e=>{this.localOptions=e})}_initInputListener(){(0,S.R)(this.input.nativeElement,"keyup").pipe(function J(n,o=M.P){return e=>e.lift(new I(n,o))}(500),function k(n,o){return e=>e.lift(new N(n,o))}(),(0,u.b)(()=>{this._filterOptions()})).subscribe()}_initValue(){this.value||(this.value={})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-autocomplete"]],viewQuery:function(e,i){if(1&e&&t.Gf(U,5),2&e){let c;t.iGM(c=t.CRH())&&(i.input=c.first)}},inputs:{placeholder:"placeholder",value:"value",disabled:"disabled",minTermLength:"minTermLength",itemTemplate:"itemTemplate",searchMethod:"searchMethod",options:"options"},outputs:{valueChange:"valueChange"},features:[t.qOj],decls:5,vars:6,consts:[[1,"dropdown"],["type","text","autocomplete","off",1,"form-control",3,"ngModel","placeholder","disabled","ngModelChange"],["input",""],[1,"dropdown-menu","custom-dropdown"],[4,"ngFor","ngForOf"],[3,"click"],[4,"ngIf","ngIfElse"],["defaultItemTemplate",""],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"input",1,2),t.NdJ("ngModelChange",function(a){return i.value.label=a}),t.qZA(),t.TgZ(3,"ul",3),t.YNc(4,Y,5,2,"li",4),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("ngModel",i.value.label)("placeholder",i.placeholder)("disabled",i.disabled),t.xp6(2),t.ekj("dropdown-menu-open",i.isSelectBoxOpen),t.xp6(1),t.Q6J("ngForOf",i.filteredList))},dependencies:[l.sg,l.O5,l.tP,r.Fj,r.JJ,r.On],styles:[".dropdown-menu-open[_ngcontent-%COMP%]{display:block}.custom-dropdown[_ngcontent-%COMP%]{width:100%;max-height:20vh;overflow-y:scroll}"]}),n})();function j(n,o){if(1&n&&t._uU(0),2&n){const e=o.$implicit;t.AsE(" (",e.value,") ",e.label,"\n")}}let V=(()=>{class n{constructor(e,i){this.service=e,this.countryService=i,this.zipcode=""}addLocation(){return this.service.addLocation(this.zipcode,this.country.value).pipe((0,u.b)(e=>{console.log(e),this._clearInput()}))}search(e){return this.countryService.getCountriesByName(e)}_clearInput(){this.zipcode="",this.country={}}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.a),t.Y36(C.T))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-zipcode-entry"]],decls:20,vars:7,consts:[[1,"well"],[1,"row"],[1,"col-12","col-md-6"],["type","text","placeholder","Zipcode",1,"form-control",3,"ngModel","ngModelChange"],[3,"value","itemTemplate","placeholder","options","valueChange"],[3,"clickHandler"],["clear","",1,"btn","btn-primary",3,"disabled"],["submitting","","disabled","",1,"btn","btn-primary"],["finished","",1,"btn","btn-success"],["autocompleteItem",""]],template:function(e,i){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2"),t._uU(4,"Enter a zipcode:"),t.qZA(),t.TgZ(5,"input",3),t.NdJ("ngModelChange",function(a){return i.zipcode=a}),t.qZA()(),t.TgZ(6,"div",2)(7,"h2"),t._uU(8,"Enter Country:"),t.qZA(),t.TgZ(9,"app-autocomplete",4),t.NdJ("valueChange",function(a){return i.country=a}),t.qZA()()(),t._UZ(10,"br"),t.TgZ(11,"app-button",5)(12,"button",6),t._uU(13," Add location "),t.qZA(),t.TgZ(14,"button",7),t._uU(15," Adding... "),t.qZA(),t.TgZ(16,"button",8),t._uU(17," Done "),t.qZA()()(),t.YNc(18,j,1,2,"ng-template",null,9,t.W1O)),2&e){const c=t.MAs(19);t.xp6(5),t.Q6J("ngModel",i.zipcode),t.xp6(4),t.Q6J("value",i.country)("itemTemplate",c)("placeholder","Type to search!")("options",i.countryService.getAllCountries()),t.xp6(2),t.Q6J("clickHandler",i.addLocation.bind(i)),t.xp6(1),t.Q6J("disabled",""===i.zipcode||!i.country||!i.country.value||""===i.country.value)}},dependencies:[O,H,r.Fj,r.JJ,r.On],encapsulation:2}),n})();var q=s(1267);const P=function(n,o){return["/forecast",n,o]};function K(n,o){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div")(2,"h3"),t._uU(3),t.qZA(),t.TgZ(4,"h4"),t._uU(5),t.qZA(),t.TgZ(6,"h4"),t._uU(7,"Temperatures today:"),t.qZA(),t.TgZ(8,"p"),t._uU(9),t.ALo(10,"number"),t.ALo(11,"number"),t.ALo(12,"number"),t.qZA(),t.TgZ(13,"p")(14,"a",3),t._uU(15),t.qZA()()(),t.TgZ(16,"div")(17,"span",4),t.NdJ("click",function(){t.CHM(e);const c=t.oxw(2);return t.KtG(c.removeLocation())}),t._uU(18,"\xd7"),t.qZA(),t._UZ(19,"img",5),t.qZA(),t.BQk()}if(2&n){const e=t.oxw().ngIf,i=t.oxw();t.xp6(3),t.AsE("",null==e.value?null:e.value.name," (",i.zipCode,")"),t.xp6(2),t.hij("Current conditions: ",null==e.value?null:e.value.weather[0].main,""),t.xp6(4),t.lnq(" Current ",t.xi3(10,9,null==e.value?null:e.value.main.temp,".0-0")," - Max ",t.xi3(11,12,null==e.value?null:e.value.main.temp_max,".0-0")," - Min ",t.xi3(12,15,null==e.value?null:e.value.main.temp_min,".0-0")," "),t.xp6(5),t.Q6J("routerLink",t.WLB(18,P,i.countryCode,i.zipCode)),t.xp6(1),t.hij("Show 5-day forecast for ",null==e.value?null:e.value.name,""),t.xp6(4),t.Q6J("src",i.getWeatherIcon(e.value.weather[0].id),t.LSH)}}function X(n,o){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",6)(2,"h3",6),t._uU(3),t.qZA()(),t.TgZ(4,"div")(5,"span",4),t.NdJ("click",function(){t.CHM(e);const c=t.oxw(2);return t.KtG(c.removeLocation())}),t._uU(6,"\xd7"),t.qZA()(),t.BQk()}if(2&n){const e=t.oxw().ngIf,i=t.oxw();t.xp6(3),t.AsE("Location (",i.zipCode,") - ",e.error.message,"")}}function G(n,o){1&n&&(t.ynx(0),t._uU(1," Loading... "),t.BQk())}function W(n,o){if(1&n&&(t.TgZ(0,"div",1),t.YNc(1,K,20,21,"ng-container",2),t.YNc(2,X,7,2,"ng-container",2),t.YNc(3,G,2,0,"ng-container",2),t.qZA()),2&n){const e=o.ngIf;t.xp6(1),t.Q6J("ngIf",e.value),t.xp6(1),t.Q6J("ngIf",e.error),t.xp6(1),t.Q6J("ngIf",e.loading)}}let R=(()=>{class n extends _.k{constructor(e,i){super(),this.locationService=e,this.weatherService=i}ngOnInit(){this._initPolling()}removeLocation(){this.locationService.removeLocation(this.zipCode,this.countryCode)}getWeatherIcon(e){return this.weatherService.getWeatherIcon(e)}_initPolling(){this.location$=this.weatherService.getLiveConditionByZipcode(this.zipCode,this.countryCode).pipe((0,f.R)(this.destroy$))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.a),t.Y36(q.F))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-location-detail"]],inputs:{zipCode:"zipCode",countryCode:"countryCode"},features:[t.qOj],decls:2,vars:3,consts:[["class","well flex",4,"ngIf"],[1,"well","flex"],[4,"ngIf"],[3,"routerLink"],[1,"close",3,"click"],[3,"src"],[1,""]],template:function(e,i){1&e&&(t.YNc(0,W,4,3,"div",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,i.location$))},dependencies:[l.O5,m.yS,l.Ov,l.JJ],styles:[".error-box[_ngcontent-%COMP%]{display:inline-flex;width:100%}.w-100[_ngcontent-%COMP%]{width:100%}.close[_ngcontent-%COMP%]{cursor:pointer}.flex[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"]}),n})();function tt(n,o){if(1&n&&(t.ynx(0),t._UZ(1,"app-location-detail",1),t.BQk()),2&n){const e=o.$implicit;t.xp6(1),t.Q6J("zipCode",e.zipcode)("countryCode",e.countryCode)}}let et=(()=>{class n{constructor(e){this.locationService=e,this.allLocations$=this.locationService.getAllLocations()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.a))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-current-conditions"]],decls:3,vars:3,consts:[[4,"ngFor","ngForOf"],[3,"zipCode","countryCode"]],template:function(e,i){1&e&&(t.TgZ(0,"div"),t.YNc(1,tt,2,2,"ng-container",0),t.ALo(2,"async"),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",t.lcZ(2,1,i.allLocations$)))},dependencies:[l.sg,R,l.Ov]}),n})();const ot=m.Bz.forChild([{path:"",component:(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-main"]],decls:3,vars:0,consts:[[1,"container-fluid"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-zipcode-entry")(2,"app-current-conditions"),t.qZA())},dependencies:[V,et],encapsulation:2}),n})()}]);let it=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,r.u5]}),n})(),ct=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,ot,it,r.u5]}),n})()}}]);