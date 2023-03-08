<script>
export default {
  render() {
    return <erp-form layout="inline">
      <erp-grid columns="3">
        <erp-grid-item colSpan="2">
          <erp-form-item label="a">
            <a-input />
          </erp-form-item>
        </erp-grid-item>
        <erp-form-item label="bb">
          <a-input />
        </erp-form-item>
        <erp-form-item label="ccc">
          <a-input />
        </erp-form-item>
        <erp-form-item label="dddd">
          <a-input />
        </erp-form-item>
        <erp-form-item label="eeeee">
          <a-input />
        </erp-form-item>
        <erp-form-item label="ffffff">
          <a-input />
        </erp-form-item>
        <erp-form-item label="ggggggg">
          <a-input />
        </erp-form-item>
      </erp-grid>
    </erp-form>
  }
}
</script>
<style lang="less">
.erp-form {
  .erp-grid {
    .erp-form-item {
      display: flex;

      .ant-form-item-control-wrapper{
        flex-grow: 1;
      }
    }
  }
}
</style>