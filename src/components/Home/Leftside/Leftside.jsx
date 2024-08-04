import { useState } from 'react';
import { SlGrid } from "react-icons/sl";
import { FiUsers } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { CgFileDocument } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa6";
import { GrStatusInfo } from "react-icons/gr";
import { MdOutlineSettings } from "react-icons/md";

export default function LeftSide() {
    const [activeNav, setActiveNav] = useState(navItemData[0]?.text)
    const activeStyle = {
        active: 'bg-tertiary border-l-[3px] border-[#102C4A] translate-transform ease-in-out duration-300',
        inactive: 'bg-transparent border-none translate-transform ease-in-out duration-300'
    }
    const textColorStyle = {
        active: 'text-lightBlackMain',
        inactive: 'text-lightBlack'
    }
    return (
        <div className="w-full h-full">
            <div className='w-full h-[150px] flex items-center justify-center'>
                <h2 className='text-[40px] text-logoColor font-poorRichard uppercase'>Logo</h2>
            </div>
            <div className='flex flex-col'>
                {navItemData?.map((item, index) => (
                    <>
                        <div
                            key={index}
                            onClick={() => setActiveNav(item?.text)}
                            className={`${activeNav === item?.text ? activeStyle?.active : activeStyle?.inactive} h-[46px] pl-[25px] cursor-pointer flex items-center`}
                        >
                            <div className='flex items-center gap-[14px]'>
                                <div className={`text-[18px] ${activeNav === item?.text ? textColorStyle.active : textColorStyle.inactive}`}>
                                    {item?.icon}
                                </div>
                                <h5 className={`font-poppins ${activeNav === item?.text ? textColorStyle.active : textColorStyle.inactive}`}>{item?.text}</h5>
                            </div>
                        </div>
                        {item?.separator &&
                            <div className='w-full h-full py-2 px-5'>
                                <div className='h-[1px] w-full bg-borderOne ƒ'></div>
                            </div>}
                    </>
                ))}
            </div>
        </div>
    )
}

const navItemData = [
    {
        id: 1,
        icon: <SlGrid />,
        text: 'Home',
        separator: false
    },
    {
        id: 2,
        icon: <FiUsers />,
        text: 'New Listing',
        separator: false
    },
    {
        id: 3,
        icon: <FiSearch />,
        text: 'Search',
        separator: false
    },
    {
        id: 4,
        icon: <CgFileDocument />,
        text: 'About',
        separator: false
    },
    {
        id: 5,
        icon: <FaRegHeart />,
        text: 'Favorites',
        separator: true
    },
    {
        id: 6,
        icon: <GrStatusInfo />,
        text: 'Help Center',
        separator: false
    },
    {
        id: 7,
        icon: <MdOutlineSettings />,
        text: 'Settings',
        separator: false
    }
]