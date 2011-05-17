##EJSON
/*!
 * Nanomaps JavaScript Library
 * https://github.com/stellaeof/nanomaps
 * Copyright 2011, Stella Laurenzo
 * Licensed under the MIT open source license
 * Date: #{new Date()}
 */
(function(global) {
var exports={};
global.nanomaps=exports;
##include('components/nanomaps.util.js')
##include('components/nanomaps.dom.js')
##include('components/nanomaps.geometry.js')
##include('components/nanomaps.projections.js')
##include('components/nanomaps.core.js')
##include('components/nanomaps.tiles.js')
##include('components/nanomaps.desktop.js')
##include('components/nanomaps.touch.js')
##include('components/nanomaps.imgmarker.js')
##include('components/nanomaps.svgmarker.js')
})(window);
