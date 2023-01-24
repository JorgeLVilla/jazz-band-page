import { useState } from "react";
import { NAV__LINKS } from "@/assets/data";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs"


const Navbar = ({}) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed bg-transparent w-full top-0 right-0 left-0 z-10">
      <div className="text-white flex justify-evenly items-center">
        {/* Left side */}
        <div >
          <h2 className="font-['Cinzel'] md:text-2xl flex flex-col"><span>New</span><span>Vision</span><span>Back</span></h2>
        </div>
        {/* Middle part */}
        <div>
          <ul className="flex">
            {NAV__LINKS.map((item) => (
              <li className="m-5 md: text-xl">
                <Link href={item.path}>{item.display}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Social media */}
        <div className="flex gap-4">
             <BsFacebook className="text-xl"/>       
             <BsInstagram className="text-xl"/>       
             <BsYoutube className="text-xl"/>       
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
