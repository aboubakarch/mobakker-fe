import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

interface ModalProps {
    children?: ReactNode;
    visibility: boolean;
    closeModal: () => void;
    position?: 1 | 2 | 3 | 4,
    place?: 'top' | 'center' | 'end';
    className?: string
}

function Modal({
    children, visibility, closeModal, position = 1, place = 'center', className = '',
}: ModalProps) {
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        // Prevent the click event from reaching the outer div
        event.stopPropagation();
        closeModal();
    };

    const posStyle = {
        center: 'items-center',
        top: 'items-start pt-[80px]',
        end: 'items-end pb-[150px]',
    };

    if (!visibility) {
        return null;
    }

    return (

        <div
            onClick={handleClick}
            style={{ zIndex: 9 * position }}
            className={`fixed top-0 bottom-0 left-0 right-0 h-screen w-screen overflow-auto scrollbar bg-white/60 flex ${posStyle[place]}  justify-center`}
        >
            <div
                style={{ zIndex: 10 * position }}
                className={cn(`w-[80%] md:w-[40%] shadow-xl rounded-md bg-white`, className)}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Stop propagation within the children */}
                {children}
            </div>
        </div>

    );
}

export default Modal;
