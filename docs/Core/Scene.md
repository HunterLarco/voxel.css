#Scene Class

#### Purpose ####

A Scene is simply a camera. It can rotate, pan, zoom, and contain voxels.


### Base Classes ###

[EventListener](../Interfaces/EventListener.md)


### Constructor ###

`Scene()`


### Properties ###

`rotate(x, y, z)`

x, y, z — Rotation offsets.

Offsets the current rotation. Ignores any undefined or non-numerical values.

`rotateX(x)`

x — x-axis rotation offset.

Offsets the x-axis rotation.

`rotateY(y)`

y — y-axis rotation offset.

Offsets the y-axis rotation.

`rotateZ(z)`

z — z-axis rotation offset.

Offsets the z-axis rotatation.

`setRotation(x, y, z)`

x, y, z — New rotations.

Sets the current rotation. Ignores any undefrined or non-numerical values.

`setRotationX(x)`

x — New x-axis rotation.

Sets the current rotation for the x-axis.

`setRotationY(y)`

y — New y-axis rotation.

Sets the current rotation for the y-axis.

`setRotationZ(z)`

z — New z-axis rotation.

Sets the current rotation for the z-axis.

`getRotation()`

Returns the x, y, z of the current rotation in a dict.

`getRotationX()`

Returns the current x-axis rotation.

`getRotationY()`

Returns the current y-axis rotation.

`getRotationZ()`

Returns the current z-axis rotation.

`pan(x, y, z)`

x, y, z — New pan offsets.

Offsets the current pan. Ignores any undefrined or non-numerical values.

`panX(x)`

x — x-axis pan offset.

Offsets the x-axis pan.

`panY(y)`

y — y-axis pan offset.

Offsets the y-axis pan.

`panZ(z)`

z — z-axis pan offset.

Offsets the z-axis pan.

`setPan(x, y, z)`

x, y, z — New pan values.

Sets the current pan. Ignores any undefrined or non-numerical values.

`setPanX(x)`

x — x-axis pan value.

Sets the x-axis pan.

`setPanY(y)`

y — y-axis pan value.

Sets the y-axis pan.

`setPanZ(z)`

z — z-axis pan value.

Sets the z-axis pan.

`getPan()`

Returns the x, y, z values of the current pan in a dict.

`getPanX()`

Returns the current x-axis pan.

`getPanY()`

Returns the current y-axis pan.

`getPanZ()`

Returns the current z-axis pan.

`zoom(zoom)`

zoom — New zoom offset.

Offsets the zoom.

`setSoom(soom)`

zoom — New zoom value.

Sets the zoom.

`getZoom()`

Returns the current zoom value.

`attach(domElement)`

domElement — The element to render this scene inside.

Renders the scene and all associated voxels in the provided domElement. Is absolutely positioned.

`detach()`

Removes this scene from the element previously attached to by attach(domElement)

`isAttached()`

Returns true if this scene is currently attached to the dom, else false.

`getParentElement()`

Returns the element containing the scene element.

`enableOrbit()`

Enables orbiting with the mouse.

`disableOrbit()`

Disables orbiting with the mouse.

`canOrbit()`

Returns true if orbiting is enabled, else false.

`enablePan()`

Enables pan with the mouse.

`disablePan()`

Disables pan with the mouse.

`canPan()`

Returns true if pan is enabled, else false.

`enableZoom()`

Enables zoom via scroll.

`disableZoom()`

Disables zoom via scroll.

`canZoom()`

Returns true is zoom is enabled, else false.

`add(voxel)`

voxel — A voxel instance.

Adds the provided voxel to the scene.

`remove(voxel)`

voxel — A voxel instance.

Removes the provided voxel from the scene.

`getVoxels()`

Returns all voxel objects in the scene.

`addLightSource(lightSource)`

lightSource — A LightSource instance.

Adds the provided light source to the scene.

`removeLightSource(lightSource)`

lightSource — A LightSource instance.

Removes the provided light source from the scene.

`getLightSources()`

Returns all light source instances from the scene.


### Events ###

* onorbit
* onpan
* onzoom