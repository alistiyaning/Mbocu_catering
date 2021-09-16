<template>
  <div>
    <!-- add button -->
    <a-button @click="showModal">
      ADD
    </a-button>
      <a-modal v-model="visibleAdd" title="Add new " @ok="handleOk">
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

        </a-form>
      </a-modal>

        <!-- table -->
    <a-table :columns="columns" :data-source="data">
      <a slot="name" slot-scope="text">{{ text }}</a>
      <span slot="action" slot-scope="">
                
                <!-- edit button -->
        <a-button type="primary" @click="showEdit">
          Edit
        </a-button>
          <a-modal v-model="visible" title="Title" on-ok="handleOk">
            <template slot="footer">
              <a-button key="back" @click="handleCancel">
                Return
              </a-button>
              <a-button key="submit" type="primary" :loading="loading" @click="handleOk">
                Save
              </a-button>
            </template>
              <p>Aiiiiiiiiii</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
          </a-modal>
          <a-divider type="vertical" />
            <!-- delete button -->
        <a-button type="danger" @click="deleteConfirm">
          Delete
        </a-button>
      </span>
    </a-table>
  </div>
</template>
<script>
const columns = [
  {
    title: 'NO',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'ICON',
    dataIndex: 'icon',
    key: 'icon',
  },
  {
    title: 'NAME',
    dataIndex: 'name',
    key: 'name',
    scopedSlots: { customRender: 'name' },
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
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 2 Lake Park, London No. 2 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
  },
];

export default {
  methods:{
    deleteConfirm(){
      this.$confirm({
        title: 'Do you Want to delete these items?',
        content: h => <div style="color:red;">Some descriptions</div>,
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
      this.visible = true;
    },
      handleOk(e) {
        this.ModalText = 'The modal will be closed after two seconds';
        this.confirmLoading = true;
        setTimeout(() => {
          this.visible = false;
          this.confirmLoading = false;
        }, 2000);
      },
      handleCancel(e) {
        console.log('Clicked cancel button');
        this.visible = false;
      },
      
    showModal() {
      this.visibleAdd = true;
    },
      handleOk(e) {
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
      visible: false,
      visibleAdd: false,
      data,
      columns,
    };
  },
};
</script>
