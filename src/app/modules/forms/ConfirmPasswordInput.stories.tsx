import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ConfirmPasswordInput } from './ConfirmPasswordInput';


export default {
  title: 'Components/Form/ConfirmPasswordInput',
  component: ConfirmPasswordInput,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ConfirmPasswordInput>;


const Template: ComponentStory<typeof ConfirmPasswordInput> = (args) => 

    <div className='bg-white rounded shadow-sm p-10 p-lg-15 mx-auto'>
    <div className='fv-row mb-10'>
    <ConfirmPasswordInput {...args} />
    </div>
    </div>

;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  LabelClassName:'form-label fw-bolder text-dark fs-6',
  LabelText:'Confirm Password',
};

export const RegisterGoogle = Template.bind({});

RegisterGoogle.args = {
  primary: false,
  LabelClassName:'form-label fw-bolder text-dark fs-6',
  LabelText:'Confirm Password',
};
