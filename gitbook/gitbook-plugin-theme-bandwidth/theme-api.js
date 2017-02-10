require(["gitbook","jquery"],function(e,n){function t(){return"btn-"+v++}function a(e,n,t,a){var o=e.children(n).length;0>t&&(t=Math.max(0,o+1+t)),e.append(a),o>t&&e.children(n).eq(t).before(e.children(n).last())}function o(e){e.preventDefault()}function i(e){return e=n.extend({label:"",icon:"",text:"",position:"left",className:"",onClick:o,dropdown:null,index:null,id:t()},e||{}),m.push(e),s(e),e.id}function s(e){var t,o=n(".api-code-top"),i=n("<a>",{"class":"btn",text:e.text?" "+e.text:"","aria-label":e.label,href:""});i.click(e.onClick),e.icon&&n("<i>",{"class":e.icon}).prependTo(i),i.addClass(e.className),t=i,t.addClass("js-langbar-action"),a(o,".btn",e.index,t)}function l(){n(".js-langbar-action").remove(),m.forEach(s)}function c(e){m=n.grep(m,function(n){return-1==e.indexOf(n.id)}),l()}function r(n){f=e.storage.get("themeApi",{split:n.split,currentLang:null})}function d(){e.storage.set("themeApi",f),h()}function h(){n(".book").toggleClass("two-columns",f.split),u=n(".api-method-sample"),u.each(function(){var e=!(n(this).data("lang")==f.currentLang);n(this).toggleClass("hidden",e)})}function g(){c(b),b=[],u=n(".api-method-sample");var e=[],t=!1;u.each(function(){var a,o,i=!1,s=n(this).data("lang"),l=n(this).data("name");s==f.currentLang&&(t=!0,i=!0),a=n.grep(e,function(e){return e.name==l}),o=!!a.length,o||e.push({name:l,lang:s,"default":i})});var a=0;n.each(e,function(o,s){var l,c,r=s["default"]||!t&&o==e.length-1;c=0===a?"lang-switcher first-code-lang "+(r?" active ":""):a===e.length-1?"lang-switcher last-code-lang "+(r?" active ":""):"lang-switcher"+(r?" active ":""),l=i({text:s.name,position:"left",className:c,index:a,onClick:function(e){f.currentLang=s.lang,d(),n(".btn.lang-switcher.active").removeClass("active"),n(e.currentTarget).addClass("active")}}),b.push(l),a+=1,r&&(f.currentLang=s.lang)})}var u,f,b=[],p=[{config:"light",text:"Light",id:0},{config:"dark",text:"Dark",id:3}],m=[],v=0;e.events.bind("start",function(n,t){var a=t["theme-bandwidth"];e.fontsettings.setThemes(p),e.fontsettings.setTheme(a.theme),r(a)}),e.events.on("page.change",function(){g(),h(),"shown"!=localStorage.getItem("popState")?(n("#banner").show(),n(".head").has("#banner").siblings(".book-body, .book-summary").css("height","calc(100% - 120px)"),n(".head").has("#banner").siblings().children().find(".book-header").css("top","200px"),localStorage.setItem("popState","shown")):n(".book-summary, .book-body").removeClass("mobile"),n("#bannerClose").click(function(e){n(".head").has("#banner").siblings(".book-body, .book-summary").css("height","calc(100% - 70px)"),n(".head").has("#banner").siblings().children().find(".book-header").css("top","70px"),n(".book-summary, .book-body").removeClass("mobile"),n("#banner").hide()})}),e.events.on("comment.toggled",function(n,t,a){if(t.parents(".api-method-definition").length){var o=e.state.$book.find(".page-wrapper");o.toggleClass("comments-open-from-definition",a&&f.split)}})});
