import React from 'react'

type SeperatorTextProps = {
    seperatorText: string;
}

const SeperatorWithText = ({ seperatorText = "Or" }: SeperatorTextProps) => {
    return (
        <div className='relative my-3'>
            <div className='absolute inset-0 flex items-center'>
                <span className='w-full border-t' />
            </div>
            <div className='relative flex justify-center text-xs uppercase'>
                <span className='bg-background px-2 text-muted-foreground'>
                    {seperatorText}
                </span>
            </div>
        </div>
    )
}

export default SeperatorWithText