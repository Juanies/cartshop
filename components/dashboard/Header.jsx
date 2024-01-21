
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem
  } from "@nextui-org/react";
  import Button from "@nextui-org/react";
  import Link from "next/link";

export default function Header (){


    const navigationItems = [
        { name: "Inicio", url: 0 },
        { name: "Tienda", url: 1 },
        { name: "Sobre nosotros", url: 2 },
    ]

    const NavbarItemList = navigationItems.map((item) => (
        <NavbarItem key={item.url}>
          <Link color="foreground" href="#">
            {item.name}
          </Link>
        </NavbarItem>
      ));

    return(
    <Navbar className=" h-24 bg-slate-200" position="static">
        <NavbarBrand>
            <p className="font-bold text-inherit">Shop</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
            {NavbarItemList}
        </NavbarContent>
        <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
                <Link href="#">Cart</Link>
            </NavbarItem>
        </NavbarContent>
    </Navbar>
    )
}
