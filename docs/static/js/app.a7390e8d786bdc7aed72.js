webpackJsonp([1],[,,,,function(t,e,i){var o=i(3)(i(6),i(21),null,null,null);t.exports=o.exports},,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(19),a=i.n(o),n=i(9);i.n(n);e.default={name:"app",components:{Editor:a.a}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(0),a=i.n(o),n=i(17),s=(i.n(n),i(10));i.n(s);e.default={data:function(){return{activeFrame:0,animationPlaying:!1,backgroundColor:{show:!1,value:"#000000"},duration:3,frame:0,height:100,incrementTime:1,keyframes:[{backgroundColor:"#000000",duration:0,height:100,left:0,opacity:1,time:0,top:0,width:100},{backgroundColor:"#000000",duration:3,height:200,left:200,opacity:.5,time:3,top:200,width:500}],left:200,opacity:1,properties:"",secondToPixels:100,showCode:!1,timelineBars:100,totalSeconds:3,top:0,width:100,addProperty:function(){"Background Color"===this.properties&&(this.backgroundColor.show=!0)},addKeyframe:function(){for(var t=this.frame/this.secondToPixels,e=0;e<this.keyframes.length;e++){if(this.keyframes[e].time>t){this.keyframes.splice(e,0,{backgroundColor:this.backgroundColor.value,duration:0,height:this.height,left:this.left,opacity:this.opacity,time:t,top:this.top,width:this.width});break}if(this.keyframes[e].time===t){this.keyframes.splice(e,1,{backgroundColor:this.backgroundColor.value,duration:0,height:this.height,left:this.left,opacity:this.opacity,time:t,top:this.top,width:this.width});break}}this.tl.restart(),this.attachKeyframeDrag(),this.updateTimeline()},attachKeyframeDrag:function(){var t=this;setTimeout(function(){a()(".keyframe-bar").draggable({axis:"x",containment:".timeline",grid:[1],stop:function(e,i){var o=a()(this).index();t.keyframes[o].time=i.position.left/t.secondToPixels,t.totalSeconds=t.keyframes[t.keyframes.length-1].time,t.sortKeyframes(),t.tl.progress(t.keyframes[0].time/t.totalSeconds),t.updateDuration(),t.updateTotalSeconds()}})},1)},fancyTimeFormat:function(t){var e=~~(t/3600),i=~~(t%3600/60),o=t%60,a="";return e>0&&(a+=e+":"+(i<10?"0":"")),a+=i+":"+(o<10?"0":""),a+=""+o},playAnimation:function(){!0===this.animationComplete&&(this.tl.restart(),this.animationComplete=!1),this.animationPlaying=!0,this.tl.play()},pauseAnimation:function(){this.animationPlaying=!1,this.tl.pause()},removeKeyframe:function(t){this.keyframes.splice(t,1),this.updateTimeline()},resizeLayout:function(){a()(".timeline").css({width:a()(window).width()-300}),a()(".sidebar").css({height:a()(window).height()-a()("header").height()})},setLayout:function(){var t=this;a()(window).resize(function(){t.resizeLayout()}),this.resizeLayout(),a()(".timeline").mousewheel(function(e){1===e.deltaY?(t.secondToPixels+=1,t.secondToPixels%20==0&&(t.incrementTime-=1)):-1===e.deltaY&&(t.secondToPixels-=1,t.secondToPixels%20==0&&(t.incrementTime+=1))})},showEmbedCode:function(){!1===this.showCode?this.showCode=!0:this.showCode=!1},sortKeyframes:function(){this.keyframes.sort(function(t,e){return parseFloat(t.time)-parseFloat(e.time)})},stopAnimation:function(){this.animationComplete=!1,this.animationPlaying=!1,this.tl.restart(),this.tl.stop(),this.updateSlider()},updateDuration:function(){var t=this;this.keyframes.forEach(function(e,i){t.keyframes[i].duration=0===i?t.keyframes[i].time:t.keyframes[i].time-t.keyframes[i-1].time})},updateSlider:function(){this.frame=Math.round(this.tl.progress()*(this.totalSeconds*this.secondToPixels)),this.height=parseInt(document.getElementById("demo").style.height,10),this.left=parseInt(document.getElementById("demo").style.left,10),this.opacity=Math.round(10*document.getElementById("demo").style.opacity)/10,this.top=parseInt(document.getElementById("demo").style.top,10),this.width=parseInt(document.getElementById("demo").style.width,10),this.tl.progress()*(this.totalSeconds*this.secondToPixels)==0&&this.tl.progress(this.keyframes[0].time/this.totalSeconds),a()(".color-bar").css("left",Math.round(this.tl.progress()*(this.totalSeconds*this.secondToPixels)))},updateTimeline:function(t){var e=this;this.updateDuration(),this.animationComplete=!1,this.animationPlaying=!1,void 0!==t&&this.tl.progress(this.frame/(e.totalSeconds*e.secondToPixels)),this.tl.pause(),this.tl=void 0,this.tl=new TimelineLite;var i=this.keyframes.length;this.keyframes.forEach(function(t,o){o===i-1?e.tl.to(a()("#demo"),t.duration,{backgroundColor:t.backgroundColor,height:t.height,left:t.left,opacity:t.opacity,top:t.top,width:t.width+"px",onComplete:function(){e.tl.restart()}}):e.tl.to(a()("#demo"),t.duration,{backgroundColor:t.backgroundColor,height:t.height,left:t.left,opacity:t.opacity,top:t.top,width:t.width+"px"})}),this.updateTotalSeconds(),this.tl.eventCallback("onUpdate",this.updateSlider.bind(this)),this.tl.pause()},keyframeProperties:function(t){return a.a.map(this.keyframes[t],function(t,e){if("duration"!==e)return e})},updateTotalSeconds:function(){this.totalSeconds=this.keyframes[this.keyframes.length-1].time}}},mounted:function(){var t=this;a()(".color-bar").draggable({axis:"x",containment:".timeline",grid:[1],drag:function(e,i){t.tl.progress(i.position.left/(t.totalSeconds*t.secondToPixels))}}),this.attachKeyframeDrag(),this.tl=new TimelineLite,this.updateTimeline(),this.setLayout()}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(5),a=i(4),n=i.n(a);o.a.config.productionTip=!1,new o.a({el:"#app",template:"<App/>",components:{App:n.a}})},function(t,e){},,,,,,,,,,function(t,e,i){var o=i(3)(i(7),i(20),null,null,null);t.exports=o.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("header",{staticClass:"editor-header"},[t._m(0),t._v(" "),i("div",{staticClass:"action-buttons text-center header-padding"},[t.animationPlaying?t._e():i("span",{staticClass:"glyphicon glyphicon-play action-button",on:{click:function(e){t.playAnimation()}}}),t._v(" "),t.animationPlaying?i("span",{staticClass:"glyphicon glyphicon-pause action-button",on:{click:function(e){t.pauseAnimation()}}}):t._e(),t._v(" "),i("span",{staticClass:"glyphicon glyphicon-stop action-button",on:{click:function(e){t.stopAnimation()}}})]),t._v(" "),i("div",{staticClass:"code-section header-padding text-right"},[i("ul",{staticClass:"site-nav list-inline"},[i("li",[i("span",{staticClass:"code",on:{click:function(e){t.showEmbedCode()}}},[t._v("Code")]),t._v(" "),i("div",{staticClass:"relative"},[t.showCode?i("div",{staticClass:"embed-code"},[t._v("\n              var tl = new TimelineLite();\n                  \n              "),t._l(t.keyframes,function(e,o){return 0!==o?i("p",[t._v("\n              tl.to($('#el'), "+t._s(e.duration)+', {\n                  backgroundColor: "'+t._s(e.backgroundColor)+'",\n                  left: '+t._s(e.left)+",\n                  opacity: "+t._s(e.opacity)+",\n                  top: "+t._s(e.top)+',\n                  width: "'+t._s(e.width+"px")+'"\n              });\n              ')]):t._e()})],2):t._e()])])])])]),t._v(" "),i("div",{staticClass:"wrapper"},[i("aside",{staticClass:"sidebar"},[i("div",{staticClass:"form-group"},[i("label",[t._v("Properties:")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.properties,expression:"properties"}],staticClass:"form-control",on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.properties=e.target.multiple?i:i[0]}}},[i("option",[t._v("Background Color")]),t._v(" "),i("option",[t._v("Height")]),t._v(" "),i("option",[t._v("Left")]),t._v(" "),i("option",[t._v("Opacity")]),t._v(" "),i("option",[t._v("Top")]),t._v(" "),i("option",[t._v("Width")])])]),t._v(" "),i("div",{staticClass:"form-group"},[i("button",{staticClass:"btn btn-success btn-block add-property-btn",attrs:{type:"button"},on:{click:function(e){t.addProperty()}}},[t._v("Add Property")])]),t._v(" "),i("div",{staticClass:"form-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.frame,expression:"frame"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.frame},on:{keyup:function(e){t.updateTimeline(t.frame)},input:function(e){e.target.composing||(t.frame=e.target.value)},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",[t._v("Background Color:")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.backgroundColor.value,expression:"backgroundColor.value"}],staticClass:"form-control",attrs:{type:"color"},domProps:{value:t.backgroundColor.value},on:{change:function(e){t.addKeyframe()},input:function(e){e.target.composing||(t.backgroundColor.value=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",[t._v("Height:")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.height,expression:"height"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.height},on:{keyup:function(e){t.addKeyframe()},input:function(e){e.target.composing||(t.height=e.target.value)},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",[t._v("Left:")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.left,expression:"left"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.left},on:{keyup:function(e){t.addKeyframe()},input:function(e){e.target.composing||(t.left=e.target.value)},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",[t._v("Opacity:")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.opacity,expression:"opacity"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"1"},domProps:{value:t.opacity},on:{keyup:function(e){t.addKeyframe()},input:function(e){e.target.composing||(t.opacity=e.target.value)},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",[t._v("Top:")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.top,expression:"top"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.top},on:{keyup:function(e){t.addKeyframe()},input:function(e){e.target.composing||(t.top=e.target.value)},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",[t._v("Width:")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.width,expression:"width"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.width},on:{keyup:function(e){t.addKeyframe()},input:function(e){e.target.composing||(t.width=e.target.value)},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",[t._v("Keyframes:")]),t._v(" "),t._l(t.keyframes,function(e,o){return i("div",[t._v("\n              "+t._s(e.duration)+" "),i("span",{staticClass:"glyphicon glyphicon-remove-circle",on:{click:function(e){t.removeKeyframe(o)}}})])})],2)]),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"timeline"},[i("div",{staticClass:"timeline-inner"},[t._l(t.keyframes,function(e,o){return i("div",{staticClass:"keyframe-bar",style:{left:e.time*t.secondToPixels+"px"}},[i("div",{staticClass:"keyframe-diamond"},t._l(t.keyframeProperties(o),function(e){return i("div",[t._v("♦")])}))])}),t._v(" "),i("div",{staticClass:"color-bar"}),t._v(" "),i("div",{staticClass:"timeline-bars"},[t._l(100,function(e){return i("div",{staticClass:"timeline-frame",style:{left:(e-1)*t.secondToPixels+"px"}},[(e-1)%t.incrementTime==0?i("div",{staticClass:"timeline-frame-bar"}):t._e()])}),t._v(" "),t._l(100,function(e){return i("div",{style:{left:e*t.secondToPixels+"px"}},[(e-1)%t.incrementTime==0?i("div",{staticClass:"timeline-frame-bar"}):t._e()])}),t._v(" "),t._l(100,function(e){return i("span",{staticClass:"timeline-time",style:{left:(e-1)*t.secondToPixels+"px"}},[(e-1)%t.incrementTime==0?i("div",[t._v("\n                              "+t._s(t.fancyTimeFormat(e-1))+"\n                          ")]):t._e()])})],2)],2)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"logo-section"},[i("div",{staticClass:"logo"},[t._v("\n        GSAP Editor\n      ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main"},[i("div",{attrs:{id:"demo"}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Editor")],1)},staticRenderFns:[]}}],[8]);
//# sourceMappingURL=app.a7390e8d786bdc7aed72.js.map