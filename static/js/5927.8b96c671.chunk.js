"use strict";(self.webpackChunkarcgis_web=self.webpackChunkarcgis_web||[]).push([[5927],{47615:(e,t,n)=>{n.d(t,{O3:()=>T,lG:()=>P,my:()=>k,q9:()=>c});var o=n(63231),r=n(10064),i=n(92975),a=n(3182),s=n(80457),l=n(37270);const u={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function c(e){return u[e]}function*p(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*d(e){if(e)switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function f(e){for(const t of e)if(t.length>2)return!0;return!1}function y(e){let t=0;for(let n=0;n<e.length;n++){const o=e[n],r=e[(n+1)%e.length];t+=o[0]*r[1]-r[0]*o[1]}return t<=0}function m(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function g(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return v(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){for(const o of t.coordinates)v(e,o,n);return e}(e,t,n);case"MultiPolygon":return function(e,t,n){for(const o of t.coordinates){w(e,o[0],n);for(let t=1;t<o.length;t++)h(e,o[t],n)}return e}(e,t,n);case"Point":return function(e,t,n){return F(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){const o=t.coordinates;w(e,o[0],n);for(let r=1;r<o.length;r++)h(e,o[r],n);return e}(e,t,n)}}function w(e,t,n){const o=m(t);!function(e){return!y(e)}(o)?v(e,o,n):b(e,o,n)}function h(e,t,n){const o=m(t);!function(e){return y(e)}(o)?v(e,o,n):b(e,o,n)}function v(e,t,n){for(const o of t)F(e,o,n);e.lengths.push(t.length)}function b(e,t,n){for(let o=t.length-1;o>=0;o--)F(e,t[o],n);e.lengths.push(t.length)}function F(e,t,n){const[o,r,i]=t;e.coords.push(o,r),n.hasZ&&e.coords.push(i||0)}function S(e){switch(typeof e){case"string":return(0,o.mu)(e)?"esriFieldTypeDate":"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function T(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4326;if(!e)throw new r.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new r.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:n}=e;if(!n)return;const o="string"==typeof n?n:"name"===n.type?n.properties.name:"EPSG"===n.type?n.properties.code:null,a=(0,i.oR)({wkid:t})?new RegExp(".*(CRS84H?|4326)$","i"):new RegExp(".*(".concat(t,")$"),"i");if(!o||!a.test(o))throw new r.Z("geojson:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:n})}function k(e){var t,n;let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=[],i=new Set,a=new Set;let s,u=!1,y=null,m=!1,{geometryType:g=null}=o,w=!1;for(const v of p(e)){const{geometry:e,properties:t,id:n}=v;if((!e||(g||(g=c(e.type)),c(e.type)===g))&&(u||(u=f(d(e))),m||(m=null!=n,m&&(s=typeof n,t&&(y=Object.keys(t).filter((e=>t[e]===n))))),t&&y&&m&&null!=n&&(y.length>1?y=y.filter((e=>t[e]===n)):1===y.length&&(y=t[y[0]]===n?y:[])),!w&&t)){let e=!0;for(const n in t){if(i.has(n))continue;const o=t[n];if(null==o){e=!1,a.add(n);continue}const s=S(o);if("unknown"===s){a.add(n);continue}a.delete(n),i.add(n);const u=(0,l.q6)(n);u&&r.push({name:u,alias:n,type:s})}w=e}}const h=null!==(t=(0,l.q6)(1===(null===(n=y)||void 0===n?void 0:n.length)&&y[0]||null))&&void 0!==t?t:void 0;if(h)for(const c of r)if(c.name===h&&(0,l.H7)(c)){c.type="esriFieldTypeOID";break}return{fields:r,geometryType:g,hasZ:u,objectIdFieldName:h,objectIdFieldType:s,unknownFields:Array.from(a)}}function P(e,t){return Array.from(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function*(){const{geometryType:n,objectIdField:o}=t;for(const i of e){var r;const{geometry:e,properties:l,id:u}=i;if(e&&c(e.type)!==n)continue;const p=l||{};let d;o&&(d=p[o],null==u||d||(p[o]=d=u));const f=new a.u_(e?g(new s.Z,e,t):null,p,null,null!==(r=d)&&void 0!==r?r:void 0);yield f}}()}(p(e),t))}},45927:(e,t,n)=>{n.d(t,{Bm:()=>U,FU:()=>E,be:()=>M,eB:()=>D,fU:()=>X,ft:()=>j,u2:()=>v});n(59486);var o=n(76200),r=n(10064),i=n(83704),a=n(35995),s=n(45925),l=n(92975),u=n(27823),c=n(47615),p=n(39098),d=n(25899),f=n(83040),y=n(37270),m=n(78952),g=n(53866);const w="xlink:href",h="2.0.0",v="__esri_wfs_id__",b="wfs-layer:getWFSLayerTypeInfo-error",F="wfs-layer:empty-service",S="wfs-layer:feature-type-not-found",T="wfs-layer:geojson-not-supported",k="wfs-layer:kvp-encoding-not-supported",P="wfs-layer:malformed-json",x="wfs-layer:unknown-geometry-type",C="wfs-layer:unknown-field-type",R="wfs-layer:unsupported-spatial-reference",Z="wfs-layer:unsupported-wfs-version";async function E(e,t){const n=function(e){const t=q(e);(function(e){var t;const n=null===(t=e.firstElementChild)||void 0===t?void 0:t.getAttribute("version");if(n&&n!==h)throw new r.Z(Z,"Unsupported WFS version ".concat(n,". Supported version: ").concat(h))})(t),W(t);const n=t.firstElementChild,o=(0,i.Fs)(function(e){return(0,p.H)(e,{FeatureTypeList:{FeatureType:e=>{const t={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",defaultSpatialReference:4326,supportedSpatialReferences:[]},n=new Set;return(0,p.h)(e,{Name:e=>{const{name:n,prefix:o}=H(e.textContent);t.typeName="".concat(o,":").concat(n),t.name=n,t.namespacePrefix=o,t.namespaceUri=e.lookupNamespaceURI(o)},Abstract:e=>{t.description=e.textContent},Title:e=>{t.title=e.textContent},WGS84BoundingBox:e=>{t.extent=function(e){let t,n,o,r;for(const i of e.children)switch(i.localName){case"LowerCorner":[t,n]=i.textContent.split(" ").map((e=>Number.parseFloat(e)));break;case"UpperCorner":[o,r]=i.textContent.split(" ").map((e=>Number.parseFloat(e)))}return{xmin:t,ymin:n,xmax:o,ymax:r,spatialReference:l.Zn}}(e)},DefaultCRS:e=>{const o=A(e);o&&(t.defaultSpatialReference=o,n.add(o))},OtherCRS:e=>{const t=A(e);t&&n.add(t)}}),t.title||(t.title=t.name),n.add(4326),t.supportedSpatialReferences.push(...n),t}}})}(n));return{operations:N(n),get featureTypes(){return Array.from(o())},readFeatureTypes:o}}((await(0,o.Z)(e,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:h,...null===t||void 0===t?void 0:t.customParameters},signal:null===t||void 0===t?void 0:t.signal})).data);return function(e,t){(0,a.$U)(e)&&((0,a.D6)(e,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=(0,a.hO)(t.operations.DescribeFeatureType.url)),(0,a.D6)(e,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=(0,a.hO)(t.operations.GetFeature.url)))}(e,n),n}const G=new Set(["json","application/json","geojson","application/json; subtype=geojson"]);function N(e){let t=!1;const n={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}};if((0,p.h)(e,{OperationsMetadata:{Operation:e=>{switch(e.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:e=>{n.GetCapabilities.url=e.getAttribute(w)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:e=>{n.DescribeFeatureType.url=e.getAttribute(w)}}}};case"GetFeature":return{DCP:{HTTP:{Get:e=>{n.GetFeature.url=e.getAttribute(w)}}},Parameter:e=>{if("outputFormat"===e.getAttribute("name"))return{AllowedValues:{Value:e=>{const t=e.textContent;t&&G.has(t.toLowerCase())&&(n.GetFeature.outputFormat=t)}}}}}}},Constraint:e=>{switch(e.getAttribute("name")){case"KVPEncoding":return{DefaultValue:e=>{t="true"===e.textContent.toLowerCase()}};case"ImplementsResultPaging":return{DefaultValue:e=>{n.GetFeature.supportsPagination="true"===e.textContent.toLowerCase()}}}}}}),!t)throw new r.Z(k,"WFS service doesn't support key/value pair (KVP) encoding");if(null==n.GetFeature.outputFormat)throw new r.Z(T,"WFS service doesn't support GeoJSON output format");return n}function A(e){var t,n;const o=parseInt(null!==(t=null===(n=e.textContent)||void 0===n||null===(n=n.match(/(?<wkid>\d+$)/i))||void 0===n||null===(n=n.groups)||void 0===n?void 0:n.wkid)&&void 0!==t?t:"",10);if(!Number.isNaN(o))return o}function j(e,t,n){return(0,i.sE)(e,(e=>n?e.name===t&&e.namespaceUri===n:e.typeName===t||e.name===t))}async function M(e,t,n){var o;let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{featureType:a,extent:u}=await async function(e,t,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const i=e.readFeatureTypes(),a=t?j(i,t,n):i.next().value,{spatialReference:u=new m.Z({wkid:null===a||void 0===a?void 0:a.defaultSpatialReference})}=o;if(null==a)throw t?new r.Z(S,"The type '".concat(t,"' could not be found in the service")):new r.Z(F,"The service is empty");let c=new g.Z({...a.extent,spatialReference:m.Z.WGS84});if(!(0,l.fS)(c.spatialReference,u))try{await(0,s.initializeProjection)(c.spatialReference,u,void 0,o),c=(0,s.project)(c,u)}catch{throw new r.Z(R,"Projection not supported")}return{extent:c,spatialReference:u,featureType:a}}(e,t,n,i),{spatialReference:c}=X(e.operations.GetFeature.url,a,i.spatialReference),{fields:p,geometryType:d,swapXY:f,objectIdField:y,geometryField:w}=await async function(e,t,n){var o,i,a,s,l;let u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{typeName:c}=t,[p,d]=await Promise.allSettled([L(e.operations.DescribeFeatureType.url,c,u),O(e,c,n,u)]),f=e=>new r.Z(b,"An error occurred while getting info about the feature type '".concat(c,"'"),{error:e});if("rejected"===p.status)throw f(p.reason);if("rejected"===d.status)throw f(d.reason);const{fields:y,errors:m}=null!==(o=p.value)&&void 0!==o?o:{},g=(null===(i=p.value)||void 0===i?void 0:i.geometryType)||(null===(a=d.value)||void 0===a?void 0:a.geometryType),w=null!==(s=null===(l=d.value)||void 0===l?void 0:l.swapXY)&&void 0!==s&&s;if(null==g)throw new r.Z(x,"The geometry type could not be determined for type '".concat(c),{typeName:c,geometryType:g,fields:y,errors:m});return{...D(null!==y&&void 0!==y?y:[]),geometryType:g,swapXY:w}}(e,a,c,i);return{url:e.operations.GetCapabilities.url,name:a.name,namespaceUri:a.namespaceUri,fields:p,geometryField:w,geometryType:d,objectIdField:y,spatialReference:null!==(o=i.spatialReference)&&void 0!==o?o:new m.Z({wkid:a.defaultSpatialReference}),extent:u,swapXY:f,wfsCapabilities:e,customParameters:i.customParameters}}function D(e){var t;const n=e.find((e=>"geometry"===e.type));let o=e.find((e=>"oid"===e.type));return e=e.filter((e=>"geometry"!==e.type)),o||(o=new f.Z({name:v,type:"oid",alias:v}),e.unshift(o)),{geometryField:null!==(t=null===n||void 0===n?void 0:n.name)&&void 0!==t?t:null,objectIdField:o.name,fields:e}}async function O(e,t,n){var r;let i,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=!1;const[l,p]=await Promise.all([U(e.operations.GetFeature.url,t,n,e.operations.GetFeature.outputFormat,{...a,count:1}),(0,o.Z)(e.operations.GetFeature.url,{responseType:"text",query:V(t,n,void 0,{...a,count:1}),signal:null===a||void 0===a?void 0:a.signal})]),d="FeatureCollection"===l.type&&(null===(r=l.features[0])||void 0===r?void 0:r.geometry);if(d){let e;switch(i=u.M.fromJSON((0,c.q9)(d.type)),d.type){case"Point":e=d.coordinates;break;case"LineString":case"MultiPoint":e=d.coordinates[0];break;case"MultiLineString":case"Polygon":e=d.coordinates[0][0];break;case"MultiPolygon":e=d.coordinates[0][0][0]}const t=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(p.data);if(t){const n=e[0].toFixed(3),o=e[1].toFixed(3),r=parseFloat(t[1]).toFixed(3);n===parseFloat(t[2]).toFixed(3)&&o===r&&(s=!0)}}return{geometryType:i,swapXY:s}}async function L(e,t,n){return function(e,t){const{name:n}=H(e),o=q(t);W(o);const a=(0,i.sE)((0,p.H)(o.firstElementChild,{element:e=>({name:e.getAttribute("name"),typeName:H(e.getAttribute("type")).name})}),(e=>{let{name:t}=e;return t===n}));if(null!=a){const e=(0,i.sE)((0,p.H)(o.firstElementChild,{complexType:e=>e}),(e=>e.getAttribute("name")===a.typeName));if(null!=e)return function(e){var t,n;const o=[],i=[];let a;const s=(0,p.H)(e,{complexContent:{extension:{sequence:{element:e=>e}}}});for(const l of s){const s=l.getAttribute("name");if(!s)continue;let u,c;if(l.hasAttribute("type")?u=H(l.getAttribute("type")).name:(0,p.h)(l,{simpleType:{restriction:e=>(u=H(e.getAttribute("base")).name,{maxLength:e=>{c=+e.getAttribute("value")}})}}),!u)continue;const d="true"===l.getAttribute("nillable");let m=!1;switch(u.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":i.push(new f.Z({name:s,alias:s,type:"integer",nullable:d,length:(0,y.ZR)("integer")}));break;case"float":case"double":case"decimal":i.push(new f.Z({name:s,alias:s,type:"double",nullable:d,length:(0,y.ZR)("double")}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":i.push(new f.Z({name:s,alias:s,type:"string",nullable:d,length:null!==(t=c)&&void 0!==t?t:(0,y.ZR)("string")}));break;case"datetime":case"date":i.push(new f.Z({name:s,alias:s,type:"date",nullable:d,length:null!==(n=c)&&void 0!==n?n:(0,y.ZR)("date")}));break;case"pointpropertytype":a="point",m=!0;break;case"multipointpropertytype":a="multipoint",m=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":a="polyline",m=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":a="polygon",m=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":m=!0,o.push(new r.Z(x,"geometry type '".concat(u,"' is not supported"),{type:(new XMLSerializer).serializeToString(e)}));break;default:o.push(new r.Z(C,"Unknown field type '".concat(u,"'"),{type:(new XMLSerializer).serializeToString(e)}))}m&&i.push(new f.Z({name:s,alias:s,type:"geometry",nullable:d}))}for(const r of i)if("integer"===r.type&&!r.nullable&&I.has(r.name.toLowerCase())){r.type="oid";break}return{geometryType:a,fields:i,errors:o}}(e)}throw new r.Z(S,"Type '".concat(e,"' not found in document"),{document:(new XMLSerializer).serializeToString(o)})}(t,(await(0,o.Z)(e,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:h,TYPENAME:t,...null===n||void 0===n?void 0:n.customParameters},signal:null===n||void 0===n?void 0:n.signal})).data)}const I=new Set(["objectid","fid"]);async function U(e,t,n,i,a){let{data:s}=await(0,o.Z)(e,{responseType:"text",query:V(t,n,i,a),signal:null===a||void 0===a?void 0:a.signal});s=s.replaceAll(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{return JSON.parse(s)}catch(l){throw new r.Z(P,"Error while parsing the\xa0response",{response:s,error:l})}}function V(e,t,n,o){const r="number"==typeof t?t:t.wkid;return{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:h,TYPENAMES:e,OUTPUTFORMAT:n,SRSNAME:"EPSG:"+r,STARTINDEX:null===o||void 0===o?void 0:o.startIndex,COUNT:null===o||void 0===o?void 0:o.count,...null===o||void 0===o?void 0:o.customParameters}}function q(e){return(new DOMParser).parseFromString(e.trim(),"text/xml")}function H(e){const[t,n]=e.split(":");return{prefix:n?t:"",name:null!==n&&void 0!==n?n:t}}function W(e){let t="",n="";if((0,p.h)(e.firstElementChild,{Exception:e=>(t=e.getAttribute("exceptionCode"),{ExceptionText:e=>{n=e.textContent}})}),t)throw new r.Z("wfs-layer:".concat(t),n)}function X(e,t,n){const o={wkid:t.defaultSpatialReference},r=null!=(null===n||void 0===n?void 0:n.wkid)?{wkid:n.wkid}:o;return{spatialReference:r,getFeatureSpatialReference:(0,d.B5)(e)||r.wkid&&t.supportedSpatialReferences.includes(r.wkid)?{wkid:r.wkid}:{wkid:t.defaultSpatialReference}}}},39098:(e,t,n)=>{function o(e,t){if(e&&t)for(const n of e.children)if(n.localName in t){const e=t[n.localName];if("function"==typeof e){const t=e(n);t&&o(n,t)}else o(n,e)}}function*r(e,t){for(const n of e.children)if(n.localName in t){const e=t[n.localName];"function"==typeof e?yield e(n):yield*r(n,e)}}n.d(t,{H:()=>r,h:()=>o})}}]);
//# sourceMappingURL=5927.8b96c671.chunk.js.map