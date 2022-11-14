import React, { useState } from 'react'
import Salary from "./salary.png"
import Setup from "./setup.png"
import Speed from "./speed.png"
import Hidden from "./hidden.png"
import Debt from "./nodebt.png"
import Loved from "./loved.png"

const employeeBenefitData = [
    {
        bgColor: "#A5BEE2",
        heading: "Salary on the fly",
        description: "Improve employee productivity by eliminating financial stress",
        icon: Salary
    },
    {
        bgColor: "#80E4CC",
        heading: "Easy To Set Up",
        description: "Three simple steps to set up Ogreem account",
        icon: Setup
    },
    {
        bgColor: "#E9AFAF",
        heading: "Speedy Withdrawal",
        description: "Withdraw earned salary via MFS or Bank in hours",
        icon: Speed
    },
    {
        bgColor: null,
        heading: "No hidden charges",
        description: "Only pay if you transact.",
        icon: Hidden
    },
    {
        bgColor: null,
        heading: "Free from debt",
        description: "No more credit cards or loans.",
        icon: Debt
    },
    {
        bgColor: null,
        heading: "Share with loved ones",
        description: "Send money to your loved ones before payday.",
        icon: Loved
    },
]

const EmployeesBenefit = () => {
    // const [limit, setLimit] = useState(3)
    return (
        <div className='bg-white py-16 px-9 '>
            <p className='text-4.5xl font-semibold text-center'>What Employees get</p>
            <p className='w-160 mt-2 mx-auto text-xl font-light text-center text-textMuted'>A simple app to support their financial future</p>

            <div className='grid grid-cols-3 gap-y-8 mt-16'>

                {
                    employeeBenefitData.map((benefit, index) => (
                        <div className={`flex justify-center ${index == 2 || index == 5 ? "" : "border-r-2"}`} key={index}>
                            <div className='flex flex-col items-center' style={{ width: 270 }}>
                                <div className={`w-16 h-16 rounded-full flex justify-center items-center`} style={{ backgroundColor: benefit.bgColor }}>
                                    {/* {benefit.icon} */}
                                    <img src={benefit.icon}/>
                                </div>
                                <p className='mt-4 text-2xl leading-8 font-medium'>{benefit.heading}</p>
                                <p className='font-light text-textMuted mt-2 text-center'>{benefit.description}</p>
                            </div>
                        </div>
                    ))
                }

            </div>

            {/* {
                limit != employeeBenefitData.length && (
                    <button className='mt-14 h-14 w-63.5 flex justify-center items-center border-2 border-secondary rounded-xl text-2xl font-bold leading-8 text-secondary mx-auto' onClick={() => setLimit(employeeBenefitData.length)}>
                        Know More
                    </button>
                )
            } */}
        </div>
    )
}

export default EmployeesBenefit