<template>
  <a-form-model :model="user" :rules="rules">
    <erp-grid columns="3">
      <a-form-model-item prop="name" label="姓名">
        <a-input v-model="user.name" />
      </a-form-model-item>
      <a-form-model-item prop="age" label="年龄">
        <a-input-number v-model="user.age" />
      </a-form-model-item>
      <a-form-model-item prop="gender" label="性别">
        <a-select allowClear v-model="user.gender" :options="options" />
      </a-form-model-item>
      <erp-grid-item colSpan="3">
        <a-form-model-item prop="address" label="住址">
          <a-textarea v-model="user.address" />
        </a-form-model-item>
      </erp-grid-item>
      <a-form-model-item>
        <a-button type="primary">保存</a-button>
      </a-form-model-item>
    </erp-grid>
  </a-form-model>
</template>
<script>
import dataSource from '../dataSource'

const user = dataSource[0]

export default {
  data () {
    return {
      user,
      rules: {
        name: {
          required: true,
          message: '请输入姓名',
        },
        age: [
          {
            required: true,
            message: '请输入年龄',
          },
          {
            type: 'number',
            min: 0,
            message: '年龄不能小于0',
          }
        ],
        gender: {
          required: true,
          message: '请输入性别',
        },
      },
      options: [
        { label: '男', value: '男' },
        { label: '女', value: '女' },
      ]
    }
  },
}
</script>