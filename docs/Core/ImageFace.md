#ImageFace Class

#### Purpose ####

Contains image information for a single voxel face. Used by the Mesh class.


### Base Classes ###

[EventListener](../Interfaces/EventListener.md)


### Constructor ###

`ImageFace()`

Creates an image face containing a transparent gif.

`ImageFace(source)`

Creates an image face containing the provided source.


### Static Properties ###

`loadFromSerial(serial)`

serial — A string serialization from a ImageFace instance.

Returns a new ImageFace instance built from the serialized data.


### Properties ###

`setSource(src)`

src — The new image source.

Sets the current source of the instance.

`getSource()`

Returns the current ImageFace's source.

`serialize()`

Returns a string serialization of the ImageFace's data.

`clone()`

Returns a new ImageFace instance containing the same data. 


### Events ###

* onchange