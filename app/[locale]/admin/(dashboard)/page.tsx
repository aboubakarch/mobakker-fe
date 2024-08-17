"use client"
import LineChart from "@/components/charts/LineChart";
import HeaderInfoItem from "@/components/header/HeaderInfoItem";
import PerformanceChart from "@/components/header/PerformanceChart";
import NotificationHandler from "@/components/notificationHandler/NotificationHandler";
// import DeleteModal from "@/components/modal/DeleteModal";
import { Button } from "@/components/ui";
import { messages } from "@/constants/constants";
import { ColorsEnum } from "@/constants/enums";
import APIService from "@/services/api";
import { ExportIcon } from "@/svgs";
import { useEffect, useState } from "react";
// import { useEffect } from "react";
import { useTranslation } from "react-i18next";
interface IAppointmentState {
  COMPLETED?: number;
  PENDING?: number;
  STARTED?: number;
  REJECTED?: number;
  CANCELED?: number;
}

export default function Home() {
  const { t } = useTranslation()
  const [totalAppointments, setTotalAppointments] = useState<IAppointmentState | undefined | null>(undefined)
  const [totalAppointmentsCount, setTotalAppointmentsCount] = useState(0)
  const getTotalAppointments = async () => {
    try {
      let param: any = {}

      const data = await APIService.getInstance().getTotalAppointments(param)
      setTotalAppointments({
        CANCELED: data.CANCELED || 0,
        COMPLETED: data.COMPLETED || 0,
        PENDING: data.PENDING || 0,
        REJECTED: data.REJECTED || 0,
        STARTED: data.STARTED || 0,
      })
      setTotalAppointmentsCount(Object.values(data).reduce((acc: number, value: any) => acc + (value || 0), 0))

    } catch (error) {
      setTotalAppointments(null)
      console.log(error)
    }
  }
  useEffect(() => {
    getTotalAppointments()
  }, [])

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
          <HeaderInfoItem title={t(messages.TOTAL_REQ)} color={ColorsEnum.Blue} heading={totalAppointmentsCount} className="bg-white" />
          <HeaderInfoItem title={t(messages.COMPLETE)} color={ColorsEnum.Green} heading={totalAppointments?.COMPLETED || 0} className="bg-white" />
          <HeaderInfoItem title={t("Pending")} color={ColorsEnum.Yellow} heading={totalAppointments?.PENDING || 0} className="bg-white" />
          <HeaderInfoItem title={t(messages.CANCELLED)} color={ColorsEnum.Red} heading={totalAppointments?.CANCELED || 0} className="bg-white" />
          <HeaderInfoItem title={t("Rejected")} color={ColorsEnum.Red} heading={totalAppointments?.REJECTED || 0} className="bg-white" />
        </div>

      </div>


    </div>
  );
}
