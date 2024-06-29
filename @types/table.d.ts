interface ITextColumnProps {
  text: string | number;
}

interface ITableProps<T = any> {
  handleEdit?: (val: T) => void;
  handleDelete?: (val: T) => void;
  onUpdateFlag?: boolean;
  onToggle?: (id: string, val: boolean) => void;
  handleAssign?: (val: T) => void;
}
