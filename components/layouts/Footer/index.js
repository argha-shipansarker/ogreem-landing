import Link from "next/link";
import React from "react";
// import Google from "./google.png";
// import Apple from "./apple.png";

const Footer = () => {
    return (
        <div>
            {/* <hr /> */}

            {/* <div className="container mx-auto px-9 grid grid-cols-1 lg:grid-cols-2 my-8"> */}
            {/*     <div className=""> */}
            {/*         <p className="text-4.5xl font-semibold">Download App</p> */}
            {/*         <p className="text-xl leading-6 text-textMuted font-light mt-4"> */}
            {/*             To download and install the app click on the button. And anjoy your */}
            {/*             advance salary. */}
            {/*         </p> */}
            {/*     </div> */}
            {/*     <div className="mt-11 flex flex-col md:flex-row lg:justify-end"> */}
            {/*         <img */}
            {/*             src={Google} */}
            {/*             className="mb-4 lg:mb-0 lg:mr-11 w-[133px] h-[40px] object-content" */}
            {/*             alt="google" */}
            {/*         /> */}
            {/*         <img */}
            {/*             src={Apple} */}
            {/*             className="mb-4 lg:mb-0 lg:mr-11 w-[133px] h-[40px] object-content" */}
            {/*             alt="apple" */}
            {/*         /> */}
            {/*     </div> */}
            {/* </div> */}

            <hr />

            <div className="container px-9 grid grid-cols-1 gap-y-6 md:grid-cols-2 lg:grid-cols-4 py-14 mx-auto">
                <div className="">
                    <svg
                        width="203"
                        height="62"
                        viewBox="0 0 203 62"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_734_282)">
                            <path
                                d="M62.3999 21.9286C62.5456 21.7858 62.6912 21.7144 62.9096 21.7144H69.6811C69.8996 21.7144 70.0452 21.7858 70.1908 21.9286C70.3365 22.0715 70.4093 22.2144 70.4093 22.4286V48.2144C70.4093 53.1429 68.953 56.7144 66.0405 58.7858C63.1281 60.9286 59.4146 61.9286 54.8275 61.9286C53.4441 61.9286 51.9878 61.8572 50.3131 61.6429C49.9491 61.5715 49.7306 61.3572 49.7306 60.9286L49.9491 55.0715C49.9491 54.5715 50.2403 54.3572 50.75 54.4286C52.1334 54.6429 53.3712 54.7858 54.5362 54.7858C57.0118 54.7858 58.905 54.2858 60.2156 53.2144C61.5262 52.1429 62.1815 50.4286 62.1815 48.1429C62.1815 48.0001 62.1087 47.9286 62.0359 47.9286C61.9631 47.9286 61.8903 47.9286 61.8174 48.0001C60.3612 49.5715 58.2496 50.2858 55.41 50.2858C52.9344 50.2858 50.6044 49.7144 48.4928 48.5001C46.3813 47.2858 44.925 45.4286 44.0513 42.7858C43.4688 41.0715 43.1776 38.7858 43.1776 36.0715C43.1776 33.1429 43.5416 30.7144 44.1969 28.8572C44.9979 26.5715 46.3813 24.7144 48.2744 23.2858C50.1675 21.8572 52.4247 21.2144 54.9731 21.2144C57.9584 21.2144 60.2156 22.0715 61.8174 23.7858C61.8903 23.8572 61.9631 23.8572 62.0359 23.8572C62.1087 23.8572 62.1815 23.7858 62.1815 23.6429V22.2858C62.1815 22.2144 62.2543 22.0715 62.3999 21.9286ZM62.1815 36.0715C62.1815 34.9286 62.1087 34.0001 62.0359 33.3572C61.9631 32.7144 61.8174 32.1429 61.599 31.5715C61.2349 30.5715 60.6524 29.7144 59.8515 29.1429C59.0506 28.5001 58.0312 28.2144 56.8662 28.2144C55.7012 28.2144 54.7547 28.5001 53.9537 29.1429C53.1528 29.7858 52.5703 30.5715 52.1334 31.5715C51.6237 32.7144 51.3325 34.2144 51.3325 36.1429C51.3325 38.2858 51.5509 39.7858 52.0606 40.6429C52.4247 41.6429 53.0072 42.5001 53.8809 43.0715C54.7547 43.7144 55.774 44.0001 56.939 44.0001C58.1768 44.0001 59.1962 43.7144 59.9971 43.0715C60.7981 42.4286 61.3806 41.6429 61.6718 40.6429C62.0359 39.5715 62.1815 38.0001 62.1815 36.0715Z"
                                fill="#5063AA"
                            />
                            <path
                                d="M94.2188 22.143C94.5101 22.2859 94.6557 22.5716 94.5829 23.0002L93.3451 29.4287C93.2723 29.8573 93.0538 30.0002 92.5441 29.8573C91.9616 29.643 91.3063 29.5716 90.5054 29.5716C90.2142 29.5716 89.7773 29.643 89.2676 29.7145C87.8842 29.8573 86.7192 30.3573 85.7726 31.2145C84.8261 32.0716 84.3164 33.2859 84.3164 34.7859V50.2145C84.3164 50.4287 84.2436 50.5716 84.0979 50.7145C83.9523 50.8573 83.8067 50.9287 83.5883 50.9287H76.8167C76.5983 50.9287 76.4527 50.8573 76.3071 50.7145C76.1614 50.5716 76.0886 50.4287 76.0886 50.2145V22.4287C76.0886 22.2145 76.1614 22.0716 76.3071 21.9287C76.4527 21.7859 76.5983 21.7145 76.8167 21.7145H83.5883C83.8067 21.7145 83.9523 21.7859 84.0979 21.9287C84.2436 22.0716 84.3164 22.2145 84.3164 22.4287V24.5716C84.3164 24.7145 84.3892 24.7859 84.462 24.7859C84.5348 24.8573 84.6076 24.7859 84.6076 24.7145C86.2095 22.4287 88.321 21.2859 90.9423 21.2859C92.3257 21.3573 93.4179 21.5716 94.2188 22.143Z"
                                fill="#5063AA"
                            />
                            <path
                                d="M123.999 38.0715C123.926 38.5001 123.708 38.7144 123.271 38.7144H105.432C105.213 38.7144 105.141 38.7858 105.213 39.0001C105.359 39.7858 105.577 40.5001 105.869 41.2858C106.888 43.4287 108.927 44.4287 111.985 44.4287C114.461 44.3572 116.354 43.4287 117.81 41.5001C117.956 41.2858 118.174 41.143 118.32 41.143C118.465 41.143 118.538 41.2144 118.756 41.3572L122.907 45.3572C123.125 45.5715 123.198 45.7144 123.198 45.8572C123.198 45.9287 123.125 46.0715 122.98 46.2858C121.742 47.8572 120.067 49.0001 118.101 49.8572C116.135 50.7144 113.878 51.143 111.548 51.143C108.272 51.143 105.432 50.4287 103.175 48.9287C100.918 47.4287 99.2428 45.4287 98.2235 42.7858C97.4225 40.9287 96.9857 38.4287 96.9857 35.3572C96.9857 33.2858 97.2769 31.4287 97.8594 29.8572C98.7331 27.143 100.262 25.0715 102.519 23.4287C104.704 21.8572 107.325 21.0715 110.383 21.0715C114.242 21.0715 117.3 22.143 119.63 24.3572C121.96 26.5715 123.344 29.5001 123.853 33.143C123.999 34.7144 124.072 36.2858 123.999 38.0715ZM105.505 31.4287C105.359 31.9287 105.213 32.5001 105.068 33.2144C105.068 33.4287 105.141 33.5001 105.359 33.5001H115.334C115.553 33.5001 115.626 33.4287 115.553 33.2144C115.334 32.143 115.261 31.5715 115.261 31.643C114.897 30.5001 114.315 29.643 113.441 29.0001C112.567 28.3572 111.475 28.0715 110.237 28.0715C107.907 28.143 106.306 29.2144 105.505 31.4287Z"
                                fill="#5063AA"
                            />
                            <path
                                d="M155.454 38.0715C155.381 38.5001 155.163 38.7144 154.726 38.7144H136.887C136.668 38.7144 136.595 38.7858 136.668 39.0001C136.814 39.7858 137.032 40.5001 137.324 41.2858C138.343 43.4287 140.382 44.4287 143.44 44.4287C145.915 44.3572 147.809 43.4287 149.265 41.5001C149.41 41.2858 149.629 41.143 149.774 41.143C149.92 41.143 149.993 41.2144 150.211 41.3572L154.362 45.3572C154.58 45.5715 154.653 45.7144 154.653 45.8572C154.653 45.9287 154.58 46.0715 154.434 46.2858C153.197 47.8572 151.522 49.0001 149.556 49.8572C147.59 50.7144 145.333 51.143 143.003 51.143C139.726 51.143 136.887 50.4287 134.63 48.9287C132.372 47.4287 130.698 45.4287 129.678 42.7858C128.877 40.9287 128.44 38.4287 128.44 35.3572C128.44 33.2858 128.732 31.4287 129.314 29.8572C130.188 27.143 131.717 25.0715 133.974 23.4287C136.159 21.8572 138.78 21.0715 141.838 21.0715C145.697 21.0715 148.755 22.143 151.085 24.3572C153.415 26.5715 154.798 29.5001 155.308 33.143C155.454 34.7144 155.527 36.2858 155.454 38.0715ZM137.032 31.4287C136.887 31.9287 136.741 32.5001 136.595 33.2144C136.595 33.4287 136.668 33.5001 136.887 33.5001H146.862C147.08 33.5001 147.153 33.4287 147.08 33.2144C146.862 32.143 146.789 31.5715 146.789 31.643C146.425 30.5001 145.843 29.643 144.969 29.0001C144.095 28.3572 143.003 28.0715 141.765 28.0715C139.362 28.143 137.76 29.2144 137.032 31.4287Z"
                                fill="#5063AA"
                            />
                            <path
                                d="M200.452 23.9287C202.126 25.7145 203 28.2145 203 31.4287V50.143C203 50.3573 202.927 50.5002 202.782 50.643C202.636 50.7859 202.49 50.8573 202.272 50.8573H195.5C195.282 50.8573 195.136 50.7859 194.991 50.643C194.845 50.5002 194.772 50.3573 194.772 50.143V33.143C194.772 31.5716 194.335 30.3573 193.534 29.5002C192.733 28.5716 191.641 28.143 190.331 28.143C188.947 28.143 187.855 28.5716 187.054 29.5002C186.18 30.4287 185.816 31.643 185.816 33.143V50.2145C185.816 50.4287 185.743 50.5716 185.598 50.7145C185.452 50.8573 185.307 50.9287 185.088 50.9287H178.389C178.171 50.9287 178.025 50.8573 177.88 50.7145C177.734 50.5716 177.661 50.4287 177.661 50.2145V33.143C177.661 31.643 177.224 30.4287 176.424 29.5002C175.55 28.5716 174.458 28.143 173.147 28.143C171.909 28.143 170.89 28.5002 170.089 29.2145C169.288 29.9287 168.778 30.9287 168.633 32.2145V50.143C168.633 50.3573 168.56 50.5002 168.414 50.643C168.269 50.7859 168.123 50.8573 167.905 50.8573H161.133C160.915 50.8573 160.769 50.7859 160.623 50.643C160.478 50.5002 160.405 50.3573 160.405 50.143V22.4287C160.405 22.2145 160.478 22.0716 160.623 21.9287C160.769 21.7859 160.915 21.7145 161.133 21.7145H167.905C168.123 21.7145 168.269 21.7859 168.414 21.9287C168.56 22.0716 168.633 22.2145 168.633 22.4287V24.643C168.633 24.7859 168.705 24.8573 168.778 24.8573C168.851 24.9287 168.924 24.8573 168.997 24.7145C170.599 22.4287 173.001 21.2859 176.351 21.2859C178.244 21.2859 179.991 21.7145 181.375 22.5002C182.831 23.2859 183.923 24.4287 184.724 25.9287C184.87 26.143 184.943 26.143 185.161 25.9287C186.035 24.3573 187.127 23.2145 188.583 22.5002C190.039 21.7145 191.641 21.3573 193.462 21.3573C196.374 21.2859 198.704 22.143 200.452 23.9287Z"
                                fill="#5063AA"
                            />
                            <path
                                d="M1.14441e-05 14.5V35.7143C1.14441e-05 43.7143 6.62591 50.1428 14.708 50.1428H23.0086C23.0086 49.5 22.863 48.3571 22.2077 47.7857C18.7855 44.9286 17.4021 40.9286 16.9652 39.3571H14.9993C12.5965 39.3571 10.6306 37.4286 10.6306 35.0714V15.2857C10.6306 12.9286 12.5965 11 14.9993 11H24.5377C27.0133 11 28.9064 12.9286 28.9064 15.2857V22.2857C29.853 22.4286 30.4355 22.5714 30.4355 22.5714C32.4014 22.9286 36.042 24.7143 36.1876 28.9286L36.2604 43.7857C37.8623 41.4286 38.8088 38.7143 38.8088 35.7143V14.5C38.8088 6.5 32.1829 0 24.028 0H14.7809C6.62591 0 1.14441e-05 6.5 1.14441e-05 14.5Z"
                                fill="#5063AA"
                            />
                            <path
                                d="M22.2077 32.6426C23.8823 33.5712 22.9358 36.9284 25.8483 38.9284C25.9939 38.9998 26.2123 38.9998 26.358 38.9998C27.887 38.3569 28.9064 36.9284 28.9064 35.1426V24.8569C29.4889 24.9284 29.7801 24.9998 29.7801 24.9998C30.0714 25.0712 33.4935 25.7855 33.6392 28.9998L33.712 46.6427C31.5276 48.5712 28.6879 49.8569 25.557 50.1426C25.557 49.0712 25.3386 47.1427 23.8823 45.9284C22.062 44.4284 20.9699 42.4998 20.2417 40.9998C20.1689 40.8569 20.0961 40.6426 20.0233 40.4284C19.8777 40.0712 19.7321 39.7141 19.6593 39.4284C19.5136 38.9998 19.4408 38.6426 19.368 38.4284C19.368 38.2855 19.2952 38.2141 19.2952 38.2141C19.0039 37.1426 18.9311 36.0712 18.8583 34.9998C18.7855 32.4284 21.2611 32.1426 22.2077 32.6426Z"
                                fill="#5063AA"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_734_282">
                                <rect width="203" height="62" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>

                <div className="mt-6">
                    <p className="text-xl leading-6 text-textMuted font-medium mb-8">
                        Contact
                    </p>
                    {/* <div className="flex">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.55081 1.80005H5.00005C3.23274 1.80005 1.80005 3.23274 1.80005 5.00005V8.20005C1.80005 17.0366 8.96349 24.2 17.8 24.2H21C22.7674 24.2 24.2 22.7674 24.2 21V18.7889C24.2 18.1829 23.8576 17.6288 23.3156 17.3578L19.4501 15.4251C18.5792 14.9896 17.5246 15.4265 17.2167 16.3502L16.7402 17.7795C16.4316 18.7053 15.4819 19.2564 14.525 19.065C10.6949 18.299 7.70108 15.3052 6.93506 11.4751C6.74367 10.5182 7.29481 9.56846 8.22062 9.25986L9.99443 8.66859C10.7876 8.4042 11.2435 7.57373 11.0407 6.76264L10.103 3.01199C9.92497 2.29972 9.28499 1.80005 8.55081 1.80005Z"
                stroke="#505050"
                strokeWidth="2"
              />
            </svg>
            <p className="font-light ml-4">346 254 233 - 6</p>
          </div> */}
                    <div className="flex mt-5">
                        <svg
                            width="26"
                            height="24"
                            viewBox="0 0 26 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.80005 7.1999L13 13.5999L24.2 7.1999M3.40005 2.3999H22.6C23.4837 2.3999 24.2 3.11625 24.2 3.9999V19.9999C24.2 20.8836 23.4837 21.5999 22.6 21.5999H3.40005C2.51639 21.5999 1.80005 20.8836 1.80005 19.9999V3.9999C1.80005 3.11625 2.51639 2.3999 3.40005 2.3999Z"
                                stroke="#505050"
                                strokeWidth="2"
                            />
                        </svg>
                        <p className="font-light ml-4">info@ogreem.com</p>
                    </div>
                </div>

                <div className="mt-6">
                    <p className="text-xl leading-6 text-textMuted font-medium mb-8">
                        Social media
                    </p>

                    <div className="flex">
                        <a href="https://www.facebook.com/people/Ogreem/100088339675635/?mibextid=LQQJ4d" target="_blank">
                            <svg
                                className="mr-2"
                                width="35"
                                height="35"
                                viewBox="0 0 35 35"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_734_1374)">
                                    <path
                                        d="M13.9908 27.162V17.7708H11.4363V14.3896H13.9908V11.5015C13.9908 9.23206 15.4998 7.14795 18.9769 7.14795C20.3847 7.14795 21.4257 7.27914 21.4257 7.27914L21.3437 10.4367C21.3437 10.4367 20.282 10.4266 19.1235 10.4266C17.8696 10.4266 17.6687 10.9883 17.6687 11.9206V14.3896H21.4433L21.2791 17.7708H17.6687V27.162H13.9908Z"
                                        fill="#505050"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_734_1374">
                                        <rect
                                            width="10.007"
                                            height="20.0141"
                                            fill="white"
                                            transform="translate(11.4363 7.14795)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>


                        {/* <svg
                            className="mr-2"
                            width="36"
                            height="35"
                            viewBox="0 0 36 35"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_734_1370)">
                                <path
                                    d="M30.7744 9.58497C29.8108 9.99164 28.7887 10.2586 27.7422 10.3769C28.8323 9.75447 29.6693 8.7688 30.0634 7.59438C29.0272 8.18023 27.8934 8.593 26.7111 8.81486C25.748 7.83742 24.3761 7.22656 22.8576 7.22656C19.942 7.22656 17.5781 9.47848 17.5781 12.2559C17.5781 12.6502 17.6248 13.034 17.7148 13.4022C13.3272 13.1924 9.43721 11.1901 6.83331 8.14721C6.37897 8.89003 6.11863 9.75408 6.11863 10.6757C6.11863 12.4206 7.05073 13.96 8.46722 14.862C7.62885 14.837 6.80893 14.6212 6.07591 14.2328C6.07561 14.2539 6.07561 14.275 6.07561 14.2961C6.07561 16.733 7.89537 18.7658 10.3104 19.2278C9.53299 19.4292 8.71753 19.4587 7.92633 19.314C8.59809 21.3122 10.5478 22.7662 12.8579 22.8069C11.0511 24.1558 8.7747 24.9599 6.30137 24.9599C5.87518 24.9599 5.45502 24.9361 5.04199 24.8896C7.37831 26.3166 10.1533 27.1493 13.1346 27.1493C22.8453 27.1493 28.1553 19.4854 28.1553 12.8392C28.1553 12.6211 28.1503 12.4042 28.14 12.1885C29.1736 11.4767 30.0657 10.5951 30.7744 9.58497Z"
                                    fill="#505050"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_734_1370">
                                    <rect
                                        width="25.7324"
                                        height="20.0141"
                                        fill="white"
                                        transform="translate(5.04199 7.14795)"
                                    />
                                </clipPath>
                            </defs>
                        </svg> */}

                        <a href="https://www.linkedin.com/company/ogreem/about/" target="_blank">
                            <svg
                                className="mr-2"
                                width="36"
                                height="35"
                                viewBox="0 0 36 35"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_734_1366)">
                                    <path
                                        d="M11.8484 27.1619V12.6939H6.94448V27.1619H11.8484ZM9.39705 10.7174C11.1071 10.7174 12.1716 9.60641 12.1716 8.21806C12.1397 6.7984 11.1072 5.71826 9.4295 5.71826C7.75208 5.71826 6.65515 6.79842 6.65515 8.21806C6.65515 9.60647 7.71933 10.7174 9.36504 10.7174H9.3969H9.39705ZM14.5626 27.1619H19.4665V19.0823C19.4665 18.6499 19.4984 18.2179 19.6279 17.9088C19.9824 17.0449 20.7893 16.1501 22.1439 16.1501C23.9185 16.1501 24.6284 17.4768 24.6284 19.4218V27.1618H29.5319V18.866C29.5319 14.422 27.1126 12.3543 23.8862 12.3543C21.2407 12.3543 20.0792 13.8043 19.4339 14.792H19.4666V12.6936H14.5628C14.6271 14.0512 14.5628 27.1616 14.5628 27.1616L14.5626 27.1619Z"
                                        fill="#505050"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_734_1366">
                                        <rect
                                            width="22.8732"
                                            height="21.4437"
                                            fill="white"
                                            transform="translate(6.65515 5.71826)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>

                        {/* <svg
                            width="35"
                            height="35"
                            viewBox="0 0 35 35"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_734_1362)">
                                <path
                                    d="M17.8505 11.3752C14.6033 11.3752 11.9841 13.9534 11.9841 17.1499C11.9841 20.3463 14.6033 22.9246 17.8505 22.9246C21.0976 22.9246 23.7168 20.3463 23.7168 17.1499C23.7168 13.9534 21.0976 11.3752 17.8505 11.3752ZM17.8505 20.9042C15.752 20.9042 14.0365 19.2205 14.0365 17.1499C14.0365 15.0792 15.7469 13.3956 17.8505 13.3956C19.954 13.3956 21.6644 15.0792 21.6644 17.1499C21.6644 19.2205 19.9489 20.9042 17.8505 20.9042ZM25.3251 11.1389C25.3251 11.8878 24.7124 12.4859 23.9568 12.4859C23.196 12.4859 22.5885 11.8828 22.5885 11.1389C22.5885 10.3951 23.2012 9.79202 23.9568 9.79202C24.7124 9.79202 25.3251 10.3951 25.3251 11.1389ZM29.2105 12.506C29.1237 10.7017 28.705 9.10347 27.3622 7.7867C26.0246 6.46993 24.401 6.05781 22.5681 5.96734C20.679 5.8618 15.0168 5.8618 13.1277 5.96734C11.2999 6.05278 9.67634 6.4649 8.33356 7.78167C6.99078 9.09845 6.57722 10.6967 6.48532 12.501C6.3781 14.3605 6.3781 19.9342 6.48532 21.7938C6.57212 23.598 6.99078 25.1963 8.33356 26.513C9.67634 27.8298 11.2948 28.2419 13.1277 28.3324C15.0168 28.4379 20.679 28.4379 22.5681 28.3324C24.401 28.247 26.0246 27.8348 27.3622 26.513C28.6999 25.1963 29.1186 23.598 29.2105 21.7938C29.3177 19.9342 29.3177 14.3655 29.2105 12.506ZM26.77 23.789C26.3717 24.7741 25.6008 25.533 24.595 25.93C23.0888 26.5181 19.5149 26.3824 17.8505 26.3824C16.186 26.3824 12.607 26.513 11.1059 25.93C10.1052 25.538 9.33426 24.7791 8.93092 23.789C8.33356 22.3064 8.47141 18.7883 8.47141 17.1499C8.47141 15.5114 8.33866 11.9883 8.93092 10.5107C9.32916 9.52565 10.1001 8.76674 11.1059 8.3697C12.6121 7.78167 16.186 7.91737 17.8505 7.91737C19.5149 7.91737 23.0939 7.7867 24.595 8.3697C25.5957 8.76172 26.3666 9.52062 26.77 10.5107C27.3673 11.9933 27.2295 15.5114 27.2295 17.1499C27.2295 18.7883 27.3673 22.3114 26.77 23.789Z"
                                    fill="#505050"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_734_1362">
                                    <rect
                                        width="22.8732"
                                        height="25.7324"
                                        fill="white"
                                        transform="translate(6.40869 4.28882)"
                                    />
                                </clipPath>
                            </defs>
                        </svg> */}
                    </div>
                </div>

                <div className="mt-6">
                    <p className="text-xl leading-6 text-textMuted font-medium mb-8">
                        Download
                    </p>

                    <div className="flex flex-col md:flex-row">
                        <Link href="https://play.google.com/store/apps/details?id=com.ogreem.app" target="_blank">
                            <img
                                src="/images/google.png"
                                className="mb-4 lg:mb-0 lg:mr-11 w-[133px] h-[40px] object-content"
                                alt="google"
                            />
                        </Link>
                        {/* <input */}
                        {/*     type="text" */}
                        {/*     className="h-14 focus:outline-0 border-2 border-primary rounded-t-lg md:rounded-tr-none md:rounded-l-lg pl-4" */}
                        {/*     placeholder="Email" */}
                        {/* /> */}
                        {/* <button className="text-sm text-white text-center md:text-start font-bold h-14 px-3 bg-primary rounded-b-lg md:rounded-bl-none md:rounded-r-lg"> */}
                        {/*     Subscribe */}
                        {/* </button> */}
                    </div>
                </div>
            </div>

            <div className="h-12 bg-primaryMuted"></div>
        </div>
    );
};

export default Footer;
