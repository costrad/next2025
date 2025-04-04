export interface ITodo {
  id: string;
  title: string;
  body: string | undefined;
  completed: boolean;
  createdAt: Date;
}