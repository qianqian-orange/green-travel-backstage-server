(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cac298a4"],{6183:function(t,e,i){"use strict";var a=i("a932"),n=i.n(a);n.a},"81d5":function(t,e,i){"use strict";var a=i("7b0b"),n=i("23cb"),s=i("50c4");t.exports=function(t){var e=a(this),i=s(e.length),c=arguments.length,r=n(c>1?arguments[1]:void 0,i),o=c>2?arguments[2]:void 0,h=void 0===o?i:n(o,i);while(h>r)e[r++]=t;return e}},"8d1c":function(t,e,i){},"9ed6":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"login-container"},[i("div",{staticClass:"particle-animation-container"},[i("canvas",{staticClass:"particle-animation"})]),i("div",{staticClass:"content-container"},[i("h1",{staticClass:"title"},[t._v("亲，您还没登录哟！")]),i("a",{attrs:{href:"/api/login"}},[i("i",{staticClass:"icon iconfont icon-github1"})])])])}];i("cb29"),i("4160"),i("159b");function s(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function c(t,e,i){return e&&s(t.prototype,e),i&&s(t,i),t}var r=i("ade3");function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var h=i("cf45"),l=function t(e){var i=e.x,a=e.y,n=e.size,s=e.speedX,c=void 0===s?.1:s,r=e.speedY,h=void 0===r?.1:r,l=e.directionX,d=void 0===l?1:l,f=e.directionY,u=void 0===f?1:f;o(this,t),this.x=i,this.y=a,this.size=n,this.speedX=c,this.speedY=h,this.directionX=d,this.directionY=u},d=function(){function t(e){var i=this,a=e.el,n=e.number,s=e.shape,c=void 0===s?"circle":s,d=e.opacity,f=void 0===d?.2:d,u=e.minSpeed,p=void 0===u?.1:u,m=e.maxSpeed,x=void 0===m?.7:m,v=e.maxSize,b=void 0===v?25:v,y=e.minSize,z=void 0===y?5:y,w=e.distance,S=void 0===w?150:w;o(this,t),Object(r["a"])(this,"canvasStyle",(function(){i.el.width=i.el.parentNode.offsetWidth,i.el.height=i.el.parentNode.offsetHeight})),Object(r["a"])(this,"createParticles",(function(){for(var t=0;t<i.number;t+=1)i.particles.push(new l({x:Math.floor(Math.random()*(i.el.width-2*i.maxSize)+i.maxSize),y:Math.floor(Math.random()*(i.el.height-i.maxSize)+i.maxSize),size:Math.floor(Math.random()*(i.maxSize-i.minSize)+i.minSize),speedX:Math.floor(10*(Math.random()*(i.maxSpeed-i.minSpeed)+i.minSpeed))/10,speedY:Math.floor(10*(Math.random()*(i.maxSpeed-i.minSpeed)+i.minSpeed))/10,directionX:Math.random()<.5?-1:1,directionY:Math.random()<.5?-1:1}))})),Object(r["a"])(this,"updateParticles",(function(){for(var t=0;t<i.particles.length;t+=1){var e=i.particles[t],a=e.x+e.speedX*e.directionX;e.x=a;var n=e.y+e.speedY*e.directionY;e.y=n,(e.x>=i.el.width-e.size||e.x<=e.size)&&(e.directionX=-e.directionX),(e.y>=i.el.height-e.size||e.y<=e.size)&&(e.directionY=-e.directionY)}})),Object(r["a"])(this,"drawParticles",(function(){i.ctx.clearRect(0,0,i.el.width,i.el.height),i.ctx.fillStyle="rgba(255, 255, 255, ".concat(i.opacity,")"),i.particles.forEach((function(t){i.drawShap(t)}))})),Object(r["a"])(this,"animation",(function(){i.updateParticles(),i.drawParticles(),i.drawLine(),i.key=requestAnimationFrame(i.animation)})),Object(r["a"])(this,"init",(function(){i.canvasStyle(),i.createParticles(),i.drawParticles(),i.key=requestAnimationFrame(i.animation),window.addEventListener("resize",i.resizeHandler)})),Object(r["a"])(this,"resizeHandler",Object(h["c"])((function(){cancelAnimationFrame(i.key),i.number=Math.floor(i.el.parentNode.offsetWidth*i.el.parentNode.offsetHeight/22500),i.particles=[],i.canvasStyle(),i.createParticles(),i.key=requestAnimationFrame(i.animation)}))),this.el=a,this.ctx=a.getContext("2d"),this.shape=c,this.opacity=f,this.minSpeed=p,this.maxSpeed=x,this.maxSize=b,this.minSize=z,this.distance=S,this.number=n||Math.floor(a.parentNode.offsetWidth*a.parentNode.offsetHeight/22500),this.particles=[],this.init()}return c(t,[{key:"drawShap",value:function(t){switch(this.shape){case"circle":this.ctx.beginPath(),this.ctx.arc(t.x,t.y,t.size,0,2*Math.PI,!0),this.ctx.fill(),this.ctx.closePath();break;case"heart":this.ctx.save(),this.ctx.translate(t.x,t.y),this.ctx.rotate(Math.PI/4),this.ctx.beginPath(),this.ctx.fillRect(-t.size,-t.size,2*t.size,2*t.size),this.ctx.fill(),this.ctx.closePath(),this.ctx.beginPath(),this.ctx.arc(-t.size,0,t.size,Math.PI/2,3*Math.PI/2),this.ctx.fill(),this.ctx.closePath(),this.ctx.beginPath(),this.ctx.arc(0,-t.size,t.size,Math.PI,2*Math.PI),this.ctx.fill(),this.ctx.closePath(),this.ctx.restore();break;default:break}}},{key:"drawLine",value:function(){for(var t=0;t<this.particles.length;t+=1)for(var e=this.particles[t],i=0;i<this.particles.length;i+=1){var a=this.particles[i],n=Math.floor(Math.sqrt(Math.pow(e.x-a.x,2)+Math.pow(e.y-a.y,2)));if(n<this.distance){var s=1-Math.floor(n/this.distance*10)/10;this.ctx.beginPath(),this.ctx.strokeStyle="rgba(255, 255, 255, ".concat(s>.6?.6:s,")"),this.ctx.moveTo(e.x,e.y),this.ctx.lineTo(a.x,a.y),this.ctx.stroke(),this.ctx.closePath()}}}},{key:"destroy",value:function(){cancelAnimationFrame(this.key),window.removeEventListener("resize",this.resizeHandler)}}]),t}(),f=d,u={name:"Login",data:function(){return{particleAnimation:null}},mounted:function(){this.particleAnimation=new f({el:document.querySelector(".particle-animation"),shape:"heart"})},beforeDestroy:function(){this.particleAnimation&&this.particleAnimation.destroy()}},p=u,m=(i("6183"),i("db96"),i("2877")),x=Object(m["a"])(p,a,n,!1,null,"88bb230a",null);e["default"]=x.exports},a932:function(t,e,i){},cb29:function(t,e,i){var a=i("23e7"),n=i("81d5"),s=i("44d2");a({target:"Array",proto:!0},{fill:n}),s("fill")},db96:function(t,e,i){"use strict";var a=i("8d1c"),n=i.n(a);n.a}}]);