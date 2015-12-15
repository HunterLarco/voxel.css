#Editor Class

#### Purpose ####

Turns the provided world into a live editor when the user can remove and add voxels with the mouse.


### Base Classes ###

None


### Constructor ###

`Editor(world, options)`

world — A World instance to edit.
options.autosave — A quick way to set autosave to true or false.


### Properties ###

`enable()`

Enables the editor. Default is enabled.

`disable()`

Disabled the editor.

`isEnabled()`

Returns true if the editor is currently enabled, else false.

`enableAutoSave()`

Enables autosaving: Saves on every voxel addition or removal.

`disableAutoSave()`

Disables autosaving.

`canAutoSave()`

Returns true if autosaving is on, else false.

`save()`

Saves the current editor's state to the browser's localStorage.

`load()`

Load the current world from the browser's localStorage for editing.

`isSaved()`

Returns true if the current world has a save in the browser's localStorage.

`deleteSave()`

Removes any saves of the current world in the browser's localStorage.

`export()`

Exports the current world's data into a string.

`import(exportString)`

exportString — A string returned from export()

Loads the data from an exportString into the current world.

`add(voxel)`

voxel — A voxel instance.

Adds a new voxel to the current editor.

`remove(voxel)`

voxel — A voxel instance.

Removes a voxel from the current editor.

`getWorld()`

Returns the current editing world.

`setToolMesh(mesh)`

Sets the mesh used to create new blocks when editing.


### Events ###

None