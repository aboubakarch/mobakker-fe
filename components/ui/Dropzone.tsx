import { isValidImageSrc } from '@/lib/helpers';
import { cn } from '@/lib/utils';
import { Upload } from 'lucide-react'
import Image from 'next/image';
import React, { FC, useState } from 'react'


const Dropzone: FC<IDropzonProps> = ({ title, subtitle, onFileSelect, url }) => {

    const [selectedFiles, setSelectedFiles] = useState<File | null>(null);

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const files = event.dataTransfer.files;
        setSelectedFiles(files[0]);
        if (onFileSelect) {
            onFileSelect(files[0]);

        }

    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            setSelectedFiles(files[0]);
            if (onFileSelect) {
                onFileSelect(files[0]);

            }
        }
    };



    return (

        <div onDrop={handleDrop} onDragOver={(event) => event.preventDefault()}>
            <label htmlFor="dropzone-file" className={cn(" w-[356px] h-[106px] ", (selectedFiles || (url && isValidImageSrc(url))) ? "" : "flex flex-col items-center justify-center bg-indigo-800 bg-opacity-5 rounded-md border border-indigo-800 border-dashed cursor-pointer hover:bg-opacity-10")}>
                {!(selectedFiles || (url && isValidImageSrc(url))) ? <div className="flex flex-col items-center justify-center gap-4">
                    <div className='w-10 h-10 flex justify-center items-center bg-white rounded-full border border-neutral-200'>
                        <Upload className='w-4 h-4 text-indigo-800' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className="text-center text-indigo-800 text-xs font-normal leading-tight select-none">{title}</p>
                        {subtitle && <p className="text-center text-indigo-800 text-xs font-normal leading-tight select-none">{subtitle}</p>}

                    </div>
                </div> : (
                    <div className='w-28 h-28 relative rounded-full '>
                        <Image
                            fill
                            alt='profile'
                            src={selectedFiles ? URL.createObjectURL(selectedFiles) : (url as string)}
                            className='rounded-full'
                        />

                    </div>
                )}
                <input id="dropzone-file" onChange={handleInputChange}
                    type="file" className="hidden" />
            </label>
        </div>

    )
}

export default Dropzone