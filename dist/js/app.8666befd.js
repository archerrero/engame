(function(e){function t(t){for(var a,s,l=t[0],o=t[1],d=t[2],i=0,b=[];i<l.length;i++)s=l[i],v[s]&&b.push(v[s][0]),v[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);u&&u(t);while(b.length)b.shift()();return n.push.apply(n,d||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,s=1;s<r.length;s++){var o=r[s];0!==v[o]&&(a=!1)}a&&(n.splice(t--,1),e=l(l.s=r[0]))}return e}var a={},v={app:0},n=[];function s(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ad763791"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r=v[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise(function(t,a){r=v[e]=[t,a]});t.push(r[2]=a);var n,o=document.createElement("script");o.charset="utf-8",o.timeout=120,l.nc&&o.setAttribute("nonce",l.nc),o.src=s(e),n=function(t){o.onerror=o.onload=null,clearTimeout(d);var r=v[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+a+": "+n+")");s.type=a,s.request=n,r[1](s)}v[e]=void 0}};var d=setTimeout(function(){n({type:"timeout",target:o})},12e4);o.onerror=o.onload=n,document.head.appendChild(o)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(r,a,function(t){return e[t]}.bind(null,a));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var u=d;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},n=[],s=(r("5c0b"),r("2877")),l={},o=Object(s["a"])(l,v,n,!1,null,null,null),d=o.exports,i=r("8c4f"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("verbs",{attrs:{verb:e.verb},on:{true:function(t){return e.doTrueEvent(t)},false:function(t){return e.doFalseEvent(t)}}})],1)},b=[],c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card",class:{checked:e.isBackShown},style:e.sizes},[r("transition",{attrs:{name:"card--front"}},[e.isBackShown?e._e():r("div",{staticClass:"card--front",domProps:{innerHTML:e._s(e.verb.translate)},on:{click:function(t){return e.check()}}})]),r("transition",{attrs:{name:"card--back"}},[e.isBackShown?r("div",{staticClass:"card--back"},[r("p",[e._v(e._s(e.verb.v1))]),r("p",[e._v(e._s(e.verb.v2))]),r("p",[e._v(e._s(e.verb.v3))]),r("div",{staticClass:"card--arrows--i left",on:{click:function(t){return e.goTrue()}}},[e._v("‹")]),r("div",{staticClass:"card--arrows--i right",on:{click:function(t){return e.goFalse()}}},[e._v("›")])]):e._e()])],1)},h=[],p={name:"Verbs",props:{verb:Object},data:function(){return{isBackShown:!1,sizes:{width:0,height:0},GAP:20}},created:function(){this.sizes.width=this.getMinDocumentSize(),this.sizes.height=this.getMinDocumentSize()},methods:{check:function(){this.isBackShown=!this.isBackShown},goTrue:function(){this.$emit("true"),this.isBackShown=!this.isBackShown},goFalse:function(){this.$emit("false",this.verb),this.isBackShown=!this.isBackShown},getMinDocumentSize:function(){return document.body.offsetHeight>document.body.offsetWidth?"".concat(document.body.offsetWidth-this.GAP,"px"):"".concat(document.body.offsetHeight-this.GAP,"px")}}},w=p,f=Object(s["a"])(w,c,h,!1,null,null,null),g=f.exports,m={name:"home",components:{verbs:g},data:function(){return{verb:""}},created:function(){this.getNew()},computed:{verbs:function(){return this.$store.state.verbs}},methods:{random:function(){return Math.floor(Math.random()*this.verbs.length)},getVerb:function(){return this.verbs[this.random()]},doTrueEvent:function(){this.getNew()},doFalseEvent:function(e){this.verbs.push(e),this.getNew()},getNew:function(){this.verb=this.getVerb(),console.log(this.verb)}}},k=m,y=Object(s["a"])(k,u,b,!1,null,null,null),_=y.exports;a["a"].use(i["a"]);var S=new i["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:_},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}]}),j=r("2f62"),O={verbs:[{v1:"abide",v2:"abode / abided",v3:"abode / abided",translate:"выносить, <br/>терпеть"},{v1:"arise",v2:"arose",v3:"arisen",translate:"возникать, <br/>появляться, <br/>подниматься"},{v1:"awake",v2:"awakened / awoke",v3:"awakened / awoken",translate:"будить, <br/>проснуться"},{v1:"backslide",v2:"backslid",v3:"backslidden / backslid",translate:"отказываться от прежних убеждений"},{v1:"be",v2:"was, were",v3:"been",translate:"быть"},{v1:"bear",v2:"bore",v3:"born / borne",translate:"родить"},{v1:"beat",v2:"beat",v3:"beaten / beat",translate:"бить"},{v1:"become",v2:"became",v3:"become",translate:"становиться, <br/>делаться"},{v1:"begin",v2:"began",v3:"begun",translate:"начинать"},{v1:"bend",v2:"bent",v3:"bent",translate:"сгибать, <br/>гнуть"},{v1:"bet",v2:"bet / betted",v3:"bet / betted",translate:"держать пари"},{v1:"bid",v2:"bade / bid",v3:"bidden / bid",translate:"предлагать цену"},{v1:"bind",v2:"bound",v3:"bound",translate:"связать"},{v1:"bite",v2:"bit",v3:"bitten",translate:"кусать"},{v1:"bleed",v2:"bled",v3:"bled",translate:"кровоточить"},{v1:"blow",v2:"blew",v3:"blown",translate:"дуть"},{v1:"break",v2:"broke",v3:"broken",translate:"ломать"},{v1:"breed",v2:"bred",v3:"bred",translate:"выращивать, <br/>воспитывать"},{v1:"bring",v2:"brought",v3:"brought",translate:"приносить"},{v1:"broadcast",v2:"broadcast / broadcasted",v3:"broadcast / broadcasted",translate:"распространять, <br/>разбрасывать"},{v1:"browbeat",v2:"browbeat",v3:"browbeaten / browbeat",translate:"запугивать"},{v1:"build",v2:"built",v3:"built",translate:"строить"},{v1:"burn",v2:"burned / burnt",v3:"burned / burnt",translate:"гореть, <br/>жечь"},{v1:"burst",v2:"burst",v3:"burst",translate:"взрываться, <br/>прорываться"},{v1:"bust",v2:"busted / bust",v3:"busted / bust",translate:"разжаловать"},{v1:"buy",v2:"bought",v3:"bought",translate:"покупать"},{v1:"can",v2:"could",v3:"could",translate:"мочь, <br/>уметь"},{v1:"cast",v2:"cast",v3:"cast",translate:"бросить, <br/>кинуть, <br/>вышвырнуть"},{v1:"catch",v2:"caught",v3:"caught",translate:"ловить, <br/>хватать, <br/>успеть"},{v1:"choose",v2:"chose",v3:"chosen",translate:"выбирать"},{v1:"cling",v2:"clung",v3:"clung",translate:"цепляться, <br/>льнуть"},{v1:"clothe",v2:"clothed / clad",v3:"clothed / clad",translate:"одевать (кого-либо)"},{v1:"come",v2:"came",v3:"come",translate:"приходить"},{v1:"cost",v2:"cost",v3:"cost",translate:"стоить, <br/>обходиться (в какую-либо сумму)"},{v1:"creep",v2:"crept",v3:"crept",translate:"ползать"},{v1:"cut",v2:"cut",v3:"cut",translate:"резать, <br/>разрезать"},{v1:"deal",v2:"dealt",v3:"dealt",translate:"иметь дело"},{v1:"dig",v2:"dug",v3:"dug",translate:"копать"},{v1:"dive",v2:"dove / dived",v3:"dived",translate:"нырять, <br/>погружаться"},{v1:"do",v2:"did",v3:"done",translate:"делать, <br/>выполнять"},{v1:"draw",v2:"drew",v3:"drawn",translate:"рисовать, <br/>чертить"},{v1:"dream",v2:"dreamed / dreamt",v3:"dreamed / dreamt",translate:"грезить, <br/>мечтать"},{v1:"drink",v2:"drank",v3:"drunk",translate:"пить"},{v1:"drive",v2:"drove",v3:"driven",translate:"управлять (авто)"},{v1:"dwell",v2:"dwelt / dwelled",v3:"dwelt / dwelled",translate:"обитать, <br/>находиться"},{v1:"eat",v2:"ate",v3:"eaten",translate:"есть, <br/>кушать"},{v1:"fall",v2:"fell",v3:"fallen",translate:"падать"},{v1:"feed",v2:"fed",v3:"fed",translate:"кормить"},{v1:"feel",v2:"felt",v3:"felt",translate:"чувствовать"},{v1:"fight",v2:"fought",v3:"fought",translate:"драться, <br/>сражаться, <br/>бороться"},{v1:"find",v2:"found",v3:"found",translate:"находить"},{v1:"fit",v2:"fit",v3:"fit",translate:"подходить по размеру"},{v1:"flee",v2:"fled",v3:"fled",translate:"убегать, <br/>спасаться"},{v1:"fling",v2:"flung",v3:"flung",translate:"бросаться, <br/>ринуться"},{v1:"fly",v2:"flew",v3:"flown",translate:"летать"},{v1:"forbid",v2:"forbade",v3:"forbidden",translate:"запрещать"},{v1:"forecast",v2:"forecast",v3:"forecast",translate:"предсказывать, <br/>предвосхищать"},{v1:"foresee",v2:"foresaw",v3:"foreseen",translate:"предвидеть"},{v1:"foretell",v2:"foretold",v3:"foretold",translate:"предсказывать, <br/>прогнозировать"},{v1:"forget",v2:"forgot",v3:"forgotten",translate:"забывать"},{v1:"forgive",v2:"forgave",v3:"forgiven",translate:"прощать"},{v1:"forsake",v2:"forsook",v3:"forsaken",translate:"покидать"},{v1:"freeze",v2:"froze",v3:"frozen",translate:"замерзать"},{v1:"get",v2:"got",v3:"gotten / got",translate:"получать, <br/>достигать"},{v1:"give",v2:"gave",v3:"given",translate:"давать"},{v1:"go",v2:"went",v3:"gone",translate:"идти, <br/>ехать"},{v1:"grind",v2:"ground",v3:"ground",translate:"молоть, <br/>толочь"},{v1:"grow",v2:"grew",v3:"grown",translate:"расти"},{v1:"hang",v2:"hung / hanged",v3:"hung / hanged",translate:"вешать, <br/>развешивать"},{v1:"have, has",v2:"had",v3:"had",translate:"иметь"},{v1:"hear",v2:"heard",v3:"heard",translate:"слышать"},{v1:"hew",v2:"hewed",v3:"hewn / hewed",translate:"рубить"},{v1:"hide",v2:"hid",v3:"hidden",translate:"прятаться, <br/>скрываться"},{v1:"hit",v2:"hit",v3:"hit",translate:"ударять, <br/>поражать"},{v1:"hold",v2:"held",v3:"held",translate:"держать, <br/>удерживать, <br/>фиксировать"},{v1:"hurt",v2:"hurt",v3:"hurt",translate:"ранить, <br/>причинить боль"},{v1:"inlay",v2:"inlaid",v3:"inlaid",translate:"вкладывать, <br/>вставлять, <br/>выстилать"},{v1:"input",v2:"input / inputted",v3:"input / inputted",translate:"входить"},{v1:"interweave",v2:"interwove",v3:"interwoven",translate:"воткать"},{v1:"keep",v2:"kept",v3:"kept",translate:"держать, <br/>хранить"},{v1:"kneel",v2:"knelt / kneeled",v3:"knelt / kneeled",translate:"становиться на колени"},{v1:"knit",v2:"knitted / knit",v3:"knitted / knit",translate:"вязать"},{v1:"know",v2:"knew",v3:"known",translate:"знать, <br/>иметь представление (о чем-либо)"},{v1:"lay",v2:"laid",v3:"laid",translate:"класть, <br/>положить"},{v1:"lead",v2:"led",v3:"led",translate:"вести, <br/>руководить, <br/>управлять"},{v1:"lean",v2:"leaned / leant",v3:"leaned / leant",translate:"опираться, <br/>прислоняться"},{v1:"leap",v2:"leaped / leapt",v3:"leaped / leapt",translate:"прыгать, <br/>скакать"},{v1:"learn",v2:"learnt / learned",v3:"learnt / learned",translate:"учить"},{v1:"leave",v2:"left",v3:"left",translate:"покидать, <br/>оставлять"},{v1:"lend",v2:"lent",v3:"lent",translate:"одалживать, <br/>давать взаймы"},{v1:"let",v2:"let",v3:"let",translate:"позволять, <br/>предполагать"},{v1:"lie",v2:"lay",v3:"lain",translate:"лежать"},{v1:"light",v2:"lit / lighted",v3:"lit / lighted",translate:"освещать, <br/>зажигаться, <br/>загораться"},{v1:"lose",v2:"lost",v3:"lost",translate:"терять"},{v1:"make",v2:"made",v3:"made",translate:"делать, <br/>производить, <br/>создавать"},{v1:"may",v2:"might",v3:"might",translate:"мочь, <br/>иметь возможность"},{v1:"mean",v2:"meant",v3:"meant",translate:"значить, <br/>иметь ввиду"},{v1:"meet",v2:"met",v3:"met",translate:"встречать"},{v1:"miscast",v2:"miscast",v3:"miscast",translate:"неправильно распределять роли"},{v1:"misdeal",v2:"misdealt",v3:"misdealt",translate:"поступать неправильно"},{v1:"misdo",v2:"misdid",v3:"misdone",translate:"делать что-либо неправильно или небрежно"},{v1:"misgive",v2:"misgave",v3:"misgiven",translate:"внушать недоверия, <br/>опасения"},{v1:"mishear",v2:"misheard",v3:"misheard",translate:"ослышаться"},{v1:"mishit",v2:"mishit",v3:"mishit",translate:"промахнуться"},{v1:"mislay",v2:"mislaid",v3:"mislaid",translate:"класть не на место"},{v1:"mislead",v2:"misled",v3:"misled",translate:"ввести в заблуждение"},{v1:"misread",v2:"misread",v3:"misread",translate:"неправильно истолковывать"},{v1:"misspell",v2:"misspelled / misspelt",v3:"misspelled / misspelt",translate:"писать с ошибками"},{v1:"misspend",v2:"misspent",v3:"misspent",translate:"неразумно, <br/>зря тратить"},{v1:"mistake",v2:"mistook",v3:"mistaken",translate:"ошибаться"},{v1:"misunderstand",v2:"misunderstood",v3:"misunderstood",translate:"неправильно понимать"},{v1:"mow",v2:"mowed",v3:"mowed / mown",translate:"косить"},{v1:"offset",v2:"offset",v3:"offset",translate:"возмещать, <br/>вознаграждать, <br/>компенсировать"},{v1:"outbid",v2:"outbid",v3:"outbid",translate:"перебивать цену"},{v1:"outdo",v2:"outdid",v3:"outdone",translate:"превосходить"},{v1:"outfight",v2:"outfought",v3:"outfought",translate:"побеждать в бою"},{v1:"outgrow",v2:"outgrew",v3:"outgrown",translate:"вырастать из"},{v1:"output",v2:"output / outputted",v3:"output / outputted",translate:"выходить"},{v1:"outrun",v2:"outran",v3:"outrun",translate:"перегонять, <br/>опережать"},{v1:"outsell",v2:"outsold",v3:"outsold",translate:"продавать лучше или дороже"},{v1:"outshine",v2:"outshone",v3:"outshone",translate:"затмевать"},{v1:"overbid",v2:"overbid",v3:"overbid",translate:"повелевать"},{v1:"overcome",v2:"overcame",v3:"overcome",translate:"компенсировать"},{v1:"overdo",v2:"overdid",v3:"overdone",translate:"пережари(ва)ть"},{v1:"overdraw",v2:"overdrew",v3:"overdrawn",translate:"превышать"},{v1:"overeat",v2:"overate",v3:"overeaten",translate:"объедаться"},{v1:"overfly",v2:"overflew",v3:"overflown",translate:"перелетать"},{v1:"overhang",v2:"overhung",v3:"overhung",translate:"нависать"},{v1:"overhear",v2:"overheard",v3:"overheard",translate:"подслуш(ив)ать"},{v1:"overlay",v2:"overlaid",v3:"overlaid",translate:"покры(ва)ть"},{v1:"overpay",v2:"overpaid",v3:"overpaid",translate:"переплачивать"},{v1:"override",v2:"overrode",v3:"overridden",translate:"отменять, <br/>аннулировать"},{v1:"overrun",v2:"overran",v3:"overrun",translate:"переливаться через край"},{v1:"oversee",v2:"oversaw",v3:"overseen",translate:"надзирать за"},{v1:"overshoot",v2:"overshot",v3:"overshot",translate:"расстрелять"},{v1:"oversleep",v2:"overslept",v3:"overslept",translate:"проспать, <br/>заспаться"},{v1:"overtake",v2:"overtook",v3:"overtaken",translate:"догонять"},{v1:"overthrow",v2:"overthrew",v3:"overthrown",translate:"свергать"},{v1:"partake",v2:"partook",v3:"partaken",translate:"принимать участие"},{v1:"pay",v2:"paid",v3:"paid",translate:"платить"},{v1:"plead",v2:"pleaded / pled",v3:"pleaded / pled",translate:"обращаться к суду"},{v1:"prepay",v2:"prepaid",v3:"prepaid",translate:"платить вперед"},{v1:"prove",v2:"proved",v3:"proven / proved",translate:"доказывать"},{v1:"put",v2:"put",v3:"put",translate:"класть, <br/>ставить, <br/>размещать"},{v1:"quit",v2:"quit / quitted",v3:"quit / quitted",translate:"выходить, <br/>покидать, <br/>оставлять"},{v1:"read",v2:"read",v3:"read",translate:"читать"},{v1:"rebind",v2:"rebound",v3:"rebound",translate:"перевязывать"},{v1:"rebuild",v2:"rebuilt",v3:"rebuilt",translate:"перестроить"},{v1:"recast",v2:"recast",v3:"recast",translate:"изменять, <br/>перестраивать"},{v1:"redo",v2:"redid",v3:"redone",translate:"делать вновь, <br/>переделывать"},{v1:"rehear",v2:"reheard",v3:"reheard",translate:"слушать вторично"},{v1:"remake",v2:"remade",v3:"remade",translate:"переделывать"},{v1:"rend",v2:"rent",v3:"rent",translate:"раздирать"},{v1:"repay",v2:"repaid",v3:"repaid",translate:"отдавать долг"},{v1:"rerun",v2:"reran",v3:"rerun",translate:"выполнять повторно"},{v1:"resell",v2:"resold",v3:"resold",translate:"перепродавать"},{v1:"reset",v2:"reset",v3:"reset",translate:"возвращать"},{v1:"resit",v2:"resat",v3:"resat",translate:"пересиживать"},{v1:"retake",v2:"retook",v3:"retaken",translate:"забирать"},{v1:"retell",v2:"retold",v3:"retold",translate:"пересказывать"},{v1:"rewrite",v2:"rewrote",v3:"rewritten",translate:"перезаписать"},{v1:"rid",v2:"rid",v3:"rid",translate:"избавлять"},{v1:"ride",v2:"rode",v3:"ridden",translate:"ездить верхом"},{v1:"ring",v2:"rang",v3:"rung",translate:"звонить"},{v1:"rise",v2:"rose",v3:"risen",translate:"подняться"},{v1:"run",v2:"ran",v3:"run",translate:"бегать"},{v1:"saw",v2:"sawed",v3:"sawed / sawn",translate:"пилить"},{v1:"say",v2:"said",v3:"said",translate:"сказать, <br/>заявить"},{v1:"see",v2:"saw",v3:"seen",translate:"видеть"},{v1:"seek",v2:"sought",v3:"sought",translate:"искать"},{v1:"sell",v2:"sold",v3:"sold",translate:"продавать"},{v1:"send",v2:"sent",v3:"sent",translate:"посылать"},{v1:"set",v2:"set",v3:"set",translate:"сажать, <br/>ставить, <br/>устанавливать, <br/>садиться (о солнце)"},{v1:"sew",v2:"sewed",v3:"sewn / sewed",translate:"шить"},{v1:"shake",v2:"shook",v3:"shaken",translate:"трясти"},{v1:"shave",v2:"shaved",v3:"shaved / shaven",translate:"бриться"},{v1:"shear",v2:"sheared",v3:"sheared / shorn",translate:"стричь"},{v1:"shed",v2:"shed",v3:"shed",translate:"проливать"},{v1:"shine",v2:"shined / shone",v3:"shined / shone",translate:"светить, <br/>сиять, <br/>озарять"},{v1:"shoot",v2:"shot",v3:"shot",translate:"стрелять, <br/>давать побеги"},{v1:"show",v2:"showed",v3:"shown / showed",translate:"показывать"},{v1:"shrink",v2:"shrank / shrunk",v3:"shrunk",translate:"сокращаться, <br/>сжиматься"},{v1:"shut",v2:"shut",v3:"shut",translate:"закрывать, <br/>запирать, <br/>затворять"},{v1:"sing",v2:"sang",v3:"sung",translate:"петь"},{v1:"sink",v2:"sank / sunk",v3:"sunk",translate:"тонуть, <br/>погружаться (под воду)"},{v1:"sit",v2:"sat",v3:"sat",translate:"сидеть"},{v1:"slay",v2:"slew / slayed",v3:"slain / slayed",translate:"убивать"},{v1:"sleep",v2:"slept",v3:"slept",translate:"спать"},{v1:"slide",v2:"slid",v3:"slid",translate:"скользить"},{v1:"sling",v2:"slung",v3:"slung",translate:"бросать, <br/>швырять"},{v1:"slink",v2:"slunk",v3:"slunk",translate:"красться, <br/>идти крадучись"},{v1:"slit",v2:"slit",v3:"slit",translate:"разрезать, <br/>рвать в длину"},{v1:"smell",v2:"smelled / smelt",v3:"smelled / smelt",translate:"пахнуть, <br/>нюхать"},{v1:"sneak",v2:"snuck / sneaked",v3:"snuck / sneaked",translate:"красться, <br/>увиливать, <br/>избегать"},{v1:"sow",v2:"sowed",v3:"sown / sowed",translate:"сеять"},{v1:"speak",v2:"spoke",v3:"spoken",translate:"говорить"},{v1:"speed",v2:"sped / speeded",v3:"sped / speeded",translate:"ускорять, <br/>спешить"},{v1:"spell",v2:"spelled / spelt",v3:"spelled / spelt",translate:"писать или читать по буквам"},{v1:"spend",v2:"spent",v3:"spent",translate:"тратить, <br/>расходовать"},{v1:"spill",v2:"spilled / spilt",v3:"spilled / spilt",translate:"проливать, <br/>разливать"},{v1:"spin",v2:"spun",v3:"spun",translate:"прясть"},{v1:"spit",v2:"spit / spat",v3:"spit / spat",translate:"плевать"},{v1:"split",v2:"split",v3:"split",translate:"расщеплять"},{v1:"spoil",v2:"spoiled / spoilt",v3:"spoiled / spoilt",translate:"портить"},{v1:"spread",v2:"spread",v3:"spread",translate:"распространять(ся), <br/>простирать(ся)"},{v1:"spring",v2:"sprang / sprung",v3:"sprung",translate:"отскочить, <br/>прыгать, <br/>скакать, <br/>возникать"},{v1:"stand",v2:"stood",v3:"stood",translate:"стоять"},{v1:"steal",v2:"stole",v3:"stolen",translate:"воровать, <br/>красть"},{v1:"stick",v2:"stuck",v3:"stuck",translate:"уколоть, <br/>приклеить"},{v1:"sting",v2:"stung",v3:"stung",translate:"жалить"},{v1:"stink",v2:"stunk / stank",v3:"stunk",translate:"вонять"},{v1:"strew",v2:"strewed",v3:"strewn / strewed",translate:"усеять, <br/>устлать"},{v1:"stride",v2:"strode",v3:"stridden",translate:"шагать, <br/>наносить удар"},{v1:"strike",v2:"struck",v3:"struck",translate:"ударить, <br/>бить, <br/>бастовать"},{v1:"string",v2:"strung",v3:"strung",translate:"нанизать, <br/>натянуть"},{v1:"strive",v2:"strove / strived",v3:"striven / strived",translate:"стараться"},{v1:"sublet",v2:"sublet",v3:"sublet",translate:"передавать в субаренду"},{v1:"swear",v2:"swore",v3:"sworn",translate:"клясться, <br/>присягать"},{v1:"sweep",v2:"swept",v3:"swept",translate:"мести, <br/>подметать, <br/>сметать"},{v1:"swell",v2:"swelled",v3:"swollen / swelled",translate:"разбухать"},{v1:"swim",v2:"swam",v3:"swum",translate:"плавать, <br/>плыть"},{v1:"swing",v2:"swung",v3:"swung",translate:"качать, <br/>раскачивать, <br/>вертеть"},{v1:"take",v2:"took",v3:"taken",translate:"брать, <br/>взять"},{v1:"teach",v2:"taught",v3:"taught",translate:"учить, <br/>обучать"},{v1:"tear",v2:"tore",v3:"torn",translate:"рвать"},{v1:"tell",v2:"told",v3:"told",translate:"рассказать"},{v1:"think",v2:"thought",v3:"thought",translate:"думать"},{v1:"throw",v2:"threw",v3:"thrown",translate:"кидать, <br/>бросать"},{v1:"thrust",v2:"thrust",v3:"thrust",translate:"колоть, <br/>пронзать"},{v1:"tread",v2:"trod",v3:"trodden / trod",translate:"ступать"},{v1:"unbend",v2:"unbent",v3:"unbent",translate:"выпрямляться, <br/>разгибаться"},{v1:"underbid",v2:"underbid",v3:"underbid",translate:"снижать цену"},{v1:"undercut",v2:"undercut",v3:"undercut",translate:"сбивать цены"},{v1:"undergo",v2:"underwent",v3:"undergone",translate:"испытывать, <br/>переносить"},{v1:"underlie",v2:"underlay",v3:"underlain",translate:"лежать в основе"},{v1:"underpay",v2:"underpaid",v3:"underpaid",translate:"оплачивать слишком низко"},{v1:"undersell",v2:"undersold",v3:"undersold",translate:"продавать дешевле"},{v1:"understand",v2:"understood",v3:"understood",translate:"понимать, <br/>постигать"},{v1:"undertake",v2:"undertook",v3:"undertaken",translate:"предпринять"},{v1:"underwrite",v2:"underwrote",v3:"underwritten",translate:"подписываться"},{v1:"undo",v2:"undid",v3:"undone",translate:"уничтожать сделанное"},{v1:"unfreeze",v2:"unfroze",v3:"unfrozen",translate:"размораживать"},{v1:"unsay",v2:"unsaid",v3:"unsaid",translate:"брать назад свои слова"},{v1:"unwind",v2:"unwound",v3:"unwound",translate:"развертывать"},{v1:"uphold",v2:"upheld",v3:"upheld",translate:"поддерживать"},{v1:"upset",v2:"upset",v3:"upset",translate:"опрокинуться"},{v1:"wake",v2:"woke / waked",v3:"woken / waked",translate:"просыпаться"},{v1:"waylay",v2:"waylaid",v3:"waylaid",translate:"подстерегать"},{v1:"wear",v2:"wore",v3:"worn",translate:"носить (одежду), <br/>снашиваться"},{v1:"weave",v2:"wove / weaved",v3:"woven / weaved",translate:"ткать"},{v1:"wed",v2:"wed / wedded",v3:"wed / wedded",translate:"жениться, <br/>выдавать замуж"},{v1:"weep",v2:"wept",v3:"wept",translate:"плакать, <br/>рыдать"},{v1:"wet",v2:"wet / wetted",v3:"wet / wetted",translate:"мочить, <br/>увлажнять"},{v1:"win",v2:"won",v3:"won",translate:"победить, <br/>выиграть"},{v1:"wind",v2:"wound",v3:"wound",translate:"заводить (механизм)"},{v1:"withdraw",v2:"withdrew",v3:"withdrawn",translate:"взять назад, <br/>отозвать"},{v1:"withhold",v2:"withheld",v3:"withheld",translate:"воздерживаться, <br/>отказывать"},{v1:"withstand",v2:"withstood",v3:"withstood",translate:"противостоять"},{v1:"wring",v2:"wrung",v3:"wrung",translate:"скрутить, <br/>сжимать"},{v1:"write",v2:"wrote",v3:"written",translate:"писать"}]};a["a"].use(j["a"]);var z=new j["a"].Store({state:O,mutations:{},actions:{}}),P=r("9483");Object(P["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),a["a"].config.productionTip=!1,new a["a"]({router:S,store:z,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var a=r("5e27"),v=r.n(a);v.a},"5e27":function(e,t,r){}});
//# sourceMappingURL=app.8666befd.js.map