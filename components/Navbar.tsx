import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <>
    <div className="block ">

      <header className="w-full  absolute z-10  block">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
            <Link href='/' className="flex justify-center items-center">
            <Image
                src='/logo.png'
                alt='logo'
                width={88}
                height={18}
                className='object-contain'
                />
            </Link>

            <CustomButton
                title='Sign in'
                btnType='button'
                containerStyles='text-primary-blue rounded-full bg-white min-w-[100px]'
                />
        </nav>
      </header>
    </div>
    </>
  );
};

export default Navbar;
