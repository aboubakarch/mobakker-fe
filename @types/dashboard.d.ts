import { ColorsEnum } from "@/constants/enums";

interface IHeaderInfoProps {
  title: string;
  count: number;
  color: ColorsEnum;
  showIcon?: boolean;
  hasGraph?: boolean;
  percentage?: number;
  className?: string;
}

interface IPromotionItemProps {
  title: string;
  startDate: string;
  endDate: string;
  active: boolean;
}
