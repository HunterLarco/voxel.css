(function(window) {

  if (!window.voxelcss) {
    window.voxelcss = {};
  }

  if (!window.voxelcss.interfaces) {
    window.voxelcss.interfaces = {};
  }

  // EVENTS
  //   onmove
  function Positioned(obj) {
    var self = obj || new Function();

    var position = {
      x: 0,
      y: 0,
      z: 0
    };
    var canTriggerEvent = true;

    function SetPosition(x, y, z) {
      var old;
      canTriggerEvent = false;

      old = {
        x: SetPositionX(x),
        y: SetPositionY(y),
        z: SetPositionZ(z)
      };

      canTriggerEvent = true;
      self.triggerEvent('move');

      return old;
    }

    function SetPositionX(x) {
      var old;

      if (x === undefined || typeof x != 'number') {
        return position.x;
      }

      old = position.x;
      position.x = x;

      if (canTriggerEvent) {
        self.triggerEvent('move');
      }

      return old;
    }

    function SetPositionY(y) {
      var old;

      if (y === undefined || typeof y != 'number') {
        return position.y;
      }

      old = position.y;
      position.y = y;

      if (canTriggerEvent) {
        self.triggerEvent('move');
      }

      return old;
    }

    function SetPositionZ(z) {
      var old;

      if (z === undefined || typeof z != 'number') {
        return position.z;
      }

      old = position.z;
      position.z = z;

      if (canTriggerEvent) {
        self.triggerEvent('move');
      }

      return old;
    }

    function Translate(x, y, z) {
      var old;

      canTriggerEvent = false;

      old = {
        x: TranslateX(x),
        y: TranslateY(y),
        z: TranslateZ(z)
      };

      canTriggerEvent = true;
      self.triggerEvent('move');

      return old;
    }

    function TranslateX(x) {
      if (x === undefined || typeof x != 'number') {
        return position.x;
      }

      return SetPositionX(x + position.x);
    }

    function TranslateY(y) {
      if (y === undefined || typeof y != 'number') {
        return position.y;
      }

      return SetPositionY(y + position.y);
    }

    function TranslateZ(z) {
      if (z === undefined || typeof z != 'number') {
        return position.z;
      }

      return SetPositionZ(z + position.z);
    }

    function GetPosition() {
      return {
        x: position.x,
        y: position.y,
        z: position.z
      };
    }

    function GetPositionX() {
      return position.x;
    }

    function GetPositionY() {
      return position.y;
    }

    function GetPositionZ() {
      return position.z;
    }

    self.setPosition  = SetPosition;
    self.setPositionX = SetPositionX;
    self.setPositionY = SetPositionY;
    self.setPositionZ = SetPositionZ;

    self.translate  = Translate;
    self.translateX = TranslateX;
    self.translateY = TranslateY;
    self.translateZ = TranslateZ;

    self.getPosition  = GetPosition;
    self.getPositionX = GetPositionX;
    self.getPositionY = GetPositionY;
    self.getPositionZ = GetPositionZ;

    return self;
  }

  voxelcss.interfaces.Positioned = Positioned;

})(window);
