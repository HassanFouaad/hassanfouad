(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{109:function(e,a,t){e.exports=t(225)},118:function(e,a,t){},120:function(e,a,t){e.exports=t.p+"static/media/labtop.50feb195.jpg"},121:function(e,a,t){},224:function(e,a,t){},225:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(82),r=t.n(c),i=t(9),s=t(2);var m=Object(s.f)((function(e){var a=e.history,t=e.children;return Object(l.useEffect)((function(){var e=a.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[]),n.a.createElement(l.Fragment,null,t)})),o=(t(118),t(34)),E=t(35),u=t(38),d=t(37),f=t(228),h=t(12),p=t.n(h),v=(t(40),t(119),t(120),t(121),t(84)),b=t.n(v),N=t(85),g=t.n(N),w=t(31),k=Object(w.a)(),y=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){return Object(o.a)(this,t),a.call(this,e)}return Object(E.a)(t,[{key:"componentDidMount",value:function(){p.a.init({offset:100,duration:700,easing:"ease-out-quad",once:!0}),window.addEventListener("scroll",p.a.refresh)}},{key:"render",value:function(){return n.a.createElement("div",{id:"allabout",className:"container"},n.a.createElement("div",{className:"col-sm"},n.a.createElement("div",{className:"row","data-aos":"flip-up"},n.a.createElement("div",{className:"col-sm",id:"ok"},n.a.createElement("div",{className:"row",id:"name"},n.a.createElement("div",{className:"col-2"},n.a.createElement("i",{class:"fas fa-file-signature"})),n.a.createElement("div",{className:"col"},"Hassan Adel Fouad")),n.a.createElement("div",{className:"row",id:"name"},n.a.createElement("div",{className:"col-2"},n.a.createElement("i",{class:"fas fa-graduation-cap"})),n.a.createElement("div",{className:"col"},"Faculty of Engineering ",n.a.createElement("br",null),"KFS University"),n.a.createElement("div",{className:"w-500"})),n.a.createElement("div",{className:"row",id:"name"},n.a.createElement("div",{className:"col-2"},n.a.createElement("i",{class:"fas fa-map-marker-alt"})),n.a.createElement("div",{className:"col"},"Cairo, Egypt"),n.a.createElement("div",null)),n.a.createElement("div",{className:"row",id:"name"},n.a.createElement("div",{className:"col-2"},n.a.createElement("i",{class:"fas fa-envelope"})),n.a.createElement("div",{className:"col"},n.a.createElement("span",{className:"text-break"},"mrhassanfouad1@gmail.com",n.a.createElement("a",{href:"mailto:mrhassanfouad1@gmail.com"},n.a.createElement("i",{class:"fas fa-paper-plane"}))))),n.a.createElement("div",{className:"row",id:"name"},n.a.createElement("div",{className:"col-2"},n.a.createElement("i",{class:"fas fa-phone"})),n.a.createElement("div",{className:"col"},n.a.createElement("a",{href:"tel:+201202021670"},"+2 01202021670")),n.a.createElement("div",{className:"w-500"}))),n.a.createElement("div",{className:"col-sm"},n.a.createElement("img",{src:b.a,className:"img-fluid",id:"photo"})),n.a.createElement("div",{class:"w-100"})),n.a.createElement("div",{id:"socialmedia",className:"row"},n.a.createElement("div",{className:"col-sm"},n.a.createElement("a",{target:"_blank",href:"http://www.facebook.com/foqsh"},n.a.createElement("i",{class:"fab fa-facebook-f"}))),n.a.createElement("div",{className:"col-sm"},n.a.createElement("a",{target:"_blank",href:"http://www.github.com/hassanfouaad"},n.a.createElement("i",{class:"fab fa-github"}))),n.a.createElement("div",{className:"col-sm"},n.a.createElement("a",{target:"_blank",href:"http://www.github.com/hassanfouaad"},n.a.createElement("i",{class:"fab fa-twitter"}))),n.a.createElement("div",{className:"col-sm"},n.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/in/hassan-fouad-76a417159/"},n.a.createElement("i",{class:"fab fa-linkedin-in"}))))),n.a.createElement("div",{class:"row"},n.a.createElement("div",{className:"col-sm",id:"mernapp"},"MERN-STACK APP CREATED")),n.a.createElement("div",{className:"col-sm",id:"cat"},n.a.createElement("a",{target:"_blank",href:"http://meowers.herokuapp.com/"},n.a.createElement("img",{src:g.a,className:"item",id:"catphoto"}))),n.a.createElement("div",{className:"col-sm",id:"meow"},"MEOWERS ",n.a.createElement("br",null),"SOCIAL NETWORK APP"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col",id:"backk"},n.a.createElement("a",null,n.a.createElement(i.b,{to:"/"},"Go Home")))))}}]),t}(l.Component),x=function(e,a,t){this.toRotate=a,this.el=e,this.loopNum=0,this.period=parseInt(t,10)||1e3,this.txt="",this.tick(),this.isDeleting=!1};x.prototype.tick=function(){var e=this.loopNum%this.toRotate.length,a=this.toRotate[e];this.isDeleting?this.txt=a.substring(0,this.txt.length-1):this.txt=a.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var t=this,l=180-100*Math.random();this.isDeleting&&(l/=2),this.isDeleting||this.txt!==a?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,l=300):(l=this.period,this.isDeleting=!0),setTimeout((function(){t.tick()}),l)},window.onload=function(){for(var e=document.getElementsByClassName("txt-rotate"),a=0;a<e.length;a++){var t=e[a].getAttribute("data-rotate"),l=e[a].getAttribute("data-period");t&&new x(e[a],JSON.parse(t),l)}var n=document.createElement("style");n.type="text/css",n.innerHTML=".txt-rotate > .wrap { border-right: 0.08em solid #666 }",document.body.appendChild(n)};var O=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){return Object(o.a)(this,t),a.call(this,e)}return Object(E.a)(t,[{key:"componentDidMount",value:function(){p.a.init({duration:2e3})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"container1"},n.a.createElement("div",{className:"content1"},n.a.createElement("div",{className:"slide"},n.a.createElement("div",{id:"wholist"},n.a.createElement("h1",{className:"hello"},n.a.createElement("span",{id:"a7a"},"<h1>"),n.a.createElement("span",{class:"txt-rotate","data-period":"2000","data-rotate":'[ "Hello Im Hassan", "Full Stack Developer", "Graphic Designer", "Enjoy viewing my portofilio"]'}),n.a.createElement("span",{id:"a7a"},"</h1>"))))),n.a.createElement("div",{className:"content2"},n.a.createElement("div",{className:"slide2"},n.a.createElement("div",{id:"offering"},"WHAT DO I DO?"),n.a.createElement("div",null,n.a.createElement("ul",{className:"service"},n.a.createElement("li",null,n.a.createElement(f.a,{className:"paint brush",name:"computer",size:"huge"}),n.a.createElement("a",{href:"/graphic"},n.a.createElement("span",null,"Graphic Design"))),n.a.createElement("li",null,n.a.createElement(f.a,{className:"Icon",name:"computer",size:"huge"})," ",n.a.createElement("a",{id:"web",href:"/web"},n.a.createElement("span",null,"Web Development"))),n.a.createElement("li",null,n.a.createElement(f.a,{className:"Icon",name:"shop",size:"huge"})," ",n.a.createElement("a",{id:"web",hre:"/socialmedia"},n.a.createElement("span",null,"Social Media"))))))),n.a.createElement("div",{className:"content4"},n.a.createElement("span",{className:"ami"},n.a.createElement("i",{class:"fas fa-graduation-cap"})),n.a.createElement("div",{className:"info"},n.a.createElement("div",{className:"classof"},"Faculty of Engineering KafrElshiekh University",n.a.createElement("br",null),n.a.createElement("br",null),"Class of 2020",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("a",null,n.a.createElement(i.b,{to:"about"},"More About me"))))),n.a.createElement("div",{className:"content3"},n.a.createElement("div",{className:"lang-i-code"},"Technical Skills I do"),n.a.createElement("div",{className:"lang"},n.a.createElement("ul",null,n.a.createElement("li",null,"HTML"),n.a.createElement("li",null,"CSS"),n.a.createElement("li",null,"Javascript"),n.a.createElement("li",null,"Node js"),n.a.createElement("li",null,"Git"),n.a.createElement("li",null,"Express js"),n.a.createElement("li",null,"React js"),n.a.createElement("li",null,"MONGO"),n.a.createElement("li",null,"Firebase"),n.a.createElement("li",null,"BootStrap"),n.a.createElement("li",null,"jQuery"),n.a.createElement("li",null,"Semantic UI"),n.a.createElement("li",null,"jQuery"),n.a.createElement("li",null,"Adobe Photoshop"),n.a.createElement("li",null,"Microsoft Office"))),n.a.createElement("div",{className:"lang-i-code"},"Soft Skills"),n.a.createElement("div",{className:"lang"},n.a.createElement("ul",null,n.a.createElement("li",null,"Enthusiasm"),n.a.createElement("li",null,"Visual Thinking"),n.a.createElement("li",null,"Critical Thinking"),n.a.createElement("li",null,"Communication"),n.a.createElement("li",null,"Collaboration"),n.a.createElement("li",null,"Adaptability")))),n.a.createElement("div",{className:"content5"})))}}]),t}(l.Component),j=(t(224),function(){return n.a.createElement("header",{className:"navbar"},n.a.createElement("div",{className:"menu-toggle",id:"hamburger"},n.a.createElement("i",{className:"fas fa-bars"})),n.a.createElement("div",{className:"overlay"}),n.a.createElement("div",{className:"containermenu"},n.a.createElement("nav",null,n.a.createElement("h1",{className:"brand"},n.a.createElement("a",{href:"index.html"})),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{target:"_blank",href:"http://www.facebook.com/foqsh"},n.a.createElement("i",{class:"fab fa-facebook-f"}))),n.a.createElement("li",null,n.a.createElement("a",{target:"_blank",href:"http://www.github.com/hassanfouaad"},n.a.createElement("i",{class:"fab fa-github"}))),n.a.createElement("li",null,n.a.createElement("a",{target:"_blank",href:"https://twitter.com/HassanFouaad"},n.a.createElement("i",{class:"fab fa-twitter"})))))))}),D=function(){return Object(l.useEffect)((function(){window.addEventListener("load",p.a.refresh)})),n.a.createElement("div",null,n.a.createElement(j,null),n.a.createElement(s.c,null,n.a.createElement(s.a,{exact:!0,path:"/",render:function(){return n.a.createElement(O,null)}}),n.a.createElement(s.a,{exact:!0,path:"/about/",component:y})))};r.a.render(n.a.createElement(i.a,{history:k},n.a.createElement(m,null),n.a.createElement(D,null)),document.getElementById("root"))},84:function(e,a,t){e.exports=t.p+"static/media/me.c5409773.jpg"},85:function(e,a,t){e.exports=t.p+"static/media/cat.5b889bb8.png"}},[[109,1,2]]]);
//# sourceMappingURL=main.dd506c84.chunk.js.map