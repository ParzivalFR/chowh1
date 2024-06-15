"use client";

import Banner from "@/app/images/banner_chow.webp";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full m-auto">
      <Image
        src={Banner}
        alt="ChowH1"
        width={1931}
        height={343}
        className="w-full"
      />
      <Navigation />
    </header>
  );
}

function Navigation() {
  return (
    <Navbar className="bg-background border-b border-white/20">
      <NavbarContent
        className="hidden w-full sm:flex gap-6 md:gap-10 xl:gap-16"
        justify="center"
      >
        <NavbarItem isActive>
          <Link href="/" aria-current="page" className="text-white">
            Accueil
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" href="/planning">
            Planning
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent text-white data-[hover=true]:bg-transparent"
                endContent={<ChevronDownIcon />}
                radius="sm"
                variant="light"
              >
                Configs
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Configs"
            className="w-[250px] "
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem textValue="PC Gaming">
              <Link href="#gaming">PC Gaming</Link>
            </DropdownItem>
            <DropdownItem>
              <Link href="#streaming">PC Streaming</Link>
            </DropdownItem>
            <DropdownItem>
              <Link href="#peripherals">Périphériques</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent text-white data-[hover=true]:bg-transparent"
                endContent={<ChevronDownIcon />}
                radius="sm"
                variant="light"
              >
                Call Of Duty
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Configs"
            className="w-[250px] "
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem>
              <Link href="/classes">Classes MWIII</Link>
            </DropdownItem>
            <DropdownItem>
              <Link href="#streaming">Bindings</Link>
            </DropdownItem>
            <DropdownItem>
              <Link href="#paramsWarzone">Paramètres Warzone</Link>
            </DropdownItem>
            <DropdownItem>
              <Link href="#paramsMW2">Paramètres MWII</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent text-white data-[hover=true]:bg-transparent"
                endContent={<ChevronDownIcon />}
                radius="sm"
                variant="light"
              >
                Config PC Gaming
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Configs"
            className="w-[250px] "
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem>
              <Link href="#classes">Config à 1050€</Link>
            </DropdownItem>
            <DropdownItem>
              <Link href="#streaming">Config Warzone 1080p/1440p - 1450€</Link>
            </DropdownItem>
            <DropdownItem>
              <Link href="#paramsWarzone">Config Qualité/Prix 1440p/4K</Link>
            </DropdownItem>
            <DropdownItem>
              <Link href="#paramsMW2">Config WTF 1440p/4K</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
