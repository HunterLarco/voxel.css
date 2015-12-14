(function(){
  
  function SyncedGif(){
    var self = this;
    var undefined;
    
    
    var imageSequence;
    var index = 0;
    
    var duration;
    var timingPerCycle;
    
    var isRunning = false;
    
    var images = [];
    
    
    self.run = Run;
    self.stop = Stop;
    self.isRunning = IsRunning;
    
    self.getImage = GetImage;
    self.attach = Attach;
    self.getDuration = GetDuration;
    
    
    function Run(){
      isRunning = true;
      CycleImage();
    }
    function Stop(){
      isRunning = false;
    }
    function IsRunning(){
      return isRunning;
    }
    
    function GetImage(){
      var image = new Image();
      image.src = imageSequence[index];
      
      images.push(images);
      
      return image;
    }
    function Attach(image){
      images.push(image);
      image.src = imageSequence[index];
    }
    function GetDuration(){
      return duration;
    }
    
    
    function CatchupRun(partialIndex){
      isRunning = true;
      index = Math.floor(partialIndex);
      
      setTimeout(CycleImage, (index + 1 - partialIndex) * timingPerCycle);
    }
    function CycleImage(){
      if(!isRunning) return;
      
      index += 1;
      index %= imageSequence.length;
      
      for(var i=0,image; image=images[i++];)
        image.src = imageSequence[index];
      
      setTimeout(CycleImage, timingPerCycle);
    }
    
    
    (function Constructor(_imageSequence, _duration){
      imageSequence = _imageSequence;
      duration = _duration;
      timingPerCycle = duration / imageSequence.length;
      
      var partialIndex = (Date.now() % duration) / timingPerCycle;
      CatchupRun(partialIndex);
    }).apply(self, arguments);
  }
  
  window.SyncedGif = SyncedGif;
  
})();