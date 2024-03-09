import TranslationsProvider from '@/components/TranslationProvider';
import LanguageChanger from '@/components/languageChanger/LanguageChanger';
import initTranslations from '@/i18n';
import StoreProvider from '../storeProvider';

const i18nNamespaces = ['auth', 'common'];

export default async function AuthLayout({
  children,
  params: { locale },
}: LocaleParams) {
  const { resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <StoreProvider>
      <TranslationsProvider
        locale={locale}
        resources={resources}
        namespaces={i18nNamespaces}
      >
        <div className="flex h-full w-full bg-screen justify-center items-center relative">
          <LanguageChanger />
          <div className="bg-white/90 w-3/5 h-1/2 rounded-lg shadow-md">
            {children}
          </div>

        </div>
      </TranslationsProvider>
    </StoreProvider>
  );
}
