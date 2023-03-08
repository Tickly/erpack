# FAQ


## Cannot find module 'core-js/library/fn/object/define-property'
因为`ant-design-vue`里面用到的core-js是2.x版本的，然后通常`vue-cli`创建的项目使用的都是core-js@3.x的。  
解决办法：安装core-js@2.x即可解决