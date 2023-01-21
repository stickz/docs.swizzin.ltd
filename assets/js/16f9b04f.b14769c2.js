"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[2556],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8715:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a=n(7462),i=n(3366),r=(n(7294),n(4137)),o=["components"],l={id:"letsencrypt",title:"Letsencrypt",sidebar_label:"Letsencrypt"},s=void 0,u={unversionedId:"applications/letsencrypt",id:"applications/letsencrypt",title:"Letsencrypt",description:"SSL certificates made easy via the script acme.sh",source:"@site/docs/applications/letsencrypt.mdx",sourceDirName:"applications",slug:"/applications/letsencrypt",permalink:"/applications/letsencrypt",draft:!1,editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/letsencrypt.mdx",tags:[],version:"current",frontMatter:{id:"letsencrypt",title:"Letsencrypt",sidebar_label:"Letsencrypt"},sidebar:"docs",previous:{title:"Librespeed",permalink:"/applications/librespeed"},next:{title:"Netdata",permalink:"/applications/netdata"}},p={},c=[{value:"Installation",id:"installation",level:2},{value:"Before Install",id:"before-install",level:3},{value:"Setting up Let&#39;s Encrypt",id:"setting-up-lets-encrypt",level:3},{value:"Install options",id:"install-options",level:3},{value:"Renewals",id:"renewals",level:2},{value:"Changing domains (or adding secondaries)",id:"changing-domains-or-adding-secondaries",level:2},{value:"Certificate and Install Locations",id:"certificate-and-install-locations",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"SSL certificates made easy via the script ",(0,r.kt)("inlineCode",{parentName:"p"},"acme.sh")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("h3",{id:"before-install"},"Before Install"),(0,r.kt)("p",null,"Setting up your server with a Let's Encrypt certificate is easy, though it does require a couple steps. We use the helper script ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/neilpang/acme.sh"},"acme.sh")," for domain verification and easy renewals."),(0,r.kt)("p",null,"First, you must have your own domain or a subdomain already pointed at the IP address of your server. (An ",(0,r.kt)("inlineCode",{parentName:"p"},"A Record"),")."),(0,r.kt)("p",null,"If you need a domain name, there are plenty of registrars, here are two that I personally use ",(0,r.kt)("a",{parentName:"p",href:"https://namecheap.com"},"Namecheap"),"; however, if you already own your domain, you can consider transferring it to ",(0,r.kt)("a",{parentName:"p",href:"https://www.cloudflare.com/products/registrar/"},"CloudFlare")," to potentially save money."),(0,r.kt)("p",null,"If you are using the CloudFlare DNS option, you can use the DNS Verification method rather than the web-root verification method -- this method is a bit more resilient and less prone to future issues than the web-root error as domain verification doesn't take place on your server. If you have a CloudFlare proxy in front of your server (for instance), there can sometimes be issues with renewal which will cause it to fail. The DNS Verification should not fail where the web-root does."),(0,r.kt)("p",null,"If you'd like to use DNS verification for your CloudFlare domain, make sure you grab your API Key from your CloudFlare Profile (",(0,r.kt)("inlineCode",{parentName:"p"},"Profile > API Tokens > View Global API Key"),")."),(0,r.kt)("admonition",{title:"Warning",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Make sure you keep your API Key safe -- it's ",(0,r.kt)("strong",{parentName:"p"},"as good as")," your password in terms of modifying the settings on your account.")),(0,r.kt)("h3",{id:"setting-up-lets-encrypt"},"Setting up Let's Encrypt"),(0,r.kt)("p",null,"In order to start issuing a certificate use the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo box install letsencrypt\n")),(0,r.kt)("p",null,"A dialog box will pop up and ask you the domain you'd like to secure with LE:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Enter domain name to secure with LE\ndocs.swizzin.ltd\n")),(0,r.kt)("p",null,"And press enter. You'll be asked if you want to use this domain for your default site. If you say yes, the ",(0,r.kt)("inlineCode",{parentName:"p"},"server_name")," variable in the default nginx configuration will be updated with the provided domain. If you say no, the script will issue a certificate, but not apply it."),(0,r.kt)("p",null,'You\'ll be asked if you want to use CloudFlare. If you choose "No", the installer will continue with the web-root (.well-known) domain verification. If you choose "Yes", you\'ll be asked for your CloudFlare email and API Key (don\'t worry, this will never leave your server -- the key is stored in ',(0,r.kt)("inlineCode",{parentName:"p"},"/root/.acme.sh/account.conf")," for future renewals). After entering these details, the issuing will continue."),(0,r.kt)("p",null,"If everything goes well, acme.sh should declare success. If you reload your site, you should now be greeted by a valid SSL certificate, rather than a warning about invalid SSL."),(0,r.kt)("h3",{id:"install-options"},"Install options"),(0,r.kt)("p",null,"You can set these variables before running the script to skip the interactive questions. You can also use this in the Advanced setup."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Please note that we did not have a chance to test these values extremely thoroughly, let us know if something is not functioning as expected hen using these")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LE_hostname"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"domain.tld")),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"Interactive")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LE_defaultconf"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Whether or not to install the cert into nginx's ",(0,r.kt)("inlineCode",{parentName:"li"},"default.conf")),(0,r.kt)("li",{parentName:"ul"},"Options: ",(0,r.kt)("inlineCode",{parentName:"li"},"yes")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"no")),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"Interactive")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LE_bool_cf"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Used to specify whether or not to enable the CloudFlare portion of the script"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Note")," setting other ",(0,r.kt)("inlineCode",{parentName:"li"},"cf")," options mentioned below sets this to ",(0,r.kt)("inlineCode",{parentName:"li"},"yes"),". Set this to ",(0,r.kt)("inlineCode",{parentName:"li"},"no")," if you want to skip the cloudflare questions."),(0,r.kt)("li",{parentName:"ul"},"Options: ",(0,r.kt)("inlineCode",{parentName:"li"},"yes")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"no")),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"Interactive")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LE_cf_email"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"Interactive")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LE_cf_api"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"Interactive")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LE_cf_zoneexists"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Note")," setting  ",(0,r.kt)("inlineCode",{parentName:"li"},"LE_cf_zone")," option implies this to ",(0,r.kt)("inlineCode",{parentName:"li"},"no"),". Set this to ",(0,r.kt)("inlineCode",{parentName:"li"},"yes")," if your zone already exists."),(0,r.kt)("li",{parentName:"ul"},"Options: ",(0,r.kt)("inlineCode",{parentName:"li"},"yes")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"no")),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"Interactive")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LE_cf_zone"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("strong",{parentName:"li"},"Interactive"))))),(0,r.kt)("h2",{id:"renewals"},"Renewals"),(0,r.kt)("p",null,"Renewals are handled automatically via the cronjob that acme.sh installs during the initial run. If your server is configured correctly, you shouldn't have to worry about future renewals."),(0,r.kt)("h2",{id:"changing-domains-or-adding-secondaries"},"Changing domains (or adding secondaries)"),(0,r.kt)("p",null,"If you decide you've outgrown your old domain or want to update your domain, simply run the script again with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo box install letsencrypt\n")),(0,r.kt)("p",null,"There are no lock files associated with the LE script, so it can be run as many times as you like to issue certificates for as many domains as you desire."),(0,r.kt)("h2",{id:"certificate-and-install-locations"},"Certificate and Install Locations"),(0,r.kt)("p",null,"By default, the configuration files for acme.sh reside in:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/root/.acme.sh\n")),(0,r.kt)("p",null,'This folder contains "account" information and domains currently configured via acme.sh.'),(0,r.kt)("p",null,'SSL certificates are "installed" into your nginx directory as well and this is the location you should use with your scripts when configuring where the certificates are located on your machine:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/etc/nginx/ssl/<hostname.ltd>\n")))}m.isMDXComponent=!0}}]);