"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[866],{84849:function(mn,ke,o){o.r(ke),o.d(ke,{default:function(){return ln}});var Ye=o(42805),Qe=o(15009),f=o.n(Qe),Xe=o(99289),Q=o.n(Xe),qe=o(64599),z=o.n(qe),_e=o(5574),M=o.n(_e),j=o(67294),se=o(71217),ye=o(13448),Ue=o(16536),Pe=o(67040),oe=o(26713),ge=o(34895),xe=o(62986),et=o(37877),X=o(97183),Ce=o(71230),q=o(15746),K=o(84908),pe=o(80284),tt=o(26911),nt=o(69015),rt=o(13520),Ee=o(18429),it=o(238),st=o(80882),We=o(64789),ot=o(33160),at=o(48689),lt=o(32319),ut=o(26024),dt=o(12444),ae=o.n(dt),ct=o(72004),le=o.n(ct),ht=o(9783),S=o.n(ht),je=o(68949),ft=o(97857),g=o.n(ft),Ie="includeDirs",Be="protos";function vt(t,n,e){var i=z()(t.methods),s;try{for(i.s();!(s=i.n()).done;){var a=s.value;if(n==a.serviceName&&a.name==e)return a}}catch(u){i.e(u)}finally{i.f()}return null}function Me(t){for(var n=ue(),e=0,i=n;e<i.length;e++){var s=i[e];if(s.path==t)return s}return null}function ue(){var t=localStorage.getItem(Be);return t==null?[]:JSON.parse(t)}function mt(t){var n=z()(t),e;try{for(n.s();!(e=n.n()).done;){var i=e.value;Ze(i)}}catch(s){n.e(s)}finally{n.f()}}function Ze(t){for(var n=ue(),e=0;e<n.length;e++)if(n[e].path===t.path){n.splice(e,1);break}n.push(t),localStorage.setItem(Be,JSON.stringify(n))}function gt(t){var n=z()(t),e;try{for(n.s();!(e=n.n()).done;){var i=e.value;pt(i)}}catch(s){n.e(s)}finally{n.f()}}function pt(t){var n=Me(t.path);if(n!=null){var e=g()(g()({},t),{},{host:n.host}),i=z()(e.methods),s;try{for(i.s();!(s=i.n()).done;){var a=s.value,u=vt(n,a.serviceName,a.name);if(u!=null){a.id=u.id,a.requestMds=u.requestMds,a.responseMds=u.responseMds;var h=a.requestBody?JSON.parse(a.requestBody):{},c=u.requestBody?JSON.parse(u.requestBody):{};for(var C in h)c[C]!=null&&(h[C]=c[C]);a.requestBody=JSON.stringify(h,null,"	")}}}catch(I){i.e(I)}finally{i.f()}Ze(e)}}function St(t){for(var n=ue(),e=0;e<n.length;e++)if(n[e].path===t){n.splice(e,1);break}localStorage.setItem(Be,JSON.stringify(n))}function wt(t){var n=Me(t);return n==null?[]:n.methods}function J(){var t=localStorage.getItem(Ie);return t==null?[]:JSON.parse(t)}function yt(t){for(var n=J(),e=0;e<n.length;e++)if(n[e]===t){n.splice(e,1);break}n.push(t),localStorage.setItem(Ie,JSON.stringify(n))}function xt(t){for(var n=J(),e=0;e<n.length;e++)if(n[e]===t){n.splice(e,1);break}localStorage.setItem(Ie,JSON.stringify(n))}var Ct=function(){function t(){ae()(this,t),S()(this,"includeDirDrawerVisible",!1),S()(this,"includeDirs",[]),console.log("init paths store"),(0,je.ky)(this),this.init()}return le()(t,[{key:"init",value:f()().mark(function n(){return f()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:this.includeDirs=J();case 1:case"end":return i.stop()}},n,this)})},{key:"showIncludeDir",value:function(e){this.includeDirDrawerVisible=e}},{key:"addIncludeDir",value:f()().mark(function n(){var e;return f()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,window.rpc.openIncludeDir();case 2:e=s.sent,e.success&&(yt(e.data),this.includeDirs=J());case 4:case"end":return s.stop()}},n,this)})},{key:"removeIncludeDir",value:f()().mark(function n(e){return f()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:xt(e);case 1:case"end":return s.stop()}},n)})}]),t}(),Et=function(){function t(){ae()(this,t),S()(this,"selectedTab","1"),S()(this,"openTabs",[]),console.log("init tab store"),(0,je.ky)(this)}return le()(t,[{key:"selectTab",value:function(e){this.selectedTab=e}},{key:"setDot",value:function(e){var i=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;this.openTabs.forEach(function(a,u){a.key==e&&(a.dot=s,i.openTabs.splice(u,1,a))})}},{key:"openTab",value:function(e){this.openTabs.length==1&&this.openTabs[0].key==="1"&&this.openTabs.splice(0,1);var i=this.openTabs.findIndex(function(s){return s.key===e.key});i==-1&&this.openTabs.push(e),this.selectedTab=e.key}},{key:"remove",value:function(e){var i=this;this.openTabs.forEach(function(s,a){if(s.key==e){if(i.openTabs.splice(a,1),i.openTabs.length==0)return;var u=a<i.openTabs.length?a:i.openTabs.length-1;i.selectedTab=i.openTabs[u].key}})}}]),t}(),_,l;(function(t){t[t.Text=0]="Text",t[t.Int8=1]="Int8",t[t.Int16LE=2]="Int16LE",t[t.Int16BE=3]="Int16BE",t[t.Int32LE=4]="Int32LE",t[t.Int32BE=5]="Int32BE",t[t.FloatLE=6]="FloatLE",t[t.FloatBE=7]="FloatBE",t[t.DoubleLE=8]="DoubleLE",t[t.DoubleBE=9]="DoubleBE",t[t.Uint8=10]="Uint8",t[t.Uint16LE=11]="Uint16LE",t[t.Uint16BE=12]="Uint16BE",t[t.Uint32LE=13]="Uint32LE",t[t.Uint32BE=14]="Uint32BE",t[t.BigInt64BE=15]="BigInt64BE",t[t.BigInt64LE=16]="BigInt64LE",t[t.BigUint64BE=17]="BigUint64BE",t[t.BigUint64LE=18]="BigUint64LE"})(l||(l={}));var Oe=new Map([[l.Text,"Text"],[l.Int8,"Int8"],[l.Int16LE,"Int16LE"],[l.Int16BE,"Int16BE"],[l.Int32LE,"Int32LE"],[l.Int32BE,"Int32BE"],[l.FloatLE,"FloatLE"],[l.FloatBE,"FloatBE"],[l.DoubleLE,"DoubleLE"],[l.DoubleBE,"DoubleBE"],[l.Uint8,"UInt8"],[l.Uint16LE,"Uint16LE"],[l.Uint16BE,"Uint16BE"],[l.Uint32LE,"Uint32LE"],[l.Uint32BE,"Uint32BE"],[l.BigInt64BE,"BigInt64BE"],[l.BigInt64LE,"BigInt64LE"],[l.BigUint64BE,"BigUint64BE"],[l.BigUint64LE,"BigUint64LE"]]),O;(function(t){t[t.Unary=0]="Unary",t[t.ClientStream=1]="ClientStream",t[t.ServerStream=2]="ServerStream",t[t.BidirectionalStream=3]="BidirectionalStream"})(O||(O={}));var jt=(_={},S()(_,O.Unary,"Unary Call"),S()(_,O.ClientStream,"Client Stream"),S()(_,O.ServerStream,"Server Stream"),S()(_,O.BidirectionalStream,"Bi-Directional"),_),Se;(function(t){t[t.Proto=0]="Proto",t[t.Env=1]="Env"})(Se||(Se={}));function It(){return window.go.main.Api.OpenProto()}function Fe(t,n){return window.go.main.Api.ParseProto(t,n)}function Bt(t){return window.go.main.Api.Send(t)}function Zt(t){return window.go.main.Api.Stop(t)}var be;(function(t){var n=function(){function e(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};ae()(this,e),S()(this,"id",void 0),S()(this,"protoPath",void 0),S()(this,"serviceName",void 0),S()(this,"serviceFullyName",void 0),S()(this,"methodName",void 0),S()(this,"methodMode",void 0),S()(this,"host",void 0),S()(this,"body",void 0),S()(this,"mds",void 0),S()(this,"includeDirs",void 0),typeof i=="string"&&(i=JSON.parse(i)),this.id=i.id,this.protoPath=i.protoPath,this.serviceName=i.serviceName,this.serviceFullyName=i.serviceFullyName,this.methodName=i.methodName,this.methodMode=i.methodMode,this.host=i.host,this.body=i.body,this.mds=i.mds,this.includeDirs=i.includeDirs}return le()(e,null,[{key:"createFrom",value:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new e(s)}}]),e}();t.RequestData=n})(be||(be={}));var Re;(function(t){var n=function(){function e(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};ae()(this,e),S()(this,"success",void 0),S()(this,"message",void 0),S()(this,"data",void 0),typeof i=="string"&&(i=JSON.parse(i)),this.success=i.success,this.message=i.message,this.data=i.data}return le()(e,null,[{key:"createFrom",value:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new e(s)}}]),e}();t.R=n})(Re||(Re={}));function gn(t){window.runtime.LogPrint(t)}function pn(t){window.runtime.LogTrace(t)}function Sn(t){window.runtime.LogDebug(t)}function wn(t){window.runtime.LogInfo(t)}function yn(t){window.runtime.LogWarning(t)}function xn(t){window.runtime.LogError(t)}function Cn(t){window.runtime.LogFatal(t)}function Ne(t,n,e){window.runtime.EventsOnMultiple(t,n,e)}function De(t,n){Ne(t,n,-1)}function En(t){for(var n,e=arguments.length,i=new Array(e>1?e-1:0),s=1;s<e;s++)i[s-1]=arguments[s];return(n=window.runtime).EventsOff.apply(n,[t].concat(i))}function jn(t,n){Ne(t,n,1)}function In(t){var n=[t].slice.call(arguments);return window.runtime.EventsEmit.apply(null,n)}function Bn(){window.runtime.WindowReload()}function Zn(){window.runtime.WindowReloadApp()}function bn(){window.runtime.WindowSetSystemDefaultTheme()}function Dn(){window.runtime.WindowSetLightTheme()}function Ln(){window.runtime.WindowSetDarkTheme()}function kn(){window.runtime.WindowCenter()}function Un(t){window.runtime.WindowSetTitle(t)}function Pn(){window.runtime.WindowFullscreen()}function Wn(){window.runtime.WindowUnfullscreen()}function Mn(){return window.runtime.WindowIsFullscreen()}function On(){return window.runtime.WindowGetSize()}function Fn(t,n){window.runtime.WindowSetSize(t,n)}function Rn(t,n){window.runtime.WindowSetMaxSize(t,n)}function Nn(t,n){window.runtime.WindowSetMinSize(t,n)}function zn(t,n){window.runtime.WindowSetPosition(t,n)}function Tn(){return window.runtime.WindowGetPosition()}function An(){window.runtime.WindowHide()}function Vn(){window.runtime.WindowShow()}function $n(){window.runtime.WindowMaximise()}function Hn(){window.runtime.WindowToggleMaximise()}function Gn(){window.runtime.WindowUnmaximise()}function Kn(){return window.runtime.WindowIsMaximised()}function Jn(){window.runtime.WindowMinimise()}function Yn(){window.runtime.WindowUnminimise()}function Qn(t,n,e,i){window.runtime.WindowSetBackgroundColour(t,n,e,i)}function Xn(){return window.runtime.ScreenGetAll()}function qn(){return window.runtime.WindowIsMinimised()}function _n(){return window.runtime.WindowIsNormal()}function er(t){window.runtime.BrowserOpenURL(t)}function tr(){return window.runtime.Environment()}function nr(){window.runtime.Quit()}function rr(){window.runtime.Hide()}function ir(){window.runtime.Show()}var bt=function(){function t(){ae()(this,t),S()(this,"protos",[]),S()(this,"requestCaches",new Map),S()(this,"responseCaches",new Map),S()(this,"runningCaches",new Map),console.log("init rpc store"),(0,je.ky)(this),this.init()}return le()(t,[{key:"init",value:function(){this.initProto(),this.onResponse()}},{key:"initProto",value:function(){this.protos=ue()}},{key:"onEndStream",value:function(){var e=this;De("end",function(i){e.runningCaches.set(i,!1)})}},{key:"onResponse",value:function(){var e=this;De("data",function(i){console.log("Response data1: ",i);var s=e.responseCaches.get(i.id);if(s==null){e.responseCaches.set(i.id,{body:i.body,mds:i.mds,streams:[i.body]});return}var a=s.streams;a!=null&&(a.unshift(i.body),e.responseCaches.set(i.id,g()(g()({},s),{},{streams:a,mds:i.mds})))})}},{key:"importProto",value:f()().mark(function n(){var e;return f()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,It();case 2:e=s.sent;debugger;if(e.success){s.next=6;break}return s.abrupt("return",e);case 6:return s.next=8,Fe(e.data,J());case 8:return e=s.sent,mt(e.data),this.initProto(),s.abrupt("return",{success:!0});case 12:case"end":return s.stop()}},n,this)})},{key:"reloadProto",value:f()().mark(function n(){var e,i;return f()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e=[],ue().forEach(function(u){return e.push(u.path)}),a.next=4,Fe(e,J());case 4:if(i=a.sent,i.success){a.next=8;break}return console.log("reload proto error"),a.abrupt("return");case 8:gt(i.data),this.initProto();case 10:case"end":return a.stop()}},n,this)})},{key:"deleteProto",value:f()().mark(function n(e){return f()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:St(e),this.initProto();case 2:case"end":return s.stop()}},n,this)})},{key:"saveProto",value:f()().mark(function n(e,i,s){var a,u;return f()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:for(console.log("save proto method",s),e.host=i,a=0;a<e.methods.length;a++)u=e.methods[a],u.id==s.id&&(e.methods[a]=s);Ze(e),this.initProto();case 5:case"end":return c.stop()}},n,this)})},{key:"send",value:f()().mark(function n(e){return f()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return this.removeCache(e.id),s.next=3,this.push(e);case 3:e.methodMode!=O.Unary&&this.runningCaches.set(e.id,!0);case 4:case"end":return s.stop()}},n,this)})},{key:"push",value:f()().mark(function n(e){var i,s;return f()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return console.log("send request data",e),i=this.requestCaches.get(e.id),i==null?this.requestCaches.set(e.id,{streams:[e.body]}):(s=i.streams,s==null||s.unshift(e.body),this.requestCaches.set(e.id,{streams:s})),e.includeDirs=J(),u.next=6,Bt(new be.RequestData(e));case 6:case"end":return u.stop()}},n,this)})},{key:"removeCache",value:f()().mark(function n(e){return f()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:this.requestCaches.delete(e),this.responseCaches.delete(e),this.runningCaches.delete(e);case 3:case"end":return s.stop()}},n,this)})},{key:"stopStream",value:f()().mark(function n(e){return f()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return console.log("request stop stream2"),s.next=3,Zt(e);case 3:this.runningCaches.set(e,!1);case 4:case"end":return s.stop()}},n,this)})}]),t}(),ze=new Ct,Te=new Et,Ae=new bt,ee=(0,j.createContext)({includeDirStore:ze,tabStore:Te,protoStore:Ae}),Dt=o(63463),T=o(71577),Ve=o(95507),sr=o(70133),$e=o(24969),Lt=o(97937),r=o(85893),kt=function(){var n=(0,j.useContext)(ee),e=n.includeDirStore;return(0,r.jsx)(Dt.Z,{title:"Import Paths",placement:"left",width:500,open:e.includeDirDrawerVisible,onClose:function(){return e.showIncludeDir(!1)},style:{padding:5},bodyStyle:{padding:5},extra:(0,r.jsx)(T.Z,{type:"link",icon:(0,r.jsx)($e.Z,{}),onClick:function(){return e.addIncludeDir()},children:"Add Path"}),children:(0,r.jsx)(Ve.ZP,{size:"large",loadMore:(0,r.jsx)("div",{}),dataSource:e.includeDirs,renderItem:function(s){return(0,r.jsx)(Ve.ZP.Item,{actions:[(0,r.jsx)("a",{onClick:function(){return e.removeIncludeDir(s)},children:(0,r.jsx)(Lt.Z,{})})],children:s})}})})},Ut=(0,se.Pi)(kt),Pt=function(){var n=(0,j.useContext)(ee),e=n.tabStore,i=n.protoStore,s=n.includeDirStore,a=(0,j.useState)(!1),u=M()(a,2),h=u[0],c=u[1],C=(0,j.useState)([]),I=M()(C,2),w=I[0],x=I[1],d=(0,j.useState)(""),B=M()(d,2),D=B[0],ne=B[1],fe=(0,j.useState)(!0),H=M()(fe,2),re=H[0],Y=H[1],ve=(0,j.useState)(),F=M()(ve,2),Z=F[0],U=F[1],G=function(p){c(p),p||ne("")},L=function(p){x(p),Y(!1)},v=function(p){var E=new Set,m=z()(i.protos),b;try{for(m.s();!(b=m.n()).done;){var A=b.value;A.name.toLowerCase().indexOf(p.toLowerCase())>-1&&E.add(A.path);var k=z()(A.methods),R;try{for(k.s();!(R=k.n()).done;){var V=R.value;V.serviceName.toLowerCase().indexOf(p.toLowerCase())>-1&&E.add(A.path+V.serviceName),V.name.toLowerCase().indexOf(p.toLowerCase())>-1&&E.add(V.id)}}catch(N){k.e(N)}finally{k.f()}}}catch(N){m.e(N)}finally{m.f()}return Array.from(E)},P=function(p){var E=p.target.value,m=v(E);console.log(E,m),x(m),ne(E),Y(!0)},y=function(p,E){var m=p.toLowerCase().indexOf(D.toLowerCase()),b=p.substring(0,m),A=p.substring(m,m+D.length),k=p.slice(m+D.length),R=m>-1?(0,r.jsxs)("span",{children:[b,(0,r.jsx)("span",{style:{color:"#f50"},children:A}),k]}):(0,r.jsx)("span",{children:p});return R},un=function(p){var E=[],m=z()(p),b;try{var A=function(){var R=b.value,V={key:R.path,title:(0,r.jsx)("span",{style:{width:"100%"},children:y(R.name,D)}),icon:(0,r.jsx)(tt.Z,{}),children:[]},N=new Map;R.methods.forEach(function($,ie,me){var we=N.get($.serviceName);we==null&&(we=[]),we.push({key:$.id,title:y($.name,D),icon:(0,r.jsx)(nt.Z,{})}),N.set($.serviceName,we)}),N.forEach(function($,ie,me){V.children.push({key:R.path+ie,title:y(ie,D),icon:(0,r.jsx)(rt.Z,{}),children:$})}),E.push(V)};for(m.s();!(b=m.n()).done;)A()}catch(k){m.e(k)}finally{m.f()}return E},dn=function(p,E){debugger;U(void 0);var m=E.node.pos.split("-");if(m.length==2){var b=i.protos[m[1]];U({id:b.path,name:b.name})}else m.length==4&&e.openTab({key:p[0].toString(),params:E.node.pos,type:Se.Proto})},cn=function(){var W=Q()(f()().mark(function p(){var E;return f()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,i.importProto();case 2:E=b.sent,E.success||ye.Z.open({message:"Error while importing protos",description:E.message,icon:(0,r.jsx)(Ee.Z,{style:{color:"red"}})});case 4:case"end":return b.stop()}},p)}));return function(){return W.apply(this,arguments)}}(),hn=function(){i.reloadProto(),Ue.ZP.success("Reload protos successful.")},fn=function(){var W=Q()(f()().mark(function p(){return f()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:if(Z!=null){m.next=3;break}return Ue.ZP.warn("Please select the deleted proto."),m.abrupt("return");case 3:Pe.Z.confirm({title:"Confirm delete proto",content:"Do you want to remove the proto configuration ".concat(Z.name,"?"),onOk:function(){var A=wt(Z.id),k=z()(A),R;try{for(k.s();!(R=k.n()).done;){var V=R.value,N=z()(e.openTabs),$;try{for(N.s();!($=N.n()).done;){var ie=$.value;if(ie.key==V.id){e.remove(ie.key);break}}}catch(me){N.e(me)}finally{N.f()}}}catch(me){k.e(me)}finally{k.f()}i.deleteProto(Z.id),U(void 0)}});case 4:case"end":return m.stop()}},p)}));return function(){return W.apply(this,arguments)}}(),Je=un(i.protos),vn=[{label:(0,r.jsxs)(oe.Z,{direction:"vertical",size:0,align:"center",children:[(0,r.jsx)(it.Z,{style:{fontSize:20,marginRight:0}}),(0,r.jsx)("div",{style:{fontSize:10},children:"GRPC"})]}),key:"1",children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ge.Z,{size:"small",placeholder:"Filter Methods",hidden:!h,onChange:P,value:D,style:{marginBottom:5}}),Je.length==0?(0,r.jsx)("div",{style:{height:"90%",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,r.jsx)(xe.Z,{description:"No proto"})}):(0,r.jsx)(et.Z.DirectoryTree,{onExpand:L,expandedKeys:w,autoExpandParent:re,onSelect:dn,switcherIcon:(0,r.jsx)(st.Z,{}),defaultExpandedKeys:["0-0-0"],treeData:Je})]})}];return(0,r.jsxs)(X.Z,{style:{height:"100%"},children:[(0,r.jsx)(X.Z.Header,{style:{padding:0,backgroundColor:"white",height:"44px",lineHeight:"44px",borderBottom:"1px solid #f0f0f0"},children:(0,r.jsxs)(Ce.Z,{children:[(0,r.jsx)(q.Z,{flex:"auto",style:{paddingLeft:10,fontSize:18},children:"upRpc"}),(0,r.jsx)(q.Z,{flex:"100px",children:(0,r.jsxs)(oe.Z,{size:8,style:{paddingRight:10},children:[(0,r.jsx)(K.Z,{title:"Import protos",children:(0,r.jsx)("a",{style:{color:"#000000D9",fontSize:16},onClick:cn,children:(0,r.jsx)(We.Z,{})})}),(0,r.jsx)(K.Z,{title:"Reload protos",children:(0,r.jsx)("a",{style:{color:"#000000D9",fontSize:16},onClick:hn,children:(0,r.jsx)(ot.Z,{})})}),(0,r.jsx)(K.Z,{title:"Delete selectecd proto",children:(0,r.jsx)("a",{style:{color:"#000000D9",fontSize:16},onClick:fn,children:(0,r.jsx)(at.Z,{})})}),(0,r.jsx)(K.Z,{title:"Import dependency paths",children:(0,r.jsx)("a",{style:{color:"#000000D9",fontSize:16},onClick:function(){return s.showIncludeDir(!s.includeDirDrawerVisible)},children:(0,r.jsx)(lt.Z,{})})}),(0,r.jsx)(K.Z,{title:"Filter methods",children:(0,r.jsx)("a",{style:{color:"#000000D9",fontSize:16},onClick:function(){return G(!h)},children:(0,r.jsx)(ut.Z,{})})})]})})]})}),(0,r.jsxs)(X.Z.Content,{style:{backgroundColor:"white"},children:[(0,r.jsx)(pe.Z,{tabPosition:"left",size:"small",style:{height:"100%"},items:vn}),(0,r.jsx)(Ut,{})]})]})},Wt=(0,se.Pi)(Pt),de=o(70524),te=o(21369),Mt=o(63922),Ot=o(99611),Ft=o(93045),Rt=o(33859),Nt=function(){var n=(0,j.useContext)(ee),e=n.protoStore,i=function(){var s=Q()(f()().mark(function a(){var u;return f()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,e.importProto();case 2:u=c.sent,u.success||ye.Z.open({message:"Error while importing protos",description:u.message,icon:(0,r.jsx)(Ee.Z,{style:{color:"red"}})});case 4:case"end":return c.stop()}},a)}));return function(){return s.apply(this,arguments)}}();return(0,r.jsx)("div",{style:{height:"90%",width:"90%",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,r.jsx)(Rt.ZP,{icon:(0,r.jsx)(Ft.Z,{style:{fontSize:120}}),title:"Welcome to use upRpc",subTitle:"Swim in the ocean of knowledge and enjoy it.",extra:(0,r.jsx)(T.Z,{type:"primary",onClick:function(){return i()},icon:(0,r.jsx)($e.Z,{}),children:"Import Protos"})})})},zt=(0,se.Pi)(Nt),ce={header:"header___tHXcr",requestStreamHeight:"requestStreamHeight___LV6s3",metadataColumn:"metadataColumn___o3Lum"},Tt=o(36027),At=o(28280),Vt=o(27496),$t=o(74842),Ht=o(60219),he=o(1769),He=o(74981),or=o(90252),ar=o(82679),Ge=o(54907),Ke=function(t){var n=t.value,e=(0,j.useState)("1"),i=M()(e,2),s=i[0],a=i[1];return n==null?(0,r.jsx)(xe.Z,{image:xe.Z.PRESENTED_IMAGE_SIMPLE}):(0,r.jsx)(Ge.Z,{activeKey:s,accordion:!0,onChange:function(h){return a(h)},children:n==null?void 0:n.map(function(u,h){return u==null||u==""?!0:(0,r.jsx)(Ge.Z.Panel,{header:"stream-"+((n==null?void 0:n.length)-h),children:(0,r.jsx)("pre",{style:{padding:0},children:u})},h+1)})})};function Gt(t,n){if(l.Text==n)return new TextEncoder().encode(t);var e=new DataView(new ArrayBuffer(16));switch(n){case l.Int8:e.setInt8(0,t);break;case l.Int16LE:e.setInt16(0,t,!0);break;case l.Int16BE:e.setInt16(0,t,!1);break;case l.Int32LE:e.setInt32(0,t,!0);break;case l.Int32BE:e.setInt32(0,t,!1);break;case l.FloatLE:e.setFloat32(0,t,!0);break;case l.FloatBE:e.setFloat32(0,t,!1);break;case l.DoubleLE:e.setFloat64(0,t,!0);break;case l.DoubleBE:e.setFloat64(0,t,!1);break;case l.Uint8:e.setUint8(0,t);break;case l.Uint16LE:e.setUint16(0,t,!0);break;case l.Uint16BE:e.setUint16(0,t,!1);break;case l.Uint32LE:e.setUint32(0,t,!0);break;case l.Uint32BE:e.setUint32(0,t,!1);break;case l.BigInt64LE:e.setBigInt64(0,t,!0);break;case l.BigInt64BE:e.setBigInt64(0,t,!1);break;case l.BigUint64LE:e.setBigUint64(0,t,!0);break;case l.BigUint64BE:e.setBigInt64(0,t,!1);break}return e}function Kt(t,n){if(l.Text==n)return new TextDecoder().decode(t);var e=new DataView(t.buffer,t.byteOffset,t.byteLength);try{switch(n){case l.Int8:return e.getInt8(0).toString();case l.Int16LE:return e.getInt16(0,!0).toString();case l.Int16BE:return e.getInt16(0,!1).toString();case l.Int32LE:return e.getInt32(0,!0).toString();case l.Int32BE:return e.getInt32(0,!1).toString();case l.FloatLE:return e.getFloat32(0,!0).toString();case l.FloatBE:return e.getFloat32(0,!1).toString();case l.DoubleLE:return e.getFloat64(0,!0).toString();case l.DoubleBE:return e.getFloat64(0,!1).toString();case l.Uint8:return e.getUint8(0).toString();case l.Uint16LE:return e.getUint16(0,!0).toString();case l.Uint16BE:return e.getUint16(0,!1).toString();case l.Uint32LE:return e.getUint32(0,!0).toString();case l.Uint32BE:return e.getUint32(0,!1).toString();case l.BigInt64LE:return e.getBigInt64(0,!0).toString().toString();case l.BigInt64BE:return e.getBigInt64(0,!1).toString();case l.BigUint64LE:return e.getBigUint64(0,!0).toString();case l.BigUint64BE:return e.getBigInt64(0,!1).toString();default:return"[Buffer ... "+t.length+" bytes]"}}catch{return"decode error"}}var Jt=function(t){var n=t.method,e=t.responseCache,i=t.onChange,s=function(w,x,d){if(console.log(" response mds: ",n.responseMds),n.responseMds==null)n.responseMds=[];else for(var B=0;B<n.responseMds.length;B++)n.responseMds[B].id==w&&n.responseMds.splice(B,1);n.responseMds.push({id:w,key:x,parseType:d}),i(g()({},n))},a=function(w){if(n.responseMds==null)return 0;var x=z()(n.responseMds),d;try{for(x.s();!(d=x.n()).done;){var B=d.value;if(B.id==w)return B.parseType}}catch(D){x.e(D)}finally{x.f()}return 0},u=[{title:"KEY",dataIndex:"key",key:"name",width:"200px"},{title:"VALUE",dataIndex:"value",key:"value",render:function(w,x){return/-bin$/.test(x.key)?(0,r.jsx)(Yt,{id:x.id,value:x.value,parseType:a(x.id),onChange:function(B,D){return s(B,x.key,D)}}):w}}],h=(0,r.jsx)(r.Fragment,{});(e==null?void 0:e.mds)!=null&&(h=(0,r.jsxs)(r.Fragment,{children:[" (",e.mds.length,")"]}));var c=n.mode==O.ServerStream||n.mode==O.BidirectionalStream?{key:"response",label:"Response Stream",children:(0,r.jsx)(Ke,{value:e==null?void 0:e.streams})}:{key:" response",label:"Response",children:(0,r.jsx)(He.ZP,{style:{background:"#fff"},width:"100%",height:"100%",mode:"json",theme:"textmate",name:"inputs",fontSize:13,cursorStart:2,highlightActiveLine:!1,showPrintMargin:!1,showGutter:!1,value:e==null?void 0:e.body,setOptions:{showLineNumbers:!1,highlightGutterLine:!1,fixedWidthGutter:!1,tabSize:1,displayIndentGuides:!1},readOnly:!0,tabSize:2})};console.log("responseCache: ",e);var C=[c,{label:(0,r.jsxs)(r.Fragment,{children:["Metadata",h]}),key:"matadata",children:(0,r.jsx)(he.Z,{size:"small",bordered:!0,pagination:!1,columns:u,rowKey:"id",dataSource:e==null?void 0:e.mds})}];return(0,r.jsx)(pe.Z,{style:{height:"100%"},animated:!1,items:C})},Yt=function(n){var e=n.id,i=n.value,s=n.parseType,a=n.onChange,u=[];return Oe.forEach(function(h,c){return u.push((0,r.jsx)(te.Z.Option,{value:c.toString(),children:h},c))}),(0,r.jsxs)(Ce.Z,{children:[(0,r.jsx)(q.Z,{flex:"auto",style:{display:"flex",alignItems:"center"},children:Kt(i,s)}),(0,r.jsx)(q.Z,{flex:"100px",children:(0,r.jsx)(te.Z,{defaultValue:s.toString(),bordered:!1,onChange:function(c){return a(e,Number.parseInt(c))},style:{width:140},children:u},"s1"+e)})]})},Qt=o(19632),Le=o.n(Qt),Xt=o(81474),qt=o(16596),_t=o(3089),en=function(t){var n=t.running,e=t.method,i=t.requestCache,s=t.onChange,a=t.onPush,u=(0,j.useState)(e.requestBody),h=M()(u,2),c=h[0],C=h[1],I=function(Z){s&&s(g()(g()({},e),{},{requestBody:Z})),C(Z)},w=(0,j.useState)(e.requestMds==null?[]:e.requestMds),x=M()(w,2),d=x[0],B=x[1],D=function(Z){d[Z.id]=Z,B(Le()(d)),s&&s(g()(g()({},e),{},{requestMds:d}))},ne=function(){d.push({parseType:0,id:d.length,key:"",value:""}),B(Le()(d))},fe=function(Z){d.splice(Z,1),B(Le()(d)),s&&s(g()(g()({},e),{},{requestMds:d}))},H=(0,r.jsx)(r.Fragment,{});d!==null&&d.length>0&&(H=(0,r.jsxs)(r.Fragment,{children:[" (",d.length,")"]}));var re=e.mode==O.ClientStream||e.mode==O.BidirectionalStream,Y=n&&re?(0,r.jsx)(T.Z,{size:"small",type:"primary",icon:(0,r.jsx)(qt.Z,{}),onClick:function(){return a(c)},children:"Push"}):"",ve=[{label:"Params",key:"params",children:(0,r.jsx)(He.ZP,{style:{background:"#fff"},width:"100%",height:"100%",mode:"json",theme:"textmate",name:"inputs",fontSize:13,cursorStart:2,showPrintMargin:!1,showGutter:!0,onChange:I,defaultValue:e.requestBody,setOptions:{useWorker:!0,displayIndentGuides:!0},tabSize:2})},{label:(0,r.jsxs)(r.Fragment,{children:["Metadata",H]}),key:"metadata",children:(0,r.jsxs)(he.Z,{rowKey:"id",size:"small",bordered:!0,pagination:!1,dataSource:d,children:[(0,r.jsx)(he.Z.Column,{className:ce.metadataColumn,dataIndex:"key",title:"KEY",width:"30%",render:function(Z,U,G){return(0,r.jsx)(ge.Z,{defaultValue:U.key,onChange:function(v){return D(g()(g()({},U),{},{key:v.target.value}))}},"key"+U.id)}},"key"),(0,r.jsx)(he.Z.Column,{className:ce.metadataColumn,dataIndex:"value",title:"VALUE",render:function(Z,U,G){return(0,r.jsx)(tn,{metadata:U,onChange:function(v){return D(g()(g()({},v),{},{key:U.key}))}})}},"value"),(0,r.jsx)(he.Z.Column,{className:ce.metadataColumn,dataIndex:"action",align:"center",width:80,title:(0,r.jsx)(K.Z,{title:"Add metadata",children:(0,r.jsx)(T.Z,{size:"small",type:"text",icon:(0,r.jsx)(We.Z,{}),onClick:ne})}),render:function(Z,U,G){return(0,r.jsx)(K.Z,{title:"Delete metadata",placement:"bottom",children:(0,r.jsx)(T.Z,{size:"small",type:"text",icon:(0,r.jsx)(_t.Z,{}),onClick:function(){return fe(G)}})})}},"action")]})}];return(0,r.jsxs)(de.oL,{children:[(0,r.jsx)(pe.Z,{style:{height:"100%"},animated:!1,items:ve,tabBarExtraContent:(0,r.jsx)("div",{style:{paddingRight:10},children:Y})}),(0,r.jsx)(de.oL.Pane,{visible:re,className:ce.requestStreamHeight,children:(0,r.jsx)(Xt.Z,{title:"Request Stream",size:"small",bordered:!1,style:{height:"100%",marginTop:"3px"},bodyStyle:{height:"calc(100% - 40px)",overflow:"auto",padding:0},children:(0,r.jsx)(Ke,{value:i==null?void 0:i.streams})})})]})},tn=function(n){var e=n.metadata,i=n.onChange,s=(0,j.useState)(e),a=M()(s,2),u=a[0],h=a[1],c=function(w){h(w),i(w)},C=[];return Oe.forEach(function(I,w){return C.push((0,r.jsx)(te.Z.Option,{value:w.toString(),children:I},w))}),(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsx)(ge.Z,{defaultValue:u.value,onChange:function(w){return c(g()(g()({},u),{},{value:w.target.value}))}},"v"+u.id),e.key.endsWith("-bin")?(0,r.jsx)(te.Z,{defaultValue:u.parseType.toString(),bordered:!1,onChange:function(w){return c(g()(g()({},u),{},{parseType:Number.parseInt(w)}))},style:{width:140},children:C},"s"+u.id):""]})},nn=function(n){var e=n.proto,i=n.method,s=(0,j.useContext)(ee),a=s.protoStore,u=s.tabStore,h=(0,j.useState)(e.host),c=M()(h,2),C=c[0],I=c[1],w=(0,j.useState)(i),x=M()(w,2),d=x[0],B=x[1],D=function(v){u.setDot(d.id),I(v)},ne=function(v){u.setDot(v.id),B(g()(g()({},v),{},{requestBody:v.requestBody,requestMds:v.requestMds}))},fe=function(v){u.setDot(v.id),B(g()(g()({},v),{},{responseMds:v.responseMds}))},H=function(){var v=[];return d.requestMds!=null&&d.requestMds.length>0&&(v=d.requestMds.map(function(P,y){return P.key.endsWith("-bin")?g()(g()({},P),{},{key:P.key,value:Gt(P.value,P.parseType)}):g()(g()({},P),{},{key:P.key,value:P.value})})),{id:d.id,body:d.requestBody,mds:v,methodMode:d.mode,methodName:d.name,serviceFullyName:d.serviceFullyName,serviceName:d.serviceName,protoPath:e.path,host:C}},re=function(){var L=Q()(f()().mark(function v(){return f()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,a.push(H());case 2:case"end":return y.stop()}},v)}));return function(){return L.apply(this,arguments)}}(),Y=function(){var L=Q()(f()().mark(function v(){return f()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.prev=0,y.next=3,a.send(H());case 3:y.next=8;break;case 5:y.prev=5,y.t0=y.catch(0),ye.Z.open({message:"Calling error",description:y.t0.message,icon:(0,r.jsx)(Ee.Z,{style:{color:"red"}})});case 8:case"end":return y.stop()}},v,null,[[0,5]])}));return function(){return L.apply(this,arguments)}}(),ve=function(){var L=Q()(f()().mark(function v(){return f()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,a.stopStream(d.id);case 2:case"end":return y.stop()}},v)}));return function(){return L.apply(this,arguments)}}(),F=function(){a.saveProto(e,C,d),u.setDot(d.id,!1)},Z=a.requestCaches.get(d.id),U=a.responseCaches.get(d.id),G=a.runningCaches.get(d.id);return(0,r.jsxs)(X.Z,{style:{height:"100%",backgroundColor:"white",padding:"0px 10px"},children:[(0,r.jsx)(X.Z.Header,{className:ce.header,style:{paddingBottom:10},children:(0,r.jsxs)(Ce.Z,{gutter:5,children:[(0,r.jsx)(q.Z,{flex:"auto",style:{paddingTop:5},children:(0,r.jsx)(ge.Z,{addonBefore:(0,r.jsxs)(oe.Z,{style:{width:110},children:[(0,r.jsx)(Tt.Z,{}),jt[d.mode]]}),defaultValue:C,onChange:function(v){return D(v.target.value)}})}),(0,r.jsx)(q.Z,{flex:"160px",children:(0,r.jsxs)(oe.Z,{children:[G?(0,r.jsx)(T.Z,{type:"primary",icon:(0,r.jsx)(At.Z,{}),onClick:ve,children:"Stop"}):d.mode==O.Unary?(0,r.jsx)(T.Z,{type:"primary",icon:(0,r.jsx)(Vt.Z,{}),onClick:Y,children:"Send"}):(0,r.jsx)(T.Z,{type:"primary",icon:(0,r.jsx)($t.Z,{}),onClick:Y,children:"Start"}),(0,r.jsx)(T.Z,{icon:(0,r.jsx)(Ht.Z,{}),onClick:F,children:"Save"})]})})]})}),(0,r.jsx)(X.Z.Content,{children:(0,r.jsxs)(de.oL,{vertical:!0,children:[(0,r.jsx)(en,{running:G,method:d,requestCache:Z,onChange:ne,onPush:re}),(0,r.jsx)(Jt,{method:d,responseCache:U,onChange:fe})]})})]})},rn=(0,se.Pi)(nn),sn=function(){var n=(0,j.useContext)(ee),e=n.tabStore,i=n.protoStore,s=function(c,C){typeof c=="string"&&(e.remove(c),i.removeCache(c))},a=(0,r.jsxs)(oe.Z,{size:0,style:{marginRight:10},children:[(0,r.jsx)(te.Z,{defaultValue:"1",style:{width:180},bordered:!1,children:(0,r.jsx)(te.Z.Option,{value:"1",children:"No Environment"})}),(0,r.jsx)(T.Z,{type:"text",icon:(0,r.jsx)(Ot.Z,{}),size:"large"})]});if(e.openTabs.length==0)return(0,r.jsx)(zt,{});var u=e.openTabs.map(function(h){var c=(0,r.jsx)(r.Fragment,{}),C=h.title;if(h.type==Se.Proto){var I=h.params.split("-").map(Number),w=i.protos[I[1]],x=w.methods[I[3]];C=x.name,c=(0,r.jsx)(rn,{proto:w,method:x})}return{label:(0,r.jsx)(Mt.Z,{dot:h.dot,offset:[5,8],children:C}),key:h.key,closeable:h.closable,children:c}});return(0,r.jsx)(pe.Z,{hideAdd:!0,type:"editable-card",onEdit:s,style:{height:"100%"},size:"small",items:u,onTabClick:function(c){return e.selectTab(c)},activeKey:e.selectedTab})},on=(0,se.Pi)(sn),an=function(){(0,j.useEffect)(function(){console.log("init about effect"),De("about",function(){console.log("about message: ",!0),i(!0)})},[]);var t=(0,j.useState)(!1),n=M()(t,2),e=n[0],i=n[1],s=function(){i(!1)};return(0,r.jsxs)(Pe.Z,{title:"About UpRpc",open:e,onCancel:s,footer:null,children:[(0,r.jsx)("p",{children:"Icon"}),(0,r.jsx)("p",{children:"UpRpc"}),(0,r.jsx)("p",{children:"Version 1.0.0"}),(0,r.jsx)("p",{children:"Copyright (c) 2022 UpUpc. All rights reserved."})]})};function ln(){return(0,r.jsx)(ee.Provider,{value:{includeDirStore:ze,tabStore:Te,protoStore:Ae},children:(0,r.jsxs)(Ye.ZP,{children:[(0,r.jsxs)(de.oL,{defaultSizes:[75,220],children:[(0,r.jsx)(de.oL.Pane,{minSize:320,maxSize:600,children:(0,r.jsx)(Wt,{})}),(0,r.jsx)(on,{})]}),(0,r.jsx)(an,{})]})})}}}]);
