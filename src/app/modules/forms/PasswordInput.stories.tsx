import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { PasswordInput } from './PasswordInput';

export default { 
  title: 'Components/Form/PasswordInput',
  component: PasswordInput,
  decorators: [withRouter],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PasswordInput>;


const Template: ComponentStory<typeof PasswordInput> = (args) => 

    <div className='bg-white rounded shadow-sm p-10 p-lg-15 mx-auto'>
    <div className='fv-row mb-10'>
    <PasswordInput {...args} />
    </div>
    </div>

;


export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  LabelClassName:'d-flex justify-content-between mt-n5',
  LabelText:'Password',
  divClassName:'d-flex flex-stack mb-2',
  forgotPassword: true,
};

export const Registration = Template.bind({});

Registration.args = {
  primary: false,
  LabelClassName:'form-label fw-bolder text-dark fs-6',
  LabelText:'Password',
  divClassName:'position-relative mb-3',
};

export const RegisterGoogle = Template.bind({});

RegisterGoogle.args = {
  primary: false,
  LabelClassName:'form-label fw-bolder text-dark fs-6',
  LabelText:'Password',
  divClassName:'position-relative mb-3',
};

