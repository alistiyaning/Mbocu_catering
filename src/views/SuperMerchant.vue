<template>
  <div>
    
		<a-row :gutter="24" type="flex" align="stretch">
			<!-- Table -->
			<a-col :span="24" :lg="24" class="mb-24">
				<a-card hoverable style="width: 100%">
				<!-- Table -->
				<a-table :columns="columns" :data-source="data">
				<a slot="name" slot-scope="text">{{ text }}</a>
				<span slot="action" slot-scope="text">
					
					
					<!-- delete button -->
					<a-button type="default" @click="detail(text)">
					Detail
					</a-button>
				
				</span>
				</a-table>
				<!-- Table End -->
				</a-card>
    		</a-col>
		</a-row>
		<!-- Modal Detail -->
		<a-modal v-model="visibleDetail" title="Detail Item" >
			<a-row type="flex"  >
			<a-col :flex="2" class="mb-10" >
				<center>
				<a-avatar shape="square" src="https://images.indianexpress.com/2020/06/online-classes.jpg" :size="200" />
				</center>
			
				<div>
				<h5 class="font-semibold m-0">{{dataDetail.name}}</h5>
				<p>Deskripsi:</p>
				<p>{{dataDetail.desc}}</p>
							</div>
			</a-col>
			</a-row>
		</a-modal>
		<!-- End Modal Detail -->
    
  </div>
  
</template>
<script>
import MerchantDataService from "../services/MerchantDataService";
const columns = [
  {
    title: 'NAMA',
    dataIndex: 'name',
    key: 'name',
    width: 250
  },
  {
    title: 'PEMILIK',
    dataIndex: 'user.name',
    key: 'user.name',
    width: 300
    
  },
  {
    title: 'NO TELEPON',
    dataIndex: 'user.phone_num',
    key: 'user.phone_num',
    width: 250
    
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
    key: 'status',
    width: 175
    
  },
  {
    title: 'ACTION',
	dataIndex: 'id',
    key: 'action',
     scopedSlots: { customRender: 'action' },
  },
];


export default {
	data() {
		return {
		loading: false,
		visibleEdit: false,
		visibleDetail: false,
		visibleAdd: false,
		data: [],
		columns,
		currentUser: null,
		currentIndex: -1,
		title: "",
		name:'',
		email:'',
		phone_num:'',
		password:'',
		password_confirmation:'',
		role: '',
		errors: null,
		dataDetail:[]
		};
  	},
  methods:{
    
    detail(id){
		console.log(id);
		MerchantDataService.get(id)
			.then(response => {
				this.visibleDetail = true;
				this.dataDetail = response.data.data[0];
			})
			.catch(e => {
			console.log(e.response);
			});
    },
    showAdd() {
      this.visibleAdd = true;
    },
	handleChange(value) {
      this.role = value
	  
    },
    AddUser: function () {
		console.log('cek');
	let data = {
		name: this.name,
		email: this.email,
		phone_num: this.phone_num,
		password: this.password,
		password_confirmation: this.password_confirmation,
		role: this.role
	};
	console.log(data);
	MerchantDataService.create(data)
        .then(response => {
          this.retrieveUsers();
		  this.visibleAdd = false;
        })
        .catch(e => {
          this.errors = e.response.data.data;
        });
	},
    retrieveUsers() {
      MerchantDataService.getAll()
        .then(response => {
		console.log(response.data.data);
          this.data = response.data.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
  
  mounted() {
    this.retrieveUsers();
  },
};
</script>
