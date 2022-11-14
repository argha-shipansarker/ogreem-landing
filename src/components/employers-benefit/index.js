import React, { useState } from 'react'
import Salary from "./salary.png"
import Setup from "./setup.png"
import Speed from "./speed.png"
import Loved from "./loved.png"
import Handshake from "./handshake.png"
import Nocost from "./nocost.png"

const employersBenefitData = [
    {
        bgColor: "#A5BEE2",
        heading: "Improve Productivity",
        description: "Improve employee productivity by eliminating financial stress",
        icon: Salary
    },
    {
        bgColor: "#80E4CC",
        heading: "Attract Talent",
        description: "Attract talent & reduce employee turnover via earned salary access",
        icon: Setup
    },
    {
        bgColor: "#E9AFAF",
        heading: "Mini HRMS Solution",
        description: "Zero-cost and compatible with your HRMS",
        icon: Speed
    },
    {
        bgColor: null,
        heading: "Positive Workplace",
        description: "Positive attitude with clients and colleagues both .",
        icon: Loved
    },
    {
        bgColor: null,
        heading: "Loyalty to the Company",
        description: "Employees tend to stay where they are taken care of.",
        icon: Handshake
    },
    {
        bgColor: null,
        heading: "Free of Cost",
        description: "No signup fee",
        icon: Nocost
    }
]

const EmployersBenefit = () => {
    // const [limit, setLimit] = useState(3)
    return (
        <div className='bg-primaryMuted py-16 px-9 '>
            <p className='text-4.5xl font-semibold text-center'>What Employers get</p>
            <p className='w-160 mt-2 mx-auto text-xl font-light text-center text-textMuted'>Realtime employee analytics, attendents and engagement tools</p>

            <div className='grid grid-cols-3 gap-y-8 mt-16'>

                {
                    employersBenefitData.map((benefit, index) => (
                        <div className={`flex justify-center ${index == 2 || index == 5 ? "" : "border-r-2"}`} key={index}>
                            <div className='flex flex-col items-center' style={{ width: 300 }}>
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
                limit != employersBenefitData.length && (
                    <button className='mt-14 h-14 w-63.5 flex justify-center items-center border-2 border-secondary rounded-xl text-2xl font-bold leading-8 text-secondary mx-auto' onClick={() => setLimit(employersBenefitData.length)}>
                        Know More
                    </button>
                )
            } */}
        </div>
    )
}

export default EmployersBenefit