import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/shared/ui/shadcn/navigation-menu";
import { Link } from "react-router";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/shared/ui/shadcn/input-group";
import { HeartIcon, SearchIcon, ShoppingCart, UserIcon } from "lucide-react";
import { Button } from "@/shared/ui/shadcn/button";
import logo from "@/shared/assets/image/logo.png";
import HamburgerMenu from "@/shared/ui/humburger/hamburger";
import { MenuIcon } from "lucide-react";

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
        <header className="sticky top-0 w-full z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Логотип */}
                    <Link to="/" className="flex items-center">
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-8 w-auto"
                            width={32}
                            height={32}
                        />
                    </Link>

                    {/* Навигация для десктопа */}
                    <NavigationMenu className="hidden md:flex">
                        <NavigationMenuList>
                            {navs.map((nav) => (
                                <NavigationMenuItem key={nav.id}>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            to={nav.path}
                                            className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary"
                                        >
                                            {nav.title}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Поиск и действия */}
                    <div className="flex items-center gap-4">
                        {/* Поле поиска */}
                        <div className="hidden sm:flex">
                            <InputGroup>
                                <InputGroupInput
                                    placeholder="Search..."
                                    className="w-50 lg:w-75"
                                />
                                <InputGroupAddon>
                                    <SearchIcon className="w-4 h-4" />
                                </InputGroupAddon>
                            </InputGroup>
                        </div>

                        {/* Кнопки действий */}
                        <div className="flex items-center gap-2">
                            {btns.map((btn) => (
                                <Button
                                    key={btn.id}
                                    variant="ghost"
                                    size="icon"
                                    className="hidden sm:inline-flex"
                                >
                                    {btn.icon}
                                </Button>
                            ))}
                        </div>

                        {/* Гамбургер меню для мобильных */}
                        <div className="flex items-center gap-2 sm:hidden">
                            <HamburgerMenu icon={<MenuIcon />} listNav={navs} />
                        </div>
                    </div>
                </div>

                {/* Мобильный поиск */}
                <div className="sm:hidden pb-3 pt-1">
                    <InputGroup>
                        <InputGroupInput placeholder="Search products..." />
                        <InputGroupAddon>
                            <SearchIcon className="w-4 h-4" />
                        </InputGroupAddon>
                    </InputGroup>
                </div>
            </div>
        </header>
    );
};

export default Header;
