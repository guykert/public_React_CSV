import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SubmitButton } from './SubmitButton';




export default {
  title: 'Components/Buttons/SubmitButton',
  component: SubmitButton,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SubmitButton>;


const Template: ComponentStory<typeof SubmitButton> = (args) => 

    <div className='bg-white rounded shadow-sm p-10 p-lg-15 mx-auto'>
    <div className='fv-row mb-10'>
    <SubmitButton {...args} />
    </div>
    </div>

;

export const Registration = Template.bind({});

Registration.args = {
  primary: true,
  className:'btn btn-lg btn-primary w-100 mb-5',
  textoBoton:'Submit',
  disabled:false,
  loading:false,

};

export const RegisterGoogle = Template.bind({});

RegisterGoogle.args = {
  primary: true,
  className:'btn btn-lg btn-primary w-100 mb-5',
  textoBoton:'Submit',
  disabled:false,
  loading:false,

};
