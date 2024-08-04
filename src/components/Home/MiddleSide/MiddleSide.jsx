import Cities from './Cities/Cities';
import InfoSection from './InfoSection/InfoSection';
import Testimonials from './Testimonials/Testimonials';
import Therapist from './Therapist/Therapist';

export default function MiddleSide() {
    return (
        <div className="w-full h-full bg-secondary p-5 flex flex-col gap-6">
            <InfoSection></InfoSection>
            <div className='flex flex-col gap-2.5'>
                <h2 className='text-[18px] font-poppins text-lightBlackMain'>Featured Therapist</h2>
                <Therapist></Therapist>
            </div>
            <div className='w-full flex gap-2.5'>
                <div className='w-1/2 flex flex-col gap-2.5'>
                    <h2 className='text-[18px] font-poppins text-lightBlackMain'>Featured Testimonial</h2>
                    <Testimonials></Testimonials>
                </div>
                <div className='w-1/2 flex flex-col gap-2.5'>
                    <h2 className='text-[18px] font-poppins text-lightBlackMain'>Popular Cities</h2>
                    <Cities></Cities>
                </div>
            </div>
        </div>
    )
}