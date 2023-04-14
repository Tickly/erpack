<template>
  <div class="app-user">
    <Dropdown overlayClassName="app-user-menu">
      <Badge dot><Avatar shape="square" icon="user" /></Badge>

      <template #overlay>
        <Menu>
          <MenuItem>
            <MessageOutlined />
            <span>通知</span>
            <div class="flex-grow-1 text-right">
              <Badge count="25" />
            </div>
          </MenuItem>
          <MenuItem>
            <SettingOutlined />
            <span>个人中心</span>
          </MenuItem>
          <MenuDivider />
          <MenuItem>
            <PoweroffOutlined />
            <span>退出</span>
          </MenuItem>
        </Menu>
      </template>
    </Dropdown>
  </div>
</template>
<script lang="ts" setup>
import { Dropdown, Badge, Menu, MenuItem, MenuDivider, Avatar } from 'ant-design-vue'
import { PoweroffOutlined, SettingOutlined, MessageOutlined } from '@ant-design/icons-vue'
</script>
<style lang="scss">
.app-user {
  .ant-avatar {
    cursor: pointer;
  }
}
.app-user-menu {
  width: 150px;
  .ant-dropdown-menu {
    // text-align: center;

    .ant-dropdown-menu-item {
      display: flex;
      align-items: center;
    }

    .anticon {
      margin: 10px;
    }
  }
}
</style>
