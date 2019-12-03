import Button from 'Src/components/Button';

const button1 = new Button('button 2');

export default {
  title: 'Components|Main2/Button2',
  component: button1,
  decorators: [],
  parameters: {},
};
export const button = button1.render.bind(button1);
export const button2 = button1.render.bind(button1);
