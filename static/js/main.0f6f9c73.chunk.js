(this.webpackJsonptytulowa=this.webpackJsonptytulowa||[]).push([[0],{10:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(4),r=n.n(o),c=(n(10),n(1)),l=n(2),s=n.n(l),f=function(e,t,n,i){Object(a.useEffect)((function(){var a=e.current,o=a.getContext("2d"),r=new Image;if(r.src="/tytulowa/logo.png",a.width=800,a.height=500,"geo"===i){o.fillStyle="#ca4b4b",o.fillRect(0,0,o.canvas.width,o.canvas.height),o.fillStyle="#9c2b2b",o.fillRect(0,o.canvas.height-100,o.canvas.width,100),r.onload=function(){o.drawImage(r,55,o.canvas.height-150,100,100)},o.fillStyle="#ffffff",o.font="700 36px Montserrat",o.fillText("Zesp\xf3\u0142 Szk\xf3\u0142 Komunikacji",175,o.canvas.height-110),o.font="400 24px Montserrat",o.fillText("im. Hipolita Cegielskiego w Poznaniu",175,o.canvas.height-75),o.textAlign="center",o.font="700 48px Montserrat",o.fillText("Geografia",o.canvas.width/2,100),o.font="700 32px Montserrat",o.fillText("Technikum Komunikacji",o.canvas.width/2,150),o.font="400 42px Montserrat",o.fillText(t,o.canvas.width/2,250),o.font="400 30px Montserrat",o.fillText("Klasa ".concat(n),o.canvas.width/2,285);var c=window.screen.availWidth>800?1:window.screen.availWidth/a.width/1.05;a.style.width=a.width*c+"px",a.style.height=a.height*c+"px"}else if("dg"===i){o.fillStyle="#8c2222",o.fillRect(0,0,o.canvas.width,o.canvas.height),o.fillStyle="#151110",o.fillRect(0,o.canvas.height-100,o.canvas.width,100),r.onload=function(){o.drawImage(r,55,o.canvas.height-150,100,100)},o.fillStyle="#ffffff",o.font="700 36px Montserrat",o.fillText("Zesp\xf3\u0142 Szk\xf3\u0142 Komunikacji",175,o.canvas.height-110),o.font="400 24px Montserrat",o.fillText("im. Hipolita Cegielskiego w Poznaniu",175,o.canvas.height-75),o.textAlign="center",o.font="700 48px Montserrat",o.fillText("Dzia\u0142alno\u015b\u0107",o.canvas.width/2,75),o.fillText("Gospodarcza",o.canvas.width/2,125),o.font="500 28px Montserrat",o.fillText("\u201eTw\xf3j w\u0142asny spichlerz\u201d",o.canvas.width/2,175),o.font="400 42px Montserrat",o.fillText(t,o.canvas.width/2,250),o.font="400 30px Montserrat",o.fillText("Klasa ".concat(n),o.canvas.width/2,285),o.font="400 26px Montserrat",o.fillText("Technikum Komunikacji",o.canvas.width/2,320);var l=window.screen.availWidth>800?1:window.screen.availWidth/a.width/1.05;a.style.width=a.width*l+"px",a.style.height=a.height*l+"px"}}),[e,t,n,i])};n(13);var h=function(){var e=Object(a.useState)("geo"),t=Object(c.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)("Jan Kowalski"),l=Object(c.a)(r,2),h=l[0],u=l[1],d=Object(a.useState)("1X"),g=Object(c.a)(d,2),w=g[0],v=g[1],p=Object(a.useRef)(null);f(p,h,w,n);var m=Object(a.useRef)(s.a.debounce((function(e){if(!e)return u("Jan Kowalski");u(e)}),500)).current,x=Object(a.useRef)(s.a.debounce((function(e){if(!e)return v("1X");v(e)}),500)).current;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"subjectChange"},i.a.createElement("button",{onClick:function(){return o("geo")}},"Geografia"),i.a.createElement("button",{onClick:function(){return o("dg")}},"Dzia\u0142alno\u015b\u0107 gospodarcza")),i.a.createElement("canvas",{ref:p}),i.a.createElement("input",{placeholder:"Imi\u0119 i Nazwisko",onChange:function(e){return m(e.target.value)}}),i.a.createElement("input",{placeholder:"Klasa",onChange:function(e){return x(e.target.value)}}),i.a.createElement("a",{href:"/tytulowa",onClick:function(e){var t=p.current.toDataURL("image/png");e.target.href=t},download:"".concat(h.toLowerCase().replace(/ /g,"-"),"-").concat(w.toLowerCase(),".png")},"Zapisz")),i.a.createElement("footer",null,i.a.createElement("a",{href:"https://github.com/zsk-poznan/tytulowa"},i.a.createElement("img",{alt:"GitHub Source Code",src:"https://i.imgur.com/3PbBdr2.png"})),i.a.createElement("br",null),"Made by ",i.a.createElement("a",{href:"https://ejer.ga"},"ejer")))},u=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function d(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(h,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/tytulowa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/tytulowa","/service-worker.js");u?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):d(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):d(t,e)}))}}()},5:function(e,t,n){e.exports=n(14)}},[[5,1,2]]]);
//# sourceMappingURL=main.0f6f9c73.chunk.js.map