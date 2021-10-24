import { Component } from 'components/component';

export class AddBoard extends Component {
  private readonly addBoardButton: HTMLElement;
  constructor() {
    super();
    this.element.classList.add('add-board');
    this.addBoardButton = Component.createElement({ className: 'add-board__button' });
    this.addBoardButton.innerText = 'Add board';
    this.element.appendChild(this.addBoardButton);
  }

  onClick(callback: VoidFunction) {
    this.element.addEventListener('click', callback);
  }

}


export const addBoard = new AddBoard();
