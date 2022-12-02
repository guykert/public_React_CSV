
export type TInputText = {
  LabelClassName?: string
  InputClassName?: string
  divClassName?: string
  LabelText?: string
  getFieldProps?: any
  formik?: any
  touched?: boolean
  forgotPassword?: boolean
  errors?: string
  disabled?: boolean
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
}