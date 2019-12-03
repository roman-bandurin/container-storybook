import Button from 'Src/components/Button';
import App from 'Src/app/App';

const mainButton = new Button('mainButton');
const app = new App(mainButton);

if (document !== null) {
  const el = document.getElementById('app');
  if (el !== null) {
    el.innerHTML = app.render();
  }
}
