(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{151:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(154),l=n.n(s),u=n(155),c=n(156),p=(n(180),n(53),n(38)),f=n(163),d=n.n(f),m=(n(238),n(39)),h=n.n(m),g=n(240),y=n.n(g),v=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={toasts:[]},n.notifyAboutComment=n.notifyAboutComment.bind(h()(h()(n))),n.onSnackbarDismiss=n.onSnackbarDismiss.bind(h()(h()(n))),n}r()(t,e);var n=t.prototype;return n.onSnackbarDismiss=function(){var e=this.state.toasts.slice(1);this.setState({toasts:e})},n.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!!"}),this.setState({toasts:e})},n.render=function(){var e=this.props,t=e.postNode,n=e.siteMetadata;if(!n.disqusShortname)return null;var a=t.frontmatter,r=n.url+t.fields.slug;return o.a.createElement(y.a,{shortname:n.disqusShortname,identifier:a.title,title:a.title,url:r,category_id:a.category_id,onNewComment:this.notifyAboutComment})},t}(i.Component),b=(n(242),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=e.subtitle,n=e.author,a=this.props.data.markdownRemark,r=a.fields.tagSlugs,i=o.a.createElement("div",{className:"post-single__tags"},o.a.createElement("ul",{className:"post-single__tags-list"},r&&r.map(function(e,t){return o.a.createElement("li",{className:"post-single__tags-list-item",key:e},o.a.createElement(p.Link,{to:e,className:"post-single__tags-list-item-link"},a.frontmatter.tags[t]))}))),s=o.a.createElement("div",null,o.a.createElement(v,{postNode:a,siteMetadata:this.props.data.site.siteMetadata}));return o.a.createElement("div",null,o.a.createElement("div",{className:"post-single"},o.a.createElement("div",{className:"post-single__inner"},o.a.createElement("h1",{className:"post-single__title"},a.frontmatter.title),o.a.createElement("div",{className:"post-single__body",dangerouslySetInnerHTML:{__html:a.html}}),o.a.createElement("div",{className:"post-single__date"},o.a.createElement("em",null,"Published ",d()(a.frontmatter.date).format("D MMM YYYY")))),o.a.createElement("div",{className:"post-single__footer"},i,o.a.createElement("hr",null),o.a.createElement("p",{className:"post-single__footer-text"},t,o.a.createElement("a",{href:"https://twitter.com/"+n.twitter,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("br",null)," ",o.a.createElement("strong",null,n.name)," on Twitter")),s)))},t}(o.a.Component));n.d(t,"pageQuery",function(){return E});var _=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=e.title,n=e.subtitle,a=this.props.data.markdownRemark.frontmatter,r=a.title,i=a.description,s=null!==i?i:n;return o.a.createElement(u.a,null,o.a.createElement("div",null,o.a.createElement(l.a,null,o.a.createElement("title",null,r+" - "+t),o.a.createElement("meta",{name:"description",content:s})),o.a.createElement(c.a,this.props),o.a.createElement("div",{className:"content"},o.a.createElement("div",{className:"content__inner"},o.a.createElement(b,this.props)))))},t}(o.a.Component),E=(t.default=_,"1471525526")},238:function(e,t,n){var a=n(7);a(a.P,"Function",{bind:n(239)})},239:function(e,t,n){"use strict";var a=n(19),r=n(10),i=n(80),o=[].slice,s={};e.exports=Function.bind||function(e){var t=a(this),n=o.call(arguments,1),l=function(){var a=n.concat(o.call(arguments));return this instanceof l?function(e,t,n){if(!(t in s)){for(var a=[],r=0;r<t;r++)a[r]="a["+r+"]";s[t]=Function("F,a","return new F("+a.join(",")+")")}return s[t](e,n)}(t,a.length,a):i(t,a,e)};return r(t.prototype)&&(l.prototype=t.prototype),l}},240:function(e,t,n){"use strict";e.exports=n(241)},241:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=s(n(0)),o=s(n(1));function s(e){return e&&e.__esModule?e:{default:e}}var l=["shortname","identifier","title","url","category_id","onNewComment","language"],u=!1;function c(e,t){var n=t.onNewComment,a=t.language,r=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["onNewComment","language"]);for(var i in r)e.page[i]=r[i];e.language=a,n&&(e.callbacks={onNewComment:[n]})}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce(function(t,n){return l.some(function(e){return e===n})?t:a({},t,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,e.props[n]))},{});return i.default.createElement("div",t,i.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!u){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),u=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};l.forEach(function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])}),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){c(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){c(this,t)},this.addDisqusScript())}}]),t}();p.displayName="DisqusThread",p.propTypes={id:o.default.string,shortname:o.default.string.isRequired,identifier:o.default.string,title:o.default.string,url:o.default.string,category_id:o.default.string,onNewComment:o.default.func,language:o.default.string},p.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=p},242:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-post-template-jsx-ab41b9181d997587c9a4.js.map