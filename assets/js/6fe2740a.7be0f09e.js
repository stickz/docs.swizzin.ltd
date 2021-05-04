(window.webpackJsonp=window.webpackJsonp||[]).push([[42,16],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),o=(n(0),n(162)),s=n(57),l={id:"tautulli",title:"Tautulli",sidebar_label:"Tautulli"},i={unversionedId:"applications/tautulli",id:"applications/tautulli",isDocsHomePage:!1,title:"Tautulli",description:"A Python based monitoring and tracking tool for Plex Media Server.",source:"@site/docs/applications/tautulli.mdx",sourceDirName:"applications",slug:"/applications/tautulli",permalink:"/applications/tautulli",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/tautulli.mdx",version:"current",sidebar_label:"Tautulli",frontMatter:{id:"tautulli",title:"Tautulli",sidebar_label:"Tautulli"},sidebar:"docs",previous:{title:"Plex",permalink:"/applications/plex"},next:{title:"Deluge",permalink:"/applications/deluge"}},c=[{value:"Initial Setup",id:"initial-setup",children:[]},{value:"How to Access",id:"how-to-access",children:[]},{value:"Service Management",id:"service-management",children:[]},{value:"Configuration",id:"configuration",children:[]}],u={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A Python based monitoring and tracking tool for Plex Media Server."),Object(o.b)("h2",{id:"initial-setup"},"Initial Setup"),Object(o.b)("p",null,"Installing Tautulli is easy. Simply issue the following command from SSH:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo box install tautulli\n")),Object(o.b)("p",null,"This command will configure Tautulli for your user. Installation files have been placed in ",Object(o.b)("inlineCode",{parentName:"p"},"/opt/tautulli"),"."),Object(o.b)("h2",{id:"how-to-access"},"How to Access"),Object(o.b)("p",null,"Once Tautulli has been installed, you can access it from your browser at ",Object(o.b)("inlineCode",{parentName:"p"},"https://<hostname.ltd>/tautulli"),"."),Object(o.b)("h2",{id:"service-management"},"Service Management"),Object(o.b)("p",null,"The service for Tautulli is managed by systemd. The service file for tautulli resides at:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"/etc/systemd/system/tautulli.service\n")),Object(o.b)(s.default,{service:"tautulli",mdxType:"SystemdTabs"}),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"Upon visiting your Tautulli dashboard for the first time, the welcome wizard will run."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Sign in with Plex"),Object(o.b)("li",{parentName:"ol"},"Input settings for Plex:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-plaintext",metastring:"main",main:!0},"Plex IP: 127.0.0.1\nPort: 32400\n")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Run through the rest of the wizard."),Object(o.b)("li",{parentName:"ol"},"Tautulli is now connected to Plex.")))}p.isMDXComponent=!0},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,m=p["".concat(s,".").concat(b)]||p[b]||d[b]||o;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},165:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(169),s=n(164),l=n(58),i=n.n(l),c=37,u=39;t.a=function(e){var t=e.block,n=e.children,l=e.defaultValue,p=e.values,d=e.groupId,b=e.className,m=Object(o.a)(),y=m.tabGroupChoices,f=m.setTabGroupChoices,h=Object(a.useState)(l),g=h[0],v=h[1],j=Object(a.useState)(!1),O=j[0],k=j[1];if(null!=d){var T=y[d];null!=T&&T!==g&&p.some((function(e){return e.value===T}))&&v(T)}var x=function(e){v(e),null!=d&&f(d,e)},w=[],N=function(e){e.metaKey||e.altKey||e.ctrlKey||k(!0)},C=function(){k(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",N),window.addEventListener("mousedown",C),function(){window.removeEventListener("keydown",N),window.removeEventListener("mousedown",C)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":t},b)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(s.a)("tabs__item",t,i.a.tabItem,{"tabs__item--active":g===t}),style:O?{}:{outline:"none"},key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e),N(e)},onFocus:function(){return x(t)},onClick:function(){x(t),k(!1)},onPointerDown:function(){return k(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===g}))[0]))}},166:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},167:function(e,t,n){"use strict";var a=n(0),r=n(171);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://docusaurus.io/docs/api/themes/configuration#usethemecontext.");return e}},168:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var a=n(23),r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},o=n(0),s={Prism:a.a,theme:r};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=i({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=i({},n,{backgroundColor:null}),r};function b(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var m=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=i({},b(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(o.style=s.plain),void 0!==r&&(o.style=void 0!==o.style?i({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),l(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var s=a?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[s].concat(l))}})),l(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,s=i({},b(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(s.style=void 0!==s.style?i({},s.style,r):r),void 0!==n&&(s.key=n),a&&(s.className+=" "+a),s})),l(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),s=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,s=0,l=[],i=[l];s>-1;){for(;(o=a[s]++)<r[s];){var d=void 0,b=t[s],m=n[s][o];if("string"==typeof m?(b=s>0?b:["plain"],d=m):(b=p(b,m.type),m.alias&&(b=p(b,m.alias)),d=m.content),"string"==typeof d){var y=d.split(c),f=y.length;l.push({types:b,content:y[0]});for(var h=1;h<f;h++)u(l),i.push(l=[]),l.push({types:b,content:y[h]})}else s++,t.push(b),n.push(d),a.push(0),r.push(d.length)}s--,t.pop(),n.pop(),a.pop(),r.pop()}return u(l),i}(void 0!==s?this.tokenize(t,a,s,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);t.a=m},169:function(e,t,n){"use strict";var a=n(0),r=n(170);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},170:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},171:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext(void 0);t.a=r},172:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var a=n(3),r=n(0),o=n.n(r),s=n(164),l=n(168);var i=n(172),c=n.n(i),u={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},p=n(167),d=n(163),b=function(){var e=Object(d.useThemeConfig)().prism,t=Object(p.a)().isDarkTheme,n=e.theme||u,a=e.darkTheme||n;return t?a:n},m=n(174),y=n(59),f=n.n(y),h=/{([\d,-]+)}/,g=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")};function v(e){var t=e.children,n=e.className,i=e.metastring,u=e.title,p=Object(d.useThemeConfig)().prism,y=Object(r.useState)(!1),v=y[0],j=y[1],O=Object(r.useState)(!1),k=O[0],T=O[1];Object(r.useEffect)((function(){T(!0)}),[]);var x=Object(d.parseCodeBlockTitle)(i)||u,w=Object(r.useRef)(null),N=[],C=b(),E=Array.isArray(t)?t.join(""):t;if(i&&h.test(i)){var P=i.match(h)[1];N=c()(P).filter((function(e){return e>0}))}var S=n&&n.replace(/language-/,"");!S&&p.defaultLanguage&&(S=p.defaultLanguage);var D=E.replace(/\n$/,"");if(0===N.length&&void 0!==S){for(var B,I="",L=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return g(["js","jsBlock"]);case"jsx":case"tsx":return g(["js","jsBlock","jsx"]);case"html":return g(["js","jsBlock","html"]);case"python":case"py":return g(["python"]);default:return g()}}(S),A=E.replace(/\n$/,"").split("\n"),z=0;z<A.length;){var M=z+1,_=A[z].match(L);if(null!==_){switch(_.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":I+=M+",";break;case"highlight-start":B=M;break;case"highlight-end":I+=B+"-"+(M-1)+","}A.splice(z,1)}else z+=1}N=c()(I),D=A.join("\n")}var R=function(){!function(e,{target:t=document.body}={}){const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch{}n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus()}(D),j(!0),setTimeout((function(){return j(!1)}),2e3)};return o.a.createElement(l.a,Object(a.a)({},l.b,{key:String(k),theme:C,code:D,language:S}),(function(e){var t,n=e.className,r=e.style,l=e.tokens,i=e.getLineProps,c=e.getTokenProps;return o.a.createElement("div",{className:f.a.codeBlockContainer},x&&o.a.createElement("div",{style:r,className:f.a.codeBlockTitle},x),o.a.createElement("div",{className:Object(s.a)(f.a.codeBlockContent,S)},o.a.createElement("div",{tabIndex:0,className:Object(s.a)(n,f.a.codeBlock,"thin-scrollbar",(t={},t[f.a.codeBlockWithTitle]=x,t))},o.a.createElement("div",{className:f.a.codeBlockLines,style:r},l.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=i({line:e,key:t});return N.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(a.a)({key:t},n),e.map((function(e,t){return o.a.createElement("span",Object(a.a)({key:t},c({token:e,key:t})))})))})))),o.a.createElement("button",{ref:w,type:"button","aria-label":Object(m.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(s.a)(f.a.copyButton),onClick:R},v?o.a.createElement(m.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.a.createElement(m.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},57:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),o=(n(0),n(162)),s=n(165),l=n(166),i=n(173),c={},u={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",isDocsHomePage:!1,title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",sourceDirName:"snippets",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",version:"current",frontMatter:{}},p=[],d={toc:p};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"code"},Object(o.b)(s.a,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"status",mdxType:"TabItem"},Object(o.b)(i.a,{children:"sudo systemctl status "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(o.b)(l.a,{value:"start",mdxType:"TabItem"},Object(o.b)(i.a,{children:"sudo systemctl start "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(o.b)(l.a,{value:"stop",mdxType:"TabItem"},Object(o.b)(i.a,{children:"sudo systemctl stop "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(o.b)(l.a,{value:"restart",mdxType:"TabItem"},Object(o.b)(i.a,{children:"sudo systemctl restart "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(o.b)(l.a,{value:"enable",mdxType:"TabItem"},Object(o.b)(i.a,{children:"sudo systemctl enable "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(o.b)(l.a,{value:"disable",mdxType:"TabItem"},Object(o.b)(i.a,{children:"sudo systemctl disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}b.isMDXComponent=!0}}]);