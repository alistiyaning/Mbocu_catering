<template>
  <div>
    
		<a-row :gutter="24" type="flex" align="stretch">
			<!-- Table -->
			<a-col :span="24" :lg="24" class="mb-24">

        <!-- add button -->
        <a-button @click="showAdd" class="mb-24">
          Add User
        </a-button>
        <a-card hoverable style="width: 100%">
        <!-- Table -->
        <a-table :columns="columns" :data-source="data">
          <a slot="name" slot-scope="text">{{ text }}</a>
          <span slot="action" slot-scope="text">
            
            
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
    
    <!-- Modal Add -->
    <a-modal v-model="visibleAdd" title="Add new " @ok.prevent="AddUser">
		<div class="desc" status="error" v-for="(error, index) in errors" :key="index">
			<p><a-icon :style="{ color: 'red' }" type="close-circle" /> {{ error[0] }}</p>
		</div>
      <v-form
				id="components-form-demo-normal-login"
				class="login-form"
				@submit.prevent="AddUser"
				
			>
				<a-form-item class="mb-10">
					<label >Nama Lengkap</label>
					<a-input
					type="text"
					class="form-control"
					placeholder="Ex: Bambang"
					v-model="name"
					>
					</a-input>
				</a-form-item>
				<a-form-item class="mb-10">
					<label >Role</label>
					<a-select class="form-control" default-value="Select Role"  @change="handleChange">
						<a-select-option value="admin">
							Super Admin
						</a-select-option>
						<a-select-option value="merchant">
							Merchant Admin
						</a-select-option>
						<a-select-option value="user">
							User
						</a-select-option>
					</a-select>
				</a-form-item>
				<a-form-item class="mb-10">
					<label >Email</label>
					<a-input
					type="email"
					class="form-control"
					placeholder="Ex: rajendranohan4@gmail.com"
					v-model="email"
					>
					</a-input>
				</a-form-item>

				<a-form-item class="mb-10">
					<label >Nomor telfon</label>
					<a-input
					type="number"
					class="form-control"
					placeholder="Ex: 85157573144"
					v-model="phone_num"
					>
					</a-input>
				</a-form-item>

				<a-form-item class="mb-5">
					<label >password</label>
					<a-input
						label="Password"
						type="password"
						class="form-control"
						placeholder="Ex: *********"
						v-model="password"
					>
					</a-input>
				</a-form-item>

				<a-form-item class="mb-10">
					<label>Confirm Password</label>
					<a-input
					type="password"
					class="form-control"
					placeholder="Ex: *********"
					v-model="password_confirmation"
					>
					</a-input>
				</a-form-item>

      </v-form>
    </a-modal>
    <!-- End Modal Add -->
    
  </div>
  
</template>
<script>
import UserDataService from "../services/UserDataService";
const columns = [
  {
    title: 'NAMA',
    dataIndex: 'name',
    key: 'name',
    width: 250
  },
  {
    title: 'EMAIL',
    dataIndex: 'email',
    key: 'email',
    width: 300
    
  },
  {
    title: 'NAMA MERCHANT/TOKO',
    dataIndex: 'merchant.name',
    key: 'merchant.name',
    width: 250
    
  },
  {
    title: 'NOMOR TELP',
    dataIndex: 'phone_num',
    key: 'phone_num',
    width: 175
    
  },
  {
    title: 'ROLE',
    dataIndex: 'role',
    key: 'role',
    width: 100
    
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
    key: 'status',
    width: 125
    
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
		form: null,
		name:'',
		email:'',
		phone_num:'',
		password:'',
		password_confirmation:'',
		role: '',
		errors: null,
		};
  	},
  methods:{
    
    deleteConfirm(id){
	if(confirm("Do you really want to delete?")){
		UserDataService.delete(id)
			.then(response => {
				this.retrieveUsers();
			})
			.catch(e => {
			console.log(e.response);
			});
		}
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
	UserDataService.create(data)
        .then(response => {
          this.retrieveUsers();
		  this.visibleAdd = false;
        })
        .catch(e => {
          this.errors = e.response.data.data;
        });
	},
    retrieveUsers() {
      UserDataService.getAll()
        .then(response => {
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
