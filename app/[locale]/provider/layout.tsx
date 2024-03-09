import Navbar from "@/components/navbar/Navbar"
import Sidebar from "@/components/sidebar/Sidebar"
import { NavigationTypeEnum } from "@/constants/enums"
import initTranslations from "@/i18n";
import TranslationsProvider from '@/components/TranslationProvider';

const i18nNamespaces = ['common'];

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

            <div className="h-full w-full bg-screen relative" >
                <Navbar />
                <div className="flex w-full h-[calc(100%-80px)]">
                    <Sidebar navigation={NavigationTypeEnum.Provider} />
                    {children}

                </div>
            </div >
        </TranslationsProvider>
    )
}