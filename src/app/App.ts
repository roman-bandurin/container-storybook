import IComponent from '../components/IComponent';
import Button from '../components/Button';

export default class App implements IComponent {
  mainButton: Button

  constructor(mainButton: Button) {
    this.mainButton = mainButton;
  }

  render(): string {
    return `<div class="app">
      ${this.mainButton.render()}
    </div>`;
  }
}
