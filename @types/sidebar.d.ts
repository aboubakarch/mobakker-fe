interface ISideBarItem {
  id: number;
  name: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  link: string;
}
