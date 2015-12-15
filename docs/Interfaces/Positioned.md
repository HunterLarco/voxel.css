#Positioned Interface

#### Purpose ####

Provides methods and private data to position any object in 3D space.


### Constructor ###

`Positioned()`


### Properties ###

`setPosition(x, y, z)`

x, y, z — New coordinates (number)

Sets the new position. Ignores any undefined or non-numerical values.

`setPositionX(x)`

x — New 'x' coordinate

Sets the new 'x' coordinate.

`setPositionY(y)`

y — New 'y' coordinate

Sets the new 'y' coordinate.

`setPositionZ(z)`

z — New 'z' coordinate

Sets the new 'z' coordinate.

`translate(x, y, z)`

x, y, z — Translation offsets.

Translates the current position. Ignores any undefined or non-numerical values.

`translateX(x)`

x — x-axis translation offset.

Translates the current position on the x-axis.

`translateY(y)`

y — y-axis translation offset.

Translates the current position on the y-axis.

`translateZ(z)`

z — z-axis translation offset.

Translates the current position on the z-axis.

`getPosition()`

Returns the x, y, z of the current position in a dict.

`getPositionX()`

Returns the current x-coordinate.

`getPositionY()`

Returns the current y-coordinate.

`getPositionZ()`

Returns the current z-coordinate.


### Events ###

* onmove