import React from "react"
import {Icon} from "@iconify/react";
import Image from "next/image";

const Projects = () => {
    return (
        <div className='pt-20'>
            <h4 className={'uppercase text-4xl text-[#F9F871] mb-10'}>Projects</h4>
            <div className={"w-full flex space-x-5 overflow-x-scroll p-10 "}>
                <div className={'flex flex-col flex-shrink-0 w-8/12 border border-[#F9F871] p-4 rounded-2xl space-y-5'}>
                    <div className={'flex flex-row justify-between'}>
                        <h5 className={'text-[#F9F871] uppercase'}>My portfolio website</h5>
                        <div className={'flex flex-row items-center space-x-1'}>
                            <Icon icon="ph:figma-logo-thin" color="#f9f871" width="25" height="25"/>
                            <Icon icon="ph:github-logo-thin" color="#f9f871" width="25" height="25"/>
                        </div>
                    </div>
                    <p>
                        I started this project during my international internship search to have a website to
                        share with recruiters. I first made a mock-up on Figma of the website I wanted to
                        create.
                        Then, I chose the front-end technologies, especially react, because I already made
                        sites with this framework.
                        I wanted to make a backend for this project to show that I could make an API.
                        I hesitated to use a headless CMS but I finally used ExpressJS and MongoDB.
                    </p>
                    <div className={'flex flex-row justify-center'}>
                        <Image src={"/christian-wiediger-WkfDrhxDMC8-unsplash.jpg"}
                               width={100}
                               height={200}
                               alt={"Computer"}/>
                        <Image src={"/andras-vas-Bd7gNnWJBkU-unsplash.jpg"}
                               width={100}
                               height={200}
                               alt={"Computer"}/>
                        <Image src={"/christopher-gower-m_HRfLhgABo-unsplash.jpg"}
                               width={100}
                               height={200}
                               alt={"Computer"}/>
                    </div>
                    <div className={'space-y-2'}>
                        <h5 className={'text-[#F9F871] uppercase'}>Technologies</h5>
                        <div className={'grid grid-cols-3 2xl:grid-cols-6 gap-3'}>
                            <div className={'border border-[#F9F871] w-fit rounded-xl flex flex-row p-1 space-x-1 items-center'}>
                                <Icon icon="mdi:tailwind" color="#f9f871" width="20" height="20" />
                                <p className={'text-xs font-light'}>TailwindCSS</p>
                            </div>
                            <div className={'border border-[#F9F871] w-fit rounded-xl flex flex-row p-1 space-x-1 items-center'}>
                                <Icon icon="mdi:tailwind" color="#f9f871" width="20" height="20" />
                                <p className={'text-xs font-light'}>TailwindCSS</p>
                            </div>
                            <div className={'border border-[#F9F871] w-fit rounded-xl flex flex-row p-1 space-x-1 items-center'}>
                                <Icon icon="mdi:tailwind" color="#f9f871" width="20" height="20" />
                                <p className={'text-xs font-light'}>TailwindCSS</p>
                            </div>
                            <div className={'border border-[#F9F871] w-fit rounded-xl flex flex-row p-1 space-x-1 items-center'}>
                                <Icon icon="mdi:tailwind" color="#f9f871" width="20" height="20" />
                                <p className={'text-xs font-light'}>TailwindCSS</p>
                            </div>
                            <div className={'border border-[#F9F871] w-fit rounded-xl flex flex-row p-1 space-x-1 items-center'}>
                                <Icon icon="mdi:tailwind" color="#f9f871" width="20" height="20" />
                                <p className={'text-xs font-light'}>TailwindCSS</p>
                            </div>
                            <div className={'border border-[#F9F871] w-fit rounded-xl flex flex-row p-1 space-x-1 items-center'}>
                                <Icon icon="mdi:tailwind" color="#f9f871" width="20" height="20" />
                                <p className={'text-xs font-light'}>TailwindCSS</p>
                            </div>
                            <div className={'border border-[#F9F871] w-fit rounded-xl flex flex-row p-1 space-x-1 items-center'}>
                                <Icon icon="mdi:tailwind" color="#f9f871" width="20" height="20" />
                                <p className={'text-xs font-light'}>TailwindCSS</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={'flex flex-col flex-shrink-0 w-8/12 border border-[#F9F871] p-4 rounded-2xl space-y-5'}>
                    <div className={'flex flex-row justify-between'}>
                        <h5 className={'text-[#F9F871] uppercase'}>My portfolio website</h5>
                        <div className={'flex flex-row items-center space-x-1'}>
                            <Icon icon="ph:figma-logo-thin" color="#f9f871" width="25" height="25"/>
                            <Icon icon="ph:github-logo-thin" color="#f9f871" width="25" height="25"/>
                        </div>
                    </div>
                    <p>
                        I started this project during my international internship search to have a website to
                        share with recruiters. I first made a mock-up on Figma of the website I wanted to
                        create.
                        Then, I chose the front-end technologies, especially react, because I already made
                        sites with this framework.
                        I wanted to make a backend for this project to show that I could make an API.
                        I hesitated to use a headless CMS but I finally used ExpressJS and MongoDB.
                    </p>
                    <div className={'flex flex-row justify-center'}>
                        <Image src={"/christian-wiediger-WkfDrhxDMC8-unsplash.jpg"}
                               width={100}
                               height={200}
                               alt={"Computer"}/>
                        <Image src={"/andras-vas-Bd7gNnWJBkU-unsplash.jpg"}
                               width={100}
                               height={200}
                               alt={"Computer"}/>
                        <Image src={"/christopher-gower-m_HRfLhgABo-unsplash.jpg"}
                               width={100}
                               height={200}
                               alt={"Computer"}/>
                    </div>
                    <div className={'space-y-2'}>
                        <h5 className={'text-[#F9F871] uppercase'}>Technologies</h5>
                        <div className={'grid grid-cols-3 2xl:grid-cols-6 gap-3'}>
                            <div className={'border border-[#F9F871] w-fit rounded-xl flex flex-row p-1 space-x-1 items-center'}>
                                <Icon icon="mdi:tailwind" color="#f9f871" width="20" height="20" />
                                <p className={'text-xs font-light'}>TailwindCSS</p>
                            </div>
                            <div className={'border border-[#F9F871] w-fit rounded-xl flex flex-row p-1 space-x-1 items-center'}>
                                <Icon icon="mdi:tailwind" color="#f9f871" width="20" height="20" />
                                <p className={'text-xs font-light'}>TailwindCSS</p>
                            </div>
                            <div className={'border border-[#F9F871] w-fit rounded-xl flex flex-row p-1 space-x-1 items-center'}>
                                <Icon icon="mdi:tailwind" color="#f9f871" width="20" height="20" />
                                <p className={'text-xs font-light'}>TailwindCSS</p>
                            </div>
                            <div className={'border border-[#F9F871] w-fit rounded-xl flex flex-row p-1 space-x-1 items-center'}>
                                <Icon icon="mdi:tailwind" color="#f9f871" width="20" height="20" />
                                <p className={'text-xs font-light'}>TailwindCSS</p>
                            </div>
                            <div className={'border border-[#F9F871] w-fit rounded-xl flex flex-row p-1 space-x-1 items-center'}>
                                <Icon icon="mdi:tailwind" color="#f9f871" width="20" height="20" />
                                <p className={'text-xs font-light'}>TailwindCSS</p>
                            </div>
                            <div className={'border border-[#F9F871] w-fit rounded-xl flex flex-row p-1 space-x-1 items-center'}>
                                <Icon icon="mdi:tailwind" color="#f9f871" width="20" height="20" />
                                <p className={'text-xs font-light'}>TailwindCSS</p>
                            </div>
                            <div className={'border border-[#F9F871] w-fit rounded-xl flex flex-row p-1 space-x-1 items-center'}>
                                <Icon icon="mdi:tailwind" color="#f9f871" width="20" height="20" />
                                <p className={'text-xs font-light'}>TailwindCSS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects