import Navbar from "@/components/navbar/Navbar"
import Sidebar from "@/components/sidebar/Sidebar"
import { NavigationTypeEnum } from "@/constants/enums"
import TranslationsProvider from '@/components/TranslationProvider';
import initTranslations from '@/i18n';

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
                    <Sidebar navigation={NavigationTypeEnum.SuperAdmin} />
                    {children}

                </div>
            </div >
        </TranslationsProvider>
    )
}