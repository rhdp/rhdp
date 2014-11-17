!function(t){"use strict";function n(t){var n=t.css("transition-duration")||t.css("-webkit-transition-duration")||t.css("-moz-transition-duration")||t.css("-o-transition-duration")||t.css("-ms-transition-duration")||0,e=t.css("transition-delay")||t.css("-webkit-transition-delay")||t.css("-moz-transition-delay")||t.css("-o-transition-delay")||t.css("-ms-transition-delay")||0;return 1e3*(parseFloat(n)+parseFloat(e))}function e(){if(t(document.body).height()<=t(window).height())return 0;var n,e,o=document.createElement("div"),i=document.createElement("div");return o.style.visibility="hidden",o.style.width="100px",document.body.appendChild(o),n=o.offsetWidth,o.style.overflow="scroll",i.style.width="100%",o.appendChild(i),e=i.offsetWidth,o.parentNode.removeChild(o),n-e}function o(){var n=t(document.body),o=parseInt(n.css("padding-right"),10)+e();n.css("padding-right",o+"px"),t("html, body").addClass(l+"_lock")}function i(){var n=t(document.body),o=parseInt(n.css("padding-right"),10)-e();n.css("padding-right",o+"px"),t("html, body").removeClass(l+"_lock")}function a(t){var n,e,o,i,a={};for(t=t.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,","),n=t.split(","),i=0,e=n.length;e>i;i++)n[i]=n[i].split(":"),o=n[i][1],("string"==typeof o||o instanceof String)&&(o="true"===o||("false"===o?!1:o)),("string"==typeof o||o instanceof String)&&(o=isNaN(o)?o:+o),a[n[i][0]]=o;return a}function s(e,o){var i,a,s,d=this;d.settings=t.extend({},u,o),d.$body=t(document.body),d.$bg=t("."+l+"-bg"),d.$closeButton=t("<a href='#'>").addClass(l+"-close"),d.$overlay=t("<div>").addClass(l+"-overlay"),d.$modal=e,d.$modal.addClass(l),d.$modal.css("visibility","visible"),d.$modal.append(d.$closeButton),d.$overlay.append(d.$modal),d.$body.append(d.$overlay),d.$confirmButton=d.$modal.find("."+l+"-confirm"),d.$cancelButton=d.$modal.find("."+l+"-cancel"),i=n(d.$overlay),a=n(d.$modal),s=n(d.$bg),d.td=a>i?a:i,d.td=s>d.td?s:d.td,d.$closeButton.bind("click."+l,function(t){t.preventDefault(),d.close()}),d.$cancelButton.bind("click."+l,function(t){t.preventDefault(),d.$modal.trigger("cancel"),d.settings.closeOnCancel&&d.close()}),d.$confirmButton.bind("click."+l,function(t){t.preventDefault(),d.$modal.trigger("confirm"),d.settings.closeOnConfirm&&d.close()}),t(document).bind("keyup."+l,function(t){27===t.keyCode&&d.settings.closeOnEscape&&d.close()}),d.$overlay.bind("click."+l,function(n){var e=t(n.target);e.hasClass(l+"-overlay")&&d.settings.closeOnAnyClick&&d.close()}),d.index=t[l].lookup.push(d)-1,d.busy=!1}function d(n,e){var o,i,a=location.hash.replace("#","");if("undefined"==typeof e&&(e=!0),a){try{i=t("[data-"+l+"-id="+a.replace(new RegExp("/","g"),"\\/")+"]")}catch(s){}i&&i.length&&(o=t[l].lookup[i.data(l)],o&&o.settings.hashTracking&&o.open())}else e&&c&&!c.busy&&c.settings.hashTracking&&c.close()}var c,r,l="remodal",u={hashTracking:!0,closeOnConfirm:!0,closeOnCancel:!0,closeOnEscape:!0,closeOnAnyClick:!0};s.prototype.open=function(){if(!this.busy){var n,e=this;e.busy=!0,e.$modal.trigger("open"),n=e.$modal.attr("data-"+l+"-id"),n&&e.settings.hashTracking&&(r=t(window).scrollTop(),location.hash=n),c&&c!==e&&(c.$overlay.hide(),c.$body.removeClass(l+"_active")),c=e,o(),e.$overlay.show(),setTimeout(function(){e.$body.addClass(l+"_active"),setTimeout(function(){e.busy=!1,e.$modal.trigger("opened")},e.td+50)},25)}},s.prototype.close=function(){if(!this.busy){this.busy=!0,this.$modal.trigger("close");var n=this;n.settings.hashTracking&&n.$modal.attr("data-"+l+"-id")===location.hash.substr(1)&&(location.hash="",t(window).scrollTop(r)),n.$body.removeClass(l+"_active"),setTimeout(function(){n.$overlay.hide(),i(),n.busy=!1,n.$modal.trigger("closed")},n.td+50)}},t[l]={lookup:[]},t.fn[l]=function(n){var e,o;return this.each(function(i,a){o=t(a),null==o.data(l)&&(e=new s(o,n),o.data(l,e.index),e.settings.hashTracking&&o.attr("data-"+l+"-id")===location.hash.substr(1)&&e.open())}),e},t(document).ready(function(){t(document).on("click","[data-"+l+"-target]",function(n){n.preventDefault();var e=n.currentTarget,o=e.getAttribute("data-"+l+"-target"),i=t("[data-"+l+"-id="+o+"]");t[l].lookup[i.data(l)].open()}),t(document).find("."+l).each(function(n,e){var o=t(e),i=o.data(l+"-options");i?("string"==typeof i||i instanceof String)&&(i=a(i)):i={},o[l](i)})}),t(window).bind("hashchange."+l,d)}(window.jQuery||window.Zepto);