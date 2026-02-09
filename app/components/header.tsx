import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./button";

const Header = () => {
  const navigation = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Our Work", href: "#works" },
  ];

  return (
    <header>
      <div className="container mx-auto">
        <div className="flex py-5 justify-between items-center">
          <div className="flex gap-8 items-center">
            <Link href="/">
              <Image
                src="/images/logos/logo-dark.svg"
                alt="Logo"
                width={128}
                height={32}
                className="h-8 w-auto cursor-pointer"
              />
            </Link>
          </div>

          <div className="flex gap-6 items-center">
            <nav className="md:flex hidden gap-4 items-center">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-body-sm font-medium text-neutral-700 hover:text-primary-600 px-4"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <Button label="CONTACT US" link="#" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
