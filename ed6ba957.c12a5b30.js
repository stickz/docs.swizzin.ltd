(window.webpackJsonp=window.webpackJsonp||[]).push([[68,16],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(2),i=n(6),o=(n(0),n(137)),l=n(48),r={id:"deluge",title:"Deluge",sidebar_label:"Deluge"},c={unversionedId:"applications/deluge",id:"applications/deluge",isDocsHomePage:!1,title:"Deluge",description:"Deluge is a fully-featured, high performance cross-platform \u200bBitTorrent client.",source:"@site/docs/applications/deluge.mdx",slug:"/applications/deluge",permalink:"/docs.swizzin.ltd/docs/applications/deluge",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/main/docs/applications/deluge.mdx",version:"current",sidebar_label:"Deluge",sidebar:"docs",previous:{title:"Tautulli",permalink:"/docs.swizzin.ltd/docs/applications/tautulli"},next:{title:"Flood",permalink:"/docs.swizzin.ltd/docs/applications/flood"}},s=[{value:"Initial Setup",id:"initial-setup",children:[{value:"Install Options",id:"install-options",children:[]}]},{value:"Upgrading and Recompiling",id:"upgrading-and-recompiling",children:[]},{value:"How to Access",id:"how-to-access",children:[{value:"Thin Client (recommended)",id:"thin-client-recommended",children:[]}]},{value:"Configuration",id:"configuration",children:[{value:"Default Download Location",id:"default-download-location",children:[]},{value:"Web Download Location",id:"web-download-location",children:[]},{value:"Plugins",id:"plugins",children:[]}]},{value:"Connect to other clients",id:"connect-to-other-clients",children:[{value:"Transdroid",id:"transdroid",children:[]},{value:"Other Local Clients",id:"other-local-clients",children:[]},{value:"Connecting to a remote client (i.e. Sonarr)",id:"connecting-to-a-remote-client-ie-sonarr",children:[]}]}],b={rightToc:s};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Deluge is a fully-featured, high performance cross-platform \u200bBitTorrent client."),Object(o.b)("h2",{id:"initial-setup"},"Initial Setup"),Object(o.b)("p",null,"Installing Deluge is easy. Simply issue the following command from SSH:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"sudo box install deluge\n")),Object(o.b)("p",null,'This command will configure Deluge and the associated web interface "Deluge-Web" for use with your user.'),Object(o.b)("p",null,"After installation, if there will be two 2 new packages installed: libtorrent, and deluge-common. Due to potential packaging conflicts with your distribution's repository, the package ",Object(o.b)("inlineCode",{parentName:"p"},"deluge-common")," has been held by apt and will not be marked for upgrade. You may see apt issue a warning regarding the held ",Object(o.b)("inlineCode",{parentName:"p"},"deluge-common")," package. This is completely normal and it means the apt mark is working as expected. The package name for ",Object(o.b)("inlineCode",{parentName:"p"},"libtorrent")," does not interfere with any apt packages and should not issue any upgrade warnings."),Object(o.b)("h3",{id:"install-options"},"Install Options"),Object(o.b)("p",null,"When installing Deluge, depending on your operating system, you'll have a couple choices available to you:"),Object(o.b)("h4",{id:"deluge-version"},"Deluge Version"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Repo"),": performs an ",Object(o.b)("inlineCode",{parentName:"li"},"apt-get install deluged deluge-console deluge-web")," and pulls whatever is available from your operating system's repository. To check versions, you can use the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.debian.org/distrib/packages"}),"Debian Package Tracker")," or the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://packages.ubuntu.com/"}),"Ubuntu Package Tracker"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Deluge 1.3.15"),": pulls the current head of the ",Object(o.b)("inlineCode",{parentName:"li"},"1.3-stable")," branch from Deluge and uses ",Object(o.b)("inlineCode",{parentName:"li"},"fpm")," to package it as a .deb for easy installation and removal with ",Object(o.b)("inlineCode",{parentName:"li"},"dpkg"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Deluge 2"),": pulls the current head of the ",Object(o.b)("inlineCode",{parentName:"li"},"master")," branch from Deluge and uses ",Object(o.b)("inlineCode",{parentName:"li"},"fpm")," to package it as a .deb for easy installation and removal with ",Object(o.b)("inlineCode",{parentName:"li"},"dpkg"),".",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Deluge 2 is not supported on installations using Debian Jessie due to severely outdated Python3 dependencies.")))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you intend to use the thin client with your installation, your local version of Deluge must be reasonably similar to your remote version of Deluge. For instance, you're unable to use the thin client for Deluge v2 if your local version is 1.3.15."))),Object(o.b)("h4",{id:"libtorrent-version"},"Libtorrent Version"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Repo"),": performs an ",Object(o.b)("inlineCode",{parentName:"li"},"apt-get install")," of the ",Object(o.b)("inlineCode",{parentName:"li"},"libtorrent-rasterbar*")," and ",Object(o.b)("inlineCode",{parentName:"li"},"python*-libtorrent")," packages to supply both ",Object(o.b)("inlineCode",{parentName:"li"},"libtorrent")," and the python bindings required by Deluge.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Repo is not an option if you are using ",Object(o.b)("inlineCode",{parentName:"li"},"Deluge v2")," on ",Object(o.b)("inlineCode",{parentName:"li"},"Ubuntu 16.04")," because Libtorrent 1.1+ is required to install ",Object(o.b)("inlineCode",{parentName:"li"},"Deluge v2"),". Thus, you must compile a version of Libtorrent to meet this requirement."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"RC_1_0"),": pulls the current head of the Libtorrent 1.0 branch, compiles it and packages it with ",Object(o.b)("inlineCode",{parentName:"li"},"fpm")," as a .deb file.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"This branch is only an option if you're using ",Object(o.b)("inlineCode",{parentName:"li"},"Deluge 1.3.15")," and if your version of ",Object(o.b)("inlineCode",{parentName:"li"},"libboost")," is ",Object(o.b)("inlineCode",{parentName:"li"},"1.65")," or earlier. (i.e. Buster is not supported)"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"RC_1_1"),": pulls the current head of the Libtorrent 1.1 branch, compiles it and packages it with ",Object(o.b)("inlineCode",{parentName:"li"},"fpm")," as a .deb file.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"This branch is currently supported on all supported operating systems."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"RC_1_2"),": pulls the current head of the Libtorrent 1.2 branch, compiles it and packages it with ",Object(o.b)("inlineCode",{parentName:"li"},"fpm")," as a .deb file.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The branch is only an option if you are using ",Object(o.b)("inlineCode",{parentName:"li"},"Deluge v2")," as it is completely incompatible with ",Object(o.b)("inlineCode",{parentName:"li"},"Deluge 1.3.15"),".")))),Object(o.b)("h4",{id:"libtorrent-patching"},"Libtorrent Patching"),Object(o.b)("p",null,"If you would like to patch the settings pack of libtorrent (or any other aspect for that matter), the libtorrent compile will check if ",Object(o.b)("inlineCode",{parentName:"p"},"/root/libtorrent.patch")," exists. If it does, then the installer will automatically patch the libtorrent source with this patch before libtorrent is compiled. This may be of note since the ltconfig plugin does not exist for qBittorent, thus if you are interested in changing certain settings pack settings for qBittorrent settings which are not currently exposed through the WebUI, then this is the only way to change those settings without manually compiling libtorrent."),Object(o.b)("p",null,"You must supply your own patch!"),Object(o.b)("h2",{id:"upgrading-and-recompiling"},"Upgrading and Recompiling"),Object(o.b)("p",null,"If you decide you'd like to change the version of Deluge/libtorrent you've installed, or you would like to rebuild your current versions against the most recent source, you can recompile and upgrade deluge at any time with the command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"sudo box upgrade deluge\n")),Object(o.b)("p",null,"This command will start the Deluge upgrade script. The installer will ask which version of Deluge you'd like to install and will then work on installing it."),Object(o.b)("h2",{id:"how-to-access"},"How to Access"),Object(o.b)("h3",{id:"thin-client-recommended"},"Thin Client (recommended)"),Object(o.b)("p",null,'The GTK thin client uses a secure connection to your slot to display the remote contents in the local client. Generally speaking, the thin client is capable of handling more torrents and simply offers better performance than the alternative Web UI. However, in order to use the Thin client, you must have a version of Deluge installed locally on the computer you wish to access your remote client from. Thus the argument of Thin vs Web is generally a choice between "Performance" and "Convenience". Further, the Thin client supports a broader range of plugins -- many plugins have no interface for the Web UI at all.'),Object(o.b)("p",null,"In order to use the Thin client, you must have a recent version of Deluge installed locally on your computer. Below are instructions for popular operating systems:"),Object(o.b)(l.default,{service:"deluged@<username>",mdxType:"SystemdTabs"}),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"Most of the settings in the preferences should be left alone; however, you're welcome to alter settings such as ",Object(o.b)("inlineCode",{parentName:"p"},"Download location"),". That said, you should leave the majority of ",Object(o.b)("inlineCode",{parentName:"p"},"Connection Settings")," and ",Object(o.b)("inlineCode",{parentName:"p"},"ltConfig")," settings alone, as the settings have already been optimized for use on your slot."),Object(o.b)("h3",{id:"default-download-location"},"Default Download Location"),Object(o.b)("p",null,"Files downloaded by Deluge will be placed in ",Object(o.b)("inlineCode",{parentName:"p"},"~/torrents/deluge")," by default. You can change this behavior by change the preference: ",Object(o.b)("inlineCode",{parentName:"p"},"Download to")," in the Deluge download preferences."),Object(o.b)("h3",{id:"web-download-location"},"Web Download Location"),Object(o.b)("p",null,"Similarly, any files in the default download directory (",Object(o.b)("inlineCode",{parentName:"p"},"~/torrents/deluge"),") will be available for browsing via the web server at the location: ",Object(o.b)("inlineCode",{parentName:"p"},"https://<yourhostname.ltd>/deluge.downloads")),Object(o.b)("h3",{id:"plugins"},"Plugins"),Object(o.b)("p",null,"There are a wide array of plugins available for Deluge. You can find a list of them in the Deluge wiki, ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://dev.deluge-torrent.org/wiki/Plugins"}),"here"),"."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Not all plugins have a web-ui component. You will likely need to install and manage the options for most of the plugins on the prior page with the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#thin-client-recommended"}),"thin client"),"."))),Object(o.b)("h2",{id:"connect-to-other-clients"},"Connect to other clients"),Object(o.b)("p",null,"The following variables can be used as a general guide to help you find information you'll need to know in order to connect other clients to Deluge."),Object(o.b)("h3",{id:"transdroid"},"Transdroid"),Object(o.b)("p",null,"Use these settings when connecting your transdroid client to your Deluge instance:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"IP or Hostname: <yourhostname.ltd>\nUser name: <your username>\nPassword: <your password>\nDeluge web password: <your password again>\nAdvanced Settings:\nPort Number: 443\nFolder: /deluge\nUse SSL: On\nAccept all SSL certificates: yes (optional with a valid ssl certificate)\n")),Object(o.b)("h3",{id:"other-local-clients"},"Other Local Clients"),Object(o.b)("p",null,"Settings for connecting another local client (i.e. Sonarr), to your Deluge instance:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Host: ",Object(o.b)("inlineCode",{parentName:"li"},"127.0.0.1")),Object(o.b)("li",{parentName:"ul"},"Daemon port: ",Object(o.b)("inlineCode",{parentName:"li"},"cat ~/.config/deluge/core.conf | grep daemon_port")),Object(o.b)("li",{parentName:"ul"},"Web port: ",Object(o.b)("inlineCode",{parentName:"li"},"cat ~/.config/deluge/web.conf | grep port")),Object(o.b)("li",{parentName:"ul"},"URL base: ",Object(o.b)("inlineCode",{parentName:"li"},"/deluge")," (only if accessing via ",Object(o.b)("inlineCode",{parentName:"li"},"https"),")")),Object(o.b)("h3",{id:"connecting-to-a-remote-client-ie-sonarr"},"Connecting to a remote client (i.e. Sonarr)"),Object(o.b)("p",null,"By default, the web interface of Deluge is bound to ",Object(o.b)("inlineCode",{parentName:"p"},"127.0.0.1"),". In other words, the interface isn't directly accessible from a remote connection. If you want to connect Deluge-web to a remote instance of an application (for instance, Sonarr running from home), you'll need to enable remote connections."),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs.swizzin.ltd/docs/getting-started/how-do-i-connect"}),"SSH")," into your slot and issue the following commands:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"box stop deluge-web\nsed -i 's/127.0.0.1/0.0.0.0/g' ~/.config/deluge/web.conf\nbox start deluge-web\n")),Object(o.b)("p",null,"You can now connect to your Deluge-web instance through ",Object(o.b)("inlineCode",{parentName:"p"},"http://hostname.ltd:<delugeport>")))}d.isMDXComponent=!0},138:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(141),l=n(139),r=n(50),c=n.n(r),s=37,b=39;t.a=function(e){var t=e.block,n=e.children,r=e.defaultValue,d=e.values,u=e.groupId,p=e.className,m=Object(o.a)(),h=m.tabGroupChoices,g=m.setTabGroupChoices,O=Object(a.useState)(r),f=O[0],j=O[1],y=Object(a.useState)(!1),w=y[0],v=y[1];if(null!=u){var N=h[u];null!=N&&N!==f&&d.some((function(e){return e.value===N}))&&j(N)}var C=function(e){j(e),null!=u&&g(u,e)},D=[],k=function(e){e.metaKey||e.altKey||e.ctrlKey||v(!0)},T=function(){v(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",k),window.addEventListener("mousedown",T),function(){window.removeEventListener("keydown",k),window.removeEventListener("mousedown",T)}}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t},p)},d.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(l.a)("tabs__item",t,c.a.tabItem,{"tabs__item--active":f===t}),style:w?{}:{outline:"none"},key:t,ref:function(e){return D.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(D,e.target,e),k(e)},onFocus:function(){return C(t)},onClick:function(){C(t),v(!1)},onPointerDown:function(){return v(!1)}},n)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===f}))[0]))}},48:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),o=(n(0),n(137)),l=n(138),r=n(140),c=n(142),s={},b={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",isDocsHomePage:!1,title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",slug:"/snippets/systemdtabs",permalink:"/docs.swizzin.ltd/docs/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/main/docs/snippets/systemdtabs.mdx",version:"current"},d=[],u={rightToc:d};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"code"},Object(o.b)(l.a,{defaultValue:"start",values:[{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},Object(o.b)(r.a,{value:"start",mdxType:"TabItem"},Object(o.b)(c.a,{children:"sudo systemctl start "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(o.b)(r.a,{value:"stop",mdxType:"TabItem"},Object(o.b)(c.a,{children:"sudo systemctl stop "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(o.b)(r.a,{value:"restart",mdxType:"TabItem"},Object(o.b)(c.a,{children:"sudo systemctl restart "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(o.b)(r.a,{value:"enable",mdxType:"TabItem"},Object(o.b)(c.a,{children:"sudo systemctl enable "+n.service,className:"bash",mdxType:"CodeBlock"})),Object(o.b)(r.a,{value:"disable",mdxType:"TabItem"},Object(o.b)(c.a,{children:"sudo systemctl disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}p.isMDXComponent=!0}}]);