import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CancelButton } from './CancelButton';



export default {
  title: 'Components/Buttons/CancelButton',
  component: CancelButton,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CancelButton>;


const Template: ComponentStory<typeof CancelButton> = (args) => 

    <div className='bg-white rounded shadow-sm p-10 p-lg-15 mx-auto'>
    <div className='fv-row mb-10'>
    <CancelButton {...args} />
    </div>
    </div>

;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  className:'btn btn-lg btn-light-primary w-100 mb-5',
  textoBoton:'Cancel',

};

export const ForgotPassword = Template.bind({});

ForgotPassword.args = {
  primary: true,
  className:'btn btn-lg btn-light-primary fw-bolder',
  textoBoton:'Cancel',

};

export const RegisterGoogle = Template.bind({});

RegisterGoogle.args = {
  primary: true,
  className:'btn btn-lg btn-light-primary w-100 mb-5',
  textoBoton:'Cancel',

};
