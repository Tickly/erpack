<template>
  <div class="app-user">
    <a-dropdown overlayClassName="app-user-menu">
      <a-badge dot><a-avatar shape="square" icon="user" /></a-badge>

      <a-menu slot="overlay">
        <a-menu-item>
          <a-icon type="message" />
          <span>通知</span>
          <div class="flex-grow-1 text-right">
            <a-badge count="25" />
          </div>
        </a-menu-item>
        <a-menu-item>
          <a-icon type="setting" />
          <span>个人中心</span>
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item>
          <a-icon type="poweroff" />
          <span>退出</span>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>
<style lang="less">
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
