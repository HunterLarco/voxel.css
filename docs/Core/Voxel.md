#Voxel Class

#### Purpose ####

Mediates adding CSS voxels to a scene while tracking their position and mesh.


### Base Classes ###

[Positioned](../Interfaces/Positioned.md) — [EventListener](../Interfaces/EventListener.md)


### Constructor ###

`Voxel(x, y, z, dimension, options)`

`x`, `y` and `z` — Numerical position coordinates

`dimension` — A single number stating the Voxel width, height, and depth

`options` _(optional)_ — an object containing the a mesh property (See setMesh).

**Example:** 
```js
var myVoxel = new voxelcss.Voxel(100, 250, 0, 300, {
  mesh: voxelcss.Meshes.grass
});
```


### Properties ###

`.setMesh(mesh)`

mesh — A mesh instance.

Changes the images used for each provided face for this voxel.

`getMesh()`

Returns the current mesh instance.

`animUp(scene)`

scene — A Scene instance.

Adds the current voxel to the provided scene with an upward animation.

`animDown(scene)`

scene — A Scene instance.

Adds the current voxel to the provided scene with an downward animation.

`addToScene(scene)`

scene — A Scene instance.

Adds the current voxel to the provided scene.

`removeFromScene()`

Removes the voxel from the scene it is currently attached to.

`setDimension(dimension)`

dimension — Integer for width, height, depth of the voxel.

Updates the dimension and propogates changes to the dom.

`getDimension()`

Returns the voxel's current dimension.

`getDomElement()`

Returns the dom element containing the current voxel.

`clone()`

Returns a voxel instance with the same position, dimension, and mesh as the current voxel.

`updateLightSource`

Given a list of light source instances, update the voxel's shading.


### Events ###

* onCubeClick
* onTopClick
* onBottomClick
* onFrontClick
* onBackClick
* onLeftClick
* onRightClick
