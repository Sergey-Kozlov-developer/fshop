import { cn } from "@/lib/utils";
import { Button } from "@/shared/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/shared/ui/sheet";
import type { ReactNode } from "react";
import { Link } from "react-router";

export interface IHamburgerMenuListNav {
    id: number;
    path: string;
    title: string;
    icon?: ReactNode;
}

export interface IHamburgerMenuProps {
    icon: ReactNode;
    listNav: IHamburgerMenuListNav[];
    triggerClassName?: string;
    contentClassName?: string;
    onItemClick?: () => void;
}

const HamburgerMenu = ({
    icon,
    listNav,
    triggerClassName,
    contentClassName,
    onItemClick,
}: IHamburgerMenuProps) => {
    const handleItemClick = () => {
        onItemClick?.();
    };
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className={cn("sm:hidden", triggerClassName)}
                    aria-label="Открыть меню"
                >
                    {icon}
                </Button>
            </SheetTrigger>
            <SheetContent
                side="right"
                className={cn("w-[300px] sm:w-[400px]", contentClassName)}
            >
                <nav className="flex flex-col space-y-2 mt-8">
                    {listNav.map((item) => (
                        <Link
                            key={item.id}
                            to={item.path}
                            onClick={handleItemClick}
                            className={cn(
                                "flex items-center space-x-3 py-3 px-4 rounded-lg",
                                "hover:bg-accent transition-colors",
                                "text-lg font-medium"
                            )}
                        >
                            {item.icon && (
                                <span className="text-muted-foreground w-5 h-5">
                                    {item.icon}
                                </span>
                            )}
                            <span>{item.title}</span>
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default HamburgerMenu;
