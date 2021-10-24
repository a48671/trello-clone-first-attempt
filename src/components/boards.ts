import { Board, TItem } from 'components/board';
import { BoardsItem } from 'components/boards-item';
import { Component } from 'components/component';

type TBord = {
  id: string;
  items: Array<TItem>;
}

type TState = {
  boards: Array<TBord>;
}

class Boards extends Component {
  private state: TState;
  private dragItem?: HTMLElement;
  private itemsWithPointerEventNone: Array<HTMLElement> = [];

  constructor() {
    super();
    this.element.classList.add('boards');

    this.element.addEventListener('dragstart', event => {
      if ((<HTMLElement>event.target).classList.contains('board__item')) {
        setTimeout(() => {
          (<HTMLElement>event.target).style.display = 'none';
          this.dragItem = event.target as HTMLElement;
        }, 0);
      }
    });

    this.element.addEventListener('dragend', event => {
      if ((<HTMLElement>event.target).classList.contains('board__item')) {
        setTimeout(() => {
          (<HTMLElement>event.target).style.display = 'block';
          this.dragItem = undefined;
        }, 0)
      }
    });

    this.element.addEventListener('dragover', event => {
      if ((<HTMLElement>event.target).classList.contains('board__item')) {
        (<HTMLElement>event.target).style.pointerEvents = 'none';
        this.itemsWithPointerEventNone.push(event.target as HTMLElement);
      }
      if ((<HTMLElement>event.target).classList.contains('board__list')) {
        event.preventDefault();
      }
    });

    this.element.addEventListener('dragenter', event => {
      if ((<HTMLElement>event.target).classList.contains('board__list')) {
        (<HTMLElement>event.target).style.background = 'rgb(34 54 71)';
      }
    });

    this.element.addEventListener('dragleave', event => {
      if ((<HTMLElement>event.target).classList.contains('board__list')) {
        (<HTMLElement>event.target).style.background = 'none';
      }
    });

    this.element.addEventListener('drop', event => {
      if ((<HTMLElement>event.target).classList.contains('board__list')) {
        (<HTMLElement>event.target).style.background = 'none';
        (<HTMLElement>event.target).appendChild(this.dragItem);
      }
      this.itemsWithPointerEventNone.forEach(item => item.style.pointerEvents = 'auto');
      this.itemsWithPointerEventNone = [];
    });

    this.state = {
      boards: []
    }
  }

  addChildren(children: Array<Component>): void {
    if (!children.length) return;
    for (const child of children) {
      this.element.appendChild(new BoardsItem(child).getElement());
    }
  }

  updates(callback: (state: TState) => Partial<TState>) {
    const oldState = { ...this.state };
    this.state = {
      ...this.state,
      ...callback(this.state)
    };

    const oldBoards = oldState.boards;
    const newBoards = this.state.boards;
    const length = Math.max(oldBoards.length, newBoards.length);
    for (let index = 0; index < length; index++) {
      const newBoard = newBoards[index];
      const oldBoard = oldBoards[index];
      if (!newBoard && oldBoard) {
        this.element.children[index].remove();
        return;
      }
      if (newBoard && !oldBoard) {
        const board = new Board();
        board.items = newBoard.items;
        this.addChildren([board]);
        continue;
      }
      if (newBoard.id !== oldBoard.id) {
        this.element.children[index].remove();
        const board = new Board();
        board.items = newBoard.items;
        this.addChildren([board]);
      }
    }
  }
}

const boardsComponent = new Boards();

export default boardsComponent;
