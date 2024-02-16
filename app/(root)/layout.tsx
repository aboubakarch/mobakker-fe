import Navbar from "@/components/navbar/navbar"
import Sidebar from "@/components/sidebar/sidebar"

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="h-full w-full bg-screen relative" >
            <Navbar />
            <div className="flex w-full h-[calc(100%-80px)]">
                <Sidebar />
                {children}

            </div>
        </div >
    )
}