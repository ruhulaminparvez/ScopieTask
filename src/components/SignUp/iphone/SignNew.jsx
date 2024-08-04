import background from '../../../assets/background.svg'

export default function SignNew() {
    return (
        <>
            <div className=''>
                <h5 className='absolute mt-12 ml-40 text-5xl  text-[#4285F3] font-poor-richard font-normal'>LOGO</h5>
                <h2 className='absolute mt-32 ml-20 text-[24px] text-[#1A2531] font-poppins w-[335px] h-[42px] font-semibold'>Sign In To Your Account</h2>
                <p className='absolute mt-52 ml-8 w-[371px] h-[71px] text-xl text-[#D1D1D1]'>Welcome Back! By click the sign up button, you're agree to
                    Zenitood Terms and Service and acknlowledge the <span className='text-[#156BCA] underline'>Privacy and Policy</span></p>
            </div>
            <div className='w-[341px] h-[143px] bg-[#1F2833] absolute mt-[450px] ml-10 rounded-lg'>
                <div className='text-center mt-10'>
                <h4 className='font-poppins font-semibold text-2xl text-[#156BCA]'>Create Account</h4>
                <h5 className='font-poppins font-medium text-2xl text-[#FFFFFF]'>Fill in Your information</h5>
                </div>     
            </div>
            <div className=''>
                <img src={background}></img>
            </div>

        </>
    )
}