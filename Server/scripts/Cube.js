(function(){
  
  function Cube(){
    var self = this;
    var undefined;
  
  
    const EMPTYGIF = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  
  
    var listeners = {};
  
    var cubeElement;
    var animElement;
    var faces = {}
    
    var mesh;
  
    var dimension;
    var position = {x:0, y:0, z:0};
    
    var parentScene;
    
    
    self.setMesh = SetMesh;
    self.getMesh = GetMesh;
    
    self.animUp = AnimUp;
    self.animDown = AnimDown;
    self.addToScene = AddToScene;
    self.removeFromScene = RemoveFromScene;
    
    self.setPosition = SetPosition;
    self.setPositionX = SetPositionX;
    self.setPositionY = SetPositionY;
    self.setPositionZ = SetPositionZ;
    
    self.getPosition = GetPosition;
    self.getDimension = GetDimension;
    
    self.addEventListener = AddEventListener;
    self.removeEventListener = RemoveEventListener;
    
    self.enableHoverState = EnableHoverState;
    self.disableHoverState = DisableHoverState;
    
    
    function SetMesh(_mesh){
      mesh = _mesh;
      
      for(var label in faces){
        var faceMesh = mesh[label];
        if (faceMesh === undefined) continue;
        if (faceMesh instanceof Array)
          new SyncedGif(faceMesh, 320).attach(faces[label]);
        else
          faces[label].src = faceMesh;
      }
    }
    function GetMesh(){
      return mesh;
    }
    
    function GetPosition(){
      return position;
    }
    function GetDimension(){
      return dimension;
    }
    
    function AnimUp(scene){
      parentScene = scene;
      animElement.setAttribute('class', 'anim up');
      AppendToScene();
    }
    function AnimDown(scene){
      parentScene = scene;
      animElement.setAttribute('class', 'anim down');
      AppendToScene();
    }
    function AddToScene(scene){
      parentScene = scene;
      AppendToScene();
    }
    function RemoveFromScene(){
      if(parentScene === undefined) return;
      parentScene.removeChild(cubeElement);
    }
    
    function SetPosition(x, y, z){
      if(x !== undefined) position.x = x;
      if(y !== undefined) position.y = y;
      if(z !== undefined) position.z = z;
      UpdatePosition();
    }
    function SetPositionX(x){
      position.x = x;
      UpdatePosition();
    }
    function SetPositionY(y){
      position.y = y;
      UpdatePosition();
    }
    function SetPositionZ(z){
      position.z = z;
      UpdatePosition();
    }
    
    function EnableHoverState(){
      cubeElement.setAttribute('class', 'cube editable');
    }
    function DisableHoverState(){
      cubeElement.setAttribute('class', 'cube');
    }
    
  
    function CreateCube(){
      cubeElement = CreateElem('div', 'cube editable');
      animElement = CreateElem('div', 'anim');
    
      CreateFace('top');
      CreateFace('bottom');
      CreateFace('front');
      CreateFace('back');
      CreateFace('left');
      CreateFace('right');
    
      cubeElement.appendChild(animElement);
    }
    function CreateFace(label){
      var wrapper = CreateElem('div', 'face '+label);
      wrapper.style.width = dimension + 'px';
      wrapper.style.height = dimension + 'px';
      wrapper.style.marginLeft = -dimension/2 + 'px';
      wrapper.style.marginTop = -dimension/2 + 'px';
      
      switch(label){
        case 'top'   :
          wrapper.style.transform = 'rotateX(90deg) translate3d(0, 0,  '+dimension/2+'px)';
          wrapper.addEventListener('click', OnTopClicked);
        break;
        case 'bottom':
          wrapper.style.transform = 'rotateX(90deg) translate3d(0, 0, -'+dimension/2+'px)';
          wrapper.addEventListener('click', OnBottomClicked);
        break;
        case 'left'  :
          wrapper.style.transform = 'rotateY(90deg) translate3d(0, 0, -'+dimension/2+'px)';
          wrapper.addEventListener('click', OnLeftClicked);
        break;
        case 'right' :
          wrapper.style.transform = 'rotateY(90deg) translate3d(0, 0,  '+dimension/2+'px)';
          wrapper.addEventListener('click', OnRightClicked);
        break;
        case 'front' :
          wrapper.style.transform = 'translate3d(0, 0,  '+dimension/2+'px)';
          wrapper.addEventListener('click', OnFrontClicked);
        break;
        case 'back'  :
          wrapper.style.transform = 'translate3d(0, 0, -'+dimension/2+'px)';
          wrapper.addEventListener('click', OnBackClicked);
        break;
      }
      wrapper.addEventListener('contextmenu', OnCubeClicked);
      
      var image = CreateElem('img', '');
      image.src = EMPTYGIF;
      faces[label] = image;
      
      wrapper.appendChild(image);
      animElement.appendChild(wrapper);
    }
    function CreateElem(type, cls){
      var elem = document.createElement(type);
      elem.setAttribute('class', cls);
      return elem;
    }
    
    function UpdatePosition(){
      cubeElement.style.transform = 'translate3d('+position.x+'px, '+-position.y+'px, '+position.z+'px)';
    }
    function AppendToScene(){
      parentScene.appendChild(cubeElement);
    }
    
    function OnCubeClicked(event){
      event.preventDefault();
      
      TriggerEvent('CubeClick', {
        target: self
      });
      
      return false;
    }
    function OnTopClicked(){
      TriggerEvent('TopClick', {
        target: self
      });
    }
    function OnBottomClicked(){
      TriggerEvent('BottomClick', {
        target: self
      });
    }
    function OnLeftClicked(){
      TriggerEvent('LeftClick', {
        target: self
      });
    }
    function OnRightClicked(){
      TriggerEvent('RightClick', {
        target: self
      });
    }
    function OnFrontClicked(){
      TriggerEvent('FrontClick', {
        target: self
      });
    }
    function OnBackClicked(){
      TriggerEvent('BackClick', {
        target: self
      });
    }
    
    function AddEventListener(event_name, funct){
      event_name = 'on'+event_name;
      if(typeof funct != 'function') return;
      if(!listeners[event_name]) listeners[event_name] = [];
      if(listeners[event_name].indexOf(funct) > -1) return;
      listeners[event_name].push(funct);
    }
    function RemoveEventListener(event_name, funct){
      event_name = 'on'+event_name;
      if(!listeners[event_name]) return;
      listeners[event_name].splice(listeners[event_name].indexOf(funct), 1);
    }
    function TriggerEvent(event_name, event){
      event_name = 'on'+event_name;
      var listener_array = listeners[event_name];
      if(!listener_array) return;
      for(var i=0,listener; listener=listener_array[i++];)
        listener(event);
    }
  
  
    (function Constructor(x, y, z, dim){
      position = {x:x, y:y, z:z};
      dimension = dim;
      
      CreateCube();
      UpdatePosition();
    }).apply(self, arguments);
  }
  
  window.Cube = Cube;
  
})();