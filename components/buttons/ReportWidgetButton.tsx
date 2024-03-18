import { IReportWidgetPopoverProps } from "@/@types/buttons";
import { Button, Calendar, Popover, PopoverContent, PopoverTrigger } from "../ui";
import { ChevronDownIcon } from "@/svgs";
import { messages } from "@/constants/constants";
import { FC } from "react";
import { ReportTypesEnum } from "@/constants/enums";
import { getAllMonths, getLastNYears } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const ReportWidgetButton: FC<IReportWidgetPopoverProps> = ({
    type,
    selectedDate = new Date(),
    onDateChange = () => { },
    selected = "",
    onChangeSelected = () => { } }
) => {
    const months = getAllMonths();
    const years = getLastNYears(10)
    const itemClasses = " py-3 px-5 hover:bg-appcard active:bg-screen w-full rounded-md"

    const { t } = useTranslation()

    const renderSelectButton = () => {
        switch (type) {
            case ReportTypesEnum.Day:
                return <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={onDateChange}
                    disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                />;
            case ReportTypesEnum.Month:
                return (
                    <div className="flex flex-col w-full ">
                        {months.map(month => (
                            <div onClick={() => onChangeSelected(month)} key={month} className={cn(itemClasses, selected === month ? "bg-appcard" : "")}>
                                {month}
                            </div>
                        ))}
                    </div>
                );
            case ReportTypesEnum.Year:
                return (
                    <div className="flex flex-col w-full">
                        {years.map(year => (
                            <div onClick={() => onChangeSelected(year)} key={year} className={cn(itemClasses, selected === year ? "bg-appcard" : "")}>
                                {year}
                            </div>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    }


    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant={"default"} className="bg-indigo-800  bg-opacity-5 hover:bg-indigo-300  rounded-md justify-center items-center gap-2 inline-flex">
                    <p className="text-center text-indigo-800  text-sm font-normal  leading-normal">{`${t(messages.SELECT)} ${type}`}</p>
                    <ChevronDownIcon />
                </Button>
            </PopoverTrigger>
            <PopoverContent className='flex items-center justify-center w-auto select-none'>
                {renderSelectButton()}
            </PopoverContent>
        </Popover>
    );
};

export default ReportWidgetButton