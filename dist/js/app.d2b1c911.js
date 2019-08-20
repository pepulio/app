(function(e){function t(t){for(var a,s,i=t[0],l=t[1],c=t[2],p=0,d=[];p<i.length;p++)s=i[p],n[s]&&d.push(n[s][0]),n[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,i=1;i<r.length;i++){var l=r[i];0!==n[l]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},n={app:0},o=[];function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("Navbar"),r("v-content",[r("Sidebar"),r("router-view")],1)],1)},o=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",[r("v-app-bar-nav-icon",{on:{click:e.toggleDrawer}})],1)},i=[],l={methods:{toggleDrawer(){this.$store.commit("toggleDrawer")}}},c=l,u=r("2877"),p=r("6544"),d=r.n(p),f=r("5bc1"),h=Object(u["a"])(c,s,i,!1,null,null,null),b=h.exports;d()(h,{VAppBarNavIcon:f["a"]});var v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-navigation-drawer",{staticClass:"grey lighten-3",attrs:{app:"","mobile-break-point":"2000"},model:{value:e.updateDrawer,callback:function(t){e.updateDrawer=t},expression:"updateDrawer"}},[r("v-layout",[r("v-list",[r("v-list-item",[r("v-text-field",{attrs:{flat:"",label:"Solo",placeholder:"Search locations",solo:""},model:{value:e.updateSearchQuery,callback:function(t){e.updateSearchQuery=t},expression:"updateSearchQuery"}})],1),r("v-list-item-group",{attrs:{color:"primary"},model:{value:e.selectedLocation,callback:function(t){e.selectedLocation=t},expression:"selectedLocation"}},e._l(e.filteredLocations,function(t){return r("v-list-item",{key:t.label},[r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(t.label))]),r("v-list-item-subtitle",[e._v(e._s(t.address))])],1)],1)}),1)],1)],1)],1)},m=[],w=r("2f62"),g={data(){return{selectedLocation:-1}},computed:{...Object(w["b"])(["searchQuery","drawer","locations","filteredLocations"]),updateDrawer:{get(){return this.drawer},set(e){e?this.showDrawer():this.hideDrawer()}},updateSearchQuery:{get(){return this.searchQuery},set(e){this.setSearchQuery(e)}}},methods:{...Object(w["c"])(["showDrawer","hideDrawer","setSearchQuery"])}},y=g,x=r("a722"),k=r("8860"),L=r("da13"),_=r("5d23"),S=r("1baa"),D=r("f774"),O=r("8654"),j=Object(u["a"])(y,v,m,!1,null,null,null),M=j.exports;d()(j,{VLayout:x["a"],VList:k["a"],VListItem:L["a"],VListItemContent:_["a"],VListItemGroup:S["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VNavigationDrawer:D["a"],VTextField:O["a"]});var Q={components:{Navbar:b,Sidebar:M}},V=Q,$=r("7496"),T=r("a75b"),C=Object(u["a"])(V,n,o,!1,null,null,null),P=C.exports;d()(C,{VApp:$["a"],VContent:T["a"]});var I=r("8c4f"),B=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Map",{attrs:{locations:e.filteredLocations}})],1)},E=[],Z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{ref:"mapContainer",staticClass:"map-container"})])},N=[],A={data(){return{map:null,markers:[]}},props:{locations:{type:Array,default(){return[]}}},watch:{locations:{handler(){this.map&&this.setMarkers()}}},methods:{setMarkers(){this.markers.forEach(e=>{e.remove()}),this.markers=this.locations.map(e=>{const t=new window.mapboxgl.Popup({offset:25});t.setHTML(`<h2>${e.label}</h2><p>${e.address}</p>`);const r=new window.mapboxgl.Marker;return r.setLngLat(e.position),r.setPopup(t),r.addTo(this.map),r})},createMap(){this.map=new window.mapboxgl.Map({container:this.$refs.mapContainer,style:"mapbox://styles/mapbox/streets-v11",center:[15.9877496,45.8030795],zoom:11}),this.setMarkers()}},mounted(){this.$nextTick(()=>{this.createMap()})}},R=A,J=(r("a62c"),Object(u["a"])(R,Z,N,!1,null,"448a3a04",null)),U=J.exports,z={components:{Map:U},computed:{...Object(w["b"])(["filteredLocations"])}},F=z,G=Object(u["a"])(F,B,E,!1,null,null,null),H=G.exports;a["a"].use(I["a"]);var K=new I["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:H},{path:"*",redirect:"/"}]});a["a"].use(w["a"]);var q=new w["a"].Store({state:{drawer:!1,searchQuery:"",locations:[{label:"McDonald's Dubrava",address:"Dubrava 143, 10040, Zagreb",position:[16.0606216,45.8309049]},{label:"Submarine Burger Radnička",address:"Radnička cesta 34, 10000, Zagreb",position:[15.9964507,45.8037254]},{label:"The Burger Bar",address:"Zavrtnica 17, 10000, Zagreb",position:[15.9979606,45.8071151]},{label:"Rocket Burger",address:"Ul. Ivana Tkalčića 50, 10000, Zagreb",position:[15.9744368,45.8163569]},{label:"Burger King",address:"Ul. Vice Vukova 6, 10000, Zagreb",position:[15.9426275,45.771915]}]},mutations:{toggleDrawer(e){e.drawer=!e.drawer},hideDrawer(e){e.drawer=!1},showDrawer(e){e.drawer=!0},setSearchQuery(e,t){e.searchQuery=t}},getters:{drawer(e){return e.drawer},locations(e){return e.locations},filteredLocations(e){if(!e.searchQuery)return e.locations;const t=e.searchQuery.toLowerCase();return e.locations.filter(e=>{return e.label.toLowerCase().indexOf(t)>=0})},searchQuery(e){return e.searchQuery}}}),W=r("f309");a["a"].use(W["a"]);var X=new W["a"]({icons:{iconfont:"mdi"}});a["a"].config.productionTip=!1,new a["a"]({router:K,store:q,vuetify:X,render:e=>e(P)}).$mount("#app")},5838:function(e,t,r){},a62c:function(e,t,r){"use strict";var a=r("5838"),n=r.n(a);n.a}});
//# sourceMappingURL=app.d2b1c911.js.map