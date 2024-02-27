import Navbar from "@/components/navbar/Navbar"
import Sidebar from "@/components/sidebar/Sidebar"
import { NavigationTypeEnum } from "@/constants/enums"

export default function AuthLayout({
    children,
}: ILayoutProps) {
    return (
        <div className="h-full w-full bg-screen relative" >
            <Navbar />
            <div className="flex w-full h-[calc(100%-80px)]">
                <Sidebar navigation={NavigationTypeEnum.SuperAdmin} />
                {children}

            </div>
        </div >
    )
}