"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[2542,865],{6371:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return v}});var n=a(7462),i=a(3366),s=(a(7294),a(4137)),l=a(5529),o=a(8448),r=a(9124),d=a(4976),u=["components"],p={id:"plex",title:"Plex",sidebar_label:"Plex"},c=void 0,m={unversionedId:"applications/plex",id:"applications/plex",title:"Plex",description:"Plex media server allows you to aggregate all your personal media and access it anywhere you go.",source:"@site/docs/applications/plex.mdx",sourceDirName:"applications",slug:"/applications/plex",permalink:"/applications/plex",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/plex.mdx",tags:[],version:"current",frontMatter:{id:"plex",title:"Plex",sidebar_label:"Plex"},sidebar:"docs",previous:{title:"Navidrome",permalink:"/applications/navidrome"},next:{title:"Tautulli",permalink:"/applications/tautulli"}},h={},v=[{value:"Initial Setup",id:"initial-setup",level:2},{value:"Automatic claiming",id:"automatic-claiming",level:3},{value:"Post-install automatic claiming",id:"post-install-automatic-claiming",level:4},{value:"Manual claiming",id:"manual-claiming",level:3},{value:"Service Management",id:"service-management",level:2},{value:"Adding more users&#39; media to Plex",id:"adding-more-users-media-to-plex",level:2},{value:"Upgrading",id:"upgrading",level:2},{value:"Connect to other clients",id:"connect-to-other-clients",level:2}],k={toc:v};function y(e){var t=e.components,a=(0,i.Z)(e,u);return(0,s.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Plex media server allows you to aggregate all your personal media and access it anywhere you go."),(0,s.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,s.kt)("p",null,"First you must connect to your slot via ssh. If you need help connecting to the server, please read the help article ",(0,s.kt)("a",{parentName:"p",href:"/getting-started/how-do-i-connect"},"here"),"."),(0,s.kt)("p",null,"Installing Plex on your slot is easy. Simply issue the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"sudo box install plex\n")),(0,s.kt)("h3",{id:"automatic-claiming"},"Automatic claiming"),(0,s.kt)("p",null,"As of v1.6.0, swizzin now supports claiming your server during the installation. When you install Plex, you'll be greeted by the prompt:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-wrap"},"Please visit https://www.plex.tv/claim, login, copy your plex claim token to your clipboard and paste it here. This will automatically claim your server! Otherwise, you can leave this blank and to tunnel to the port instead.\n")),(0,s.kt)("p",null,"Simply visit ",(0,s.kt)("a",{parentName:"p",href:"https://www.plex.tv/claim"},"the link")," to grab your claim code and paste it into the terminal. After Plex is installed, the script will use the claim code to grab a valid token for your user and apply it to your server."),(0,s.kt)("h4",{id:"post-install-automatic-claiming"},"Post-install automatic claiming"),(0,s.kt)("p",null,"If for some reason you didn't claim during installation, you can still run the command manually from SSH."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'claim="<your plex.tv/claim code>" #Change this value.\n. /etc/swizzin/sources/globals.sh\n. /etc/swizzin/sources/functions/plex\nclaimPlex "${claim}"\n')),(0,s.kt)("p",null,"The function will run and if all goes well, you'll receive a ",(0,s.kt)("inlineCode",{parentName:"p"},"success")," message stating that your server as been claimed under your account."),(0,s.kt)("h3",{id:"manual-claiming"},"Manual claiming"),(0,s.kt)("p",null,"After installation, you'll need to create an SSH Tunnel to your server to appear as if you're using the same network as your Plex instance."),(0,s.kt)("p",null,"If you've gotten this far, I'll assume you don't need any reminders on how to connect to the server via SSH ;) However, creating an SSH tunnel takes a bit more effort than simply creating an SSH Connection."),(0,s.kt)("div",{class:"panel"},(0,s.kt)(l.Z,{defaultValue:"linux",values:[{label:"Linux & OSX",value:"linux"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"linux",mdxType:"TabItem"},(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("ol",{parentName:"div"},(0,s.kt)("li",{parentName:"ol"},"Open a command prompt or terminal"),(0,s.kt)("li",{parentName:"ol"},"Enter the command: ",(0,s.kt)("inlineCode",{parentName:"li"},"ssh username@hostname.ltd -L 8888:localhost:plexport")),(0,s.kt)("li",{parentName:"ol"},"Open your browser window and navigate to ",(0,s.kt)("inlineCode",{parentName:"li"},"http://localhost:8888/web")),(0,s.kt)("li",{parentName:"ol"},"The browser will connect to your Plex server and let you know that there is an unclaimed server on your network."))))),(0,s.kt)(o.Z,{value:"windows",mdxType:"TabItem"},(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Please be aware that cmd.exe now ships support for SSH out of the box, so you can very likely use the instructions in the previous tab. If you don't have ",(0,s.kt)("inlineCode",{parentName:"p"},"ssh")," in ",(0,s.kt)("inlineCode",{parentName:"p"},"cmd"),", then use PuTTY."),(0,s.kt)("ol",{parentName:"div"},(0,s.kt)("li",{parentName:"ol"},"Open up your PuTTY client again."),(0,s.kt)("li",{parentName:"ol"},"Under gateway, enter the hostname of your server, e.g.: ",(0,s.kt)("inlineCode",{parentName:"li"},"yourhostname.ltd")),(0,s.kt)("li",{parentName:"ol"},"Configure the tunnel:",(0,s.kt)("ol",{parentName:"li"},(0,s.kt)("li",{parentName:"ol"},"On the left hand side, navigate to ",(0,s.kt)("inlineCode",{parentName:"li"},"Connection > SSH > Tunnels")),(0,s.kt)("li",{parentName:"ol"},"Under source port, enter ",(0,s.kt)("inlineCode",{parentName:"li"},"8888")),(0,s.kt)("li",{parentName:"ol"},"Under destination, enter ",(0,s.kt)("inlineCode",{parentName:"li"},"localhost:plexport")," "),(0,s.kt)("li",{parentName:"ol"},"Click ",(0,s.kt)("inlineCode",{parentName:"li"},"Add")))),(0,s.kt)("li",{parentName:"ol"},"Connect to the server by clicking ",(0,s.kt)("inlineCode",{parentName:"li"},"Open")),(0,s.kt)("li",{parentName:"ol"},"PuTTY will prompt you for your username and password like a regular SSH session."),(0,s.kt)("li",{parentName:"ol"},"Once connected, open your browser and navitage to ",(0,s.kt)("inlineCode",{parentName:"li"},"http://localhost:8888/web"))),(0,s.kt)("p",{parentName:"div"},"The browser will connect to your Plex server and let you know that there is an unclaimed server on your network.")))))),(0,s.kt)("h2",{id:"service-management"},"Service Management"),(0,s.kt)("p",null,"The systemd service file resides at:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"/lib/systemd/system/plexmediaserver.service\n")),(0,s.kt)("p",null,"It is not recommended to make edits directly to this file. If you must, please use an override (i.e. ",(0,s.kt)("inlineCode",{parentName:"p"},"systemctl edit plexmediaserver"),")"),(0,s.kt)(r.default,{service:"plexmediaserver",mdxType:"SystemdTabs"}),(0,s.kt)("h2",{id:"adding-more-users-media-to-plex"},"Adding more users' media to Plex"),(0,s.kt)(d.default,{serviceName:"Plex",serviceUsr:"plex",mdxType:"PermsSrv"}),(0,s.kt)("h2",{id:"upgrading"},"Upgrading"),(0,s.kt)("p",null,"You will notice that Plex releases new server installers quite regularly and often. You can handle these ",(0,s.kt)("em",{parentName:"p"},"either")," on your own via ",(0,s.kt)("inlineCode",{parentName:"p"},"apt"),", or you can run ",(0,s.kt)("inlineCode",{parentName:"p"},"box upgrade plex")," which will install an automatic update job, and even allow you to use the beta Plex Pass releases if you desire. Feel free to re-run it any time you want it to upgrade again."),(0,s.kt)("h2",{id:"connect-to-other-clients"},"Connect to other clients"),(0,s.kt)("p",null,"If you need to link your Plex instance to another application, such as Sonarr or Tautulli, you can use the following details:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:"main",main:!0},"Host: 127.0.0.1\nPort: <your plex port>\n")))}y.isMDXComponent=!0},4976:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return c}});var n=a(7462),i=a(3366),s=(a(7294),a(4137)),l=a(2380),o=["components"],r={},d=void 0,u={unversionedId:"snippets/permsmediasrv",id:"snippets/permsmediasrv",title:"permsmediasrv",description:"{props.serviceName} runs as the user {props.serviceUsr}. This means, that this user needs to be able to read (and execute directories leading all the way up to) whatever you would like {props.serviceUsr} to play.",source:"@site/docs/snippets/permsmediasrv.mdx",sourceDirName:"snippets",slug:"/snippets/permsmediasrv",permalink:"/snippets/permsmediasrv",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/permsmediasrv.mdx",tags:[],version:"current",frontMatter:{}},p={},c=[],m={toc:c};function h(e){var t=e.components,a=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,a.serviceName," runs as the user ",(0,s.kt)("command",null,a.serviceUsr),". This means, that this user needs to be able to read (and execute directories leading all the way up to) whatever you would like ",a.serviceUsr," to play."),(0,s.kt)("p",null,"During the installation, only the master user is present in this group."),(0,s.kt)("p",null,"In order to access non-master-user files cleanly, please add the ",a.serviceUsr," user to the group of users who can access the desired user's files, and ensure that this group has access to the media you would like to access."),(0,s.kt)(l.Z,{children:"usermod -a -G <aUser> "+a.serviceUsr+"\nchmod g+rx -R /home/<aUser>",className:"bash",mdxType:"CodeBlock"}))}h.isMDXComponent=!0},9124:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return h}});var n=a(7462),i=a(3366),s=(a(7294),a(4137)),l=a(5529),o=a(8448),r=a(2380),d=["components"],u={},p=void 0,c={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",sourceDirName:"snippets",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",tags:[],version:"current",frontMatter:{}},m={},h=[],v={toc:h};function k(e){var t=e.components,a=(0,i.Z)(e,d);return(0,s.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"code"},(0,s.kt)(l.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"status",mdxType:"TabItem"},(0,s.kt)(r.Z,{children:"sudo systemctl status "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,s.kt)(o.Z,{value:"start",mdxType:"TabItem"},(0,s.kt)(r.Z,{children:"sudo systemctl start "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,s.kt)(o.Z,{value:"stop",mdxType:"TabItem"},(0,s.kt)(r.Z,{children:"sudo systemctl stop "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,s.kt)(o.Z,{value:"restart",mdxType:"TabItem"},(0,s.kt)(r.Z,{children:"sudo systemctl restart "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,s.kt)(o.Z,{value:"enable",mdxType:"TabItem"},(0,s.kt)(r.Z,{children:"sudo systemctl enable "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,s.kt)(o.Z,{value:"disable",mdxType:"TabItem"},(0,s.kt)(r.Z,{children:"sudo systemctl disable "+a.service,className:"bash",mdxType:"CodeBlock"})))))}k.isMDXComponent=!0}}]);