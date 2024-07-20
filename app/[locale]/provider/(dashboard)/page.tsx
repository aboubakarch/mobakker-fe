"use client"
import BarChart from "@/components/charts/Bar";
import DoughnutChart from "@/components/charts/Doughnut";
import StackedBarChart from "@/components/charts/StackedBar";
import HeaderInfoItem from "@/components/header/HeaderInfoItem";
import InfoHeader from "@/components/header/InfoHeader";
import PromotionItem from "@/components/header/PromotionItem";
import { messages } from "@/constants/constants";
import { ColorsEnum } from "@/constants/enums";
import APIService from "@/services/api";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface ICountsState {
  serviceCount: undefined | null | number;
  employeeCount: undefined | null | number;
  loyalProgramCount: undefined | null | number;
  promotionsCount: undefined | null | number;

}

export default function Home() {
  const { t } = useTranslation()
  const [counts, setCounts] = useState<ICountsState>({
    serviceCount: undefined,
    employeeCount: undefined,
    loyalProgramCount: undefined,
    promotionsCount: undefined
  })
  const [weekAppointments, setWeekAppointments] = useState<StackedBarChartProps | undefined | null>(undefined)
  const [yearAppointments, setYearAppointments] = useState<StackedBarChartProps | undefined | null>(undefined)

  const fetchCounts = async () => {
    try {
      const results = await Promise.allSettled([
        APIService.getInstance().getEmployeeCount(),
        APIService.getInstance().getServiceCount(),
        APIService.getInstance().getPromotionCount(),
        APIService.getInstance().getLoyalProgramCount(),
      ])
      const temp: any = {}
      results.forEach((res, index) => {
        switch (index) {
          case 0:
            temp.employeeCount = res.status === "fulfilled" ? res.value.employeesCount || null : null
            break;
          case 1:
            temp.serviceCount = res.status === "fulfilled" ? res.value.servicesCount || null : null
            break;
          case 2:
            temp.promotionsCount = res.status === "fulfilled" ? res.value.promotionsCount || null : null
            break;
          case 3:
            temp.loyalProgramCount = res.status === "fulfilled" ? res.value.loyalProgramsCount || null : null
            break;
        }
      })
      setCounts(temp)

    } catch (error) {
      console.log(error)

    }
  }

  const getWeeksDaysAppointments = async () => {
    try {
      const data = await APIService.getInstance().getWeeksAppointments()
      setWeekAppointments(data)

    } catch (error) {
      setWeekAppointments(null)
      console.log(error)
    }
  }
  const getYearlyAppointments = async () => {
    try {
      const data = await APIService.getInstance().getYearsAppointments()
      setYearAppointments(data)

    } catch (error) {
      setYearAppointments(null)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCounts()
    getWeeksDaysAppointments()
    getYearlyAppointments()
  }, [])


  return (

    <div className="flex flex-col gap-3 h-full w-full px-5 py-3 overflow-auto scrollbar">
      <div className="md:w-1/2 w-full flex flex-col">
        <h1 className="font-medium text-2xl ">{t(messages.GOOD_MORNING) + "User"}</h1>
        <p className="line-clamp-2 text-sm">{t(messages.YOUR_CENTRAL_HUB)}</p>
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
              <StackedBarChart data={(weekAppointments || undefined) as any} />
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
          <HeaderInfoItem color={ColorsEnum.Blue} heading={counts.serviceCount ?? 0} title="Total Services" className="bg-white py-1" loading={counts.serviceCount === undefined} />
          <HeaderInfoItem color={ColorsEnum.Blue} heading={counts.employeeCount ?? 0} title="Total Employees" className="bg-white py-1" loading={counts.employeeCount === undefined} />
          <HeaderInfoItem color={ColorsEnum.Blue} heading={counts.loyalProgramCount ?? 0} title="Total Loyal Programs" className="bg-white py-1" loading={counts.loyalProgramCount === undefined} />
          <HeaderInfoItem color={ColorsEnum.Blue} heading={counts.promotionsCount ?? 0} title="Total Promotions" className="bg-white py-1" loading={counts.promotionsCount === undefined} />
        </div>


        <div className=" md:col-span-4 bg-white py-2">
          <h1 className="px-3 font-medium w-full">{t(messages.MONTHLY_PROGRESS)}</h1>
          <div className="h-[90%] w-full relative">
            <BarChart data={yearAppointments || undefined as any} />
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
