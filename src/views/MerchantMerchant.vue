<template>
    <div>
	<a-row :gutter="24" type="flex">
		<a-col :span="12" >
            <a-card style="width: 100%">
            <a-form
                id="addForm"
                :form="form"
                v-bind="formItemLayout"
                @submit="handleSubmitAdd"
            >
                <a-form-item label="Merchant Photo" extra="Uploud new icon">
                
                <a-upload
                    v-decorator="[
                    'upload',
                    {
                        valuePropName: 'fileList',
                        getValueFromEvent: normFile,
                    },
                    ]"
                    name="logo"
                    action="/upload.do"
                    list-type="picture"
                >
                <a-button> <a-icon type="upload" /> Click to upload </a-button>
                </a-upload>
            </a-form-item>

            <a-form-item label="Nama Merchant">
                <a-input
                v-decorator="[
                    'name',
                    { rules: [{ required: true, message: 'Please input your name !' }] },
                ]"
                placeholder="Ex: Bali Catering"
                >
                </a-input>
            </a-form-item>
            
            <a-form-item label="Deskripsi">
                <a-textarea placeholder="Ex: Catering yang mnyedikan menu-menu berkualitas dsb" :rows="4"

                v-decorator="[
                    'Deskripsi',
                    { rules: [{ required: true, message: 'Please input your Deskripsi !' }] },
                ]"/>
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
			<MglMap style="height: 780px;" :accessToken="accessToken" :mapStyle.sync="mapStyle"  >
				<MglNavigationControl position="top-right" />
				<MglGeolocateControl position="top-right" />
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