#voxel.css

#### JavaScript 3D library ####

The goal of this project is to provide a lightweight 3D CSS library with very simple implementation.

[Demo](http://voxelcss.com/demo) — [Documentation](./docs)


### Usage ###

Download the [minified library](./dist/voxelcss.js) and [css file](./dist/voxel.css) and include both in your html.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>voxel.css</title>
		<link rel="stylesheet" href="css/voxel.css"></link>
	</head>
	<body>
		<script src="js/voxelcss.js"></script>
	</body>
</html>
```

This code creates a scene, a savable world, and an editor that allow you to immediately begin building worlds with voxel.css and see how little code is required to make complex 3D voxel games. If you've built anything in the past it auto-loads your previous build instead of creating a new one.

```js
function init(element) {
	var PI          = Math.PI;
	var scene       = new voxelcss.Scene();
	var lightSource = new voxelcss.LightSource(300, 300, 300, 750, 0.3, 1);
	var world       = new voxelcss.World(scene);
	var editor      = new voxelcss.Editor(world);

	scene.rotate(-PI / 8, PI / 4, 0);
	scene.attach(element);
	scene.addLightSource(lightSource);

	editor.enableAutoSave();
	editor.load();

	if (world.getVoxels().length === 0) {
		editor.add(new voxelcss.Voxel(0, 0, 0, 100, {
			mesh: voxelcss.Meshes.grass
		}));
	}
}

init(document.body);
```
If everything went well you should see [this](http://jsfiddle.net/hjlarco/rrvsL9h6/).


### Core Concepts ###

There are 4 important classes. Scene, World, Editor and of course Voxel. The destinctions between a Scene, World, and Editor are important to know if you are to leverage them well. A Scene is simply a camera. It can rotate, pan, zoom, and contain voxels. Meanwhile a World can save the state of any voxels added to it. This is important as voxels that are in a scene but not in a world are not savable. Lastly the Editor creates all the mouse events necessary to allow the user to add and remove blocks from a World with the added option to autosave all changes.


### Properties and Classes ###

[Core Classes](./docs/Core) — [Interfaces](./docs/Interfaces)


### Future Features ###

- Shadows
- Firefox back-face culling
- Mobile touch support


### Projects built with voxel.css ###

- [https://codepen.io/wesbos/pen/EPLVMv?editors=0110](https://codepen.io/wesbos/pen/EPLVMv?editors=0110)


### Change log ###

[releases](https://github.com/HunterLarco/voxel.css/releases)

