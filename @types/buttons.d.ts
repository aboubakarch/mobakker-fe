import { ReportTypesEnum } from "@/constants/enums";

interface IReportWidgetPopoverProps {
  type: ReportTypesEnum;
  selectedDate?: Date | undefined;
  onDateChange?: (day: Date | undefined) => void;
  selected?: number | string;
  onChangeSelected?: (select: number | string) => void;
}
