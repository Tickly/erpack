export default class Column {
  constructor (opt) {
    const {
      key,
      dataIndex, title,
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
   * @param {*} value 当前单元格的值
   * @param {*} row 当前行的数据
   * @param {*} index 当前行的index
   * @returns 
   */
  render (value, row, index) {
    return value
  }

  to () {
    return {
      key: this.key,
      dataIndex: this.dataIndex,
      title: this.title,
      width: this.width,
      customRender: this.customRender || this.render,
      ellipsis: this.ellipsis
    }
  }
}