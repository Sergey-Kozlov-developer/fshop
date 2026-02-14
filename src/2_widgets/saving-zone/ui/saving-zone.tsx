import { ArrowDown } from "lucide-react";

import printedImg from "@/5_shared/assets/image/saving-zone/printed.png";
import argoImg from "@/5_shared/assets/image/saving-zone/argo.png";
import oversizedImg from "@/5_shared/assets/image/saving-zone/oversized.png";
import urbanImg from "@/5_shared/assets/image/saving-zone/urban.png";
import CardSavingZone from "@/2_widgets/saving-zone/ui/card-saving-zone";

const SavingZone = () => {
    const bloks = [
        {
            id: 1,
            title: `Hawaiian Shirts`,
            subTitle: "Dress up in summer vibe",
            sale: "UPTO 50% OFF",
            arrowDown: <ArrowDown className="text-white" />,
            img: printedImg,
        },
        {
            id: 2,
            title: "Printed T-Shirt",
            subTitle: "New Designs Every Week",
            sale: "UPTO 40% OFF",
            arrowDown: <ArrowDown className="text-white" />,
            img: argoImg,
        },
        {
            id: 3,
            title: "Cargo Joggers",
            subTitle: "Move with style & comfort",
            sale: "UPTO 50% OFF",
            arrowDown: <ArrowDown className="text-white" />,
            img: oversizedImg,
        },
        {
            id: 4,
            title: "Urban Shirts",
            subTitle: "Live In Confort",
            sale: "FLAT 60% OFF",
            arrowDown: <ArrowDown className="text-white" />,
            img: urbanImg,
        },
        {
            id: 5,
            title: "Urban Shirts",
            subTitle: "Live In Confort",
            sale: "FLAT 60% OFF",
            arrowDown: <ArrowDown className="text-white" />,
            img: urbanImg,
        },
    ];

    return (
        <div className="grid grid-cols-1 max-sm:mx-5 sm:mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Верхний ряд */}
            {bloks.slice(0, 3).map((item) => (
                <div key={item.id} className="col-span-1">
                    <CardSavingZone item={item} />
                </div>
            ))}

            {/* Нижний ряд */}
            <div className="col-span-1 sm:col-span-1 lg:col-span-2">
                {bloks[3] && <CardSavingZone item={bloks[3]} />}
            </div>
            <div className="col-span-1">
                {bloks[4] && <CardSavingZone item={bloks[4]} />}
            </div>
        </div>
    );
};

export default SavingZone;
