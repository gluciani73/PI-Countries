(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{117:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(25),r=n.n(i),s=(n(83),n(6)),o=(n(84),n(39)),l=n.n(o),u=n(10),j=n(8),d=n(20),b=n.n(d),O="GET_ALL_COUNTRIES",h="GET_COUNTRY_BY_NAME",f="GET_COUNTRY_DETAIL",v="RESET_COUNTRIES",p="RESET_COUNTRY_DETAIL",m="ADD_ACTIVITIES",x="GET_ALL_ACTIVITIES",y="SET_PAGE",_="ORDER_BY_NAME",g="ORDER_BY_POPULATION",C="FILTER_CONTINENT",N="FILTER_ACTIVITY";function A(){return function(e){b.a.get("/countries").then((function(e){return e.data})).then((function(t){e({type:O,payload:t})})).catch((function(e){return console.log(e)}))}}function D(){return function(e){b.a.get("/activities").then((function(e){return e.data})).then((function(t){e({type:x,payload:t})})).catch((function(e){return console.log(e)}))}}function E(e){return{type:y,payload:e}}var S=n(0);function T(){var e=Object(j.b)();return Object(a.useEffect)((function(){e(A()),e(D())}),[]),Object(S.jsxs)("div",{className:l.a.landing,children:[Object(S.jsx)("div",{className:l.a.landingTitle,children:Object(S.jsx)("h1",{children:"Countries"})}),Object(S.jsx)("h2",{children:"Learn something else about our world"}),Object(S.jsx)("h3",{children:"Capitals, Activities, Population, Areas... "}),Object(S.jsx)(u.b,{to:"/home",children:Object(S.jsx)("button",{className:l.a.button,children:"Home"})})]})}var P=n(69),I=n.n(P),R=n(40),L=n.n(R);function w(e){var t=e.flag,n=e.name,a=e.continent,c=e.id;return Object(S.jsxs)("div",{className:L.a.card,children:[Object(S.jsx)("div",{className:"flag",children:Object(S.jsx)("img",{className:"imagenBandera",src:t,width:"120",height:"60",alt:"flag not fount"})}),Object(S.jsxs)("div",{className:L.a.countryTitle,children:[Object(S.jsx)(u.b,{to:"/country/".concat(c),children:Object(S.jsx)("h3",{className:L.a.countryTitle,children:n})}),Object(S.jsx)("div",{children:Object(S.jsxs)("h4",{children:[" ",a]})})]})]})}function V(e){var t=e.countries;return t.length?Object(S.jsx)("div",{className:I.a.cards,children:t&&t.map((function(e){return Object(S.jsx)(w,{id:e.id,flag:e.flag,name:e.name,continent:e.continent},e.id)}))}):Object(S.jsx)("div",{children:"No countries to show"})}var k=n(41),F=n.n(k);function U(e){for(var t=e.totalCards,n=e.cardsxPage,a=Object(j.b)(),c=Object(j.c)((function(e){return e.currentPage})),i=Math.ceil((t-9)/n)+1,r=[],s=0;s<i;s++)r.push(s+1);return Object(S.jsx)("div",{className:F.a.pagesDiv,children:r.map((function(e){return Object(S.jsxs)("button",{onClick:function(){a(E(e))},value:e,className:c===e?F.a.activo:F.a.inactivo,children:[" ",e]},e)}))})}var B=n(22),G=n.n(B),Y=n(27),H=n(48),W=n.n(H);function Z(){var e=Object(j.b)(),t=Object(a.useState)(""),n=Object(Y.a)(t,2),c=n[0],i=n[1],r=function(t){var n;t.preventDefault(),i(t.target.value),e((n=t.target.value,function(e){try{e({type:h,payload:n})}catch(t){console.log("No se pudo encontrar el pais")}})),e(E(1))};function s(){e((function(e){try{e({type:v})}catch(t){console.log(t)}}))}return Object(S.jsxs)("div",{className:W.a.searchDiv,children:[Object(S.jsx)("form",{onSubmit:function(e){e.preventDefault()},children:Object(S.jsx)("input",{className:W.a.SearchInput,type:"search",name:"country",placeholder:"write country to search",value:c,onChange:function(e){return r(e)}})}),Object(S.jsx)(u.b,{to:"/home",children:Object(S.jsx)("button",{onClick:function(){return s()},children:"Clear Filters"})})]})}function M(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.allActivities})),n=[];function a(t){var n;t.preventDefault(),e((n=t.target.value,{type:g,payload:n})),e(E(1))}function c(t){var n;t.preventDefault(),e((n=t.target.value,{type:_,payload:n})),e(E(1))}function i(t){var n;t.preventDefault(),e((n=t.target.value,{type:C,payload:n})),e(E(1))}function r(t){var n;e((n=t.target.value,{type:N,payload:n})),e(E(1))}return t.map((function(e){return!n.includes(e.name)&&n.push(e.name)})),Object(S.jsxs)("div",{className:G.a.headerDiv,children:[Object(S.jsxs)("div",{className:G.a.selectGap,children:[Object(S.jsxs)("select",{onChange:function(e){return a(e)},className:G.a.select,defaultValue:"default",children:[Object(S.jsx)("option",{value:"default",disabled:!0,children:"Sort by population"}),Object(S.jsx)("option",{value:"ASC",children:"from smallest to largest"}),Object(S.jsx)("option",{value:"DESC",children:"from largest to smallest"})]}),Object(S.jsxs)("select",{onChange:function(e){return c(e)},className:G.a.select,defaultValue:"default",children:[Object(S.jsx)("option",{value:"default",disabled:!0,children:"Sort by Name"}),Object(S.jsx)("option",{value:"A-Z",children:"Ascending alphabet"}),Object(S.jsx)("option",{value:"Z-A",children:"Descending aphabet"})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)("span",{children:"Select Continent: "}),Object(S.jsxs)("select",{onChange:function(e){return i(e)},className:G.a.select,children:[Object(S.jsx)("option",{value:"All",children:"All countries"}),Object(S.jsx)("option",{value:"Africa",children:"Africa"}),Object(S.jsx)("option",{value:"North America",children:"North America"}),Object(S.jsx)("option",{value:"South America",children:"South America"}),Object(S.jsx)("option",{value:"Antarctica",children:"Antarctica"}),Object(S.jsx)("option",{value:"Asia",children:"Asia"}),Object(S.jsx)("option",{value:"Europe",children:"Europe"}),Object(S.jsx)("option",{value:"Oceania",children:"Oceania"})]})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)("span",{children:"Select Activity: "}),Object(S.jsxs)("select",{onChange:function(e){return r(e)},className:G.a.select,children:[Object(S.jsx)("option",{value:"All",children:"All activities"}),n&&n.map((function(e,t){return Object(S.jsx)("option",{value:e,children:e},t)}))]})]})]}),Object(S.jsx)(Z,{}),Object(S.jsx)(u.b,{to:"/activity",children:Object(S.jsx)("button",{children:"Create tourist activity"})})]})}var K=n(42),X=n.n(K),q=n(33);function J(){Object(j.b)();var e=Object(q.useQuery)(["countries"],A),t=(e.data,e.error,e.isLoading),n=Object(j.c)((function(e){return e.selectedCountries})),a=Object(j.c)((function(e){return e.currentPage})),c=1===a?8:10*a-2,i=1===a?0:c-10+1,r=n.length,s=n.slice(i,c+1);return t?Object(S.jsxs)("div",{children:[Object(S.jsx)("span",{className:"spinner-border"})," Loading Countries..."]}):Object(S.jsxs)("div",{className:X.a.home,children:[Object(S.jsxs)("div",{children:[Object(S.jsx)("h3",{children:"Countries"}),Object(S.jsx)(M,{})]}),Object(S.jsxs)("div",{className:X.a.pages,children:[Object(S.jsx)("p",{}),Object(S.jsx)(U,{totalCards:r,currPage:a,cardsxPage:10})]}),Object(S.jsx)("div",{className:X.a.homeCards,children:Object(S.jsx)(V,{countries:s})})]})}var Q=n(23),z=n.n(Q);function $(){var e=Object(j.b)(),t=Object(s.f)().id;Object(a.useEffect)((function(){return e(function(e){return function(t){b.a.get("/countries/".concat(e)).then((function(e){return e.data})).then((function(e){t({type:f,payload:e})})).catch((function(e){return console.log(e)}))}}(t)),function(){e((function(e){try{e({type:p})}catch(t){console.log(t)}}))}}),[e,t]);var n=Object(j.c)((function(e){return e.countryDetail}));return Object(S.jsxs)("div",{className:z.a.country,children:[Object(S.jsxs)("div",{className:z.a.detail,children:[Object(S.jsx)("h2",{children:n.name}),Object(S.jsx)("img",{className:z.a.flag,src:n.flag,alt:"country flag not found"}),Object(S.jsxs)("div",{className:z.a.info,children:[Object(S.jsxs)("div",{children:["Country code: ",n.id]}),Object(S.jsxs)("div",{children:["Capital: ",n.capital]}),Object(S.jsxs)("div",{children:["Subregion: ",n.subregion]}),Object(S.jsxs)("div",{children:["Continent: ",n.continent]}),Object(S.jsxs)("div",{children:["Area: ",n.area," km2"]}),Object(S.jsxs)("div",{children:["Population: ",n.population," inhabitants"]}),Object(S.jsx)("hr",{}),Object(S.jsxs)("div",{className:z.a.activities,children:[Object(S.jsx)("strong",{children:"Turist Activities: "}),n.activities&&n.activities.length?n.activities.map((function(e,t){return Object(S.jsx)("div",{children:Object(S.jsxs)("p",{children:[Object(S.jsx)("strong",{children:e.name})," Difficulty: ",e.difficulty,", Duration: ",e.duration," hs., Season:  ",e.season]})},t)})):Object(S.jsx)("div",{children:" No activities to show"})]})]})]}),Object(S.jsx)(u.b,{to:"/home",children:Object(S.jsx)("button",{className:z.a.button,children:"Back"})})]})}var ee=n(21),te=n(34),ne=n(4),ae=n(19),ce=n.n(ae);function ie(){var e=Object(j.b)(),t=Object(s.e)(),n=Object(j.c)((function(e){return e.allCountries})),c=Object(a.useState)({name:"",difficulty:0,duration:0,season:"",countries:[]}),i=Object(Y.a)(c,2),r=i[0],o=i[1],l=Object(a.useState)({}),d=Object(Y.a)(l,2),O=d[0],h=d[1],f=Object(a.useState)(!1),v=Object(Y.a)(f,2),p=v[0],x=v[1];Object(a.useEffect)((function(){return p&&function(){var e={};r.name?/^(?!.*[ ]{2})[a-zA-Z0-9._\s-#!~@%^()]+$/g.test(r.name)||(e.name="Name is invalid: It must have only letters and/or numbers"):e.name="Name is required";r.difficulty?(parseInt(r.difficulty)>5||parseInt(r.difficulty)<1)&&(e.name="Difficulty is invalid: it should be a number from 1 to 5 "):e.difficulty="Please select Difficulty";r.duration?(parseInt(r.duration)<0||parseInt(r.duration)>24)&&(e.duration="Duration is invalid: it should be a number from 1 to 24 "):e.duration="Please select Duration in hours";r.season?["Verano","Oto\xf1o","Invierno","Primavera"].includes(r.season)||(e.season='Season is invalid: it should be "Verano", "Oto\xf1o", "Invierno" or "Primavera" '):e.season="Please select Season";r.countries.length||(e.countries="Please select at least one country");return h(e),e}()}),[r]);var y=function(e){e.target.checked&&o(Object(ne.a)(Object(ne.a)({},r),{},Object(te.a)({},e.target.name,e.target.value))),o(Object(ne.a)(Object(ne.a)({},r),{},Object(te.a)({},e.target.name,e.target.value))),x(!0)},_=function(n){var a;n.preventDefault(),e((a=r,function(e){return b.a.post("/activities",a).then((function(e){return e.data})).then((function(t){return e({type:m,payload:t}),alert("Se creo la actividad. "),!0})).catch((function(e){return console.log(e),alert("No se puede crear la actividad. Error: "+e.response.data),!1}))})).then((function(){return e(D())})).then((function(){return e(A())})).then((function(){return t.push("/home")})),o({name:"",difficulty:0,duration:0,season:"",countries:[]}),x(!1)};return Object(a.useEffect)((function(){e(A())}),[e]),Object(S.jsxs)("div",{className:ce.a.activityDiv,children:[Object(S.jsx)("h2",{children:"Create Activity"}),Object(S.jsxs)("form",{onSubmit:function(e){return _(e)},children:[Object(S.jsxs)("div",{className:ce.a.formDiv,children:[Object(S.jsx)("label",{children:"Name: "}),Object(S.jsx)("input",{type:"text",value:r.name,name:"name",required:!0,onChange:y,placeholder:"Activity name"}),O.name&&Object(S.jsxs)("span",{children:[" - ",O.name]})]}),Object(S.jsxs)("div",{className:ce.a.formDiv,children:[Object(S.jsx)("label",{children:"Difficulty: "}),Object(S.jsxs)("label",{children:[Object(S.jsx)("input",{type:"radio",value:"1",name:"difficulty",onChange:y})," 1"]}),Object(S.jsxs)("label",{children:[Object(S.jsx)("input",{type:"radio",value:"2",name:"difficulty",onChange:y})," 2"]}),Object(S.jsxs)("label",{children:[Object(S.jsx)("input",{type:"radio",value:"3",name:"difficulty",onChange:y})," 3"]}),Object(S.jsxs)("label",{children:[Object(S.jsx)("input",{type:"radio",value:"4",name:"difficulty",onChange:y})," 4"]}),Object(S.jsxs)("label",{children:[Object(S.jsx)("input",{type:"radio",value:"5",name:"difficulty",onChange:y})," 5"]}),O.difficulty&&Object(S.jsxs)("span",{children:[" - ",O.difficulty]})]}),Object(S.jsxs)("div",{className:ce.a.formDiv,children:[Object(S.jsx)("label",{children:"Duration: "}),Object(S.jsx)("input",{type:"number",min:"1",max:"24",value:r.duration,name:"duration",onChange:y,placeholder:"Duration"})," in hours.",O.duration&&Object(S.jsxs)("span",{children:[" - ",O.duration]})]}),Object(S.jsxs)("div",{className:ce.a.formDiv,children:[Object(S.jsx)("label",{children:"Season: "}),Object(S.jsxs)("label",{children:[Object(S.jsx)("input",{type:"radio",value:"Verano",name:"season",onChange:y}),"Verano"]}),Object(S.jsxs)("label",{children:[Object(S.jsx)("input",{type:"radio",value:"Oto\xf1o",name:"season",onChange:y}),"Oto\xf1o"]}),Object(S.jsxs)("label",{children:[Object(S.jsx)("input",{type:"radio",value:"Invierno",name:"season",onChange:y}),"Invierno"]}),Object(S.jsxs)("label",{children:[Object(S.jsx)("input",{type:"radio",value:"Primavera",name:"season",onChange:y}),"Primavera"]}),O.season&&Object(S.jsxs)("span",{children:[" - ",O.season]})]}),Object(S.jsxs)("div",{className:ce.a.formDiv,children:[Object(S.jsx)("label",{children:"Select activity countries: "}),Object(S.jsxs)("select",{name:"countries",onChange:function(e){return function(e){o(Object(ne.a)(Object(ne.a)({},r),{},{countries:[].concat(Object(ee.a)(r.countries),[e.target.value])})),h({})}(e)},defaultValue:"default",children:[Object(S.jsx)("option",{value:"default",disabled:!0,children:"Select countries"}),n.map((function(e,t){return Object(S.jsx)("option",{value:e.name,children:e.name},t)}))]}),r.countries.map((function(e,t){return Object(S.jsx)("div",{children:Object(S.jsxs)("p",{children:[e," ",Object(S.jsx)("button",{onClick:function(t){return function(e,t){e.preventDefault(),o(Object(ne.a)(Object(ne.a)({},r),{},{countries:r.countries.filter((function(e){return e!==t}))}))}(t,e)},children:"Remove"})]})},t)}))]}),Object(S.jsx)("input",{type:"submit",disabled:!p||!!(O.name||O.duration||O.difficulty||O.season||O.countries)})]}),Object(S.jsx)(u.b,{to:"/home",children:Object(S.jsx)("button",{className:ce.a.button,children:"Back"})})]})}var re=function(){return Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)(s.a,{exact:!0,path:"/",render:function(){return Object(S.jsx)(T,{})}}),Object(S.jsx)(s.a,{exact:!0,path:"/home",render:function(){return Object(S.jsx)(J,{})}}),Object(S.jsx)(s.a,{exact:!0,path:"/country/:id",render:function(){return Object(S.jsx)($,{})}}),Object(S.jsx)(s.a,{exact:!0,path:"/activity",render:function(){return Object(S.jsx)(ie,{})}})]})},se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,120)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))},oe=n(43),le={allCountries:[],selectedCountries:[],countryDetail:{},allActivities:[],continent:"All",activity:"All",currentPage:1},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0,n=e.allCountries;switch(t.type){case O:return Object(ne.a)(Object(ne.a)({},e),{},{allCountries:t.payload.sort((function(e,t){return e.name.localeCompare(t.name)})),selectedCountries:t.payload.sort((function(e,t){return e.name.localeCompare(t.name)}))});case h:var a=n.filter((function(e){return e.name.toLowerCase().includes(t.payload.toLowerCase())}));return Object(ne.a)(Object(ne.a)({},e),{},{selectedCountries:a});case v:return Object(ne.a)(Object(ne.a)({},e),{},{selectedCountries:e.allCountries.sort((function(e,t){return e.name.localeCompare(t.name)}))});case f:return Object(ne.a)(Object(ne.a)({},e),{},{countryDetail:t.payload});case p:return Object(ne.a)(Object(ne.a)({},e),{},{countryDetail:le.countryDetail});case x:return Object(ne.a)(Object(ne.a)({},e),{},{allActivities:t.payload.sort((function(e,t){return e.name.localeCompare(t.name)}))});case m:return Object(ne.a)(Object(ne.a)({},e),{},{allActivities:e.allActivities.concat(t.payload)});case _:var c=[];return"A-Z"===t.payload&&(c=Object(ee.a)(e.selectedCountries).sort((function(e,t){return e.name.localeCompare(t.name)}))),"Z-A"===t.payload&&(c=Object(ee.a)(e.selectedCountries).sort((function(e,t){return t.name.localeCompare(e.name)}))),Object(ne.a)(Object(ne.a)({},e),{},{selectedCountries:c});case g:var i=[];return"ASC"===t.payload&&(i=Object(ee.a)(e.selectedCountries).sort((function(e,t){return e.population-t.population}))),"DESC"===t.payload&&(i=Object(ee.a)(e.selectedCountries).sort((function(e,t){return t.population-e.population}))),Object(ne.a)(Object(ne.a)({},e),{},{selectedCountries:i});case C:var r="All"===e.activity?n:n.filter((function(t){return t.activities.map((function(e){return e.name})).includes(e.activity)})),s="All"===t.payload&&n.length?r:r.filter((function(e){return e.continent===t.payload}));return Object(ne.a)(Object(ne.a)({},e),{},{selectedCountries:s,continent:t.payload});case N:var o="All"===e.continent?n:n.filter((function(t){return t.continent===e.continent})),l="All"===t.payload&&o.length?o:o.filter((function(e){return e.activities.map((function(e){return e.name})).includes(t.payload)}));return Object(ne.a)(Object(ne.a)({},e),{},{selectedCountries:l,activity:t.payload});case y:return Object(ne.a)(Object(ne.a)({},e),{},{currentPage:t.payload});default:return e}},je=n(70),de="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||oe.b,be=Object(oe.c)(ue,de(Object(oe.a)(je.a)));b.a.defaults.baseURL=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API||"http://localhost:3001";var Oe=new q.QueryClient;r.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(u.a,{children:Object(S.jsx)(j.a,{store:be,children:Object(S.jsx)(q.QueryClientProvider,{client:Oe,children:Object(S.jsx)(re,{})})})})}),document.getElementById("root")),se()},19:function(e,t,n){e.exports={activityDiv:"Activity_activityDiv__nV63O",formDiv:"Activity_formDiv__27wBm"}},22:function(e,t,n){e.exports={headerDiv:"Header_headerDiv__lGRbW"}},23:function(e,t,n){e.exports={country:"Country_country__3w10U",info:"Country_info__3Y_ks",detail:"Country_detail__k9OsW",flag:"Country_flag__22qm_",activities:"Country_activities__N3vVn"}},39:function(e,t,n){e.exports={landing:"Landing_landing__2-IKV",button:"Landing_button__3chrG"}},40:function(e,t,n){e.exports={card:"Card_card__3e5vv",countryTitle:"Card_countryTitle__1mP_W",closeIcon:"Card_closeIcon__sIFPm","card-body":"Card_card-body__7Zr2r"}},41:function(e,t,n){e.exports={pagesDiv:"Pages_pagesDiv__12_fR",activo:"Pages_activo__ow7JV",inactivo:"Pages_inactivo__1tOWg"}},42:function(e,t,n){e.exports={home:"Home_home__2t2-X",homeCards:"Home_homeCards__2OhOX"}},48:function(e,t,n){e.exports={searchDiv:"Search_searchDiv__3R_w9"}},69:function(e,t,n){e.exports={cards:"Cards_cards__FPz2E"}},83:function(e,t,n){},84:function(e,t,n){}},[[117,1,2]]]);
//# sourceMappingURL=main.7aa78855.chunk.js.map