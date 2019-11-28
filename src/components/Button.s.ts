import Button from '../components/Button';

const button1 = new Button('button 1');

export default {
  title: 'Components|Main/Button',
  component: button1,
  decorators: [],
  parameters: {},
};
export const button = button1.render.bind(button1);
