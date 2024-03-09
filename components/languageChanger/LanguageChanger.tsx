'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';
import { useAppDispatch } from '@/redux/app/hooks';
import { setLocale } from '@/redux/features';
import { FC } from 'react';
import { cn } from '@/lib/utils';
import { messages } from '@/constants/constants';

const LanguageChanger: FC<ILanguageChangerProps> = ({ className = "", hasDesc = false, selectClassName = "" }) => {
    const { i18n, t } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();
    // const { locale } = useAppSelector((state) => state.appConfig)
    const dispatch = useAppDispatch()

    const handleChange = (e: any) => {
        const newLocale = e.target.value;

        dispatch(setLocale(newLocale))

        // set cookie for next-i18n-router
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

        // redirect to the new locale path
        if (
            currentLocale === i18nConfig.defaultLocale &&
            !(i18nConfig as any).prefixDefault
        ) {
            router.push('/' + newLocale + currentPathname);
        } else {
            router.push(
                currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
            );
        }

        router.refresh();
    };

    return (
        <div className={cn('flex gap-2', className)}>
            {hasDesc && <p>{t(messages.SELECT_LANGUAGE)}:</p>}
            <select className={cn("border-black/40 border px-2 rounded", selectClassName)} onChange={handleChange} value={currentLocale}>
                <option value="en">English</option>
                <option value="ar">Arabic</option>
            </select>
        </div>
    );
}
export default LanguageChanger