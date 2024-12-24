import{D as _,Fb as se,J as Y,Ka as B,Lb as oe,M as Z,O as N,P as Q,R as f,T as m,Tb as ie,U as g,_ as H,ba as ee,da as ne,ea as te,f as q,l as G,m as U,q as R,sa as re,x as K,z as S}from"./chunk-HPGGOOXO.js";var O=class{},x=class{},w=class e{constructor(n){this.normalizedNames=new Map,this.lazyUpdate=null,n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(t=>{let r=t.indexOf(":");if(r>0){let s=t.slice(0,r),i=s.toLowerCase(),o=t.slice(r+1).trim();this.maybeSetNormalizedName(s,i),this.headers.has(i)?this.headers.get(i).push(o):this.headers.set(i,[o])}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((t,r)=>{this.setHeaderEntries(r,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([t,r])=>{this.setHeaderEntries(t,r)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let t=this.headers.get(n.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,t){return this.clone({name:n,value:t,op:"a"})}set(n,t){return this.clone({name:n,value:t,op:"s"})}delete(n,t){return this.clone({name:n,value:t,op:"d"})}maybeSetNormalizedName(n,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,n)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(t=>{this.headers.set(t,n.headers.get(t)),this.normalizedNames.set(t,n.normalizedNames.get(t))})}clone(n){let t=new e;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([n]),t}applyUpdate(n){let t=n.name.toLowerCase();switch(n.op){case"a":case"s":let r=n.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(n.name,t);let s=(n.op==="a"?this.headers.get(t):void 0)||[];s.push(...r),this.headers.set(t,s);break;case"d":let i=n.value;if(!i)this.headers.delete(t),this.normalizedNames.delete(t);else{let o=this.headers.get(t);if(!o)return;o=o.filter(d=>i.indexOf(d)===-1),o.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,o)}break}}setHeaderEntries(n,t){let r=(Array.isArray(t)?t:[t]).map(i=>i.toString()),s=n.toLowerCase();this.headers.set(s,r),this.maybeSetNormalizedName(n,s)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>n(this.normalizedNames.get(t),this.headers.get(t)))}};var X=class{encodeKey(n){return ae(n)}encodeValue(n){return ae(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function ve(e,n){let t=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(s=>{let i=s.indexOf("="),[o,d]=i==-1?[n.decodeKey(s),""]:[n.decodeKey(s.slice(0,i)),n.decodeValue(s.slice(i+1))],a=t.get(o)||[];a.push(d),t.set(o,a)}),t}var be=/%(\d[a-f0-9])/gi,Pe={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function ae(e){return encodeURIComponent(e).replace(be,(n,t)=>Pe[t]??n)}function I(e){return`${e}`}var T=class e{constructor(n={}){if(this.updates=null,this.cloneFrom=null,this.encoder=n.encoder||new X,n.fromString){if(n.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=ve(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(t=>{let r=n.fromObject[t],s=Array.isArray(r)?r.map(I):[I(r)];this.map.set(t,s)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let t=this.map.get(n);return t?t[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,t){return this.clone({param:n,value:t,op:"a"})}appendAll(n){let t=[];return Object.keys(n).forEach(r=>{let s=n[r];Array.isArray(s)?s.forEach(i=>{t.push({param:r,value:i,op:"a"})}):t.push({param:r,value:s,op:"a"})}),this.clone(t)}set(n,t){return this.clone({param:n,value:t,op:"s"})}delete(n,t){return this.clone({param:n,value:t,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let t=this.encoder.encodeKey(n);return this.map.get(n).map(r=>t+"="+this.encoder.encodeValue(r)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let t=new e({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(n),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let t=(n.op==="a"?this.map.get(n.param):void 0)||[];t.push(I(n.value)),this.map.set(n.param,t);break;case"d":if(n.value!==void 0){let r=this.map.get(n.param)||[],s=r.indexOf(I(n.value));s!==-1&&r.splice(s,1),r.length>0?this.map.set(n.param,r):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};var J=class{constructor(){this.map=new Map}set(n,t){return this.map.set(n,t),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}};function Re(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function ce(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function le(e){return typeof Blob<"u"&&e instanceof Blob}function de(e){return typeof FormData<"u"&&e instanceof FormData}function Ne(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var A=class e{constructor(n,t,r,s){this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=n.toUpperCase();let i;if(Re(this.method)||s?(this.body=r!==void 0?r:null,i=s):i=r,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),this.transferCache=i.transferCache),this.headers??=new w,this.context??=new J,!this.params)this.params=new T,this.urlWithParams=t;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=t;else{let d=t.indexOf("?"),a=d===-1?"?":d<t.length-1?"&":"";this.urlWithParams=t+a+o}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||ce(this.body)||le(this.body)||de(this.body)||Ne(this.body)?this.body:this.body instanceof T?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||de(this.body)?null:le(this.body)?this.body.type||null:ce(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof T?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(n={}){let t=n.method||this.method,r=n.url||this.url,s=n.responseType||this.responseType,i=n.transferCache??this.transferCache,o=n.body!==void 0?n.body:this.body,d=n.withCredentials??this.withCredentials,a=n.reportProgress??this.reportProgress,u=n.headers||this.headers,E=n.params||this.params,p=n.context??this.context;return n.setHeaders!==void 0&&(u=Object.keys(n.setHeaders).reduce((v,y)=>v.set(y,n.setHeaders[y]),u)),n.setParams&&(E=Object.keys(n.setParams).reduce((v,y)=>v.set(y,n.setParams[y]),E)),new e(t,r,o,{params:E,headers:u,context:p,reportProgress:a,responseType:s,withCredentials:d,transferCache:i})}},P=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}(P||{}),M=class{constructor(n,t=F.Ok,r="OK"){this.headers=n.headers||new w,this.status=n.status!==void 0?n.status:t,this.statusText=n.statusText||r,this.url=n.url||null,this.ok=this.status>=200&&this.status<300}},V=class e extends M{constructor(n={}){super(n),this.type=P.ResponseHeader}clone(n={}){return new e({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},D=class e extends M{constructor(n={}){super(n),this.type=P.Response,this.body=n.body!==void 0?n.body:null}clone(n={}){return new e({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},k=class extends M{constructor(n){super(n,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},F=function(e){return e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableEntity=422]="UnprocessableEntity",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",e}(F||{});function z(e,n){return{body:n,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,transferCache:e.transferCache}}var Ae=(()=>{class e{constructor(t){this.handler=t}request(t,r,s={}){let i;if(t instanceof A)i=t;else{let a;s.headers instanceof w?a=s.headers:a=new w(s.headers);let u;s.params&&(s.params instanceof T?u=s.params:u=new T({fromObject:s.params})),i=new A(t,r,s.body!==void 0?s.body:null,{headers:a,context:s.context,params:u,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials,transferCache:s.transferCache})}let o=U(i).pipe(S(a=>this.handler.handle(a)));if(t instanceof A||s.observe==="events")return o;let d=o.pipe(K(a=>a instanceof D));switch(s.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return d.pipe(R(a=>{if(a.body!==null&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return d.pipe(R(a=>{if(a.body!==null&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return d.pipe(R(a=>{if(a.body!==null&&typeof a.body!="string")throw new Error("Response is not a string.");return a.body}));case"json":default:return d.pipe(R(a=>a.body))}case"response":return d;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(t,r={}){return this.request("DELETE",t,r)}get(t,r={}){return this.request("GET",t,r)}head(t,r={}){return this.request("HEAD",t,r)}jsonp(t,r){return this.request("JSONP",t,{params:new T().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,r={}){return this.request("OPTIONS",t,r)}patch(t,r,s={}){return this.request("PATCH",t,z(s,r))}post(t,r,s={}){return this.request("POST",t,z(s,r))}put(t,r,s={}){return this.request("PUT",t,z(s,r))}static{this.\u0275fac=function(r){return new(r||e)(m(O))}}static{this.\u0275prov=N({token:e,factory:e.\u0275fac})}}return e})();function pe(e,n){return n(e)}function Oe(e,n){return(t,r)=>n.intercept(t,{handle:s=>e(s,r)})}function Me(e,n,t){return(r,s)=>te(t,()=>n(r,i=>e(i,s)))}var Ie=new f(""),$=new f(""),xe=new f(""),De=new f("");function ke(){let e=null;return(n,t)=>{e===null&&(e=(g(Ie,{optional:!0})??[]).reduceRight(Oe,pe));let r=g(B),s=r.add();return e(n,t).pipe(_(()=>r.remove(s)))}}var he=(()=>{class e extends O{constructor(t,r){super(),this.backend=t,this.injector=r,this.chain=null,this.pendingTasks=g(B);let s=g(De,{optional:!0});this.backend=s??t}handle(t){if(this.chain===null){let s=Array.from(new Set([...this.injector.get($),...this.injector.get(xe,[])]));this.chain=s.reduceRight((i,o)=>Me(i,o,this.injector),pe)}let r=this.pendingTasks.add();return this.chain(t,s=>this.backend.handle(s)).pipe(_(()=>this.pendingTasks.remove(r)))}static{this.\u0275fac=function(r){return new(r||e)(m(x),m(ne))}}static{this.\u0275prov=N({token:e,factory:e.\u0275fac})}}return e})();var Fe=/^\)\]\}',?\n/;function je(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}var ue=(()=>{class e{constructor(t){this.xhrFactory=t}handle(t){if(t.method==="JSONP")throw new Z(-2800,!1);let r=this.xhrFactory;return(r.\u0275loadImpl?G(r.\u0275loadImpl()):U(null)).pipe(Y(()=>new q(i=>{let o=r.build();if(o.open(t.method,t.urlWithParams),t.withCredentials&&(o.withCredentials=!0),t.headers.forEach((c,l)=>o.setRequestHeader(c,l.join(","))),t.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){let c=t.detectContentTypeHeader();c!==null&&o.setRequestHeader("Content-Type",c)}if(t.responseType){let c=t.responseType.toLowerCase();o.responseType=c!=="json"?c:"text"}let d=t.serializeBody(),a=null,u=()=>{if(a!==null)return a;let c=o.statusText||"OK",l=new w(o.getAllResponseHeaders()),b=je(o)||t.url;return a=new V({headers:l,status:o.status,statusText:c,url:b}),a},E=()=>{let{headers:c,status:l,statusText:b,url:W}=u(),h=null;l!==F.NoContent&&(h=typeof o.response>"u"?o.responseText:o.response),l===0&&(l=h?F.Ok:0);let L=l>=200&&l<300;if(t.responseType==="json"&&typeof h=="string"){let we=h;h=h.replace(Fe,"");try{h=h!==""?JSON.parse(h):null}catch(Ee){h=we,L&&(L=!1,h={error:Ee,text:h})}}L?(i.next(new D({body:h,headers:c,status:l,statusText:b,url:W||void 0})),i.complete()):i.error(new k({error:h,headers:c,status:l,statusText:b,url:W||void 0}))},p=c=>{let{url:l}=u(),b=new k({error:c,status:o.status||0,statusText:o.statusText||"Unknown Error",url:l||void 0});i.error(b)},v=!1,y=c=>{v||(i.next(u()),v=!0);let l={type:P.DownloadProgress,loaded:c.loaded};c.lengthComputable&&(l.total=c.total),t.responseType==="text"&&o.responseText&&(l.partialText=o.responseText),i.next(l)},C=c=>{let l={type:P.UploadProgress,loaded:c.loaded};c.lengthComputable&&(l.total=c.total),i.next(l)};return o.addEventListener("load",E),o.addEventListener("error",p),o.addEventListener("timeout",p),o.addEventListener("abort",p),t.reportProgress&&(o.addEventListener("progress",y),d!==null&&o.upload&&o.upload.addEventListener("progress",C)),o.send(d),i.next({type:P.Sent}),()=>{o.removeEventListener("error",p),o.removeEventListener("abort",p),o.removeEventListener("load",E),o.removeEventListener("timeout",p),t.reportProgress&&(o.removeEventListener("progress",y),d!==null&&o.upload&&o.upload.removeEventListener("progress",C)),o.readyState!==o.DONE&&o.abort()}})))}static{this.\u0275fac=function(r){return new(r||e)(m(ie))}}static{this.\u0275prov=N({token:e,factory:e.\u0275fac})}}return e})(),ye=new f(""),Le="XSRF-TOKEN",Ue=new f("",{providedIn:"root",factory:()=>Le}),_e="X-XSRF-TOKEN",Be=new f("",{providedIn:"root",factory:()=>_e}),j=class{},ze=(()=>{class e{constructor(t,r,s){this.doc=t,this.platform=r,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=oe(t,this.cookieName),this.lastCookieString=t),this.lastToken}static{this.\u0275fac=function(r){return new(r||e)(m(se),m(re),m(Ue))}}static{this.\u0275prov=N({token:e,factory:e.\u0275fac})}}return e})();function Xe(e,n){let t=e.url.toLowerCase();if(!g(ye)||e.method==="GET"||e.method==="HEAD"||t.startsWith("http://")||t.startsWith("https://"))return n(e);let r=g(j).getToken(),s=g(Be);return r!=null&&!e.headers.has(s)&&(e=e.clone({headers:e.headers.set(s,r)})),n(e)}var me=function(e){return e[e.Interceptors=0]="Interceptors",e[e.LegacyInterceptors=1]="LegacyInterceptors",e[e.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",e[e.NoXsrfProtection=3]="NoXsrfProtection",e[e.JsonpSupport=4]="JsonpSupport",e[e.RequestsMadeViaParent=5]="RequestsMadeViaParent",e[e.Fetch=6]="Fetch",e}(me||{});function Je(e,n){return{\u0275kind:e,\u0275providers:n}}function Ve(...e){let n=[Ae,ue,he,{provide:O,useExisting:he},{provide:x,useExisting:ue},{provide:$,useValue:Xe,multi:!0},{provide:ye,useValue:!0},{provide:j,useClass:ze}];for(let t of e)n.push(...t.\u0275providers);return ee(n)}var fe=new f("");function $e(){return Je(me.LegacyInterceptors,[{provide:fe,useFactory:ke},{provide:$,useExisting:fe,multi:!0}])}var yn=(()=>{class e{static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275mod=H({type:e})}static{this.\u0275inj=Q({providers:[Ve($e())]})}}return e})();var ge={production:!0,ROOT_PATH:"http://localhost:3000"};var Te=class{static{this.PATH_RESUME="resume"}static{this.PATH_WORKS="works"}static{this.PATH_ARTICLES="articles"}static{this.PATH_HOME="home"}static{this.ROOT_PATH=ge.ROOT_PATH}};export{Ae as a,Ve as b,yn as c,Te as d};
