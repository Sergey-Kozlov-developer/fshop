import { ArrowDown } from "lucide-react";

import printedImg from "@/shared/assets/image/saving-zone/printed.png";
import argoImg from "@/shared/assets/image/saving-zone/argo.png";
import oversizedImg from "@/shared/assets/image/saving-zone/oversized.png";
import urbanImg from "@/shared/assets/image/saving-zone/urban.png";
import { Button } from "@/shared/ui/shadcn/button";
import CardSavingZone from "@/widgets/saving-zone/card-saving-zone";

// const CardZone = ({ item, colSpan = 1, row = 1 }) => (
//     <div className={`relative col-span-${colSpan} row-start-${row}`}>
//         <div className="relative w-full h-96">
//             <img
//                 className="absolute inset-0 w-full h-full object-cover rounded-xl"
//                 src={item.img}
//                 alt={item.title}
//             />
//             <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 to-transparent rounded-xl">
//                 <h3 className="text-white text-3xl font-semibold">
//                     {item.title}
//                 </h3>
//                 <p className="text-white text-sm">{item.subTitle}</p>
//                 <p className="text-white text-lg font-bold">{item.sale}</p>
//                 {item.btn}
//             </div>
//         </div>
//     </div>
// );

const SavingZone = () => {
    const bloks = [
        {
            id: 1,
            title: "Hawaiian Shirts",
            subTitle: "Dress up in summer vibe",
            sale: "UPTO 50% OFF",
            arrowDown: <ArrowDown />,
            img: printedImg,
            btn: (
                <Button variant="outline" className="bg-transparent">
                    SHOP NOW
                </Button>
            ),
        },
        {
            id: 2,
            title: "Printed T-Shirt",
            subTitle: "New Designs Every Week",
            sale: "UPTO 40% OFF",
            arrowDown: <ArrowDown />,
            img: argoImg,
            btn: (
                <Button variant="outline" className="bg-transparent">
                    SHOP NOW
                </Button>
            ),
        },
        {
            id: 3,
            title: "Cargo Joggers",
            subTitle: "Move with style & comfort",
            sale: "UPTO 50% OFF",
            arrowDown: <ArrowDown />,
            img: oversizedImg,
            btn: (
                <Button variant="outline" className="bg-transparent">
                    SHOP NOW
                </Button>
            ),
        },
        {
            id: 4,
            title: "Urban Shirts",
            subTitle: "Live In Confort",
            sale: "FLAT 60% OFF",
            arrowDown: <ArrowDown />,
            img: urbanImg,
            btn: (
                <Button variant="outline" className="bg-transparent">
                    SHOP NOW
                </Button>
            ),
        },
        {
            id: 5,
            title: "Urban Shirts",
            subTitle: "Live In Confort",
            sale: "FLAT 60% OFF",
            arrowDown: <ArrowDown />,
            img: urbanImg,
            btn: (
                <Button variant="outline" className="bg-transparent">
                    SHOP NOW
                </Button>
            ),
        },
    ];

    return (
        <div className="grid grid-cols-3 gap-4">
            {bloks.slice(0, 3).map((item) => (
                <CardSavingZone key={item.id} item={item} />
            ))}

            {bloks[3] && <CardSavingZone item={bloks[3]} colSpan={1} row={2} />}
            {bloks[4] && <CardSavingZone item={bloks[4]} colSpan={1} row={2} />}
        </div>
    );
};

export default SavingZone;
