"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[1617,865],{9551:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return k}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),i=n(9733),s=n(9124),l=n(9263),d=["components"],p={id:"radarr",title:"Radarr",sidebar_label:"Radarr"},u=void 0,c={unversionedId:"applications/radarr",id:"applications/radarr",title:"Radarr",description:"Radarr is a movie collection manager for Usenet and BitTorrent users. It can monitor multiple RSS feeds for new movies and will interface with clients and indexers to grab, sort, and rename them.",source:"@site/docs/applications/radarr.mdx",sourceDirName:"applications",slug:"/applications/radarr",permalink:"/applications/radarr",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/radarr.mdx",tags:[],version:"current",frontMatter:{id:"radarr",title:"Radarr",sidebar_label:"Radarr"},sidebar:"docs",previous:{title:"Sonarr",permalink:"/applications/sonarr"},next:{title:"Prowlarr",permalink:"/applications/prowlarr"}},m={},k=[{value:"Initial Setup",id:"initial-setup",level:2},{value:"Optional parameters",id:"optional-parameters",level:3},{value:"How to Access",id:"how-to-access",level:2},{value:"Service Management",id:"service-management",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Connect download clients",id:"connect-download-clients",level:3},{value:"Add an indexer with Jackett",id:"add-an-indexer-with-jackett",level:3},{value:"Migrating to v3 on .Net Core",id:"migrating-to-v3-on-net-core",level:2}],h={toc:k};function g(e){var t=e.components,n=(0,r.Z)(e,d);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Radarr is a movie collection manager for Usenet and BitTorrent users. It can monitor multiple RSS feeds for new movies and will interface with clients and indexers to grab, sort, and rename them.\nIt can also be configured to automatically upgrade the quality of existing files in the library when a better quality format becomes available."),(0,o.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,o.kt)("p",null,"Installing Radarr is easy. Simply issue the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo box install radarr\n")),(0,o.kt)("p",null,"This command will configure radarr for your user."),(0,o.kt)("h3",{id:"optional-parameters"},"Optional parameters"),(0,o.kt)(i.default,{mdxType:"InstallOptsWarning"}),(0,o.kt)("p",null,"The following is an example of how this would look"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"export radarrOwner='autodlbot'\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"radarrOwner"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Used to specify a non-master user which radarr will run as after the installation.")))),(0,o.kt)("h2",{id:"how-to-access"},"How to Access"),(0,o.kt)("p",null,"After Radarr has been installed, it will be available for access at ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<hostname.ltd>/radarr"),"."),(0,o.kt)("h2",{id:"service-management"},"Service Management"),(0,o.kt)("p",null,"The Radarr service is managed by systemd and has been configured for single user usage. You can find the service file here:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/etc/systemd/system/radarr.service\n")),(0,o.kt)(s.default,{service:"radarr",mdxType:"SystemdTabs"}),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"The Radarr Team built a detailed ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.servarr.com/Radarr_Quick_Start_Guide"},"Quick Start Guide"),".\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.servarr.com/Radarr_FAQ"},"Radarr's FAQ")," may be of additional use as well."),(0,o.kt)("p",null,"Out of the box, Radarr comes with no configuration, so you'll need to set it up!"),(0,o.kt)("p",null,"Some important Swizzin specific information to note:"),(0,o.kt)("h3",{id:"connect-download-clients"},"Connect download clients"),(0,o.kt)(l.default,{mdxType:"Conn4Arrs"}),(0,o.kt)("h3",{id:"add-an-indexer-with-jackett"},"Add an indexer with Jackett"),(0,o.kt)("p",null,"Radarr only supports a few trackers out of the box, but the indexers can be expanded by using the application ",(0,o.kt)("a",{parentName:"p",href:"/applications/jackett"},"Jackett"),". To add an indexer with Jackett, use the following steps.\t"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\t")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"By default, when receiving the torznab feed from Jackett, it will need to be modified to be connected with the application. The default link looks like:\t"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"https://<yourhostname.ltd>/jackett/api/v2.0/indexers/yourtracker/results/torznab/   \n")),(0,o.kt)("p",{parentName:"div"},"We need to edit this link to ",(0,o.kt)("strong",{parentName:"p"},"remove https")," and ",(0,o.kt)("strong",{parentName:"p"},"add the port number"),". Thus, if your port number was ",(0,o.kt)("inlineCode",{parentName:"p"},"12345"),", your edited URL would look like this:\t"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"http://<yourhostname.ltd>:12345/jackett/api/v2.0/indexers/yourtracker/results/torznab/  \n")))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("inlineCode",{parentName:"li"},"Settings > Indexers")," and click ",(0,o.kt)("inlineCode",{parentName:"li"},"+")," to add a new indexer.\t"),(0,o.kt)("li",{parentName:"ol"},"Under ",(0,o.kt)("inlineCode",{parentName:"li"},"Torrent")," choose ",(0,o.kt)("inlineCode",{parentName:"li"},"Torznab"),"\t"),(0,o.kt)("li",{parentName:"ol"},"Use the settings:\t")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:"main",main:!0},"Name: <tracker name>    \nURL: <click copy torznab feed in jackett and modify as per above>   \nAPI: <copy and paste from jackett UI>   \n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Test"),". If all is good, click ",(0,o.kt)("inlineCode",{parentName:"li"},"Save"),".")),(0,o.kt)("h2",{id:"migrating-to-v3-on-net-core"},"Migrating to v3 on .Net Core"),(0,o.kt)("p",null,"Please follow the steps below to make sure you are using the Radarr v3 on the .Net binary"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Upgrade mono-based v0.2 to mono-based v3",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},'Trigger a backup manually by going to System -> Backup and press the "Backup" Button. Wait until the process has finished.'),(0,o.kt)("li",{parentName:"ol"},"Change the Release branch by going to Settings -> General -> Updates (ensure Advanced settings are shown), set the Branch value to ",(0,o.kt)("inlineCode",{parentName:"li"},"develop")," and then press the Save button."),(0,o.kt)("li",{parentName:"ol"},"Go to System -> Updates and install the latest update which should be version 3.x+"),(0,o.kt)("li",{parentName:"ol"},"Refresh your browser while emptying cache (CTRL+SHIFT+R on most browsers)"),(0,o.kt)("li",{parentName:"ol"},"Confirm you're running on version 3.x+ In System"),(0,o.kt)("li",{parentName:"ol"},"Change your branch back to ",(0,o.kt)("inlineCode",{parentName:"li"},"master")))),(0,o.kt)("li",{parentName:"ul"},"Migrate mono-based v3 to .Net-based v3",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo box update"),', which should Print out "',(0,o.kt)("inlineCode",{parentName:"li"},"Moving Radarr from mono to .Net"),'" When the migration to .net has begun'),(0,o.kt)("li",{parentName:"ol"},"Refresh your browser while emptying cache (CTRL+SHIFT+R on most browsers)")))),(0,o.kt)("p",null,"If you are not running Radarr as your master user, you can set the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"radarrOwner=<yourUser>"),"before the update, and the migration will respect the choice."))}g.isMDXComponent=!0},9263:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return k}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),i=n(5529),s=n(8448),l=n(2380),d=["components"],p={},u=void 0,c={unversionedId:"snippets/conn4arr",id:"snippets/conn4arr",title:"conn4arr",description:"To add a download client, go to Settings > Download Client. Make sure Advanced Settings are shown and click Add Client.",source:"@site/docs/snippets/conn4arr.mdx",sourceDirName:"snippets",slug:"/snippets/conn4arr",permalink:"/snippets/conn4arr",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/conn4arr.mdx",tags:[],version:"current",frontMatter:{}},m={},k=[],h={toc:k};function g(e){var t=e.components,n=(0,r.Z)(e,d);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To add a download client, go to ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings > Download Client"),". Make sure ",(0,o.kt)("inlineCode",{parentName:"p"},"Advanced Settings")," are shown and click ",(0,o.kt)("inlineCode",{parentName:"p"},"Add Client"),"."),(0,o.kt)(i.Z,{defaultValue:"rutorrent",values:[{label:"ruTorrent",value:"rutorrent"},{label:"Transmission",value:"transmission"},{label:"Deluge",value:"deluge"},{label:"nzbGet",value:"nzbget"},{label:"qBittorrent",value:"qbittorrent"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"rutorrent",mdxType:"TabItem"},(0,o.kt)(l.Z,{children:"Name: rTorrent\nrTorrent host: 127.0.0.1\nPort: 443\nURL Path: /rutorrent/plugins/httprpc/action.php\nUse SSL: ON\nUsername: <your username>\nPassword: <your password>\nAdd label to torrent: TV (or anything else you desire)\nOptional - Downloaded files location: <custom directory>",lang:"plaintext",mdxType:"CodeBlock"})),(0,o.kt)(s.Z,{value:"transmission",mdxType:"TabItem"},(0,o.kt)(l.Z,{children:"To retrieve your port, please run `grep rpc-port ~/.config/transmission-daemon/settings.json`,\nwhen logged in as the user you want to use transmission of (i.e. not root).\n----------\nHost: 127.0.0.1\nPort: <See above, e.g. 9091>\nURL Base: /transmission/ (Should be default)\nUsername: <your username>\nPassword: <your password>\nCategory: <optional, e.g. Sonarr or TV>\nConnect using HTTPS: OFF",lang:"plaintext",mdxType:"CodeBlock"})),(0,o.kt)(s.Z,{value:"deluge",mdxType:"TabItem"},(0,o.kt)(l.Z,{children:"Name: Deluge\nHost: 127.0.0.1\nPost: <deluge web port>\nDeluge Password: <your password>\nAdd label to torrent: TV (or anything else you desire)\n* label plugin must be enabled in Deluge if you add a label\nSSL: OFF",lang:"plaintext",mdxType:"CodeBlock"})),(0,o.kt)(s.Z,{value:"nzbget",mdxType:"TabItem"},(0,o.kt)(l.Z,{children:"NZBget host: 127.0.0.1\nport: 443\nURL Base: nzbget\nConnect using HTTPS: ON\nnzbget username: <your username>\nnzbget Password: <your password>\nAdd label to torrent: Series (or anything else you desire)\n* label must exist under Categories in nzbGet",lang:"plaintext",mdxType:"CodeBlock"})),(0,o.kt)(s.Z,{value:"qbittorrent",mdxType:"TabItem"},(0,o.kt)(l.Z,{children:"Name: qBittorrent\nHost: 127.0.0.1\nPost: <qbittorrent web port>\nUsername: <your username>\nPassword: <your password>\nCategory: TV (or anything else you desire)\nSSL: OFF",lang:"plaintext",mdxType:"CodeBlock"}))))}g.isMDXComponent=!0},9733:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),i=["components"],s={},l=void 0,d={unversionedId:"snippets/installoptswarning",id:"snippets/installoptswarning",title:"installoptswarning",description:"None of these are required for you to define if you want an easy install. If you would like to do something custom, then here are some options for you.",source:"@site/docs/snippets/installoptswarning.md",sourceDirName:"snippets",slug:"/snippets/installoptswarning",permalink:"/snippets/installoptswarning",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/installoptswarning.md",tags:[],version:"current",frontMatter:{}},p={},u=[],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"None of these are required for you to define if you want an easy install. If you would like to do something custom, then here are some options for you."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Make sure you know what you're doing!")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Please note that it is difficult for us to support these options as they are custom for each install")),(0,o.kt)("p",{parentName:"div"},"None of the options are sanity-checked on install so setting something wrong could break your installation."),(0,o.kt)("p",{parentName:"div"},"Again, you do not need to set these if you don't know what you're doing."))),(0,o.kt)("p",null,"There are a couple options you can set ",(0,o.kt)("strong",{parentName:"p"},"before")," installing transmission through export. "),(0,o.kt)("p",null,"If you'd like to use one of these, run ",(0,o.kt)("inlineCode",{parentName:"p"},"export option=value")," ",(0,o.kt)("strong",{parentName:"p"},"before")," running the install command."))}m.isMDXComponent=!0},9124:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return k}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),i=n(5529),s=n(8448),l=n(2380),d=["components"],p={},u=void 0,c={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",sourceDirName:"snippets",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",tags:[],version:"current",frontMatter:{}},m={},k=[],h={toc:k};function g(e){var t=e.components,n=(0,r.Z)(e,d);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"code"},(0,o.kt)(i.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"status",mdxType:"TabItem"},(0,o.kt)(l.Z,{children:"sudo systemctl status "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(s.Z,{value:"start",mdxType:"TabItem"},(0,o.kt)(l.Z,{children:"sudo systemctl start "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(s.Z,{value:"stop",mdxType:"TabItem"},(0,o.kt)(l.Z,{children:"sudo systemctl stop "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(s.Z,{value:"restart",mdxType:"TabItem"},(0,o.kt)(l.Z,{children:"sudo systemctl restart "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(s.Z,{value:"enable",mdxType:"TabItem"},(0,o.kt)(l.Z,{children:"sudo systemctl enable "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(s.Z,{value:"disable",mdxType:"TabItem"},(0,o.kt)(l.Z,{children:"sudo systemctl disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}g.isMDXComponent=!0}}]);