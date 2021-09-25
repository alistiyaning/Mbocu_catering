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
			<a-divider type="vertical" />
            <!-- delete button -->
            <a-button type="danger" @click="deleteConfirm(text)">
              Delete
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
				<p class="mt-0">{{dataDetail.merchant.name}}0</p>
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
import ItemDataService from "../services/ItemDataService";
const columns = [
  {
    title: 'NAMA',
    dataIndex: 'name',
    key: 'name',
    width: 400
  },
  {
    title: 'NAMA MERCHANT/TOKO',
    dataIndex: 'merchant.name',
    key: 'merchant.name',
    width: 400
    
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
    key: 'status',
    width: 300
    
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
		currentItem: null,
		currentIndex: -1,
		title: "",
		dataDetail: [],
		merchant_id:'',
		errors: null,
		};
  	},
  methods:{
    
    deleteConfirm(id){
	if(confirm("Do you really want to delete?")){
		ItemDataService.delete(id)
			.then(response => {
				this.retrieveItems();
			})
			.catch(e => {
			console.log(e.response);
			});
		}
    },
	detail(id){
		console.log(id);
		ItemDataService.get(id)
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
    AddItem: function () {
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
	ItemDataService.create(data)
        .then(response => {
          this.retrieveItems();
		  this.visibleAdd = false;
        })
        .catch(e => {
          this.errors = e.response.data.data;
        });
	},
    retrieveItems() {
      ItemDataService.getAll()
        .then(response => {
          this.data = response.data.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
  
  mounted() {
    this.retrieveItems();
  },
};
</script>
