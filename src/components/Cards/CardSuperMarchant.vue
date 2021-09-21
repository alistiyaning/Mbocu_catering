<template>
  <div>
    
		<a-row :gutter="24" type="flex" align="stretch">
			<a-col :span="24" :lg="24" class="mb-24">

        <a-card hoverable style="width: 100%">
        <!-- Table -->
        <a-table :columns="columns" :data-source="data">
          <a slot="name" slot-scope="text">{{ text }}</a>
          <span slot="action" slot-scope="">
            <!-- detail button -->
            <a-button type="default" @click="showDetail">
              Detail
            </a-button>
            
            <a-divider type="vertical" />

            <!-- update button -->
            <a-button type="primary"  @click="updateConfirm">
              Update
            </a-button>

          </span>
        </a-table>
        <!-- Table End -->
        </a-card>
        </a-col>
		</a-row>
    
    <!-- Modal Detail -->
      <a-modal v-model="visibleDetail" title="Detail Item" on-ok="handleOk">
        <template slot="footer">
          <a-button key="back" @click="handleDetailCancel">
            Return
          </a-button>
          <a-button key="submit" type="primary" :loading="loading" @click="handleOk">
            Save
          </a-button>
        </template>
        <a-row type="flex"  >
          <a-col :flex="2" class="mb-10">
            <center>
            <a-avatar shape="square" src="https://images.indianexpress.com/2020/06/online-classes.jpg" :size="200" />
            </center>
          
            <div>
							<h5 class="font-semibold m-0">Gulu-gulu</h5>
							<p class="mt-0">Rp 15.000,00</p>
              <p>Deskripsi:</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi est mollitia dolor molestiae, debitis in officiis similique ipsam aspernatur unde fugit facilis, sapiente repudiandae nam necessitatibus atque sequi! Officiis, voluptatum?</p>
						</div>
          </a-col>
        </a-row>
      </a-modal>
     
  </div>
  
</template>
<script>
const columns = [
  {
    title: 'NO',
    dataIndex: 'key',
    key: 'key',
    width: 80
  },
  {
    title: 'ICON',
    dataIndex: 'icon',
    key: 'icon',
    width: 100
  },
  {
    title: 'NAME',
    dataIndex: 'name',
    key: 'name',
    width: 400
    
  },
  {
    title: 'EMAIL',
    dataIndex: 'email',
    key: 'email',
    width: 300
    
  },
  {
    title: 'ACTION',
    key: 'action',
     scopedSlots: { customRender: 'action' },
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    email:'john@gmail.com',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    email:'jim@gmail.com',
    age: 42,
    address: 'London No. 2 Lake Park, London No. 2 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    email:'joe@gmail.com',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
  },
];

export default {
  methods:{
    updateConfirm(){
      this.$confirm({
        title: 'Do you want to deactivate the user?',
        content: h => <div style="color:red;">Data can be permanently disabled </div>,
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
        class: 'test',
      });
    },
    showUpdate(){
      this.visibleUpdate = true;
      console.log('update click');
    },
    showDetail(){
      this.visibleDetail = true;
    },
    showAdd() {
      this.visibleAdd = true;
    },
    handleUpdateOk(e) {
      this.visibleUpdate = false;
    },
    handleUpdateCancel(e) {
      this.visibleUpdate = false;
    },
    handleDetailCancel(e) {
      this.visibleDetail = false;
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
  },
  data() {
    return {
      loading: false,
      visibleUpdate: false,
      visibleDetail: false,
      data,
      columns,
    };
  },
};
</script>
