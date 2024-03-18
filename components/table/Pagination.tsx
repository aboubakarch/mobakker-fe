import { cn } from '@/lib/utils';
import { ChevronLeftIcon, ChevronRightIcon } from '@/svgs';
import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    pagesToDisplay?: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, pagesToDisplay = 5, onPageChange }) => {
    const generatePages = () => {
        const pages = [];
        const maxPagesToShow = pagesToDisplay;

        if (totalPages <= maxPagesToShow) {
            for (let i = 0; i < totalPages; i++) {
                pages.push(renderPage(i));
            }
        } else {
            const startPage = Math.max(0, currentPage - Math.floor(maxPagesToShow / 2));
            const endPage = Math.min(totalPages, startPage + maxPagesToShow);

            if (startPage > 0) {
                pages.push(renderPage(0));
                if (startPage > 1) {
                    pages.push(renderEllipsis());
                }
            }

            for (let i = startPage; i < endPage; i++) {
                pages.push(renderPage(i));
            }

            if (endPage < totalPages) {
                if (endPage < totalPages - 1) {
                    pages.push(renderEllipsis());
                }
                pages.push(renderPage(totalPages - 1));
            }
        }

        return pages;
    };

    const renderPage = (pageNumber: number) => (
        <span key={pageNumber} className={cn('h-6 w-6 hover:bg-white/60 cursor-pointer rounded-[3px] text-center text-gray-500', currentPage === pageNumber ? "bg-indigo-800 hover:bg-indigo-400 text-white" : "")} onClick={() => onPageChange(pageNumber)}>
            {pageNumber + 1}
        </span>
    );

    const renderEllipsis = () => (
        <span key="ellipsis" className="ellipsis">
            ...
        </span>
    );

    return (
        <div className="flex p-3 flex-row items-center gap-1 rounded bg-indigo-800 bg-opacity-5">
            <span className='bg-white flex items-center justify-center h-6 w-6 rounded cursor-pointer' onClick={() => onPageChange(Math.max(0, currentPage - 1))}>
                <ChevronLeftIcon />
            </span>
            {generatePages()}
            <span className='bg-white flex items-center justify-center h-6 w-6  rounded cursor-pointer' onClick={() => onPageChange(Math.min(totalPages - 1, currentPage + 1))}>
                <ChevronRightIcon />
            </span>
        </div>
    );
};

export default Pagination;
