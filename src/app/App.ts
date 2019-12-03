import IComponent from 'Src/components/IComponent.d';
import Button from 'Src/components/Button';

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
