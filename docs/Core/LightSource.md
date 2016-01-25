#LightSource Class

#### Purpose ####

Contains light source information used to influence a scene's lighting.


### Base Classes ###

[Positioned](../Interfaces/Positioned.md) — [EventListener](../Interfaces/EventListener.md)


### Constructor ###

`LightSource(x, y, z, lightDistance, darkness, lightness)`

x — x-coordinate position for the light source.
y — y-coordinate position for the light source.
z — z-coordinate position for the light source.
lightDistance — The furthest distance the light can travel.
darkness — Darkest value shadows can become [0, 1] where 0 is darkest.
lightness — Lightest value a face can become [0, 1] where 1 is lightest.


### Properties ###

`setTravelDistance(distance)`

distance — The furthest distance the light can travel.

Sets the maximum distance light can travel from this source. Also returns the old value.

`getTravelDistance()`

Returns the furthest distance light can travel from this source.

`setBrightness(darkness, lightness)`

darkness — Darkest value shadows can become [0, 1] where 0 is darkest.
lightness — Lightest value a face can become [0, 1] where 1 is lightest.

Sets the brightest and darkest opacity levels for each face shader.

`getBrightness()`

Returns an array with the darkest and lightest values from `setBrightness`.


### Events ###

* onchange