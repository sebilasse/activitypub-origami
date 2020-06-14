import { tsx, create, dom } from '@dojo/framework/core/vdom';
import { Base as MetaBase } from "@dojo/framework/core/meta/Base";
import theme from '@dojo/framework/core/middleware/theme';
import icache from '@dojo/framework/core/middleware/icache';
//import Link from '@dojo/framework/routing/Link';
//import { systemLocale } from "@dojo/framework/i18n/i18n";
import i18n from '@dojo/framework/core/middleware/i18n';
//import Select from '@dojo/widgets/select';
import { control, tileLayer, latLng, ControlPosition, Map as LeafletMap } from 'leaflet';
const vectorgrid = require('leaflet.vectorgrid');
//import React, { type Node } from 'react'
import {
  //LatLng, LonObj, LngObj,
  //LatLngBounds,
  //LeafletContext,
  LeafletElement,
  //Viewport,
  //ZoomOption,
  Props
} from './interfaces';

/* // TODO:
https://osmbuildings.org/documentation/leaflet/

var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
		streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});

	var map = L.map('map', {
		center: [39.73, -104.99],
		zoom: 10,
		layers: [grayscale, cities]
	});

	var baseLayers = {
		"Grayscale": grayscale,
		"Streets": streets
	};

	var overlays = {
		"Cities": cities
	};

	L.control.layers(baseLayers, overlays).addTo(map);
*/

import i18nMarkdown from '../common/md';
import bundle from './nls/';
import * as css from './Map.m.css';

type LatLngArray = [number, number] | [number, number, number];
function isNr(n: any) { return typeof n === 'number' && !isNaN(n) }
function latLngFromO(o: any): LatLngArray {
	let a: LatLngArray = [0,0];
	if (isNr(o.latitude) && isNr(o.longitude)) {
		const alt = typeof o.altitude === 'number' && !isNaN(o.altitude) && o.altitude;
		a = !!alt ? [o.latitude, o.longitude, alt] : [o.latitude, o.longitude]
	} else if (isNr(o.lat)) {
		const lon = isNr(o.lon) ? o.lon : (isNr(o.lng) ? o.lng : null);
		if (!isNr(lon)) { return a }
		const alt = isNr(o.alt) && o.alt;
		a = !!alt ? [o.lat, lon, alt] : [o.lat, lon]
	}
	return a
}
function createLeafletLatLng(props: Partial<Props>) {
	const centerArray: LatLngArray = Array.isArray(props.center) ? props.center :
		(!!props.center && typeof props.center === 'object' ? latLngFromO(props.center) : [0, 0]);
	return latLng(centerArray)
}

function createLeafletElement(props: Partial<Props>): any {
	const node = document.createElement('div');
	node.style.height = '100%'; node.style.width = '100%';

	const { viewport, ...options } = props;
	if (viewport) {
		if (viewport.center) { options.center = viewport.center }
		if (typeof viewport.zoom === 'number') { options.zoom = viewport.zoom }
	}
	if (!Math.max(0,options.zoom||0)) { options.zoom = 14 }

	return dom({
		node,
		onAttach: () => {
			const center = Array.isArray(props.center) ? props.center :
				(!!props.center && typeof props.center === 'object' ? latLngFromO(props.center) : [0,0])
			options.center = createLeafletLatLng(options)
			const map = new LeafletMap(node, options as LeafletMap['options']);
			//map.on('load', function() { map.invalidateSize() })
			//map.setView([51.75840, 6.39612], 15);

			let position: ControlPosition = 'bottomright';
			if (typeof options.zoomControl === 'string') {
				position = options.zoomControl;
				options.zoomControl = true;
			}
			map.zoomControl.setPosition(position);
      control.scale().addTo(map);
			// TODO map.attributionControl;

			//.zoomControl.setPosition(position);
			if (!center[0] && !center[0]) {
				map.fitWorld()
			} else {
				map.setView(options.center, (options as any).zoom)
			}

			tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				'attribution':  'Kartendaten &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> Mitwirkende',
				//'useCache': true
			}).addTo(map);

/*
      new L.VectorGrid.Protobuf('https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer/tile/{z}/{x}/{y}.pbf', {
        maxZoom: 22
      }).addTo(map) */
		}
	})
}

/*
var esriStyle = {};
esriStyle.Continent  = vectorTileStyling.earth;
esriStyle.Bathymetry = vectorTileStyling.water;
esriStyle["Vegetation small scale"] = vectorTileStyling.landuse;
esriStyle["Marine area"] = vectorTileStyling.water;
esriStyle.Land = vectorTileStyling.earth;

esriStyle["City small scale"             ] = vectorTileStyling.building;
esriStyle["Admin0 point"                 ] = [];
esriStyle["Water area small scale"       ] = vectorTileStyling.water;
esriStyle["Water line small scale/label" ] = [];
esriStyle["Water line small scale"       ] = vectorTileStyling.water;
esriStyle["Marine waterbody/label"       ] = [];
esriStyle["Boundary line"                ] = vectorTileStyling.boundary;
esriStyle["Admin0 forest or park"        ] = vectorTileStyling.landuse;
esriStyle["Openspace or forest"          ] = vectorTileStyling.landuse;
esriStyle["Admin1 area/label"            ] = [];
esriStyle["Admin2 area/label"            ] = [];
esriStyle["Admin0 forest or park/label"  ] = [];
esriStyle["Water area small scale/label" ] = [];
esriStyle["Road tunnel"                  ] = vectorTileStyling.road;
esriStyle["Road"                         ] = vectorTileStyling.road;
esriStyle["Water line medium scale/label"] = [];
esriStyle["Water line medium scale"      ] = vectorTileStyling.water;
esriStyle["Urban area"                   ] = vectorTileStyling.landuse;
esriStyle["Admin1 forest or park"        ] = vectorTileStyling.landuse;
esriStyle["Water area medium scale/label"] = [];
esriStyle["Water area medium scale"      ] = vectorTileStyling.water;
esriStyle["Spot elevation"               ] = [];
esriStyle["City large scale"             ] = vectorTileStyling.building;
esriStyle["Admin2 area/label"            ] =
esriStyle["Water area large scale"       ] = vectorTileStyling.water;
esriStyle["Water line large scale/label" ] = [];
esriStyle["Water line large scale"       ] = vectorTileStyling.water;
esriStyle["Point of interest"            ] = vectorTileStyling.building;
esriStyle["Road/label"                   ] = [];
esriStyle["Ferry/label"                  ] = [];
esriStyle["Ferry"                        ] = vectorTileStyling.water;
esriStyle["Building"                     ] = vectorTileStyling.building;
esriStyle["Water area/label"             ] = [];
esriStyle["Water area"                   ] = vectorTileStyling.water;
esriStyle["Water line"                   ] = vectorTileStyling.water;
esriStyle["Cemetery/label"               ] = [];
esriStyle["Cemetery"                     ] = vectorTileStyling.landuse;
esriStyle["Retail"                       ] = vectorTileStyling.landuse;
esriStyle["Airport/label"                ] = [];
esriStyle["Airport"                      ] = vectorTileStyling.landuse;
esriStyle["Industry"                     ] = vectorTileStyling.landuse;
esriStyle["Water area large scale/label" ] = [];
esriStyle["Road tunnel/label"            ] = [];
esriStyle["Golf course/label"            ] = [];
esriStyle["Golf course"                  ] = vectorTileStyling.landuse;
esriStyle["Industry/label"               ] = [];
esriStyle["Marine area/label"            ] = [];
esriStyle["Railroad"                     ] = vectorTileStyling.road;
esriStyle["Medical"                      ] = vectorTileStyling.landuse;
esriStyle["Education"                    ] = vectorTileStyling.landuse;
esriStyle["Park or farming"              ] = vectorTileStyling.landuse;
esriStyle["Exit"                         ] = vectorTileStyling.road;
esriStyle["Retail/label"                 ] = [];
esriStyle["Beach/label"                  ] = [];
esriStyle["Beach"                        ] = vectorTileStyling.landuse;
esriStyle["Special area of interest"     ] = vectorTileStyling.housenumber;
esriStyle["Point of interest"            ] = vectorTileStyling.poi;
esriStyle["Education/label"              ] = [];
esriStyle["Landmark"                     ] = vectorTileStyling.landuse;
esriStyle["Cemetery"                     ] = vectorTileStyling.landuse;
esriStyle["Transportation"               ] = vectorTileStyling.road;
esriStyle["Landmark/label"               ] = [];
esriStyle["Medical/label"                ] = [];
esriStyle["Park or farming/label"        ] = [];
esriStyle["Building/label"               ] = [];


var esriTilesUrl = "https://basemaps.arcgis.com/v1/arcgis/rest/services/World_Basemap/VectorTileServer/tile/{z}/{y}/{x}.pbf";

var esriVectorTileOptions = {
rendererFactory: L.canvas.tile,
attribution: '© ESRI',
vectorTileLayerStyles: esriStyle,
};

var esriTilesPbfLayer = L.vectorGrid.protobuf(esriTilesUrl, esriVectorTileOptions);
*/

const factory = create({ i18n, theme, icache }).properties<Props>()

export default factory(function Hero({ /*children,*/ properties, middleware: { i18n, theme, icache } }) {
	const { messages } = i18n.localize(bundle);
	const msg = i18nMarkdown(messages);
	const themedCss = theme.classes(css);
	const d = Date.now();
	const map = icache.getOrSet('map', createLeafletElement(properties()))
	//const { center } = properties();
	/*
	const actionItems = ACTION.map((k) => {
		const label = m.hasOwnProperty(`see_${k}`) ? m[`see_${k}`] : k;
		return { label, value: k }
	});
	*/
	//const el = ElementMeta.get('mapcontainer')
	return (
		<div classes={[themedCss.root]} id='mapcontainer'>{map}</div>
	);
});
