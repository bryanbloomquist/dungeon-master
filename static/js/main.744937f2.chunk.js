(this["webpackJsonpdungeon-master"]=this["webpackJsonpdungeon-master"]||[]).push([[0],{81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(3),s=a.n(n),c=a(13),r=a.n(c),l=a(15),i=a(11),d=a(5),j=a(22);j.a.initializeApp({apiKey:"AIzaSyCa1EKt3Y1EfURzp0TyfH3KDLvFcDH_Od0",authDomain:"bluequest-dungeon-master.firebaseapp.com",projectId:"bluequest-dungeon-master",storageBucket:"bluequest-dungeon-master.appspot.com",messagingSenderId:"535063050679",appId:"1:535063050679:web:ec855131e8e8c3809dd032",measurementId:"G-4RDXHG3E6Z"});var o=j.a,u=a(2),m=o.firestore(),h=a(47),b=s.a.createContext({}),O=function(e){var t=e.children,a=Object(n.useState)([]),s=Object(d.a)(a,2),c=s[0],r=s[1],j=Object(n.useState)([]),o=Object(d.a)(j,2),O=o[0],x=o[1],p=Object(n.useState)([]),_=Object(d.a)(p,2),g=_[0],f=_[1],N=function(){var e=Object(i.a)(c),t=[];e.forEach((function(e){return t.push({label:e.name,value:e.index})})),f(t)};Object(n.useEffect)((function(){m.collection("srd__monsters").doc("monster__names").get().then((function(e){var t=e.data().namesArray;r(t)})),m.collection("srd__monsters").doc("monster__stats").get().then((function(e){var t=e.data().monsterData,a=[];t.forEach((function(e){return a.push(JSON.parse(e))})),x(a)}))}),[]);var v=Object(n.useState)(""),M=Object(d.a)(v,2),y=M[0],S=M[1],w=Object(n.useState)(!1),C=Object(d.a)(w,2),k=C[0],I=C[1],D=Object(n.useState)(!1),A=Object(d.a)(D,2),H=A[0],T=A[1],B=Object(n.useState)(!1),E=Object(d.a)(B,2),V=E[0],P=E[1],R=Object(n.useState)(!1),G=Object(d.a)(R,2),L=G[0],F=G[1],U=Object(n.useState)(!1),z=Object(d.a)(U,2),J=z[0],q=z[1],K=Object(n.useState)(!1),X=Object(d.a)(K,2),Y=X[0],W=X[1],Z=Object(n.useState)(null),Q=Object(d.a)(Z,2),$=Q[0],ee=Q[1],te=Object(n.useState)(1),ae=Object(d.a)(te,2),ne=ae[0],se=ae[1],ce=Object(n.useState)({init:"",name:"",armr:"",hlth:"",key:""}),re=Object(d.a)(ce,2),le=re[0],ie=re[1],de=Object(n.useState)(""),je=Object(d.a)(de,2),oe=je[0],ue=je[1],me=Object(n.useState)(""),he=Object(d.a)(me,2),be=he[0],Oe=he[1],xe=Object(n.useState)(""),pe=Object(d.a)(xe,2),_e=pe[0],ge=pe[1],fe=Object(n.useState)(""),Ne=Object(d.a)(fe,2),ve=Ne[0],Me=Ne[1],ye=Object(n.useState)(""),Se=Object(d.a)(ye,2),we=Se[0],Ce=Se[1],ke=Object(n.useState)({}),Ie=Object(d.a)(ke,2),De=Ie[0],Ae=Ie[1],He=Object(n.useState)([]),Te=Object(d.a)(He,2),Be=Te[0],Ee=Te[1],Ve=Object(n.useState)(0),Pe=Object(d.a)(Ve,2),Re=Pe[0],Ge=Pe[1],Le=function(){m.collection("table__groups").doc(y).get().then((function(e){var t=e.data().table__data,a=t?Object(i.a)(JSON.parse(t)):[];Ee(a)}))},Fe=function(e){for(var t=Object(i.a)(Be),a=0;a<ne;a++){var n=Object(l.a)({},e);n.key=h.session_id(),t.push(n)}var s=ze(t);Ee(s),Ue(s),se(1),ue("")},Ue=function(e){Ee(e),m.collection("table__groups").doc(y).set({table__data:JSON.stringify(e)})},ze=function(e){var t=Object(i.a)(e);return t.sort((function(e,t){return parseFloat(t.init)-parseFloat(e.init)})),t},Je=function(e){var t=Math.floor(20*Math.random())+1;return t-=1===e?5:4},qe=Object(n.useState)(0),Ke=Object(d.a)(qe,2),Xe=Ke[0],Ye=Ke[1],We=Object(n.useState)(0),Ze=Object(d.a)(We,2),Qe=Ze[0],$e=Ze[1],et=Object(n.useState)(0),tt=Object(d.a)(et,2),at=tt[0],nt=tt[1],st=Object(n.useState)([]),ct=Object(d.a)(st,2),rt=ct[0],lt=ct[1],it=Object(n.useState)(""),dt=Object(d.a)(it,2),jt=dt[0],ot=dt[1],ut=Object(n.useState)(!1),mt=Object(d.a)(ut,2),ht=mt[0],bt=mt[1],Ot=Object(n.useState)(!1),xt=Object(d.a)(Ot,2),pt=xt[0],_t=xt[1],gt=Object(n.useState)(!0),ft=Object(d.a)(gt,2),Nt=ft[0],vt=ft[1],Mt=Object(n.useState)({}),yt=Object(d.a)(Mt,2),St=yt[0],wt=yt[1];return Object(u.jsx)(b.Provider,{value:{monsterNamesArray:c,monsterStatsArray:O,monsterOptions:g,groupName:y,groupExst:k,nameEntrd:H,nameVrify:V,handleGroupChange:function(e){return S(e.target.value)},handleLoginSubmit:function(){y&&(m.collection("table__groups").doc(y).get().then((function(e){return e.exists?I(!0):null})),T(!0))},handleGroupVerify:function(e){var t=e.target.value,a=k;"yes"===t&&!0===a?(P(!0),N(),Le()):"yes"===t&&!1===a?(P(!0),m.collection("table__groups").doc(y).set({created:new Date}),N()):"no"===t&&(T(null),I(!1),S(""))},showDice:L,showNpc:J,showPc:Y,sidebarHandler:function(e){var t;switch(e.target.value){case"dice":F(t=!L),q(!1),W(!1);break;case"monster":t=!J,F(!1),q(t),W(!1);break;case"players":t=!Y,F(!1),q(!1),W(t)}},npcSelected:$,numSelected:ne,addMonster:le,npcChangeHandler:function(e){return ee(e.value)},numChangeHandler:function(e){return se(e.target.value)},loadMonsterStats:function(){if($&&ne){var e=Object(i.a)(O).filter((function(e){return e.index===$})),t=e[0].dexterity,a=Je(t),n=e[0].name,s=e[0].armor_class,c=e[0].hit_points,r={init:a,name:n,armr:s,hlth:c,dmge:c,type:"monster",key:h.session_id()};Fe(r),ie(r)}},charName:oe,charInit:be,charArmr:_e,charHlth:ve,charStat:De,handleCharNameChange:function(e){return ue(e.target.value)},handleCharInitChange:function(e){return Oe(e.target.value)},handleCharArmrChange:function(e){return ge(e.target.value)},handleCharHlthChange:function(e){Me(e.target.value),Ce(e.target.value)},addNewChar:function(){if(oe&&be&&_e&&ve){var e={init:parseInt(be),name:oe,armr:parseInt(_e),hlth:parseInt(ve),dmge:parseInt(we),type:"player",key:h.session_id()};Fe(e),Ae(e)}},tableData:Be,healthValue:Re,handleValueChange:function(e){return Ge(e.target.value)},handleHealthButton:function(e){var t=Object(i.a)(Be),a=t.map((function(e){return e.key})).indexOf(e),n=t[a];n.dmge=parseInt(n.dmge)+parseInt(Re),t[a]=n,Ue(t)},handleDmgeButton:function(e){var t=Object(i.a)(Be),a=t.map((function(e){return e.key})).indexOf(e),n=t[a];n.dmge=parseInt(n.dmge)-parseInt(Re),t[a]=n,Ue(t)},handleDeathButton:function(e){var t=Object(i.a)(Be),a=t.map((function(e){return e.key})).indexOf(e);t.splice(a,1),Ue(t)},newInitValue:Xe,newArmrValue:Qe,newHlthValue:at,stats2Update:rt,handleCharUpdate:function(e){var t=Object(i.a)(Be),a=t.map((function(e){return e.key})).indexOf(e),n=t[a];Ye(parseInt(n.init)),$e(parseInt(n.armr)),nt(parseInt(n.hlth)),lt(t[a]),ot(e),vt(!1),bt(!ht)},handleNewInit:function(e){return Ye(e.target.value)},handleNewArmr:function(e){return $e(e.target.value)},handleNewHlth:function(e){return nt(e.target.value)},submitNewStats:function(){var e=Object(l.a)({},rt);e.init=Xe,e.armr=Qe,e.hlth=at,e.dmge=at;var t=Object(i.a)(Be),a=t.map((function(e){return e.key})).indexOf(jt);t[a]=e;var n=ze(t);Ue(n),bt(!1)},showModal:ht,monsterManual:St,isMonsterManual:Nt,monsterLoaded:pt,handleLoadStats:function(e){var t=O.find((function(t){return t.name===e}));if(t){var a=!ht;vt(!0),_t(a),wt(t),bt(a)}},closeModal:function(){bt(!1)}},children:t})},x=function(){return Object(u.jsx)("i",{className:"info"})},p=function(){return Object(u.jsx)("i",{className:"dnd"})},_=function(){return Object(u.jsx)("i",{className:"d20"})},g=function(){return Object(u.jsx)("i",{className:"edit"})},f=function(){return Object(u.jsx)("i",{className:"skull"})},N=function(){return Object(u.jsx)("i",{className:"damage"})},v=function(){return Object(u.jsx)("i",{className:"heart"})},M=function(){return Object(u.jsx)("div",{className:"banner",children:Object(u.jsxs)("h1",{className:"banner__header",children:["Dungeons ",Object(u.jsx)(p,{})," Dragons Game Screen"]})})},y=function(e){return Object(u.jsx)("button",{onClick:e.clicked,value:e.value,className:e.class?e.class:null,children:e.title})},S=function(e){return Object(u.jsx)("input",{type:e.type,placeholder:e.text,onChange:e.changed,value:e.value,id:e.id?e.id:null})},w=function(){var e=Object(n.useContext)(b),t=e.groupName,a=e.nameEntrd,s=e.nameVrify,c=e.handleGroupChange,r=e.handleLoginSubmit;return a||s?null:Object(u.jsxs)("div",{className:"login",children:[Object(u.jsx)(S,{type:"text",text:"Enter Group Name",changed:c,value:t}),Object(u.jsx)(y,{clicked:r,title:"submit"})]})},C=function(e){var t=Object(n.useContext)(b),a=t.groupName,s=t.groupExst,c=t.nameEntrd,r=t.nameVrify,l=t.handleGroupVerify;return c&&!r?Object(u.jsxs)("div",{className:"login",children:[Object(u.jsx)("p",{children:s?a+" exists, do you want to join?":a+" does not exist, do you wish to create this group?"}),Object(u.jsx)(y,{clicked:l,value:"yes",title:"yes"}),Object(u.jsx)(y,{clicked:l,value:"no",title:"no"})]}):null},k=a(33),I=a(34),D=a(38),A=a(37),H=a(35),T=a.n(H),B=function(e){Object(D.a)(a,e);var t=Object(A.a)(a);function a(e){var n;return Object(k.a)(this,a),(n=t.call(this,e)).changeNumDice=function(e){return n.setState({numDice:parseInt(e.target.value)})},n.changeNumSides=function(e){return n.setState({numSides:parseInt(e.target.value)})},n.changeModifier=function(e){return n.setState({modifier:parseInt(e.target.value)})},n.rollDice=function(){T.a.get("https://rolz.org/api/?"+n.state.numDice+"d"+n.state.numSides+".json").then((function(e){var t=n.state.modifier,a=e.data.details.split("");a.splice(0,2),a.splice(-2,2);var s=e.data.input,c=e.data.result,r=parseInt(c)+t,l=s+"+"+t,i=a.join("").replace(/ /g,"")+"+"+t,d="Total: "+r;n.setState({line1:l,line2:i,line3:d})}))},n.state={numDice:1,numSides:4,modifier:0,numDiceArray:[0,1,2,3,4,5,6,7,8,9,10,11,12],line1:"[ Dice ]",line2:"[ Results ]",line3:"[ Total ]"},n}return Object(I.a)(a,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{className:this.props.classname,children:[Object(u.jsx)("h2",{children:"Dice Roller"}),Object(u.jsx)("label",{htmlFor:"numDice",children:"Number of Dice:"}),Object(u.jsx)("select",{id:"numDice",onChange:function(t){return e.changeNumDice(t)},children:this.state.numDiceArray.slice(1).map((function(e){return Object(u.jsx)("option",{value:e,children:e},e)}))}),Object(u.jsx)("label",{htmlFor:"numSides",children:"Number of Sides:"}),Object(u.jsxs)("select",{id:"numSides",onChange:function(t){return e.changeNumSides(t)},children:[Object(u.jsx)("option",{value:"4",children:"4"}),Object(u.jsx)("option",{value:"6",children:"6"}),Object(u.jsx)("option",{value:"8",children:"8"}),Object(u.jsx)("option",{value:"10",children:"10"}),Object(u.jsx)("option",{value:"12",children:"12"}),Object(u.jsx)("option",{value:"20",children:"20"})]}),Object(u.jsx)("label",{htmlFor:"modifer",children:"Modifier"}),Object(u.jsx)("select",{id:"modifier",onChange:function(t){return e.changeModifier(t)},children:this.state.numDiceArray.map((function(e){return Object(u.jsx)("option",{value:e,children:e},e)}))}),Object(u.jsx)(y,{clicked:this.rollDice,title:"Roll Dice"}),Object(u.jsxs)("div",{className:"diceTray",children:[Object(u.jsx)("p",{children:this.state.line1}),Object(u.jsx)("p",{children:this.state.line2}),Object(u.jsx)("p",{children:this.state.line3})]})]})}}]),a}(n.Component),E=a(36),V=function(){var e=Object(n.useContext)(b),t=e.monsterOptions,a=e.showNpc,s=e.npcChangeHandler,c=e.numChangeHandler,r=e.loadMonsterStats;return Object(u.jsxs)("div",{className:a?"addMonster":"addMonster hidden",children:[Object(u.jsx)("h2",{children:"Add Monster"}),Object(u.jsx)(E.a,{className:"addMonster__input--mon",options:t,onChange:s,isSearchable:!0}),Object(u.jsx)("input",{className:"addMonster__input--num",type:"number",min:"1",max:"12",placeholder:"How Many?",onChange:c}),Object(u.jsx)(y,{clicked:r,title:"submit"})]})},P=function(e){var t=Object(n.useContext)(b),a=t.showPc,s=t.charName,c=t.charInit,r=t.charArmr,l=t.charHlth,i=t.handleCharNameChange,d=t.handleCharInitChange,j=t.handleCharArmrChange,o=t.handleCharHlthChange,m=t.addNewChar;return Object(u.jsxs)("div",{className:a?"addPc":"addPc hidden",children:[Object(u.jsx)("h2",{children:"Add Player"}),Object(u.jsx)(S,{type:"text",text:"Add Character Name...",changed:i,value:s}),Object(u.jsx)(S,{type:"number",text:"Add Initiative Roll...",changed:d,value:c}),Object(u.jsx)(S,{type:"number",text:"Add Armor Class...",changed:j,value:r}),Object(u.jsx)(S,{type:"number",text:"Add Hit Points...",changed:o,value:l}),Object(u.jsx)(y,{clicked:m,title:"submit"})]})},R=function(){var e=Object(n.useContext)(b).showDice;return Object(u.jsxs)("div",{className:"accordion",children:[Object(u.jsx)(B,{classname:e?"diceRoller":"diceRoller hidden"}),Object(u.jsx)(V,{}),Object(u.jsx)(P,{})]})},G=function(e){var t=Object(n.useContext)(b).sidebarHandler;return Object(u.jsxs)("div",{className:"sidebar",children:[Object(u.jsx)(y,{clicked:t,value:"dice",title:Object(u.jsx)(_,{})}),Object(u.jsx)(y,{clicked:t,value:"monster",title:"add NPC"}),Object(u.jsx)(y,{clicked:t,value:"players",title:"add PC"}),Object(u.jsx)(R,{})]})},L=function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"player"===e.type?Object(u.jsx)(y,{class:"initBtn",clicked:e.update,title:Object(u.jsx)(g,{})}):Object(u.jsx)(y,{class:"initBtn",clicked:e.loadStats,title:Object(u.jsx)(x,{})})}),Object(u.jsx)("td",{children:e.init}),Object(u.jsx)("td",{children:e.name}),Object(u.jsx)("td",{children:e.armr}),Object(u.jsxs)("td",{children:[e.dmge,"/",e.hlth]}),Object(u.jsx)("td",{children:Object(u.jsx)("input",{type:"number",onChange:e.changed})}),Object(u.jsx)("td",{children:Object(u.jsx)(y,{class:"healBtn",clicked:e.healed,title:Object(u.jsx)(v,{})})}),Object(u.jsx)("td",{children:Object(u.jsx)(y,{class:"dmgeBtn",clicked:e.attacked,title:Object(u.jsx)(N,{})})}),Object(u.jsx)("td",{children:Object(u.jsx)(y,{class:"deadBtn",clicked:e.killed,title:Object(u.jsx)(f,{})})})]})},F=function(){var e=Object(n.useContext)(b),t=e.tableData,a=e.handleCharUpdate,s=e.handleValueChange,c=e.handleHealthButton,r=e.handleDmgeButton,l=e.handleDeathButton,i=e.handleLoadStats;return Object(u.jsx)("div",{className:"combatTable__container",children:Object(u.jsxs)("table",{className:"combatTable",id:"combatTable",children:[Object(u.jsx)("thead",{className:"combatTable__header",children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"\xa0"}),Object(u.jsx)("th",{children:"Init."}),Object(u.jsx)("th",{children:"Name"}),Object(u.jsx)("th",{children:"A.C."}),Object(u.jsx)("th",{children:"H.P."}),Object(u.jsx)("th",{children:"(+/-)"}),Object(u.jsx)("th",{children:"Heal"}),Object(u.jsx)("th",{children:"Damage"}),Object(u.jsx)("th",{children:"Dead"})]})}),Object(u.jsx)("tbody",{id:"combatTable-Body",children:t?t.map((function(e){return Object(u.jsx)(L,{type:e.type,update:function(){return a(e.key)},init:e.init,name:e.name,armr:e.armr,dmge:e.dmge,hlth:e.hlth,changed:s,healed:function(){return c(e.key)},attacked:function(){return r(e.key)},killed:function(){return l(e.key)},loadStats:function(){return i(e.name)}},e.key)})):null})]})})},U=function(e){var t=Object(n.useContext)(b),a=t.nameEntrd,s=t.nameVrify;return a&&s?Object(u.jsxs)("div",{className:"mainBody",children:[Object(u.jsx)(G,{}),Object(u.jsx)(F,{})]}):null},z=function(e){return e.children},J=function(e){return e.show?Object(u.jsx)("div",{className:"modal__backdrop",onClick:e.clicked}):null},q=function(){var e=Object(n.useContext)(b),t=e.monsterManual,a=e.monsterLoaded,s=Object(l.a)({},t);return a&&Object(u.jsxs)("div",{className:"monsterManual",children:[Object(u.jsx)("h2",{className:"monsterManual__title",children:s.name}),Object(u.jsxs)("h4",{className:"monsterManual__subtitle",children:[s.size,"\xa0",s.type,s.subtype?" ("+s.subtype+")":null,",\xa0",s.alignment]}),Object(u.jsx)("hr",{className:"monsterManual__hr"}),Object(u.jsx)("div",{className:"monsterManual__row",children:Object(u.jsxs)("span",{className:"monsterManual__attr",children:["Armor Class:"," ",Object(u.jsx)("span",{className:"monsterManual__data",children:s.armor_class})]})}),Object(u.jsx)("div",{className:"monsterManual__row",children:Object(u.jsxs)("span",{className:"monsterManual__attr",children:["hit points:\xa0",Object(u.jsxs)("span",{className:"monsterManual__data",children:[s.hit_points," (",s.hit_dice,")"]})]})}),Object(u.jsx)("div",{className:"monsterManual__row",children:Object(u.jsxs)("span",{className:"monsterManual__attr",children:["Speed:\xa0",s.speed.walk&&Object(u.jsxs)("span",{className:"monsterManual__data",children:["walk ",s.speed.walk]}),"\xa0\xa0",s.speed.fly&&Object(u.jsxs)("span",{className:"monsterManual__data",children:["fly ",s.speed.fly]}),"\xa0\xa0",s.speed.swim&&Object(u.jsxs)("span",{className:"monsterManual__data",children:["swim ",s.speed.swim]})]})}),Object(u.jsx)("hr",{className:"monsterManual__hr"}),Object(u.jsxs)("div",{className:"monsterManual__row",children:[Object(u.jsxs)("span",{className:"monsterManual__attr",children:["STR: ",Object(u.jsx)("span",{className:"monsterManual__data",children:s.strength}),"\xa0"]}),Object(u.jsxs)("span",{className:"monsterManual__attr",children:["CON:"," ",Object(u.jsx)("span",{className:"monsterManual__data",children:s.constitution}),"\xa0"]}),Object(u.jsxs)("span",{className:"monsterManual__attr",children:["DEX: ",Object(u.jsx)("span",{className:"monsterManual__data",children:s.dexterity}),"\xa0"]}),Object(u.jsxs)("span",{className:"monsterManual__attr",children:["INT:"," ",Object(u.jsx)("span",{className:"monsterManual__data",children:s.intelligence}),"\xa0"]}),Object(u.jsxs)("span",{className:"monsterManual__attr",children:["WIS: ",Object(u.jsx)("span",{className:"monsterManual__data",children:s.wisdom}),"\xa0"]}),Object(u.jsxs)("span",{className:"monsterManual__attr",children:["CHA: ",Object(u.jsx)("span",{className:"monsterManual__data",children:s.charisma})]})]}),Object(u.jsx)("hr",{className:"monsterManual__hr"}),s.proficiencies.length>0&&Object(u.jsx)("div",{className:"monsterManual__row",children:Object(u.jsxs)("span",{className:"monsterManual__attr",children:["Savings Throws & Skills:\xa0",s.proficiencies.map((function(e,t){var a=e.proficiency.name,n=a.includes("Saving Throw:"),s=a.includes("Skill:");return Object(u.jsxs)("span",{className:"monsterManual__data",children:[t>0&&", ",n&&a.replace("Saving Throw: ",""),s&&a.replace("Skill: ",""),"+",e.value]},a)}))]})}),s.damage_vulnerabilities.length>0&&Object(u.jsx)("div",{className:"monsterManual__row",children:Object(u.jsxs)("span",{className:"monsterManual__attr",children:["damage vulnerabilities:",Object(u.jsxs)("span",{className:"monsterManual__data",children:[" ",s.damage_vulnerabilities.join(", ")]})]})}),s.damage_resistances.length>0&&Object(u.jsx)("div",{className:"monsterManual__row",children:Object(u.jsxs)("span",{className:"monsterManual__attr",children:["damage resistances:",Object(u.jsxs)("span",{className:"monsterManual__data",children:[" ",s.damage_resistances.join(", ")]})]})}),s.damage_immunities.length>0&&Object(u.jsx)("div",{className:"monsterManual__row",children:Object(u.jsxs)("span",{className:"monsterManual__attr",children:["damage immunities:",Object(u.jsxs)("span",{className:"monsterManual__data",children:[" ",s.damage_immunities.join(", ")]})]})}),s.condition_immunities.length>0&&Object(u.jsx)("div",{className:"monsterManual__row",children:Object(u.jsxs)("span",{className:"monsterManual__attr",children:["condition immunities:\xa0",Object(u.jsx)("span",{className:"monsterManual__data",children:s.condition_immunities.map((function(e,t){return t>0?", "+e.index:e.index}))})]})}),Object(u.jsx)("div",{className:"monsterManual__row",children:Object(u.jsxs)("span",{className:"monsterManual__attr",children:["Senses:\xa0",Object(u.jsxs)("span",{className:"monsterManual__data",children:["Passive Perception ",s.senses.passive_perception,","," "]}),s.senses.darkvision&&Object(u.jsxs)("span",{className:"monsterManual__data",children:["darkvision ",s.senses.darkvision,","," "]}),s.senses.blindsight&&Object(u.jsxs)("span",{className:"monsterManual__data",children:["blindsight ",s.senses.blindsight,","," "]}),s.senses.truesight&&Object(u.jsxs)("span",{className:"monsterManual__data",children:["truesight ",s.senses.truesight,","," "]}),s.senses.tremorsense&&Object(u.jsxs)("span",{className:"monsterManual__data",children:["tremorsense ",s.senses.tremorsense,","," "]})]})}),s.languages.length>0&&Object(u.jsx)("div",{className:"monsterManual__row",children:Object(u.jsxs)("span",{className:"monsterManual__attr",children:["languages:\xa0",Object(u.jsx)("span",{className:"monsterManual__data",children:s.languages})]})}),Object(u.jsx)("div",{className:"monsterManual__row",children:Object(u.jsxs)("span",{className:"monsterManual__attr",children:["Challenge Rating:\xa0",Object(u.jsxs)("span",{className:"monsterManual__data",children:[s.challenge_rating," (",s.xp,"XP)"]})]})}),Object(u.jsx)("hr",{className:"monsterManual__hr"}),s.special_abilities&&s.special_abilities.length>0&&Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"monsterManual__row",children:s.special_abilities.map((function(e){return Object(u.jsxs)("span",{className:"monsterManual__attr",children:[Object(u.jsxs)("span",{className:"monsterManual__data",children:[e.name,":"," "]}),Object(u.jsx)("span",{className:"monsterManual__desc",children:e.desc})]},e.name)}))}),Object(u.jsx)("hr",{className:"monsterManual__hr"})]}),Object(u.jsx)("div",{className:"monsterManual__row",children:Object(u.jsx)("span",{className:"monsterManual__attr",children:"Actions:"})}),Object(u.jsx)("div",{className:"monsterManual__row",children:s.actions.map((function(e){return Object(u.jsxs)("span",{className:"monsterManual__attr",children:[Object(u.jsxs)("span",{className:"monsterManual__data",children:[e.name,": "]}),Object(u.jsx)("span",{className:"monsterManual__desc",children:e.desc})]},e.name)}))}),s.legendary_actions&&Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{className:"monsterManual__hr"}),Object(u.jsxs)("div",{className:"monsterManual__row",children:[Object(u.jsx)("span",{className:"monsterManual__attr",children:"Legendary Actions"}),Object(u.jsx)("span",{className:"monsterManual__desc",children:"This creature can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The creature regains spent legendary actions at the start of its turn."})]}),Object(u.jsx)("div",{className:"monsterManual__row",children:s.legendary_actions.map((function(e){return Object(u.jsxs)("span",{className:"monsterManual__attr",children:[Object(u.jsxs)("span",{className:"monsterManual__data",children:[e.name,": "]}),Object(u.jsx)("span",{className:"monsterManual__desc",children:e.desc})]},e.name)}))})]})]})},K=function(e){return Object(u.jsx)("label",{htmlFor:e.for,children:e.children})},X=function(){var e=Object(n.useContext)(b),t=e.newInitValue,a=e.newArmrValue,s=e.newHlthValue,c=e.stats2Update,r=e.handleNewInit,l=e.handleNewArmr,i=e.handleNewHlth,d=e.submitNewStats;return Object(u.jsxs)("div",{className:"characterModal",children:[Object(u.jsx)(K,{for:"newInit",children:"New Initiative:"}),Object(u.jsx)(S,{type:"num",placeholder:t,value:t,changed:r,id:"newInit",min:-5,max:30}),Object(u.jsx)(K,{for:"newArmr",children:"New Armor Class:"}),Object(u.jsx)(S,{type:"num",placeholder:c.armr,value:a,changed:l,id:"newArmr",min:0,max:25}),Object(u.jsx)(K,{for:"newHlth",children:"New Hit Points:"}),Object(u.jsx)(S,{type:"num",placeholder:c.hlth,value:s,changed:i,id:"newHlth",min:0,max:500}),Object(u.jsxs)("button",{onClick:d,children:["Update ",c.name]})]})},Y=s.a.memo((function(e){var t=Object(n.useContext)(b),a=t.showModal,s=t.closeModal,c=t.isMonsterManual;return Object(u.jsxs)(z,{children:[Object(u.jsx)(J,{show:a,clicked:s}),Object(u.jsx)("div",{className:"modal",style:{transform:a?"translateY(0)":"translateY(-100vh)",opacity:a?"1":"0"},children:c?Object(u.jsx)(q,{}):Object(u.jsx)(X,{})})]})})),W=(a(81),function(){return Object(u.jsxs)(O,{children:[Object(u.jsx)(M,{}),Object(u.jsx)(w,{}),Object(u.jsx)(C,{}),Object(u.jsx)(U,{}),Object(u.jsx)(Y,{})]})});r.a.render(Object(u.jsx)(W,{}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.744937f2.chunk.js.map