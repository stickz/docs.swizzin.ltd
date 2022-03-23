"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[4300,865],{485:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(4137)),o=n(9124),l=["components"],s={id:"qbittorrent",title:"qBittorrent",sidebar_label:"qBittorrent"},p=void 0,d={unversionedId:"applications/qbittorrent",id:"applications/qbittorrent",title:"qBittorrent",description:"The qBittorrent project aims to provide an open-source software alternative to \xb5Torrent. It is written in C++ and uses Boost, Qt toolkit, and libtorrent-rasterbar library.",source:"@site/docs/applications/qbittorrent.mdx",sourceDirName:"applications",slug:"/applications/qbittorrent",permalink:"/applications/qbittorrent",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/qbittorrent.mdx",tags:[],version:"current",frontMatter:{id:"qbittorrent",title:"qBittorrent",sidebar_label:"qBittorrent"},sidebar:"docs",previous:{title:"Flood",permalink:"/applications/flood"},next:{title:"rTorrent",permalink:"/applications/rtorrent"}},c={},u=[{value:"Initial Setup",id:"initial-setup",level:2},{value:"Install Errata",id:"install-errata",level:3},{value:"qBittorrent Version",id:"qbittorrent-version",level:3},{value:"Unattended variables",id:"unattended-variables",level:4},{value:"Libtorrent Patching",id:"libtorrent-patching",level:4},{value:"Upgrading and Recompiling",id:"upgrading-and-recompiling",level:2},{value:"How to Access",id:"how-to-access",level:2},{value:"Web UI",id:"web-ui",level:3},{value:"Service Management",id:"service-management",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Default Download Location",id:"default-download-location",level:3},{value:"Web Download Location",id:"web-download-location",level:3},{value:"Connect to other clients",id:"connect-to-other-clients",level:2},{value:"Transdroid",id:"transdroid",level:3},{value:"Other Local Clients",id:"other-local-clients",level:3},{value:"3rd Party Utilities:",id:"3rd-party-utilities",level:2}],m={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The qBittorrent project aims to provide an open-source software alternative to \xb5Torrent. It is written in C++ and uses Boost, Qt toolkit, and libtorrent-rasterbar library."),(0,r.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,r.kt)("p",null,"Installing qBittorrent is easy. Simply issue the following command from SSH:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo box install qbittorrent\n")),(0,r.kt)("p",null,"This command will configure qBittorrent and the associated web interface for use with your user."),(0,r.kt)("p",null,"After installation, if there will be two 2 new packages installed: ",(0,r.kt)("inlineCode",{parentName:"p"},"libtorrent-rasterbar"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"qbittorrent-nox")," (aka qBittorrent no X). The package name for ",(0,r.kt)("inlineCode",{parentName:"p"},"libtorrent")," does not interfere with any apt packages and should not issue any upgrade warnings when upgrading packages with ",(0,r.kt)("inlineCode",{parentName:"p"},"apt-get"),"."),(0,r.kt)("h3",{id:"install-errata"},"Install Errata"),(0,r.kt)("p",null,"If you were an early adopter of qBittorrent (i.e. before October 8th 2020), then a few extra packages got installed which also started background services if you chose to compile qBittorent."),(0,r.kt)("p",null,'qBittorrent will no longer install "recommended" packages, but out of respect for your system, these recommended packages/services will not be automatically removed as they may be required packages in certain circumstances. If you have the following packages on your system they should be safe to stop their services and/or remove them as well if you had them installed through the qBit build pipeline. ',(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"PLEASE DOUBLE CHECK THESE YOURSELF AND IF IN DOUBT DISABLE SERVICES BEFORE REMOVING THEM!!!!"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"avahi-daemon (Bonjour for linux, aka, LAN Device Discovery)"),(0,r.kt)("li",{parentName:"ul"},"wpasupplicant (Used for configuring wifi access points)"),(0,r.kt)("li",{parentName:"ul"},"modemmanager (Used for configuring modems)")),(0,r.kt)("p",null,"The services can be stopped with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo systemctl stop wpa_supplicant ModemManager avahi-daemon\n")),(0,r.kt)("p",null,"If you are satisfied they are not required, these packages can be purged or disabled:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apt purge avahi-daemon wpasupplicant modemmanager\nsudo apt autoremove\n")),(0,r.kt)("p",null,"OR"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo systemctl disable --now wpa_supplicant ModemManager avahi-daemon\n")),(0,r.kt)("h3",{id:"qbittorrent-version"},"qBittorrent Version"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Repo"),": performs an ",(0,r.kt)("inlineCode",{parentName:"li"},"apt-get install qbittorrent-nox")," and pulls whatever is available from your operating system's repository. To check versions, you can use the ",(0,r.kt)("a",{parentName:"li",href:"https://www.debian.org/distrib/packages"},"Debian Package Tracker")," or the ",(0,r.kt)("a",{parentName:"li",href:"https://packages.ubuntu.com/"},"Ubuntu Package Tracker"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"qBittorrent 4.","*"),": Downloads the latest 4.* release from qBittorrent's github repo and uses ",(0,r.kt)("inlineCode",{parentName:"li"},"fpm")," to package it as a .deb for easy installation and removal with ",(0,r.kt)("inlineCode",{parentName:"li"},"dpkg"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Version availability on Debian Stretch or Ubuntu Xenial is limited due to outdated QT/SSL dependencies.")))),(0,r.kt)("h4",{id:"unattended-variables"},"Unattended variables"),(0,r.kt)("p",null,"When installing qBittorrent, you may specify the variable ",(0,r.kt)("inlineCode",{parentName:"p"},"QBITTORRENT_VERSION")," to bypass the version popup. Accepted values are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"repo")," -- Will install qBittorrent from your OS repository"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"4.1.*(.*)")," -- To compile any release from 4.1. For example: ",(0,r.kt)("inlineCode",{parentName:"li"},"4.1.9.1")," will compile 4.1.9.1 directly"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"4.2.*(.*)")," -- To compile any release from 4.2. For example: ",(0,r.kt)("inlineCode",{parentName:"li"},"4.2.5")," will compile 4.2.5 directly"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"4.3.*(.*)")," -- To compile any release from 4.3. For example: ",(0,r.kt)("inlineCode",{parentName:"li"},"4.3.3")," will compile 4.3.3 directly"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"latest")," -- Compiles the most recent version of qBittorrent")),(0,r.kt)("h4",{id:"libtorrent-patching"},"Libtorrent Patching"),(0,r.kt)("p",null,"If you would like to patch the settings pack of libtorrent (or any other aspect for that matter), the libtorrent compile will check if ",(0,r.kt)("inlineCode",{parentName:"p"},"/root/libtorrent-{RC_1_1,RC_1_2}.patch")," exists. If it does, then the installer will automatically patch the libtorrent source with this patch before libtorrent is compiled. This may be of note since the ltconfig plugin does not exist for qBittorent, thus if you are interested in changing certain settings pack settings for qBittorrent settings which are not currently exposed through the WebUI, then this is the only way to change those settings without manually compiling libtorrent."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RC_1_1")," is used when compiling libtorrent 1.1.* (e.g. Deluge 1.3.15 and qBittorrent 4.1.","*",")"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RC_1_2")," is used when compiling libtorrent 1.2.* (e.g. Deluge 2.0 and qBittorrent >= 4.2)"),(0,r.kt)("p",null,"You must supply your own patch!"),(0,r.kt)("h2",{id:"upgrading-and-recompiling"},"Upgrading and Recompiling"),(0,r.kt)("p",null,"If you decide you'd like to change the version of qBittorrent/libtorrent you've installed, or you would like to rebuild your current versions against the most recent source, you can recompile and upgrade qBittorrent at any time with the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo box upgrade qbittorrent\n")),(0,r.kt)("p",null,"This command will start the qBittorrent upgrade script. The installer will ask which version of qBittorrent you'd like to install and will then work on installing it. A second check will run to determine whether or not you are able to skip libtorrent compilation and prompt you of your choice."),(0,r.kt)("h2",{id:"how-to-access"},"How to Access"),(0,r.kt)("h3",{id:"web-ui"},"Web UI"),(0,r.kt)("p",null,"The web UI is significantly easier to access, which is why many prefer it. You can access qBittorrent from ",(0,r.kt)("inlineCode",{parentName:"p"},"https://yourhost.ltd/qbittorrent"),"."),(0,r.kt)("p",null,"If you are not currently logged in, you will first receive a basic authentication dialog from the webserver. Once authenticated, you'll receive a secondary prompt from qBittorrent. This password is the same as the one you just entered."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This second password authentication layer can be disabled in the qBittorrent WebUI settings (",(0,r.kt)("inlineCode",{parentName:"p"},"Bypass auth for localhost"),"). However, security implications exist if you are sharing your server with other users. If you disable localhost auth for the web UI, other users on the server can access the qBittorrent port directly from CLI -- so please only turn this option on if you trust the users on your server!"))),(0,r.kt)("h2",{id:"service-management"},"Service Management"),(0,r.kt)("p",null,"These systemd service can be found here:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/etc/systemd/system/qbittorrent@.service\n")),(0,r.kt)("p",null,"Multi-user is enabled, so in order to manipulate the service, you'll also need to specify a username."),(0,r.kt)(o.default,{service:"qbittorrent@<username>",mdxType:"SystemdTabs"}),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Feel free to edit the majority of the settings here, but do not change the WebUI port if you expect the nginx proxy to continue working!"),(0,r.kt)("h3",{id:"default-download-location"},"Default Download Location"),(0,r.kt)("p",null,"Files downloaded by qBittorrent will be placed in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/torrents/qbittorrent")," by default. You can change this behavior by change the preference: ",(0,r.kt)("inlineCode",{parentName:"p"},"Download to")," in the qBittorrent download preferences."),(0,r.kt)("h3",{id:"web-download-location"},"Web Download Location"),(0,r.kt)("p",null,"Similarly, any files in the default download directory (",(0,r.kt)("inlineCode",{parentName:"p"},"~/torrents/qbittorrent"),") will be available for browsing via the web server at the location: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://<yourhostname.ltd>/qbittorrent.downloads")),(0,r.kt)("h2",{id:"connect-to-other-clients"},"Connect to other clients"),(0,r.kt)("p",null,"The following variables can be used as a general guide to help you find information you'll need to know in order to connect other clients to qBittorrent."),(0,r.kt)("h3",{id:"transdroid"},"Transdroid"),(0,r.kt)("p",null,"Use these settings when connecting your transdroid client to your qBittorrent instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"IP or Hostname: <yourhostname.ltd>\nUser name: <your username>\nPassword: <your password>\nAdvanced Settings:\nPort Number: 443\nFolder: /qbittorrent\nUse SSL: On\nAccept all SSL certificates: yes (optional with a valid ssl certificate)\n")),(0,r.kt)("h3",{id:"other-local-clients"},"Other Local Clients"),(0,r.kt)("p",null,"Settings for connecting another local client (i.e. Sonarr), to your qBittorrent instance:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Host: ",(0,r.kt)("inlineCode",{parentName:"li"},"127.0.0.1")),(0,r.kt)("li",{parentName:"ul"},"Port: ",(0,r.kt)("inlineCode",{parentName:"li"},"Found in WebUI section of qBittorrent")),(0,r.kt)("li",{parentName:"ul"},"Username: ",(0,r.kt)("inlineCode",{parentName:"li"},"Your username")),(0,r.kt)("li",{parentName:"ul"},"Password: ",(0,r.kt)("inlineCode",{parentName:"li"},"Your password"))),(0,r.kt)("h2",{id:"3rd-party-utilities"},"3rd Party Utilities:"),(0,r.kt)("p",null,"API Handlers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pypi.org/project/qbittorrent-api/"},"qbittorrent-api")," (pip installable)")),(0,r.kt)("p",null,"AutoDL helpers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ckcr4lyf/qbit-race"},"qbit-race")," (with reannounce support)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ludviglundgren/qbittorrent-cli"},"qbittorrent-cli")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gitlab.com/AlexKM/qbit-tools"},"qbit-tools"))),(0,r.kt)("p",null,"Torrent Handlers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pypi.org/project/autoremove-torrents/"},"autoremove-torrents")," (Also works with Deluge and Transmission)")))}h.isMDXComponent=!0},9124:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return h}});var a=n(7462),i=n(3366),r=(n(7294),n(4137)),o=n(5529),l=n(8448),s=n(2380),p=["components"],d={},c=void 0,u={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",sourceDirName:"snippets",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",tags:[],version:"current",frontMatter:{}},m={},h=[],k={toc:h};function b(e){var t=e.components,n=(0,i.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"code"},(0,r.kt)(o.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"status",mdxType:"TabItem"},(0,r.kt)(s.Z,{children:"sudo systemctl status "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(l.Z,{value:"start",mdxType:"TabItem"},(0,r.kt)(s.Z,{children:"sudo systemctl start "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(l.Z,{value:"stop",mdxType:"TabItem"},(0,r.kt)(s.Z,{children:"sudo systemctl stop "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(l.Z,{value:"restart",mdxType:"TabItem"},(0,r.kt)(s.Z,{children:"sudo systemctl restart "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(l.Z,{value:"enable",mdxType:"TabItem"},(0,r.kt)(s.Z,{children:"sudo systemctl enable "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(l.Z,{value:"disable",mdxType:"TabItem"},(0,r.kt)(s.Z,{children:"sudo systemctl disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}b.isMDXComponent=!0}}]);