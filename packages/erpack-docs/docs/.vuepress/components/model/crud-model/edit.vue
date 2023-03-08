<template>
  <erp-form :form="user">
    <erp-grid columns="3">
      <erp-form-item prop="name">
        <a-input v-model="user.name" />
      </erp-form-item>
      <erp-form-item prop="age">
        <a-input-number v-model="user.age" />
      </erp-form-item>
      <erp-form-item prop="gender">
        <a-select allowClear v-model="user.gender" :options="options" />
      </erp-form-item>
      <erp-grid-item colSpan="3">
        <erp-form-item prop="address">
          <a-textarea v-model="user.address" />
        </erp-form-item>
      </erp-grid-item>
    </erp-grid>
  </erp-form>
</template>
<script>
import dataSource from '../dataSource'
import User from '../User'

const user = new User(dataSource[0])

export default {
  data () {
    return {
      user,
      options: [
        { label: '男', value: '男' },
        { label: '女', value: '女' },
      ]
    }
  },
}
</script>