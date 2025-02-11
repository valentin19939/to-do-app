export interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
  isDeleting?: boolean;
  isUpdating?: boolean;
  isProcessed?: boolean;
}
