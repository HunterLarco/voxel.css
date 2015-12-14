#Scene Class

#### Purpose ####

A Scene is simply a camera. It can rotate, pan, zoom, and contain voxels.


### Base Classes ###

[EventListener](../Interfaces/EventListener.md)


### Constructor ###

* Scene()


### Properties ###

* rotate(x, y, z)
* rotateX(x)
* rotateY(y)
* rotateZ(z)
* setRotation(x, y, z)
* setRotationX(x)
* setRotationY(y)
* setRotationZ(z)
* getRotation()
* getRotationX()
* getRotationY()
* getRotationZ()
* pan(x, y, z)
* panX(x)
* panY(y)
* panZ(z)
* setPan(x, y, z)
* setPanX(x)
* setPanY(y)
* setPanZ(z)
* getPan()
* getPanX()
* getPanY()
* getPanZ()
* zoom(zoom)
* setSoom(soom)
* getZoom()
* attach(domElement)
* detach()
* isAttached()
* getParentElement()
* enableOrbit()
* disableOrbit()
* canOrbit()
* enablePan()
* disablePan()
* canPan()
* enableZoom()
* disableZoom()
* canZoom()
* add(voxel)
* remove(voxel)


### Events ###

* onorbit
* onpan
* onzoom