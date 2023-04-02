import React from "react"
import Image from "next/image";

const Experiences = () => {
    return (
        <div className='pt-20'>
            <h4 className={'uppercase text-4xl text-[#F9F871] mb-10'}>Experiences</h4>
            <div className={'w-full flex flex-row space-x-20 justify-center'}>
                <div className={'flex flex-col space-y-5'}>
                    <div className={'flex flex-row space-x-5 bg-white bg-opacity-20 h-20 w-80 pl-5 items-center rounded-lg'}>
                        <div className={"w-50 h-50"}>
                            <Image src={"/MEDIAMETRIE.png"} alt={"Médiamétrie Logo"} width={50} height={50} quality={100}/>
                        </div>
                        <div>
                            <h5>Médiamétrie</h5>
                            <h6 className={'font-extralight'}>System engineer</h6>
                        </div>
                    </div>
                    <div className={'flex flex-row space-x-5 h-20 w-80 pl-5 items-center rounded-lg'}>
                        <div className={"w-50 h-50"}>
                            <Image src={"/MEDIAMETRIE.png"} alt={"Médiamétrie Logo"} width={50} height={50} quality={100}/>
                        </div>
                        <div>
                            <h5>Médiamétrie</h5>
                            <h6 className={'font-extralight'}>System engineer</h6>
                        </div>
                    </div>
                    <div className={'flex flex-row space-x-5 h-20 w-80 pl-5 items-center rounded-lg'}>
                        <div className={"w-50 h-50"}>
                            <Image src={"/MEDIAMETRIE.png"} alt={"Médiamétrie Logo"} width={50} height={50} quality={100}/>
                        </div>
                        <div>
                            <h5>Médiamétrie</h5>
                            <h6 className={'font-extralight'}>System engineer</h6>
                        </div>
                    </div>
                </div>
                <div className={'flex flex-col space-y-4'}>
                    <p className={'font-extralight text-[#F9F871]'}>2021 - Present</p>
                    <ul>
                        <li>Perform data backups and disaster recovery operations.</li>
                        <li>Operate master consoles to monitor the performance of computer systems and networks, and to coordinate computer network access and use.</li>
                        <li>Administer systems (Unix, Windows, VMware) and technical infrastructure devices (virtualisation, storage, backup, etc.).</li>
                    </ul>
                    <div className={'flex flex-row'}>
                        <Image src={"/Avaya_Logo.svg.png"} alt={"Logo Avaya"} width={100} height={50}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experiences