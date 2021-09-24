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
          <span slot="action" slot-scope="">
            
            
            <!-- delete button -->
            <a-button type="danger" @click="deleteConfirm">
              Delete
            </a-button>
          
          </span>
        </a-table>
        <!-- Table End -->
        </a-card>
        </a-col>
		</a-row>
    
    <!-- Modal Add -->
    <a-modal v-model="visibleAdd" title="Add new " @ok="handleAddOk">
      <v-form
				id="components-form-demo-normal-login"
				:form="form"
				class="login-form"
				
			>
				<a-form-item class="mb-10">
					<label >Nama Lengkap</label>
					<a-input
					type="text"
					class="form-control"
					placeholder="nama"
					>
					</a-input>
				</a-form-item>

				<a-form-item class="mb-10">
					<label >Email</label>
					<a-input
					type="email"
					class="form-control"
					placeholder="email"
					>
					</a-input>
				</a-form-item>

				<a-form-item class="mb-10">
					<label >Nomor telfon</label>
					<a-input
					type="number"
					class="form-control"
					placeholder="nomor telfon"
					>
					</a-input>
				</a-form-item>

				<a-form-item class="mb-5">
					<label >Password</label>
					<a-input
						label="Password"
						type="password"
						class="form-control"
						placeholder="Password"
					>
					</a-input>
				</a-form-item>

				<a-form-item class="mb-10">
					<label>Confirm Password</label>
					<a-input
					type="password"
					class="form-control"
					placeholder="confirm password"
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
    width: 400
  },
  {
    title: 'EMAIL',
    dataIndex: 'email',
    key: 'email',
    width: 400
    
  },
  {
    title: 'NAMA MERCHANT/TOKO',
    dataIndex: 'merchant.name',
    key: 'merchant.name',
    width: 200
    
  },
  {
    title: 'NOMOR TELP',
    dataIndex: 'phone_num',
    key: 'phone_num',
    width: 200
    
  },
  {
    title: 'ACTION',
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
		};
  	},
  methods:{
    
    deleteConfirm(){
      this.$confirm({
        title: 'Do you Want to delete these items?',
        content: h => <div style="color:red;">The data can remove permanently</div>,
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
        class: 'test',
      });
    },
    showEdit(){
      this.visibleEdit = true;
      console.log('edit click');
    },
    showDetail(){
      this.visibleDetail = true;
    },
    showAdd() {
      this.visibleAdd = true;
    },
    handleEditOk(e) {
      this.visibleEdit = false;
    },
    handleEditCancel(e) {
      this.visibleEdit = false;
    },
    handleAddOk(e) {
    this.visibleAdd = false;
    },
    handleAddOk(e) {
    console.log(e);
    this.visibleAdd = false;
    },

    // handle form
    handleSubmitAdd(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
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
