import{j as l}from"./jsx-runtime-94f6e698.js";import{r as k,R as w}from"./index-8db94870.js";import{k as E,b as P,l as R,c as u}from"./index-412a6d3e.js";import{P as d}from"./index-1fc0ca9a.js";function h(){return h=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t},h.apply(this,arguments)}function C(t,o){if(t==null)return{};var n=F(t,o),e,i;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)e=r[i],!(o.indexOf(e)>=0)&&Object.prototype.propertyIsEnumerable.call(t,e)&&(n[e]=t[e])}return n}function F(t,o){if(t==null)return{};var n={},e=Object.keys(t),i,r;for(r=0;r<e.length;r++)i=e[r],!(o.indexOf(i)>=0)&&(n[i]=t[i]);return n}var g=k.forwardRef(function(t,o){var n=t.color,e=n===void 0?"currentColor":n,i=t.size,r=i===void 0?24:i,f=C(t,["color","size"]);return w.createElement("svg",h({ref:o,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:e,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},f),w.createElement("polyline",{points:"20 6 9 17 4 12"}))});g.propTypes={color:d.string,size:d.oneOfType([d.string,d.number])};g.displayName="Check";const M=g,D="_select_1ip96_389",I="_closing_1ip96_401",K="_opening_1ip96_401",L="_top_1ip96_404",T="_bottom_1ip96_408",W="_dark_1ip96_420",A="_hovered_1ip96_463",B="_show_1ip96_472",s={select:D,closing:I,opening:K,top:L,bottom:T,"fade-in":"_fade-in_1ip96_1","fade-out":"_fade-out_1ip96_1",dark:W,"select-container":"_select-container_1ip96_426","select-wrap":"_select-wrap_1ip96_439","select-option-item":"_select-option-item_1ip96_444",hovered:A,"icon-wrap":"_icon-wrap_1ip96_468",show:B,"shake-horizontal":"_shake-horizontal_1ip96_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_1ip96_1","slide-in-fwd-center":"_slide-in-fwd-center_1ip96_1","scale-in-center":"_scale-in-center_1ip96_1","slide-in-right":"_slide-in-right_1ip96_1","slide-out-right":"_slide-out-right_1ip96_1","scale-in-top":"_scale-in-top_1ip96_1","scale-out-top":"_scale-out-top_1ip96_1","swing-in-top-fwd":"_swing-in-top-fwd_1ip96_1","fade-in-top":"_fade-in-top_1ip96_1","fade-out-top":"_fade-out-top_1ip96_1","fade-in-bottom":"_fade-in-bottom_1ip96_1","fade-out-bottom":"_fade-out-bottom_1ip96_1"},j=({opened:t=!1,options:o,multiple:n=!1,value:e,onChange:i,onKeyDown:r,float:f="bottom",cancelable:y=!0,className:O,...x})=>{const p=E(t),{isDarkMode:S}=P(),b=k.useRef([]),[$,V]=R({openStatus:p,options:o,selectRefs:b,onKeyDown:r});return p&&(o!=null&&o.length)?l.jsx("section",{...x,className:u(`${s.select} ${S&&s.dark} ${s[f]} ${typeof p=="string"&&s[p]} ${O}`),children:l.jsx("ul",{className:u(s["select-container"]),children:o==null?void 0:o.map(({label:N,value:c},_)=>{const q=_===$,m=(()=>e===void 0?!1:n&&e instanceof Array?e.includes(c):e===c)();return l.jsx("li",{className:s["select-wrap"],children:l.jsxs("button",{name:"select-option-item",type:"button",ref:a=>{b.current[_]=a},className:u(`${s["select-option-item"]} ${q&&s.hovered}`),onClick:()=>{if(n){let a=e??[];const v=i;y&&(a=m?a.filter(z=>z!==c):[...a,c]),v==null||v(a)}else{const a=i;a==null||a(m&&y?void 0:c)}},onMouseEnter:()=>{V(_)},children:[l.jsx("div",{children:N}),l.jsx("div",{className:u(`${s["icon-wrap"]} ${m&&s.show}`),children:l.jsx(M,{size:"1em"})})]})},_)})})}):l.jsx(l.Fragment,{})};try{j.displayName="Select",j.__docgenInfo={description:"",displayName:"Select",props:{opened:{defaultValue:{value:"false"},description:"",name:"opened",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"{ label: string; value: OptionValue; }[]"}},multiple:{defaultValue:{value:"false as Multiple"},description:"",name:"multiple",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"ValidOptionValue | OptionValue[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: (Multiple extends true ? OptionValue[] : OptionValue)) => void)"}},onKeyDown:{defaultValue:null,description:"",name:"onKeyDown",required:!1,type:{name:"((event: KeyboardEvent) => void)"}},float:{defaultValue:{value:"bottom"},description:"",name:"float",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'}]}},cancelable:{defaultValue:{value:"true"},description:"",name:"cancelable",required:!1,type:{name:"boolean"}}}}}catch{}export{j as S};
//# sourceMappingURL=index-3142a179.js.map
