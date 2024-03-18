interface ILayoutProps {
  children: React.ReactNode;
}

interface LocaleParams extends ILayoutProps {
  params: { locale: string };
}

interface IPageHeaderProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}
