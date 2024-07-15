import TranslationsProvider from '@/components/TranslationProvider';
import LanguageChanger from '@/components/languageChanger/LanguageChanger';
import initTranslations from '@/i18n';
import StoreProvider from '../storeProvider';

const i18nNamespaces = ['auth', 'common', "navigation"];

export default async function SubscriptionLayout({
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

                {children}
            </TranslationsProvider>
        </StoreProvider>
    );
}
