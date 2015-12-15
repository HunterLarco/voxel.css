#voxel.css

#### JavaScript 3D library ####

The goal of this project is to provide a lightweight 3D CSS library with very simple implementation.

[Demo](http://voxelcss.com/demo) — [Documentation](./docs)


### Usage ###

Download the [minified library](./build/voxel.js) and [css file](./build/voxel.css) and include both in your html.

```html
<script src="js/voxel.js"></script>
<link rel='stylesheet' href="css/voxel.css"></link>
```

This code creates a scene, a savable world, and an editor that allow you to immediately begin building worlds with voxel.css and see how little code is required to make complex 3D voxel games. If you've built anything in the past it auto-loads your previous build instead of creating a new one.

```html
<script>

	var scene, world, editor;

	init();

	function init() {
    scene = new voxelcss.Scene();
    scene.rotate(-Math.PI / 8, Math.PI / 4, 0);
    scene.attach(document.body);

    world = new voxelcss.World(scene);
    editor = new voxelcss.Editor(world);
    editor.enableAutoSave();
    
    editor.load();
    if(world.getVoxels().length === 0)
      editor.add(new voxelcss.Voxel(0, 0, 0, 100, {
        mesh: {
          'top': '//voxelcss.com/res/grass/top.png',
          'bottom': '//voxelcss.com/res/grass/bottom.png',
          'front': '//voxelcss.com/res/grass/side.png',
          'back': '//voxelcss.com/res/grass/side.png',
          'left': '//voxelcss.com/res/grass/side.png',
          'right': '//voxelcss.com/res/grass/side.png',
        }
      }));
	}

</script>
```
If everything went well you should see [this](http://jsfiddle.net/hjlarco/rrvsL9h6/).


### Core Concepts ###

There are 4 important classes. Scene, World, Editor and of course Voxel. The destinctions between a Scene, World, and Editor are important to know if you are to leverage them well. A Scene is simply a camera. It can rotate, pan, zoom, and contain voxels. Meanwhile a World can save the state of any voxels added to it. This is important as voxels that are in a scene but not in a world are not savable. Lastly the Editor creates all the mouse events necessary to add the user to add and remove blocks from a World with the added option to autosave all changes.


### Properties and Classes ###

[Core Classes](./docs/Core) — [Interfaces](./docs/Interfaces)


### Change log ###

[releases](https://github.com/HunterLarco/voxel.css/releases)

