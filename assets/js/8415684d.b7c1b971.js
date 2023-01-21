"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[4859],{4137:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),g=r,f=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return t?i.createElement(f,a(a({ref:n},p),{},{components:t})):i.createElement(f,a({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},7981:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var i=t(7462),r=t(3366),o=(t(7294),t(4137)),a=["components"],l={id:"nginx",title:"Nginx",sidebar_label:"Nginx"},s=void 0,c={unversionedId:"applications/nginx",id:"applications/nginx",title:"Nginx",description:"nginx is a high performance web and proxy server",source:"@site/docs/applications/nginx.mdx",sourceDirName:"applications",slug:"/applications/nginx",permalink:"/applications/nginx",draft:!1,editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/nginx.mdx",tags:[],version:"current",frontMatter:{id:"nginx",title:"Nginx",sidebar_label:"Nginx"},sidebar:"docs",previous:{title:"Netdata",permalink:"/applications/netdata"},next:{title:"Organizr",permalink:"/applications/organizr"}},p={},u=[{value:"Initial Setup",id:"initial-setup",level:2},{value:"swizzin-specific nginx info",id:"swizzin-specific-nginx-info",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"nginx won&#39;t start",id:"nginx-wont-start",level:3},{value:"nginx logs",id:"nginx-logs",level:3},{value:"Common error codes",id:"common-error-codes",level:3},{value:"502 Gateway error",id:"502-gateway-error",level:4},{value:"403 Forbidden",id:"403-forbidden",level:4}],d={toc:u};function g(e){var n=e.components,t=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"nginx is a high performance web and proxy server"),(0,o.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,o.kt)("p",null,"Installing nginx is easy. Simply issue the following command from SSH:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:"main",main:!0},"sudo box install nginx\n")),(0,o.kt)("p",null,"This command will install and configure nginx for your user. Generally we recommend installing this first, which is why it is at the top of the list of install choices during setup."),(0,o.kt)("h2",{id:"swizzin-specific-nginx-info"},"swizzin-specific nginx info"),(0,o.kt)("p",null,"The default swizzin virtualhost resides at: ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/nginx/sites-enabled/default")),(0,o.kt)("p",null,"The swizzin virtualhost by default will import and store application proxy/location information in the directory ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/nginx/apps"),". You can place your custom configurations here if you want to add additional location blocks unmanged by swizzin. You can also place your configs in subdirectories of this directory. Try to avoid using names already in use by swizzin for your own apps."),(0,o.kt)("p",null,'swizzin also makes use of "upstream" configurations to handle proxying certain multi-user applications (i.e. Deluge, qBittorrent, etc). These upstreams may be found in ',(0,o.kt)("inlineCode",{parentName:"p"},"/etc/nginx/conf.d")),(0,o.kt)("p",null,"Finally, if you ever make any mistakes or changes to nginx and it stops working, the command ",(0,o.kt)("inlineCode",{parentName:"p"},"box upgrade nginx"),' will wipe out your current configs and re-run all the nginx-related scripts for the applications you have currently installed. In essence, this will "fix" your broken nginx by resetting it to the state that swizzin expects it to be in. If you have made any modifications you wish to save, please back them up before running this command as it\'s considered destructive.'),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h3",{id:"nginx-wont-start"},"nginx won't start"),(0,o.kt)("p",null,"The holy grail command for troubleshooting nginx failures is"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo nginx -t\n")),(0,o.kt)("p",null,"This command will scan your current configuration and run syntax and sanity checks against it. If for any reason it finds an error in your configs, ",(0,o.kt)("inlineCode",{parentName:"p"},"nginx -t")," will tell you exactly where the issue is so you can rectify the error (perhaps it's a duplicate line or some other config issue you should google for)."),(0,o.kt)("h3",{id:"nginx-logs"},"nginx logs"),(0,o.kt)("p",null,"nginx stores its logs in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/log/nginx")," directory. In this directory you'll find both ",(0,o.kt)("inlineCode",{parentName:"p"},"error.log")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"access.log"),". If you are troubleshooting gateway/proxy issues, then ",(0,o.kt)("inlineCode",{parentName:"p"},"error.log")," will be your best bet. If for some reason you are trying to debug access controls then ",(0,o.kt)("inlineCode",{parentName:"p"},"access.log")," stores a log of every hit to the nginx server."),(0,o.kt)("h3",{id:"common-error-codes"},"Common error codes"),(0,o.kt)("h4",{id:"502-gateway-error"},"502 Gateway error"),(0,o.kt)("p",null,"The application you are trying to reach is likely down (not running). Please ensure the application is in fact running. If it is running and the error persists, you likely have a port mismatch between where the application is bound to (application config) and where nginx expects this application to be at (application proxy config). If you rectify the port mismatch, and reload nginx/the application, the connection should be fixed."),(0,o.kt)("h4",{id:"403-forbidden"},"403 Forbidden"),(0,o.kt)("p",null,"If you have received this after installing swizzin and are attempting to access the panel, then you have not installed the panel. Install the panel with ",(0,o.kt)("inlineCode",{parentName:"p"},"box install panel"),". If you are receiving this on another endpoint other than the top level of your domain, then your username/password is incorrect."))}g.isMDXComponent=!0}}]);