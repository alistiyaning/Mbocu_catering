<template>
    <div>
	<a-row :gutter="24" type="flex">
		<a-col :span="12" >
            <a-card style="width: 100%">
            <a-form
                id="addForm"
                @submit.prevent="updateMerchant"
            >

            <a-form-item label="Nama Merchant">
                <a-input
                v-decorator="[
                    'name',
                    { rules: [{ required: true, message: 'Please input your name !' }] },
                ]"
                placeholder="Ex: Bali Catering"
                v-model="name"
                >
                </a-input>
            </a-form-item>
            
            <a-form-item label="Deskripsi">
                <a-textarea placeholder="Ex: Catering yang mnyedikan menu-menu berkualitas dsb" :rows="4"

                v-decorator="[
                    'Deskripsi',
                    { rules: [{ required: true, message: 'Please input your Deskripsi !' }] },
                ]"
                v-model="desc"
                />
            </a-form-item>
            <a-row :gutter="24" type="flex">
        		<a-col :span="12" >
                    <a-form-item label="Longitude">
                        <a-input
                        v-decorator="[
                            'name',
                            { rules: [{ required: true, message: 'Please input your name !' }] },
                        ]"
                        placeholder="Ex: 11.3" read-only
                        v-model="long"
                        >
                        </a-input>
                    </a-form-item>
                </a-col>
                <a-col :span="12" >
                    <a-form-item label="Latitude">
                        <a-input
                        v-decorator="[
                            'name',
                            { rules: [{ required: true, message: 'Please input your name !' }] },
                        ]"
                        placeholder="Ex: 11.3" read-only
                        v-model="lat"
                        >
                        </a-input>
                    </a-form-item>
                </a-col>
            </a-row>
            <a-button type="primary" html-type="submit">
              Simpan
            </a-button>
            </a-form>
            </a-card>
		</a-col>
		<a-col :span="12" >
			<MglMap style="height: 780px;" :accessToken="accessToken" :mapStyle.sync="mapStyle" :minZoom="4" :center="coordinatesMaps" @click="mapboxClick" >
				<MglNavigationControl position="top-right" />
				<MglGeolocateControl position="top-right" />
        <MglMarker :coordinates="coordinates" draggable></MglMarker>
			</MglMap>
		</a-col>
	</a-row>
	</div>
</template>

<script>
import {
  MglMap,
  MglNavigationControl,
  MglGeolocateControl,
  MglMarker,
} from "vue-mapbox";
import MerchantDataService from "../services/MerchantDataService";
export default {
  mounted() {
    this.retrieveMerchant();
  },
  components: {
    MglMap,
    MglNavigationControl,
    MglGeolocateControl,
    MglMarker,
    
  },
  methods:{
    mapboxClick(id){
		this.coordinates= [id.mapboxEvent.lngLat.lng, id.mapboxEvent.lngLat.lat];
    this.coordinatesMap= [id.mapboxEvent.lngLat.lng, id.mapboxEvent.lngLat.lat];
    this.long = id.mapboxEvent.lngLat.lng;
    this.lat = id.mapboxEvent.lngLat.lat;
    
    },
    retrieveMerchant() {
      var id = localStorage.getItem('id');
      MerchantDataService.get(id)
			.then(response => {
				this.visibleDetail = true;
				this.dataDetail = response.data.data[0];
        this.name = response.data.data[0].name;
        this.desc = response.data.data[0].name;
        this.long = response.data.data[0].long;
        this.lat = response.data.data[0].lat;
        this.coordinates = [response.data.data[0].long,response.data.data[0].lat];
        this.coordinatesMaps = [response.data.data[0].long,response.data.data[0].lat];
        console.log(response.data.data[0].name)
			})
			.catch(e => {
			});
    },
    updateMerchant: function () {
    let data = {
      name: this.name,
      desc: this.desc,
      long: this.long,
      lat: this.lat,
      role: this.role,
      user_id: localStorage.getItem('id')
    };
      MerchantDataService.update(data,localStorage.getItem('id'))
        .then(response => {
          this.retrieveUsers();
		      this.visibleAdd = false;
        })
        .catch(e => {
          console.log(e.response)
          this.errors = e.response.data.data;
        });
      
	  },
  },
  data() {
    
    return {
      name: '',
      desc: '',
      long: '',
      lat: '',
      user_id: '',
      accessToken: "pk.eyJ1IjoicmFqZW5kcmFub2hhbiIsImEiOiJja2VzbzZ6MWMwN2VrMnlvMDc5MnZ2cnR5In0.0HDrz_L7f_GLReneRLOwjQ", // your access token. Needed if you using Mapbox maps
      mapStyle: "mapbox://styles/mapbox/streets-v11", // your map style
      coordinates: [0,0],
      coordinatesMaps: [106.774124, -6.121435],
      
      
    };
  }
};
</script>