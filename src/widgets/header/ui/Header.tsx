import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/shared/ui/navigation-menu";
import { Link } from "react-router";
import { cn } from "@/lib/utils";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/shared/ui/input-group";
import { HeartIcon, SearchIcon, ShoppingCart, UserIcon } from "lucide-react";
import { Button } from "@/shared/ui/button";
import logo from "@/shared/assets/image/logo.png";

const Header = () => {
    const navs = [
        { id: 1, path: "/", title: "Shop" },
        { id: 2, path: "/men", title: "Men" },
        { id: 3, path: "/women", title: "Women" },
        { id: 4, path: "/combos", title: "Combos" },
        { id: 5, path: "/joggers", title: "Joggers" },
    ];
    const btns = [
        { id: 1, icon: <HeartIcon /> },
        { id: 2, icon: <UserIcon /> },
        { id: 3, icon: <ShoppingCart /> },
    ];

    return (
        <header className="sticky top-0 w-full z-50 border-b bg-background/95 backdrop-blur ">
            <NavigationMenu
                className={cn(
                    "relative flex max-w-max items-center justify-between content-center gap-40 h-16",
                    "mx-auto"
                )}
            >
                <img src={logo} alt="Logo" className="h-8 w-auto" />
                <NavigationMenuList>
                    {navs.map((nav) => (
                        <NavigationMenuItem key={nav.id}>
                            <NavigationMenuLink asChild>
                                <Link to={nav.path}>{nav.title}</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
                <InputGroup>
                    <InputGroupInput placeholder="Search..." />
                    <InputGroupAddon>
                        <SearchIcon />
                    </InputGroupAddon>
                </InputGroup>
                <div className="flex justify-between items-center gap-3">
                    {btns.map((btn) => (
                        <Button
                            key={btn.id}
                            variant="secondary"
                            className={cn("cursor-pointer")}
                        >
                            {btn.icon}
                        </Button>
                    ))}
                </div>
            </NavigationMenu>
        </header>
    );
};

export default Header;
