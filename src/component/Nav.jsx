import React from "react";
import { headerLogo } from "../assets/images";
import {hamburger} from "../assets/icons"
import { navLinks } from "../constance/index.js";

function Nav() {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="#">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
          {navLinks.map((element) => (
            <li key={element.label}>
              <a
                href={element.href}
                className="font-monts errat leading-normal text-lg text-slate-gray"
              >
                {element.label}
              </a>
            </li>
          ))}
        </ul>

          <div className="hidden max-lg:block">
            <img src={hamburger} alt="hambager" width={25} height={25} />
          </div>

      </nav>
    </header>
  );
}

export default Nav;
