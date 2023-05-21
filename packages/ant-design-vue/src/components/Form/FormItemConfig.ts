export interface FormItemConfig<T = Record<string, any>> {
  label: string
  /**
   * 可见性
   * @returns
   */
  visible?: (form: T) => boolean
  /**
   * 自定义渲染
   * @returns
   */
  customRender?: () => any
}
