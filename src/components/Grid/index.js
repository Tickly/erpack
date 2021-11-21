import Grid from './Grid'
import GridItem from './GridItem'
import './style.less'

Grid.Item = GridItem

export { Grid, GridItem }

export default {
  install (Vue) {
    Vue.component(Grid.name, Grid)
    Vue.component(GridItem.name, GridItem)
  }
}