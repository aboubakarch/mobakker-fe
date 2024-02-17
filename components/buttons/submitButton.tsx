import React, { FC } from 'react'
import { useFormState } from 'react-hook-form'
import { Button } from '../ui'

const SubmitButton: FC<{ title: string, className?: string }> = ({ title, className = "" }) => {
    const { disabled } = useFormState()
    return (
        <Button disabled={disabled} variant={'default'} type='submit' className={className} >{title}</Button>

    )
}

export default SubmitButton