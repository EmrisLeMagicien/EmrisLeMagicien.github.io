(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{224:function(t,e,n){var content=n(229);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(98).default)("7bfd72ea",content,!0,{sourceMap:!1})},228:function(t,e,n){"use strict";n(224)},229:function(t,e,n){var o=n(97)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&family=Oswald:wght@300;600&display=swap);"]),o.push([t.i,'body,html{padding:0;margin:0;overflow:hidden;height:100%}*,.text{font-family:"Josefin Sans",sans-serif;font-size:20px}.title{font-weight:600;font-size:50px}.subtitle,.title{font-family:"Oswald",sans-serif}.subtitle{font-weight:300;font-size:35px}#FondDark{z-index:4;position:fixed;overflow:hidden;height:100vh;width:100vw;left:0;top:0;background-color:rgba(0,0,0,.31373)}#nav{-webkit-backface-visibility:hidden;position:fixed;z-index:2;right:40px;top:50px;flex-direction:column;background-color:#ddd;border-radius:10px;padding:10px;box-shadow:0 0 15px #444}#nav,#nav>a{display:flex}#nav>a{align-items:center;margin:5px;padding:15px;text-decoration:none;color:#000}@media screen and (min-width:520px){#nav>a:after{z-index:-1;opacity:0;width:0;height:2px;content:"";background:#100515;transition:all .2s;display:block;position:absolute;right:0;margin:50% 30px 30px}#nav>a:hover:after{transition:.7s;opacity:1;width:calc(100% - 55px)}#nav>a:before{z-index:-1;width:calc(100% - 55px);height:0;content:"";background:#2f0f3e;transition:all .2s;display:block;position:absolute;right:0;margin:30px;opacity:.3}#nav>a:hover:before{transition:.4s;height:20px;width:calc(100% - 55px)}}@media screen and (max-width:520px){#nav{flex-direction:row;top:auto;bottom:0;left:20px;right:20px;border-bottom-right-radius:0;border-bottom-left-radius:0}#nav>a{margin:10px}}#blocnom{background-color:#100515;height:30vh;width:20vw;padding:40vh 10vw}@media screen and (max-width:956px){#blocnom{width:calc(80vw - 180px)}}@media screen and (max-width:520px){#blocnom{width:80vw}}@media screen and (min-height:1024px){#blocnom{margin-top:2vh;padding:30vh 10vw;box-shadow:10px 0 20px rgba(34,34,34,.6)}}#blocproject{background-color:#100515;height:40vh;padding:5vh 0;transform:translateY(50%)}@media screen and (max-width:956px){#blocproject{padding:10vh 0;height:80vh;transform:none}}@media screen and (max-height:720px){#blocproject{transform:translateY(0);height:calc(90vh - 100px)}}@media screen and (max-width:520px){#blocproject{transform:translateY(0);height:90vh}}#blocreseaux{background-color:#100515;height:40vh;width:50vw;padding:30vh 10vw;margin-left:auto}@media screen and (max-width:956px){#blocreseaux{width:80vw}}@media screen and (max-width:520px){#blocreseaux{width:100vw;height:40vh;padding:30vh 0}}@media screen and (max-height:720px){#blocreseaux{width:50vw;height:80vh;padding:10vh 25vw}}.block{width:100vw;height:100vh}.interne{color:#fff;height:100%}@media screen and (max-witdh:520px){.interne{padding-bottom:50px!important;height:calc(100% - 50px)}}#container{height:100vh;display:flex;overflow-x:hidden;flex:none;flex-flow:column nowrap;overflow-y:scroll;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;scroll-behavior:smooth}#container>div{scroll-snap-align:center;flex:none}.projects{padding:50px}',""]),t.exports=o},236:function(t,e,n){"use strict";n.r(e);var o=n(32),r=Object(o.a)({methods:{},watch:{},data:function(){return{nav_radio:[{name:"nom"},{name:"project"},{name:"reseaux"}]}}},"methods",{}),d=(n(228),n(42)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"container"}},[n("footer",{attrs:{id:"nav"}},t._l(t.nav_radio,(function(e){return n("a",{key:"name",attrs:{href:"#"+e.name}},[t._v(t._s(e.name))])})),0),t._l(t.nav_radio,(function(t){return n("div",{key:"name",staticClass:"block",attrs:{id:t.name}},[n("div",{attrs:{id:"bloc"+t.name}},[n(t.name,{tag:"component",staticClass:"interne"})],1)])}))],2)])}),[],!1,null,null,null);e.default=component.exports}}]);