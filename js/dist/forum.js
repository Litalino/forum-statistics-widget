module.exports=function(t){var r={};function e(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}return e.m=t,e.c=r,e.d=function(t,r,o){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var n in t)e.d(o,n,function(r){return t[r]}.bind(null,n));return o},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=9)}([function(t,r,e){"use strict";function o(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r}e.d(r,"a",(function(){return o}))},function(t,r){t.exports=flarum.core.compat["utils/formatNumber"]},,function(t,r){t.exports=flarum.core.compat.extend},function(t,r){t.exports=flarum.core.compat["components/IndexPage"]},function(t,r){t.exports=flarum.core.compat.Component},function(t,r){t.exports=flarum.core.compat["helpers/username"]},,,function(t,r,e){"use strict";e.r(r);var o=e(3),n=e(4),u=e.n(n),a=e(0),s=e(5),i=e.n(s),p=e(6),c=e.n(p),f=e(1),l=e.n(f),d="fof-forum-statistics-widget.forum.navbar.",b=function(t){function r(){return t.apply(this,arguments)||this}return Object(a.a)(r,t),r.prototype.view=function(){var t=l()(app.forum.attribute("discussionsCount")),r=l()(app.forum.attribute("postsCount")),e=l()(app.forum.attribute("usersCount")),o={displayName:m.prop(app.forum.attribute("lastUser")),username:m.prop(app.forum.attribute("lastUser"))};return m("div",{class:"ForumStatistics containerNarrow"},m("div",{class:"row"},m("h2",null,m("i",{class:"fas fa-chart-bar"})," ",app.translator.trans(d+"widget_title")),m("div",null,m("ul",{id:"ForumStatisticsList"},m("li",null,app.translator.trans(d+"discussions_count",{discussionsCount:t})),m("li",null,app.translator.trans(d+"posts_count",{postsCount:r})),m("li",null,app.translator.trans(d+"users_count",{usersCount:e})),m("li",null,app.translator.trans(d+"latest_member"),m("a",{href:app.route.user(o),config:m.route},m("strong",null," ",c()(o))))))))},r}(i.a);app.initializers.add("fof/forum-statistics-widget",(function(){Object(o.extend)(u.a.prototype,"sidebarItems",(function(t){t.add("forumStatisticsWidget",b.component(),app.forum.attribute("fof-forum-statistics-widget.widget_order"))}))}))}]);
//# sourceMappingURL=forum.js.map