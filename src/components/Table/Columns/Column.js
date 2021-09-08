export default class Column {
  constructor (opt) {
    const { dataIndex, title } = opt

    this.dataIndex = dataIndex
    this.title = title
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
      dataIndex: this.dataIndex,
      title: this.title,
      customRender: this.render,
    }
  }
}