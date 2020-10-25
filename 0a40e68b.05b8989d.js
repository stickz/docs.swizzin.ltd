(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{138:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(141),r=n(139),l=n(50),s=n.n(l),u=37,c=39;t.a=function(e){var t=e.block,n=e.children,l=e.defaultValue,d=e.values,b=e.groupId,p=e.className,m=Object(o.a)(),h=m.tabGroupChoices,f=m.setTabGroupChoices,O=Object(a.useState)(l),g=O[0],j=O[1],w=Object(a.useState)(!1),y=w[0],v=w[1];if(null!=b){var k=h[b];null!=k&&k!==g&&d.some((function(e){return e.value===k}))&&j(k)}var N=function(e){j(e),null!=b&&f(b,e)},C=[],z=function(e){e.metaKey||e.altKey||e.ctrlKey||v(!0)},E=function(){v(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",z),window.addEventListener("mousedown",E),function(){window.removeEventListener("keydown",z),window.removeEventListener("mousedown",E)}}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t},p)},d.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(r.a)("tabs__item",t,s.a.tabItem,{"tabs__item--active":g===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case c:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e),z(e)},onFocus:function(){return N(t)},onClick:function(){N(t),v(!1)},onPointerDown:function(){return v(!1)}},n)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===g}))[0]))}},147:function(e,t,n){"use strict";var a=n(2),i=n(0),o=n.n(i),r=n(146),l=n(143),s=n(145),u=n(149),c=n.n(u);t.a=function(e){var t=Object(l.a)().siteConfig.themeConfig.prism,n=void 0===t?{}:t,u=Object(i.useState)(!1),d=u[0],b=u[1];Object(i.useEffect)((function(){b(!0)}),[]);var p=Object(s.a)().isDarkTheme,m=n.theme,h=n.darkTheme||m,f=p?h:m,O=e.language,g=void 0===O?"bash":O,j=e.code;return o.a.createElement(r.a,Object(a.a)({},r.b,{code:j,language:g,key:d,theme:f}),(function(e){var t=e.className,n=e.style,a=e.tokens,i=e.getLineProps,r=e.getTokenProps;return o.a.createElement("pre",{className:t+" "+c.a.code,style:n},a.map((function(e,t){return o.a.createElement("div",i({line:e,key:t}),e.map((function(e,t){return o.a.createElement("span",r({token:e,key:t}))})))})))}))}},149:function(e,t,n){e.exports={code:"code_ddYG"}},166:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(138),r=n(140),l=(n(147),n(142)),s=[{label:"curl",cmd:"bash <(curl -sL https://git.io/swizzin-setup)"},{label:"wget",cmd:"bash <(wget -O- -q https://git.io/swizzin-setup)"}];t.a=function(){return i.a.createElement(i.a.Fragment,null,s&&s.length&&i.a.createElement(o.a,{defaultValue:s[0].label,values:s.map((function(e,t){return{label:e.label,value:e.label}}))},s.map((function(e,t){return i.a.createElement(r.a,{value:e.label},i.a.createElement("div",{className:"code"},i.a.createElement(l.a,{children:e.cmd,className:"bash"})))}))))}},63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(2),i=n(6),o=(n(0),n(137)),r=n(166),l={id:"installation",title:"Getting Started",sidebar_label:"Installation",slug:"/"},s={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Getting Started",description:"swizzin was designed to be an easy to use, modular seedbox solution.",source:"@site/docs/home.mdx",slug:"/",permalink:"/docs.swizzin.ltd/docs/",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/main/docs/home.mdx",version:"current",sidebar_label:"Installation",sidebar:"docs",next:{title:"How do I connect to the server?",permalink:"/docs.swizzin.ltd/docs/getting-started/how-do-i-connect"}},u=[{value:"System Requirements",id:"system-requirements",children:[{value:"Supported Operating Systems",id:"supported-operating-systems",children:[]},{value:"Recommended Hardware",id:"recommended-hardware",children:[]}]},{value:"Installation",id:"installation",children:[{value:"Quick Start",id:"quick-start",children:[]},{value:"Setup",id:"setup",children:[]}]},{value:"Additional Help",id:"additional-help",children:[]}],c={rightToc:u};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"swizzin was designed to be an easy to use, modular seedbox solution."),Object(o.b)("h2",{id:"system-requirements"},"System Requirements"),Object(o.b)("h3",{id:"supported-operating-systems"},"Supported Operating Systems"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Debian 9/10"),Object(o.b)("li",{parentName:"ul"},"Ubuntu 16.04, Ubuntu 18.04 and Ubuntu 20.04")),Object(o.b)("h3",{id:"recommended-hardware"},"Recommended Hardware"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A KVM VPS or bare metal server is recommended"),Object(o.b)("li",{parentName:"ul"},"2+ CPU cores KVM or Intel Atom c2750"),Object(o.b)("li",{parentName:"ul"},"4 GB of RAM"),Object(o.b)("li",{parentName:"ul"},"An x86_64 (64-bit) processor is required")),Object(o.b)("p",null,"With the exception of a 64-bit processor, these are not hard and fast requirements -- you may find that you're able to get away with running on a weaker CPU or less RAM; however, best performance will be had if the applications you're using have ample resource overhead."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("h3",{id:"quick-start"},"Quick Start"),Object(o.b)("p",null,"Make sure you have either ",Object(o.b)("inlineCode",{parentName:"p"},"curl")," or ",Object(o.b)("inlineCode",{parentName:"p"},"wget")," installed. Pick the command of your choice to get started:"),Object(o.b)(r.a,{mdxType:"InstallCmd"}),Object(o.b)("p",null,"Please note that if you are running Ubuntu and choose to run the initial setup though ",Object(o.b)("inlineCode",{parentName:"p"},"sudo")," you should include the ",Object(o.b)("inlineCode",{parentName:"p"},"-H")," argument to ensure that your home directory is modified to /root when you sudo up. The installer will take care of this for you, and this should be the only time you need to specify ",Object(o.b)("inlineCode",{parentName:"p"},"sudo -H")," before running a swizzin command."),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"sudo -H su -c 'bash <(wget -O- -q https://git.io/swizzin-setup)'\n")),Object(o.b)("h3",{id:"setup"},"Setup"),Object(o.b)("p",null,"After running the above command, the script will check for updates and install some necessary prerequisites before continuing."),Object(o.b)("p",null,"When finished, the installer will ask you a few questions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A username for the master user"),Object(o.b)("li",{parentName:"ul"},"A password for the master user"),Object(o.b)("li",{parentName:"ul"},"The packages you would like to install")),Object(o.b)("p",null,"In text fields, you only need to enter your text and hit ",Object(o.b)("inlineCode",{parentName:"p"},"return")," to enter. To choose packages, from the list, you can navigate with the arrow keys. Press ",Object(o.b)("inlineCode",{parentName:"p"},"space")," to select an entry. When you're satisfied with your selection, press ",Object(o.b)("inlineCode",{parentName:"p"},"tab")," to move the selector to ",Object(o.b)("inlineCode",{parentName:"p"},"Ok")," and then press enter. This will advance the screen."),Object(o.b)("p",null,"When you have finished running through the prompts, installation will start. The time it takes will depend on the number of packages you have selected."),Object(o.b)("h4",{id:"additional-setup-quirks"},"Additional Setup Quirks"),Object(o.b)("p",null,"A few items to be aware of as known issues. Most of these have had attempts at working around them, but it's good to be aware of things to avoid:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Installer appears frozen before any user input (usually on ",Object(o.b)("inlineCode",{parentName:"li"},"Installing dependencies")," or ",Object(o.b)("inlineCode",{parentName:"li"},"Checking repos"),"): ",Object(o.b)("inlineCode",{parentName:"li"},"control-c")," out and ",Object(o.b)("inlineCode",{parentName:"li"},"apt update && apt upgrade")," before running the installer."),Object(o.b)("li",{parentName:"ul"},"Capital letters in usernames: capital letters should never be used for usernames"),Object(o.b)("li",{parentName:"ul"},"Usernames which may conflict with a group that already exists: for example, certain images like AWS may have an ",Object(o.b)("inlineCode",{parentName:"li"},"admin")," group out of the box. If you try to name your user ",Object(o.b)("inlineCode",{parentName:"li"},"admin")," the install will fail in this case.")),Object(o.b)("h2",{id:"additional-help"},"Additional Help"),Object(o.b)("p",null,"If you're having troubles with any of the items in the documentation, please first consult the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"guides/troubleshooting"}),"Troubleshooting")," guide. If that is not enough for you, join us in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://discord.gg/2esbu2N"}),"Discord")," and we will attempt to help you to our best ability."),Object(o.b)("p",null,"If you have found a bug or are having an issue, please open an ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/liaralabs/swizzin/issues/new/choose"}),"issue on GitHub"),"."))}d.isMDXComponent=!0}}]);