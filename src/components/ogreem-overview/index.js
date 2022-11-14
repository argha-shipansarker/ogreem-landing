import React from 'react'

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

const OgreemOverview = () => {
    return (
        <div className='bg-primaryMuted grid grid-cols-2 py-7'>
            {
                overviewData.map((data, index) => (
                    <div className={`flex justify-center ${index == overviewData.length -1 ? "" : "border-r-2"}`}>
                        <div className='w-56 flex flex-col items-center'>
                            <p className='text-6.5xl leading-vvBig font-bold'>{data.number}</p>
                            <p className='text-2xl leading-8 font-medium mt-8'>{data.heading}</p>
                            <p className='font-light text-textMuted mt-2 text-center'>{data.description}</p>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default OgreemOverview