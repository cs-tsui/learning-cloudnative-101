(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),o=a("q1tI"),r=a.n(o),i=a("NmYn"),l=a.n(i),b=a("OKom"),s=a("k4MR"),c=a("TSYQ"),u=a.n(c),p=a("QH2O"),d=a("qKvR"),m=function(e){var t,a=e.title,n=e.tabs,o=void 0===n?[]:n;return Object(d.b)("div",{className:u()(p.pageHeader,(t={},t[p.withTabs]=o.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:p.text},a)))))},j=a("pEPl"),O=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=j.data.site.siteMetadata.repository,o=a||n,r=o.baseUrl,i=o.subDirectory,l=r+"/edit/"+o.branch+i+"/src/pages"+t;return r?Object(d.b)("div",{className:"bx--row "+O.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:O.link,href:l},"Edit this page on GitHub"))):null},g=a("FCXl"),v=(a("Oyvg"),a("Wbzz")),f=a("I8xM");var y=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=l()(e,{lower:!0}),r=o===n,i=new RegExp(n+"(?!-)"),b=a.replace(i,o);return Object(d.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(d.b)(v.Link,{className:f.link,to:""+b},e))}));return Object(d.b)("div",{className:f.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:f.list},o))))))},n}(r.a.Component),N=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,r=e.Title,i=t.frontmatter,c=void 0===i?{}:i,u=t.relativePagePath,p=t.titleType,j=c.tabs,O=c.title,v=c.theme,f=c.description,w=c.keywords,x=n.data.site.pathPrefix,k=x?o.pathname.replace(x,""):o.pathname,P=j?k.split("/").slice(-1)[0]||l()(j[0],{lower:!0}):"";return Object(d.b)(s.a,{tabs:j,homepage:!1,theme:v,pageTitle:O,pageDescription:f,pageKeywords:w,titleType:p},Object(d.b)(m,{title:r?Object(d.b)(r,null):O,label:"label",tabs:j}),j&&Object(d.b)(y,{slug:k,tabs:j,currentTab:P}),Object(d.b)(N.a,{padded:!0},a,Object(d.b)(h,{relativePagePath:u})),Object(d.b)(g.a,{pageContext:t,location:o,slug:k,tabs:j,currentTab:P}),Object(d.b)(b.a,null))}},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"repository":{"baseUrl":"https://github.com/ibm-cloud-architecture/learning-cloudnative-101","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","pathPrefix":"/learning-cloudnative-101"}}}')},syDs:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return s}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),o=a("013z");a("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={},l={_frontmatter:i},b=o.a;function s(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(b,r({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Problem"),Object(n.b)("p",null,"Your commander has a simple data process that is run periodically to check status. They would like to stop doing this manually in order to save time, so you have been asked to implement a cron job in the Kubernetes cluster to run this process. "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Create a cron job called xwing-cronjob using the ",Object(n.b)("inlineCode",{parentName:"li"},"ibmcase/xwing-status:1.0")," image. "),Object(n.b)("li",{parentName:"ul"},"Have the job run every minute with the following cron expression: ",Object(n.b)("inlineCode",{parentName:"li"},"*/2 * * * *"),"."),Object(n.b)("li",{parentName:"ul"},"Pass the argument ",Object(n.b)("inlineCode",{parentName:"li"},"/usr/sbin/xwing-status.sh")," to the container.")),Object(n.b)("h2",null,"Verification"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Run ",Object(n.b)("inlineCode",{parentName:"li"},"kubectl get cronjobs.batch")," and ",Object(n.b)("inlineCode",{parentName:"li"},"LAST-SCHEDULE")," to see last time it ran"),Object(n.b)("li",{parentName:"ul"},"From a bash shell, run the following to see the logs for all jobs:")),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),'jobs=( $(kubectl get jobs --no-headers -o custom-columns=":metadata.name") )\necho -e "Job \\t\\t\\t\\t Pod \\t\\t\\t\\t\\tLog"\nfor job in "${jobs[@]}"\ndo\n   pod=$(kubectl get pods -l job-name=$job --no-headers -o custom-columns=":metadata.name")\n   echo -en "$job \\t $pod \\t"\n   kubectl logs $pod\ndone\n')))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-kubernetes-activities-labs-lab-7-index-mdx-a6a87cafb2701aaf75ea.js.map