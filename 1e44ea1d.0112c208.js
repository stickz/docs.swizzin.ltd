(window.webpackJsonp=window.webpackJsonp||[]).push([[17,16],{138:function(e,t,a){"use strict";var s=a(0),i=a.n(s),n=a(141),c=a(139),l=a(50),o=a.n(l),r=37,d=39;t.a=function(e){var t=e.block,a=e.children,l=e.defaultValue,b=e.values,u=e.groupId,m=e.className,p=Object(n.a)(),h=p.tabGroupChoices,v=p.setTabGroupChoices,f=Object(s.useState)(l),y=f[0],O=f[1],j=Object(s.useState)(!1),w=j[0],g=j[1];if(null!=u){var k=h[u];null!=k&&k!==y&&b.some((function(e){return e.value===k}))&&O(k)}var T=function(e){O(e),null!=u&&v(u,e)},x=[],N=function(e){e.metaKey||e.altKey||e.ctrlKey||g(!0)},S=function(){g(!1)};return Object(s.useEffect)((function(){return window.addEventListener("keydown",N),window.addEventListener("mousedown",S),function(){window.removeEventListener("keydown",N),window.removeEventListener("mousedown",S)}}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},m)},b.map((function(e){var t=e.value,a=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(c.a)("tabs__item",t,o.a.tabItem,{"tabs__item--active":y===t}),style:w?{}:{outline:"none"},key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case r:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e),N(e)},onFocus:function(){return T(t)},onClick:function(){T(t),g(!1)},onPointerDown:function(){return g(!1)}},a)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},s.Children.toArray(a).filter((function(e){return e.props.value===y}))[0]))}},48:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return m}));var s=a(2),i=a(6),n=(a(0),a(137)),c=a(138),l=a(140),o=a(142),r={},d={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",isDocsHomePage:!1,title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",slug:"/snippets/systemdtabs",permalink:"/docs.swizzin.ltd/docs/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/main/docs/snippets/systemdtabs.mdx",version:"current"},b=[],u={rightToc:b};function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(s.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("div",{className:"code"},Object(n.b)(c.a,{defaultValue:"start",values:[{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},Object(n.b)(l.a,{value:"start",mdxType:"TabItem"},Object(n.b)(o.a,{children:"sudo systemctl start "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(n.b)(l.a,{value:"stop",mdxType:"TabItem"},Object(n.b)(o.a,{children:"sudo systemctl stop "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(n.b)(l.a,{value:"restart",mdxType:"TabItem"},Object(n.b)(o.a,{children:"sudo systemctl restart "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(n.b)(l.a,{value:"enable",mdxType:"TabItem"},Object(n.b)(o.a,{children:"sudo systemctl enable "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(n.b)(l.a,{value:"disable",mdxType:"TabItem"},Object(n.b)(o.a,{children:"sudo systemctl disable "+a.service,className:"bash",mdxType:"CodeBlock"})))))}m.isMDXComponent=!0},78:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return r})),a.d(t,"default",(function(){return b}));var s=a(2),i=a(6),n=(a(0),a(137)),c=a(48),l={id:"sickchill",title:"Sickchill",sidebar_label:"Sickchill"},o={unversionedId:"applications/sickchill",id:"applications/sickchill",isDocsHomePage:!1,title:"Sickchill",description:"Video File Manager for TV Shows, It watches for new episodes of your favorite shows and when they are posted it does its magic.",source:"@site/docs/applications/sickchill.mdx",slug:"/applications/sickchill",permalink:"/docs.swizzin.ltd/docs/applications/sickchill",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/main/docs/applications/sickchill.mdx",version:"current",sidebar_label:"Sickchill",sidebar:"docs",previous:{title:"Ombi",permalink:"/docs.swizzin.ltd/docs/applications/ombi"},next:{title:"Sickgear",permalink:"/docs.swizzin.ltd/docs/applications/sickgear"}},r=[{value:"Initial Setup",id:"initial-setup",children:[]},{value:"How to Access",id:"how-to-access",children:[]},{value:"Service Management",id:"service-management",children:[]}],d={rightToc:r};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(s.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Video File Manager for TV Shows, It watches for new episodes of your favorite shows and when they are posted it does its magic."),Object(n.b)("h2",{id:"initial-setup"},"Initial Setup"),Object(n.b)("p",null,"Installing SickChill is easy. Simply issue the following command from SSH:"),Object(n.b)("pre",null,Object(n.b)("code",Object(s.a)({parentName:"pre"},{className:"language-plaintext",metastring:"main",main:!0}),"sudo box install sickchill\n")),Object(n.b)("p",null,"This command will install and configure SickChill for your user."),Object(n.b)("h2",{id:"how-to-access"},"How to Access"),Object(n.b)("p",null,"After installation, you can access SickChill at the url: ",Object(n.b)("inlineCode",{parentName:"p"},"https://<yourhostname.ltd>/sickchill")),Object(n.b)("h2",{id:"service-management"},"Service Management"),Object(n.b)("p",null,"Despite using a multi-user service name, multi-user for SickChill is not enabled by default."),Object(n.b)("p",null,"The systemd service file resides at:"),Object(n.b)("pre",null,Object(n.b)("code",Object(s.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"/etc/systemd/system/sickchill@.service\n")),Object(n.b)(c.default,{service:"sickchill@<username>",mdxType:"SystemdTabs"}),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",Object(s.a)({parentName:"div"},{className:"admonition-heading"}),Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",Object(s.a)({parentName:"h5"},{className:"admonition-icon"}),Object(n.b)("svg",Object(s.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(n.b)("path",Object(s.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(n.b)("div",Object(s.a)({parentName:"div"},{className:"admonition-content"}),Object(n.b)("p",{parentName:"div"},"SickChill does not currently handle special characters in your password very well. If you are having troubles connecting to your applications, make sure your password is alpha-numeric"))))}b.isMDXComponent=!0}}]);