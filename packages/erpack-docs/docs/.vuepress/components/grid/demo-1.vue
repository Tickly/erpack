<script>
export default {
  render () {
    return <erp-grid class="grid-demo-1" rows="repeat(3, 100px)" columns="repeat(3, 200px)" gap="10px">
      <erp-grid-item class="bg-1" row={2} column={2}>1</erp-grid-item>
      <erp-grid-item class="bg-2">2</erp-grid-item>
      <erp-grid-item class="bg-3">3</erp-grid-item>
      <erp-grid-item class="bg-4" column="3" row="2 / 4">4</erp-grid-item>
      <erp-grid-item class="bg-5">5</erp-grid-item>
    </erp-grid>
  }
}
</script>
<style lang="less">
.grid-demo-1 {
  color: white;
  line-height: 1;

  .erp-grid-item {
    padding-left: 1em;
    padding-top: 1em;
  }

  .bg-1 {
    background-color: #b03531;
  }
  .bg-2 {
    background-color: #33a8a5;
  }
  .bg-3 {
    background-color: #30997b;
  }
  .bg-4 {
    background-color: #6a478f;
  }
  .bg-5 {
    background-color: #da6f2b;
  }
}
</style>