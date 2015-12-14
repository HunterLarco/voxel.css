#Editor Class

#### Purpose ####

Turns the provided world into a live editor when the user can remove and add voxels with the mouse.


### Base Classes ###

None


### Constructor ###

* Editor(world, options)
  * options{ autosave }


### Properties ###

* enable()
* disable()
* isEnabled()
* enableAutoSave()
* disableAutoSave()
* canAutoSave()
* save()
* load()
* isSaved()
* deleteSave()
* export()
* import(exportString)
* add(voxel)
* remove(voxel)
* getWorld()
* setToolMesh(mesh)


### Events ###

None