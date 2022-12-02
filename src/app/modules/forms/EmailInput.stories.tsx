import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EmailInput } from './EmailInput';


export default {
  title: 'Components/Form/EmailInput',
  component: EmailInput,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof EmailInput>;


const Template: ComponentStory<typeof EmailInput> = (args) => 

    <div className='bg-white rounded shadow-sm p-10 p-lg-15 mx-auto'>
    <div className='fv-row mb-10'>
    <EmailInput {...args} />
    </div>
    </div>

;

export const ForgotPassword = Template.bind({});

ForgotPassword.args = {
  LabelClassName:'form-label fw-bolder text-gray-900 fs-6',
  LabelText:'Email',
};

export const Login = Template.bind({});

Login.args = {
  LabelClassName:'form-label fw-bolder text-dark fs-6 mb-0',
  LabelText:'Email',
};

export const Registration = Template.bind({});

Registration.args = {
  LabelClassName:'form-label fw-bolder text-dark fs-6',
  LabelText:'Email',
};



export const RegisterGoogle = Template.bind({});

RegisterGoogle.args = {
  LabelClassName:'form-label fw-bolder text-dark fs-6',
  LabelText:'Email',
};