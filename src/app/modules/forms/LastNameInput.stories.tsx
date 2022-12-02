import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LastNameInput } from './LastNameInput';

export default { 
  title: 'Components/Form/LastNameInput',
  component: LastNameInput,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LastNameInput>;


const Template: ComponentStory<typeof LastNameInput> = (args) => 

    <div className='bg-white rounded shadow-sm p-10 p-lg-15 mx-auto'>
    <div className='fv-row mb-10'>
    <LastNameInput {...args} />
    </div>
    </div>

;


export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  LabelClassName:'form-label fw-bolder text-dark fs-6',
  LabelText:'Last name',
};

export const RegisterGoogle = Template.bind({});

RegisterGoogle.args = {
  primary: true,
  LabelClassName:'form-label fw-bolder text-dark fs-6',
  LabelText:'Last name',
};
