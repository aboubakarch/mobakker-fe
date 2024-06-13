import React, { FC } from 'react'
import { useFormState } from 'react-hook-form'
import { Button } from '../ui'
import { cn } from '@/lib/utils'

const SubmitButton: FC<{ title: string, className?: string, loading?: boolean }> = ({ title, className = "", loading = false }) => {
    const { disabled } = useFormState()
    return (
        <Button disabled={disabled || loading} variant={'default'} type='submit' className={cn("flex items-center justify-center gap-3", className)} >
            <div>{title}</div>
            {loading && <div className="loader_simple"></div>}
        </Button>

    )
}

export default SubmitButton