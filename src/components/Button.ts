import IComponent from './IComponent.d';

export default class Button implements IComponent {
  private title: string

  constructor(title: string) {
    this.title = title;
  }

  render(): string {
    return `<button>${this.title}</button>`;
  }
}
