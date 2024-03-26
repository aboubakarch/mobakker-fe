import { Upload } from 'lucide-react'
import React, { FC } from 'react'


const Dropzone: FC<IDropzonProps> = ({ title }) => {
    return (

        <div >
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-[356px] h-[106px] bg-indigo-800 bg-opacity-5 rounded-md border border-indigo-800 border-dashed cursor-pointer hover:bg-opacity-10">
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className='w-10 h-10 flex justify-center items-center bg-white rounded-full border border-neutral-200'>
                        <Upload className='w-4 h-4 text-indigo-800' />
                    </div>
                    <p className="text-center text-indigo-800 text-xs font-normal leading-tight select-none">{title}</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
            </label>
        </div>

    )
}

export default Dropzone