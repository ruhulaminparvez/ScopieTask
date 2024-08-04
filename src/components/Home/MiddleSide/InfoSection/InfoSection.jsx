import vector from './../../../../assets/Vector.svg';
import group from './../../../../assets/Group.svg';

export default function InfoSection() {
    return (
        <div className='bg-primary rounded-[10px] p-5 w-full h-fit flex'>
            <div className='w-1/2 h-full flex flex-col justify-between'>
                <div className='flex flex-col gap-5'>
                    <h2 className='text-[20px] font-poppins'>{"I'm Looking for Massage Therapist Near..."}</h2>
                    <p className='text-[15px] font-poppins text-lightBlack'>In using this site, I agree to be bound by the <span className='text-btnColor'>Terms of Service</span> <br /> and <span className='text-btnColor'>Privacy Policy</span></p>
                </div>
                <div className='w-[470px] h-[50px] bg-secondary rounded-[10px] flex items-center p-2'>
                    <input type='text' placeholder='ZIP code or city name' className='w-full h-full bg-transparent text-lightBlack pl-3 focus:outline-none focus:border-none' />
                    <button className='w-[83px] h-[40px] bg-btnColor rounded-[10px] text-white text-[14px] font-poppins'>Go</button>
                </div>
            </div>
            <div className='w-1/2 h-full flex justify-end relative'>
                <img src={vector} alt='vector' className='absolute top-0 left-0' />
                <div className='w-[276.77px] z-10'>
                    <img src={group} alt='group' />
                </div>
            </div>
        </div>
    )
}