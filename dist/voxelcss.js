!function(n){function e(n){function e(n,e){n="on"+n,"function"==typeof e&&(s[n]||(s[n]=[]),s[n].indexOf(e)>-1||s[n].push(e))}function t(n,e){n="on"+n,s[n]&&s[n].splice(s[n].indexOf(e),1)}function i(n,e){var t,i,o;if(n="on"+n,t=s[n])for(o=0;i=t[o++];)i(e)}var o=n||new Function,s={};return o.addEventListener=e,o.removeEventListener=t,o.triggerEvent=i,o}n.voxelcss||(n.voxelcss={}),n.voxelcss.interfaces||(n.voxelcss.interfaces={}),voxelcss.interfaces.EventListener=e}(window);
!function(r){function n(){function r(){return 1===arguments.length&&arguments[0].constructor!==Number?arguments[0].constructor===String?a(arguments[0]):i(arguments[0]):u.apply(this,arguments)}function t(){return{r:p.r,g:p.g,b:p.b,a:p.a}}function e(){return f(p.r,p.g,p.b)}function o(){return JSON.stringify(p)}function c(){return new n(p)}function u(r,n,e,o){var c=t();return r!=l&&r.constructor==Number&&(p.r=r),n!=l&&n.constructor==Number&&(p.g=n),e!=l&&e.constructor==Number&&(p.b=e),o!=l&&o.constructor==Number&&(p.a=o),g(),c}function i(r){return r===l?t():u(r.r,r.g,r.b,r.a)}function a(r){var n;return r&&r.constructor===String?(n=t(),p=s(r),p.a=1,g(),n):t()}function s(r){var n,t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;return r=r.replace(t,function(r,n,t,e){return n+n+t+t+e+e}),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r),n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:null}function f(r,n,t){return""+((1<<24)+(r<<16)+(n<<8)+t).toString(16).slice(1)}function g(){b.triggerEvent("change",{target:b})}var l,b=this,p={r:0,g:0,b:0,a:1};b.setColor=r,b.getRGBA=t,b.getHex=e,b.serialize=o,b.clone=c,function(){voxelcss.interfaces.EventListener(b),r.apply(this,arguments)}.apply(b,arguments)}r.voxelcss||(r.voxelcss={}),n.loadFromSerial=function(r){var t=JSON.parse(r);return new n(t)},r.voxelcss.ColorFace=n}(window);
!function(e){e.voxelcss||(e.voxelcss={}),voxelcss.Meshes={dirt:new voxelcss.Mesh(new voxelcss.ImageFace("http://voxelcss.com/res/dirt/main.png")),grass:new voxelcss.Mesh({top:new voxelcss.ImageFace("http://voxelcss.com/res/grass/top.png"),bottom:new voxelcss.ImageFace("http://voxelcss.com/res/grass/bottom.png"),front:new voxelcss.ImageFace("http://voxelcss.com/res/grass/side.png"),back:new voxelcss.ImageFace("http://voxelcss.com/res/grass/side.png"),left:new voxelcss.ImageFace("http://voxelcss.com/res/grass/side.png"),right:new voxelcss.ImageFace("http://voxelcss.com/res/grass/side.png")}),water:new voxelcss.Mesh(new voxelcss.ImageFace("http://voxelcss.com/res/water/main.png")),waterFall:new voxelcss.Mesh({top:new voxelcss.ImageFace("http://voxelcss.com/res/water/main.png"),bottom:new voxelcss.ImageFace("http://voxelcss.com/res/water/main.png"),front:new voxelcss.ImageFace("http://voxelcss.com/res/water/fall.png"),back:new voxelcss.ImageFace("http://voxelcss.com/res/water/fall.png"),left:new voxelcss.ImageFace("http://voxelcss.com/res/water/fall.png"),right:new voxelcss.ImageFace("http://voxelcss.com/res/water/fall.png")}),waterFallTop:new voxelcss.Mesh({top:new voxelcss.ImageFace("http://voxelcss.com/res/water/main.png"),bottom:new voxelcss.ImageFace("http://voxelcss.com/res/water/main.png"),front:new voxelcss.ImageFace("http://voxelcss.com/res/water/falltop.png"),back:new voxelcss.ImageFace("http://voxelcss.com/res/water/falltop.png"),left:new voxelcss.ImageFace("http://voxelcss.com/res/water/falltop.png"),right:new voxelcss.ImageFace("http://voxelcss.com/res/water/falltop.png")}),waterFallCrash:new voxelcss.Mesh({top:new voxelcss.ImageFace("http://voxelcss.com/res/water/main.png"),bottom:new voxelcss.ImageFace("http://voxelcss.com/res/water/main.png"),front:new voxelcss.ImageFace("http://voxelcss.com/res/water/crash.png"),back:new voxelcss.ImageFace("http://voxelcss.com/res/water/crash.png"),left:new voxelcss.ImageFace("http://voxelcss.com/res/water/crash.png"),right:new voxelcss.ImageFace("http://voxelcss.com/res/water/crash.png")}),treeTrunk:new voxelcss.Mesh({top:new voxelcss.ImageFace("http://voxelcss.com/res/tree/rings.png"),bottom:new voxelcss.ImageFace("http://voxelcss.com/res/tree/rings.png"),front:new voxelcss.ImageFace("http://voxelcss.com/res/tree/bark.png"),back:new voxelcss.ImageFace("http://voxelcss.com/res/tree/bark.png"),left:new voxelcss.ImageFace("http://voxelcss.com/res/tree/bark.png"),right:new voxelcss.ImageFace("http://voxelcss.com/res/tree/bark.png")}),treeLeaves:new voxelcss.Mesh(new voxelcss.ImageFace("http://voxelcss.com/res/tree/leaves.png"))}}(window);
!function(n){function t(n){function t(n,t,i){var u;return m=!1,u={x:e(n),y:o(t),z:r(i)},m=!0,x.triggerEvent("move"),u}function e(n){var t;return void 0===n||"number"!=typeof n?g.x:(t=g.x,g.x=n,m&&x.triggerEvent("move"),t)}function o(n){var t;return void 0===n||"number"!=typeof n?g.y:(t=g.y,g.y=n,m&&x.triggerEvent("move"),t)}function r(n){var t;return void 0===n||"number"!=typeof n?g.z:(t=g.z,g.z=n,m&&x.triggerEvent("move"),t)}function i(n,t,e){var o;return m=!1,o={x:u(n),y:s(t),z:v(e)},m=!0,x.triggerEvent("move"),o}function u(n){return void 0===n||"number"!=typeof n?g.x:e(n+g.x)}function s(n){return void 0===n||"number"!=typeof n?g.y:o(n+g.y)}function v(n){return void 0===n||"number"!=typeof n?g.z:r(n+g.z)}function c(){return{x:g.x,y:g.y,z:g.z}}function f(){return g.x}function a(){return g.y}function y(){return g.z}var x=n||new Function,g={x:0,y:0,z:0},m=!0;return x.setPosition=t,x.setPositionX=e,x.setPositionY=o,x.setPositionZ=r,x.translate=i,x.translateX=u,x.translateY=s,x.translateZ=v,x.getPosition=c,x.getPositionX=f,x.getPositionY=a,x.getPositionZ=y,x}n.voxelcss||(n.voxelcss={}),n.voxelcss.interfaces||(n.voxelcss.interfaces={}),voxelcss.interfaces.Positioned=t}(window);
!function(e){function t(){function e(){F=!0}function t(){F=!1}function n(){return F}function r(){V=!0}function i(){V=!1}function o(){return V}function a(){M.save()}function c(){var e=M.load();return w(),e}function v(){return M.isSaved()}function u(){return M.deleteSave()}function s(){return M["export"]()}function f(e){var t=M["import"](e);return w(),t}function l(e){L(e);var t=M.add(e);return V&&a(),t}function d(e){var t=M.remove(e);return t&&k(e),V&&a(),t}function m(){return M}function E(e){var t;return e===A?R.mesh:(t=R.mesh,R.mesh=e,t)}function L(e){e.addEventListener("VoxelClick",C),e.addEventListener("TopClick",g),e.addEventListener("BottomClick",h),e.addEventListener("FrontClick",p),e.addEventListener("BackClick",x),e.addEventListener("LeftClick",S),e.addEventListener("RightClick",b),e.addEventListener("MeshChange",function(){V&&a()})}function k(e){e.removeEventListener("VoxelClick",C),e.removeEventListener("TopClick",g),e.removeEventListener("BottomClick",h),e.removeEventListener("FrontClick",p),e.removeEventListener("BackClick",x),e.removeEventListener("LeftClick",S),e.removeEventListener("RightClick",b)}function C(e){var t;F&&(t=e.target,d(t))}function g(e){var t;F&&(t=e.target,B(t,0,1,0))}function h(e){var t;F&&(t=e.target,B(t,0,-1,0))}function p(e){var t;F&&(t=e.target,B(t,0,0,1))}function x(e){var t;F&&(t=e.target,B(t,0,0,-1))}function S(e){var t;F&&(t=e.target,B(t,-1,0,0))}function b(e){var t;F&&(t=e.target,B(t,1,0,0))}function B(e,t,n,r){var i=e.clone(),o=i.getDimension();i.setMesh(R.mesh),i.translate(t*o,n*o,r*o),l(i)}function w(){var e,t;for(e=0;t=M.getVoxels()[e++];)L(t)}var A,M,T=this,V=!1,F=!0,R={mesh:{}};T.enable=e,T.disable=t,T.isEnabled=n,T.enableAutoSave=r,T.disableAutoSave=i,T.canAutoSave=o,T.save=a,T.load=c,T.isSaved=v,T.deleteSave=u,T["export"]=s,T["import"]=f,T.add=l,T.remove=d,T.getWorld=m,T.setToolMesh=E,function(e,t){if(e===A)throw"Editor requires World instance for initialization";M=e,t!==A&&t.autosave===!0&&r(),w()}.apply(T,arguments)}e.voxelcss||(e.voxelcss={}),voxelcss.Editor=t}(window);
!function(e){function n(){function e(e){var n;return e?(n=a,a=e,i(),n):a}function t(){return a}function r(){return a}function c(){return new n(a)}function i(){o.triggerEvent("change",{target:o})}var o=this,a=A;o.setSource=e,o.getSource=t,o.serialize=r,o.clone=c,function(n){voxelcss.interfaces.EventListener(o),e(n)}.apply(o,arguments)}e.voxelcss||(e.voxelcss={});var A="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";n.loadFromSerial=function(e){return new n(e)},e.voxelcss.ImageFace=n}(window);
!function(e){function t(){function e(e){var t;return e===s||"number"!=typeof e?o:(t=o,o=e,i.triggerEvent("change",{target:i}),t)}function t(){return o}function n(e,t){var n=r();return"number"==typeof t&&(c=t),"number"==typeof e&&(u=e),i.triggerEvent("change",{target:i}),n}function r(){return[u,c]}var s,i=this,o=500,c=1,u=0;i.setTravelDistance=e,i.getTravelDistance=t,i.setBrightness=n,i.getBrightness=r,function(t,r,s,o,c,u){voxelcss.interfaces.Positioned(voxelcss.interfaces.EventListener(i)),i.setPosition(t,r,s),e(o),n(c,u)}.apply(i,arguments)}e.voxelcss||(e.voxelcss={}),e.voxelcss.LightSource=t}(window);
!function(t){function e(){function t(t){var e;if(void 0!==t&&L(t))return e=F,e&&e.removeEventListener("change",b),F=t,F.addEventListener("change",b),y&&p(),e}function e(t){var e;if(void 0!==t&&L(t))return e=k,e&&e.removeEventListener("change",b),k=t,k.addEventListener("change",b),y&&p(),e}function n(t){var e;if(void 0!==t&&L(t))return e=x,e&&e.removeEventListener("change",b),x=t,x.addEventListener("change",b),y&&p(),e}function o(t){var e;if(void 0!==t&&L(t))return e=w,e&&e.removeEventListener("change",b),w=t,w.addEventListener("change",b),y&&p(),e}function i(t){var e;if(void 0!==t&&L(t))return e=B,e&&e.removeEventListener("change",b),B=t,B.addEventListener("change",b),y&&p(),e}function c(t){var e;if(void 0!==t&&L(t))return e=S,e&&e.removeEventListener("change",b),S=t,S.addEventListener("change",b),y&&p(),e}function a(){return F}function f(){return k}function u(){return x}function s(){return w}function v(){return B}function g(){return S}function l(r){var a=d();return void 0===r?a:(L(r)&&(r={front:r,back:r,top:r,bottom:r,left:r,right:r}),y=!1,t(r.front),e(r.back),n(r.left),o(r.right),i(r.top),c(r.bottom),p(),y=!0,a)}function d(){return{front:F,back:k,left:x,right:w,top:B,bottom:S}}function h(){return JSON.stringify({front:m(F),back:m(k),left:m(x),right:m(w),top:m(B),bottom:m(S)})}function m(t){return E(t.constructor)+"("+t.serialize()+")"}function L(t){return!!E(t.constructor)}function E(t){var e,n;for(e in r)if(n=r[e],n===t)return e;return null}function b(){p()}function p(){O.triggerEvent("change",{target:O,faces:d()})}var F,k,x,w,B,S,O=this,y=!0;O.setFront=t,O.setBack=e,O.setLeft=n,O.setRight=o,O.setTop=i,O.setBottom=c,O.getFront=a,O.getBack=f,O.getLeft=u,O.getRight=s,O.getTop=v,O.getBottom=g,O.setFaces=l,O.getFaces=d,O.serialize=h,function(t){voxelcss.interfaces.EventListener(O),l(new voxelcss.ImageFace),l(t)}.apply(O,arguments)}function n(t){var e=t.indexOf("("),n=t.slice(0,e),o=t.slice(e+1,-1);return r[n].loadFromSerial(o)}t.voxelcss||(t.voxelcss={});var r={image:voxelcss.ImageFace,color:voxelcss.ColorFace};e.loadFromSerial=function(t){var r=JSON.parse(t);return new e({front:n(r.front),back:n(r.back),left:n(r.left),right:n(r.right),top:n(r.top),bottom:n(r.bottom)})},t.voxelcss.Mesh=e}(window);
!function(t,e){function n(){function n(t,e,n){return{x:r(t),y:o(e),z:i(n)}}function r(t){var e;return t===it||"number"!=typeof t?vt.x:(e=vt.x,vt.x+=t,rt(),e)}function o(t){var e;return t===it||"number"!=typeof t?vt.y:(e=vt.y,vt.y+=t,rt(),e)}function i(t){var e;return t===it||"number"!=typeof t?vt.z:(e=vt.z,vt.z+=t,rt(),e)}function a(t,e,n){var r={x:u(t),y:c(e),z:f(n)};return rt(),r}function u(t){var e;return t===it||"number"!=typeof t?vt.x:(e=vt.x,vt.x=t,rt(),e)}function c(t){var e;return t===it||"number"!=typeof t?vt.y:(e=vt.y,vt.y=t,rt(),e)}function f(t){var e;return t===it||"number"!=typeof t?vt.z:(e=vt.z,vt.z=t,rt(),e)}function s(){return{x:vt.x,y:vt.y,z:vt.z}}function d(){return vt.x}function v(){return vt.y}function y(){return vt.z}function l(t,e,n){return{x:m(t),y:x(e),z:p(n)}}function m(t){var e;return t===it||"number"!=typeof t?yt.x:(e=yt.x,yt.x+=t,rt(),e)}function x(t){var e;return t===it||"number"!=typeof t?yt.y:(e=yt.y,yt.y+=t,rt(),e)}function p(t){var e;return t===it||"number"!=typeof t?yt.z:(e=yt.z,yt.z+=t,rt(),e)}function h(t,e,n){var r={x:g(t),y:z(e),z:b(n)};return rt(),r}function g(t){var e;return t===it||"number"!=typeof t?yt.x:(e=yt.x,yt.x=t,rt(),e)}function z(t){var e;return t===it||"number"!=typeof t?yt.y:(e=yt.y,yt.y=t,rt(),e)}function b(t){var e;return t===it||"number"!=typeof t?yt.z:(e=yt.z,yt.z=t,rt(),e)}function E(){return{x:yt.x,y:yt.y,z:yt.z}}function L(){return yt.x}function P(){return yt.y}function w(){return yt.z}function Y(t){var e;return t===it||"number"!=typeof t?lt:(e=lt,lt+=t,rt(),e)}function Z(t){var e;return t===it||"number"!=typeof t?lt:(e=lt,lt=t,rt(),lt)}function X(){return lt}function C(t){if(dt)throw"Cannot attach currently attached scene";at=t,t.appendChild(ut),dt=!0}function M(){if(!dt)throw"Cannot detach currently detached scene";dt=!1,ut.parentElement.removeChild(ut)}function R(){return dt}function S(){return at}function D(){xt||(xt=!0)}function O(){xt&&(xt=!1)}function k(){return xt}function A(){pt||(pt=!0)}function I(){pt&&(pt=!1)}function H(){return pt}function V(){ht||(ht=!0)}function W(){ht&&(ht=!1)}function j(){return ht}function q(t){ft.appendChild(t.getDomElement()),zt.push(t),t.setParentScene(st),0!==gt.length&&t.updateLightSource(gt)}function B(t){ft.removeChild(t.getDomElement()),zt.splice(zt.indexOf(t),1),t.removeParentScene()}function F(){return zt.concat([])}function G(t){var e=gt.indexOf(t);return-1!==e?!1:(t.addEventListener("change",ot),t.addEventListener("move",ot),gt.push(t),ot(),!0)}function J(t){var e=gt.indexOf(t);return-1===e?!1:(t.removeEventListener("change",ot),t.removeEventListener("move",ot),gt.splice(e,1),ot(),!0)}function K(){return gt}function N(){ut=e.createElement("div"),ut.setAttribute("class","scene"),ct=e.createElement("div"),ct.setAttribute("class","zoom"),ft=e.createElement("div"),ft.setAttribute("class","camera"),ut.appendChild(ct),ct.appendChild(ft)}function Q(){ut.addEventListener("mousedown",T),ut.addEventListener("mousewheel",_),ut.addEventListener("wheel",_)}function T(e){mt.start.x=e.x||e.clientX,mt.start.y=e.y||e.clientY,mt.current.x=e.x||e.clientX,mt.current.y=e.y||e.clientY,t.addEventListener("mousemove",$),t.addEventListener("mouseup",U)}function U(e){t.removeEventListener("mousemove",$),t.removeEventListener("mouseup",U)}function $(e){if(mt.lastMove.dx=(e.x||e.clientX)-mt.current.x,mt.lastMove.dy=(e.y||e.clientY)-mt.current.y,mt.current.x=e.x||e.clientX,mt.current.y=e.y||e.clientY,pt&&mt.shiftDown)l(mt.lastMove.dx,mt.lastMove.dy),rt(),st.triggerEvent("pan",{rotation:s(),pan:E(),zoom:X(),target:st});else if(xt){var n=2;vt.y+=mt.lastMove.dx/t.innerWidth*Math.PI*2*n,vt.x-=mt.lastMove.dy/t.innerHeight*Math.PI*2*n,rt(),st.triggerEvent("orbit",{rotation:s(),pan:E(),zoom:X(),target:st})}}function _(t){return ht?(lt+=t.deltaY/5e3,rt(),t.preventDefault(),st.triggerEvent("zoom",{rotation:s(),pan:E(),zoom:X(),target:st}),!1):void 0}function tt(){t.addEventListener("keydown",et),t.addEventListener("keyup",nt)}function et(t){16!==t.keyCode&&16!==t.which||(mt.shiftDown=!0)}function nt(t){16!==t.keyCode&&16!==t.which||(mt.shiftDown=!1)}function rt(){ft.style.transform="rotateX("+vt.x+"rad) rotateY("+vt.y+"rad) rotateZ("+vt.z+"rad)",ct.style.transform="scale("+lt+", "+lt+")",ct.style.transform+=" translateX("+yt.x+"px) translateY("+yt.y+"px) translateZ("+yt.z+"px)",ot()}function ot(){var t,e;if(0!==gt.length)for(t=0;e=zt[t++];)e.updateLightSource(gt)}var it,at,ut,ct,ft,st=this,dt=!1,vt={x:0,y:0,z:0},yt={x:0,y:0,z:0},lt=1,mt={start:{x:0,y:0},current:{x:0,y:0},lastMove:{x:0,y:0},shiftDown:!1},xt=!0,pt=!0,ht=!0,gt=[],zt=[];st.rotate=n,st.rotateX=r,st.rotateY=o,st.rotateZ=i,st.setRotation=a,st.setRotationX=u,st.setRotationY=c,st.setRotationZ=f,st.getRotation=s,st.getRotationX=d,st.getRotationY=v,st.getRotationZ=y,st.pan=l,st.panX=m,st.panY=x,st.panZ=p,st.setPan=h,st.setPanX=g,st.setPanY=z,st.setPanZ=b,st.getPan=E,st.getPanX=L,st.getPanY=P,st.getPanZ=w,st.zoom=Y,st.setZoom=Z,st.getZoom=X,st.attach=C,st.detach=M,st.isAttached=R,st.getParentElement=S,st.enableOrbit=D,st.disableOrbit=O,st.canOrbit=k,st.enablePan=A,st.disablePan=I,st.canPan=H,st.enableZoom=V,st.disableZoom=W,st.canZoom=j,st.add=q,st.remove=B,st.getVoxels=F,st.addLightSource=G,st.removeLightSource=J,st.getLightSources=K,function(){voxelcss.interfaces.EventListener(st),N(),Q(),tt()}.apply(st,arguments)}t.voxelcss||(t.voxelcss={}),voxelcss.Scene=n}(window,document);
!function(t){function e(){function t(t){var e;if(t!==z&&t.constructor===voxelcss.Mesh)return e=X,e&&e.removeEventListener("change",M),X=t,X.addEventListener("change",M),x(),e}function e(){return X}function n(t){if(t===z)throw"Scene required to add voxel to scene";Y=t,T.setAttribute("class","anim up"),C()}function a(t){if(t===z)throw"Scene required to add voxel to scene";Y=t,T.setAttribute("class","anim down"),C()}function i(t){if(t===z)throw"Scene required to add voxel to scene";Y=t,T.setAttribute("class","anim"),C()}function o(){Y!==z&&Y.remove(q)}function r(t){Y=t}function s(){Y=z}function c(t){var e;return t===z||"number"!=typeof t?R:(e=R,R=t,e)}function l(){return R}function h(){return Z}function g(){return new voxelcss.Voxel(q.getPositionX(),q.getPositionY(),q.getPositionZ(),R,{mesh:X})}function u(t){var e,n,a,i,o,r,s,c,l,h,g,u=Math.PI,v=1,m=1,p=1,M=1,x=1,y=1;for(e=0,lightSource;lightSource=t[e++];)n=lightSource.getBrightness(),a=n[1]-n[0],i=1-n[1],o=lightSource.getPositionX(),r=lightSource.getPositionY(),s=lightSource.getPositionZ(),m>0&&(c=f(o,r,s,{A:0,B:0,C:-1}),l=c.angle,h=1-l/(u/2),h=d(h),h=Math.min(1,h+Math.pow(c.distance/lightSource.getTravelDistance(),6)),g=(c.direction<0?1:h)*a+i,m=Math.max(0,m-(1-g))),v>0&&(c=f(o,r,s,{A:0,B:0,C:1}),l=c.angle,h=1-l/(u/2),h=d(h),h=Math.min(1,h+Math.pow(c.distance/lightSource.getTravelDistance(),6)),g=(c.direction<0?1:h)*a+i,v=Math.max(0,v-(1-g))),p>0&&(c=f(o,r,s,{A:-1,B:0,C:0}),l=c.angle,h=1-l/(u/2),h=d(h),h=Math.min(1,h+Math.pow(c.distance/lightSource.getTravelDistance(),6)),g=(c.direction<0?1:h)*a+i,p=Math.max(0,p-(1-g))),M>0&&(c=f(o,r,s,{A:1,B:0,C:0}),l=c.angle,h=1-l/(u/2),h=d(h),h=Math.min(1,h+Math.pow(c.distance/lightSource.getTravelDistance(),6)),g=(c.direction<0?1:h)*a+i,M=Math.max(0,M-(1-g))),x>0&&(c=f(o,r,s,{A:0,B:1,C:0}),l=c.angle,h=1-l/(u/2),h=d(h),h=Math.min(1,h+Math.pow(c.distance/lightSource.getTravelDistance(),6)),g=(c.direction<0?1:h)*a+i,x=Math.max(0,x-(1-g))),y>0&&(c=f(o,r,s,{A:0,B:-1,C:0}),l=c.angle,h=1-l/(u/2),h=d(h),h=Math.min(1,h+Math.pow(c.distance/lightSource.getTravelDistance(),6)),g=(c.direction<0?1:h)*a+i,y=Math.max(0,y-(1-g)));F.front.shader.style.opacity=v,F.back.shader.style.opacity=m,F.left.shader.style.opacity=p,F.right.shader.style.opacity=M,F.top.shader.style.opacity=x,F.bottom.shader.style.opacity=y}function d(t){return Math.pow(t,3)}function f(t,e,n,a){var i,o,r,s=v(Y.getRotationX(),-Y.getRotationY(),Y.getRotationZ()),c={x:t,y:e,z:n},l=m(c,s);return l={x:l.x-q.getPositionX()-a.A*q.getDimension()/2,y:l.y-q.getPositionY()-a.B*q.getDimension()/2,z:l.z-q.getPositionZ()-a.C*q.getDimension()/2},i=Math.sqrt(Math.pow(l.x,2)+Math.pow(l.y,2)+Math.pow(l.z,2)),o=1===Math.abs(a.C)?a.C*l.z:1===Math.abs(a.B)?a.B*l.y:a.A*l.x,r=Math.asin(Math.abs(l.x*a.A+l.y*a.B+l.z*a.C)/Math.sqrt(Math.pow(l.x,2)+Math.pow(l.y,2)+Math.pow(l.z,2))),{angle:r,direction:o,distance:i}}function v(t,e,n){var a=[[1,0,0],[0,Math.cos(t),-Math.sin(t)],[0,Math.sin(t),Math.cos(t)]],i=[[Math.cos(e),0,Math.sin(e)],[0,1,0],[-Math.sin(e),0,Math.cos(e)]],o=[[Math.cos(n),-Math.sin(n),0],[Math.sin(n),Math.cos(n),0],[0,0,1]];return p(p(o,i),a)}function m(t,e){var n=[[t.x],[t.y],[t.z]],a=p(e,n);return{x:a[0][0],y:a[1][0],z:a[2][0]}}function p(t,e){var n,a,i,o=t.length,r=t[0].length,s=(e.length,e[0].length),c=new Array(o);for(n=0;o>n;++n)for(c[n]=new Array(s),a=0;s>a;++a)for(c[n][a]=0,i=0;r>i;++i)c[n][a]+=t[n][i]*e[i][a];return c}function M(){x(),q.triggerEvent("MeshChange",{target:q,mesh:X})}function x(){var t,e,n,a=X.getFaces();for(t in F)e=a[t],e instanceof voxelcss.ImageFace?(F[t].src=e.getSource(),F[t].removeAttribute("class")):e instanceof voxelcss.ColorFace&&(n=F[t].parentElement,n.style.background="#"+e.getHex(),F[t].setAttribute("class","colored"))}function y(){Z=b("div","cube"),T=b("div","anim"),w("top"),w("bottom"),w("front"),w("back"),w("left"),w("right"),Z.appendChild(T)}function w(t){var e,n,a=b("div","face "+t);switch(a.style.width=R+"px",a.style.height=R+"px",a.style.marginLeft=R/-2+"px",a.style.marginTop=R/-2+"px",t){case"top":a.style.transform="rotateX(90deg) translateZ("+R/2+"px)",a.addEventListener("click",S);break;case"bottom":a.style.transform="rotateX(90deg) translateZ(-"+R/2+"px)",a.addEventListener("click",A);break;case"left":a.style.transform="rotateY(90deg) translateZ(-"+R/2+"px)",a.addEventListener("click",P);break;case"right":a.style.transform="rotateY(90deg) translateZ("+R/2+"px)",a.addEventListener("click",D);break;case"front":a.style.transform="translateZ("+R/2+"px)",a.addEventListener("click",L);break;case"back":a.style.transform="translateZ(-"+R/2+"px)",a.addEventListener("click",B)}a.addEventListener("contextmenu",E),e=b("img",""),F[t]=e,n=b("div","shader"),F[t].shader=n,a.appendChild(e),a.appendChild(n),T.appendChild(a)}function b(t,e){var n=document.createElement(t);return n.setAttribute("class",e),n}function k(){var t=q.getPosition();Z.style.transform="translate3d("+t.x+"px, "+-t.y+"px, "+t.z+"px)"}function C(){Y.add(q)}function E(t){return t.preventDefault(),q.triggerEvent("VoxelClick",{target:q}),!1}function S(){q.triggerEvent("TopClick",{target:q})}function A(){q.triggerEvent("BottomClick",{target:q})}function P(){q.triggerEvent("LeftClick",{target:q})}function D(){q.triggerEvent("RightClick",{target:q})}function L(){q.triggerEvent("FrontClick",{target:q})}function B(){q.triggerEvent("BackClick",{target:q})}var z,Z,T,X,Y,q=this,F={},R=0;q.setMesh=t,q.getMesh=e,q.animUp=n,q.animDown=a,q.addToScene=i,q.removeFromScene=o,q.setParentScene=r,q.removeParentScene=s,q.setDimension=c,q.getDimension=l,q.getDomElement=h,q.clone=g,q.updateLightSource=u,function(e,n,a,i,o){voxelcss.interfaces.Positioned(voxelcss.interfaces.EventListener(q)),q.addEventListener("move",k),c(i),y(),q.setPosition(e,n,a),t(new voxelcss.Mesh),o!==z&&o.mesh!==z&&t(o.mesh)}.apply(q,arguments)}t.voxelcss||(t.voxelcss={}),voxelcss.Voxel=e}(window);
!function(e){function n(){function e(e){return p.push(e),v.add(e)}function n(e){var n=p.indexOf(e);return-1===n?!1:(v.remove(e),p.splice(n,1),!0)}function o(){var e,n,o=[];for(e=0;n=p[e++];)o.push({position:n.getPosition(),dimension:n.getDimension(),mesh:n.getMesh().serialize()});return JSON.stringify(o)}function t(n){u();var o,t,i,s=JSON.parse(n+"");for(o=0;t=s[o++];)i=new voxelcss.Voxel(t.position.x,t.position.y,t.position.z,t.dimension),i.setMesh(voxelcss.Mesh.loadFromSerial(t.mesh)),e(i)}function i(){localStorage.setItem(f(),o())}function s(){t(localStorage.getItem(f())||"[]")}function r(){return!!localStorage.getItem(f())}function c(){localStorage.setItem(f(),"")}function a(){return v}function l(){return p.concat([])}function u(){for(;p.length>0;)n(p[0])}function f(){return"savedWorld<"+m+">"}var d,v,g=this,m="*",p=[];g.add=e,g.remove=n,g["export"]=o,g["import"]=t,g.save=i,g.load=s,g.isSaved=r,g.deleteSave=c,g.getScene=a,g.getVoxels=l,function(e,n){if(e===d)throw"World cannot be instantiated without a Scene instance";v=e,n!==d&&(m=n)}.apply(g,arguments)}e.voxelcss||(e.voxelcss={}),voxelcss.World=n}(window);