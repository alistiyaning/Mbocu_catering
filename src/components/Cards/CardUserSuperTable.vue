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
					v-model="nama"
					>
					</a-input>
				</a-form-item>

				<a-form-item class="mb-10">
					<label >Email</label>
					<a-input
					type="email"
					class="form-control"
					placeholder="email"
					v-model="email"
					>
					</a-input>
				</a-form-item>

				<a-form-item class="mb-10">
					<label >Nomor telfon</label>
					<a-input
					type="number"
					class="form-control"
					placeholder="nomor telfon"
					v-model="telfon"
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
						v-model="password"
					>
					</a-input>
				</a-form-item>

				<a-form-item class="mb-10">
					<label>Confirm Password</label>
					<a-input
					type="password"
					class="form-control"
					placeholder="confirm password"
					v-model="confirmPassword"
					>
					</a-input>
				</a-form-item>

      </v-form>
    </a-modal>
    <!-- End Modal Add -->
    
  </div>
  
</template>
<script>
import UserDataService from "../../services/UserDataService";
const columns = [
  {
    title: 'NO',
    dataIndex: 'key',
    key: 'key',
    width: 80
  },
  {
    title: 'NAMA',
    dataIndex: 'name',
    key: 'name',
    width: 200
  },
  {
    title: 'EMAIL',
    dataIndex: 'email',
    key: 'email',
    width: 400
    
  },
  {
    title: 'NAMA MERCHANT/TOKO',
    dataIndex: 'toko',
    key: 'toko',
    width: 200
    
  },
  {
    title: 'NOMOR TELP',
    dataIndex: 'notelp',
    key: 'notelp',
    width: 200
    
  },
  {
    title: 'ACTION',
    key: 'action',
     scopedSlots: { customRender: 'action' },
  },
];


export default {
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
          console.log(response.data.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveUsers();
      this.currentUser = null;
      this.currentIndex = -1;
    },
    setActiveUser(user, index) {
      this.currentUser = user;
      this.currentIndex = user ? index : -1;
    },
    searchTitle() {
      UserDataService.findByTitle(this.title)
        .then(response => {
          this.tutorials = response.data;
          this.setActiveTutorial(null);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  data() {
    return {
      loading: false,
      visibleEdit: false,
      visibleDetail: false,
      visibleAdd: false,
      data,
      columns,
      currentUser: null,
      currentIndex: -1,
      title: ""
    };
  },
  mounted() {
    this.retrieveUsers();
  }
};
</script>
