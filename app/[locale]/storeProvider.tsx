'use client'
import { AppStore, setupStore } from '@/redux/app/store'
import { useRef } from 'react'
import { Provider } from 'react-redux'

export default function StoreProvider({
    children,
}: ILayoutProps) {
    const storeRef = useRef<AppStore>()
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = setupStore()
    }

    return <Provider store={storeRef.current}>{children}</Provider>
}