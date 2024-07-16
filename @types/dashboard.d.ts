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
}

interface IPromotionItemProps {
  title: string;
  startDate: string;
  endDate: string;
  active: boolean;
}

interface IReportWidgetProps {
  type: ReportTypesEnum;
  className?: string;
}
