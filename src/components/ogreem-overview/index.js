import React from 'react'
import Logo1 from "./logo1.svg"
import Logo2 from "./logo2.svg"
import Logo3 from "./logo3.svg"

const overviewData = [
    {
        number: "1100",
        heading: "Organizations",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        number: "2100k",
        heading: "App Users",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
]

const impactData = [
    {
        heading: "Reduced Turnover Costs",
        description: "Allowing employees to access their earned wages increases motivation and job satisfaction resulting in considerable savings",
        icon: Logo1
    },
    {
        heading: "Higher Retention",
        description: "Offering real financial benefits to boost employee financial health creates trust and helps retain and attract high-performing talent",
        icon: Logo2
    },
    {
        heading: "Increased Productivity",
        description: "Accessing earned wages when needed, employees experience less financial stress and can focus on what is really important for your business",
        icon: Logo3
    },
]

const OgreemOverview = () => {
    return (
        // <div className='bg-primaryMuted grid grid-cols-2 py-7'>
        //     {
        //         overviewData.map((data, index) => (
        //             <div className={`flex justify-center ${index == overviewData.length -1 ? "" : "border-r-2"}`}>
        //                 <div className='w-56 flex flex-col items-center'>
        //                     <p className='text-6.5xl leading-vvBig font-bold'>{data.number}</p>
        //                     <p className='text-2xl leading-8 font-medium mt-8'>{data.heading}</p>
        //                     <p className='font-light text-textMuted mt-2 text-center'>{data.description}</p>
        //                 </div>
        //             </div>
        //         ))
        //     }

        // </div>
        <div className='bg-primaryMuted py-16 px-9 '>
            <p className='text-4.5xl font-semibold text-center'>Measurable impact on your business</p>
            <p className='w-185 mt-2 mx-auto text-xl font-light text-center text-textMuted'>Financial stress among employees is costing millions in lost productivity and high turnover. Ogreem gives employees immediate control over their own paycheck which increases productivity and motivation.</p>

            <div className='grid grid-cols-3 gap-y-8 mt-16'>

                {
                    impactData.map((benefit, index) => (
                        <div className={`flex justify-center ${index == 2 || index == 5 ? "" : "border-r-2"}`} key={index}>
                            <div className='flex flex-col items-center' style={{ width: 370 }}>
                                <div className={`w-16 h-16 rounded-full flex justify-center items-center`}>
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

        </div>
    )
}

export default OgreemOverview