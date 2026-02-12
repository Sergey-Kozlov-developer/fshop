const CardSavingZone = ({ item, colSpan = 1, row = 1 }) => {
    return (
        <div className={`relative col-span-${colSpan} row-start-${row}`}>
            <div className="relative w-full h-96">
                <img
                    className="absolute left-0 top-0 rounded-xl w-full h-full object-cover"
                    src={item.img}
                    alt={item.title}
                />
                <div className="w-40 h-80 left-[222px] top-[34.33px] absolute">
                    <div className="left-[48px] top-[62.67px] absolute text-right justify-start text-white text-3xl font-semibold font-['Core_Sans_C'] leading-10 tracking-wide">
                        {item.title}
                    </div>
                    <div className="left-0 top-[154.67px] absolute text-right justify-start text-white text-sm font-semibold font-['Causten']">
                        {item.subTitle}
                    </div>
                    <div className="left-[29px] top-[181.67px] absolute text-right justify-start text-white text-lg font-bold font-['Causten']">
                        {item.sale}
                    </div>
                    <div className="w-6 h-5 left-[107px] top-[230.67px] absolute origin-top-left rotate-90 outline outline-2 outline-offset-[-1px] outline-white" />
                    <div className="w-28 h-8 px-2 py-4 left-[42px] top-[283.67px] absolute rounded inline-flex justify-center items-center gap-3">
                        {item.btn}
                    </div>
                    <div className="w-24 h-8 px-2 py-4 left-[49px] top-0 absolute bg-neutral-700 rounded inline-flex justify-center items-center gap-3">
                        <div className="text-center justify-start text-white text-xs font-bold font-['Causten']">
                            Limited Stock
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardSavingZone;
