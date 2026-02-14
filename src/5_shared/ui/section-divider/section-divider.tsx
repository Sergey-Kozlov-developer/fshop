import { cn } from "@/5_shared/lib/utils";
import type { ReactNode } from "react";

export interface ISectionDivider {
    title: string;
    className?: ReactNode;
}

const SectionDivider = ({ title, className }: ISectionDivider) => {
    return (
        <div
            className={cn(
                "flex items-center gap-5 mb-10 max-sm:ml-5 sm:ml-0",
                className
            )}
        >
            <div className="w-1.5 h-7 bg-purple-600 rounded-[10px]" />
            <p className="text-4xl font-semibold text-neutral-700">{title}</p>
        </div>
    );
};

export default SectionDivider;
