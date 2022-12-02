import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GoogleButton } from './GoogleButton';




export default {
  title: 'Components/Buttons/GoogleButton',
  component: GoogleButton,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof GoogleButton>;


const Template: ComponentStory<typeof GoogleButton> = (args) => 

    <div className='bg-white rounded shadow-sm p-10 p-lg-15 mx-auto'>
    <div className='fv-row mb-10'>
    <GoogleButton {...args} />
    </div>
    </div>

;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  className:'btn btn-flex flex-center btn-light btn-lg w-100 mb-5',
  textoBoton:'Continue with Google',
};

export const Registration = Template.bind({});

Registration.args = {
  primary: true,
  className:'btn btn-light-primary fw-bolder w-100 mb-10',
  textoBoton:'Sign in with Google',
};

