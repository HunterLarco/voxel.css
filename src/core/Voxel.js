(function(){
  
  // EVENTS
  //    onCubeClick
  //    onTopClick
  //    onBottomClick
  //    onFrontClick
  //    onBackClick
  //    onLeftClick
  //    onRightClick
  function Voxel(){
    var self = this;
    var undefined;
    
    
    const EMPTYGIF = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    
    
    var cubeElement;
    var animElement;
    var faces = {};
    var mesh = {};
    
    var dimension = 0;
    
    var parentScene;
    
    
    self.setMesh = SetMesh;
    self.getMesh = GetMesh;
    
    self.animUp = AnimUp;
    self.animDown = AnimDown;
    self.addToScene = AddToScene;
    self.removeFromScene = RemoveFromScene;
    
    self.setDimension = SetDimension;
    self.getDimension = GetDimension;
    
    self.getDomElement = GetDomElement;
    
    self.clone = Clone;
    
    
    function SetMesh(_mesh){
      if(_mesh === undefined) return;
      
      for(var label in faces){
        var faceMesh = _mesh[label];
        if (faceMesh === undefined) continue;
        mesh[label] = faceMesh;
        if (faceMesh instanceof Array)
          new voxelcss.SyncedGif(faceMesh, 320).attach(faces[label]);
        else
          faces[label].src = faceMesh;
      }
    }
    function GetMesh(){
      return mesh;
    }
    
    function AnimUp(scene){
      if(scene === undefined)
        throw 'Scene required to add voxel to scene';
      
      parentScene = scene;
      animElement.setAttribute('class', 'anim up');
      AppendToScene();
    }
    function AnimDown(scene){
      if(scene === undefined)
        throw 'Scene required to add voxel to scene';
      
      parentScene = scene;
      animElement.setAttribute('class', 'anim down');
      AppendToScene();
    }
    function AddToScene(scene){
      if(scene === undefined)
        throw 'Scene required to add voxel to scene';
      
      parentScene = scene;
      animElement.setAttribute('class', 'anim');
      AppendToScene();
    }
    function RemoveFromScene(){
      if(parentScene === undefined) return;
      parentScene.removeChild(cubeElement);
    }
    
    function SetDimension(dim){
      if(dim === undefined || typeof dim != 'number') 
        return dimension;
      
      var old = dimension;
      dimension = dim;
      return old;
    }
    function GetDimension(){
      return dimension;
    }
    
    function GetDomElement(){
      return cubeElement;
    }
    
    function Clone(){
      return new voxelcss.Voxel(
        self.getPositionX(),
        self.getPositionY(),
        self.getPositionZ(),
        dimension,
        { mesh: mesh }
      );
    }
    
  
    function CreateCube(){
      cubeElement = CreateElem('div', 'cube');
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
      wrapper.addEventListener('contextmenu', OnVoxelClick);
      
      var image = CreateElem('img', '');
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
      var position = self.getPosition();
      cubeElement.style.transform = 'translate3d('+position.x+'px, '+-position.y+'px, '+position.z+'px)';
    }
    function AppendToScene(){
      parentScene.appendChild(cubeElement);
    }
    
    function OnVoxelClick(event){
      event.preventDefault();
      
      self.triggerEvent('VoxelClick', {
        target: self
      });
      
      return false;
    }
    function OnTopClicked(){
      self.triggerEvent('TopClick', {
        target: self
      });
    }
    function OnBottomClicked(){
      self.triggerEvent('BottomClick', {
        target: self
      });
    }
    function OnLeftClicked(){
      self.triggerEvent('LeftClick', {
        target: self
      });
    }
    function OnRightClicked(){
      self.triggerEvent('RightClick', {
        target: self
      });
    }
    function OnFrontClicked(){
      self.triggerEvent('FrontClick', {
        target: self
      });
    }
    function OnBackClicked(){
      self.triggerEvent('BackClick', {
        target: self
      });
    }
  
  
    (function Constructor(x, y, z, dim, options){
      voxelcss.interfaces.Positioned(voxelcss.interfaces.EventListener(self));
      self.addEventListener('move', UpdatePosition);
      
      SetDimension(dim);
      CreateCube();
      
      self.setPosition(x, y, z);
    
      SetMesh({
        'top': EMPTYGIF,
        'bottom': EMPTYGIF,
        'front': EMPTYGIF,
        'back': EMPTYGIF,
        'left': EMPTYGIF,
        'right': EMPTYGIF
      });
      
      if(options !== undefined && options.mesh !== undefined)
        SetMesh(options.mesh);
    }).apply(self, arguments);
  }
  
  voxelcss.Voxel = Voxel;
  
})();