"use strict";(self.webpackChunkoceanpay_app_api=self.webpackChunkoceanpay_app_api||[]).push([[85],{7979:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var a=n(7294),r=n(6010),c=n(1237),l=n(3905),o=n(7933),i=n(571),s=n(9732),m="mdxPageWrapper_eQvw";var u=function(e){var t=e.content,n=t.frontMatter,u=t.metadata,d=n.title,f=n.description,v=n.wrapperClassName,p=n.hide_table_of_contents,E=u.permalink;return a.createElement(c.Z,{title:d,description:f,permalink:E,wrapperClassName:null!=v?v:s.kM.wrapper.mdxPages,pageClassName:s.kM.page.mdxPage},a.createElement("main",{className:"container container--fluid margin-vert--lg"},a.createElement("div",{className:(0,r.Z)("row",m)},a.createElement("div",{className:(0,r.Z)("col",!p&&"col--8")},a.createElement(l.Zo,{components:o.Z},a.createElement(t,null))),!p&&t.toc&&a.createElement("div",{className:"col col--2"},a.createElement(i.Z,{toc:t.toc})))))}},571:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),r=n(6010);var c=function(e,t,n){var r=(0,a.useState)(void 0),c=r[0],l=r[1];(0,a.useEffect)((function(){function a(){var a=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(a)for(var r=0,o=!1,i=document.getElementsByClassName(e);r<i.length&&!o;){var s=i[r],m=s.href,u=decodeURIComponent(m.substring(m.indexOf("#")+1));a.id===u&&(c&&c.classList.remove(t),s.classList.add(t),l(s),o=!0),r+=1}}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}))},l="tableOfContents_vrFS",o="table-of-contents__link";function i(e){var t=e.toc,n=e.isChild;return t.length?a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:o,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(i,{isChild:!0,toc:e.children}))}))):null}var s=function(e){var t=e.toc;return c(o,"table-of-contents__link--active",100),a.createElement("div",{className:(0,r.Z)(l,"thin-scrollbar")},a.createElement(i,{toc:t}))}}}]);