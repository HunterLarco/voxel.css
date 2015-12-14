#Voxel Class

#### Purpose ####

Mediates adding CSS voxels to a scene while tracking their position and mesh.


### Base Classes ###

[Positioned](../Interfaces/Positioned.md) — [EventListener](../Interfaces/EventListener.md)


### Constructor ###

* Voxel(x, y, z, dimension, options)
  * options{ mesh }


### Properties ###

* setMesh(mesh)
* getMesh()
* animUp(scene)
* animDown(scene)
* addToScene(scene)
* removeFromScene()
* setDimension(dimension)
* getDimension()
* getDomElement()
* clone()


### Events ###

* onCubeClick
* onTopClick
* onBottomClick
* onFrontClick
* onBackClick
* onLeftClick
* onRightClick