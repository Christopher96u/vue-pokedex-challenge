(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e582c7e"],{"050c":function(t,e,n){t.exports=n.p+"img/landscape-background.7651047f.png"},"057f":function(t,e,n){var o=n("c6b6"),r=n("fc6a"),a=n("241c").f,i=n("4dae"),s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return a(t)}catch(e){return i(s)}};t.exports.f=function(t){return s&&"Window"==o(t)?c(t):a(r(t))}},"428f":function(t,e,n){var o=n("da84");t.exports=o},"4cab":function(t,e,n){},"4dae":function(t,e,n){var o=n("da84"),r=n("23cb"),a=n("07fa"),i=n("8418"),s=o.Array,c=Math.max;t.exports=function(t,e,n){for(var o=a(t),u=r(e,o),l=r(void 0===n?o:n,o),f=s(c(l-u,0)),m=0;u<l;u++,m++)i(f,m,t[u]);return f.length=m,f}},5436:function(t,e,n){"use strict";n("bc73")},"746f":function(t,e,n){var o=n("428f"),r=n("1a2d"),a=n("e538"),i=n("9bf2").f;t.exports=function(t){var e=o.Symbol||(o.Symbol={});r(e,t)||i(e,t,{value:a.f(t)})}},"8cc7":function(t,e,n){"use strict";n("c87e")},a15b:function(t,e,n){"use strict";var o=n("23e7"),r=n("e330"),a=n("44ad"),i=n("fc6a"),s=n("a640"),c=r([].join),u=a!=Object,l=s("join",",");o({target:"Array",proto:!0,forced:u||!l},{join:function(t){return c(i(this),void 0===t?",":t)}})},a4d3:function(t,e,n){"use strict";var o=n("23e7"),r=n("da84"),a=n("d066"),i=n("2ba4"),s=n("c65b"),c=n("e330"),u=n("c430"),l=n("83ab"),f=n("4930"),m=n("d039"),h=n("1a2d"),p=n("e8b5"),d=n("1626"),v=n("861d"),b=n("3a9b"),k=n("d9b5"),g=n("825a"),y=n("7b0b"),w=n("fc6a"),P=n("a04b"),O=n("577e"),S=n("5c6c"),j=n("7c73"),A=n("df75"),F=n("241c"),B=n("057f"),C=n("7418"),_=n("06cf"),x=n("9bf2"),D=n("d1e7"),I=n("f36a"),M=n("6eeb"),$=n("5692"),N=n("f772"),E=n("d012"),R=n("90e3"),W=n("b622"),T=n("e538"),J=n("746f"),L=n("d44e"),U=n("69f3"),q=n("b727").forEach,H=N("hidden"),G="Symbol",Q="prototype",Y=W("toPrimitive"),z=U.set,K=U.getterFor(G),V=Object[Q],X=r.Symbol,Z=X&&X[Q],tt=r.TypeError,et=r.QObject,nt=a("JSON","stringify"),ot=_.f,rt=x.f,at=B.f,it=D.f,st=c([].push),ct=$("symbols"),ut=$("op-symbols"),lt=$("string-to-symbol-registry"),ft=$("symbol-to-string-registry"),mt=$("wks"),ht=!et||!et[Q]||!et[Q].findChild,pt=l&&m((function(){return 7!=j(rt({},"a",{get:function(){return rt(this,"a",{value:7}).a}})).a}))?function(t,e,n){var o=ot(V,e);o&&delete V[e],rt(t,e,n),o&&t!==V&&rt(V,e,o)}:rt,dt=function(t,e){var n=ct[t]=j(Z);return z(n,{type:G,tag:t,description:e}),l||(n.description=e),n},vt=function(t,e,n){t===V&&vt(ut,e,n),g(t);var o=P(e);return g(n),h(ct,o)?(n.enumerable?(h(t,H)&&t[H][o]&&(t[H][o]=!1),n=j(n,{enumerable:S(0,!1)})):(h(t,H)||rt(t,H,S(1,{})),t[H][o]=!0),pt(t,o,n)):rt(t,o,n)},bt=function(t,e){g(t);var n=w(e),o=A(n).concat(Pt(n));return q(o,(function(e){l&&!s(gt,n,e)||vt(t,e,n[e])})),t},kt=function(t,e){return void 0===e?j(t):bt(j(t),e)},gt=function(t){var e=P(t),n=s(it,this,e);return!(this===V&&h(ct,e)&&!h(ut,e))&&(!(n||!h(this,e)||!h(ct,e)||h(this,H)&&this[H][e])||n)},yt=function(t,e){var n=w(t),o=P(e);if(n!==V||!h(ct,o)||h(ut,o)){var r=ot(n,o);return!r||!h(ct,o)||h(n,H)&&n[H][o]||(r.enumerable=!0),r}},wt=function(t){var e=at(w(t)),n=[];return q(e,(function(t){h(ct,t)||h(E,t)||st(n,t)})),n},Pt=function(t){var e=t===V,n=at(e?ut:w(t)),o=[];return q(n,(function(t){!h(ct,t)||e&&!h(V,t)||st(o,ct[t])})),o};if(f||(X=function(){if(b(Z,this))throw tt("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?O(arguments[0]):void 0,e=R(t),n=function(t){this===V&&s(n,ut,t),h(this,H)&&h(this[H],e)&&(this[H][e]=!1),pt(this,e,S(1,t))};return l&&ht&&pt(V,e,{configurable:!0,set:n}),dt(e,t)},Z=X[Q],M(Z,"toString",(function(){return K(this).tag})),M(X,"withoutSetter",(function(t){return dt(R(t),t)})),D.f=gt,x.f=vt,_.f=yt,F.f=B.f=wt,C.f=Pt,T.f=function(t){return dt(W(t),t)},l&&(rt(Z,"description",{configurable:!0,get:function(){return K(this).description}}),u||M(V,"propertyIsEnumerable",gt,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:X}),q(A(mt),(function(t){J(t)})),o({target:G,stat:!0,forced:!f},{for:function(t){var e=O(t);if(h(lt,e))return lt[e];var n=X(e);return lt[e]=n,ft[n]=e,n},keyFor:function(t){if(!k(t))throw tt(t+" is not a symbol");if(h(ft,t))return ft[t]},useSetter:function(){ht=!0},useSimple:function(){ht=!1}}),o({target:"Object",stat:!0,forced:!f,sham:!l},{create:kt,defineProperty:vt,defineProperties:bt,getOwnPropertyDescriptor:yt}),o({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:wt,getOwnPropertySymbols:Pt}),o({target:"Object",stat:!0,forced:m((function(){C.f(1)}))},{getOwnPropertySymbols:function(t){return C.f(y(t))}}),nt){var Ot=!f||m((function(){var t=X();return"[null]"!=nt([t])||"{}"!=nt({a:t})||"{}"!=nt(Object(t))}));o({target:"JSON",stat:!0,forced:Ot},{stringify:function(t,e,n){var o=I(arguments),r=e;if((v(e)||void 0!==t)&&!k(t))return p(e)||(e=function(t,e){if(d(r)&&(e=s(r,this,t,e)),!k(e))return e}),o[1]=e,i(nt,null,o)}})}if(!Z[Y]){var St=Z.valueOf;M(Z,Y,(function(t){return s(St,this)}))}L(X,G),E[H]=!0},b64b:function(t,e,n){var o=n("23e7"),r=n("7b0b"),a=n("df75"),i=n("d039"),s=i((function(){a(1)}));o({target:"Object",stat:!0,forced:s},{keys:function(t){return a(r(t))}})},bc73:function(t,e,n){},c2b9:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pokemons-table"},[t.isLoading?[n("loader")]:t._e(),t.isLoading?t._e():n("div",[n("main-input",{on:{"search-pokemon":t.searchPokemon}}),t.pokemonsByStatus.length?[n("div",{staticClass:"container container-table"},t._l(t.pokemonsByStatus,(function(e,o){return n("pokemon-item",{key:o,attrs:{isFavorite:e.favorite,pokemon:e},on:{"open-details-pokemon":t.showPokemon,"change-status-favorite-pokemon":t.changeStatusPokemon}})})),1),n("div",{ref:"observer"}),n("action-buttons")]:t._e(),0===t.filteredPokemons.length?[n("main-conten-welcome",{attrs:{type:t.type,title:t.title,subtitle:t.subtitle,textButton:t.textButton,active:!0},on:{"emit-click":t.goBack}})]:t._e(),t.showModal?n("pokemon-modal",{attrs:{isFavorite:t.isFavorite},on:{"close-modal":t.closeDetailModal,"change-status-favorite-pokemon":t.changeStatusPokemon}}):t._e()],2)],2)},r=[],a=n("1da1");n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("159b"),n("dbb4");function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n("fb6a"),n("b0c0"),n("96cf");var u=n("2f62"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container input-container"},[n("input",{attrs:{type:"text",placeholder:"Search"},on:{input:t.searchPokemon}}),t._m(0)])},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("i",{staticClass:"icon search-icon"})])}],m={name:"MainInput",methods:{searchPokemon:function(t){return this.$emit("search-pokemon",t.target.value)}}},h=m,p=(n("e2d9"),n("2877")),d=Object(p["a"])(h,l,f,!1,null,"c7656632",null),v=d.exports,b=n("1ffd"),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pokemon-row"},[n("p",{on:{click:function(e){return t.openDetailsPokemon(t.pokemon)}}},[t._v(t._s(t.pokemon.name))]),n("span",{staticClass:"background-icon"},[n("i",{staticClass:"icon favorite",class:"star-"+(t.isFavorite?"active":"disabled")+"-icon",on:{click:function(e){return t.changeStatusFavoritePokemon(t.pokemon.name)}}})])])},g=[],y={name:"PokemonItem",props:{pokemon:{type:Object,required:!0},isFavorite:{type:Boolean,required:!0}},methods:{openDetailsPokemon:function(t){return this.$emit("open-details-pokemon",t)},changeStatusFavoritePokemon:function(t){return this.$emit("change-status-favorite-pokemon",t)},changeStatusPokemon:function(t){this.changeStatusFavoritePokemon(this.nameWithCamelCase(t))}}},w=y,P=(n("fe5e"),Object(p["a"])(w,k,g,!1,null,"1e501174",null)),O=P.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid container-footer"},[n("div",{staticClass:"container footer"},[n("main-button",{attrs:{active:t.buttonAllIsActive,iconName:"all",block:!0},on:{"emit-click":t.showAllPokemons}},[t._v(" All ")]),n("main-button",{attrs:{active:t.buttonFavoriteIsActive,iconName:"star",block:!0},on:{"emit-click":t.showFavoritePokemons}},[t._v(" Favorites ")])],1)])},j=[],A=n("d518"),F={components:{mainButton:A["a"]},name:"ActionButtons",computed:c({},Object(u["c"])("pokemon",["buttonFavoriteIsActive","buttonAllIsActive","getShowAllPokemonsByDefault"])),methods:c(c({},Object(u["b"])("pokemon",["getAllPokemons","getAllFavoritePokemons","showAllPokemonsByDefault","changeStatusAllIsActiveButton","changeStatusFavoriteButton"])),{},{showAllPokemons:function(){this.showAllPokemonsByDefault(!0),this.buttonAllIsActive||(this.changeStatusAllIsActiveButton(),this.changeStatusFavoriteButton())},showFavoritePokemons:function(){this.showAllPokemonsByDefault(!1),this.buttonFavoriteIsActive||(this.changeStatusFavoriteButton(),this.changeStatusAllIsActiveButton())}})},B=F,C=(n("f41b"),Object(p["a"])(B,S,j,!1,null,"64254ac7",null)),_=C.exports,x=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal container-fluid"},[o("div",{staticClass:"pokemon-card"},[o("span",{staticClass:"close",on:{click:t.closeModal}},[o("i",{staticClass:"icon close-icon"})]),o("div",{staticClass:"pokemon-card-img",style:{"background-image":"url("+n("050c")+")"}},[o("img",{attrs:{src:t.pokemon.sprites.other["official-artwork"].front_default,alt:t.pokemon.name}})]),o("div",{staticClass:"pokemon-card-content"},[o("div",{staticClass:"pokemon-card-text"},t._l(t.typesOfPokemonFormatted(),(function(e,n){return o("p",{key:n},[o("strong",[t._v(t._s(e.key)+":")]),o("span",[t._v(" "+t._s(e.value)+" ")])])})),0),o("div",{staticClass:"pokemon-card-button"},[o("main-button",{attrs:{active:!0},on:{"emit-click":function(e){t.copyClipboard(t.typesOfPokemonFormatted())}}},[t._v(" Share to my friends ")]),o("span",{staticClass:"background-icon"},[o("i",{staticClass:"icon",class:"star-"+(t.isFavorite?"active":"disabled")+"-icon",on:{click:function(e){return t.changeStatus(t.pokemon.name)}}})])],1)])])])},D=[],I=(n("d81d"),n("a15b"),function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,navigator.clipboard.writeText(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),M={components:{mainButton:A["a"]},name:"PokemonModal",props:{isFavorite:{type:Boolean,required:!0}},computed:c({},Object(u["c"])("pokemon",["pokemon"])),methods:c(c({},Object(u["b"])("pokemon",["changeStatusFavoritePokemon"])),{},{closeModal:function(){return this.$emit("close-modal",!0)},nameWithCamelCase:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},typesSkillsFormatted:function(t){var e=t.map((function(t){return t.type.name.charAt(0).toUpperCase()+t.type.name.slice(1)}));return e=e.join(", "),e},typesOfPokemonFormatted:function(){if(this.pokemon.types){var t=this.nameWithCamelCase(this.pokemon.name),e=this.typesSkillsFormatted(this.pokemon.types);return[{key:"Name",value:t},{key:"Weight",value:this.pokemon.weight},{key:"Height",value:this.pokemon.height},{key:"Types",value:e}]}return[]},changeStatus:function(t){this.$emit("change-status-favorite-pokemon",t)},copyClipboard:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,I(["Name: ".concat(t.pokemon.name),"Weight: ".concat(t.pokemon.weight),"Height: ".concat(t.pokemon.height),"Types: ".concat(t.typesSkillsFormatted(t.pokemon.types))].join(", "));case 2:case"end":return e.stop()}}),e)})))()}})},$=M,N=(n("5436"),Object(p["a"])($,x,D,!1,null,"d35e5602",null)),E=N.exports,R=n("ee09"),W={name:"PokemonsTable",components:{PokemonItem:O,MainInput:v,ActionButtons:_,PokemonModal:E,MainContenWelcome:b["a"],Loader:R["a"]},computed:c(c({},Object(u["c"])("pokemon",["pokemons","pokemon","getShowAllPokemonsByDefault","favoritePokemons","filteredPokemons"])),{},{pokemonsByStatus:function(){return this.showFilteredPokemons?this.filteredPokemons:this.getShowAllPokemonsByDefault?this.pokemons:this.favoritePokemons}}),data:function(){return{showFilteredPokemons:!1,showModal:!1,isFavorite:!1,isLoading:!1,page:0,observer:null,type:"NotFound",title:"Uh-oh!",subtitle:"You look lost on your jorney!",textButton:"Go back home"}},mounted:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchAllPokemons(t.offset());case 2:t.observer=new IntersectionObserver(t.handleObserver),t.$refs.observer&&t.observer.observe(t.$refs.observer);case 4:case"end":return e.stop()}}),e)})))()},destroyed:function(){this.observer.disconnect()},methods:c(c({},Object(u["b"])("pokemon",["fetchAllPokemons","fetchPokemonByName","changeStatusFavoritePokemon","cleanDetailModal","filteredPokemonByName","clearFilteredPokemons","showAllPokemonsByDefault","changeStatusAllIsActiveButton","changeStatusFavoriteButton"])),{},{offset:function(){return 10*this.page},handleObserver:function(t){var e=t[0];e.isIntersecting&&(this.page++,this.fetchAllPokemons(this.offset()))},searchPokemon:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.observer.disconnect(),!(t.length>3)){n.next=5;break}return e.showFilteredPokemons=!0,n.next=5,e.filteredPokemonByName(t);case 5:""===t&&(e.showFilteredPokemons=!1,e.observer.observe(e.$refs.observer),e.clearFilteredPokemons());case 6:case"end":return n.stop()}}),n)})))()},nameWithCamelCase:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},changeStatusPokemon:function(t){this.changeStatusFavoritePokemon(this.nameWithCamelCase(t)),this.isFavorite=!this.isFavorite},showPokemon:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.fetchPokemonByName(t.name);case 2:e.isFavorite=t.favorite,e.showModal=!0;case 4:case"end":return n.stop()}}),n)})))()},closeDetailModal:function(){this.showModal=!1,this.cleanDetailModal()},goBack:function(){this.showAllPokemonsByDefault(!0),this.buttonAllIsActive||this.changeStatusAllIsActiveButton(),this.buttonFavoriteIsActive||this.changeStatusFavoriteButton(),this.$router.push("/home")}})},T=W,J=(n("8cc7"),Object(p["a"])(T,o,r,!1,null,"df8a2aa8",null));e["default"]=J.exports},c87e:function(t,e,n){},cdfb:function(t,e,n){},d7aa:function(t,e,n){},dbb4:function(t,e,n){var o=n("23e7"),r=n("83ab"),a=n("56ef"),i=n("fc6a"),s=n("06cf"),c=n("8418");o({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var e,n,o=i(t),r=s.f,u=a(o),l={},f=0;while(u.length>f)n=r(o,e=u[f++]),void 0!==n&&c(l,e,n);return l}})},e2d9:function(t,e,n){"use strict";n("d7aa")},e439:function(t,e,n){var o=n("23e7"),r=n("d039"),a=n("fc6a"),i=n("06cf").f,s=n("83ab"),c=r((function(){i(1)})),u=!s||c;o({target:"Object",stat:!0,forced:u,sham:!s},{getOwnPropertyDescriptor:function(t,e){return i(a(t),e)}})},e538:function(t,e,n){var o=n("b622");e.f=o},f41b:function(t,e,n){"use strict";n("cdfb")},fe5e:function(t,e,n){"use strict";n("4cab")}}]);
//# sourceMappingURL=chunk-2e582c7e.2f1f8e8f.js.map