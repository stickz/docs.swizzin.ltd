"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[5813],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return y}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1163:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(4137)),a=["components"],l={id:"how-do-i-connect",title:"How do I connect to the server?",sidebar_label:"How do I connect to the server?"},s=void 0,u={unversionedId:"getting-started/how-do-i-connect",id:"getting-started/how-do-i-connect",title:"How do I connect to the server?",description:"In order to connect to your slot for installation, you'll need to access your slot via SSH. Never done that before? Fear not! Read on to find out more.",source:"@site/docs/getting-started/how-do-i-connect.md",sourceDirName:"getting-started",slug:"/getting-started/how-do-i-connect",permalink:"/getting-started/how-do-i-connect",draft:!1,editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/getting-started/how-do-i-connect.md",tags:[],version:"current",frontMatter:{id:"how-do-i-connect",title:"How do I connect to the server?",sidebar_label:"How do I connect to the server?"},sidebar:"docs",previous:{title:"Installation",permalink:"/getting-started/"},next:{title:"Getting started with box",permalink:"/getting-started/box-basics"}},c={},p=[{value:"Step-by-step guide (Linux/OS X/Windows 10+)",id:"step-by-step-guide-linuxos-xwindows-10",level:2},{value:"Step-by-step guide (PuTTY)",id:"step-by-step-guide-putty",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In order to connect to your slot for installation, you'll need to access your slot via SSH. Never done that before? Fear not! Read on to find out more."),(0,i.kt)("p",null,"When you received your server or VPS, you should have received an email with the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An IP"),(0,i.kt)("li",{parentName:"ul"},"A username (often ",(0,i.kt)("inlineCode",{parentName:"li"},"root"),")"),(0,i.kt)("li",{parentName:"ul"},"A password")),(0,i.kt)("p",null,"We'll use all of these pieces of information to connect to your server"),(0,i.kt)("h2",{id:"step-by-step-guide-linuxos-xwindows-10"},"Step-by-step guide (Linux/OS X/Windows 10+)"),(0,i.kt)("p",null,"Connecting to your slot via Linux or OSX is trivial:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open a terminal or command prompt/powershell"),(0,i.kt)("li",{parentName:"ol"},"Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"ssh <username>@<hostname>"),"\neg: ",(0,i.kt)("inlineCode",{parentName:"li"},"ssh liara@server.swizzin.ltd")),(0,i.kt)("li",{parentName:"ol"},'If this is your first time connecting, you will be asked to accept the host\'s public key. Type "yes" to verify.'),(0,i.kt)("li",{parentName:"ol"},"Enter your password")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(Recommended) Setup ",(0,i.kt)("a",{parentName:"li",href:"https://www.cyberciti.biz/faq/how-to-set-up-ssh-keys-on-linux-unix/"},"public/private keypair")," authentication"),(0,i.kt)("li",{parentName:"ul"},"(Bonus) Encrypt your key with a password during creation")),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Done!")),(0,i.kt)("h2",{id:"step-by-step-guide-putty"},"Step-by-step guide (PuTTY)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you don't already have PuTTY installed, you can grab it ",(0,i.kt)("a",{parentName:"p",href:"https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html"},"here"),". Once downloaded, click the .exe and follow the instructions to install.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once installed you can enter your server details including username and password")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On first login you may be presented with a warning - this is to confirm that the server identity is correct.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From there user your username and password to log in. If you are successful you should see a default Linux command prompt, and can now install applications."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Linux *.swizzin.ltd 5.10.0-11-amd64 #1 SMP Debian 5.10.92-2 (2022-02-28) x86_64\n\nThe programs included with the Debian GNU/Linux system are free software;\nthe exact distribution terms for each program are described in the\nindividual files in /usr/share/doc/*/copyright.\n\nDebian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent\npermitted by applicable law.\n\u279c  ~ \n\n")))}m.isMDXComponent=!0}}]);