import StringColumn from './StringColumn'
import DateColumn from './DateColumn'
import NumberColumn from './NumberColumn'
import SerialColumn from './SerialColumn'
import ActionColumn from './ActionColumn'
import TagColumn from './TagColumn'

const ColumnsMap = {
  string: StringColumn,
  date: DateColumn,
  number: NumberColumn,
  serial: SerialColumn,
  action: ActionColumn,
  tag: TagColumn,
}

export const registerColumn = (type, column) => {
  if (Reflect.has(ColumnsMap, type)) {
    throw new Error('已经有该类型的列了。')
  }
  Reflect.set(ColumnsMap, type, column)
}

export const getColumn = (col, model) => {
  // 先将字符串转成对象
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
    type = 'string',
    dataIndex,
    title
  } = col

  // 如果没有设置title，需要从别的地方获取。
  if (title === undefined) {
    // 先用字段名充当
    col.title = dataIndex
    // 如果指定了模型
    if (model) {
      const property = model.getProperty(dataIndex)
      if (property) {
        col.title = property.label
      }
    }
  }

  if (ColumnsMap[type]) {
    return new ColumnsMap[type](col)
  } else {
    throw new Error('没有找到这个类型的列')
  }
}

