import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

import Link from './Link';
import Logo from "@/assets/Logo.png";
import { useState } from "react";
import { SelectedPage } from "./shared/types";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
  const flexBetween = 'flex items-center justify-between';

  return (
    <nav>
      <div
        className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div
          className={`${flexBetween} mx-auto w-5/6`}>
          <div
            className={`${flexBetween} w-full gap-16`}>
            {/* left side */}
            <img src={Logo} alt="logo" />

            {/* right side */}
            <div
              className={`${flexBetween} w-full`}>
              <div
                className={`${flexBetween} gap-8 text-sm`}>
                <Link
                  page='Home'
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page='About'
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page='Benefits'
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                >
                <Link
                    page='Art Classes'
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                <Link
                    page='Contact us'
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
              <div
                className={`${flexBetween} gap-8`}>
                <p>Sing In</p>
                <button>Become a Member</button>
              </div>
            </div>
          </div>
        </div>
        </div>
    </nav>
  )
}

export default Navbar