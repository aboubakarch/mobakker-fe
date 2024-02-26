interface ILayoutProps {
  children: React.ReactNode;
}

interface LocaleParams extends ILayoutProps {
  params: { locale: string };
}
