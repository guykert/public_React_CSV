import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FirstNameInput } from './FirstNameInput';


export default {
  title: 'Components/Form/FirstNameInput',
  component: FirstNameInput,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof FirstNameInput>;


const Template: ComponentStory<typeof FirstNameInput> = (args) => 

    <div className='bg-white rounded shadow-sm p-10 p-lg-15 mx-auto'>
    <div className='fv-row mb-10'>
    <FirstNameInput {...args} />
    </div>
    </div>

;


export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  LabelClassName:'form-label fw-bolder text-dark fs-6',
  LabelText:'First name',
};

export const RegisterGoogle = Template.bind({});

RegisterGoogle.args = {
  primary: true,
  LabelClassName:'form-label fw-bolder text-dark fs-6',
  LabelText:'First name',
};

