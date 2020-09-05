(this.webpackJsonpshopifyux=this.webpackJsonpshopifyux||[]).push([[0],{118:function(e,t,n){},119:function(e,t,n){},120:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(7),c=n.n(o),r=(n(70),n(17)),l=(n(71),n(56));function m(e,t){if("NOMINATE"===t.type){var n=t.movie;return[].concat(Object(l.a)(e),[n])}if("REMOVE"===t.type){var a=t.id;return e.filter((function(e){return e.imdbID!==a}))}throw new Error("Tried to reduce with unsupported action type: ".concat(t.type))}var s=n(158),u=n(151),f=n(51),v=n.n(f),d=n(154),E=(n(72),Object(u.a)((function(e){return{button:{margin:e.spacing(1)}}})));function b(e){var t=e.movies,n=e.removeNomination,a=e.nominations,o=E();return a.length>0?i.a.createElement(d.a,{container:!0,className:"Nominated-Movie-List"},i.a.createElement("ul",null,t.map((function(e,t){return i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement("li",{key:t,className:"Nominated-Movie"},e.Title,"(",e.Year,")",i.a.createElement(s.a,{variant:"outlined",color:"secondary",size:"small",className:o.button,startIcon:i.a.createElement(v.a,null),onClick:function(){return n(e.imdbID)}},"Remove")))})))):i.a.createElement(i.a.Fragment,null)}var p=n(52),h=n.n(p),g=(n(77),Object(u.a)((function(e){return{button:{margin:e.spacing(1)}}})));function N(e){var t=e.movie,n=e.is_disabled,a=e.setNominate,o=g();return i.a.createElement("li",{className:"Single-Movie"},t.Title,"(",t.Year,")",i.a.createElement(s.a,{variant:"outlined",color:"primary",size:"small",className:o.button,startIcon:i.a.createElement(h.a,null),onClick:function(){a(t)},disabled:n},"Nominate"))}var O=n(53),y=n.n(O),j=(n(97),function(e){return i.a.createElement(y.a,{className:"Loader",type:"Grid",color:"#d1c499",height:150,width:150})});n(98);function M(e){var t=e.movies,n=e.nominations,a=e.nominateMovie,o=e.removeMovie,c=e.loaded;return t&&c?i.a.createElement(d.a,{container:!0,className:"fade-in"},i.a.createElement("ul",null,t.map((function(e,t){return i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement(N,{key:t,movie:e,is_disabled:(c=e,!!n.find((function(e){return e.imdbID===c.imdbID}))||5===n.length),setNominate:a,removeMovie:o}));var c})))):c?i.a.createElement(i.a.Fragment,null):i.a.createElement(j,null)}var S=n(54),I=n(157),w=n(55),x=n.n(w);n(118);function k(e){var t=e.setMovies,n=e.setLoading,o=Object(a.useState)(""),c=Object(r.a)(o,2),l=c[0],m=c[1],s=Object(a.useCallback)(Object(S.debounce)((function(){!function(e,t,n){x.a.get("http://www.omdbapi.com/?i=tt3896198&apikey=".concat("4d268215","&s=").concat(e)).then((function(e){var a=e.data;t(a.Search),n(!0)})).catch((function(e){console.log(e)}))}(l,t,n)}),500),[l]);return Object(a.useEffect)((function(){return s(),s.cancel}),[l,s]),i.a.createElement(I.a,{inputProps:{style:{fontSize:40}},InputLabelProps:{style:{fontSize:20}},fullWidth:!0,label:"Search Omdb and nominate a movie!",value:l,onChange:function(e){n(!1),m(e.target.value)},placeholder:"Enter a Movie Title"})}n(119);var L=function(e){return i.a.createElement("header",null,"The Shoppies")},T=n(156);function z(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],o=t[1],c=function(){var e=Object(a.useReducer)(m,[]),t=Object(r.a)(e,2),n=t[0],i=t[1];return{nominations:n,nominateMovie:function(e){i({type:"NOMINATE",movie:e})},removeNomination:function(e){i({type:"REMOVE",id:e})}}}(),l=c.nominations,s=c.nominateMovie,u=c.removeNomination,f=Object(a.useState)(),v=Object(r.a)(f,2),E=v[0],p=v[1],h=Object(a.useState)(!1),g=Object(r.a)(h,2),N=g[0],O=g[1];return Object(a.useEffect)((function(){5===l.length?O(!0):O(!1)}),[l]),Object(a.useEffect)((function(){var e=localStorage.getItem("my-nominations");e&&(console.log(e),JSON.parse(e).forEach((function(e){return s(e)})))}),[]),Object(a.useEffect)((function(){localStorage.setItem("my-nominations",JSON.stringify(l))})),i.a.createElement(i.a.Fragment,null,i.a.createElement(T.a,{className:"Main-Container",maxWidth:"lg"},i.a.createElement(L,null),i.a.createElement("h3",{className:"Nominate-Statement"},"Nominate your five favorite movies for the shoppies award!"),i.a.createElement(d.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"20vh"}},i.a.createElement(d.a,{item:!0,xs:12},i.a.createElement(k,{setMovies:o,setLoading:p})),N&&i.a.createElement("h3",{className:"Notification"},"Amazing nominations list!")),i.a.createElement(d.a,{container:!0,spacing:0,direction:"row",alignItems:"center",justify:"center",style:{minHeight:"40vh"}},i.a.createElement(d.a,{item:!0,xs:6},i.a.createElement("h1",{className:"List-Header"},"Movie List:"),i.a.createElement(M,{loaded:E,movies:n,nominations:l,nominateMovie:s})),i.a.createElement(d.a,{item:!0,xs:6},i.a.createElement("h1",{className:"List-Header"},"Nominated Movies:"),i.a.createElement(b,{movies:l,removeNomination:u,nominations:l})))))}c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(z,null)),document.getElementById("root"))},65:function(e,t,n){e.exports=n(120)},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},77:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){}},[[65,1,2]]]);
//# sourceMappingURL=main.b94fb8fb.chunk.js.map