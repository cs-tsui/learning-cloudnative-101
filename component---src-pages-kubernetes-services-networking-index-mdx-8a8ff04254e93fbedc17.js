(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"013z":function(e,t,n){"use strict";n("KKXr"),n("pIFo");var r=n("pOBw"),a=n("q1tI"),s=n.n(a),i=n("NmYn"),c=n.n(i),o=n("OKom"),b=n("k4MR"),l=n("TSYQ"),p=n.n(l),u=n("QH2O"),d=n("qKvR"),m=function(e){var t,n=e.title,r=e.tabs,a=void 0===r?[]:r;return Object(d.b)("div",{className:p()(u.pageHeader,(t={},t[u.withTabs]=a.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.text},n)))))},g=n("pEPl"),h=n("BAC9"),O=function(e){var t=e.relativePagePath,n=e.repository,r=g.data.site.siteMetadata.repository,a=n||r,s=a.baseUrl,i=a.subDirectory,c=s+"/edit/"+a.branch+i+"/src/pages"+t;return s?Object(d.b)("div",{className:"bx--row "+h.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:h.link,href:c},"Edit this page on GitHub"))):null},j=n("FCXl"),v=(n("Oyvg"),n("Wbzz")),y=n("I8xM");var f=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],a=t.map((function(e){var t,a=c()(e,{lower:!0}),s=a===r,i=new RegExp(r+"(?!-)"),o=n.replace(i,a);return Object(d.b)("li",{key:e,className:p()((t={},t[y.selectedItem]=s,t),y.listItem)},Object(d.b)(v.Link,{className:y.link,to:""+o},e))}));return Object(d.b)("div",{className:y.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:y.list},a))))))},r}(s.a.Component),k=n("MjG9");t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,s=e.Title,i=t.frontmatter,l=void 0===i?{}:i,p=t.relativePagePath,u=t.titleType,g=l.tabs,h=l.title,v=l.theme,y=l.description,w=l.keywords,N=r.data.site.pathPrefix,x=N?a.pathname.replace(N,""):a.pathname,P=g?x.split("/").slice(-1)[0]||c()(g[0],{lower:!0}):"";return Object(d.b)(b.a,{tabs:g,homepage:!1,theme:v,pageTitle:h,pageDescription:y,pageKeywords:w,titleType:u},Object(d.b)(m,{title:s?Object(d.b)(s,null):h,label:"label",tabs:g}),g&&Object(d.b)(f,{slug:x,tabs:g,currentTab:P}),Object(d.b)(k.a,{padded:!0},n,Object(d.b)(O,{relativePagePath:p})),Object(d.b)(j.a,{pageContext:t,location:a,slug:x,tabs:g,currentTab:P}),Object(d.b)(o.a,null))}},G0aS:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return u}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var r=n("7ljp"),a=n("013z");n("qKvR");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},o=c("AnchorLinks"),b=c("AnchorLink"),l={_frontmatter:i},p=a.a;function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(p,s({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(o,{mdxType:"AnchorLinks"},Object(r.b)(b,{mdxType:"AnchorLink"},"Services"),Object(r.b)(b,{mdxType:"AnchorLink"},"Ingress"),Object(r.b)(b,{mdxType:"AnchorLink"},"Activities")),Object(r.b)("h1",null,"Services"),Object(r.b)("p",null,"An abstract way to expose an application running on a set of Pods as a network service."),Object(r.b)("p",null,"Kubernetes Pods are mortal. They are born and when they die, they are not resurrected. If you use a Deployment to run your app, it can create and destroy Pods dynamically."),Object(r.b)("p",null,"Each Pod gets its own IP address, however in a Deployment, the set of Pods running in one moment in time could be different from the set of Pods running that application a moment later."),Object(r.b)("p",null,"In Kubernetes, a Service is an abstraction which defines a logical set of Pods and a policy by which to access them (sometimes this pattern is called a micro-service). The set of Pods targeted by a Service is usually determined by a selector (see below for why you might want a Service without a selector)."),Object(r.b)("p",null,"If you’re able to use Kubernetes APIs for service discovery in your application, you can query the API server for Endpoints, that get updated whenever the set of Pods in a Service changes."),Object(r.b)("p",null,"For non-native applications, Kubernetes offers ways to place a network port or load balancer in between your application and the backend Pods."),Object(r.b)("h2",null,"Resources"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",s({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/services-networking/service/"}),"https://kubernetes.io/docs/concepts/services-networking/service/")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",s({parentName:"li"},{href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/expose/expose-intro/"}),"https://kubernetes.io/docs/tutorials/kubernetes-basics/expose/expose-intro/"))),Object(r.b)("h2",null,"References"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{}),"kubectl get svc\nkubectl describe svc my-service\nkubectl get ep my-service\nkubectl get deployments\nkubect get rs\nkubect get pods\nkubectl get all\nkubectl expose deployment my-deployment --port 80 --target-port=http --selector app=nginx --name my-service-2 --type NodePort\nminikube service --url\nkubectl por-forward\n")),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-yaml"}),"---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: my-deployment\n  labels:\n    app: nginx\n    version: v1\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n        version: v1\n    spec:\n      containers:\n      - name: nginx\n        image: bitnami/nginx\n        ports:\n        - containerPort: 8080\n          name: http\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: my-service\nspec:\n  selector:\n    app: nginx\n  ports:\n    - name: http\n      port: 80\n      targetPort: http\n")),Object(r.b)("h1",null,"Ingress"),Object(r.b)("p",null,"An API object that manages external access to the services in a cluster, typically HTTP."),Object(r.b)("p",null,"Ingress can provide load balancing, SSL termination and name-based virtual hosting."),Object(r.b)("p",null,"Ingress exposes HTTP and HTTPS routes from outside the cluster to services within the cluster. Traffic routing is controlled by rules defined on the Ingress resource."),Object(r.b)("h2",null,"Resources"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",s({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"}),"https://kubernetes.io/docs/concepts/services-networking/ingress/")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",s({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/"}),"https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",s({parentName:"li"},{href:"https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/"}),"https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/"))),Object(r.b)("h2",null,"References"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{}),"minikube addons enable ingress\nkubectl get pods -n kube-system | grep ingress\nkubectl run web --image=bitnami/nginx --port=8080\nkubectl expose deployment web --target-port=8080 --type=NodePort\nkubectl get svc web\nminikube service --url web\n")),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{}),"stern ingress -n kube-system\nkubectl get ingress\nkubcetl describe ingress example-ingress\ncurl hello-world.info --resolve hello-world.info:80:<ADDRESS>\n")),Object(r.b)("p",null,"  annotations:\nnginx.ingress.kubernetes.io/rewrite-target: /$1"),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-yaml"}),"apiVersion: networking.k8s.io/v1beta1 # for versions before 1.14 use extensions/v1beta1\nkind: Ingress\nmetadata:\n  name: example-ingress\nspec:\n  rules:\n  - host: hello-world.info\n    http:\n      paths:\n      - path: /\n        backend:\n          serviceName: web\n          servicePort: 8080\n")),Object(r.b)("h2",null,"Activities"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",s({parentName:"tr"},{align:null}),"Task"),Object(r.b)("th",s({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",s({parentName:"tr"},{align:"left"}),"Link"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",s({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},Object(r.b)("em",{parentName:"strong"}," Try It Yourself "))),Object(r.b)("td",s({parentName:"tr"},{align:null})),Object(r.b)("td",s({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",s({parentName:"tr"},{align:null}),"Creating Services"),Object(r.b)("td",s({parentName:"tr"},{align:null}),"Create two services with certain requirements."),Object(r.b)("td",s({parentName:"tr"},{align:"left"}),Object(r.b)("a",s({parentName:"td"},{href:"../activities/labs/lab8"}),"Setting up Services"))))))}u.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/learning-cloudnative-101","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","pathPrefix":"/learning-cloudnative-101"}}}')}}]);
//# sourceMappingURL=component---src-pages-kubernetes-services-networking-index-mdx-8a8ff04254e93fbedc17.js.map