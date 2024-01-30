import Link from "next/link";
import React from "react";
import { LuNetwork } from "react-icons/lu";
import { BiCctv } from "react-icons/bi";
import { RiFireLine } from "react-icons/ri";
import { MdOutlineElectricalServices } from "react-icons/md";
import NavMenu from "./NavMenu";
import { CctvIcon } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-gray-100 z-10">
      <div className="navbar  mx-auto max-w-[1280px]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </Link>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <details>
                  <summary>Services</summary>
                  <ul className="p-2">
                    <li>
                      <NavMenu
                        title={"General Neworking"}
                        url={"/general-networking"}
                        icon={<LuNetwork />}
                      />
                    </li>
                    <li>
                      <NavMenu
                        title={"CCTV Installations"}
                        url={"/cctv-installations"}
                        icon={<BiCctv />}
                      />
                    </li>
                    <li>
                      <NavMenu
                        title={"Fire Alarm System"}
                        url={"/fire-alarm-system"}
                        icon={<RiFireLine />}
                      />
                    </li>
                    <li>
                      <NavMenu
                        title={"General Electricals"}
                        url={"/general-electrical-wiring"}
                        icon={<MdOutlineElectricalServices />}
                      />
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="">
            <Image
              src={"/logo1.png"}
              alt="logo"
              quality={100}
              width={190}
              height={50}
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <details>
                <summary>Services</summary>
                <ul className="p-2">
                  <li>
                    <NavMenu
                      title={"General Neworking"}
                      url={"/general-networking"}
                      icon={<LuNetwork />}
                    />
                  </li>
                  <li>
                    <NavMenu
                      title={"CCTV Installations"}
                      url={"/cctv-installations"}
                      icon={<BiCctv />}
                    />
                  </li>
                  <li>
                    <NavMenu
                      title={"Fire Alarm System"}
                      url={"/fire-alarm-system"}
                      icon={<RiFireLine />}
                    />
                  </li>
                  <li>
                    <NavMenu
                      title={"General Electricals"}
                      url={"/general-electrical-wiring"}
                      icon={<MdOutlineElectricalServices />}
                    />
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="/contact" className="btn">
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
