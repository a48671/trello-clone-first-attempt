export type TCreateElementSettings = {
  className?: string;
  tagName?: string;
  children?: Array<HTMLElement>;
};

export class Component {
  protected readonly element: HTMLElement;

  static createElement({ tagName = 'div', className, children = [] }: TCreateElementSettings): HTMLElement {
    const element = document.createElement(tagName);
    if (className) {
      element.classList.add(className);
    }
    if (children.length) {
      for (const child of children) {
        element.appendChild(child);
      }
    }
    return element;
  }

  constructor(tagName: string | undefined = 'div') {
    if (new.target === Component) {
      throw Error('This abstract class and it can use only such supper class');
    }
    this.element = Component.createElement({ tagName });
  }

  getElement(): HTMLElement {
    return this.element;
  }

  addChildren(children: Array<Component>): void {
    if (!children.length) return;
    for (const child of children) {
      this.element.appendChild(child.getElement());
    }
  }
}
