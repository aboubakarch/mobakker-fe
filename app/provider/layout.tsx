"use client"
import Navbar from "@/components/navbar/Navbar"
import Sidebar from "@/components/sidebar/Sidebar"
import { sidebarNavigation } from "@/constants/constants"

export default function AuthLayout({
    children,
}: ILayoutProps) {
    return (
        <div className="h-full w-full bg-screen relative" >
            <Navbar />
            <div className="flex w-full h-[calc(100%-80px)]">
                <Sidebar navigation={sidebarNavigation("/provider")} />
                {children}

            </div>
        </div >
    )
}