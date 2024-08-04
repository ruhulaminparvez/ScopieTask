import demoTestimonials from '../../../../../public/testimonial.png';
import { FaLocationDot } from "react-icons/fa6";

const Testimonials = () => {
    return (
        <div className="bg-primary rounded-[10px] p-5 w-full h-fit">
            <div className='flex flex-col gap-4'>
                <div className="w-full min-h-[160px] rounded-[10px] p-2.5 border border-borderOne flex gap-5">
                    <img src={demoTestimonials} alt="testimonial" className='w-[130px] h-[140px] rounded-[8px]' />
                    <div className='flex flex-col gap-2.5 py-4'>
                        <div className='flex gap-[5px]'>
                            <FaLocationDot className='text-lightBlack text-[14px]' />
                            <p className='text-lightBlack text-[14px] font-poppins'>123 Elm Street, New York</p>
                        </div>
                        <p className='text-lightBlackMain text-[14px] font-poppins'>Healing Bodywork <span className='text-btnColor'>by Cort</span></p>
                        <p className='text-lightBlack text-[13px] font-poppins max-w-[317px]'>Cort’s healing bodywork massage was absolutely transformative. Their intuitive touch and deep understanding of...<span className='text-btnColor underline'>Read More</span></p>
                    </div>
                </div>
                <div className="w-full min-h-[160px] rounded-[10px] p-2.5 border border-borderOne flex gap-5">
                    <img src={demoTestimonials} alt="testimonial" className='w-[130px] h-[140px] rounded-[8px]' />
                    <div className='flex flex-col gap-2.5 py-4'>
                        <div className='flex gap-[5px]'>
                            <FaLocationDot className='text-lightBlack text-[14px]' />
                            <p className='text-lightBlack text-[14px] font-poppins'>123 Elm Street, New York</p>
                        </div>
                        <p className='text-lightBlackMain text-[14px] font-poppins'>Healing Bodywork <span className='text-btnColor'>by Cort</span></p>
                        <p className='text-lightBlack text-[13px] font-poppins max-w-[317px]'>Cort’s healing bodywork massage was absolutely transformative. Their intuitive touch and deep understanding of...<span className='text-btnColor underline'>Read More</span></p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center gap-2 pt-5'>
                <div className='w-[9px] h-[9px] rounded-full bg-btnColor cursor-pointer'></div>
                <div className='w-[9px] h-[9px] rounded-full bg-lightBlack cursor-pointer'></div>
                <div className='w-[9px] h-[9px] rounded-full bg-lightBlack cursor-pointer'></div>
            </div>
        </div>
    );
};

export default Testimonials;

