(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{ZFBj:function(t,o,i){"use strict";i.r(o),i.d(o,"ImagesModuleModule",function(){return m});var e=i("ofXK"),r=i("tyNb"),s=i("fXoL"),c=i("lCOW"),n=i("tk/3"),a=i("zkoq");function l(t,o){if(1&t&&(s.Qb(0,"mat-grid-tile",5),s.pc(1),s.Pb()),2&t){const t=o.$implicit;s.lc("background",t.color),s.dc("colspan",t.cols)("rowspan",t.rows),s.Bb(1),s.rc(" ",t.text," ")}}function g(t,o){if(1&t&&(s.Qb(0,"mat-grid-tile"),s.Qb(1,"a",6),s.Mb(2,"img",7),s.Pb(),s.Pb()),2&t){const t=o.$implicit;s.Bb(2),s.ec("src",t.src,s.jc)}}let p=(()=>{class t{constructor(t,o,i){this.imageservice=t,this._http=i,this.images=[],this.tiles=[{text:"Be Greatfull",cols:3,rows:1,color:"lightblue"},{text:"No Shame",cols:1,rows:2,color:"lightgreen"},{text:"work to earn respect",cols:1,rows:1,color:"lightpink"},{text:"Smile you are amazing",cols:2,rows:1,color:"#DDBDF1"}]}ngOnInit(){this._http.get("https://imagesapico.herokuapp.com/").subscribe(t=>{this.images=t,console.log(this.images)})}ngOnChanges(){}}return t.\u0275fac=function(o){return new(o||t)(s.Lb(c.a),s.Lb(r.a),s.Lb(n.a))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-images"]],features:[s.zb],decls:5,vars:2,consts:[[2,"margin-top","4.8%"],["cols","4","rowHeight","100px",2,"margin","2px","background-image",""],[3,"colspan","rowspan","background",4,"ngFor","ngForOf"],["cols","4","rowHeight","140px"],[4,"ngFor","ngForOf"],[3,"colspan","rowspan"],["routerLink","innerimage"],["width","mr-auto",3,"src"]],template:function(t,o){1&t&&(s.Qb(0,"div",0),s.Qb(1,"mat-grid-list",1),s.oc(2,l,2,5,"mat-grid-tile",2),s.Pb(),s.Qb(3,"mat-grid-list",3),s.oc(4,g,3,1,"mat-grid-tile",4),s.Pb(),s.Pb()),2&t&&(s.Bb(2),s.dc("ngForOf",o.tiles),s.Bb(2),s.dc("ngForOf",o.images))},directives:[a.a,e.i,a.c,r.c],styles:[""]}),t})();const b=[{path:"images",component:p},{path:"",component:p}];let m=(()=>{class t{}return t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({factory:function(o){return new(o||t)},imports:[[r.d.forChild(b),e.b]]}),t})()}}]);