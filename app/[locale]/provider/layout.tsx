"use client"
import Navbar from "@/components/navbar/Navbar"
import Sidebar from "@/components/sidebar/Sidebar"
import { NavigationTypeEnum } from "@/constants/enums"
import initTranslations from "@/i18n";
import TranslationsProvider from '@/components/TranslationProvider';
import StoreProvider from "../storeProvider";
import { useEffect, useState } from "react";
import { getCookie } from "@/lib/helpers";
import APIService from "@/services/api";

const i18nNamespaces = ['common', "navigation", "auth", "table"];

export default function AuthLayout({
    children,
    params: { locale },
}: LocaleParams) {
    // const { resources } = await initTranslations(locale, i18nNamespaces);
    const [resources, setResources] = useState(null);
    // const [i18n, setI18n] = useState(null);

    useEffect(() => {
        const fetchTranslations = async () => {
            const { resources, i18n } = await initTranslations(locale, i18nNamespaces);
            setResources(resources);
            // setI18n(i18n);
            var htmlElement = document.documentElement;

            // Set attributes programmatically
            htmlElement.setAttribute('lang', i18n.language);
            htmlElement.setAttribute('dir', i18n.language === 'ar' ? 'rtl' : 'ltr');
        };

        fetchTranslations();

        // Cleanup function
        return () => {
            // Perform any necessary cleanup here
        };

    }, [locale]);

    useEffect(() => {
        const aToken = getCookie("accessToken")
        const rToken = getCookie("refreshToken")
        console.log(aToken, rToken)
        if (aToken && rToken) {
            APIService.getInstance().setAccessToken(aToken)
            APIService.getInstance().setRefresToken(rToken)

        }
    }, [])

    if (!resources) {
        // You can return a loading indicator or null while resources are being fetched
        return (
            <div className="w-full h-full flex items-center justify-center">
                <div className="loader"></div>
            </div>
        );
    }
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