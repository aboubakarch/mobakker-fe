
import { IReportWidgetPopoverProps } from "@/@types/buttons";
import { Button, Calendar } from "../ui";
import { ChevronDownIcon } from "@/svgs";
import { messages } from "@/constants/constants";
import { FC } from "react";
import { ReportTypesEnum } from "@/constants/enums";
import { getAllMonths, getLastNYears } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import moment from "moment";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui"
const ReportWidgetButton: FC<IReportWidgetPopoverProps> = ({
    type,
    selectedDate = new Date(),
    onDateChange = () => { },
    selected = "",
    onChangeSelected = () => { } }
) => {
    const months = getAllMonths();
    const years = getLastNYears(10)

    const itemClasses = " py-3 px-5 hover:bg-indigo-800 hover:bg-opacity-5 active:bg-screen w-full rounded-md"

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
                            <div onClick={() => onChangeSelected(month)} key={month} className={cn(itemClasses, selected === month ? "bg-indigo-800 bg-opacity-5" : "")}>
                                {month}
                            </div>
                        ))}
                    </div>
                );
            case ReportTypesEnum.Year:
                return (
                    <div className="flex flex-col w-full">
                        {years.map(year => (
                            <div onClick={() => onChangeSelected(year)} key={year} className={cn(itemClasses, selected === year ? "bg-indigo-800 bg-opacity-5" : "")}>
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
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={"default"} className="bg-indigo-800  bg-opacity-5 hover:bg-indigo-300  rounded-md justify-center items-center gap-2 inline-flex">
                    <p className="text-center text-indigo-800  text-sm font-normal  leading-normal">{selected === "" ? `${t(messages.SELECT)} ${type}` : type === ReportTypesEnum.Day ? moment(selectedDate).format("MMM DD, YYYY") : selected}</p>
                    <ChevronDownIcon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='flex  flex-col select-none max-h-[400px] scrollbar overflow-auto'>
                {type !== ReportTypesEnum.Day && <DropdownMenuLabel>
                    <p>{type}</p>
                </DropdownMenuLabel>}
                {renderSelectButton()}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ReportWidgetButton