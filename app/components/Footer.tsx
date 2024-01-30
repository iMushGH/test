import Link from "next/link";
import React from "react";
import Social from "./Social";
import { FaInstagram, FaYoutube, FaSlackHash } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

import NavMenu from "./NavMenu";
import { TiTick } from "react-icons/ti";
import { LuNetwork } from "react-icons/lu";
import { BiCctv } from "react-icons/bi";
import { RiFireLine } from "react-icons/ri";
import { MdOutlineElectricalServices } from "react-icons/md";

function Footer() {
  return (
    <div className="bg-base-200">
      <footer className="footer p-10 max-w-[1280px] mx-auto text-base-content">
        <nav>
          <h6 className="footer-title">Services</h6>
          <NavMenu
            title={"General Networking"}
            url={"/general-networking"}
            icon={<LuNetwork />}
          />
          <NavMenu
            title={"CCTV Installations"}
            url={"/cctv-installations"}
            icon={<BiCctv />}
          />
          <NavMenu
            title={"Fire Alarm System"}
            url={"/fire-alarm-system"}
            icon={<RiFireLine />}
          />
          <NavMenu
            title={"General Electricals"}
            url={"/general-electrical-wiring"}
            icon={<MdOutlineElectricalServices />}
          />
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <NavMenu title={"About"} url={"/about"} icon={<TiTick />} />
          <NavMenu title={"Contact"} url={"/contact"} icon={<TiTick />} />
          <NavMenu title={"Portfolios"} url={"/portfolios"} icon={<TiTick />} />
          <NavMenu title={"Services"} url={"/services"} icon={<TiTick />} />
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <NavMenu title={"Terms of use"} url={"/terms"} icon={<TiTick />} />
          <NavMenu title={"About Us"} url={"/about"} icon={<TiTick />} />
          <NavMenu title={"Get a quote"} url={"/contact"} icon={<TiTick />} />
          <NavMenu title={"Policy"} url={"/policy"} icon={<TiTick />} />
        </nav>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300 max-w-[1280px] mx-auto">
        <aside className="items-center grid-flow-col">
          <FaSlackHash className="text-4xl" />
          <b>
            iMush DataCenter <br />
            Providing reliable tech since 1992
          </b>
        </aside>
        <nav className="md:place-self-center md:justify-self-end flex text-2xl gap-6">
          <Social url={"www.facebook.com"} icon={<BsFacebook />} />
          <Social url={"www.youtube.com"} icon={<FaYoutube />} />
          <Social url={"www.instagram.com"} icon={<FaInstagram />} />
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
