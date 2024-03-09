"use client"
import BarChart from "@/components/charts/Bar";
import DoughnutChart from "@/components/charts/Doughnut";
import StackedBarChart from "@/components/charts/StackedBar";
import HeaderInfoItem from "@/components/header/HeaderInfoItem";
import InfoHeader from "@/components/header/InfoHeader";
import PromotionItem from "@/components/header/PromotionItem";
import { messages } from "@/constants/constants";
import { ColorsEnum } from "@/constants/enums";
import { useTranslation } from "react-i18next";


export default function Home() {
  const { t } = useTranslation()

  return (

    <div className="flex flex-col gap-3 h-full w-full px-5 py-3 overflow-auto scrollbar">
      <div className="md:w-1/2 w-full flex flex-col">
        <h1 className="font-medium text-2xl ">{t(messages.GOOD_MORNING) + "User"}</h1>
        <p className="line-clamp-2 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, asperiores rerum? Earum quod, maxime fugiat dolore laborum, illo minima aperiam amet ipsam, architecto voluptatum fugit laudantium aliquid quisquam reprehenderit natus.</p>
      </div>
      <div className=" w-full">
        <InfoHeader />
      </div>

      <div className="h-full w-full grid grid-cols-1 md:grid-cols-5 md:grid-rows-2 gap-3">
        <div className="col-span-1 md:col-span-4 grid gap-3 grid-cols-1 md:grid-cols-6 grid-row-1 md:grid-row-2">

          <div className="md:col-span-4 bg-white py-2 flex flex-col justify-between">
            <h1 className="px-3 font-medium w-full">{t(messages.SALES_AMOUNT)}</h1>
            <div className="h-[90%] w-full relative">
              {/* <BarChart /> */}
              <StackedBarChart />
            </div>
          </div>


          <div className="md:col-span-2 bg-white py-2 flex items-center flex-col">
            <h1 className="px-3 font-medium w-full">{t(messages.DAILY_PROGRESS)}</h1>
            <div className="h-[90%] w-full flex items-center justify-center relative ">
              <DoughnutChart />
            </div>
          </div>
        </div>


        <div className="col-span-1 bg-appcard rounded-sm px-3 py-2 grid grid-rows-4 grid-flow-row grid-cols-1 gap-2 auto-rows-max md:overflow-auto">
          <HeaderInfoItem color={ColorsEnum.Blue} heading={300} title="Test1" className="bg-white py-1" />
          <HeaderInfoItem color={ColorsEnum.Blue} heading={300} title="Test1" className="bg-white py-1" />
          <HeaderInfoItem color={ColorsEnum.Blue} heading={300} title="Test1" className="bg-white py-1" />
          <HeaderInfoItem color={ColorsEnum.Blue} heading={300} title="Test1" className="bg-white py-1" />
        </div>


        <div className=" md:col-span-4 bg-white py-2">
          <h1 className="px-3 font-medium w-full">{t(messages.MONTHLY_PROGRESS)}</h1>
          <div className="h-[90%] w-full relative">
            <BarChart />
          </div>
        </div>


        <div className="col-span-1 bg-appcard rounded-sm px-3 py-2 flex flex-col gap-2 md:overflow-auto">
          <div className="text-lg">{t(messages.ACTIVE_PROMOTIONS)}</div>
          <div className="grid grid-rows-3 grid-flow-row grid-cols-1 gap-2 auto-rows-max ">
            <PromotionItem active title="Ramadan Promo" endDate="12-Jan-2024" startDate="01-Jan-2024" />
            <PromotionItem active={false} title="Ramadan Promo" endDate="12-Jan-2024" startDate="01-Jan-2024" />

          </div>
        </div>
      </div>
    </div>
  );
}
