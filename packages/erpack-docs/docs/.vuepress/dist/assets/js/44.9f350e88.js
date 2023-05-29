(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{715:function(t,s,a){"use strict";a.r(s);var n=a(8),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"stringcolumn-文本列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stringcolumn-文本列"}},[t._v("#")]),t._v(" StringColumn 文本列")]),t._v(" "),s("p",[t._v("默认的列类型，将数据原样展示。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" columns "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 直接写字段名称")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 相当于下面这样的写法")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可省略type，默认就是 string")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// type: "string",')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("dataIndex")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'姓名'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"配置项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置项"}},[t._v("#")]),t._v(" 配置项")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("formatter")]),t._v(" "),s("td",[t._v("单元格内容格式器，支持字符串模板和回调函数两种形式。")]),t._v(" "),s("td",[s("code",[t._v("String")]),t._v(" "),s("code",[t._v("Function")])]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("text-colors")]),t._v(" "),s("td",[t._v("文本颜色")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td")])])]),t._v(" "),s("h2",{attrs:{id:"格式化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#格式化"}},[t._v("#")]),t._v(" 格式化")]),t._v(" "),s("p",[t._v("比如某个列是要展示成百分比，或者要加个什么单位。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 文本方式")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("formatter")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{v}%'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 回调方式")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("formatter")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("v")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"文本颜色"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文本颜色"}},[t._v("#")]),t._v(" 文本颜色")]),t._v(" "),s("p",[t._v("一种常见需求是，当数据值达到一定范围后，数据展示为红色。")]),t._v(" "),s("p",[t._v("这里提供一个配置用来快速设置此情况。")]),t._v(" "),s("ul",[s("li",[t._v("当数据等于某个值时，显示何种颜色。")]),t._v(" "),s("li",[t._v("当数据在某个范围内，显示何种颜色。")])])])}),[],!1,null,null,null);s.default=r.exports}}]);