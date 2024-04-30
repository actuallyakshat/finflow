"use client";
import React, { useState } from "react";
import { MobileLogo, Logo } from "../Logo";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../ui/button";
import { ThemeSwitcherButton } from "../ThemeSwitcherButton";
import { UserButton } from "@clerk/nextjs";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
    </>
  );
}

const items = [
  {
    label: "Dashboard",
    link: "/",
  },
  {
    label: "Transactions",
    link: "/transactions",
  },
  {
    label: "Manage",
    link: "/manage",
  },
];

function DesktopNavbar() {
  return (
    <div className="bg-background hidden border-separate border-b md:block">
      <nav className="container flex items-center justify-between px-8">
        <div className="flex h-20 items-center gap-x-4">
          <Logo />
          <div className="flex h-full">
            {items.map((item) => (
              <NavbarItem
                key={item.label}
                {...item}
                link={item.link}
                label={item.label}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ThemeSwitcherButton />
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </nav>
    </div>
  );
}

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-background block border-separate md:hidden">
      <nav className="container flex h-20 items-center justify-between px-8">
        <div className="flex gap-3">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant={"ghost"} size={"icon"}>
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full" side={"left"}>
              <Logo />
              <div className="flex flex-col gap-1 pt-4">
                {items.map((item) => (
                  <NavbarItem
                    clickCallback={() => setIsOpen(false)}
                    key={item.label}
                    {...item}
                    link={item.link}
                    label={item.label}
                  />
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <div className="flex items-center gap-4">
            <MobileLogo />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ThemeSwitcherButton />
          <UserButton />
        </div>
      </nav>
    </div>
  );
}

function NavbarItem({
  link,
  label,
  clickCallback,
}: {
  label: string;
  link: string;
  clickCallback?: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname == link;

  return (
    <div className="relative flex items-center">
      <Link
        onClick={() => clickCallback && clickCallback()}
        href={link}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "text-muted-foreground hover:text-foreground w-full justify-start text-lg",
          isActive && "text-foreground",
        )}
      >
        {label}
      </Link>
      {isActive && (
        <div className="bg-foreground inset-x-0 -bottom-[2px] mx-auto hidden h-[2px] w-[90%] md:absolute"></div>
      )}
    </div>
  );
}
