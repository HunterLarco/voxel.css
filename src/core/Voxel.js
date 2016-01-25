(function(){
  
  if(!window.voxelcss) window.voxelcss = {};
  
  // EVENTS
  //    onCubeClick
  //    onTopClick
  //    onBottomClick
  //    onFrontClick
  //    onBackClick
  //    onLeftClick
  //    onRightClick
  //    onMeshChange
  function Voxel(){
    var self = this;
    var undefined;
    
    
    var cubeElement;
    var animElement;
    var faces = {};
    var mesh;
    
    var dimension = 0;
    
    var parentScene;
    
    
    self.setMesh = SetMesh;
    self.getMesh = GetMesh;
    
    self.animUp = AnimUp;
    self.animDown = AnimDown;
    self.addToScene = AddToScene;
    self.removeFromScene = RemoveFromScene;
    self.setParentScene = SetParentScene;
    self.removeParentScene = RemoveParentScene;
    
    self.setDimension = SetDimension;
    self.getDimension = GetDimension;
    
    self.getDomElement = GetDomElement;
    
    self.clone = Clone;
    
    self.updateLightSource = UpdateLightSource;
    
    
    function SetMesh(_mesh){
      if(_mesh === undefined || _mesh.constructor !== voxelcss.Mesh) return;
      var old = mesh;
      if(!!old) old.removeEventListener('change', OnMeshChange);
      mesh = _mesh;
      mesh.addEventListener('change', OnMeshChange);
      ApplyMesh();
      return old;
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
    function SetParentScene(scene){
      parentScene = scene;
    }
    function RemoveParentScene(){
      parentScene = undefined;
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
    
    function UpdateLightSource(lightSources){
      var front  = 1;
      var back   = 1;
      var left   = 1;
      var right  = 1;
      var top    = 1;
      var bottom = 1;
      
      for(var i=0,lightSource; lightSource=lightSources[i++];){
        var brightness = lightSource.getBrightness();
        var scale = brightness[1] - brightness[0];
        var shift = 1 - brightness[1];
      
        var x = lightSource.getPositionX();
        var y = lightSource.getPositionY();
        var z = lightSource.getPositionZ();

        if(back > 0){
          var result = AngleFromLightSource(x, y, z, {A:0, B:0, C:-1});
          var angle = result.angle;
          var percent = 1 - angle / (Math.PI/2);
          percent = ApplyLightingCurve(percent);
          percent = Math.min(1, percent + Math.pow(result.distance / lightSource.getTravelDistance(), 6));
          var opacity = (result.direction < 0 ? 1 : percent) * scale + shift;
          back = Math.max(0, back - (1 - opacity));
        }
      
        if(front > 0){
          var result = AngleFromLightSource(x, y, z, {A:0, B:0, C:1});
          var angle = result.angle;
          var percent = 1 - angle / (Math.PI/2);
          percent = ApplyLightingCurve(percent);
          percent = Math.min(1, percent + Math.pow(result.distance / lightSource.getTravelDistance(), 6));
          var opacity = (result.direction < 0 ? 1 : percent) * scale + shift;
          front = Math.max(0, front - (1 - opacity));
        }
      
        if(left > 0){
          var result = AngleFromLightSource(x, y, z, {A:-1, B:0, C:0});
          var angle = result.angle;
          var percent = 1 - angle / (Math.PI/2);
          percent = ApplyLightingCurve(percent);
          percent = Math.min(1, percent + Math.pow(result.distance / lightSource.getTravelDistance(), 6));
          var opacity = (result.direction < 0 ? 1 : percent) * scale + shift;
          left = Math.max(0, left - (1 - opacity));
        }
      
        if(right > 0){
          var result = AngleFromLightSource(x, y, z, {A:1, B:0, C:0});
          var angle = result.angle;
          var percent = 1 - angle / (Math.PI/2);
          percent = ApplyLightingCurve(percent);
          percent = Math.min(1, percent + Math.pow(result.distance / lightSource.getTravelDistance(), 6));
          var opacity = (result.direction < 0 ? 1 : percent) * scale + shift;
          right = Math.max(0, right - (1 - opacity));
        }
      
        if(top > 0){
          var result = AngleFromLightSource(x, y, z, {A:0, B:1, C:0});
          var angle = result.angle;
          var percent = 1 - angle / (Math.PI/2);
          percent = ApplyLightingCurve(percent);
          percent = Math.min(1, percent + Math.pow(result.distance / lightSource.getTravelDistance(), 6));
          var opacity = (result.direction < 0 ? 1 : percent) * scale + shift;
          top = Math.max(0, top - (1 - opacity));
        }
      
        if(bottom > 0){
          var result = AngleFromLightSource(x, y, z, {A:0, B:-1, C:0});
          var angle = result.angle;
          var percent = 1 - angle / (Math.PI/2);
          percent = ApplyLightingCurve(percent);
          percent = Math.min(1, percent + Math.pow(result.distance / lightSource.getTravelDistance(), 6));
          var opacity = (result.direction < 0 ? 1 : percent) * scale + shift;
          bottom = Math.max(0, bottom - (1 - opacity));
        }
      }
      
      faces['front'].shader.style.opacity  = front;
      faces['back'].shader.style.opacity   = back;
      faces['left'].shader.style.opacity   = left;
      faces['right'].shader.style.opacity  = right;
      faces['top'].shader.style.opacity    = top;
      faces['bottom'].shader.style.opacity = bottom;
    }
    // changes how light something is while in the light
    // and how dark something is while in the dark
    // AKA how much light means full brightness
    function ApplyLightingCurve(percent){
      return Math.pow(percent, 3);
    }
    function AngleFromLightSource(x, y, z, plane){
      var rotMatrix = GenRotMatrix(parentScene.getRotationX(), -parentScene.getRotationY(), parentScene.getRotationZ());
      var point = {x:x, y:y, z:z};
      var rotatedPoint = Rotate(point, rotMatrix);
      rotatedPoint = {
         x: rotatedPoint.x - self.getPositionX() - plane.A * self.getDimension()/2,
         y: rotatedPoint.y - self.getPositionY() - plane.B * self.getDimension()/2,
         z: rotatedPoint.z - self.getPositionZ() - plane.C * self.getDimension()/2
      }
      var distance = Math.sqrt(Math.pow(rotatedPoint.x, 2) + Math.pow(rotatedPoint.y, 2) + Math.pow(rotatedPoint.z, 2));
      var direction = Math.abs(plane.C) == 1 ? plane.C * rotatedPoint.z : (Math.abs(plane.B) == 1 ? plane.B * rotatedPoint.y : plane.A * rotatedPoint.x);
      var angle = Math.asin(Math.abs(rotatedPoint.x * plane.A + rotatedPoint.y * plane.B + rotatedPoint.z * plane.C) / (Math.sqrt(Math.pow(rotatedPoint.x, 2) + Math.pow(rotatedPoint.y, 2) + Math.pow(rotatedPoint.z, 2))));
      return {angle:angle, direction:direction, distance:distance};
    }
    function GenRotMatrix(rotX, rotY, rotZ){
      var rot_x = [
        [1, 0             , 0              ],
        [0, Math.cos(rotX), -Math.sin(rotX)],
        [0, Math.sin(rotX),  Math.cos(rotX)]
      ],
      rot_y = [
        [ Math.cos(rotY), 0, Math.sin(rotY)],
        [0              , 1, 0             ],
        [-Math.sin(rotY), 0, Math.cos(rotY)]
      ],
      rot_z = [
        [Math.cos(rotZ), -Math.sin(rotZ), 0],
        [Math.sin(rotZ),  Math.cos(rotZ), 0],
        [0             ,  0             , 1]
      ]
      return MultiplyMatrices(MultiplyMatrices(rot_z, rot_y), rot_x);
    }
    function Rotate(point, rotMatrix){
      var column_vector = [[point.x], [point.y], [point.z]],
      rotated = MultiplyMatrices(rotMatrix, column_vector);
		
      return {
        x: rotated[0][0],
        y: rotated[1][0],
        z: rotated[2][0]
      }
    }
    function MultiplyMatrices(a, b) {
      var aNumRows = a.length, aNumCols = a[0].length,
      bNumRows = b.length, bNumCols = b[0].length,
      m = new Array(aNumRows);  // initialize array of rows
      for (var r = 0; r < aNumRows; ++r) {
        m[r] = new Array(bNumCols); // initialize the current row
        for (var c = 0; c < bNumCols; ++c) {
          m[r][c] = 0;             // initialize the current cell
          for (var i = 0; i < aNumCols; ++i) {
            m[r][c] += a[r][i] * b[i][c];
          }
        }
      }
      return m;
    }
    
    
    function OnMeshChange(){
      ApplyMesh();
      self.triggerEvent('MeshChange', {target:self, mesh:mesh});
    }
    function ApplyMesh(){
      var _mesh = mesh.getFaces();
      for(var label in faces){
        var faceMesh = _mesh[label];
        if (faceMesh instanceof voxelcss.ImageFace){
          faces[label].src = faceMesh.getSource();
          faces[label].removeAttribute('class');
        }else if(faceMesh instanceof voxelcss.ColorFace){
          var faceElem = faces[label].parentElement;
          faceElem.style.background = '#' + faceMesh.getHex();
          faces[label].setAttribute('class', 'colored');
        }
      }
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
          wrapper.style.transform = 'rotateX(90deg) translateZ('+dimension/2+'px)';
          wrapper.addEventListener('click', OnTopClicked);
        break;
        case 'bottom':
          wrapper.style.transform = 'rotateX(90deg) translateZ(-'+dimension/2+'px)';
          wrapper.addEventListener('click', OnBottomClicked);
        break;
        case 'left'  :
          wrapper.style.transform = 'rotateY(90deg) translateZ(-'+dimension/2+'px)';
          wrapper.addEventListener('click', OnLeftClicked);
        break;
        case 'right' :
          wrapper.style.transform = 'rotateY(90deg) translateZ('+dimension/2+'px)';
          wrapper.addEventListener('click', OnRightClicked);
        break;
        case 'front' :
          wrapper.style.transform = 'translateZ('+dimension/2+'px)';
          wrapper.addEventListener('click', OnFrontClicked);
        break;
        case 'back'  :
          wrapper.style.transform = 'translateZ(-'+dimension/2+'px)';
          wrapper.addEventListener('click', OnBackClicked);
        break;
      }
      wrapper.addEventListener('contextmenu', OnVoxelClick);
      
      var image = CreateElem('img', '');
      faces[label] = image;
      
      var shader = CreateElem('div', 'shader');
      faces[label].shader = shader;
      
      wrapper.appendChild(image);
      wrapper.appendChild(shader);
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
      parentScene.add(self);
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
    
      SetMesh(new voxelcss.Mesh());
      if(options !== undefined && options.mesh !== undefined)
        SetMesh(options.mesh);
    }).apply(self, arguments);
  }
  
  voxelcss.Voxel = Voxel;
  
})();