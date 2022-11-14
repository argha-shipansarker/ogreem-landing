import React from 'react'
import Home1 from "./Home1.png"
import Home2 from "./Home2.png"

const AboutOgreem = () => {
    return (
        <div className='px-9 py-16 grid grid-cols-12 gap-8 items-center'>
            <div className='col-span-4 relative'>
                <img src={Home2} className="mt-12 z-50 relative" />
                <img src={Home1} className="absolute" style={{ left: 157, top: 0 }} />
            </div>
            <div className='col-span-8'>
                <div className='pl-12 2xl:pl-0'>
                    <p className='text-4.5xl font-semibold'>About Ogreem</p>
                    <p className='text-xl leading-6 font-light text-textMuted mt-8'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sed eget eget dictum netus augue volutpat leo. Amet, aliquet libero orci lobortis duis in facilisis malesuada. Eget natoque phasellus ultricies ipsum id. Malesuada ullamcorper leo, massa morbi est vitae nisl velit id. Quam neque pharetra pellentesque lorem ornare.

                    </p>
                    <p className='text-xl leading-6 font-light text-textMuted mt-6'>
                        Nulla diam varius faucibus quam sed congue tempus neque. Dictum ac ut feugiat adipiscing amet venenatis. Morbi pulvinar semper vulputate lectus hendrerit scelerisque ut turpis scelerisque. Morbi urna, gravida lectus sit. Faucibus cras sed laoreet eu turpis mauris. Hac tempus integer aliquam in eu ultricies sed sit. Ante urna pellentesque nam sodales pretium. Morbi sed feugiat dui lacus.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutOgreem