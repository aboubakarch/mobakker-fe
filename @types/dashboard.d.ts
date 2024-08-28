import { ColorsEnum, ReportTypesEnum } from "@/constants/enums";

interface IHeaderInfoProps {
  title: string;
  heading: number | string;
  color: ColorsEnum;
  showIcon?: boolean;
  hasGraph?: boolean;
  percentage?: number;
  className?: string;
  loading?: boolean;
  iconPosition?: boolean;
}

interface IPromotionItemProps {
  title: string;
  startDate: string;
  endDate: string;
  active: boolean;
  id: string;
  handleUpdate: () => void;
}

interface IReportWidgetProps {
  type: ReportTypesEnum;
  className?: string;
}
