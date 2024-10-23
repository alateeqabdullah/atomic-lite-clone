import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/atomic-lite-logo.svg";
import { FaSearch } from "react-icons/fa";

const navLinks = [
  { label: "Main Pages", href: "/", active: true },
  { label: "Landing Page", href: "/landing", active: false },
  { label: "Blog", href: "/blog", active: false },
  { label: "System", href: "/system", active: false },
  // add more links as needed.  For example:
];

export default function Navs() {
  return (
    <main className=" bg-white  w-full justify-center items-center text-[14.4px] ">
      <nav className=" flex justify-between items-center px-5 ">
        <Link href={"/"}>
          <Image src={Logo} alt="Logo" width={58} height={100} />
        </Link>
        <ol className=" flex  ">
          {navLinks.map((navLink) => (
            <li key={navLink.label} className="list-none mx-4 hover:text-gray-700  "  >
              <Link
                href={navLink.href}
                className={`{ ${
                  navLink.active === true ? "text-red-500" : ""
                }  } `}
              >
                {navLink.label}
              </Link>
            </li>
          ))}
        </ol>
        <button className=" border-x border-gray-300  text-xl py-[35px] px-8 font-bold hover:bg-red-400 hover:duration-300  hover:text-white ">
          <FaSearch className="  " />
        </button>
      </nav>
    </main>
  );
}
