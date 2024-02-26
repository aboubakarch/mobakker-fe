import TranslationsProvider from '@/components/TranslationProvider';
import initTranslations from '@/i18n';

const i18nNamespaces = ['auth', 'common'];

export default async function AuthLayout({
  children,
  params: { locale },
}: LocaleParams) {
  const { resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      locale={locale}
      resources={resources}
      namespaces={i18nNamespaces}
    >
      <div className="flex h-full w-full bg-screen justify-center items-center relative">
        <div className="bg-white/90 w-3/5 h-1/2 rounded-lg shadow-md">
          {children}
        </div>
      </div>
    </TranslationsProvider>
  );
}
