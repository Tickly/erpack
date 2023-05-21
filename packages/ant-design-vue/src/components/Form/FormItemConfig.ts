export interface FormItemConfig {
  label: string
  /**
   * 可见性
   * @returns
   */
  visible?: () => boolean
}
