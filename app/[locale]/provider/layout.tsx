import Navbar from "@/components/navbar/Navbar"
import Sidebar from "@/components/sidebar/Sidebar"
import { NavigationTypeEnum } from "@/constants/enums"
import initTranslations from "@/i18n";
import TranslationsProvider from '@/components/TranslationProvider';
import StoreProvider from "../storeProvider";

const i18nNamespaces = ['common', "navigation"];

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

                <div className="h-full w-full bg-screen relative" >
                    <Navbar />
                    <div className="flex w-full h-[calc(100%-80px)]">
                        <Sidebar navigation={NavigationTypeEnum.Provider} />
                        {children}

                    </div>
                </div >
            </TranslationsProvider>
        </StoreProvider>

    )
}