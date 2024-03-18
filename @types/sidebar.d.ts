import { NavigationTypeEnum } from "@/constants/enums";

interface ISideBarItem {
  id: number;
  name: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  link: string;
}

interface ISideBarProps {
  navigation: NavigationTypeEnum;
}
