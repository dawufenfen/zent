(self.webpackChunkzent_docs=self.webpackChunkzent_docs||[]).push([[1216],{31216:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>C});var t=a(73450),e=a(73118),p=a(27378),o=a(57318),c=a(90039),l=a(59934),u=a(98317),i=a(23476),r=a(24246);function k(n,s){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable}))),a.push.apply(a,t)}return a}function d(n){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?k(Object(a),!0).forEach((function(s){(0,t.Z)(n,s,a[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach((function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(a,s))}))}return n}var g=function(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(c.V,{outline:!0,children:"tag content"}),(0,r.jsx)(l.I,{children:(0,r.jsx)("a",{href:"#",children:"link"})})]})},m=function(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(c.V,{outline:!0,children:"small tag"}),(0,r.jsx)(c.V,{outline:!0,size:"medium",children:"medium tag"}),(0,r.jsx)(c.V,{outline:!0,size:"large",children:"large tag"})]})},h=function(){function n(){var n=p.useState(!0),s=(0,e.Z)(n,2),a=s[0],t=s[1];return(0,r.jsx)("div",{children:(0,r.jsx)(u.S,{selected:a,onChange:n=>{t(n)},children:"selected tag"})})}return(0,r.jsx)(n,{})},b=function(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(c.V,{theme:"grey",children:"grey"}),(0,r.jsx)(c.V,{theme:"red",children:"red"}),(0,r.jsx)(c.V,{theme:"green",children:"green"}),(0,r.jsx)(c.V,{theme:"yellow",children:"yellow"}),(0,r.jsx)(c.V,{theme:"blue",children:"blue"}),(0,r.jsx)(c.V,{theme:"grey",outline:!0,children:"grey"}),(0,r.jsx)(c.V,{theme:"red",outline:!0,children:"red"}),(0,r.jsx)(c.V,{theme:"green",outline:!0,children:"green"}),(0,r.jsx)(c.V,{theme:"yellow",outline:!0,children:"yellow"}),(0,r.jsx)(c.V,{theme:"blue",outline:!0,children:"blue"})]})},y=function(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(c.V,{style:{color:"#fff",borderColor:"#9370db",backgroundColor:"#9370db"},children:"#9370db"}),(0,r.jsx)(c.V,{style:{borderColor:"#9370db",color:"#9370db"},outline:!0,children:"#9370db"}),(0,r.jsx)(c.V,{style:{borderColor:"#87d068",backgroundColor:"#cfefdf",color:"#00a854"},children:"custom color"}),(0,r.jsx)(c.V,{style:{borderColor:"#778899",backgroundColor:"#778899"},rounded:!1,children:"rectangle"}),(0,r.jsx)(c.V,{style:{borderColor:"#48d1cc",backgroundColor:"#48d1cc",fontSize:14},children:"Large size"})]})},f=function(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(c.V,{closable:!0,onClose:n=>{i.g.success("Close tag")},outline:!0,children:"custom color"}),(0,r.jsx)(c.V,{theme:"grey",closable:!0,closeButtonStyle:{color:"#969799"},children:"custom close button color"})]})};function v(n){return(0,r.jsx)(n.tag,d(d({},n.attributes),{},{dangerouslySetInnerHTML:{__html:n.html}}))}function T(n){return(0,r.jsx)(v,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function j(n){return(0,r.jsx)(v,{tag:"style",html:n.style})}function w(n,s){for(;n;)return n.offsetTop&&"static"!==getComputedStyle(n).position&&(s+=n.offsetTop),w(n.parentNode,s);return s}class x extends p.Component{constructor(...n){super(...n),(0,t.Z)(this,"state",{showCode:!1}),(0,t.Z)(this,"toggle",(()=>{this.setState({showCode:!this.state.showCode})}))}render(){var n=this.state.showCode,s=this.props,a=s.title,t=s.src,e=s.children;return(0,r.jsxs)("div",{className:"zandoc-react-demo",children:[(0,r.jsx)("div",{className:"zandoc-react-demo__preview",children:e}),(0,r.jsxs)("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle,children:[(0,r.jsx)("div",{className:"zandoc-react-demo__title",children:(0,r.jsx)("p",{children:a||""})}),(0,r.jsx)("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})]}),n&&(0,r.jsx)("pre",{className:"zandoc-react-demo__code",children:(0,r.jsx)(v,{tag:"code",html:t,attributes:{className:"language-jsx"}})})]})}}class C extends p.Component{componentDidMount(){var n=location.hash;if(n){var s=document.querySelector('a[href="'.concat(n,'"]'));s&&(0,o.l)(document.documentElement,0,w(s,-9))}}render(){return p.createElement("div",{className:"zandoc-react-container"},p.createElement(j,{style:".zent-tag{\n\tmargin: 0 10px 5px 0;\n}\n\n.zent-tag{\n\tmargin: 0 10px 5px 0;\n}"}),p.createElement(T,{html:'<h2 class="anchor-heading"><a href="#tag">¶</a><a href="javascript:void(0)" id="tag" class="anchor-point"></a>Tag</h2>\n<p>Often used to mark object attributes, classification, usually a rounded rectangle.</p>\n<h3 class="anchor-heading"><a href="#guides">¶</a><a href="javascript:void(0)" id="guides" class="anchor-point"></a>Guides</h3>\n<ul>\n<li>Use when you need to mark the attributes and dimensions of the content, or supplement the description</li>\n<li>Use tags for cross-level search</li>\n<li>It is recommended that the label text should not exceed 7 characters, and the size of the display label can be configured as required</li>\n</ul>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),p.createElement(x,{title:"Basic usage",id:"Demobasic",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Tag</span><span class="token punctuation">,</span> <span class="token maybe-class-name">LinkTag</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>tag content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">LinkTag</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">LinkTag</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(g)),p.createElement(x,{title:"Tag Size",id:"Demosize",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Tag</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>small tag<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span> <span class="token attr-name">outline</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>medium<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>medium tag<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span> <span class="token attr-name">outline</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>large tag<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(m)),p.createElement(x,{title:"Selectable Tags",id:"Demoselecttag",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Tag</span><span class="token punctuation">,</span> <span class="token maybe-class-name">SelectTag</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">Demo</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>selected<span class="token punctuation">,</span> setSelected<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token maybe-class-name">React</span><span class="token punctuation">.</span><span class="token method function property-access">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">selected</span><span class="token punctuation">)</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">setSelected</span><span class="token punctuation">(</span>selected<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword control-flow">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SelectTag</span></span> <span class="token attr-name">selected</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>selected<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>selected tag<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">SelectTag</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Demo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(h)),p.createElement(T,{html:'<h4 class="anchor-heading"><a href="#the-following-functions-is-obs">¶</a><a href="javascript:void(0)" id="the-following-functions-is-obs" class="anchor-point"></a>The following functions is obsolete in the new design system and is only used as a reference for the old version</h4>'}),p.createElement(x,{title:"Two styles and five default colors",id:"Demostyle",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Tag</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grey<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>grey<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>red<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>green<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>green<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>yellow<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>yellow<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>blue<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grey<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>\n      grey\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>\n      red\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>green<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>\n      green\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>yellow<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>\n      yellow\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>\n      blue\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(b)),p.createElement(x,{title:"Support custom color, rectangle style and custom size",id:"Democustom",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Tag</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span>\n      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        color<span class="token operator">:</span> <span class="token string">\'#fff\'</span><span class="token punctuation">,</span>\n        borderColor<span class="token operator">:</span> <span class="token string">\'#9370db\'</span><span class="token punctuation">,</span>\n        backgroundColor<span class="token operator">:</span> <span class="token string">\'#9370db\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span>\n      #<span class="token number">9370</span>db\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span>\n      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        borderColor<span class="token operator">:</span> <span class="token string">\'#9370db\'</span><span class="token punctuation">,</span>\n        color<span class="token operator">:</span> <span class="token string">\'#9370db\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">outline</span>\n    <span class="token punctuation">></span></span>\n      #<span class="token number">9370</span>db\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span>\n      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        borderColor<span class="token operator">:</span> <span class="token string">\'#87d068\'</span><span class="token punctuation">,</span>\n        backgroundColor<span class="token operator">:</span> <span class="token string">\'#cfefdf\'</span><span class="token punctuation">,</span>\n        color<span class="token operator">:</span> <span class="token string">\'#00a854\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span>\n      custom color\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span>\n      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        borderColor<span class="token operator">:</span> <span class="token string">\'#778899\'</span><span class="token punctuation">,</span>\n        backgroundColor<span class="token operator">:</span> <span class="token string">\'#778899\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">rounded</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span>\n      rectangle\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span>\n      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        borderColor<span class="token operator">:</span> <span class="token string">\'#48d1cc\'</span><span class="token punctuation">,</span>\n        backgroundColor<span class="token operator">:</span> <span class="token string">\'#48d1cc\'</span><span class="token punctuation">,</span>\n        fontSize<span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span>\n      <span class="token maybe-class-name">Large</span> size\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(y)),p.createElement(x,{title:"Support the callback function that is trigger",id:"Demoonclose",src:'<span class="token keyword module">import</span> <span class="token imports"><span class="token punctuation">{</span> <span class="token maybe-class-name">Tag</span><span class="token punctuation">,</span> <span class="token maybe-class-name">Notify</span> <span class="token punctuation">}</span></span> <span class="token keyword module">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">closeCallback</span> <span class="token operator">=</span> <span class="token parameter">e</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token maybe-class-name">Notify</span><span class="token punctuation">.</span><span class="token method function property-access">success</span><span class="token punctuation">(</span><span class="token string">\'Close tag\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">closeCallback2</span> <span class="token operator">=</span> <span class="token parameter">e</span> <span class="token arrow operator">=></span> <span class="token punctuation">{</span>\n  <span class="token maybe-class-name">Notify</span><span class="token punctuation">.</span><span class="token method function property-access">success</span><span class="token punctuation">(</span><span class="token string">\'Close tag2\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token maybe-class-name">ReactDOM</span><span class="token punctuation">.</span><span class="token method function property-access">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span> <span class="token attr-name">closable</span> <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>closeCallback<span class="token punctuation">}</span></span> <span class="token attr-name">outline</span><span class="token punctuation">></span></span>\n      custom color\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tag</span></span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grey<span class="token punctuation">"</span></span> <span class="token attr-name">closable</span> <span class="token attr-name">closeButtonStyle</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token operator">:</span> <span class="token string">\'#969799\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      custom close button color\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Tag</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},p.createElement(f)),p.createElement(T,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Alternative</th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>theme</td>\n<td>The preset color of tag</td>\n<td>string</td>\n<td><code>\'red\'</code></td>\n<td><code>\'red\'</code>\n \n|\n \n<code>\'green\'</code>\n \n|\n \n<code>\'yellow\'</code>\n \n|\n \n<code>\'blue\'</code>\n \n|\n \n<code>\'grey\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>outline</td>\n<td>The style with colorful border and transparent backgound.</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td><code>true</code>\n \n|\n \n<code>false</code></td>\n<td></td>\n</tr>\n<tr>\n<td>rounded</td>\n<td>Whether the tag is rounded or not</td>\n<td>bool</td>\n<td><code>true</code></td>\n<td><code>true</code>\n \n|\n \n<code>false</code></td>\n<td></td>\n</tr>\n<tr>\n<td>closable</td>\n<td>Whether the tag can be closed</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td><code>true</code>\n \n|\n \n<code>false</code></td>\n<td></td>\n</tr>\n<tr>\n<td>onClose</td>\n<td>The callback function that is trigged when the tag is closed</td>\n<td>func</td>\n<td><code>noop</code></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>visible</td>\n<td>Tag is visible</td>\n<td>bool</td>\n<td><code>true</code></td>\n<td><code>false</code></td>\n<td></td>\n</tr>\n<tr>\n<td>closeButtonStyle</td>\n<td>Style of close button</td>\n<td>React.CSSProperties</td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>The custom classname</td>\n<td>string</td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>The custom style</td>\n<td>React.CSSProperties</td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<blockquote>\n<p>All props are optional, a tag can be closed by using <code>visible</code> and <code>onClose</code> together.</p>\n</blockquote>\n<h4 class="anchor-heading"><a href="#linktag">¶</a><a href="javascript:void(0)" id="linktag" class="anchor-point"></a>LinkTag</h4>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>className</td>\n<td>The custom classname</td>\n<td>string</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>The custom style</td>\n<td>React.CSSProperties</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>linkIconStyle</td>\n<td>The custom link icon style</td>\n<td>React.CSSProperties</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h4 class="anchor-heading"><a href="#selecttag">¶</a><a href="javascript:void(0)" id="selecttag" class="anchor-point"></a>SelectTag</h4>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>className</td>\n<td>The custom classname</td>\n<td>string</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>style</td>\n<td>The custom style</td>\n<td>React.CSSProperties</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>selected</td>\n<td>selected state</td>\n<td>boolean</td>\n<td><code>false</code></td>\n<td><code>true</code>\n \n|\n \n<code>false</code></td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>The callback function that is triggered when the tag is clicked</td>\n<td>func</td>\n<td><code>noop</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<blockquote>\n<p>the selected state of SelectTag is fully controlled</p>\n</blockquote>'}))}}},59934:(n,s,a)=>{"use strict";a.d(s,{I:()=>l});var t=a(59312),e=a(24246),p=a(27378),o=a(27036),c=a(90039),l=(0,p.forwardRef)((function(n,s){var a=n.className,p=n.children,l=n.linkIconStyle,u=(0,t._T)(n,["className","children","linkIconStyle"]);return(0,e.jsxs)(c.Z,(0,t.pi)({className:"zent-link-tag "+a,ref:s,outline:!0},u,{children:[(0,e.jsx)("div",(0,t.pi)({className:"zent-link-tag-content","data-zv":"10.0.2"},{children:p}),void 0),(0,e.jsx)(o.Z,{type:"right",className:"zent-link-tag-right-icon",style:l},void 0)]}),void 0)}));l.displayName="ZentLinkTag"},98317:(n,s,a)=>{"use strict";a.d(s,{S:()=>u});var t=a(59312),e=a(24246),p=a(60042),o=a.n(p),c=a(27378),l=a(90039),u=(0,c.forwardRef)((function(n,s){var a=n.className,p=n.children,c=n.selected,u=n.onChange,i=(0,t._T)(n,["className","children","selected","onChange"]);return(0,e.jsx)(l.Z,(0,t.pi)({className:o()("zent-select-tag",a,{"zent-select-tag-selected":c}),ref:s,onClick:function(n){null==u||u(!c)},outline:!0},i,{children:p}),void 0)}));u.displayName="ZentSelectTag"},90039:(n,s,a)=>{"use strict";a.d(s,{V:()=>i});var t=a(59312),e=a(24246),p=a(60042),o=a.n(p),c=a(27378),l=a(27036),u={red:!0,green:!0,yellow:!0,blue:!0,grey:!0},i=(0,c.forwardRef)((function(n,s){var a=n.size,p=void 0===a?"small":a,c=n.theme,i=void 0===c?"grey":c,r=n.outline,k=n.rounded,d=void 0===k||k,g=n.closable,m=n.children,h=n.className,b=n.onClose,y=n.closeButtonStyle,f=n.visible,v=void 0===f||f,T=(0,t._T)(n,["size","theme","outline","rounded","closable","children","className","onClose","closeButtonStyle","visible"]);if(!v)return null;var j=u[i]?"-"+i:"",w=r?"-outline":"";return(0,e.jsxs)("div",(0,t.pi)({ref:s,className:o()("zent-tag","zent-tag-style"+j+w,"zent-tag-size-"+p,h,{"zent-tag-rounded":d,"zent-tag-closable":g})},T,{"data-zv":"10.0.2"},{children:[(0,e.jsx)("div",(0,t.pi)({className:"zent-tag-content","data-zv":"10.0.2"},{children:m}),void 0),g?(0,e.jsx)(l.Z,{type:"close",className:"zent-tag-close-btn",onClick:b,style:y},void 0):null]}),void 0)}));i.displayName="ZentTag",s.Z=i}}]);