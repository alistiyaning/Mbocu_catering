<template>
  <div>
    
		<a-row :gutter="24" type="flex" align="stretch">
			<!-- Table -->
			<a-col :span="24" :lg="24" class="mb-24">

        <!-- add button -->
        <a-button @click="showAdd" class="mb-24">
          Add Item
        </a-button>
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
      <a-form
        id="addForm"
        :form="form"
        v-bind="formItemLayout"
        @submit="handleSubmitAdd"
      >
        <a-form-item label="Icon" extra="Uploud new icon">
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

      <a-form-item label="Name">
        <a-input
          v-decorator="[
            'name',
            { rules: [{ required: true, message: 'Please input your name !' }] },
          ]"
          placeholder="name"
        >
        </a-input>
      </a-form-item>

      <a-form-item label="Price">
        <a-input-number
      :formatter="value => ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
      :parser="value => value.replace(/\$\s?|(,*)/g, '')"
      @change="onChange"

          v-decorator="[
            'Price',
            { rules: [{ required: true, message: 'Please input your Price !' }] },
          ]"
          placeholder="Price" style="width:100%"
        />
      </a-form-item>
      
      <a-form-item label="Deskripsi">
        <a-textarea placeholder="Deskripsi" :rows="4"

          v-decorator="[
            'Deskripsi',
            { rules: [{ required: true, message: 'Please input your Deskripsi !' }] },
          ]"/>
      </a-form-item>

      </a-form>
    </a-modal>
    <!-- End Modal Add -->
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
      <!-- End Modal Detail -->
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
    title: 'NAMA',
    dataIndex: 'name',
    key: 'name',
    width: 400
    
  },
  {
    title: 'NAMA MERCHANT/TOKO',
    dataIndex: 'toko',
    key: 'toko',
    width: 400
    
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
    name: 'Nasi Goreng Alami',
    toko: 'Jambu',
  },
  {
    key: '2',
    name: 'Telur Ceplok',
    toko: 'La Turin',
  },
  {
    key: '3',
    name: 'Bakmi Goreng',
    toko: 'Siesta',
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
  },
  data() {
    return {
      loading: false,
      visibleEdit: false,
      visibleDetail: false,
      visibleAdd: false,
      data,
      columns,
    };
  },
};
</script>
