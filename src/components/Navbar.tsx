import { useState } from "react";
import { NAV__LINKS } from "@/assets/data";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs"


const Navbar = ({}) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed bg-black w-full top-0 right-0 left-0 z-10">
      <div className="text-white flex justify-evenly items-center">
        {/* Left side */}
        <div >
          <h2 className="font-[Cinzel] md:text-3xl">New <br/> Vision <br/> Band</h2>
        </div>
        {/* Middle part */}
        <div>
          <ul className="flex">
            {NAV__LINKS.map((item) => (
              <li className="m-5 md: text-2xl">
                <Link href={item.path}>{item.display}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Social media */}
        <div className="flex gap-4">
             <BsFacebook />       
             <BsInstagram />       
             <BsYoutube />       
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
