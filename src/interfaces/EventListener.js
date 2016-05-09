(function(window) {

  if (!window.voxelcss) {
    window.voxelcss = {};
  }

  if (!window.voxelcss.interfaces) {
    window.voxelcss.interfaces = {};
  }

  function EventListener(obj) {
    var self = obj || new Function();
    var listeners = {};

    function AddEventListener(event_name, funct) {
      event_name = 'on'+event_name;

      if (typeof funct != 'function') {
        return;
      }

      if (!listeners[event_name]) {
        listeners[event_name] = [];
      }

      if (listeners[event_name].indexOf(funct) > -1) {
        return;
      }

      listeners[event_name].push(funct);
    }

    function RemoveEventListener(event_name, funct) {
      event_name = 'on'+event_name;

      if (!listeners[event_name]) {
        return;
      }

      listeners[event_name].splice(listeners[event_name].indexOf(funct), 1);
    }

    function TriggerEvent(event_name, event) {
      var listener_array;
      var listener;
      var i;

      event_name = 'on' + event_name;
      listener_array = listeners[event_name];

      if (!listener_array) {
        return;
      }

      for (i = 0; listener = listener_array[i++];) {
        listener(event);
      }
    }

    self.addEventListener = AddEventListener;
    self.removeEventListener = RemoveEventListener;
    self.triggerEvent = TriggerEvent;

    return self;
  }

  voxelcss.interfaces.EventListener = EventListener;

})(window);
