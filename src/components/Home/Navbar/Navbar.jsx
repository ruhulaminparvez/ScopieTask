import { useContext } from "react"
import { AuthContext } from "../../../provider/AuthProvider"
import { IoNotificationsOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import demoProfile from '../../../../public/demo-profile.png';

export default function Navbar() {
    const { logOut, user } = useContext(AuthContext);
    console.log(user)

    const handleLogout = () => {
        logOut().
            then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
                console.log(error)
            });

    }
    return (
        <nav className="h-[88px] bg-primary flex items-center justify-between px-6">
            <div className="flex items-center justify-center gap-3">
                <img src={demoProfile} alt="profile" className="w-10 h-10 object-cover rounded-full" />
                <div>
                    <div className="flex items-center justify-between gap-[45px]">
                        <h4 className="text-[15px] font-poppins">{user?.displayName ? user?.displayName : "No Name Found"}</h4>
                        <IoIosArrowDown className="text-lg" />
                    </div>
                    <h5 className="text-[14px] text-lightBlack font-poppins">{user?.email}</h5>
                </div>
            </div>
            <div className="flex items-center justify-center gap-5">
                <div className="w-10 h-10 border-[1.18px] border-borderOne rounded-full flex items-center justify-center cursor-pointer">
                    <IoNotificationsOutline className="text-lightBlack text-[21.18px]" />
                </div>
                <div className="w-[1px] h-10 bg-borderOne"></div>
                <div
                    className="flex items-center justify-center gap-2.5 cursor-pointer"
                    onClick={handleLogout}
                >
                    <h4 className="text-[15px] text-[#F15E4A]">Log Out</h4>
                    <div className="w-10 h-10 rounded-full bg-[#FFECEA] flex items-center justify-center">
                        <LuLogOut className="text-[#F15E4A] text-[20.18px]"></LuLogOut>
                    </div>
                </div>
            </div>
        </nav>
    )
}