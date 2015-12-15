#World Class

#### Purpose ####

Allows saving the positions, meshes, and sizes of all voxels added to this world. Keep in mind that a world only saves voxels added to that world or an editor connected to the world. It will not save voxels added to the scene but not thought the world.


### Base Classes ###

None


### Constructor ###

`World(scene, worldName)`

scene — A scene instance.
worldName — Used to distinguish different saved worlds.


### Properties ###

`add(voxel)`

voxel — A voxel instance.

Add a voxel to the world.

`remove(voxel)`

voxel — Remove a voxel from the world.

Remove a voxel from the world.

`export()`

Returns a string that can be used to import the current state of this world.

`import(exportString)`

exportString — A string returned by export()

Replaces all voxels in the world with the data from the exportString.

`save()`

Saves the current state of the world to the browser's localStorage.

`load()`

Loads the world from the browser's localStorage.

`isSaved()`

Returns true if the browser's localStorage contains a saved world matching the current worldName. Else false.

`deleteSave()`

Removes any saves for this world.

`getScene()`

Returns the scene this world is connected to.

`getVoxels()`

Returns an array of all voxels added to this world.


### Events ###

None