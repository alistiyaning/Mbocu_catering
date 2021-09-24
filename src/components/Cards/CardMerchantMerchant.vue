<template>
    <a-row :gutter="24" type="flex">
            <a-col :span="12" >
            </a-col>
			<!-- Authors Table Column -->
			<a-col :span="12" >
  <MglMap :accessToken="accessToken" :mapStyle.sync="mapStyle" >
      <MglNavigationControl position="top-right" />
      <MglGeolocateControl position="top-right" />
  </MglMap>
</template>

<script>
import {
  MglMap,
  MglNavigationControl,
  MglGeolocateControl,
} from "vue-mapbox";

export default {
  components: {
    MglMap,
    MglNavigationControl,
    MglGeolocateControl
  },
  data() {
    return {
      accessToken: "pk.eyJ1IjoicmFqZW5kcmFub2hhbiIsImEiOiJja2VzbzZ6MWMwN2VrMnlvMDc5MnZ2cnR5In0.0HDrz_L7f_GLReneRLOwjQ", // your access token. Needed if you using Mapbox maps
      mapStyle: "mapbox://styles/mapbox/streets-v11", // your map style
      geoJsonSource: {
        //...some GeoJSON object
      },
      geoJsonLayer: {
        //...some GeoJSON layer configuration object
      }
    };
  }
};
</script>
