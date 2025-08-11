/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import { Button } from "#/base";
import { ThemeSwitch } from "#/ThemeSwitch";

export function Header({ logo, links, buttons, className, ...rest }) {
  const [open, setOpen] = useState(false);
  
  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed w-full bg-[#29375C] dark:bg-base-950/50 backdrop-blur-xl z-50 h-20">
      <nav
        className={cn(
          "relative h-20 container px-0 mx-auto border-b border-base flex flex-wrap justify-start items-center gap-4 lg:gap-8",
          className
        )}
        {...rest}
      >
        <a href={logo.href}>
          <img
            src={logo.src}
            alt={logo.alt}
            className="h-20 w-auto"
          />
        </a>
        <div
          className={cn(
            "hidden md:block md:w-auto",
            open &&
              "block absolute top-14 m-2 right-0 w-2/3 border border-base dark:border-base-900 rounded-lg overflow-hidden bg-base-50 dark:bg-base-900 shadow-xl"
          )}
        >
          <ul className="font-medium flex flex-col gap-2 p-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            {links.map((link, index) => (
              <li key={index} className="relative">
                {link.hasDropdown ? (
                  <Menu as="div" className="relative inline-block text-left">
                    <Menu.Button className="flex items-center gap-1 text-sm font-normal text-white hover:text-white/80 cursor-pointer transition-colors duration-200 group">
                      {link.label}
                      <Icon 
                        icon={link.icon} 
                        className="w-4 h-4 transition-transform duration-200 group-data-[headlessui-state=open]:rotate-180" 
                      />
                    </Menu.Button>
                    <Transition
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95 -translate-y-2"
                      enterTo="transform opacity-100 scale-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="transform opacity-100 scale-100 translate-y-0"
                      leaveTo="transform opacity-0 scale-95 -translate-y-2"
                    >
                      <Menu.Items className="absolute left-0 mt-3 w-56 origin-top-left rounded-md bg-white dark:bg-gray-800 shadow-2xl ring-1 ring-black/5 dark:ring-white/10 focus:outline-none z-50 overflow-hidden">
                        <div className="py-2">
                          {link.dropdownItems.map((item, itemIndex) => (
                            <Menu.Item key={itemIndex}>
                              {({ active }) => (
                                <button
                                  onClick={() => scrollToSection(item.href)}
                                  className={cn(
                                    active ? 'bg-[#29375C]/10 text-[#29375C] dark:bg-[#29375C]/20 dark:text-[#29375C]' : 'text-gray-700 dark:text-gray-200',
                                    'block w-full text-left px-4 py-3 text-sm font-medium hover:bg-[#29375C]/10 dark:hover:bg-[#29375C]/20 hover:text-[#29375C] dark:hover:text-[#29375C] transition-all duration-200'
                                  )}
                                >
                                  {item.label}
                                </button>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  <a
                    href={link.href}
                    className={
                      open
                        ? "text-sm font-normal text-white hover:bg-white/10 py-3 px-4 rounded-md"
                        : "text-sm font-normal text-white hover:text-white/80"
                    }
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
            {/* Mobile app download buttons */}
            <div className="md:hidden flex flex-col gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
              <Button
                href="#"
                label="Tải phiên bản iOS"
                color="white"
                className="bg-white text-[#29375C] hover:bg-gray-50 transition-all duration-300 border border-gray-200 text-sm py-2"
              />
              <Button
                href="#"
                label="Tải phiên bản Android"
                color="white"
                className="bg-white text-[#29375C] hover:bg-gray-50 transition-all duration-300 border border-gray-200 text-sm py-2"
              />
            </div>
          </ul>
        </div>
        <div className="hidden lg:flex gap-2 ml-auto">
          <ThemeSwitch />
          <Button
            href="#"
            label="Tải phiên bản iOS"
            color="white"
            className="bg-white text-[#29375C] hover:bg-gray-50 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out border border-gray-200 text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2"
          />
          <Button
            href="#"
            label="Tải phiên bản Android"
            color="white"
            className="bg-white text-[#29375C] hover:bg-gray-50 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out border border-gray-200 text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2"
          />
        </div>
        <Button
          icon={open ? "tabler:x" : "tabler:menu-2"}
          color="transparent"
          className="p-2 md:hidden text-white"
          onClick={() => setOpen(!open)}
        />
      </nav>
    </header>
  );
}
