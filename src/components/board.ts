import { Component } from 'components/component';

export type TItem = { id: string; text: string; };

type TState = {
  value: string;
  items: Array<TItem>;
};

export class Board extends Component {
  private readonly titleElement: HTMLElement;
  private readonly listElement: HTMLElement;
  private readonly form: HTMLElement;
  private readonly textarea: HTMLTextAreaElement;
  private readonly formButtons: HTMLElement;
  private readonly addButton: HTMLElement;
  private readonly cancelButton: HTMLElement;
  private readonly addCardButton: HTMLElement;
  private state: TState;

  constructor() {
    super();

    this.state = {
      value: '',
      items: []
    };

    this.element.classList.add('board');

    this.titleElement = Component.createElement({ className: 'board__title' });
    this.titleElement.contentEditable = 'true';
    this.titleElement.innerText = 'Input board title';

    this.element.appendChild(this.titleElement);

    this.listElement = Component.createElement({ className: 'board__list' });
    this.element.appendChild(this.listElement);

    this.textarea = Component.createElement({ className: 'board__form-textarea', tagName: 'textarea' }) as HTMLTextAreaElement;
    this.textarea.ariaPlaceholder = 'Input your task';
    this.textarea.value = this.state.value;
    this.textarea.addEventListener('input', (event) => {
      this.setState({ value: (<HTMLTextAreaElement>event.target).value });
    });

    this.addButton = Component.createElement({
      className: 'board__form-button',
      tagName: 'button'
    });
    this.addButton.classList.add('board__form-button_success')
    this.addButton.innerText = 'Add card';
    this.addButton.addEventListener('click', (event) => {
      event.preventDefault();
      this.setState({
        items: [...this.state.items, { id: new Date().toString(), text: this.state.value }]
      })
      this.hiddenForm();
    });

    this.cancelButton = Component.createElement({
      className: 'board__form-button',
      tagName: 'button'
    });
    this.cancelButton.classList.add('board__form-button_alert')
    this.cancelButton.innerText = 'Cancel';
    this.cancelButton.addEventListener('click', (event) => {
      event.preventDefault();
      this.hiddenForm();
    });

    this.formButtons = Component.createElement({
      className: 'board__form-buttons',
      children: [this.addButton, this.cancelButton]
    });

    this.form = Component.createElement({
      className: 'board__form',
      tagName: 'div',
      children: [this.textarea, this.formButtons]
    });
    this.element.appendChild(this.form);

    this.addCardButton = Component.createElement({
      className: 'board__add-card-button'
    });
    this.addCardButton.innerHTML = '<span>+</span> Add card';
    this.addCardButton.addEventListener('click', (event) => {
      this.showForm();
    });
    this.element.appendChild(this.addCardButton);
  }

  showForm() {
    this.form.style.display = 'block';
    this.addCardButton.style.display = 'none';
    this.addButton.style.pointerEvents = 'none';
    this.addButton.style.opacity = '.3';
    this.textarea.focus();
  }

  hiddenForm() {
    this.form.style.display = 'none';
    this.addCardButton.style.display = 'flex';
    this.setState({ value: '' });
  }

  renderItems(oldItems: Array<TItem>, newItems: Array<TItem>): void {
    const length = Math.max(oldItems.length, newItems.length);
    for (let index = 0; index < length; index++) {
      const newItem = newItems[index];
      const oldItem = oldItems[index];
      if (!newItem && oldItem) {
        this.element.children[index].remove();
        return;
      }
      if (newItem && !oldItem) {
        this.addItem(newItem);
        continue;
      }
      if (newItem.text !== oldItem.text) {
        this.element.children[index].innerHTML = newItem.text;
      }
    }
  }
  
  addItem(item: TItem) {
    const itemElement = Component.createElement({ className: 'board__item' });
    itemElement.draggable = true;
    itemElement.innerText = item.text;
    itemElement.dataset.id = item.id;
    this.listElement.appendChild(itemElement);
  }

  set items(items: Array<TItem>) {
    this.setState({ items })
  }

  setState(data: Partial<TState>) {
    const oldState = { ...this.state };
    this.state = {
      ...this.state,
      ...data
    };
    if (oldState.value !== this.state.value) {
      this.textarea.value = this.state.value;
      if (this.state.value) {
        this.addButton.style.pointerEvents = 'auto';
        this.addButton.style.opacity = '1';
      } else {
        this.addButton.style.pointerEvents = 'none';
        this.addButton.style.opacity = '.3';
      }
    }
    this.renderItems(oldState.items, this.state.items);
  }
}
