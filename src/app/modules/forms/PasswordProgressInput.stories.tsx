import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { PasswordProgressInput } from './PasswordProgressInput';

export default { 
  title: 'Components/Form/PasswordProgressInput',
  component: PasswordProgressInput,
  decorators: [withRouter],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PasswordProgressInput>;


const Template: ComponentStory<typeof PasswordProgressInput> = (args) => 

    <div className='bg-white rounded shadow-sm p-10 p-lg-15 mx-auto'>
    <div className='fv-row mb-10'>
    <PasswordProgressInput {...args} />
    </div>
    </div>

;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
};

export const RegisterGoogle = Template.bind({});

RegisterGoogle.args = {
  primary: true,
};
