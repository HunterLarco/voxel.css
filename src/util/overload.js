/* Overload.js 2.0.0
 * -----------------
 *
 * (c) 2015 Hunter Larco <larcolabs.com>
 * Overload.js may be freely distributed under the MIT license.
 * For all details and documentation:
 * <https://github.com/HunterLarco/Overload.js>
*/

(function(){
  
  if(!window.voxelcss) window.voxelcss = {};
  if(!window.voxelcss.util) window.voxelcss.util = {};
	
  var Overload = new Object();
  Overload.function = function(defaultFunct){
    var undefined;
    if(defaultFunct === undefined || defaultFunct.constructor != Function)
      defaultFunct = function(){
        throw 'Function not implemented for given parameter list';
      };
    
    var funct = function(){
      return funct['__overload__'].apply(funct, arguments)
    };
    funct.__overload__ = defaultFunct;
    funct.overload = AddMethod.bind(funct);
    
    return funct;
  };
	
  function AddMethod(funct, types){
    var undefined;
    if(types == undefined || types.constructor != Array) types = [];
		
    var old = this['__overload__'];
		
    this['__overload__'] = function(){
      if (types.length == arguments.length && MatchesTypes(arguments, types)) return funct.apply(this, arguments);
      else if (typeof old == 'function') return old.apply(this, arguments);
    };
  }
	
  function MatchesTypes(arguments, types){
    for(var i=0; i<arguments.length; i++){
      var arg = arguments[i],
          type = types[i];
      if(type == '*') continue;
      if(arg.constructor != type) return false;
    }
    return true;
  }
	
  voxelcss.util.Overload = Overload.function;
	
})();