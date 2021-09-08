import Column from './Column'
import DateColumn from './DateColumn'
import NumberColumn from './NumberColumn'
import SerialColumn from './SerialColumn'

const ColumnsMap = {
  text: Column,
  date: DateColumn,
  number: NumberColumn,
  serial: SerialColumn,
}

export const getColumn = (col) => {
  if (typeof col === typeof '') {
    if (col === '#') {
      col = {
        type: 'serial',
      }
    } else {
      col = {
        dataIndex: col,
      }
    }
  }

  const {
    type = 'text'
  } = col

  if (ColumnsMap[type]) {
    return new ColumnsMap[type](col)
  } else {
    throw new Error('没有找到这个类型的列')
  }
}