interface GameState {
  cells: Cell[];
  message: string;

}

interface Cell {
  text: string;
  playable: boolean;
  x: number;
  y: number;
}

export type { GameState, Cell }