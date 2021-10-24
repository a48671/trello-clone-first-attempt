import { addBoard } from 'components/add-board';
import boardsComponent from 'components/boards';

export function app(): void {
  const root = document.getElementById('root');
  root.innerHTML = '';
  root.appendChild(boardsComponent.getElement());
  root.appendChild(addBoard.getElement());

  addBoard.onClick(() => {
    boardsComponent.updates((state) => ({
      boards: [...state.boards, { id: new Date().toString(), items: [] }]
    }));
  })
}
