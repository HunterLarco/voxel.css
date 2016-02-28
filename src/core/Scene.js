(function(){
  
  if(!window.voxelcss) window.voxelcss = {};
  
  // EVENTS
  //    onorbit
  //    onpan
  //    onzoom
  function Scene(){
    var self = this;
    var undefined;
    
    
    var parentContainer;
    var sceneElement;
    var zoomElement;
    var cameraElement;
    var isAttached = false;
    
    var rotation = {x:0, y:0, z:0};
    var pan = {x:0, y:0, z:0};
    var zoom = 1;
    
    var mouse = {
      start: {x:0, y:0},
      current: {x:0, y:0},
      lastMove: {x:0, y:0},
      shiftDown: false
    }
    
    var canOrbit = true;
    var canPan = true;
    var canZoom = true;
    
    var lightSources = [];
    var voxels = [];
    
    
    self.rotate = Rotate;
    self.rotateX = RotateX;
    self.rotateY = RotateY;
    self.rotateZ = RotateZ;
    
    self.setRotation  = SetRotation;
    self.setRotationX = SetRotationX;
    self.setRotationY = SetRotationY;
    self.setRotationZ = SetRotationZ;
    
    self.getRotation  = GetRotation;
    self.getRotationX = GetRotationX;
    self.getRotationY = GetRotationY;
    self.getRotationZ = GetRotationZ;
    
    self.pan  = Pan;
    self.panX = PanX;
    self.panY = PanY;
    self.panZ = PanZ;
    
    self.setPan  = SetPan;
    self.setPanX = SetPanX;
    self.setPanY = SetPanY;
    self.setPanZ = SetPanZ;
    
    self.getPan  = GetPan;
    self.getPanX = GetPanX;
    self.getPanY = GetPanY;
    self.getPanZ = GetPanZ;
    
    self.zoom = Zoom;
    self.setZoom = SetZoom;
    self.getZoom = GetZoom;
    
    self.attach = Attach;
    self.detach = Detach;
    self.isAttached = IsAttached;
    self.getParentElement = GetParementElement;
    
    self.enableOrbit = EnableOrbit;
    self.disableOrbit = DisableOrbit;
    self.canOrbit = CanOrbit;

    self.enablePan = EnablePan;
    self.disablePan = DisablePan;
    self.canPan = CanPan;
    
    self.enableZoom = EnableZoom;
    self.disableZoom = DisableZoom;
    self.canZoom = CanZoom;
    
    self.add = AddVoxel;
    self.remove = RemoveVoxel;
    self.getVoxels = GetVoxels;
    
    self.addLightSource = AddLightSource;
    self.removeLightSource = RemoveLightSource;
    self.getLightSources = GetLightSources;
    
    
    function Rotate(x, y, z){
      return {
        x: RotateX(x),
        y: RotateY(y),
        z: RotateZ(z)
      }
    }
    function RotateX(x){
      if(x === undefined || typeof x != 'number')
        return rotation.x;
      
      var old = rotation.x;
      rotation.x += x;
      UpdateSceneTransforms();
      return old;
    }
    function RotateY(y){
      if(y === undefined || typeof y != 'number')
        return rotation.y;
      
      var old = rotation.y;
      rotation.y += y;
      UpdateSceneTransforms();
      return old;
    }
    function RotateZ(z){
      if(z === undefined || typeof z != 'number')
        return rotation.z;
      
      var old = rotation.z;
      rotation.z += z;
      UpdateSceneTransforms();
      return old;
    }
    
    function SetRotation(x, y, z){
      var old = {
        x: SetRotationX(x),
        y: SetRotationY(y),
        z: SetRotationZ(z)
      };
      
      UpdateSceneTransforms();
      return old;
    }
    function SetRotationX(x){
      if(x === undefined || typeof x != 'number')
        return rotation.x;
      
      var old = rotation.x;
      rotation.x = x;
      UpdateSceneTransforms();
      return old;
    }
    function SetRotationY(y){
      if(y === undefined || typeof y != 'number')
        return rotation.y;
      
      var old = rotation.y;
      rotation.y = y;
      UpdateSceneTransforms();
      return old;
    }
    function SetRotationZ(z){
      if(z === undefined || typeof z != 'number')
        return rotation.z;
      
      var old = rotation.z;
      rotation.z = z;
      UpdateSceneTransforms();
      return old;
    }
    
    function GetRotation(){
      return {
        x: rotation.x,
        y: rotation.y,
        z: rotation.z
      };
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
    
    function Pan(x, y, z){
      return {
        x: PanX(x),
        y: PanY(y),
        z: PanZ(z)
      }
    }
    function PanX(x){
      if(x === undefined || typeof x != 'number')
        return pan.x;
      
      var old = pan.x;
      pan.x += x;
      UpdateSceneTransforms();
      return old;
    }
    function PanY(y){
      if(y === undefined || typeof y != 'number')
        return pan.y;
      
      var old = pan.y;
      pan.y += y;
      UpdateSceneTransforms();
      return old;
    }
    function PanZ(z){
      if(z === undefined || typeof z != 'number')
        return pan.z;
      
      var old = pan.z;
      pan.z += z;
      UpdateSceneTransforms();
      return old;
    }
    
    function SetPan(x, y, z){
      var old = {
        x: SetPanX(x),
        y: SetPanY(y),
        z: SetPanZ(z)
      };
      
      UpdateSceneTransforms();
      return old;
    }
    function SetPanX(x){
      if(x === undefined || typeof x != 'number')
        return pan.x;
      
      var old = pan.x;
      pan.x = x;
      UpdateSceneTransforms();
      return old;
    }
    function SetPanY(y){
      if(y === undefined || typeof y != 'number')
        return pan.y;
      
      var old = pan.y;
      pan.y = y;
      UpdateSceneTransforms();
      return old;
    }
    function SetPanZ(z){
      if(z === undefined || typeof z != 'number')
        return pan.z;
      
      var old = pan.z;
      pan.z = z;
      UpdateSceneTransforms();
      return old;
    }
    
    function GetPan(){
      return {
        x: pan.x,
        y: pan.y,
        z: pan.z
      };
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
    
    function Zoom(_zoom){
      if(_zoom === undefined || typeof _zoom != 'number')
        return zoom;
      
      var old = zoom;
      zoom += _zoom;
      UpdateSceneTransforms();
      return old;
    }
    function SetZoom(_zoom){
      if(_zoom === undefined || typeof _zoom != 'number')
        return zoom;
      
      var old = zoom;
      zoom = _zoom;
      UpdateSceneTransforms();
      return zoom;
    }
    function GetZoom(){
      return zoom;
    }
    
    function Attach(elem){
      if(isAttached) throw 'Cannot attach currently attached scene';
      
      parentContainer = elem;
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
    function GetParementElement(){
      return parentContainer;
    }
    
    function EnableOrbit(){
      if(canOrbit) return;
      canOrbit = true;
    }
    function DisableOrbit(){
      if(!canOrbit) return;
      canOrbit = false;
    }
    function CanOrbit(){
      return canOrbit;
    }
    
    function EnablePan(){
      if(canPan) return;
      canPan = true;
    }
    function DisablePan(){
      if(!canPan) return;
      canPan = false;
    }
    function CanPan(){
      return canPan;
    }
    
    function EnableZoom(){
      if(canZoom) return;
      canZoom = true;
    }
    function DisableZoom(){
      if(!canZoom) return;
      canZoom = false;
    }
    function CanZoom(){
      return canZoom;
    }
    
    function AddVoxel(voxel){
      cameraElement.appendChild(voxel.getDomElement());
      voxels.push(voxel);
      voxel.setParentScene(self);
      if(lightSources.length !== 0) voxel.updateLightSource(lightSources);
    }
    function RemoveVoxel(voxel){
      cameraElement.removeChild(voxel.getDomElement());
      voxels.splice(voxels.indexOf(voxel), 1);
      voxel.removeParentScene();
    }
    function GetVoxels(){
      return voxels.concat([]);
    }
    
    function AddLightSource(source){
      var index = lightSources.indexOf(source);
      if(index !== -1) return false;
      
      source.addEventListener('change', UpdateVoxelLighting);
      source.addEventListener('move', UpdateVoxelLighting);
      
      lightSources.push(source);
      UpdateVoxelLighting();
      
      return true;
    }
    function RemoveLightSource(source){
      var index = lightSources.indexOf(source);
      if(index === -1) return false;
      
      source.removeEventListener('change', UpdateVoxelLighting);
      source.removeEventListener('move', UpdateVoxelLighting);
      
      lightSources.splice(index, 1);
      UpdateVoxelLighting();
      
      return true;
    }
    function GetLightSources(){
      return lightSources;
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
      sceneElement.addEventListener('wheel', OnScroll);
    }
    function MouseDown(event){
      mouse.start.x = event.x || event.clientX;
      mouse.start.y = event.y || event.clientY;
    
      mouse.current.x = event.x || event.clientX;
      mouse.current.y = event.y || event.clientY;
    
      window.addEventListener('mousemove', MouseMove);
      window.addEventListener('mouseup', MouseUp);
    }
    function MouseUp(event){
      window.removeEventListener('mousemove', MouseMove);
      window.removeEventListener('mouseup', MouseUp);
    }
    function MouseMove(event){
      mouse.lastMove.dx = (event.x || event.clientX) - mouse.current.x;
      mouse.lastMove.dy = (event.y || event.clientY) - mouse.current.y;
    
      mouse.current.x = event.x || event.clientX;
      mouse.current.y = event.y || event.clientY;
      
      if (canPan && mouse.shiftDown){
        Pan(mouse.lastMove.dx, mouse.lastMove.dy);
        UpdateSceneTransforms();
        
        self.triggerEvent('pan', {
          rotation: GetRotation(),
          pan: GetPan(),
          zoom: GetZoom(),
          target: self
        });
      }else if(canOrbit){
        var rotations = 1;
        rotation.x -= mouse.lastMove.dy / window.innerHeight * Math.PI*2 * rotations;
        UpdateSceneTransforms();
        
        self.triggerEvent('orbit', {
          rotation: GetRotation(),
          pan: GetPan(),
          zoom: GetZoom(),
          target: self
        });
      }
    }
    function OnScroll(event){
      if(!canZoom) return;
      
      zoom += event.deltaY / 5000;
      UpdateSceneTransforms();
      event.preventDefault();
      
      self.triggerEvent('zoom', {
        rotation: GetRotation(),
        pan: GetPan(),
        zoom: GetZoom(),
        target: self
      });
      return false;
    }
    
    function BindKeyboard(){
      window.addEventListener('keydown', KeyDown);
      window.addEventListener('keyup', KeyUp);
    }
    function KeyDown(event){
      if(event.keyCode === 16 || event.which === 16)
        mouse.shiftDown = true;
    }
    function KeyUp(event){
      if(event.keyCode === 16 || event.which === 16)
        mouse.shiftDown = false;
    }
    
    function UpdateSceneTransforms(){
      cameraElement.style.transform = 'rotateX('+rotation.x+'rad) rotateY('+rotation.y+'rad) rotateZ('+rotation.z+'rad)';
      zoomElement.style.transform  = 'scale('+zoom+', '+zoom+')';
      zoomElement.style.transform += ' translateX('+pan.x+'px) translateY('+pan.y+'px) translateZ('+pan.z+'px)';
      
      UpdateVoxelLighting();
    }
    function UpdateVoxelLighting(){
      if(lightSources.length === 0) return;
      for(var i=0,voxel; voxel=voxels[i++];)
        voxel.updateLightSource(lightSources);
    }
    
    
    (function Constructor(){
      voxelcss.interfaces.EventListener(self);
      
      CreateSceneElement();
      BindMouse();
      BindKeyboard();
    }).apply(self, arguments);
  }
  
  voxelcss.Scene = Scene;
  
})();
