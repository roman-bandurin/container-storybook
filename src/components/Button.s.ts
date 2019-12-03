import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import Button from 'Src/components/Button';

const button1 = new Button('button 1');

export default {
  title: 'Components|Main/Button',
  component: button1,
  decorators: [
  ],
  parameters: {
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        kindleFire2: {
          name: 'Kindle Fire 2',
          styles: {
            width: '600px',
            height: '963px',
          },
        },
        kindleFireHD: {
          name: 'Kindle Fire HD',
          styles: {
            width: '533px',
            height: '801px',
          },
        },
      },
    },
  },
};
export const button = button1.render.bind(button1);
