import { JSDOM } from 'jsdom';
import Button from 'Src/components/Button';
import App from 'Src/app/App';

let jsdom: JSDOM;
let mainButton: Button;
let app: App;
let appEl: HTMLElement;

beforeEach(() => {
  mainButton = new Button('mainButton');
  app = new App(mainButton);
  jsdom = new JSDOM('<!DOCTYPE html><div id="app"></div>');
  appEl = jsdom.window.document.getElementById('app') || new HTMLElement();
});

test('app correct rendered', () => {
  appEl.innerHTML = app.render();
  const el = appEl.querySelector('.app button') || new HTMLElement();
  expect(el.textContent).toBe('mainButton');
});
