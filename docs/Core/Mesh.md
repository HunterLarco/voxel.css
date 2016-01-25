#Mesh Class

#### Purpose ####

Contains mesh information for all of the faces of a voxel.


### Base Classes ###

[EventListener](../Interfaces/EventListener.md)


### Constructor ###

`Mesh(*arguments)`

*optional* arguments — All arguments are applied to the `setFaces` method. See it for details.

Default mesh contains entirely transparent faces.


### Static Properties ###

`loadFromSerial(serial)`

serial — A string serialization from a Mesh instance.

Returns a new Mesh instance built from the serialized data.


### Properties ###

`setFront(face)`

face — A face class (ColorFace or ImageFace)

Sets the front face of the mesh to the provided Face mesh type.

`setBack(face)`

face — A face class (ColorFace or ImageFace)

Sets the back face of the mesh to the provided Face mesh type.

`setLeft(face)`

face — A face class (ColorFace or ImageFace)

Sets the left face of the mesh to the provided Face mesh type.

`setRight(face)`

face — A face class (ColorFace or ImageFace)

Sets the right face of the mesh to the provided Face mesh type.

`setTop(face)`

face — A face class (ColorFace or ImageFace)

Sets the top face of the mesh to the provided Face mesh type.

`setBottom(face)`

face — A face class (ColorFace or ImageFace)

Sets the bottom face of the mesh to the provided Face mesh type.

`getFront()`

Returns the Face mesh type instance for the front face.

`getBack()`

Returns the Face mesh type instance for the back face.

`getLeft()`

Returns the Face mesh type instance for the left face.

`getRight()`

Returns the Face mesh type instance for the right face.

`getTop()`

Returns the Face mesh type instance for the top face.

`getBottom()`

Returns the Face mesh type instance for the bottom face.

`setFaces(face or {faces_dict})`

face — A single Face Mesh type instance to apply to all faces.
faces_dict — A dict of Face Mesh type instances to apply to the mesh. EG: {top: [face], bottom: [face], ...}

Applies a face or several face instances to the current mesh.

`getFaces()`

Returns a dict of all of the Face Meshe type instances.

`serialize()`

Returns a string serialization of the Mesh's data.


### Events ###

* onchange