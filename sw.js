// Glow service worker v3.1: only used to show alerts. No caching, so updates always load fresh.
var VERSION="glow-3.1";
self.addEventListener("install",function(){self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim())});
self.addEventListener("notificationclick",function(e){e.notification.close();e.waitUntil(self.clients.matchAll({type:"window"}).then(function(cs){for(var i=0;i<cs.length;i++){if("focus" in cs[i])return cs[i].focus()}return self.clients.openWindow("./")}))});
