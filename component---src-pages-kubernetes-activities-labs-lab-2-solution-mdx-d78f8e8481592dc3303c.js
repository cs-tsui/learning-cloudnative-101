(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),r=a("q1tI"),o=a.n(r),i=a("NmYn"),c=a.n(i),s=a("OKom"),l=a("k4MR"),b=a("TSYQ"),p=a.n(b),u=a("QH2O"),m=a("qKvR"),d=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(m.b)("div",{className:p()(u.pageHeader,(t={},t[u.withTabs]=r.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.text},a)))))},v=a("pEPl"),g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=v.data.site.siteMetadata.repository,r=a||n,o=r.baseUrl,i=r.subDirectory,c=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},y=a("FCXl"),f=(a("Oyvg"),a("Wbzz")),j=a("I8xM");var h=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=c()(e,{lower:!0}),o=r===n,i=new RegExp(n+"(?!-)"),s=a.replace(i,r);return Object(m.b)("li",{key:e,className:p()((t={},t[j.selectedItem]=o,t),j.listItem)},Object(m.b)(f.Link,{className:j.link,to:""+s},e))}));return Object(m.b)("div",{className:j.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:j.list},r))))))},n}(o.a.Component),N=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,o=e.Title,i=t.frontmatter,b=void 0===i?{}:i,p=t.relativePagePath,u=t.titleType,v=b.tabs,g=b.title,f=b.theme,j=b.description,w=b.keywords,x=n.data.site.pathPrefix,P=x?r.pathname.replace(x,""):r.pathname,k=v?P.split("/").slice(-1)[0]||c()(v[0],{lower:!0}):"";return Object(m.b)(l.a,{tabs:v,homepage:!1,theme:f,pageTitle:g,pageDescription:j,pageKeywords:w,titleType:u},Object(m.b)(d,{title:o?Object(m.b)(o,null):g,label:"label",tabs:v}),v&&Object(m.b)(h,{slug:P,tabs:v,currentTab:k}),Object(m.b)(N.a,{padded:!0},a,Object(m.b)(O,{relativePagePath:p})),Object(m.b)(y.a,{pageContext:t,location:r,slug:P,tabs:v,currentTab:k}),Object(m.b)(s.a,null))}},JfK0:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return l}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={},c={_frontmatter:i},s=r.a;function l(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(s,o({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Solution"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: yoda-service-config\ndata:\n  yoda.cfg: |-\n    yoda.baby.power=100000000\n    yoda.strength=10\n")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Secret\nmetadata:\n  name: yoda-db-password\nstringData:\n  password: 0penSh1ftRul3s!\n")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-yaml"}),'apiVersion: v1\nkind: Pod\nmetadata:\n  name: yoda-service\nspec:\n  serviceAccountName: yoda-svc\n  containers:\n  - name: yoda-service\n    image: bitnami/nginx\n    volumeMounts:\n      - name: config-volume\n        mountPath: /etc/yoda-service\n    env:\n    - name: DB_PASSWORD\n      valueFrom:\n        secretKeyRef:\n          name: yoda-db-password\n          key: password\n    resources:\n      requests:\n        memory: "64Mi"\n        cpu: "250m"\n      limits:\n        memory: "128Mi"\n        cpu: "500m"\n  volumes:\n  - name: config-volume\n    configMap:\n      name: yoda-service-config\n')))}l.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/learning-cloudnative-101","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","pathPrefix":"/learning-cloudnative-101"}}}')}}]);
//# sourceMappingURL=component---src-pages-kubernetes-activities-labs-lab-2-solution-mdx-d78f8e8481592dc3303c.js.map