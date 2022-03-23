"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[5993],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8448:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294);function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},5529:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7462),o=n(7294),l=n(1048),i=n(5119),r=n(6010),s="tabItem_LplD";function u(e){var t,n,l,u=e.lazy,c=e.block,d=e.defaultValue,p=e.values,m=e.groupId,h=e.className,g=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.lx)(f,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(t=null!=d?d:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=g[0])?void 0:l.props.value;if(null!==k&&!f.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,i.UB)(),y=b.tabGroupChoices,w=b.setTabGroupChoices,N=(0,o.useState)(k),D=N[0],C=N[1],T=[],x=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=y[m];null!=O&&O!==D&&f.some((function(e){return e.value===O}))&&C(O)}var S=function(e){var t=e.currentTarget,n=T.indexOf(t),a=f[n].value;a!==D&&(x(t),C(a),null!=m&&w(m,a))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var o=T.indexOf(e.currentTarget)-1;n=T[o]||T[T.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},h)},f.map((function(e){var t=e.value,n=e.label,l=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:function(e){return T.push(e)},onKeyDown:I,onFocus:S,onClick:S},l,{className:(0,r.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":D===t})}),null!=n?n:t)}))),u?(0,o.cloneElement)(g.filter((function(e){return e.props.value===D}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==D})}))))}function c(e){var t=(0,l.Z)();return o.createElement(u,(0,a.Z)({key:String(t)},e))}},8984:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var a=n(7462),o=n(3366),l=(n(7294),n(4137)),i=n(5529),r=n(8448),s=["components"],u={id:"deluge",title:"Deluge",sidebar_label:"Deluge"},c=void 0,d={unversionedId:"applications/deluge",id:"applications/deluge",title:"Deluge",description:"Deluge is a fully-featured, high performance cross-platform \u200bBitTorrent client.",source:"@site/docs/applications/deluge.mdx",sourceDirName:"applications",slug:"/applications/deluge",permalink:"/applications/deluge",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/deluge.mdx",tags:[],version:"current",frontMatter:{id:"deluge",title:"Deluge",sidebar_label:"Deluge"},sidebar:"docs",previous:{title:"Tautulli",permalink:"/applications/tautulli"},next:{title:"Flood",permalink:"/applications/flood"}},p={},m=[{value:"Initial Setup",id:"initial-setup",level:2},{value:"Deluge Version",id:"deluge-version",level:3},{value:"Unattended variables",id:"unattended-variables",level:4},{value:"Libtorrent Patching",id:"libtorrent-patching",level:4},{value:"Upgrading and Recompiling",id:"upgrading-and-recompiling",level:2},{value:"How to Access",id:"how-to-access",level:2},{value:"Thin Client (recommended)",id:"thin-client-recommended",level:3},{value:"Web UI",id:"web-ui",level:3},{value:"deluge-console",id:"deluge-console",level:3},{value:"Getting Started",id:"getting-started",level:4},{value:"Connecting to Your Daemon",id:"connecting-to-your-daemon",level:4},{value:"Available Commands",id:"available-commands",level:4},{value:"Configuration",id:"configuration",level:2},{value:"Default Download Location",id:"default-download-location",level:3},{value:"Web Download Location",id:"web-download-location",level:3},{value:"Plugins",id:"plugins",level:3},{value:"Connect to other clients",id:"connect-to-other-clients",level:2},{value:"Transdroid",id:"transdroid",level:3},{value:"Other Local Clients",id:"other-local-clients",level:3},{value:"Connecting to a remote client (i.e. Sonarr)",id:"connecting-to-a-remote-client-ie-sonarr",level:3}],h={toc:m};function g(e){var t=e.components,n=(0,o.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Deluge is a fully-featured, high performance cross-platform \u200bBitTorrent client."),(0,l.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,l.kt)("p",null,"Installing Deluge is easy. Simply issue the following command from SSH:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo box install deluge\n")),(0,l.kt)("p",null,'This command will configure Deluge and the associated web interface "Deluge-Web" for use with your user.'),(0,l.kt)("p",null,"After installation, if there will be two 2 new packages installed: libtorrent, and deluge-common. Due to potential packaging conflicts with your distribution's repository, the package ",(0,l.kt)("inlineCode",{parentName:"p"},"deluge-common")," has been held by apt and will not be marked for upgrade. You may see apt issue a warning regarding the held ",(0,l.kt)("inlineCode",{parentName:"p"},"deluge-common")," package. This is completely normal and it means the apt mark is working as expected. The package name for ",(0,l.kt)("inlineCode",{parentName:"p"},"libtorrent")," does not interfere with any apt packages and should not issue any upgrade warnings."),(0,l.kt)("h3",{id:"deluge-version"},"Deluge Version"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Repo"),": performs an ",(0,l.kt)("inlineCode",{parentName:"li"},"apt-get install deluged deluge-console deluge-web")," and pulls whatever is available from your operating system's repository. To check versions, you can use the ",(0,l.kt)("a",{parentName:"li",href:"https://www.debian.org/distrib/packages"},"Debian Package Tracker")," or the ",(0,l.kt)("a",{parentName:"li",href:"https://packages.ubuntu.com/"},"Ubuntu Package Tracker"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Deluge 1.3.15"),": pulls the current head of the ",(0,l.kt)("inlineCode",{parentName:"li"},"1.3-stable")," branch from Deluge and uses ",(0,l.kt)("inlineCode",{parentName:"li"},"fpm")," to package it as a .deb for easy installation and removal with ",(0,l.kt)("inlineCode",{parentName:"li"},"dpkg"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Deluge 2"),": pulls the current head of the ",(0,l.kt)("inlineCode",{parentName:"li"},"master")," branch from Deluge and uses ",(0,l.kt)("inlineCode",{parentName:"li"},"fpm")," to package it as a .deb for easy installation and removal with ",(0,l.kt)("inlineCode",{parentName:"li"},"dpkg"),".")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If you intend to use the thin client with your installation, your local version of Deluge must be reasonably similar to your remote version of Deluge. For instance, you're unable to use the thin client for Deluge v2 if your local version is 1.3.15."))),(0,l.kt)("h4",{id:"unattended-variables"},"Unattended variables"),(0,l.kt)("p",null,"When installing Deluge, you may specify the variable ",(0,l.kt)("inlineCode",{parentName:"p"},"DELUGE_VERSION")," to bypass the version popup. Accepted values are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"repo")," -- Will install Deluge from your OS repository"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1.3-stable")," -- Will compile Deluge from the head of the 1.3-stable branch (1.3.15)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"master")," -- Will compile Deluge from the head of the master branch (2.0)")),(0,l.kt)("h4",{id:"libtorrent-patching"},"Libtorrent Patching"),(0,l.kt)("p",null,"If you would like to patch the settings pack of libtorrent (or any other aspect for that matter), the libtorrent compile will check if ",(0,l.kt)("inlineCode",{parentName:"p"},"/root/libtorrent-{RC_1_1,RC_1_2}.patch")," exists. If it does, then the installer will automatically patch the libtorrent source with this patch before libtorrent is compiled. This may be of note since the ltconfig plugin does not exist for qBittorent, thus if you are interested in changing certain settings pack settings for qBittorrent settings which are not currently exposed through the WebUI, then this is the only way to change those settings without manually compiling libtorrent."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"RC_1_1")," is used when compiling libtorrent 1.1.* (e.g. Deluge 1.3.15 and qBittorrent 4.1.","*",")"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"RC_1_2")," is used when compiling libtorrent 1.2.* (e.g. Deluge 2.0 and qBittorrent >= 4.2)"),(0,l.kt)("p",null,"You must supply your own patch!"),(0,l.kt)("h2",{id:"upgrading-and-recompiling"},"Upgrading and Recompiling"),(0,l.kt)("p",null,"If you decide you'd like to change the version of Deluge/libtorrent you've installed, or you would like to rebuild your current versions against the most recent source, you can recompile and upgrade deluge at any time with the command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo box upgrade deluge\n")),(0,l.kt)("p",null,"This command will start the Deluge upgrade script. The installer will ask which version of Deluge you'd like to install and will then work on installing it."),(0,l.kt)("h2",{id:"how-to-access"},"How to Access"),(0,l.kt)("h3",{id:"thin-client-recommended"},"Thin Client (recommended)"),(0,l.kt)("p",null,'The GTK thin client uses a secure connection to your slot to display the remote contents in the local client. Generally speaking, the thin client is capable of handling more torrents and simply offers better performance than the alternative Web UI. However, in order to use the Thin client, you must have a version of Deluge installed locally on the computer you wish to access your remote client from. Thus the argument of Thin vs Web is generally a choice between "Performance" and "Convenience". Further, the Thin client supports a broader range of plugins -- many plugins have no interface for the Web UI at all.'),(0,l.kt)("p",null,"In order to use the Thin client, you must have a recent version of Deluge installed locally on your computer. Below are instructions for popular operating systems:"),(0,l.kt)(i.Z,{defaultValue:"windows",values:[{label:"Windows",value:"windows"},{label:"macOS",value:"macos"},{label:"Debian/Ubuntu",value:"debuntu"},{label:"OpenSUSE",value:"opensuse"},{label:"Fedora",value:"fedora"},{label:"Arch Linux",value:"arch"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"windows",mdxType:"TabItem"},(0,l.kt)("p",null,"  Grab the most recent version from ",(0,l.kt)("a",{parentName:"p",href:"https://ftp.osuosl.org/pub/deluge/windows/?C=M;O=D"},"here")," and save it to a common location (i.e. Downloads).\nRun the installer and follow the prompts.")),(0,l.kt)(r.Z,{value:"macos",mdxType:"TabItem"},(0,l.kt)("p",null,"  You can grab a pre-2.0 version of deluge ",(0,l.kt)("a",{parentName:"p",href:"https://ftp.osuosl.org/pub/deluge/mac_osx/?C=M;O=D"},"here"),", or install it via ",(0,l.kt)("inlineCode",{parentName:"p"},"brew")," like so"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# For version 1.x\nbrew install --cask deluge \n# For python-based deluge\nbrew install pygobject3 gtk+3 adwaita-icon-theme\nbrew install libtorrent-rasterbar\nbrew link gettext --force\npip3 install deluge\n"))),(0,l.kt)(r.Z,{value:"debuntu",mdxType:"TabItem"},(0,l.kt)("p",null,"Deluge is available from the distribution repositories. Simply open a terminal and issue the command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install deluge\n"))),(0,l.kt)(r.Z,{value:"opensuse",mdxType:"TabItem"},(0,l.kt)("p",null,"Deluge is available from the distribution repositories. Simply open a terminal and issue the command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo zypper install deluge\n"))),(0,l.kt)(r.Z,{value:"fedora",mdxType:"TabItem"},(0,l.kt)("p",null,"Deluge is available from the distribution repositories. Simply open a terminal and issue the command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dnf install deluge\n"))),(0,l.kt)(r.Z,{value:"arch",mdxType:"TabItem"},(0,l.kt)("p",null,"Deluge is available from the distribution repositories. Simply open a terminal and issue the command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -S deluge\n")))),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Now that Deluge is installed on your machine, you need to configure it to connect to your slot."),(0,l.kt)("p",null,'First, we must prevent Deluge from starting in "Classic" mode. To do this, open Deluge. In the menu, go to ',(0,l.kt)("inlineCode",{parentName:"p"},"Preferences > Interface"),' and un-tick the box which states "Classic Mode".'),(0,l.kt)("p",null,'Deluge will prompt you to restart. Click "Ok" and re-open Deluge.'),(0,l.kt)("p",null,'You\'ll notice when you re-open the application that a new connection dialog box will open. Hit the "Add" button and use the following details:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:"main",main:!0},"Hostname: <the hostname of your server>\nUsername: <your username>\nPassword: <your password>\nPort: <the daemon port of your instance>\n")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"During the configuration of Deluge on your slot, the setup output both your Daemon and Web ports. If you've forgotten your daemon port, you can find it with the following command:"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cat ~/.config/deluge/core.conf | grep daemon_port\n")))),(0,l.kt)("p",null,"Once you click okay, you'll be taken back to the connection dialog. Your new connection will be listed and if everything is okay, you'll see a green check box next to it. When you click connect, you'll be taken to your client."),(0,l.kt)("h3",{id:"web-ui"},"Web UI"),(0,l.kt)("p",null,"The web UI is significantly easier to access, which is why many prefer it. You can access deluge-web from ",(0,l.kt)("inlineCode",{parentName:"p"},"https://yourhost.ltd/deluge"),"."),(0,l.kt)("p",null,"If you are not currently logged in, you will first receive a basic authentication dialog from the webserver. Once authenticated, you'll receive a dialog box from Deluge-Web. This password is the same as the one you just entered."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This second password authentication layer cannot be fully removed due to restrictions in Deluge. However, you can increase the length of time that the cookie is stored locally by your browser to one year (from one hour):"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'sudo systemctl stop deluge-web@<username>\nsed -i \'s/"session_timeout": 3600,/"session_timeout": 31536000,/g\' ~/.config/deluge/web.conf\nsudo systemctl start deluge-web@<username>\n')))),(0,l.kt)("h3",{id:"deluge-console"},"deluge-console"),(0,l.kt)("h4",{id:"getting-started"},"Getting Started"),(0,l.kt)("p",null,"You can access the command line version of the deluge console by using the command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"deluge-console\n")),(0,l.kt)("h4",{id:"connecting-to-your-daemon"},"Connecting to Your Daemon"),(0,l.kt)("p",null,"Once loaded, you'll need to specify your daemon port to connect to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"connect 127.0.0.1:<daemon port>\n")),(0,l.kt)("h4",{id:"available-commands"},"Available Commands"),(0,l.kt)("p",null,"Once you have successfully connected to the daemon, you can get started with the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:"main",main:!0},'>>> help\nadd - Add a torrent\ncache - Show information about the disk cache\nconfig - Show and set configuration values\nconnect - Connect to a new deluge server.\ndebug - Enable and disable debugging\ndel - Remove a torrent\nexit - Exit from the client.\nhalt - Shutdown the deluge server.\nhelp - displays help on other commands\ninfo - Show information about the torrents\npause - Pause a torrent\nplugin - Manage plugins with this command\nquit - Exit from the client.\nreannounce - Update tracker for torrent(s)\nrecheck - Forces a recheck of the torrent data\nresume - Resume a torrent\nrm - Remove a torrent\nupdate-tracker - Update tracker for torrent(s)\nFor help on a specific command, use "<command> --help"\n')),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"Most of the settings in the preferences should be left alone; however, you're welcome to alter settings such as ",(0,l.kt)("inlineCode",{parentName:"p"},"Download location"),". That said, you should leave the majority of ",(0,l.kt)("inlineCode",{parentName:"p"},"Connection Settings")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"ltConfig")," settings alone, as the settings have already been optimized for use on your slot."),(0,l.kt)("h3",{id:"default-download-location"},"Default Download Location"),(0,l.kt)("p",null,"Files downloaded by Deluge will be placed in ",(0,l.kt)("inlineCode",{parentName:"p"},"~/torrents/deluge")," by default. You can change this behavior by change the preference: ",(0,l.kt)("inlineCode",{parentName:"p"},"Download to")," in the Deluge download preferences."),(0,l.kt)("h3",{id:"web-download-location"},"Web Download Location"),(0,l.kt)("p",null,"Similarly, any files in the default download directory (",(0,l.kt)("inlineCode",{parentName:"p"},"~/torrents/deluge"),") will be available for browsing via the web server at the location: ",(0,l.kt)("inlineCode",{parentName:"p"},"https://<yourhostname.ltd>/deluge.downloads")),(0,l.kt)("h3",{id:"plugins"},"Plugins"),(0,l.kt)("p",null,"There are a wide array of plugins available for Deluge. You can find a list of them in the Deluge wiki, ",(0,l.kt)("a",{parentName:"p",href:"https://dev.deluge-torrent.org/wiki/Plugins"},"here"),"."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Not all plugins have a web-ui component. You will likely need to install and manage the options for most of the plugins on the prior page with the ",(0,l.kt)("a",{parentName:"p",href:"#thin-client-recommended"},"thin client"),"."))),(0,l.kt)("h2",{id:"connect-to-other-clients"},"Connect to other clients"),(0,l.kt)("p",null,"The following variables can be used as a general guide to help you find information you'll need to know in order to connect other clients to Deluge."),(0,l.kt)("h3",{id:"transdroid"},"Transdroid"),(0,l.kt)("p",null,"Use these settings when connecting your transdroid client to your Deluge instance:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"IP or Hostname: <yourhostname.ltd>\nUser name: <your username>\nPassword: <your password>\nDeluge web password: <your password again>\nAdvanced Settings:\nPort Number: 443\nFolder: /deluge\nUse SSL: On\nAccept all SSL certificates: yes (optional with a valid ssl certificate)\n")),(0,l.kt)("h3",{id:"other-local-clients"},"Other Local Clients"),(0,l.kt)("p",null,"Settings for connecting another local client (i.e. Sonarr), to your Deluge instance:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Host: ",(0,l.kt)("inlineCode",{parentName:"li"},"127.0.0.1")),(0,l.kt)("li",{parentName:"ul"},"Daemon port: ",(0,l.kt)("inlineCode",{parentName:"li"},"cat ~/.config/deluge/core.conf | grep daemon_port")),(0,l.kt)("li",{parentName:"ul"},"Web port: ",(0,l.kt)("inlineCode",{parentName:"li"},"cat ~/.config/deluge/web.conf | grep port")),(0,l.kt)("li",{parentName:"ul"},"URL base: ",(0,l.kt)("inlineCode",{parentName:"li"},"/deluge")," (only if accessing via ",(0,l.kt)("inlineCode",{parentName:"li"},"https"),")")),(0,l.kt)("h3",{id:"connecting-to-a-remote-client-ie-sonarr"},"Connecting to a remote client (i.e. Sonarr)"),(0,l.kt)("p",null,"By default, the web interface of Deluge is bound to ",(0,l.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),". In other words, the interface isn't directly accessible from a remote connection. If you want to connect Deluge-web to a remote instance of an application (for instance, Sonarr running from home), you'll need to enable remote connections."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/getting-started/how-do-i-connect"},"SSH")," into your slot and issue the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"box stop deluge-web\nsed -i 's/127.0.0.1/0.0.0.0/g' ~/.config/deluge/web.conf\nbox start deluge-web\n")),(0,l.kt)("p",null,"You can now connect to your Deluge-web instance through ",(0,l.kt)("inlineCode",{parentName:"p"},"http://hostname.ltd:<delugeport>")))}g.isMDXComponent=!0}}]);