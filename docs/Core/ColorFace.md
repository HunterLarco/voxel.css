#ColorFace Class

#### Purpose ####

Contains color information for a single voxel face. Used by the Mesh class.


### Base Classes ###

[EventListener](../Interfaces/EventListener.md)


### Constructor ###

`ColorFace(r, g, b, a)`

`ColorFace(hex)`

`ColorFace(dict{r, g, b})`


### Static Properties ###

`loadFromSerial(serial)`

serial — A string serialization from a ColorFace instance.

Returns a new ColorFace instance built from the serialized data.


### Properties ###

`setColor(r, g, b, a)`

`setColor(hex)`

`setColor(dict{r, g, b})`

Sets the current color of the instance.

`getRGBA()`

Returns a dict containing the r, g, b, and a values.

`getHex()`

Returns the hex representation of the current color. Opacity not included.

`serialize()`

Returns a string serialization of the ColorFace's data.

`clone()`

Returns a new ColorFace instance containing the same data. 


### Events ###

* onchange