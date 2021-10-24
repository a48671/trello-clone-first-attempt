import { Component } from 'components/component';

export class BoardsItem extends Component {
  constructor(board: Component) {
    super();
    this.element.classList.add('boards__item');
    this.addChildren([board]);
  }
}
