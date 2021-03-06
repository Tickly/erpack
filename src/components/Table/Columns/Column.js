/**
 * todo
 * 所有的文本展示列都继承TextColumn
 * 这样就能都带click事件
 */
export default class Column {
  constructor (opt) {
    const {
      key,
      dataIndex,
      title,
      width,
      customRender,
      ellipsis,
    } = opt

    this.key = key
    this.dataIndex = dataIndex
    this.title = title
    this.width = width
    this.customRender = customRender
    this.ellipsis = ellipsis
  }

  /**
   * 
   * @param {Function} h 渲染函数
   * @param {*} value 当前单元格的值
   * @param {Object} row 当前行的数据
   * @param {Number} index 当前行的index
   * @returns 
   */
  render (h, value, row, index) {
    return value
  }

  to (h) {
    return {
      key: this.key,
      dataIndex: this.dataIndex,
      title: this.title,
      width: this.width,
      customRender: (text, record, index) => {
        return this.customRender
          ? this.customRender(text, record, index)
          : this.render(h, text, record, index)
      },
      ellipsis: this.ellipsis
    }
  }

  /**
   * 解析器
   * @param {*} col 列
   */
  static parser (col) {

  }
}