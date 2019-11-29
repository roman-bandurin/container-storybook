import Button from '../components/Button';
import App from './App';

const mainButton = new Button('mainButton');
const app = new App(mainButton);

test('app correct rendered', () => {
  expect(app.render()).toBe(`<div class="app">
      <button>mainButton</button>
    </div>`);
});