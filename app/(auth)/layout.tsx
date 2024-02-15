import ThemeButton from "@/components/buttons/themeButton"
import Image from "next/image"
export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-full w-full bg-[url('/assets/login.png')] bg-cover justify-center items-center relative" >
            <div className='bg-white/90 w-[40%] h-[40%] rounded-lg'>
                {children}
            </div>
            <ThemeButton />
            <div className="absolute bottom-8 w-[10%] h-[25%] right-5">
                <Image
                    src={'/assets/logoLarge.png'}
                    alt="Mawaqeet"
                    fill
                />
            </div>
        </div >
    )
}