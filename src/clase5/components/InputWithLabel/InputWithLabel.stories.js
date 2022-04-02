import InputWithLabel from './InputWithLabel'

export default {
  title: 'Input With Label',
  component: InputWithLabel,
}

export const Default = () => <InputWithLabel />
export const WithLabel = () => <InputWithLabel label="hola" />
export const Password = () => <InputWithLabel label="password" type="password" />
