(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),o=a("q1tI"),i=a.n(o),r=a("NmYn"),c=a.n(r),l=a("OKom"),s=a("k4MR"),b=a("TSYQ"),p=a.n(b),u=a("QH2O"),d=a("qKvR"),m=function(e){var t,a=e.title,n=e.tabs,o=void 0===n?[]:n;return Object(d.b)("div",{className:p()(u.pageHeader,(t={},t[u.withTabs]=o.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.text},a)))))},h=a("pEPl"),O=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=h.data.site.siteMetadata.repository,o=a||n,i=o.baseUrl,r=o.subDirectory,c=i+"/edit/"+o.branch+r+"/src/pages"+t;return i?Object(d.b)("div",{className:"bx--row "+O.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:O.link,href:c},"Edit this page on GitHub"))):null},g=a("FCXl"),v=(a("Oyvg"),a("Wbzz")),f=a("I8xM");var y=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=c()(e,{lower:!0}),i=o===n,r=new RegExp(n+"(?!-)"),l=a.replace(r,o);return Object(d.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=i,t),f.listItem)},Object(d.b)(v.Link,{className:f.link,to:""+l},e))}));return Object(d.b)("div",{className:f.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:f.list},o))))))},n}(i.a.Component),N=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,i=e.Title,r=t.frontmatter,b=void 0===r?{}:r,p=t.relativePagePath,u=t.titleType,h=b.tabs,O=b.title,v=b.theme,f=b.description,x=b.keywords,w=n.data.site.pathPrefix,C=w?o.pathname.replace(w,""):o.pathname,k=h?C.split("/").slice(-1)[0]||c()(h[0],{lower:!0}):"";return Object(d.b)(s.a,{tabs:h,homepage:!1,theme:v,pageTitle:O,pageDescription:f,pageKeywords:x,titleType:u},Object(d.b)(m,{title:i?Object(d.b)(i,null):O,label:"label",tabs:h}),h&&Object(d.b)(y,{slug:C,tabs:h,currentTab:k}),Object(d.b)(N.a,{padded:!0},a,Object(d.b)(j,{relativePagePath:p})),Object(d.b)(g.a,{pageContext:t,location:o,slug:C,tabs:h,currentTab:k}),Object(d.b)(l.a,null))}},Cih6:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return p}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),o=a("013z");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r,c={},l=(r="InlineNotification",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),s={_frontmatter:c},b=o.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(b,i({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Problem"),Object(n.b)("p",null,"This service has already been packaged into a container image, but there is one special requirement:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The legacy app is hard-coded to only serve content on port ",Object(n.b)("inlineCode",{parentName:"li"},"8989"),", but the team wants to be able to access the service using the standard port ",Object(n.b)("inlineCode",{parentName:"li"},"80"),".")),Object(n.b)("p",null,"Your task is to build a Kubernetes pod that runs this legacy container and uses the ambassador design pattern to expose access to the service on port ",Object(n.b)("inlineCode",{parentName:"p"},"80"),"."),Object(n.b)("p",null,"This setup will need to meet the following specifications:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The pod should have the name ",Object(n.b)("inlineCode",{parentName:"li"},"vader-service"),"."),Object(n.b)("li",{parentName:"ul"},"The ",Object(n.b)("inlineCode",{parentName:"li"},"vader-service")," pod should have a container that runs the legacy vader service image: ",Object(n.b)("inlineCode",{parentName:"li"},"ibmcase/millennium-falcon:1"),"."),Object(n.b)("li",{parentName:"ul"},"The ",Object(n.b)("inlineCode",{parentName:"li"},"vader-service")," pod should have an ambassador container that runs the ",Object(n.b)("inlineCode",{parentName:"li"},"haproxy:1.7")," image and proxies incoming traffic on port ",Object(n.b)("inlineCode",{parentName:"li"},"80")," to the legacy service on port ",Object(n.b)("inlineCode",{parentName:"li"},"8989")," (the HAProxy configuration for this is provided below)."),Object(n.b)("li",{parentName:"ul"},"Port ",Object(n.b)("inlineCode",{parentName:"li"},"80")," should be exposed as a ",Object(n.b)("inlineCode",{parentName:"li"},"containerPort"),".")),Object(n.b)(l,{mdxType:"InlineNotification"},Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Note"),": You do not need to expose port 8989")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The HAProxy configuration should be stored in a ConfigMap called ",Object(n.b)("inlineCode",{parentName:"li"},"vader-service-ambassador-config"),"."),Object(n.b)("li",{parentName:"ul"},"The HAProxy config should be provided to the ambassador container using a volume mount that places the data from the ConfigMap in a file at /usr/local/etc/haproxy/haproxy.cfg.\nhaproxy.cfg should contain the following configuration data:")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"global\n    daemon\n    maxconn 256\n\ndefaults\n    mode http\n    timeout connect 5000ms\n    timeout client 50000ms\n    timeout server 50000ms\n\nlisten http-in\n    bind *:80\n    server server1 127.0.0.1:8989 maxconn 32\n")),Object(n.b)("p",null,"Once your pod is up and running, it’s a good idea to test it to make sure you can access the service from within the cluster using port 80. In order to do this, you can create a busybox pod in the cluster, and then run a command to attempt to access the service from within the busybox pod."),Object(n.b)("p",null,"Create a descriptor for the busybox pod called ",Object(n.b)("inlineCode",{parentName:"p"},"busybox.yml")),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Pod\nmetadata:\n  name: busybox\nspec:\n  containers:\n  - name: myapp-container\n    image: radial/busyboxplus:curl\n    command: ['sh', '-c', 'while true; do sleep 3600; done']\n")),Object(n.b)("p",null,"Create the busybox testing pod."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"kubectl apply -f busybox.yml\n")),Object(n.b)("p",null,"Use this command to access ",Object(n.b)("inlineCode",{parentName:"p"},"vader-service")," using port 80 from within the busybox pod."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"kubectl exec busybox -- curl $(kubectl get pod vader-service -o=custom-columns=IP:.status.podIP --no-headers):80\n")),Object(n.b)("p",null,"If the service is working, you should that the millennium falcon needs repair."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Relevant Documentation:")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/cluster-administration/logging/#using-a-sidecar-container-with-the-logging-agent"}),"Kubernetes Sidecar Logging Agent")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/access-application-cluster/communicate-containers-same-pod-shared-volume/"}),"Shared Volumes")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://kubernetes.io/blog/2015/06/the-distributed-system-toolkit-patterns/"}),"Distributed System Toolkit Patterns"))))}p.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/learning-cloudnative-101","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","pathPrefix":"/learning-cloudnative-101"}}}')}}]);
//# sourceMappingURL=component---src-pages-kubernetes-activities-labs-lab-3-index-mdx-adecf7e445f7b42d93c3.js.map