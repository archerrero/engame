(function(e){function t(t){for(var r,v,i=t[0],d=t[1],l=t[2],o=0,c=[];o<i.length;o++)v=i[o],n[v]&&c.push(n[v][0]),n[v]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);u&&u(t);while(c.length)c.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,v=1;v<a.length;v++){var d=a[v];0!==n[d]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},s=[];function v(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ad763791"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise(function(t,r){a=n[e]=[t,r]});t.push(a[2]=r);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=v(e),s=function(t){d.onerror=d.onload=null,clearTimeout(l);var a=n[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,v=new Error("Loading chunk "+e+" failed.\n("+r+": "+s+")");v.type=r,v.request=s,a[1](v)}n[e]=void 0}};var l=setTimeout(function(){s({type:"timeout",target:d})},12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=t,d=d.slice();for(var o=0;o<d.length;o++)t(d[o]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=a("a7fe"),s=a.n(n),v=a("bc3a"),i=a.n(v),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},l=[],o=(a("5c0b"),a("2877")),u={},c=Object(o["a"])(u,d,l,!1,null,null,null),f=c.exports,h=a("8c4f"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("verbs",{attrs:{verb:e.verb},on:{opened:function(t){e.isCardOpened=!0},true:function(t){return e.doTrueEvent(t)},false:function(t){return e.doFalseEvent(t)},offerTranslation:function(t){return e.offerTranslation()}}}),e.offer?a("modal",{attrs:{verb:e.verb},on:{close:function(t){return e.modalClose()}}}):e._e(),e.isGreeterShown?a("greeter",{on:{close:function(t){return e.closeGreeter()}}}):e._e()],1)},b=[],w=(a("ac6a"),a("6762"),a("2fdb"),a("f499")),g=a.n(w),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card",class:{checked:e.isBackShown},style:e.sizes},[a("transition",{attrs:{name:"card--front"}},[e.isBackShown?e._e():a("div",{staticClass:"card--front",on:{click:function(t){return e.check()}}},[e._v("\n      "+e._s(e.verb.translate)+"\n    ")])]),a("transition",{attrs:{name:"card--back"}},[e.isBackShown?a("div",{staticClass:"card--back"},[a("span",{staticClass:"card--back--translate"},[e._v("\n        "+e._s(e.verb.translate)+"          \n      ")]),a("div",{staticClass:"card--back--forms"},[a("p",[e._v(e._s(e.verb.v1))]),a("p",[e._v(e._s(e.verb.v2))]),a("p",[e._v(e._s(e.verb.v3))])]),a("p",{staticClass:"card--back--offer",on:{click:function(t){return e.offerTranslation()}}},[e._v(" Предложить перевод")]),a("div",{staticClass:"card--arrows--i left",on:{click:function(t){return e.goTrue()}}},[e._v("‹")]),a("div",{staticClass:"card--arrows--i right",on:{click:function(t){return e.goFalse()}}},[e._v("›")])]):e._e()])],1)},k=[],y={name:"Verbs",props:{verb:Object},data:function(){return{isBackShown:!1,sizes:{width:0,height:0},GAP:20}},created:function(){this.sizes.width=this.getMinDocumentSize(),this.sizes.height=this.getMinDocumentSize()},methods:{check:function(){this.isBackShown=!this.isBackShown,this.$emit("opened")},goTrue:function(){this.$emit("true"),this.isBackShown=!this.isBackShown},goFalse:function(){this.$emit("false",this.verb),this.isBackShown=!this.isBackShown},getMinDocumentSize:function(){return document.body.offsetHeight>document.body.offsetWidth?"".concat(document.body.offsetWidth-this.GAP,"px"):"".concat(document.body.offsetHeight-this.GAP,"px")},offerTranslation:function(){this.$emit("offerTranslation")}}},_=y,C=Object(o["a"])(_,m,k,!1,null,null,null),S=C.exports,V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal--wrapper",on:{click:function(t){return t.target!==t.currentTarget?null:e.closeModal()}}},[a("transition",{attrs:{name:"modal"}},[e.shown?a("div",{staticClass:"modal"},[a("label",{staticClass:"modal--label"},[a("span",[e._v("Перевод")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.offeredVerb.translate,expression:"offeredVerb.translate"}],staticClass:"modal--input",attrs:{type:"text",name:"translate"},domProps:{value:e.offeredVerb.translate},on:{input:function(t){t.target.composing||e.$set(e.offeredVerb,"translate",t.target.value)}}})]),a("label",{staticClass:"modal--label"},[a("span",[e._v("1я форма")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.offeredVerb.v1,expression:"offeredVerb.v1"}],staticClass:"modal--input",attrs:{type:"text",name:"v1"},domProps:{value:e.offeredVerb.v1},on:{input:function(t){t.target.composing||e.$set(e.offeredVerb,"v1",t.target.value)}}})]),a("label",{staticClass:"modal--label"},[a("span",[e._v("2я форма")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.offeredVerb.v2,expression:"offeredVerb.v2"}],staticClass:"modal--input",attrs:{type:"text",name:"v2"},domProps:{value:e.offeredVerb.v2},on:{input:function(t){t.target.composing||e.$set(e.offeredVerb,"v2",t.target.value)}}})]),a("label",{staticClass:"modal--label"},[a("span",[e._v("3я форма")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.offeredVerb.v3,expression:"offeredVerb.v3"}],staticClass:"modal--input",attrs:{type:"text",name:"v3"},domProps:{value:e.offeredVerb.v3},on:{input:function(t){t.target.composing||e.$set(e.offeredVerb,"v3",t.target.value)}}})]),a("button",{staticClass:"modal--btn",class:{disabled:e.isDisabled,done:e.isSend},attrs:{disabled:e.isDisabled||e.isSend},on:{click:function(t){return e.sendOffer()}}},[e.isSend?[e._v("\n          отправлено \n          "),a("svg",{staticClass:"svg-inline--fa fa-check fa-w-16 fa-3x",attrs:{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check",role:"img",xmlns:"http://www.w3.org/2000/svg",width:"14px",height:"14px",viewBox:"0 0 512 512"}},[a("path",{attrs:{fill:"currentColor",d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}})])]:[e._v("\n          Отправить\n        ")]],2)]):e._e()])],1)},x=[],O=a("5176"),j=a.n(O),T=a("5118"),$={props:{verb:{type:Object}},data:function(){return{text:"",shown:!1,offeredVerb:{},isDisabled:!0,isSend:!1}},mounted:function(){this.shown=!0,this.offeredVerb=j()({},this.verb)},watch:{offeredVerb:{deep:!0,handler:function(e,t){console.log(e,t),this.isDisabled=t!==e}}},methods:{closeModal:function(){this.$emit("close")},sendOffer:function(){var e=this;this.axios({method:"post",url:"./mail.php",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{msg:{title:"Replace offer for #".concat(this.verb.id),body:"Id is ".concat(this.verb.id,' \n\n              translate: "').concat(this.verb.translate,'" to "').concat(this.offeredVerb.translate,'" \n\n              v1: "').concat(this.verb.v1,'" to "').concat(this.offeredVerb.v1,'" \n\n              v2: "').concat(this.verb.v1,'" to "').concat(this.offeredVerb.v2,'" \n\n              v3: "').concat(this.verb.v3,'" to "').concat(this.offeredVerb.v3,'" \n\n              ')}}}).then(function(t){console.log(t),200===t.status&&(e.isSend=!0,e.closeAfter(1500))})},closeAfter:function(e){var t=this;Object(T["setTimeout"])(function(){t.closeModal()},e)}}},P=$,z=Object(o["a"])(P,V,x,!1,null,null,null),E=z.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"greeter--wrapper"},[a("h2",{staticClass:"greeter--header"},[e._v("Приветствую, друг!")]),e._m(0),a("button",{staticClass:"button",on:{click:function(t){return e.close()}}},[e._v("я все понял!")])])},B=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"greeter--content"},[a("ul",{staticClass:"greeter--list"},[a("li",{staticClass:"greeter--list--i"},[e._v("Взгдяни на русские глаголы на карточке")]),a("li",{staticClass:"greeter--list--i"},[e._v("Попробуй вспомнить 3 формы неправильного глагола на английском")]),a("li",{staticClass:"greeter--list--i"},[e._v("Нажми на карточку для проверки")]),a("li",{staticClass:"greeter--list--i"},[a("i",{staticClass:"green"},[e._v("Правильно?")]),e._v(" Здорово! Жми на зеленую стрелку")]),a("li",{staticClass:"greeter--list--i"},[a("i",{staticClass:"red"},[e._v("Ошибся?")]),e._v(" Ничего страшного, жми на красную стрелку, эти слова будут появляться чаще)")]),a("li",{staticClass:"greeter--list--i"},[e._v('Нашел ошибку? Или есть перевод лучше? Жми "Предложить перевод"')])])])}],N={methods:{close:function(){this.$emit("close"),localStorage.greeter=!1}}},A=N,G=Object(o["a"])(A,M,B,!1,null,null,null),F=G.exports,q={name:"home",components:{verbs:S,modal:E,greeter:F},data:function(){return{verb:"",storage:{falsedVerbs:[],truedVerbs:[]},applyingVerbs:null,isCardOpened:!1,offer:!1,isGreeterShown:!1}},created:function(){this.getNew(),"undefined"===typeof localStorage.greeter&&(this.isGreeterShown=!0),this.storage.falsedVerbs=this.getStorage("falsedVerbs"),this.aplyFailedVerbs()},computed:{verbs:function(){return this.applyingVerbs||this.$store.state.verbs}},methods:{random:function(){return Math.floor(Math.random()*this.verbs.length)},getVerb:function(){return this.verbs[this.random()]},doTrueEvent:function(){this.getNew()},doFalseEvent:function(e){var t="falsedVerbs";this.storage[t].push(e.id),this.verbs.push(e),this.getNew(),this.setStorage(t)},getNew:function(){this.verb=this.getVerb()},modalClose:function(){this.offer=!1},setStorage:function(e){localStorage[e]=g()(this.storage[e])},getStorage:function(e){return"undefined"!==typeof localStorage[e]?JSON.parse(localStorage[e]):[]},aplyFailedVerbs:function(){var e=this,t=this.verbs.filter(function(t){return e.storage.falsedVerbs.includes(t.id)});this.verbs.forEach(function(t){e.storage.falsedVerbs.includes(t.id)&&e.verbs.push(t)}),this.verbs.push(t)},offerTranslation:function(){this.offer=!0},closeGreeter:function(){this.isGreeterShown=!1},createIssue:function(){}}},D=q,J=Object(o["a"])(D,p,b,!1,null,null,null),H=J.exports;r["a"].use(h["a"]);var I=new h["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:H},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),L=a("2f62"),W={verbs:[{v1:"abide",v2:"abode / abided",v3:"abode / abided",translate:"выносить, терпеть",id:0},{v1:"arise",v2:"arose",v3:"arisen",translate:"возникать, появляться, подниматься",id:1},{v1:"awake",v2:"awakened / awoke",v3:"awakened / awoken",translate:"будить, проснуться",id:2},{v1:"backslide",v2:"backslid",v3:"backslidden / backslid",translate:"отказываться от прежних убеждений",id:3},{v1:"be",v2:"was, were",v3:"been",translate:"быть",id:4},{v1:"bear",v2:"bore",v3:"born / borne",translate:"родить",id:5},{v1:"beat",v2:"beat",v3:"beaten / beat",translate:"бить",id:6},{v1:"become",v2:"became",v3:"become",translate:"становиться, делаться",id:7},{v1:"begin",v2:"began",v3:"begun",translate:"начинать",id:8},{v1:"bend",v2:"bent",v3:"bent",translate:"сгибать, гнуть",id:9},{v1:"bet",v2:"bet / betted",v3:"bet / betted",translate:"держать пари",id:10},{v1:"bid",v2:"bade / bid",v3:"bidden / bid",translate:"предлагать цену",id:11},{v1:"bind",v2:"bound",v3:"bound",translate:"связывать",id:12},{v1:"bite",v2:"bit",v3:"bitten",translate:"кусать",id:13},{v1:"bleed",v2:"bled",v3:"bled",translate:"кровоточить",id:14},{v1:"blow",v2:"blew",v3:"blown",translate:"дуть",id:15},{v1:"break",v2:"broke",v3:"broken",translate:"ломать",id:16},{v1:"breed",v2:"bred",v3:"bred",translate:"выращивать, воспитывать",id:17},{v1:"bring",v2:"brought",v3:"brought",translate:"приносить",id:18},{v1:"broadcast",v2:"broadcast / broadcasted",v3:"broadcast / broadcasted",translate:"распространять, разбрасывать",id:19},{v1:"browbeat",v2:"browbeat",v3:"browbeaten / browbeat",translate:"запугивать",id:20},{v1:"build",v2:"built",v3:"built",translate:"строить",id:21},{v1:"burn",v2:"burned / burnt",v3:"burned / burnt",translate:"гореть, жечь",id:22},{v1:"burst",v2:"burst",v3:"burst",translate:"взрываться, прорываться",id:23},{v1:"bust",v2:"busted / bust",v3:"busted / bust",translate:"разжаловать",id:24},{v1:"buy",v2:"bought",v3:"bought",translate:"покупать",id:25},{v1:"can",v2:"could",v3:"could",translate:"уметь,  мочь",id:26},{v1:"cast",v2:"cast",v3:"cast",translate:"бросать, кидать, вышвырнуть",id:27},{v1:"catch",v2:"caught",v3:"caught",translate:"ловить, хватать, успеть",id:28},{v1:"choose",v2:"chose",v3:"chosen",translate:"выбирать",id:29},{v1:"cling",v2:"clung",v3:"clung",translate:"цепляться, льнуть",id:30},{v1:"clothe",v2:"clothed / clad",v3:"clothed / clad",translate:"одевать (кого-либо)",id:31},{v1:"come",v2:"came",v3:"come",translate:"приходить",id:32},{v1:"cost",v2:"cost",v3:"cost",translate:"стоить, обходиться (в какую-либо сумму)",id:33},{v1:"creep",v2:"crept",v3:"crept",translate:"ползать",id:34},{v1:"cut",v2:"cut",v3:"cut",translate:"резать, разрезать",id:35},{v1:"deal",v2:"dealt",v3:"dealt",translate:"иметь дело",id:36},{v1:"dig",v2:"dug",v3:"dug",translate:"копать",id:37},{v1:"dive",v2:"dove / dived",v3:"dived",translate:"нырять, погружаться",id:38},{v1:"do",v2:"did",v3:"done",translate:"делать (что либо), выполнять",id:39},{v1:"draw",v2:"drew",v3:"drawn",translate:"рисовать, чертить",id:40},{v1:"dream",v2:"dreamed / dreamt",v3:"dreamed / dreamt",translate:"грезить, мечтать",id:41},{v1:"drink",v2:"drank",v3:"drunk",translate:"пить",id:42},{v1:"drive",v2:"drove",v3:"driven",translate:"управлять (авто)",id:43},{v1:"dwell",v2:"dwelt / dwelled",v3:"dwelt / dwelled",translate:"обитать, находиться",id:44},{v1:"eat",v2:"ate",v3:"eaten",translate:"есть, кушать",id:45},{v1:"fall",v2:"fell",v3:"fallen",translate:"падать",id:46},{v1:"feed",v2:"fed",v3:"fed",translate:"кормить",id:47},{v1:"feel",v2:"felt",v3:"felt",translate:"чувствовать",id:48},{v1:"fight",v2:"fought",v3:"fought",translate:"драться, сражаться, бороться",id:49},{v1:"find",v2:"found",v3:"found",translate:"находить",id:50},{v1:"fit",v2:"fit",v3:"fit",translate:"подходить по размеру",id:51},{v1:"flee",v2:"fled",v3:"fled",translate:"убегать, спасаться",id:52},{v1:"fling",v2:"flung",v3:"flung",translate:"бросаться, ринуться",id:53},{v1:"fly",v2:"flew",v3:"flown",translate:"летать",id:54},{v1:"forbid",v2:"forbade",v3:"forbidden",translate:"запрещать",id:55},{v1:"forecast",v2:"forecast",v3:"forecast",translate:"предсказывать, предвосхищать",id:56},{v1:"foresee",v2:"foresaw",v3:"foreseen",translate:"предвидеть",id:57},{v1:"foretell",v2:"foretold",v3:"foretold",translate:"предсказывать, прогнозировать",id:58},{v1:"forget",v2:"forgot",v3:"forgotten",translate:"забывать",id:59},{v1:"forgive",v2:"forgave",v3:"forgiven",translate:"прощать",id:60},{v1:"forsake",v2:"forsook",v3:"forsaken",translate:"покидать",id:61},{v1:"freeze",v2:"froze",v3:"frozen",translate:"замерзать",id:62},{v1:"get",v2:"got",v3:"gotten / got",translate:"получать, достигать",id:63},{v1:"give",v2:"gave",v3:"given",translate:"давать",id:64},{v1:"go",v2:"went",v3:"gone",translate:"идти, ехать",id:65},{v1:"grind",v2:"ground",v3:"ground",translate:"молоть, толочь",id:66},{v1:"grow",v2:"grew",v3:"grown",translate:"расти",id:67},{v1:"hang",v2:"hung / hanged",v3:"hung / hanged",translate:"вешать, развешивать",id:68},{v1:"have, has",v2:"had",v3:"had",translate:"иметь",id:69},{v1:"hear",v2:"heard",v3:"heard",translate:"слышать",id:70},{v1:"hew",v2:"hewed",v3:"hewn / hewed",translate:"рубить",id:71},{v1:"hide",v2:"hid",v3:"hidden",translate:"прятаться, скрываться",id:72},{v1:"hit",v2:"hit",v3:"hit",translate:"ударять, поражать",id:73},{v1:"hold",v2:"held",v3:"held",translate:"держать, удерживать, фиксировать",id:74},{v1:"hurt",v2:"hurt",v3:"hurt",translate:"ранить, причинить боль",id:75},{v1:"inlay",v2:"inlaid",v3:"inlaid",translate:"вкладывать, вставлять, выстилать",id:76},{v1:"input",v2:"input / inputted",v3:"input / inputted",translate:"входить",id:77},{v1:"interweave",v2:"interwove",v3:"interwoven",translate:"вплетать",id:78},{v1:"keep",v2:"kept",v3:"kept",translate:"держать, хранить",id:79},{v1:"kneel",v2:"knelt / kneeled",v3:"knelt / kneeled",translate:"становиться на колени",id:80},{v1:"knit",v2:"knitted / knit",v3:"knitted / knit",translate:"вязать,  скрепляться",id:81},{v1:"know",v2:"knew",v3:"known",translate:"знать, иметь представление (о чем-либо)",id:82},{v1:"lay",v2:"laid",v3:"laid",translate:"прокладывать, располагать",id:83},{v1:"lead",v2:"led",v3:"led",translate:"вести, руководить, управлять",id:84},{v1:"lean",v2:"leaned / leant",v3:"leaned / leant",translate:"опираться, прислоняться",id:85},{v1:"leap",v2:"leaped / leapt",v3:"leaped / leapt",translate:"прыгать, скакать",id:86},{v1:"learn",v2:"learnt / learned",v3:"learnt / learned",translate:"учиться (чему либо)",id:87},{v1:"leave",v2:"left",v3:"left",translate:"покидать, оставлять",id:88},{v1:"lend",v2:"lent",v3:"lent",translate:"одалживать, давать взаймы",id:89},{v1:"let",v2:"let",v3:"let",translate:"позволять, предполагать",id:90},{v1:"lie",v2:"lay",v3:"lain",translate:"лежать",id:91},{v1:"light",v2:"lit / lighted",v3:"lit / lighted",translate:"освещать, зажигаться, загораться",id:92},{v1:"lose",v2:"lost",v3:"lost",translate:"терять",id:93},{v1:"make",v2:"made",v3:"made",translate:"делать (своими руками), производить, создавать",id:94},{v1:"may",v2:"might",v3:"might",translate:"мочь, иметь возможность",id:95},{v1:"mean",v2:"meant",v3:"meant",translate:"значить, иметь ввиду",id:96},{v1:"meet",v2:"met",v3:"met",translate:"встречать",id:97},{v1:"miscast",v2:"miscast",v3:"miscast",translate:"неправильно распределять роли",id:98},{v1:"misdeal",v2:"misdealt",v3:"misdealt",translate:"поступать неправильно",id:99},{v1:"misdo",v2:"misdid",v3:"misdone",translate:"делать что-либо неправильно или небрежно",id:100},{v1:"misgive",v2:"misgave",v3:"misgiven",translate:"внушать недоверия, опасения",id:101},{v1:"mishear",v2:"misheard",v3:"misheard",translate:"ослышаться",id:102},{v1:"mishit",v2:"mishit",v3:"mishit",translate:"промахнуться",id:103},{v1:"mislay",v2:"mislaid",v3:"mislaid",translate:"класть не на место",id:104},{v1:"mislead",v2:"misled",v3:"misled",translate:"ввести в заблуждение",id:105},{v1:"misread",v2:"misread",v3:"misread",translate:"неправильно истолковывать",id:106},{v1:"misspell",v2:"misspelled / misspelt",v3:"misspelled / misspelt",translate:"писать с ошибками",id:107},{v1:"misspend",v2:"misspent",v3:"misspent",translate:"неразумно, зря тратить",id:108},{v1:"mistake",v2:"mistook",v3:"mistaken",translate:"ошибаться",id:109},{v1:"misunderstand",v2:"misunderstood",v3:"misunderstood",translate:"неправильно понимать",id:110},{v1:"mow",v2:"mowed",v3:"mowed / mown",translate:"косить",id:111},{v1:"offset",v2:"offset",v3:"offset",translate:"возмещать, вознаграждать, компенсировать",id:112},{v1:"outbid",v2:"outbid",v3:"outbid",translate:"перебивать цену",id:113},{v1:"outdo",v2:"outdid",v3:"outdone",translate:"превосходить",id:114},{v1:"outfight",v2:"outfought",v3:"outfought",translate:"побеждать в бою",id:115},{v1:"outgrow",v2:"outgrew",v3:"outgrown",translate:"вырастать из",id:116},{v1:"output",v2:"output / outputted",v3:"output / outputted",translate:"выходить",id:117},{v1:"outrun",v2:"outran",v3:"outrun",translate:"перегонять, опережать",id:118},{v1:"outsell",v2:"outsold",v3:"outsold",translate:"продавать лучше или дороже",id:119},{v1:"outshine",v2:"outshone",v3:"outshone",translate:"затмевать",id:120},{v1:"overbid",v2:"overbid",v3:"overbid",translate:"повелевать",id:121},{v1:"overcome",v2:"overcame",v3:"overcome",translate:"компенсировать",id:122},{v1:"overdo",v2:"overdid",v3:"overdone",translate:"переусердствовать, перебарщивать",id:123},{v1:"overdraw",v2:"overdrew",v3:"overdrawn",translate:"превышать, преувеличивать",id:124},{v1:"overeat",v2:"overate",v3:"overeaten",translate:"объедаться",id:125},{v1:"overfly",v2:"overflew",v3:"overflown",translate:"перелетать",id:126},{v1:"overhang",v2:"overhung",v3:"overhung",translate:"нависать",id:127},{v1:"overhear",v2:"overheard",v3:"overheard",translate:"подслуш(ив)ать",id:128},{v1:"overlay",v2:"overlaid",v3:"overlaid",translate:"покры(ва)ть",id:129},{v1:"overpay",v2:"overpaid",v3:"overpaid",translate:"переплачивать",id:130},{v1:"override",v2:"overrode",v3:"overridden",translate:"отменять, аннулировать",id:131},{v1:"overrun",v2:"overran",v3:"overrun",translate:"переполнять, наводнять",id:132},{v1:"oversee",v2:"oversaw",v3:"overseen",translate:"надзирать за",id:133},{v1:"overshoot",v2:"overshot",v3:"overshot",translate:"расстрелять",id:134},{v1:"oversleep",v2:"overslept",v3:"overslept",translate:"проспать, заспаться",id:135},{v1:"overtake",v2:"overtook",v3:"overtaken",translate:"догонять, настигать",id:136},{v1:"overthrow",v2:"overthrew",v3:"overthrown",translate:"свергать, опрокидывать",id:137},{v1:"partake",v2:"partook",v3:"partaken",translate:"принимать участие",id:138},{v1:"pay",v2:"paid",v3:"paid",translate:"платить",id:139},{v1:"plead",v2:"pleaded / pled",v3:"pleaded / pled",translate:"обращаться к суду",id:140},{v1:"prepay",v2:"prepaid",v3:"prepaid",translate:"платить вперед",id:141},{v1:"prove",v2:"proved",v3:"proven / proved",translate:"доказывать",id:142},{v1:"put",v2:"put",v3:"put",translate:"класть, ставить, размещать",id:143},{v1:"quit",v2:"quit / quitted",v3:"quit / quitted",translate:"выходить, покидать, оставлять",id:144},{v1:"read",v2:"read",v3:"read",translate:"читать",id:145},{v1:"rebind",v2:"rebound",v3:"rebound",translate:"перевязывать",id:146},{v1:"rebuild",v2:"rebuilt",v3:"rebuilt",translate:"перестроить",id:147},{v1:"recast",v2:"recast",v3:"recast",translate:"изменять, перестраивать",id:148},{v1:"redo",v2:"redid",v3:"redone",translate:"делать вновь, переделывать",id:149},{v1:"rehear",v2:"reheard",v3:"reheard",translate:"слушать вторично",id:150},{v1:"remake",v2:"remade",v3:"remade",translate:"переделывать (руками)",id:151},{v1:"rend",v2:"rent",v3:"rent",translate:"раздирать",id:152},{v1:"repay",v2:"repaid",v3:"repaid",translate:"отдавать долг",id:153},{v1:"rerun",v2:"reran",v3:"rerun",translate:"выполнять повторно",id:154},{v1:"resell",v2:"resold",v3:"resold",translate:"перепродавать",id:155},{v1:"reset",v2:"reset",v3:"reset",translate:"возвращать",id:156},{v1:"resit",v2:"resat",v3:"resat",translate:"пересиживать",id:157},{v1:"retake",v2:"retook",v3:"retaken",translate:"забирать",id:158},{v1:"retell",v2:"retold",v3:"retold",translate:"пересказывать",id:159},{v1:"rewrite",v2:"rewrote",v3:"rewritten",translate:"перезаписать",id:160},{v1:"rid",v2:"rid",v3:"rid",translate:"избавлять",id:161},{v1:"ride",v2:"rode",v3:"ridden",translate:"ездить верхом",id:162},{v1:"ring",v2:"rang",v3:"rung",translate:"звонить",id:163},{v1:"rise",v2:"rose",v3:"risen",translate:"подняться",id:164},{v1:"run",v2:"ran",v3:"run",translate:"бегать",id:165},{v1:"saw",v2:"sawed",v3:"sawed / sawn",translate:"пилить",id:166},{v1:"say",v2:"said",v3:"said",translate:"сказать, заявить",id:167},{v1:"see",v2:"saw",v3:"seen",translate:"видеть",id:168},{v1:"seek",v2:"sought",v3:"sought",translate:"искать",id:169},{v1:"sell",v2:"sold",v3:"sold",translate:"продавать",id:170},{v1:"send",v2:"sent",v3:"sent",translate:"посылать",id:171},{v1:"set",v2:"set",v3:"set",translate:"сажать, ставить, устанавливать, садиться (о солнце)",id:172},{v1:"sew",v2:"sewed",v3:"sewn / sewed",translate:"шить",id:173},{v1:"shake",v2:"shook",v3:"shaken",translate:"трясти",id:174},{v1:"shave",v2:"shaved",v3:"shaved / shaven",translate:"бриться",id:175},{v1:"shear",v2:"sheared",v3:"sheared / shorn",translate:"стричь",id:176},{v1:"shed",v2:"shed",v3:"shed",translate:"проливать",id:177},{v1:"shine",v2:"shined / shone",v3:"shined / shone",translate:"светить, сиять, озарять",id:178},{v1:"shoot",v2:"shot",v3:"shot",translate:"стрелять, давать побеги",id:179},{v1:"show",v2:"showed",v3:"shown / showed",translate:"показывать",id:180},{v1:"shrink",v2:"shrank / shrunk",v3:"shrunk",translate:"сокращаться, сжиматься",id:181},{v1:"shut",v2:"shut",v3:"shut",translate:"закрывать, запирать, затворять",id:182},{v1:"sing",v2:"sang",v3:"sung",translate:"петь",id:183},{v1:"sink",v2:"sank / sunk",v3:"sunk",translate:"тонуть, погружаться (под воду)",id:184},{v1:"sit",v2:"sat",v3:"sat",translate:"сидеть",id:185},{v1:"slay",v2:"slew / slayed",v3:"slain / slayed",translate:"убивать",id:186},{v1:"sleep",v2:"slept",v3:"slept",translate:"спать",id:187},{v1:"slide",v2:"slid",v3:"slid",translate:"скользить",id:188},{v1:"sling",v2:"slung",v3:"slung",translate:"бросать, швырять",id:189},{v1:"slink",v2:"slunk",v3:"slunk",translate:"красться, идти крадучись",id:190},{v1:"slit",v2:"slit",v3:"slit",translate:"разрезать, рвать в длину",id:191},{v1:"smell",v2:"smelled / smelt",v3:"smelled / smelt",translate:"пахнуть, нюхать",id:192},{v1:"sneak",v2:"snuck / sneaked",v3:"snuck / sneaked",translate:"красться, увиливать, избегать",id:193},{v1:"sow",v2:"sowed",v3:"sown / sowed",translate:"сеять",id:194},{v1:"speak",v2:"spoke",v3:"spoken",translate:"говорить",id:195},{v1:"speed",v2:"sped / speeded",v3:"sped / speeded",translate:"ускорять, спешить",id:196},{v1:"spell",v2:"spelled / spelt",v3:"spelled / spelt",translate:"писать или читать по буквам",id:197},{v1:"spend",v2:"spent",v3:"spent",translate:"тратить, расходовать",id:198},{v1:"spill",v2:"spilled / spilt",v3:"spilled / spilt",translate:"проливать, разливать",id:199},{v1:"spin",v2:"spun",v3:"spun",translate:"прясть",id:200},{v1:"spit",v2:"spit / spat",v3:"spit / spat",translate:"плевать",id:201},{v1:"split",v2:"split",v3:"split",translate:"расщеплять",id:202},{v1:"spoil",v2:"spoiled / spoilt",v3:"spoiled / spoilt",translate:"портить",id:203},{v1:"spread",v2:"spread",v3:"spread",translate:"распространять(ся), простирать(ся)",id:204},{v1:"spring",v2:"sprang / sprung",v3:"sprung",translate:"отскочить, прыгать, скакать, возникать",id:205},{v1:"stand",v2:"stood",v3:"stood",translate:"стоять",id:206},{v1:"steal",v2:"stole",v3:"stolen",translate:"воровать, красть",id:207},{v1:"stick",v2:"stuck",v3:"stuck",translate:"уколоть, приклеить",id:208},{v1:"sting",v2:"stung",v3:"stung",translate:"жалить",id:209},{v1:"stink",v2:"stunk / stank",v3:"stunk",translate:"вонять",id:210},{v1:"strew",v2:"strewed",v3:"strewn / strewed",translate:"усеять, устлать",id:211},{v1:"stride",v2:"strode",v3:"stridden",translate:"шагать, наносить удар",id:212},{v1:"strike",v2:"struck",v3:"struck",translate:"ударить, бить, бастовать",id:213},{v1:"string",v2:"strung",v3:"strung",translate:"нанизать, натянуть",id:214},{v1:"strive",v2:"strove / strived",v3:"striven / strived",translate:"стараться",id:215},{v1:"sublet",v2:"sublet",v3:"sublet",translate:"передавать в субаренду",id:216},{v1:"swear",v2:"swore",v3:"sworn",translate:"клясться, присягать",id:217},{v1:"sweep",v2:"swept",v3:"swept",translate:"мести, подметать, сметать",id:218},{v1:"swell",v2:"swelled",v3:"swollen / swelled",translate:"разбухать",id:219},{v1:"swim",v2:"swam",v3:"swum",translate:"плавать, плыть",id:220},{v1:"swing",v2:"swung",v3:"swung",translate:"качать, раскачивать, вертеть",id:221},{v1:"take",v2:"took",v3:"taken",translate:"брать, взять",id:222},{v1:"teach",v2:"taught",v3:"taught",translate:"учить, обучать",id:223},{v1:"tear",v2:"tore",v3:"torn",translate:"рвать",id:224},{v1:"tell",v2:"told",v3:"told",translate:"рассказать",id:225},{v1:"think",v2:"thought",v3:"thought",translate:"думать",id:226},{v1:"throw",v2:"threw",v3:"thrown",translate:"кидать, бросать",id:227},{v1:"thrust",v2:"thrust",v3:"thrust",translate:"колоть, пронзать",id:228},{v1:"tread",v2:"trod",v3:"trodden / trod",translate:"ступать",id:229},{v1:"unbend",v2:"unbent",v3:"unbent",translate:"выпрямляться, разгибаться",id:230},{v1:"underbid",v2:"underbid",v3:"underbid",translate:"снижать цену",id:231},{v1:"undercut",v2:"undercut",v3:"undercut",translate:"сбивать цены",id:232},{v1:"undergo",v2:"underwent",v3:"undergone",translate:"испытывать, переносить",id:233},{v1:"underlie",v2:"underlay",v3:"underlain",translate:"лежать в основе",id:234},{v1:"underpay",v2:"underpaid",v3:"underpaid",translate:"оплачивать слишком низко",id:235},{v1:"undersell",v2:"undersold",v3:"undersold",translate:"продавать дешевле",id:236},{v1:"understand",v2:"understood",v3:"understood",translate:"понимать, постигать",id:237},{v1:"undertake",v2:"undertook",v3:"undertaken",translate:"предпринять",id:238},{v1:"underwrite",v2:"underwrote",v3:"underwritten",translate:"подписываться",id:239},{v1:"undo",v2:"undid",v3:"undone",translate:"уничтожать сделанное",id:240},{v1:"unfreeze",v2:"unfroze",v3:"unfrozen",translate:"размораживать",id:241},{v1:"unsay",v2:"unsaid",v3:"unsaid",translate:"брать назад свои слова",id:242},{v1:"unwind",v2:"unwound",v3:"unwound",translate:"развертывать",id:243},{v1:"uphold",v2:"upheld",v3:"upheld",translate:"поддерживать",id:244},{v1:"upset",v2:"upset",v3:"upset",translate:"опрокинуться",id:245},{v1:"wake",v2:"woke / waked",v3:"woken / waked",translate:"просыпаться",id:246},{v1:"waylay",v2:"waylaid",v3:"waylaid",translate:"подстерегать",id:247},{v1:"wear",v2:"wore",v3:"worn",translate:"носить (одежду), снашиваться",id:248},{v1:"weave",v2:"wove / weaved",v3:"woven / weaved",translate:"ткать",id:249},{v1:"wed",v2:"wed / wedded",v3:"wed / wedded",translate:"жениться, выдавать замуж",id:250},{v1:"weep",v2:"wept",v3:"wept",translate:"плакать, рыдать",id:251},{v1:"wet",v2:"wet / wetted",v3:"wet / wetted",translate:"мочить, увлажнять",id:252},{v1:"win",v2:"won",v3:"won",translate:"победить, выиграть",id:253},{v1:"wind",v2:"wound",v3:"wound",translate:"заводить (механизм)",id:254},{v1:"withdraw",v2:"withdrew",v3:"withdrawn",translate:"взять назад, отозвать",id:255},{v1:"withhold",v2:"withheld",v3:"withheld",translate:"воздерживаться, отказывать",id:256},{v1:"withstand",v2:"withstood",v3:"withstood",translate:"противостоять",id:257},{v1:"wring",v2:"wrung",v3:"wrung",translate:"скрутить, сжимать",id:258},{v1:"write",v2:"wrote",v3:"written",translate:"писать",id:259}]};r["a"].use(L["a"]);var R=new L["a"].Store({state:W,mutations:{},actions:{}}),K=a("9483");Object(K["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,r["a"].use(s.a,i.a),new r["a"]({router:I,store:R,render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var r=a("5e27"),n=a.n(r);n.a},"5e27":function(e,t,a){}});
//# sourceMappingURL=app.213ada1a.js.map