import Navbar from './Navbar/Navbar';
import LeftSide from './Leftside/Leftside';
import MiddleSide from './MiddleSide/MiddleSide';

const Home = () => {
    return (
        <div className='w-full h-fit'>
            <div className='w-full flex'>
                <div className='w-2/12 h-fit border-r border-borderOne'>
                    <LeftSide></LeftSide>
                </div>
                <div className='w-10/12'>
                    <Navbar></Navbar>
                    <MiddleSide></MiddleSide>
                </div>
            </div>
        </div>
    );
};

export default Home;