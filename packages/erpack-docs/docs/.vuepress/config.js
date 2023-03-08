module.exports = {
  base: '/erpack-docs/',
  themeConfig: {
    navbar: false,
    sidebar: [
      '/',
      // {
      //   title: '对比',
      //   children: [
      //     '/diff/antd',
      //     '/diff/erpack'
      //   ]
      // },
      // {
      //   title: '模型',
      //   children: [
      //     '/Model',
      //     '/model/definition',
      //     '/model/property/',
      //   ]
      // },
      // {
      //   title: '布局组件',
      //   children: [
      //     '/layout/grid',
      //     '/layout/flex',
      //   ]
      // },
      // {
      //   title: 'Table 表格',
      //   path: '/components/table',
      //   children: [
      //     {
      //       title: '表格列',
      //       children: [
      //         '/components/table/column-type',
      //         '/components/table/columns/string',
      //         '/components/table/columns/serial',
      //         '/components/table/columns/date',
      //         '/components/table/columns/number',
      //         '/components/table/columns/tag',
      //         '/components/table/columns/action',
      //       ]
      //     },
      //     '/components/table/use-table-columns',
      //     '/components/table/demo',
      //   ]
      // },
      // {
      //   title: 'Form 表单',
      //   children: [
      //     '/components/form/',
      //   ]
      // },
      // {
      //   title: '组件',
      //   children: [
      //     '/components/text/',
      //     '/components/Button',
      //     '/components/ActionButtons',
      //     '/components/Descriptions',
      //   ]
      // },
      // {
      //   title: '风格指南',
      //   children: [
      //     '/style-guide/CRUD-common',
      //     '/style-guide/business-component',
      //     '/style-guide/extend-modal',
      //     '/style-guide/page',
      //     '/style-guide/list-page',
      //   ]
      // },
      'vision',
      'FAQ',
    ],
  },
  plugins: [
    'code-example',
    // require('../../../vuepress-plugin-code-example')
  ],
};
