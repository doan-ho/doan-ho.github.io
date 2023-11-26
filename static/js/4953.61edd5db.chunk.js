"use strict";(self.webpackChunkarcgis_web=self.webpackChunkarcgis_web||[]).push([[4953],{46798:(e,t,n)=>{n.d(t,{q:()=>c});var r=n(63780),i=n(42537),s=n(32718),o=n(66978),a=n(70431);class c{constructor(e,t,n,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};this._mainMethod=t,this._transferLists=n,this._listeners=[],this._promise=(0,a.bA)(e,{...i,schedule:r}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,i.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()})),this._promise.catch((t=>s.Z.getLogger("esri.core.workers.WorkerHandle").error("Failed to initialize ".concat(e," worker: ").concat(t))))}on(e,t){const n={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(n),this._connectListener(n),(0,i.kB)((()=>{n.removed=!0,(0,r.Od)(this._listeners,n),this._thread&&null!=n.threadHandle&&n.threadHandle.remove()}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null,this._listeners.length=0,this._transferLists={}}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,n){if(this._thread){const r=this._transferLists[e],i=r?r(t):[];return this._thread.invoke(e,t,{transferList:i,signal:n})}return this._promise?this._promise.then((()=>((0,o.k_)(n),this.invokeMethod(e,t,n)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t)}))}}},35888:(e,t,n)=>{n.d(t,{d:()=>s});var r=n(16889),i=n(39406);function s(e,t,n){var s;const d=Array.isArray(e),u=d?e.length/t:e.byteLength/(4*t),h=d?e:new Uint32Array(e,0,u*t),f=null!==(s=null===n||void 0===n?void 0:n.minReduction)&&void 0!==s?s:0,g=(null===n||void 0===n?void 0:n.originalIndices)||null,p=g?g.length:0,_=(null===n||void 0===n?void 0:n.componentOffsets)||null;let y=0;if(_)for(let r=0;r<_.length-1;r++){const e=_[r+1]-_[r];e>y&&(y=e)}else y=u;const v=Math.floor(1.1*y)+1;(null==l||l.length<2*v)&&(l=new Uint32Array((0,r.Sf)(2*v)));for(let r=0;r<2*v;r++)l[r]=0;let w=0;const m=!!_&&!!g,S=m?p:u;let I=(0,i.$z)(u);const T=new Uint32Array(p),A=1.96;let b=0!==f?Math.ceil(4*A*A/(f*f)*f*(1-f)):S,O=1,N=_?_[1]:S;for(let r=0;r<S;r++){if(r===b){const e=1-w/r;if(e+A*Math.sqrt(e*(1-e)/r)<f)return null;b*=2}if(r===N){for(let e=0;e<2*v;e++)l[e]=0;if(g)for(let e=_[O-1];e<_[O];e++)T[e]=I[g[e]];N=_[++O]}const e=m?g[r]:r,n=e*t,i=c(h,n,t);let s=i%v,a=w;for(;0!==l[2*s+1];){if(l[2*s]===i){const e=l[2*s+1]-1;if(o(h,n,e*t,t)){a=I[e];break}}s++,s>=v&&(s-=v)}a===w&&(l[2*s]=i,l[2*s+1]=e+1,w++),I[e]=a}if(0!==f&&1-w/u<f)return null;if(m){for(let e=_[O-1];e<T.length;e++)T[e]=I[g[e]];I=(0,i.mi)(T)}const L=d?new Array(w):new Uint32Array(w*t);w=0;for(let r=0;r<S;r++)I[r]===w&&(a(h,(m?g[r]:r)*t,L,w*t,t),w++);if(g&&!m){const e=new Uint32Array(p);for(let t=0;t<e.length;t++)e[t]=I[g[t]];I=(0,i.mi)(e)}return{buffer:Array.isArray(L)?L:L.buffer,indices:I,uniqueCount:w}}function o(e,t,n,r){for(let i=0;i<r;i++)if(e[t+i]!==e[n+i])return!1;return!0}function a(e,t,n,r,i){for(let s=0;s<i;s++)n[r+s]=e[t+s]}function c(e,t,n){let r=0;for(let i=0;i<n;i++)r=e[t+i]+r|0,r=r+(r<<11)+(r>>>2)|0;return r>>>0}let l=null},22526:(e,t,n)=>{n.d(t,{H:()=>i,a:()=>s});var r=n(55158);function i(e,t){return t.push(e.buffer),{buffer:e.buffer,layout:new r.Gw(e.layout)}}function s(e){return new r.pV(e.layout).createView(e.buffer)}},67009:(e,t,n)=>{n.d(t,{Hr:()=>l,dG:()=>c,tf:()=>o});var r=n(50256),i=n(55158),s=n(4760);const o=(0,i.U$)().vec3f(s.T.POSITION).u16(s.T.COMPONENTINDEX),a=(0,i.U$)().vec2u8(s.T.SIDENESS),c=((0,r.K)(a),(0,i.U$)().vec3f(s.T.POSITION0).vec3f(s.T.POSITION1).vec3f(s.T.NORMAL).u16(s.T.COMPONENTINDEX).u8(s.T.VARIANTOFFSET,{glNormalized:!0}).u8(s.T.VARIANTSTROKE).u8(s.T.VARIANTEXTENSION,{glNormalized:!0})),l=(0,i.U$)().vec3f(s.T.POSITION0).vec3f(s.T.POSITION1).vec3f(s.T.NORMALA).vec3f(s.T.NORMALB).u16(s.T.COMPONENTINDEX).u8(s.T.VARIANTOFFSET,{glNormalized:!0}).u8(s.T.VARIANTSTROKE).u8(s.T.VARIANTEXTENSION,{glNormalized:!0});new Map([[s.T.POSITION0,0],[s.T.POSITION1,1],[s.T.COMPONENTINDEX,2],[s.T.VARIANTOFFSET,3],[s.T.VARIANTSTROKE,4],[s.T.VARIANTEXTENSION,5],[s.T.NORMAL,6],[s.T.NORMALA,6],[s.T.NORMALB,7],[s.T.SIDENESS,8]])},10662:(e,t,n)=>{n.d(t,{n:()=>d});var r=n(63780),i=n(16889),s=n(11186),o=n(71353);const a=-1;var c,l;function d(e,t,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:y;const c=e.vertices.position,l=e.vertices.componentIndex,d=(0,i.Vl)(o.anglePlanar),_=(0,i.Vl)(o.angleSignificantEdge),v=Math.cos(_),w=Math.cos(d),m=p.edge,S=m.position0,I=m.position1,T=m.faceNormal0,A=m.faceNormal1,b=g(e),O=function(e){const t=e.faces.length/3,n=e.faces,r=e.neighbors;let i=0;for(let c=0;c<t;c++){const e=r[3*c],t=r[3*c+1],s=r[3*c+2],o=n[3*c],l=n[3*c+1],d=n[3*c+2];i+=e===a||o<l?1:0,i+=t===a||l<d?1:0,i+=s===a||d<o?1:0}const s=new Int32Array(4*i);let o=0;for(let c=0;c<t;c++){const e=r[3*c],t=r[3*c+1],i=r[3*c+2],l=n[3*c],d=n[3*c+1],u=n[3*c+2];(e===a||l<d)&&(s[o++]=l,s[o++]=d,s[o++]=c,s[o++]=e),(t===a||d<u)&&(s[o++]=d,s[o++]=u,s[o++]=c,s[o++]=t),(i===a||u<l)&&(s[o++]=u,s[o++]=l,s[o++]=c,s[o++]=i)}return s}(e),N=O.length/4,L=t.allocate(N);let k=0;const E=N,C=n.allocate(E);let H=0,V=0,M=0;const P=(0,r.wR)(0,N),R=new Float32Array(N);R.forEach(((e,t,n)=>{c.getVec(O[4*t],S),c.getVec(O[4*t+1],I),n[t]=(0,s.o)(S,I)})),P.sort(((e,t)=>R[t]-R[e]));const x=new Array,D=new Array;for(let r=0;r<N;r++){const e=P[r],i=R[e],o=O[4*e],g=O[4*e+1],p=O[4*e+2],_=O[4*e+3],y=_===a;if(c.getVec(o,S),c.getVec(g,I),y)(0,s.s)(T,b[3*p],b[3*p+1],b[3*p+2]),(0,s.c)(A,T),m.componentIndex=l.get(o),m.cosAngle=(0,s.j)(T,A);else{if((0,s.s)(T,b[3*p],b[3*p+1],b[3*p+2]),(0,s.s)(A,b[3*_],b[3*_+1],b[3*_+2]),m.componentIndex=l.get(o),m.cosAngle=(0,s.j)(T,A),h(m,w))continue;m.cosAngle<-.9999&&(0,s.c)(A,T)}V+=i,M++,y||u(m,v)?(t.write(L,k++,m),x.push(i)):f(m,d)&&(n.write(C,H++,m),D.push(i))}const F=new Float32Array(x.reverse()),U=new Float32Array(D.reverse());return{regular:{instancesData:t.trim(L,k),lodInfo:{lengths:F}},silhouette:{instancesData:n.trim(C,H),lodInfo:{lengths:U}},averageEdgeLength:V/M}}function u(e,t){return e.cosAngle<t}function h(e,t){return e.cosAngle>t}function f(e,t){const n=(0,i.ZF)(e.cosAngle),r=p.fwd,o=p.ortho;return(0,s.C)(r,e.position1,e.position0),n*((0,s.j)((0,s.b)(o,e.faceNormal0,e.faceNormal1),r)>0?-1:1)>t}function g(e){const t=e.faces.length/3,n=e.vertices.position,r=e.faces,i=_.v0,o=_.v1,a=_.v2,c=new Float32Array(3*t);for(let l=0;l<t;l++){const e=r[3*l],t=r[3*l+1],d=r[3*l+2];n.getVec(e,i),n.getVec(t,o),n.getVec(d,a),(0,s.f)(o,o,i),(0,s.f)(a,a,i),(0,s.b)(i,o,a),(0,s.n)(i,i),c[3*l]=i[0],c[3*l+1]=i[1],c[3*l+2]=i[2]}return c}(l=c||(c={}))[l.SOLID=0]="SOLID",l[l.SKETCH=1]="SKETCH";const p={edge:{position0:(0,o.c)(),position1:(0,o.c)(),faceNormal0:(0,o.c)(),faceNormal1:(0,o.c)(),componentIndex:0,cosAngle:0},ortho:(0,o.c)(),fwd:(0,o.c)()},_={v0:(0,o.c)(),v1:(0,o.c)(),v2:(0,o.c)()},y={anglePlanar:4,angleSignificantEdge:35}},83715:(e,t,n)=>{n.d(t,{Kl:()=>b,n_:()=>C,kY:()=>O,Yr:()=>E});var r=n(35888);function i(e,t,n){const r=t/3,i=new Uint32Array(n+1),s=new Uint32Array(n+1),o=(e,t)=>{e<t?i[e+1]++:s[t+1]++};for(let y=0;y<r;y++){const t=e[3*y],n=e[3*y+1],r=e[3*y+2];o(t,n),o(n,r),o(r,t)}let a=0,c=0;for(let y=0;y<n;y++){const e=i[y+1],t=s[y+1];i[y+1]=a,s[y+1]=c,a+=e,c+=t}const l=new Uint32Array(6*r),d=i[n],u=(e,t,n)=>{if(e<t){const r=i[e+1]++;l[2*r]=t,l[2*r+1]=n}else{const r=s[t+1]++;l[2*d+2*r]=e,l[2*d+2*r+1]=n}};for(let y=0;y<r;y++){const t=e[3*y],n=e[3*y+1],r=e[3*y+2];u(t,n,y),u(n,r,y),u(r,t,y)}const h=(e,t)=>{const n=2*e,r=t-e;for(let i=1;i<r;i++){const e=l[n+2*i],t=l[n+2*i+1];let r=i-1;for(;r>=0&&l[n+2*r]>e;r--)l[n+2*r+2]=l[n+2*r],l[n+2*r+3]=l[n+2*r+1];l[n+2*r+2]=e,l[n+2*r+3]=t}};for(let y=0;y<n;y++)h(i[y],i[y+1]),h(d+s[y],d+s[y+1]);const f=new Int32Array(3*r),g=(t,n)=>t===e[3*n]?0:t===e[3*n+1]?1:t===e[3*n+2]?2:-1,p=(e,t)=>{const n=g(e,t);f[3*t+n]=-1},_=(e,t,n,r)=>{const i=g(e,t);f[3*t+i]=r;const s=g(n,r);f[3*r+s]=t};for(let y=0;y<n;y++){let e=i[y];const t=i[y+1];let n=s[y];const r=s[y+1];for(;e<t&&n<r;){const t=l[2*e],r=l[2*d+2*n];t===r?(_(y,l[2*e+1],r,l[2*d+2*n+1]),e++,n++):t<r?(p(y,l[2*e+1]),e++):(p(r,l[2*d+2*n+1]),n++)}for(;e<t;)p(y,l[2*e+1]),e++;for(;n<r;)p(l[2*d+2*n],l[2*d+2*n+1]),n++}return f}var s=n(55158),o=n(4760),a=n(67009),c=n(84936),l=n(11186),d=n(71353),u=n(50256);class h{updateSettings(e){this.settings=e,this._edgeHashFunction=e.reducedPrecision?y:_}write(e,t,n){const r=this._edgeHashFunction(n);T.seed=r;const i=T.getIntRange(0,255),s=T.getIntRange(0,this.settings.variants-1),o=T.getFloat(),a=255*(.5*function(e,t){const n=e<0?-1:1;return Math.abs(e)**t*n}(-(1-Math.min(o/.7,1))+Math.max(0,o-.7)/(1-.7),1.2)+.5);e.position0.setVec(t,n.position0),e.position1.setVec(t,n.position1),e.componentIndex.set(t,n.componentIndex),e.variantOffset.set(t,i),e.variantStroke.set(t,s),e.variantExtension.set(t,a)}trim(e,t){return e.slice(0,t)}}const f=new Float32Array(6),g=new Uint32Array(f.buffer),p=new Uint32Array(1);function _(e){const t=f;t[0]=e.position0[0],t[1]=e.position0[1],t[2]=e.position0[2],t[3]=e.position1[0],t[4]=e.position1[1],t[5]=e.position1[2],p[0]=5381;for(let n=0;n<g.length;n++)p[0]=31*p[0]+g[n];return p[0]}function y(e){const t=f;t[0]=w(e.position0[0]),t[1]=w(e.position0[1]),t[2]=w(e.position0[2]),t[3]=w(e.position1[0]),t[4]=w(e.position1[1]),t[5]=w(e.position1[2]),p[0]=5381;for(let n=0;n<g.length;n++)p[0]=31*p[0]+g[n];return p[0]}const v=1e4;function w(e){return Math.round(e*v)/v}class m{constructor(){this._commonWriter=new h}updateSettings(e){this._commonWriter.updateSettings(e)}allocate(e){return a.dG.createBuffer(e)}write(e,t,n){this._commonWriter.write(e,t,n),(0,l.g)(I,n.faceNormal0,n.faceNormal1),(0,l.n)(I,I),e.normal.setVec(t,I)}trim(e,t){return this._commonWriter.trim(e,t)}}m.Layout=a.dG,m.glLayout=(0,u.K)(a.dG,1);class S{constructor(){this._commonWriter=new h}updateSettings(e){this._commonWriter.updateSettings(e)}allocate(e){return a.Hr.createBuffer(e)}write(e,t,n){this._commonWriter.write(e,t,n),e.normalA.setVec(t,n.faceNormal0),e.normalB.setVec(t,n.faceNormal1)}trim(e,t){return this._commonWriter.trim(e,t)}}S.Layout=a.Hr,S.glLayout=(0,u.K)(a.Hr,1);const I=(0,d.c)(),T=new c.Z;var A=n(10662);function b(e){const t=O(e.data,e.skipDeduplicate,e.indices,e.indicesLength);return L.updateSettings(e.writerSettings),k.updateSettings(e.writerSettings),(0,A.n)(t,L,k)}function O(e,t,n,s){if(t){const t=i(n,s,e.count);return new N(n,s,t,e)}const o=(0,r.d)(e.buffer,e.stride/4,{originalIndices:n,originalIndicesLength:s}),c=i(o.indices,s,o.uniqueCount);return{faces:o.indices,facesLength:o.indices.length,neighbors:c,vertices:a.tf.createView(o.buffer)}}class N{constructor(e,t,n,r){this.faces=e,this.facesLength=t,this.neighbors=n,this.vertices=r}}const L=new m,k=new S,E=(0,s.U$)().vec3f(o.T.POSITION0).vec3f(o.T.POSITION1),C=(0,s.U$)().vec3f(o.T.POSITION0).vec3f(o.T.POSITION1).u16(o.T.COMPONENTINDEX)},36700:(e,t,n)=>{n.d(t,{x:()=>o});var r=n(44179),i=n(75691),s=n(61309);class o extends i.a{constructor(e){super({...e,constraint:new r.Hk(e.targetPoint)})}get hints(){return[new s.n(this.targetPoint,this.isDraped,this.domain)]}}},34953:(e,t,n)=>{n.r(t),n.d(t,{SceneLayerSnappingSource:()=>L});var r=n(27366),i=n(7138),s=n(63780),o=n(66978),a=n(49861),c=(n(25243),n(93169),n(69912)),l=n(42537),d=n(92026),u=n(46634),h=n(18722),f=n(46798),g=n(22526),p=n(83715);class _ extends f.q{constructor(e){super("EdgeProcessingWorker","extract",{extract:e=>[e.dataBuffer],extractComponentsEdgeLocations:e=>[e.dataBuffer],extractEdgeLocations:e=>[e.dataBuffer]},e)}async process(e,t,n){if(n)return(0,p.Kl)(e);const r=await this.invoke(new y(e),t);return this._unpackOutput(r)}async extractEdgeLocations(e,t){const n=await this.invokeMethod("extractEdgeLocations",new y(e),t);return(0,g.a)(n)}async extractComponentsEdgeLocations(e,t){const n=await this.invokeMethod("extractComponentsEdgeLocations",new y(e),t);return(0,g.a)(n)}_unpackOutput(e){return{regular:{instancesData:(0,g.a)(e.regular.instancesData),lodInfo:{lengths:new Float32Array(e.regular.lodInfo.lengths)}},silhouette:{instancesData:(0,g.a)(e.silhouette.instancesData),lodInfo:{lengths:new Float32Array(e.silhouette.lodInfo.lengths)}},averageEdgeLength:e.averageEdgeLength}}}class y{constructor(e){this.dataBuffer=e.data.buffer,this.writerSettings=e.writerSettings,this.skipDeduplicate=e.skipDeduplicate,this.indices=(0,h.kJ)(e.indices)?e.indices:e.indices.buffer,this.indicesType=(0,h.kJ)(e.indices)?"Array":(0,h.ZY)(e.indices)?"Uint32Array":"Uint16Array",this.indicesLength=e.indicesLength}}var v=n(71353),w=n(23470),m=n(38054),S=n(95905),I=n(36700);let T=class extends i.Z{constructor(e){super(e),this.availability=0,this._ids=new Set}destroy(){this._workerHandle.destroy(),this._workerHandle=null}initialize(){this._workerHandle=new A(this.schedule,{fetchAllEdgeLocations:(e,t)=>this._fetchAllEdgeLocations(e,t)})}async fetchCandidates(e,t){const n=e.coordinateHelper,{point:r}=e,i=b;this.renderCoordsHelper.toRenderCoords(r,n.spatialReference,i);const s=e.distance,o="number"==typeof s?s:s.distance,a=await this._workerHandle.invoke({bounds:(0,w.f)(i[0],i[1],i[2],o),returnEdge:e.returnEdge,returnVertex:"none"!==e.vertexMode},t);return a.candidates.sort(((e,t)=>e.distance-t.distance)),a.candidates.map((e=>this._convertCandidate(n,e)))}async add(e,t){this._ids.add(e.id),await this._workerHandle.invokeMethod("add",e,t)}async remove(e,t){this._ids.delete(e.id),await this._workerHandle.invokeMethod("remove",e,t)}_convertCandidate(e,t){switch(t.type){case"edge":return new S.L({objectId:t.objectId,targetPoint:this._convertRenderCoordinate(e,t.target),edgeStart:this._convertRenderCoordinate(e,t.start),edgeEnd:this._convertRenderCoordinate(e,t.end),isDraped:!1});case"vertex":return new I.x({objectId:t.objectId,targetPoint:this._convertRenderCoordinate(e,t.target),isDraped:!1})}}_convertRenderCoordinate(e,t){let{spatialReference:n}=e;const r=(0,v.c)();return this.renderCoordsHelper.fromRenderCoords(t,r,n),(0,m.uo)(r)}async _fetchAllEdgeLocations(e,t){const n=[],r=[];for(const{id:i,uid:s}of e.components)this._ids.has(i)&&n.push((async()=>{const e=await this.fetchEdgeLocations(i,t.signal),n=e.locations.buffer;return r.push(n),{id:i,uid:s,objectIds:e.objectIds,locations:n,origin:e.origin,type:e.type}})());return{result:{components:(await Promise.all(n)).filter((e=>{let{id:t}=e;return this._ids.has(t)}))},transferList:r}}};(0,r._)([(0,a.Cb)({constructOnly:!0})],T.prototype,"renderCoordsHelper",void 0),(0,r._)([(0,a.Cb)({constructOnly:!0})],T.prototype,"fetchEdgeLocations",void 0),(0,r._)([(0,a.Cb)({constructOnly:!0})],T.prototype,"schedule",void 0),(0,r._)([(0,a.Cb)({readOnly:!0})],T.prototype,"availability",void 0),T=(0,r._)([(0,c.j)("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],T);class A extends f.q{constructor(e,t){super("SceneLayerSnappingSourceWorker","fetchCandidates",{},e,{strategy:"dedicated",client:t})}}const b=(0,v.c)();let O=class extends i.Z{get updating(){return this._updatingHandles.updating}constructor(e){super(e),this.availability=1,this._updatingHandles=new u.R,this._abortController=new AbortController}destroy(){this._tracker=(0,d.hw)(this._tracker),this._abortController=(0,d.IM)(this._abortController),this._updatingHandles.destroy()}initialize(){const{view:e}=this,t=e.resourceController;this._edgeWorker=new _(N(t)),this._workerHandle=new T({renderCoordsHelper:this.view.renderCoordsHelper,schedule:N(t),fetchEdgeLocations:async(e,t)=>{if(null==this._tracker)throw new Error("tracker-not-initialized");return this._tracker.fetchEdgeLocations(e,this._edgeWorker,t)}}),this._updatingHandles.addPromise(this._setupLayerView()),this.addHandles([(0,l.ed)(this._workerHandle),(0,l.ed)(this._edgeWorker)])}async fetchCandidates(e,t){return this._workerHandle.fetchCandidates(e,t)}refresh(){}async _setupLayerView(){var e;if(this.destroyed)return;const t=null===(e=this._abortController)||void 0===e?void 0:e.signal,n=await this.getLayerView();null==n||(0,o.Hc)(t)||(this._tracker=n.trackSnappingSources({add:(e,n)=>{this._updatingHandles.addPromise(this._workerHandle.add({id:e,bounds:n},t))},remove:e=>{this._updatingHandles.addPromise(this._workerHandle.remove({id:e},t))}}))}};function N(e){return t=>e.immediate.schedule(t)}(0,r._)([(0,a.Cb)({constructOnly:!0})],O.prototype,"getLayerView",void 0),(0,r._)([(0,a.Cb)({constructOnly:!0})],O.prototype,"view",void 0),(0,r._)([(0,a.Cb)({readOnly:!0})],O.prototype,"updating",null),(0,r._)([(0,a.Cb)({readOnly:!0})],O.prototype,"availability",void 0),O=(0,r._)([(0,c.j)("esri.views.interactive.snapping.featureSources.I3SSnappingSource")],O);let L=class extends i.Z{get updating(){return this._i3sSources.some((e=>e.updating))}constructor(e){super(e),this.availability=1,this._i3sSources=[]}destroy(){this._i3sSources.forEach((e=>e.destroy())),this._i3sSources.length=0}initialize(){const{view:e}=this,t=this.layerSource.layer;this._i3sSources="building-scene"===t.type?this._getBuildingSceneI3SSources(e,t):[this._getSceneLayerI3SSource(e,t)]}async fetchCandidates(e,t){const n=await Promise.all(this._i3sSources.map((n=>n.fetchCandidates(e,t))));return(0,o.k_)(t),n.flat()}refresh(){this._i3sSources.forEach((e=>e.refresh()))}_getBuildingSceneI3SSources(e,t){return t.allSublayers.toArray().map((n=>"building-component"===n.type?new O({getLayerView:async()=>(await e.whenLayerView(t)).whenSublayerView(n),view:e}):null)).filter(s.pC)}_getSceneLayerI3SSource(e,t){return new O({getLayerView:async()=>{const n=await e.whenLayerView(t);return"scene-layer-graphics-3d"===n.type?void 0:n},view:e})}};(0,r._)([(0,a.Cb)({constructOnly:!0})],L.prototype,"layerSource",void 0),(0,r._)([(0,a.Cb)({constructOnly:!0})],L.prototype,"view",void 0),(0,r._)([(0,a.Cb)({readOnly:!0})],L.prototype,"updating",null),(0,r._)([(0,a.Cb)({readOnly:!0})],L.prototype,"availability",void 0),L=(0,r._)([(0,c.j)("esri.views.interactive.snapping.featureSources.SceneLayerSnappingSource")],L)}}]);
//# sourceMappingURL=4953.61edd5db.chunk.js.map