(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{703:function(a,v,_){"use strict";_.r(v);var e=_(8),t=Object(e.a)({},(function(){var a=this,v=a._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"model-模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#model-模型"}},[a._v("#")]),a._v(" Model 模型")]),a._v(" "),v("h2",{attrs:{id:"为什么要写模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么要写模型"}},[a._v("#")]),a._v(" 为什么要写模型？")]),a._v(" "),v("h3",{attrs:{id:"少写字段中文名称"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#少写字段中文名称"}},[a._v("#")]),a._v(" 少写字段中文名称")]),a._v(" "),v("p",[a._v("比如一个用户管理页面")]),a._v(" "),v("h4",{attrs:{id:"搜索表单里"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#搜索表单里"}},[a._v("#")]),a._v(" 搜索表单里")]),a._v(" "),v("p",[a._v("搜索区域有一个搜索项"),v("code",[a._v("用户名称")]),a._v("，那么相关代码可能是"),v("code",[a._v('<FormItem prop="userName" label="用户名称">')]),a._v("。")]),a._v(" "),v("h4",{attrs:{id:"表格列里"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#表格列里"}},[a._v("#")]),a._v(" 表格列里")]),a._v(" "),v("p",[a._v("数据展示区域的表格有一列"),v("code",[a._v("用户名称")]),a._v("，那么该列的配置大概是"),v("code",[a._v("{ dataIndex: 'userName', title: '用户名称' }")]),a._v("。")]),a._v(" "),v("h4",{attrs:{id:"新增页面中"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#新增页面中"}},[a._v("#")]),a._v(" 新增页面中")]),a._v(" "),v("p",[a._v("表单有一项"),v("code",[a._v("用户名称")]),a._v("，代码"),v("code",[a._v('<FormItem prop="userName" label="用户名称">')]),a._v("。")]),a._v(" "),v("h4",{attrs:{id:"验证提示中"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#验证提示中"}},[a._v("#")]),a._v(" 验证提示中")]),a._v(" "),v("p",[a._v("有的验证规则还得写一个必填的提示"),v("code",[a._v("请输入用户名称")]),a._v("，代码 "),v("code",[a._v("{ required: true, message: '请输入用户名称' }")]),a._v("。")]),a._v(" "),v("h4",{attrs:{id:"需求变更的代价"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#需求变更的代价"}},[a._v("#")]),a._v(" 需求变更的代价")]),a._v(" "),v("p",[a._v("偶尔还会碰到产品告诉你，我们这里不叫"),v("code",[a._v("用户名称")]),a._v("了，改成"),v("code",[a._v("金主爸爸")]),a._v("。\n你就得全文搜索"),v("code",[a._v("用户名称")]),a._v(",然后还要一个个看看搜索结果里出来的能不能改。")]),a._v(" "),v("hr"),a._v(" "),v("p",[a._v("用了模型之后，你在所有地方，只需要写字段名称就行，所有的组件，会自动从模型里面找到该字段对应的中文名称。")]),a._v(" "),v("h4",{attrs:{id:"搜索表单里-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#搜索表单里-2"}},[a._v("#")]),a._v(" 搜索表单里")]),a._v(" "),v("p",[v("code",[a._v('<FormItem prop="userName"')]),v("s",[v("code",[a._v('label="用户名称"')])]),v("code",[a._v(">")])]),a._v(" "),v("h4",{attrs:{id:"表格列里-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#表格列里-2"}},[a._v("#")]),a._v(" 表格列里")]),a._v(" "),v("p",[v("code",[a._v("{ dataIndex: 'userName',")]),v("s",[v("code",[a._v("title: '用户名称'")])]),v("code",[a._v("}")])]),a._v(" "),v("h4",{attrs:{id:"新增页面中-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#新增页面中-2"}},[a._v("#")]),a._v(" 新增页面中")]),a._v(" "),v("p",[v("code",[a._v('<FormItem prop="userName"')]),v("s",[v("code",[a._v('label="用户名称"')])]),v("code",[a._v(">")])]),a._v(" "),v("h4",{attrs:{id:"验证提示中-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#验证提示中-2"}},[a._v("#")]),a._v(" 验证提示中")]),a._v(" "),v("p",[a._v("模型提供的功能，可以让你无需填写验证的"),v("code",[a._v("message")]),a._v("。")]),a._v(" "),v("h3",{attrs:{id:"统一数据格式交互流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#统一数据格式交互流程"}},[a._v("#")]),a._v(" 统一数据格式交互流程")]),a._v(" "),v("p",[a._v("通常我们编辑一条数据，会经历以下几个步骤。")]),a._v(" "),v("ul",[v("li",[a._v("根据 id 请求接口获取详细数据")]),a._v(" "),v("li",[a._v("页面上各种组件交互更新数据")]),a._v(" "),v("li",[a._v("点击保存，构造请求参数，请求保存接口")])]),a._v(" "),v("p",[a._v("那么某个字段对应的就要去做处理")]),a._v(" "),v("ul",[v("li",[a._v("查询接口拿到数据，要转成组件需要的格式。")]),a._v(" "),v("li",[a._v("提交保存的时候，根据组件的输出，可能还需要转成接口需要的格式。")])]),a._v(" "),v("p",[a._v("举个例子来说，在编辑用户的时候，有个字段是兴趣爱好，下拉，多选。\n获取详情的接口返回的值可能是"),v("code",[a._v("[{label,value}...]")]),a._v("这样一个数组，但是页面上的下拉组件接收的"),v("code",[a._v("value")]),a._v("值可能是"),v("code",[a._v("[value1,value2...]")]),a._v("这样的格式，然后保存接口也许是需要逗号拼接的字符串。")]),a._v(" "),v("p",[a._v("那么这时候就可以定义出一个字段的行为，把这些行为统一起来。")]),a._v(" "),v("h3",{attrs:{id:""}},[v("a",{staticClass:"header-anchor",attrs:{href:"#"}},[a._v("#")])]),a._v(" "),v("h2",{attrs:{id:"怎么写模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#怎么写模型"}},[a._v("#")]),a._v(" 怎么写模型？")])])}),[],!1,null,null,null);v.default=t.exports}}]);