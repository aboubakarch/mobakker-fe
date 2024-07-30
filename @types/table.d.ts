interface ITextColumnProps {
  text: string | number;
}

interface ITableProps<T = any> {
  handleEdit?: (val: T) => void;
  handleDelete?: (val: T) => void;
  onUpdateFlag?: boolean;
  onToggle?: (id: string, val: boolean) => void;
  handleAssign?: (val: T) => void;
  handleRow?: (val: T) => void;
  onAppointmentChange?: (val: SampleAppointments, status: string) => void;
}

type ISort = "DESC" | "ASC";
interface IFilterProps<T = any> {
  onApply?: (filters: T) => void;
  onReset?: () => void;
}
interface IBranchFilters {
  managerId?: string;
  city?: string;
}
interface IServiceFilters {
  branch?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
}
interface IAppointmentFilters {
  branch?: string;
  customer?: string;
}
interface IEmployeeFilters {
  branchId?: string;
}
