(()=>{"use strict";const t=function(){function t(t,e,n,o){void 0===e&&(e="div"),void 0===n&&(n=""),void 0===o&&(o="");var r=document.createElement(e);r.className=n,r.textContent=o,t&&t.append(r),this.node=r}return t.prototype.destroy=function(){this.node.remove()},t}();var e,n=(e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},e(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)});const o=function(e){function o(n){var o=e.call(this,n)||this;return o.changeQuote=new t(n,"button","change-quote"),o.changeQuote.node.style.backgroundImage="url(./public/assets/svg/reload.svg)",o.quoteWrapper=new t(n,"div"),o.quote=new t(o.quoteWrapper.node,"div","quote"),o.author=new t(o.quoteWrapper.node,"div","author"),o.quoteNumber=Math.floor(4*Math.random()),o.fetchQuote=function(t){return fetch("./public/quotes"+t+".json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){return t.json()}))},o.getQuote("Ru"),o.rotateIconDegr=180,o.changeQuote.node.addEventListener("click",(function(){o.changeQuote.node.style.transform="rotate("+o.rotateIconDegr+"deg)",o.quoteNumber=o.quoteNumber+1<4?o.quoteNumber+1:0,o.getQuote("Ru"),o.rotateIconDegr+=180})),o}return n(o,e),o.prototype.getQuote=function(t){var e=this;this.fetchQuote(t).then((function(t){e.quote.node.textContent=t[e.quoteNumber].text,e.author.node.textContent=t[e.quoteNumber].author}))},o}(t);var r=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),i=function(e){function n(n){var r=e.call(this,n)||this;return r.footer=new t(r.node,"footer","footer"),r.quote=new o(r.footer.node),r}return r(n,e),n}(t),a=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),u=function(e){function n(n){var o=e.call(this,n)||this;return o.defaultCity="St. Petersburg",o.weather=new t(o.node,"div","weather"),o.input=new t(o.weather.node,"input","city"),o.input.node.setAttribute("value",o.defaultCity),o.error=new t(o.weather.node,"div","weather-error"),o.icon=new t(o.weather.node,"i","weather-icon owf"),o.description=new t(o.weather.node,"div","description-container"),o.temperature=new t(o.weather.node,"span","temperature"),o.weatherDescription=new t(o.weather.node,"span","weather-description"),o.wind=new t(o.weather.node,"div","wind"),o.humidity=new t(o.weather.node,"div","humidity"),o.input.node.addEventListener("input",(function(t){o.weatherData(t.target.value)})),o.weatherData(),o}return a(n,e),n.prototype.weatherData=function(t){var e=this;this.getWeather(t).then((function(t){e.temperature.node.textContent="Temp "+t.main.temp.toFixed(1)+"°C",e.weatherDescription.node.textContent=t.weather[0].description,e.wind.node.textContent="Wind "+t.wind.speed,e.humidity.node.textContent="Humidity "+t.main.humidity}))},n.prototype.getWeather=function(t){return e=this,n=void 0,r=function(){return function(t,e){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}(this,(function(e){switch(e.label){case 0:return[4,fetch("https://api.openweathermap.org/data/2.5/weather?q="+(null!=t?t:"St. Petersburg")+"&lang=ru&appid=a1d7b55bf627b6db7643916254c70535&units=metric")];case 1:return[4,e.sent().json()];case 2:return[2,e.sent()]}}))},new((o=void 0)||(o=Promise))((function(t,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function u(t){try{c(r.throw(t))}catch(t){i(t)}}function c(e){var n;e.done?t(e.value):(n=e.value,n instanceof o?n:new o((function(t){t(n)}))).then(a,u)}c((r=r.apply(e,n||[])).next())}));var e,n,o,r},n}(t),c=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();const s=function(e){function n(n,o){var r=e.call(this,n)||this;r.parentNode=n,r.audio=new t(r.node,"audio"),r.audio.node.src=o,r.audioCtx=new AudioContext,r.wrapper=new t(r.node,"div","visualizator__wrapper"),r.canvas=new t(r.wrapper.node,"canvas","visualizator-canvas"),r.ctx=r.canvas.node.getContext("2d"),r.canvas.node.width=window.innerWidth/2,r.canvas.node.height=window.innerHeight/1.5,r.audioSource=r.audioCtx.createMediaElementSource(r.audio.node),r.analyzer=r.audioCtx.createAnalyser(),r.audio.node.play(),r.node.style.transition="all ease 500ms",r.audio.node.addEventListener("ended",(function(){setTimeout((function(){return r.destroy()}),1e3)})),r.audioSource.connect(r.analyzer),r.analyzer.connect(r.audioCtx.destination),r.analyzer.fftSize=512;var i=r.analyzer.frequencyBinCount,a=new Uint8Array(i),u=function(){r.ctx.clearRect(0,0,r.canvas.node.width,r.canvas.node.height),r.analyzer.getByteFrequencyData(a),r.drawVisualizer(i,a,10,0),requestAnimationFrame(u)};return u(),r}return c(n,e),n.prototype.drawVisualizer=function(t,e,n,o){for(var r=0;r<=t;r++){var i=.9*e[r];this.ctx.save(),this.ctx.translate(this.canvas.node.width/2,this.canvas.node.height/2.7),this.ctx.rotate(r*Math.PI*6/t);var a=.3*r;this.ctx.fillStyle="hsl("+a+",100%,"+i/3+"%)",this.ctx.fillRect(0,0,n,i),this.ctx.restore()}},n.prototype.destroy=function(){this.audio.node.pause(),this.parentNode.removeChild(this.node)},n}(t);var l=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),p=function(e){function n(n){var o=e.call(this,n)||this;return o.parentNode=n,o.player=new t(o.node,"div","player"),o.playerControls=new t(o.player.node,"div","player-controls"),o.buttonPrev=new t(o.playerControls.node,"button","play-prev player-icon"),o.buttonPrev.node.style.backgroundImage="url(./public/assets/svg/play-prev.svg)",o.buttonPlay=new t(o.playerControls.node,"button","play player-icon"),o.buttonPlay.node.style.backgroundImage="url(./public/assets/svg/play.svg)",o.inputWrapper=new t(o.node,"div","input-file-wrapper"),o.inputContent=new t(o.inputWrapper.node,"span","","Играть свою..."),o.input=new t(o.inputWrapper.node,"input","input-file"),o.input.node.setAttribute("type","file"),o.input.node.setAttribute("accept","audio/*"),o.isPlaing=!1,o.audioUrl="",o.input.node.addEventListener("change",(function(t){var e=t.target.files,n=URL.createObjectURL(e[0]);o.audioUrl=n,o.visualAudio()})),o.visual=null,o.buttonPlay.node.addEventListener("click",(function(){o.visualAudio()})),o.nextButton=new t(o.playerControls.node,"button","play-next player-icon"),o.nextButton.node.style.backgroundImage="url(./public/assets/svg/play-next.svg)",o.trackList=new t(o.player.node,"ul","play-list"),o.audioList=["Aqua Caelestis","Ennio Morricone","River Flows In You","Summer Wind"],o.children=[],o.audioList.forEach((function(e){var n=new t(o.trackList.node,"li","track-audio",e);o.children.push(n.node),n.node.addEventListener("click",(function(t){o.children.forEach((function(t){return t.classList.contains("active-track")&&t.classList.remove("active-track")})),n.node.classList.add("active-track"),o.fetchAudio(e).then((function(t){o.audioUrl=t}))}))})),o.fetchAudio=function(t){return fetch("./public/assets/sounds/"+t+".mp3",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){return t.url}))},o}return l(n,e),n.prototype.visualAudio=function(){var t=this;this.isPlaing=!this.isPlaing,this.isPlaing?(this.visual=new s(this.parentNode,this.audioUrl),this.visual.node.style.transition="all ease 500ms"):(console.log(this.parentNode),this.visual.node.style.opacity="0",setTimeout((function(){t.visual&&t.parentNode.removeChild(t.visual.node)}),500))},n}(t),d=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),f=function(e){function n(n){var o=e.call(this,n)||this;return o.header=new t(o.node,"header","header"),o.player=new p(o.header.node),o.header=new u(o.header.node),o}return d(n,e),n}(t),h=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),y=function(e){function n(n){var o=e.call(this,n)||this;return o.time=new t(o.node,"time","time"),o.startTimer(),o}return h(n,e),n.prototype.startTimer=function(){var t=this;setInterval((function(){t.date=new Date;var e=t.date.getHours(),n=t.date.getMinutes(),o=t.date.getSeconds();t.time.node.textContent=(e<10?"0"+e:e)+":"+(n<10?"0"+n:n)+":"+(o<10?"0"+o:o)}),1e3)},n}(t),v=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),w=function(e){function n(n,o){var r,i=e.call(this,n)||this;i.greetingWrapper=new t(i.node,"div","greeting-container"),i.greetingText=new t(i.greetingWrapper.node,"span","greeting","Good "+o+",");var a=localStorage.getItem("userName");return i.defaultName=null!==(r=a+"!")&&void 0!==r?r:"[ Enter name ]",i.input=new t(i.greetingWrapper.node,"div","greeting-name",i.defaultName),a&&(i.input.node.style.color="#fff"),i.input.node.setAttribute("contenteditable","true"),i.input.node.addEventListener("click",(function(){i.input.node.textContent=a?a+"":"",i.input.node.addEventListener("keypress",(function(t){"Enter"===t.key&&(t.preventDefault(),localStorage.setItem("userName",i.input.node.innerText),i.input.node.blur(),i.input.node.style.color="#fff")}))})),i}return v(n,e),n}(t),b=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),m=function(e){function n(n){var o=e.call(this,n)||this;return o.date=new t(o.node,"date"),o}return b(n,e),n}(t),g=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),_=function(e){function n(n){var o=e.call(this,n)||this;return o.sliderIconsWrapper=new t(o.node,"div","slider-icons"),o.buttonPrev=new t(o.sliderIconsWrapper.node,"button","slide-prev slider-icon"),o.buttonPrev.node.style.backgroundImage="url(./public/assets/svg/slider-prev.svg)",o.buttonNext=new t(o.sliderIconsWrapper.node,"button","slide-next slider-icon"),o.buttonNext.node.style.backgroundImage="url(./public/assets/svg/slider-next.svg)",o}return g(n,e),n}(t),x=function(){function t(){this._audioNotes=[]}return Object.defineProperty(t.prototype,"audioNotes",{get:function(){return this._audioNotes},set:function(t){this._audioNotes=t},enumerable:!1,configurable:!0}),t.prototype.create=function(t){return fetch("https://moment-server-notes.herokuapp.com/voice_notes/create?id="+t.id,{method:"POST",headers:{},body:t.voice}).then((function(t){console.log(t),t.json()})).then((function(e){return t.id}))},t.prototype.delete=function(t){return fetch(" https://moment-server-notes.herokuapp.com/voice_notes/delete?id="+t).then((function(t){return t.json()})).then((function(e){return t}))},t.prototype.list=function(){var t=this;return fetch("https://moment-server-notes.herokuapp.com/voice_notes/list",{method:"POST",headers:{}}).then((function(t){return t.json()})).then((function(e){return t._audioNotes=e,e}))},t.prototype.getFileById=function(t){return fetch(" https://moment-server-notes.herokuapp.com/voice_notes/item?id="+t).then((function(t){return t.json()})).then((function(t){return t}))},t}(),O=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();const j=function(e){function n(n){var o=e.call(this,n)||this;o.canvas=new t(n,"canvas","microfon-canvas"),o.canvasCtx=o.canvas.node.getContext("2d"),o.canvas.node.width=window.innerWidth,o.canvas.node.height=200;var r=!1;if(r)return o;r=!0;var i,a=new(window.AudioContext||window.webkitAudioContext),u=a.createAnalyser();navigator.mediaDevices.getUserMedia({audio:!0}).then((function(t){i=t,a.createMediaStreamSource(i).connect(u)})),u.fftSize=2048;var c=u.frequencyBinCount,s=new Uint8Array(c);u.getByteTimeDomainData(s);var l=function(){requestAnimationFrame(l),u.getByteTimeDomainData(s),o.canvasCtx.clearRect(0,0,o.canvas.node.width,o.canvas.node.height),o.canvasCtx.fillStyle="rgba(200, 200, 200,0)",o.canvasCtx.fillRect(0,0,o.canvas.node.width,o.canvas.node.height),o.canvasCtx.lineWidth=4,o.canvasCtx.strokeStyle="rgba(255, 255, 255,0.5)",o.canvasCtx.beginPath();for(var t=1*o.canvas.node.width/c,e=0,n=0;n<c;n++){var r=s[n]/128*o.canvas.node.height/2;0===n?o.canvasCtx.moveTo(e,r):o.canvasCtx.lineTo(e,r),e+=t}o.canvasCtx.lineTo(o.canvas.node.width,o.canvas.node.height/2),o.canvasCtx.stroke()};return l(),o}return O(n,e),n}(t);var C=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),P=function(e){function n(n){var o=e.call(this,n)||this;return o.wrapper=new t(o.node,"div","media-wrapper"),o.startRecord=new t(o.wrapper.node,"button","media-start","Сделать заметку"),o.stopRecord=new t(o.wrapper.node,"button","media-stop","Готово"),o.visualMicro,navigator.mediaDevices.getUserMedia({audio:!0}).then((function(t){var e,r=new MediaRecorder(t),i=[];o.startRecord.node.addEventListener("click",(function(){console.log("start"),i=[],r.start(),console.log(r),e=new j(n)})),o.stopRecord.node.addEventListener("click",(function(){console.log("stop"),r.stop(),e.canvas.destroy()})),r.addEventListener("dataavailable",(function(t){i.push(t.data)})),r.addEventListener("stop",(function(){return t=o,e=void 0,r=function(){var t,e;return function(t,e){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}(this,(function(n){switch(n.label){case 0:return t=new Blob(i,{type:"audio/wav"}),[4,(o=t,new Promise((function(t,e){var n=new FileReader;n.onloadend=function(){return t(n.result)},n.readAsDataURL(o)})))];case 1:return e=n.sent(),this.onStop({id:+new Date,voice:e}),[2]}var o}))},new((n=void 0)||(n=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(t){i(t)}}function u(t){try{c(r.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}c((r=r.apply(t,e||[])).next())}));var t,e,n,r}))})),o}return C(n,e),n}(t),A=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),k=function(t,e,n,o){return new(n||(n=Promise))((function(r,i){function a(t){try{c(o.next(t))}catch(t){i(t)}}function u(t){try{c(o.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}c((o=o.apply(t,e||[])).next())}))},E=function(t,e){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};const S=function(e){function n(n){var o=e.call(this,n)||this;return o.model=new x,o.mediaRecord=new P(o.node),o.mediaRecord.onStop=function(t){o.audioStopHandler(t)},o.uploadedIds=[],o.audioItemsArr=[],o.audiosWrapper=new t(o.node,"div","audioWrapper"),o}return A(n,e),n.prototype.audioStopHandler=function(t){return k(this,void 0,void 0,(function(){var e;return E(this,(function(n){switch(n.label){case 0:return[4,this.model.create(t)];case 1:return e=n.sent(),this.createAudioElement(e),[2]}}))}))},n.prototype.animateOut=function(t){return new Promise((function(e){t.node.classList.add("audioItem__hidden"),t.node.addEventListener("transitionend",(function(){})),e(null)}))},n.prototype.createAudioElement=function(e){var n=this,o=new t(this.audiosWrapper.node,"div","audioItem__wrapper audioItem__hidden");this.audioItemsArr.push({indx:e,element:o});var r=new t(o.node,"button","audioItem__button","play"),i=new t(o.node,"button","deleteItem__button","X");i.node.setAttribute("data-index",e),r.node.setAttribute("data-index",e),r.node.addEventListener("click",(function(t){return k(n,void 0,void 0,(function(){var e,n;return E(this,(function(o){switch(o.label){case 0:return e=+t.target.dataset.index,[4,this.model.getFileById(e)];case 1:return n=o.sent(),new s(this.node,n.voice),[4,this.model.list()];case 2:return o.sent(),[2]}}))}))})),i.node.addEventListener("click",(function(t){return k(n,void 0,void 0,(function(){var e,n;return E(this,(function(r){switch(r.label){case 0:return e=+t.target.dataset.index,[4,this.model.delete(e)];case 1:return n=r.sent(),this.audioItemsArr.splice(this.uploadedIds.indexOf(n),1),[4,this.animateOut(o)];case 2:return r.sent(),o.destroy(),[2]}}))}))})),setTimeout((function(){o.node.classList.remove("audioItem__hidden")}),500)},n.prototype.drawAudios=function(t){var e=this;this.audiosWrapper.node.innerHTML="",t.forEach((function(t){e.createAudioElement(t)}))},n}(t);var T=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),I=function(e){function n(n,o){var r=e.call(this,n)||this;return r.main=new t(r.node,"main","main"),r.sliderIcons=new _(r.main.node),r.sliderIcons.buttonNext.node.onclick=function(){return r.changeImage("next")},r.sliderIcons.buttonPrev.node.onclick=function(){return r.changeImage("prev")},r.time=new y(r.main.node),r.day=new m(r.main.node),r.greeting=new w(r.main.node,o),r.voiceNotes=new S(r.main.node),r}return T(n,e),n}(t),N=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();new(function(t){function e(e){var n=t.call(this,e)||this;return n.getDayTime=function(){var t=(new Date).getHours();return t<6?"night":t<12?"morning":t<18?"day":"evening"},n.header=new f(n.node),n.main=new I(n.node,n.getDayTime()),n.footer=new i(n.node),n.currentNumber=Math.floor(20*Math.random()),n.main.changeImage=function(t){"next"===t?n.currentNumber+1>20?n.currentNumber=1:n.currentNumber+=1:n.currentNumber-1<=0?n.currentNumber=20:n.currentNumber-=1;var o=new Image;o.addEventListener("load",(function(){return e.style.backgroundImage="url("+o.src+")"})),o.src="https://raw.githubusercontent.com/poli8512/stage1-tasks/assets/images/"+n.getDayTime()+"/"+(n.currentNumber>=10?n.currentNumber:"0"+n.currentNumber)+".jpg"},n}return N(e,t),e}(t))(document.body),console.log(new Date)})();
//# sourceMappingURL=main.js.map