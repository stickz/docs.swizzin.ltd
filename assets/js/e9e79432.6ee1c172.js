"use strict";(self.webpackChunkswizzin_website=self.webpackChunkswizzin_website||[]).push([[1836,865,1687],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},425:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),i=n(6010),r="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,l),hidden:n},t)}},4259:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),i=n(7294),r=n(6010),l=n(1048),o=n(3609),s=n(1943),p=n(2957),u="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,n,l=e.lazy,c=e.block,m=e.defaultValue,h=e.values,f=e.groupId,k=e.className,y=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,o.l)(b,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===m?m:null!=(t=null!=m?m:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:y[0].props.value;if(null!==v&&!b.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),N=w.tabGroupChoices,T=w.setTabGroupChoices,C=(0,i.useState)(v),x=C[0],D=C[1],E=[],I=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var z=N[f];null!=z&&z!==x&&b.some((function(e){return e.value===z}))&&D(z)}var S=function(e){var t=e.currentTarget,n=E.indexOf(t),a=b[n].value;a!==x&&(I(t),D(a),null!=f&&T(f,String(a)))},P=function(e){var t,n=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":var a,i=E.indexOf(e.currentTarget)+1;n=null!=(a=E[i])?a:E[0];break;case"ArrowLeft":var r,l=E.indexOf(e.currentTarget)-1;n=null!=(r=E[l])?r:E[E.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},k)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return E.push(e)},onKeyDown:P,onClick:S},l,{className:(0,r.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),l?(0,i.cloneElement)(y.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,l.Z)();return i.createElement(c,(0,a.Z)({key:String(t)},e))}},4104:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return m}});var a=n(7462),i=n(3366),r=(n(7294),n(4137)),l=n(9124),o=n(9353),s=["components"],p={id:"panel",title:"Panel",sidebar_label:"Panel"},u=void 0,d={unversionedId:"applications/panel",id:"applications/panel",title:"Panel",description:"The dashboard is a graphical user interface which provides a central location for you to keep an eye on server statistics, personal usage information and your services.",source:"@site/docs/applications/panel.mdx",sourceDirName:"applications",slug:"/applications/panel",permalink:"/applications/panel",draft:!1,editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/applications/panel.mdx",tags:[],version:"current",frontMatter:{id:"panel",title:"Panel",sidebar_label:"Panel"},sidebar:"docs",previous:{title:"Organizr",permalink:"/applications/organizr"},next:{title:"Pyload",permalink:"/applications/pyload"}},c={},m=[{value:"How to Install",id:"how-to-install",level:2},{value:"How to Access",id:"how-to-access",level:2},{value:"Configuration options",id:"configuration-options",level:2},{value:"Service Management",id:"service-management",level:2},{value:"Features",id:"features",level:2},{value:"Application Links",id:"application-links",level:3},{value:"Server Statistics",id:"server-statistics",level:3},{value:"Statistic Graphs",id:"statistic-graphs",level:3},{value:"Personal Usage Statistics",id:"personal-usage-statistics",level:3},{value:"Service Management",id:"service-management-1",level:3},{value:"Customizing Application Settings",id:"customizing-application-settings",level:2},{value:"Application Profile Definitions",id:"application-profile-definitions",level:3},{value:"Application Definitions with a User",id:"application-definitions-with-a-user",level:3},{value:"Editing an existing application",id:"editing-an-existing-application",level:3},{value:"Adding a new definition",id:"adding-a-new-definition",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"I cannot log in",id:"i-cannot-log-in",level:3},{value:"403 forbidden on a fresh install",id:"403-forbidden-on-a-fresh-install",level:3},{value:"Logs",id:"logs",level:3},{value:"Why am I being rate-limited?",id:"why-am-i-being-rate-limited",level:3}],h={toc:m};function f(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The dashboard is a graphical user interface which provides a central location for you to keep an eye on server statistics, personal usage information and your services."),(0,r.kt)("h2",{id:"how-to-install"},"How to Install"),(0,r.kt)("p",null,"By default, the panel is not installed on swizzin installations, you must select it during install or install it afterwards via SSH with the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"sudo box install panel\n")),(0,r.kt)("p",null,"Setup will create a virtual python environment (",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/.venv/swizzin"),") and then clone the github repository (",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/swizzin"),")"),(0,r.kt)("h2",{id:"how-to-access"},"How to Access"),(0,r.kt)("p",null,"If nginx is currently installed, the dashboard is available at the web root for your IP/DNS:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"https://<hostname.ltd>")),(0,r.kt)("h2",{id:"configuration-options"},"Configuration options"),(0,r.kt)("p",null,"There should not be much need to alter config options, but a few currently exist. These options should be defined directly in ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/swizzin/swizzin.cfg"),". Please note, all config variables are uppercase:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ADMIN_USER"),' - Previously referred to as the "master" user. (Default: User with UID 1000)'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FLASK_HTPASSWD_PATH")," - The location of the htpasswd file to protect the panel with. (Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/htpasswd"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FLASK_AUTH_REALM")," - Text displayed during auth pop up"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FORMS_LOGIN")," - Whether or not to use the newer forms based login. (Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"True"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HOST")," - IP address to bind to (Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"0.0.0.0"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PORT")," - Bind port (Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"8333"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"URLBASE"),' - "Sub-path" to server the panel (Default: ',(0,r.kt)("inlineCode",{parentName:"li"},"/"),"). Make sure to adjust your nginx config."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RATELIMIT_ENABLED")," - Define whether or not rate limiting is active for non-logged-in users. (Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"True"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RATELIMIT_DEFAULT")," - Customize the default rate limiting period. (Default: ",(0,r.kt)("inlineCode",{parentName:"li"},'"5 per minute"'),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NETWORK_TOTALS")," - Display a additional column in the network widget with up/down transfers added together"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DEBUG")," - Turn off production mode and turn on the debugger. Prints response times and displays Python errors in the browser instead of causing internal server errors (Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"False"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SHAREDSERVER")," - Defines if this server is a swizzin enterprise server, you will probably never need to set this (Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"False"),")")),(0,r.kt)("h2",{id:"service-management"},"Service Management"),(0,r.kt)("p",null,"The systemd service file resides at:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"main",main:!0},"/etc/systemd/system/panel.service\n")),(0,r.kt)(l.default,{service:"panel",mdxType:"SystemdTabs"}),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("h3",{id:"application-links"},"Application Links"),(0,r.kt)("p",null,"On the left side of the dashboard, you'll find quick links to the currently installed applications on your slot. No need to remember the endpoints and ports yourself!"),(0,r.kt)("h3",{id:"server-statistics"},"Server Statistics"),(0,r.kt)("p",null,"The dashboard provides metrics for server load, CPU usage, and the current network metrics for upload and download speeds."),(0,r.kt)("h3",{id:"statistic-graphs"},"Statistic Graphs"),(0,r.kt)("p",null,"If you have the ",(0,r.kt)("inlineCode",{parentName:"p"},"netdata")," package installed, you'll see an additional tab in the navbar for Stats."),(0,r.kt)("h3",{id:"personal-usage-statistics"},"Personal Usage Statistics"),(0,r.kt)("p",null,"You can find your disk quota here."),(0,r.kt)("h3",{id:"service-management-1"},"Service Management"),(0,r.kt)("p",null,"You can see at a glance whether or not your services are currently running. You can also start and stop services directly from the panel, if you just need to quickly restart a service without SSH-ing into your slot."),(0,r.kt)("h2",{id:"customizing-application-settings"},"Customizing Application Settings"),(0,r.kt)("p",null,"Application profiles can be adjusted to your needs by editing the file ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/swizzin/core/custom/profiles.py"),". While this file is largely just variable definitions, it is Python, so be aware that indentation is extremely important. Please note, it is imperative that you do not touch the ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," definition at the top of this file."),(0,r.kt)("h3",{id:"application-profile-definitions"},"Application Profile Definitions"),(0,r.kt)("p",null,"Most of the application options are self-explanatory, nevertheless, things can get confusing. Here's a list of options you can currently define and their meaning/usage."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," - The name of the application"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pretty_name")," - A pretty version of the name, meant for printing in html templates"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"process")," - The name of the process to search for when running ",(0,r.kt)("inlineCode",{parentName:"li"},"app_status")," (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"name"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"runas")," - The user of the process to search for when running ",(0,r.kt)("inlineCode",{parentName:"li"},"app_status")," (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"user"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scheme")," - Use to force HTTP if reverse proxy is disabled (default: current http scheme, usually https)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"baseurl")," - The base URL and/or port of the application. If undefined, no sidebar link will be created."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"urloverride")," - A complete override of the URL. If true, will supersede a baseurl/scheme definition. Example: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://plex.example.com")," (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"False"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"systemd")," - The name of the systemd service (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"name"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"img")," - The name of your brand app icon. This directive can allow you to reuse already existing icons (i.e. for a 4k radarr instance). (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"name"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"check_theD")," - If ",(0,r.kt)("inlineCode",{parentName:"li"},"True"),", the panel will use ",(0,r.kt)("inlineCode",{parentName:"li"},"systemctl is-active")," rather than searching ",(0,r.kt)("inlineCode",{parentName:"li"},"ps")," when running ",(0,r.kt)("inlineCode",{parentName:"li"},"app_status")," (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"False"),")")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"There is a very large performance penalty when enabling a service with ",(0,r.kt)("inlineCode",{parentName:"p"},"check_theD"),". The following response times speak for themselves."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},'#check_theD enabled for 14 services\n"GET /apps/status HTTP/1.1" 200 1163 0.226762\n#check_theD enabled for a single service\n"GET /apps/status HTTP/1.1" 200 1164 0.043281\n#check_theD enabled for no services\n"GET /apps/status HTTP/1.1" 200 1164 0.026525\n')),(0,r.kt)("p",{parentName:"admonition"},"Given the results, it is important to remember to use ",(0,r.kt)("inlineCode",{parentName:"p"},"check_theD")," sparingly. As such, it is not enabled by default in any default swizzin profiles.")),(0,r.kt)("h3",{id:"application-definitions-with-a-user"},"Application Definitions with a User"),(0,r.kt)("p",null,"If for some reason your application requires extra information specific to the user's context, the application's meta profile can be called with the user context."),(0,r.kt)("h3",{id:"editing-an-existing-application"},"Editing an existing application"),(0,r.kt)("p",null,"If you want to edit the variables of already profiled applications, you simply need to make a new class definition while calling the same class as the template."),(0,r.kt)("p",null,"Let's take an application that many users request to make changes to: Plex. Say my Plex instance isn't at port 32400 for some reason (perhaps I have a custom docker container running). If I wanted my dashboard link to instead use port 31400, I can easily make this change by adding two lines of code to ",(0,r.kt)("inlineCode",{parentName:"p"},"core/custom/profiles.py"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class plex_meta(plex_meta):\n    baseurl = ":31400/web"\n')),(0,r.kt)("p",null,'It\'s not necessary to add any other already-defined variables unless you wish to change them. This layout will only override the definitions which have been altered by us in the custom profile and use the defaults for everything else. But why stop there? We can also do things like change the "Pretty Name" of Plex displayed on the panel.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class plex_meta(plex_meta):\n    baseurl = ":31400/web"\n    pretty_name = "PLEX MEDIA SERVER"\n')),(0,r.kt)("p",null,'Now, instead of "Plex" the sidebar link and service status name will be displayed as "PLEX MEDIA SERVER". Why am I yelling? I have no idea.'),(0,r.kt)("h3",{id:"adding-a-new-definition"},"Adding a new definition"),(0,r.kt)("p",null,"Another commonly requested task is adding link and service status for applications not managed by swizzin. For instance, some users may have a second instance of Radarr running which they use to manage their 4k libraries. Let's add a new definition -- it won't be based on anything else, so we'll start fresh and define everything we need to make the service show up."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class radarr4k_meta:\n    name = "radarr4k"\n    pretty_name = "4K Radarr"\n    baseurl = "/radarr4k"\n    systemd = "radarr4k@"\n    check_theD = True\n    img = "radarr"\n')),(0,r.kt)("p",null,"Since we enabled the checking of systemd services for this unit, we should enable it for the regular Radarr unit as well; otherwise, we won't be able to tell which Radarr is actually running when checking if it is active."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class radarr_meta(radarr_meta):\n    check_theD = True\n")),(0,r.kt)("p",null,"In order to tell the panel to check for the new application, simply create a lock file using SSH with the rest of your swizzin applications:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo touch /install/.radarr4k.lock\n")),(0,r.kt)("p",null,"Finally, if you want to add an application icon to the sidebar, simply add a similarly named .png (or use the ",(0,r.kt)("inlineCode",{parentName:"p"},"img")," variable) to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/swizzin/static/img/apps")," folder. i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/swizzin/static/img/apps/radarr4k.png"),"."),(0,r.kt)("p",null,"Once you're happy with your edits, don't forget to restart the panel:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"systemctl restart panel\n")),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)(o.default,{mdxType:"Troubleshooting"}),(0,r.kt)("h3",{id:"i-cannot-log-in"},"I cannot log in"),(0,r.kt)("p",null,"You're probably running some browser plugins which are causing interference with the swizzin panel due to the way basic http auth is being handled. Please try to disable the plugin, use a different browser or use a private session without plugins to confirm your login still works, and try isolate the issue before reaching out for help."),(0,r.kt)("h3",{id:"403-forbidden-on-a-fresh-install"},"403 forbidden on a fresh install"),(0,r.kt)("p",null,"You have not installed the panel -- this behavior is working as intended. Install the panel and this error will be replaced by a login prompt"),(0,r.kt)("h3",{id:"logs"},"Logs"),(0,r.kt)("p",null,"You can retrieve the logs of panel by running ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo journalctl -u panel"),". The logs contain the output of the python application."),(0,r.kt)("h3",{id:"why-am-i-being-rate-limited"},"Why am I being rate-limited?"),(0,r.kt)("p",null,"As of October 31st, 2020, the swizzin panel now does rate limiting to reduce the ability of an unauthenticated attacker to brute force basic authentication passwords against the swizzin panel. This rate limiting should not be in effect for logged-in users. If you wish to disable this behavior, you can define ",(0,r.kt)("inlineCode",{parentName:"p"},"RATELIMIT_ENABLED = False")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"swizzin.cfg"),"."))}f.isMDXComponent=!0},9124:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return h}});var a=n(7462),i=n(3366),r=(n(7294),n(4137)),l=n(4259),o=n(425),s=n(9319),p=["components"],u={},d=void 0,c={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",sourceDirName:"snippets",slug:"/snippets/systemdtabs",permalink:"/snippets/systemdtabs",draft:!1,editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/systemdtabs.mdx",tags:[],version:"current",frontMatter:{}},m={},h=[],f={toc:h};function k(e){var t=e.components,n=(0,i.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"code"},(0,r.kt)(l.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"status",mdxType:"TabItem"},(0,r.kt)(s.Z,{children:"sudo systemctl status "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(o.Z,{value:"start",mdxType:"TabItem"},(0,r.kt)(s.Z,{children:"sudo systemctl start "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(o.Z,{value:"stop",mdxType:"TabItem"},(0,r.kt)(s.Z,{children:"sudo systemctl stop "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(o.Z,{value:"restart",mdxType:"TabItem"},(0,r.kt)(s.Z,{children:"sudo systemctl restart "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(o.Z,{value:"enable",mdxType:"TabItem"},(0,r.kt)(s.Z,{children:"sudo systemctl enable "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(o.Z,{value:"disable",mdxType:"TabItem"},(0,r.kt)(s.Z,{children:"sudo systemctl disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}k.isMDXComponent=!0},9353:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(4137)),l=["components"],o={},s=void 0,p={unversionedId:"snippets/troubleshooting",id:"snippets/troubleshooting",title:"troubleshooting",description:"You can always also try the general troubleshooting tips written in our guide. They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!",source:"@site/docs/snippets/troubleshooting.md",sourceDirName:"snippets",slug:"/snippets/troubleshooting",permalink:"/snippets/troubleshooting",draft:!1,editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/master/docs/snippets/troubleshooting.md",tags:[],version:"current",frontMatter:{}},u={},d=[],c={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can always also try the ",(0,r.kt)("a",{parentName:"p",href:"/guides/troubleshooting"},"general troubleshooting tips written in our guide"),". They might or might not apply, but asking these questions can often make you understand what is under the hood better and help you find what needs to be fixed. It's always worth a shot!")))}m.isMDXComponent=!0}}]);