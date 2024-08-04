import { useRef } from "react";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import demoTherapist from '../../../../../public/therapist.png';
import { FaLocationDot } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

const options = {
    type: 'loop',
    perPage: 4,
    perMove: 1,
    pagination: false,
    arrows: false,
    gap: '20px',
    breakpoints: {
        1200: {
            perPage: 3,
            gap: '20px'
        },
        992: {
            perPage: 2,
            gap: '20px'
        },
        768: {
            perPage: 1,
            gap: '20px'
        },
    }
};

const Therapist = () => {
    const splideRef = useRef(null);

    const handleLeftClick = () => {
        if (splideRef.current) {
            splideRef.current.go('<');
        }
    };

    const handleRightClick = () => {
        if (splideRef.current) {
            splideRef.current.go('>');
        }
    };

    return (
        <div className="bg-primary rounded-[10px] p-5 w-full h-fit flex items-center justify-center gap-4">
            <div>
                <div onClick={handleLeftClick} className="w-10 h-10 rounded-full bg-[#D4E9FF] hover:bg-[#156BCA] text-[#156BCA] hover:text-[#fff] flex items-center justify-center cursor-pointer">
                    <MdOutlineKeyboardArrowLeft className="text-2xl" />
                </div>
            </div>
            <div className="w-[931px]">
                <Splide options={options}
                    className="w-full"
                    ref={splideRef}
                >
                    {therapists.map((therapist, index) => (
                        <SplideSlide
                            key={index}
                            className="w-[214px] min-h-fit border border-borderOne rounded-[10px] flex flex-col justify-between"
                        >
                            <div className="p-2.5">
                                <img src={demoTherapist} alt="Therapist" className="w-full h-[146px] object-cover rounded-[10px]" />
                                <div className="py-4 px-2">
                                    <h3 className="text-[14px] font-poppins text-lightBlackMain pb-2.5">{therapist.name}</h3>
                                    <div className="flex flex-col items-start gap-2.5">
                                        <div className="flex items-center justify-center gap-[5px]">
                                            <FaLocationDot className="text-lightBlack text-[14px]" />
                                            <p className="text-[13px] font-poppins text-lightBlack">{therapist.address}</p>
                                        </div>
                                        <div className="flex items-center justify-center gap-[5px]">
                                            <FaCar className="text-lightBlack text-[14px]" />
                                            <p className="text-[13px] font-poppins text-lightBlack">{therapist.service}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`w-full h-[45px] rounded-b-[10px] flex items-center justify-center underline text-[14px] font-poppins hover:bg-[#156BCA] hover:text-white bg-[#D4E9FF] text-lightBlackMain`}>
                                See Details
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
            <div>
                <div onClick={handleRightClick} className="w-10 h-10 rounded-full bg-[#D4E9FF] hover:bg-[#156BCA] flex items-center justify-center text-[#156BCA] hover:text-[#fff] cursor-pointer">
                    <MdOutlineKeyboardArrowRight className="text-2xl" />
                </div>
            </div>
        </div>
    );
};

export default Therapist;

const therapists = [
    { id: 1, name: "Dr. John Doe", address: "123 Elm Street, New York", service: "Mobile & In-Studio" },
    { id: 2, name: "Dr. Jane Smith", address: "456 Oak Street, Boston", service: "In-Studio Only" },
    { id: 3, name: "Dr. Emily Johnson", address: "789 Pine Street, Chicago", service: "Mobile Only" },
    { id: 4, name: "Dr. Michael Brown", address: "101 Maple Street", service: "Mobile & In-Studio" },
    { id: 5, name: "Dr. Sarah Davis", address: "202 Birch Street, Seattle", service: "In-Studio Only" }
];