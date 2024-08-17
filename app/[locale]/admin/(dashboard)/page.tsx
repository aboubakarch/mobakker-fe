"use client"
import LineChart from "@/components/charts/LineChart";
import HeaderInfoItem from "@/components/header/HeaderInfoItem";
import PerformanceChart from "@/components/header/PerformanceChart";
import NotificationHandler from "@/components/notificationHandler/NotificationHandler";
// import DeleteModal from "@/components/modal/DeleteModal";
import { Button } from "@/components/ui";
import { messages } from "@/constants/constants";
import { ColorsEnum } from "@/constants/enums";
import { ExportIcon } from "@/svgs";
// import { useEffect } from "react";
import { useTranslation } from "react-i18next";


export default function Home() {
  const { t } = useTranslation()
  // useEffect(() => {
  //   document.cookie = "username=John Doe";
  //   console.log(document.cookie)
  // }, [])

  return (

    <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar">
      <NotificationHandler />
      {/* <DeleteModal visible closeModal={() => { }} onDelete={() => { }} title="dnlssnf" /> */}
      <div className="md:w-1/2 w-full flex flex-col">
        <h1 className="font-medium text-2xl ">{t(messages.GOOD_MORNING) + "User"}</h1>
        <p className="line-clamp-2 text-sm">{t(messages.YOUR_CENTRAL_HUB)}</p>      </div>
      <div className="bg-white rounded-sm w-full grid md:grid-rows-2 grid-cols-2 md:grid-cols-4 px-4 py-2 gap-3 ">
        {Array(8).fill(0).map(i => (
          <HeaderInfoItem title="Lorem Ipsum" color={ColorsEnum.Blue} heading={"Lorem Ipsum"} className="bg-indigo-800/5" key={i} />
        ))}

      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-4 md:grid-row-1 gap-3">
        <PerformanceChart />


        <div className="bg-indigo-800/5 rounded-sm col-span-1 grid grid-cols-1 grid-rows-5 gap-3 p-3">
          <HeaderInfoItem title="Lorem Ipsum" color={ColorsEnum.Blue} heading={43} className="bg-white" />
          <HeaderInfoItem title="Lorem Ipsum" color={ColorsEnum.Green} heading={100} percentage={67} showIcon hasGraph className="bg-white" />
          <HeaderInfoItem title="Lorem Ipsum" color={ColorsEnum.Red} heading={342} className="bg-white" />
          <HeaderInfoItem title="Lorem Ipsum" color={ColorsEnum.Yellow} heading={32} className="bg-white" />
          <HeaderInfoItem title="Lorem Ipsum" color={ColorsEnum.Green} heading={75} percentage={96} showIcon className="bg-white" />
        </div>

      </div>


    </div>
  );
}
