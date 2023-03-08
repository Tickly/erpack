<script>
import { Model, Property } from 'erpack'

class User extends Model {
  properties () {
    return {
      username: new Property('用户名'),
      telephone: new Property('电话号码'),
      live: new Property('居住地'),
      remark: new Property('简介'),
      address: new Property('详细地址'),
    }
  }
}

export default {
  data () {
    return {
      user: new User({
        username: 'Zhou Maomao',
        telephone: '1810000000',
        live: 'Hangzhou, Zhejiang',
        remark: 'empty',
        address: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
      })
    }
  },
  render () {
    return <erp-descriptions
      label-width="120px"
      form={this.user}
      items={[
        { prop: 'username', span: 3 },
        'telephone',
        'live',
        'remark',
        'address',
      ]}
    />
  }
}
</script>