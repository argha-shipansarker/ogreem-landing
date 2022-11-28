import React from 'react'
import { Link } from 'react-router-dom'
// import vid from "./assets/hero.webm"
import hero from "./assets/hero.png"

const EarnedWageHero = () => {
    return (
        <div className="w-full">
            <div className="container flex flex-col md:flex-row justify-center items-center p-20 mx-auto">
                <div className="basis-1/2 p-4">
                    <h1 className="font-medium text-5xl m-3 text-indigo-900">Earned Wage Access</h1>
                    <p className="font-light text-xl m-3">EWA changes the way you receive and spend your salary. Your salary is your right, <b>and we let you access it with Ogreem</b></p>
                    <div className="mx-3 my-6 flex flex-col md:flex-row justify-start items-center">
                        <Link to="earned-wage-access">
                            <button className="flex-none py-3 px-6 border-2 border-secondary rounded-lg text-indigo-800">Learn More</button>
                        </Link>
                        <p className="mt-4 md:mt-0 md:ml-40"><em className="text-indigo-800 font-bold mr-4">{'-'}</em>100% Shariah Compliant<em className="text-indigo-800 font-bold ml-4">{'>'}</em></p>
                    </div>
                </div>
                <div className="basis-1/2">
                    <img src={hero} alt="hero" />
                    {/* <video width="320" height="240" controls={false} autoPlay loop muted className="w-full"> */}
                    {/*     <source src={vid} type="video/webm" /> */}
                    {/*     Your browser does not support the video tag. */}
                    {/* </video> */}
                </div>
            </div>
        </div>
    )
}

export default EarnedWageHero