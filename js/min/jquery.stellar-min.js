!function($,t,e,i){function s(t,e){this.element=t,this.options=$.extend({},n,e),this._defaults=n,this._name=o,this.init()}var o="stellar",n={scrollProperty:"scroll",positionProperty:"position",horizontalScrolling:!0,verticalScrolling:!0,horizontalOffset:0,verticalOffset:0,responsive:!1,parallaxBackgrounds:!0,parallaxElements:!0,hideDistantElements:!0,hideElement:function(t){t.hide()},showElement:function(t){t.show()}},r={scroll:{getLeft:function(t){return t.scrollLeft()},setLeft:function(t,e){t.scrollLeft(e)},getTop:function(t){return t.scrollTop()},setTop:function(t,e){t.scrollTop(e)}},position:{getLeft:function(t){return-1*parseInt(t.css("left"),10)},getTop:function(t){return-1*parseInt(t.css("top"),10)}},margin:{getLeft:function(t){return-1*parseInt(t.css("margin-left"),10)},getTop:function(t){return-1*parseInt(t.css("margin-top"),10)}},transform:{getLeft:function(t){var e=getComputedStyle(t[0])[f];return"none"!==e?-1*parseInt(e.match(/(-?[0-9]+)/g)[4],10):0},getTop:function(t){var e=getComputedStyle(t[0])[f];return"none"!==e?-1*parseInt(e.match(/(-?[0-9]+)/g)[5],10):0}}},a={position:{setLeft:function(t,e){t.css("left",e)},setTop:function(t,e){t.css("top",e)}},transform:{setPosition:function(t,e,i,s,o){t[0].style[f]="translate3d("+(e-i)+"px, "+(s-o)+"px, 0)"}}},l=function(){var t=/^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,e=$("script")[0].style,i="",s;for(s in e)if(t.test(s)){i=s.match(t)[0];break}return"WebkitOpacity"in e&&(i="Webkit"),"KhtmlOpacity"in e&&(i="Khtml"),function(t){return i+(i.length>0?t.charAt(0).toUpperCase()+t.slice(1):t)}}(),f=l("transform"),c=$("<div />",{style:"background:#fff"}).css("background-position-x")!==i,h=c?function(t,e,i){t.css({"background-position-x":e,"background-position-y":i})}:function(t,e,i){t.css("background-position",e+" "+i)},p=c?function(t){return[t.css("background-position-x"),t.css("background-position-y")]}:function(t){return t.css("background-position").split(" ")},d=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame||function(t){setTimeout(t,1e3/60)};s.prototype={init:function(){this.options.name=o+"_"+Math.floor(1e9*Math.random()),this._defineElements(),this._defineGetters(),this._defineSetters(),this._handleWindowLoadAndResize(),this._detectViewport(),this.refresh({firstLoad:!0}),"scroll"===this.options.scrollProperty?this._handleScrollEvent():this._startAnimationLoop()},_defineElements:function(){this.element===e.body&&(this.element=t),this.$scrollElement=$(this.element),this.$element=this.element===t?$("body"):this.$scrollElement,this.$viewportElement=this.options.viewportElement!==i?$(this.options.viewportElement):this.$scrollElement[0]===t||"scroll"===this.options.scrollProperty?this.$scrollElement:this.$scrollElement.parent()},_defineGetters:function(){var t=this,e=r[t.options.scrollProperty];this._getScrollLeft=function(){return e.getLeft(t.$scrollElement)},this._getScrollTop=function(){return e.getTop(t.$scrollElement)}},_defineSetters:function(){var t=this,e=r[t.options.scrollProperty],i=a[t.options.positionProperty],s=e.setLeft,o=e.setTop;this._setScrollLeft="function"==typeof s?function(e){s(t.$scrollElement,e)}:$.noop,this._setScrollTop="function"==typeof o?function(e){o(t.$scrollElement,e)}:$.noop,this._setPosition=i.setPosition||function(e,s,o,n,r){t.options.horizontalScrolling&&i.setLeft(e,s,o),t.options.verticalScrolling&&i.setTop(e,n,r)}},_handleWindowLoadAndResize:function(){var e=this,i=$(t);e.options.responsive&&i.bind("load."+this.name,function(){e.refresh()}),i.bind("resize."+this.name,function(){e._detectViewport(),e.options.responsive&&e.refresh()})},refresh:function(e){var i=this,s=i._getScrollLeft(),o=i._getScrollTop();e&&e.firstLoad||this._reset(),this._setScrollLeft(0),this._setScrollTop(0),this._setOffsets(),this._findParticles(),this._findBackgrounds(),e&&e.firstLoad&&/WebKit/.test(navigator.userAgent)&&$(t).load(function(){var t=i._getScrollLeft(),e=i._getScrollTop();i._setScrollLeft(t+1),i._setScrollTop(e+1),i._setScrollLeft(t),i._setScrollTop(e)}),this._setScrollLeft(s),this._setScrollTop(o)},_detectViewport:function(){var t=this.$viewportElement.offset(),e=null!==t&&t!==i;this.viewportWidth=this.$viewportElement.width(),this.viewportHeight=this.$viewportElement.height(),this.viewportOffsetTop=e?t.top:0,this.viewportOffsetLeft=e?t.left:0},_findParticles:function(){var t=this,e=this._getScrollLeft(),s=this._getScrollTop();if(this.particles!==i)for(var o=this.particles.length-1;o>=0;o--)this.particles[o].$element.data("stellar-elementIsActive",i);this.particles=[],this.options.parallaxElements&&this.$element.find("[data-stellar-ratio]").each(function(e){var s=$(this),o,n,r,a,l,f,c,h,p,d=0,u=0,g=0,m=0;if(s.data("stellar-elementIsActive")){if(s.data("stellar-elementIsActive")!==this)return}else s.data("stellar-elementIsActive",this);t.options.showElement(s),s.data("stellar-startingLeft")?(s.css("left",s.data("stellar-startingLeft")),s.css("top",s.data("stellar-startingTop"))):(s.data("stellar-startingLeft",s.css("left")),s.data("stellar-startingTop",s.css("top"))),r=s.position().left,a=s.position().top,l="auto"===s.css("margin-left")?0:parseInt(s.css("margin-left"),10),f="auto"===s.css("margin-top")?0:parseInt(s.css("margin-top"),10),h=s.offset().left-l,p=s.offset().top-f,s.parents().each(function(){var t=$(this);return t.data("stellar-offset-parent")===!0?(d=g,u=m,c=t,!1):(g+=t.position().left,void(m+=t.position().top))}),o=s.data("stellar-horizontal-offset")!==i?s.data("stellar-horizontal-offset"):c!==i&&c.data("stellar-horizontal-offset")!==i?c.data("stellar-horizontal-offset"):t.horizontalOffset,n=s.data("stellar-vertical-offset")!==i?s.data("stellar-vertical-offset"):c!==i&&c.data("stellar-vertical-offset")!==i?c.data("stellar-vertical-offset"):t.verticalOffset,t.particles.push({$element:s,$offsetParent:c,isFixed:"fixed"===s.css("position"),horizontalOffset:o,verticalOffset:n,startingPositionLeft:r,startingPositionTop:a,startingOffsetLeft:h,startingOffsetTop:p,parentOffsetLeft:d,parentOffsetTop:u,stellarRatio:s.data("stellar-ratio")!==i?s.data("stellar-ratio"):1,width:s.outerWidth(!0),height:s.outerHeight(!0),isHidden:!1})})},_findBackgrounds:function(){var t=this,e=this._getScrollLeft(),s=this._getScrollTop(),o;this.backgrounds=[],this.options.parallaxBackgrounds&&(o=this.$element.find("[data-stellar-background-ratio]"),this.$element.data("stellar-background-ratio")&&(o=o.add(this.$element)),o.each(function(){var o=$(this),n=p(o),r,a,l,f,c,d,u,g,m,v=0,L=0,_=0,O=0;if(o.data("stellar-backgroundIsActive")){if(o.data("stellar-backgroundIsActive")!==this)return}else o.data("stellar-backgroundIsActive",this);o.data("stellar-backgroundStartingLeft")?h(o,o.data("stellar-backgroundStartingLeft"),o.data("stellar-backgroundStartingTop")):(o.data("stellar-backgroundStartingLeft",n[0]),o.data("stellar-backgroundStartingTop",n[1])),c="auto"===o.css("margin-left")?0:parseInt(o.css("margin-left"),10),d="auto"===o.css("margin-top")?0:parseInt(o.css("margin-top"),10),u=o.offset().left-c-e,g=o.offset().top-d-s,o.parents().each(function(){var t=$(this);return t.data("stellar-offset-parent")===!0?(v=_,L=O,m=t,!1):(_+=t.position().left,void(O+=t.position().top))}),r=o.data("stellar-horizontal-offset")!==i?o.data("stellar-horizontal-offset"):m!==i&&m.data("stellar-horizontal-offset")!==i?m.data("stellar-horizontal-offset"):t.horizontalOffset,a=o.data("stellar-vertical-offset")!==i?o.data("stellar-vertical-offset"):m!==i&&m.data("stellar-vertical-offset")!==i?m.data("stellar-vertical-offset"):t.verticalOffset,t.backgrounds.push({$element:o,$offsetParent:m,isFixed:"fixed"===o.css("background-attachment"),horizontalOffset:r,verticalOffset:a,startingValueLeft:n[0],startingValueTop:n[1],startingBackgroundPositionLeft:isNaN(parseInt(n[0],10))?0:parseInt(n[0],10),startingBackgroundPositionTop:isNaN(parseInt(n[1],10))?0:parseInt(n[1],10),startingPositionLeft:o.position().left,startingPositionTop:o.position().top,startingOffsetLeft:u,startingOffsetTop:g,parentOffsetLeft:v,parentOffsetTop:L,stellarRatio:o.data("stellar-background-ratio")===i?1:o.data("stellar-background-ratio")})}))},_reset:function(){var t,e,i,s,o;for(o=this.particles.length-1;o>=0;o--)t=this.particles[o],e=t.$element.data("stellar-startingLeft"),i=t.$element.data("stellar-startingTop"),this._setPosition(t.$element,e,e,i,i),this.options.showElement(t.$element),t.$element.data("stellar-startingLeft",null).data("stellar-elementIsActive",null).data("stellar-backgroundIsActive",null);for(o=this.backgrounds.length-1;o>=0;o--)s=this.backgrounds[o],s.$element.data("stellar-backgroundStartingLeft",null).data("stellar-backgroundStartingTop",null),h(s.$element,s.startingValueLeft,s.startingValueTop)},destroy:function(){this._reset(),this.$scrollElement.unbind("resize."+this.name).unbind("scroll."+this.name),this._animationLoop=$.noop,$(t).unbind("load."+this.name).unbind("resize."+this.name)},_setOffsets:function(){var e=this,i=$(t);i.unbind("resize.horizontal-"+this.name).unbind("resize.vertical-"+this.name),"function"==typeof this.options.horizontalOffset?(this.horizontalOffset=this.options.horizontalOffset(),i.bind("resize.horizontal-"+this.name,function(){e.horizontalOffset=e.options.horizontalOffset()})):this.horizontalOffset=this.options.horizontalOffset,"function"==typeof this.options.verticalOffset?(this.verticalOffset=this.options.verticalOffset(),i.bind("resize.vertical-"+this.name,function(){e.verticalOffset=e.options.verticalOffset()})):this.verticalOffset=this.options.verticalOffset},_repositionElements:function(){var t=this._getScrollLeft(),e=this._getScrollTop(),i,s,o,n,r,a,l,f=!0,c=!0,p,d,u,g,m;if(this.currentScrollLeft!==t||this.currentScrollTop!==e||this.currentWidth!==this.viewportWidth||this.currentHeight!==this.viewportHeight){for(this.currentScrollLeft=t,this.currentScrollTop=e,this.currentWidth=this.viewportWidth,this.currentHeight=this.viewportHeight,m=this.particles.length-1;m>=0;m--)o=this.particles[m],n=o.isFixed?1:0,this.options.horizontalScrolling?(p=(t+o.horizontalOffset+this.viewportOffsetLeft+o.startingPositionLeft-o.startingOffsetLeft+o.parentOffsetLeft)*-(o.stellarRatio+n-1)+o.startingPositionLeft,u=p-o.startingPositionLeft+o.startingOffsetLeft):(p=o.startingPositionLeft,u=o.startingOffsetLeft),this.options.verticalScrolling?(d=(e+o.verticalOffset+this.viewportOffsetTop+o.startingPositionTop-o.startingOffsetTop+o.parentOffsetTop)*-(o.stellarRatio+n-1)+o.startingPositionTop,g=d-o.startingPositionTop+o.startingOffsetTop):(d=o.startingPositionTop,g=o.startingOffsetTop),this.options.hideDistantElements&&(c=!this.options.horizontalScrolling||u+o.width>(o.isFixed?0:t)&&u<(o.isFixed?0:t)+this.viewportWidth+this.viewportOffsetLeft,f=!this.options.verticalScrolling||g+o.height>(o.isFixed?0:e)&&g<(o.isFixed?0:e)+this.viewportHeight+this.viewportOffsetTop),c&&f?(o.isHidden&&(this.options.showElement(o.$element),o.isHidden=!1),this._setPosition(o.$element,p,o.startingPositionLeft,d,o.startingPositionTop)):o.isHidden||(this.options.hideElement(o.$element),o.isHidden=!0);for(m=this.backgrounds.length-1;m>=0;m--)r=this.backgrounds[m],n=r.isFixed?0:1,a=this.options.horizontalScrolling?(t+r.horizontalOffset-this.viewportOffsetLeft-r.startingOffsetLeft+r.parentOffsetLeft-r.startingBackgroundPositionLeft)*(n-r.stellarRatio)+"px":r.startingValueLeft,l=this.options.verticalScrolling?(e+r.verticalOffset-this.viewportOffsetTop-r.startingOffsetTop+r.parentOffsetTop-r.startingBackgroundPositionTop)*(n-r.stellarRatio)+"px":r.startingValueTop,h(r.$element,a,l)}},_handleScrollEvent:function(){var t=this,e=!1,i=function(){t._repositionElements(),e=!1},s=function(){e||(d(i),e=!0)};this.$scrollElement.bind("scroll."+this.name,s),s()},_startAnimationLoop:function(){var t=this;this._animationLoop=function(){d(t._animationLoop),t._repositionElements()},this._animationLoop()}},$.fn[o]=function(t){var e=arguments;return t===i||"object"==typeof t?this.each(function(){$.data(this,"plugin_"+o)||$.data(this,"plugin_"+o,new s(this,t))}):"string"==typeof t&&"_"!==t[0]&&"init"!==t?this.each(function(){var i=$.data(this,"plugin_"+o);i instanceof s&&"function"==typeof i[t]&&i[t].apply(i,Array.prototype.slice.call(e,1)),"destroy"===t&&$.data(this,"plugin_"+o,null)}):void 0},$[o]=function(e){var i=$(t);return i.stellar.apply(i,Array.prototype.slice.call(arguments,0))},$[o].scrollProperty=r,$[o].positionProperty=a,t.Stellar=s}(jQuery,this,document);