export interface ITodo {
  id: number;
  text: string;
  isDone: boolean;
}

export type ITodoFilter = "All" | "To Do" | "Done";
