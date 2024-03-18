"use client"
import React from 'react'
import { DataTable } from './DataTable'
import { userColumns } from './columns/UsersColumn'

const UsersTable = () => {
    const data: SampleUser[] = [
        {
            name: "Branch Lorem",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, earum! Debitis, aspernatur qui nesciunt magnam laboriosam culpa nisi error maiores sunt fugit? Vitae nemo et odit, accusantium rem quos excepturi.",
            pasword: "Password@123"
        },
        {
            name: "Branch Lorem",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, earum! Debitis, aspernatur qui nesciunt magnam laboriosam culpa nisi error maiores sunt fugit? Vitae nemo et odit, accusantium rem quos excepturi.",
            pasword: "Password@123"
        },
        {
            name: "Branch Lorem",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, earum! Debitis, aspernatur qui nesciunt magnam laboriosam culpa nisi error maiores sunt fugit? Vitae nemo et odit, accusantium rem quos excepturi.",
            pasword: "Password@123"
        },
        {
            name: "Branch Lorem",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, earum! Debitis, aspernatur qui nesciunt magnam laboriosam culpa nisi error maiores sunt fugit? Vitae nemo et odit, accusantium rem quos excepturi.",
            pasword: "Password@123"
        },
    ]
    return (
        <div>
            <DataTable data={data} columns={userColumns} filterKey='name' count={data.length} rowStyle='odd:bg-white even:bg-indigo-800 even:bg-opacity-5' />
        </div>
    )
}

export default UsersTable