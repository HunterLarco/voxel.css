(function(){
  
  function Cube(){
    var self = this;
    var undefined;
  
  
    const EMPTYGIF = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  
  
    var cubeElement;
    var animElement;
    var faces = {}
  
    var dimension;
    var position = {x:0, y:0, z:0};
    
    var parentScene;
    
    
    self.setMesh = SetMesh;
    
    self.animUp = AnimUp;
    self.animDown = AnimDown;
    
    
    function SetMesh(mesh){
      for(var label in faces){
        var faceMesh = mesh[label];
        if (faceMesh !== undefined)
          faces[label].src = faceMesh;
      }
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
        case 'top'   : wrapper.style.transform = 'rotateX(90deg) translate3d(0, 0,  '+dimension/2+'px)'; break;
        case 'bottom': wrapper.style.transform = 'rotateX(90deg) translate3d(0, 0, -'+dimension/2+'px)'; break;
        case 'left'  : wrapper.style.transform = 'rotateY(90deg) translate3d(0, 0,  '+dimension/2+'px)'; break;
        case 'right' : wrapper.style.transform = 'rotateY(90deg) translate3d(0, 0, -'+dimension/2+'px)'; break;
        case 'front' : wrapper.style.transform = 'translate3d(0, 0,  '+dimension/2+'px)'; break;
        case 'back'  : wrapper.style.transform = 'translate3d(0, 0, -'+dimension/2+'px)'; break;
      }
      
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
  
  
    (function Constructor(x, y, z, dim){
      position = {x:x, y:y, z:z};
      dimension = dim;
      
      CreateCube();
      UpdatePosition();
    }).apply(self, arguments);
  }
  
  window.Cube = Cube;
  
})();