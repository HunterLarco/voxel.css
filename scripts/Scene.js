(function(){
  
  function Scene(){
    var self = this;
    var undefined;
    
    
    var sceneElement;
    var zoomElement;
    var cameraElement;
    var isAttached = false;
    
    var rotation = { x: 0, y: 0, z: 0 };
    var pan = { x: 0, y: 0, z: 0 };
    var zoom = 1;
    
    var mouse = {
      start: { x: 0, y: 0 },
      current: { x: 0, y: 0 },
      lastMove: { x: 0, y: 0 }
    }
    
    
    self.rotate = Rotate;
    self.pan    = Pan;
    self.zoom   = Zoom;
    
    self.setRotation  = SetRotation;
    self.setRotationX = SetRotationX;
    self.setRotationY = SetRotationY;
    self.setRotationZ = SetRotationZ;
    
    self.getRotation  = GetRotation;
    self.getRotationX = GetRotationX;
    self.getRotationY = GetRotationY;
    self.getRotationZ = GetRotationZ;
    
    self.setPan  = SetPan;
    self.setPanX = SetPanX;
    self.setPanY = SetPanY;
    self.setPanZ = SetPanZ;
    
    self.getPan  = GetPan;
    self.getPanX = GetPanX;
    self.getPanY = GetPanY;
    self.getPanZ = GetPanZ;
    
    self.getZoom = GetZoom;
    
    self.attach = Attach;
    self.detach = Detach;
    self.isAttached = IsAttached;
    
    self.appendChild = AppendChild;
    
    
    function Rotate(x, y, z){
      rotation.x += x || 0;
      rotation.y += y || 0;
      rotation.z += z || 0;
      UpdateSceneTransforms();
    }
    function Pan(x, y, z){
      pan.x += x || 0;
      pan.y += y || 0;
      pan.z += z || 0;
      UpdateSceneTransforms();
    }
    function Zoom(_zoom){
      zoom += _zoom || 0;
      UpdateSceneTransforms();
    }
    
    function SetRotation(x, y, z){
      rotation.x = x || 0;
      rotation.y = y || 0;
      rotation.z = z || 0;
      UpdateSceneTransforms();
    }
    function SetRotationX(x){
      rotation.x = x || 0;
      UpdateSceneTransforms();
    }
    function SetRotationY(y){
      rotation.y = y || 0;
      UpdateSceneTransforms();
    }
    function SetRotationZ(z){
      rotation.z = z || 0;
      UpdateSceneTransforms();
    }
    
    function GetRotation(){
      return rotation;
    }
    function GetRotationX(){
      return rotation.x;
    }
    function GetRotationY(){
      return rotation.y;
    }
    function GetRotationZ(){
      return rotation.z;
    }
    
    function SetPan(x, y, z){
      pan.x = x || 0;
      pan.y = y || 0;
      pan.z = z || 0;
      UpdateSceneTransforms();
    }
    function SetPanX(x){
      pan.x = x || 0;
      UpdateSceneTransforms();
    }
    function SetPanY(y){
      pan.y = y || 0;
      UpdateSceneTransforms();
    }
    function SetPanZ(z){
      pan.z = z || 0;
      UpdateSceneTransforms();
    }
    
    function GetPan(){
      return pan;
    }
    function GetPanX(){
      return pan.x;
    }
    function GetPanY(){
      return pan.y;
    }
    function GetPanZ(){
      return pan.z;
    }
    
    function SetZoom(_zoom){
      zoom = _zoom;
      UpdateSceneTransforms();
    }
    function GetZoom(){
      return zoom;
    }
    
    function Attach(elem){
      if(isAttached) throw 'Cannot attach currently attached scene';
      elem.appendChild(sceneElement);
      isAttached = true;
    }
    function Detach(){
      if(!isAttached) throw 'Cannot detach currently detached scene';;
      isAttached = false;
      sceneElement.parentElement.removeChild(sceneElement);
    }
    function IsAttached(){
      return isAttached;
    }
    
    function AppendChild(elem){
      cameraElement.appendChild(elem);
    }
    
    
    function CreateSceneElement(){
      sceneElement = document.createElement('div');
      sceneElement.setAttribute('class', 'scene');
      
      zoomElement = document.createElement('div');
      zoomElement.setAttribute('class', 'zoom');
      
      cameraElement = document.createElement('div');
      cameraElement.setAttribute('class', 'camera');
      
      sceneElement.appendChild(zoomElement);
      zoomElement.appendChild(cameraElement);
    }
    
    function BindMouse(){
      sceneElement.addEventListener('mousedown', MouseDown);
      sceneElement.addEventListener('mousewheel', OnScroll);
    }
    function MouseDown(event){
      mouse.start.x = event.x;
      mouse.start.y = event.y;
    
      mouse.current.x = event.x;
      mouse.current.y = event.y;
    
      window.addEventListener('mousemove', MouseMove);
      window.addEventListener('mouseup', MouseUp);
    }
    function MouseUp(event){
      window.removeEventListener('mousemove', MouseMove);
      window.removeEventListener('mouseup', MouseUp);
    }
    function MouseMove(event){
      mouse.lastMove.dx = event.x - mouse.current.x;
      mouse.lastMove.dy = event.y - mouse.current.y;
    
      mouse.current.x = event.x;
      mouse.current.y = event.y;
    
      const rotations = 2;
      rotation.y += mouse.lastMove.dx / window.innerWidth * Math.PI*2 * rotations;
      rotation.x -= mouse.lastMove.dy / window.innerHeight * Math.PI*2 * rotations;
    
      UpdateSceneTransforms();
    }
    function OnScroll(event){
      zoom += event.deltaY / 5000;
      UpdateSceneTransforms();
      event.preventDefault();
      return false;
    }
    
    function UpdateSceneTransforms(){
      cameraElement.style.transform = 'rotateX('+rotation.x+'rad) rotateY('+rotation.y+'rad) rotateZ('+rotation.z+'rad)';
      zoomElement.style.transform  = 'scale('+zoom+', '+zoom+')';
      zoomElement.style.transform += ' translateX('+pan.x+'px) translateY('+pan.y+'px) translateZ('+pan.z+'px)';
    }
    
    
    (function Constructor(){
      CreateSceneElement();
      BindMouse();
    }).apply(self, arguments);
  }
  
  window.Scene = Scene;
  
})();