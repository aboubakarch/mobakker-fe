import * as React from "react"

import { cn } from "@/lib/utils"
import { SearchIcon } from "@/svgs"

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }

const SearchInput = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, ...props }, ref) => {
        return (
            <div
                className={cn(
                    "flex ltr:pr-4 rtl:pl-4 h-10 items-center rounded-md border border-input bg-white ltr:pl-3 rtl:pr-3 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2",
                    className,
                )}
            >
                <input
                    {...props}
                    type="search"
                    ref={ref}
                    className="w-full bg-screen p-2 placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                />
                <SearchIcon className="h-[16px] w-[16px]" />

            </div>
        )
    }
)
SearchInput.displayName = "SearchInput"

export { SearchInput }
