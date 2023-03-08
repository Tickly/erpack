<script>
import { Model, StringProperty, NumberProperty } from 'erpack'

class User extends Model {
  properties () {
    return {
      name: new StringProperty({ label: '姓名', required: true }),
      age: new NumberProperty({
        label: '年龄',
        required: true,
        min: 1,
      }),
    }
  }
}

export default {
  data () {
    return {
      user: new User(),
    }
  },
  methods: {
    handleClick () {
      this.$refs.form.validate()
    }
  },
  render () {
    const { user } = this
    return (
      <erp-form ref="form" form={user} layout="inline">
        <erp-form-item prop="name">
          <a-input vModel={user.name} />
        </erp-form-item>
        <erp-form-item prop="age">
          <a-input-number vModel={user.age} />
        </erp-form-item>
        <erp-form-item>
          <a-button type="primary" onClick={this.handleClick}>验证一下</a-button>
        </erp-form-item>
      </erp-form>
    )
  }
}
</script>