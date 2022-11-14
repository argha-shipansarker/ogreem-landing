import React from 'react'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import User1 from "./user1.png"
import User2 from "./user2.png"
import User3 from "./user3.png"

const UsersComment = () => {
    return (
        <div className='py-16 bg-organizationThoughtBG user-comment'>
            <p className='text-4.5xl font-semibold text-center'>What App users Think</p>
            <p className='w-160 mt-2 mx-auto text-xl font-light text-center text-textMuted'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ornare arcu posuere purus diam tellus dui pharetra.</p>

            <Swiper
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={3}
                pagination={{ clickable: true }}
                className="mt-10 h-117.5"
            >

                <SwiperSlide>
                    <div className='w-105 h-86 px-11 pb-8 relative bg-white rounded-lg mt-20' style={{ boxShadow: "0px 0px 8px 1px rgba(0, 0, 0, 0.15)" }}>
                        <div className='w-36.5 h-36.5 absolute rounded-full' style={{ top: "-73px", left: 135 }}>
                            <img src={User1} className="w-full h-full" />
                        </div>

                        <p className='text-xl font-medium text-center pt-24'>Fowohg Flotwoi</p>
                        <p className='text-sm font-light text-textMuted mt-1 text-center'>Fowohg Flotwoi</p>
                        <p className='text-xl text-center font-light text-textMuted mt-4 leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus dapibus vitae egestas nisl quis dui lorem. Ullamcorper amet habitant cras ullamcorper libero nam libero nulla in.</p>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-105 h-86 px-11 pb-8 relative bg-white rounded-lg mt-20' style={{ boxShadow: "0px 0px 8px 1px rgba(0, 0, 0, 0.15)" }}>
                        <div className='w-36.5 h-36.5 absolute rounded-full' style={{ top: "-73px", left: 135 }}>
                            <img src={User2} className="w-full h-full" />
                        </div>

                        <p className='text-xl font-medium text-center pt-24'>Fowohg Flotwoi</p>
                        <p className='text-sm font-light text-textMuted mt-1 text-center'>Fowohg Flotwoi</p>
                        <p className='text-xl text-center font-light text-textMuted mt-4 leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus dapibus vitae egestas nisl quis dui lorem. Ullamcorper amet habitant cras ullamcorper libero nam libero nulla in.</p>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-105 h-86 px-11 pb-8 relative bg-white rounded-lg mt-20' style={{ boxShadow: "0px 0px 8px 1px rgba(0, 0, 0, 0.15)" }}>
                        <div className='w-36.5 h-36.5 absolute rounded-full' style={{ top: "-73px", left: 135 }}>
                            <img src={User3} className="w-full h-full" />
                        </div>

                        <p className='text-xl font-medium text-center pt-24'>Fowohg Flotwoi</p>
                        <p className='text-sm font-light text-textMuted mt-1 text-center'>Fowohg Flotwoi</p>
                        <p className='text-xl text-center font-light text-textMuted mt-4 leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus dapibus vitae egestas nisl quis dui lorem. Ullamcorper amet habitant cras ullamcorper libero nam libero nulla in.</p>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-105 h-86 px-11 pb-8 relative bg-white rounded-lg mt-20' style={{ boxShadow: "0px 0px 8px 1px rgba(0, 0, 0, 0.15)" }}>
                        <div className='w-36.5 h-36.5 absolute rounded-full' style={{ top: "-73px", left: 135 }}>
                            <img src={User1} className="w-full h-full" />
                        </div>

                        <p className='text-xl font-medium text-center pt-24'>Fowohg Flotwoi</p>
                        <p className='text-sm font-light text-textMuted mt-1 text-center'>Fowohg Flotwoi</p>
                        <p className='text-xl text-center font-light text-textMuted mt-4 leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus dapibus vitae egestas nisl quis dui lorem. Ullamcorper amet habitant cras ullamcorper libero nam libero nulla in.</p>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <div className='w-105 h-86 px-11 pb-8 relative bg-white rounded-lg mt-20' style={{ boxShadow: "0px 0px 8px 1px rgba(0, 0, 0, 0.15)" }}>
                        <div className='w-36.5 h-36.5 absolute rounded-full' style={{ top: "-73px", left: 135 }}>
                            <img src={User2} className="w-full h-full" />
                        </div>

                        <p className='text-xl font-medium text-center pt-24'>Fowohg Flotwoi</p>
                        <p className='text-sm font-light text-textMuted mt-1 text-center'>Fowohg Flotwoi</p>
                        <p className='text-xl text-center font-light text-textMuted mt-4 leading-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus dapibus vitae egestas nisl quis dui lorem. Ullamcorper amet habitant cras ullamcorper libero nam libero nulla in.</p>
                    </div>

                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default UsersComment