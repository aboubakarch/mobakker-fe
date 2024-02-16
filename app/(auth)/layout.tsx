
export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-full w-full bg-screen justify-center items-center relative" >
            <div className='bg-white/90 w-3/5 h-1/2 rounded-lg shadow-md'>
                {children}
            </div>

        </div >
    )
}