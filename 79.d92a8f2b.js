(window.webpackJsonp=window.webpackJsonp||[]).push([[79,82],{135:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(137),c=n(143),l=n(25),i=n(158),s=n(2),u=n(6),p=n(139),m=n(144),d=n(180),y=n(141),f=n(177),h=n(178),b=n(179),g=n(176),v=n(148),k=n(160),j=n(73),O=n.n(j);var E=function e(t,n){return"link"===t.type?Object(d.a)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))};function N(e){var t,n,o,c=e.item,l=e.onItemClick,i=e.collapsible,m=e.activePath,d=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),y=c.items,f=c.label,h=E(c,m),b=(n=h,o=Object(a.useRef)(n),Object(a.useEffect)((function(){o.current=n}),[n]),o.current),g=Object(a.useState)((function(){return!!i&&(!h&&c.collapsed)})),v=g[0],k=g[1];Object(a.useEffect)((function(){h&&!b&&v&&k(!1)}),[h,b,v]);var j=Object(a.useCallback)((function(e){e.preventDefault(),k((function(e){return!e}))}),[k]);return 0===y.length?null:r.a.createElement("li",{className:Object(p.a)("menu__list-item",{"menu__list-item--collapsed":v}),key:f},r.a.createElement("a",Object(s.a)({className:Object(p.a)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&h},t[O.a.menuLinkText]=!i,t)),onClick:i?j:void 0,href:i?"#!":void 0},d),f),r.a.createElement("ul",{className:"menu__list"},y.map((function(e){return r.a.createElement(x,{tabIndex:v?"-1":"0",key:e.label,item:e,onItemClick:l,collapsible:i,activePath:m})}))))}function w(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),c=t.href,l=t.label,i=E(t,a);return r.a.createElement("li",{className:"menu__list-item",key:l},r.a.createElement(v.a,Object(s.a)({className:Object(p.a)("menu__link",{"menu__link--active":i}),to:c},Object(k.a)(c)?{isNavLink:!0,exact:!0,onClick:n}:{target:"_blank",rel:"noreferrer noopener"},o),l))}function x(e){switch(e.item.type){case"category":return r.a.createElement(N,e);case"link":default:return r.a.createElement(w,e)}}var C=function(e){var t,n,o=e.path,l=e.sidebar,i=e.sidebarCollapsible,u=void 0===i||i,d=Object(a.useState)(!1),k=d[0],j=d[1],E=Object(m.a)().navbar,N=E.title,w=E.hideOnScroll,C=Object(c.a)().isClient,P=Object(b.a)(),_=P.logoLink,T=P.logoLinkProps,S=P.logoImageUrl,I=P.logoAlt,D=Object(y.a)().isAnnouncementBarClosed,L=Object(g.a)().scrollY;Object(f.a)(k);var M=Object(h.a)();return Object(a.useEffect)((function(){M===h.b.desktop&&j(!1)}),[M]),r.a.createElement("div",{className:Object(p.a)(O.a.sidebar,(t={},t[O.a.sidebarWithHideableNavbar]=w,t))},w&&r.a.createElement(v.a,Object(s.a)({tabIndex:-1,className:O.a.sidebarLogo,to:_},T),null!=S&&r.a.createElement("img",{key:C,src:S,alt:I}),null!=N&&r.a.createElement("strong",null,N)),r.a.createElement("div",{className:Object(p.a)("menu","menu--responsive",O.a.menu,(n={"menu--show":k},n[O.a.menuWithAnnouncementBar]=!D&&0===L,n))},r.a.createElement("button",{"aria-label":k?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){j(!k)}},k?r.a.createElement("span",{className:Object(p.a)(O.a.sidebarMenuIcon,O.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:O.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},l.map((function(e){return r.a.createElement(x,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),j(!1)},collapsible:u,activePath:o})})))))},P=n(142),_=(n(74),n(75)),T=n.n(_),S=function(e){return function(t){var n,a=t.id,o=Object(u.a)(t,["id"]),c=Object(m.a)().navbar.hideOnScroll;return a?r.a.createElement(e,o,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(p.a)("anchor",(n={},n[T.a.enhancedAnchor]=!c,n)),id:a}),o.children,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:"hash-link",href:"#"+a,title:"Direct link to heading"},"#")):r.a.createElement(e,o)}},I=n(76),D=n.n(I),L={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?r.a.createElement(P.a,e):r.a.createElement("code",e):t},a:function(e){return r.a.createElement(v.a,e)},pre:function(e){return r.a.createElement("div",Object(s.a)({className:D.a.mdxCodeBlock},e))},h1:S("h1"),h2:S("h2"),h3:S("h3"),h4:S("h4"),h5:S("h5"),h6:S("h6")},M=n(173),B=n(154),A=n(77),R=n.n(A),F=n(165);function W(e){var t,n,a=e.currentDocRoute,l=e.versionMetadata,s=e.children,u=Object(c.a)(),p=u.siteConfig,m=u.isClient,d=l.pluginId,y=l.permalinkToSidebar,f=l.docsSidebars,h=l.version,b=y[a.path],g=f[b];return r.a.createElement(i.a,{key:m,searchMetadatas:{version:h,tag:Object(F.b)(d,h)}},r.a.createElement("div",{className:R.a.docPage},g&&r.a.createElement("div",{className:R.a.docSidebarContainer,role:"complementary"},r.a.createElement(C,{key:b,sidebar:g,path:a.path,sidebarCollapsible:null===(t=null===(n=p.themeConfig)||void 0===n?void 0:n.sidebarCollapsible)||void 0===t||t})),r.a.createElement("main",{className:R.a.docMainContainer},r.a.createElement(o.a,{components:L},s))))}t.default=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,o=t.find((function(e){return Object(B.matchPath)(a.pathname,e)}));return o?r.a.createElement(W,{currentDocRoute:o,versionMetadata:n},Object(l.a)(t)):r.a.createElement(M.default,e)}},137:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,y=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.a.createElement(y,l(l({ref:t},s),{},{components:n})):r.a.createElement(y,l({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},142:function(e,t,n){"use strict";var a=n(2),r=n(0),o=n.n(r),c=n(139),l=n(146),i=n(155),s=n.n(i),u=n(156),p=n.n(u),m={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},d=n(145),y=n(144),f=function(){var e=Object(y.a)().prism,t=Object(d.a)().isDarkTheme,n=e.theme||m,a=e.darkTheme||n;return t?a:n},h=n(54),b=n.n(h),g=/{([\d,-]+)}/,v=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")},k=/title=".*"/;t.a=function(e){var t=e.children,n=e.className,i=e.metastring,u=Object(y.a)().prism,m=Object(r.useState)(!1),d=m[0],h=m[1],j=Object(r.useState)(!1),O=j[0],E=j[1];Object(r.useEffect)((function(){E(!0)}),[]);var N=Object(r.useRef)(null),w=[],x="",C=f();if(i&&g.test(i)){var P=i.match(g)[1];w=p.a.parse(P).filter((function(e){return e>0}))}i&&k.test(i)&&(x=i.match(k)[0].split("title=")[1].replace(/"+/g,""));var _=n&&n.replace(/language-/,"");!_&&u.defaultLanguage&&(_=u.defaultLanguage);var T=t.replace(/\n$/,"");if(0===w.length&&void 0!==_){for(var S,I="",D=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return v(["js","jsBlock"]);case"jsx":case"tsx":return v(["js","jsBlock","jsx"]);case"html":return v(["js","jsBlock","html"]);case"python":case"py":return v(["python"]);default:return v()}}(_),L=t.replace(/\n$/,"").split("\n"),M=0;M<L.length;){var B=M+1,A=L[M].match(D);if(null!==A){switch(A.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":I+=B+",";break;case"highlight-start":S=B;break;case"highlight-end":I+=S+"-"+(B-1)+","}L.splice(M,1)}else M+=1}w=p.a.parse(I),T=L.join("\n")}var R=function(){s()(T),h(!0),setTimeout((function(){return h(!1)}),2e3)};return o.a.createElement(l.a,Object(a.a)({},l.b,{key:String(O),theme:C,code:T,language:_}),(function(e){var t,n,r=e.className,l=e.style,i=e.tokens,s=e.getLineProps,u=e.getTokenProps;return o.a.createElement(o.a.Fragment,null,x&&o.a.createElement("div",{style:l,className:b.a.codeBlockTitle},x),o.a.createElement("div",{className:b.a.codeBlockContent},o.a.createElement("button",{tabIndex:0,ref:N,type:"button","aria-label":"Copy code to clipboard",className:Object(c.a)(b.a.copyButton,(t={},t[b.a.copyButtonWithTitle]=x,t)),onClick:R},d?"Copied":"Copy"),o.a.createElement("div",{className:Object(c.a)(r,b.a.codeBlock,(n={},n[b.a.codeBlockWithTitle]=x,n))},o.a.createElement("div",{className:b.a.codeBlockLines,style:l},i.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=s({line:e,key:t});return w.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(a.a)({key:t},n),e.map((function(e,t){return o.a.createElement("span",Object(a.a)({key:t},u({token:e,key:t})))})))}))))))}))}},146:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var a=n(20),r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},o=n(0),c={Prism:a.a,theme:r};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},m=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=i({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=i({},n,{backgroundColor:null}),r};function d(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var y=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?m(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=i({},d(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(o.style=c.plain),void 0!==r&&(o.style=void 0!==o.style?i({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),l(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var c=a?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[c].concat(l))}})),l(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,c=i({},d(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?i({},c.style,r):r),void 0!==n&&(c.key=n),a&&(c.className+=" "+a),c}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),c=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,c=0,l=[],i=[l];c>-1;){for(;(o=a[c]++)<r[c];){var m=void 0,d=t[c],y=n[c][o];if("string"==typeof y?(d=c>0?d:["plain"],m=y):(d=p(d,y.type),y.alias&&(d=p(d,y.alias)),m=y.content),"string"==typeof m){var f=m.split(s),h=f.length;l.push({types:d,content:f[0]});for(var b=1;b<h;b++)u(l),i.push(l=[]),l.push({types:d,content:f[b]})}else c++,t.push(d),n.push(m),a.push(0),r.push(m.length)}c--,t.pop(),n.pop(),a.pop(),r.pop()}return u(l),i}(void 0!==c?t.tokenize(a,c,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);t.a=y},155:function(e,t,n){"use strict";const a=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch(l){}return n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus(),c};e.exports=a,e.exports.default=a},156:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],a=t[2],r=t[3];if(n&&r){var o=[],c=(n=parseInt(n))<(r=parseInt(r))?1:-1;"-"!=a&&".."!=a&&"\u2025"!=a||(r+=c);for(var l=n;l!=r;l+=c)o.push(l);return o}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},173:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(158);t.default=function(){return r.a.createElement(o.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);