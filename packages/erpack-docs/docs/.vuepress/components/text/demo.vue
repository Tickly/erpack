<template>
  <erp-grid :columns="3" gap="2em">
    <a-card title="基本">
      <erp-text text="Hello World!" />
    </a-card>
    <a-card title="格式化展示">
      <ul>
        <li>
          <strong>数字</strong>
          <erp-text :text="50" :formatter="(t) => t + '%'" />
        </li>
        <li>
          <strong>时间</strong>
          <erp-text :text="date" :formatter="dateFormatter" />
        </li>
        <li>
          <strong>布尔型</strong>
          <erp-text :text="true" :formatter="(v) => (v ? '是' : '否')" />
        </li>
      </ul>
    </a-card>
    <a-card title="动态颜色">
      <ul>
        <li>
          <strong>回调写法</strong>
          <erp-text :text="50" :colors="{ danger: (n) => n < 80 }" />
        </li>
        <li>
          <strong>其余情况直接判断是否等于text</strong>
          <erp-text
            :text="50"
            :colors="{
              danger: '50',
              success: 50,
            }"
          />
        </li>
      </ul>
    </a-card>
  </erp-grid>
</template>
<script>
import moment from 'moment'
export default {
  data () {
    return {
      date: new Date(),
      dateFormatter: v => moment(v).format('YYYY-MM-DD HH:mm:ss')
    }
  },
}
</script>
