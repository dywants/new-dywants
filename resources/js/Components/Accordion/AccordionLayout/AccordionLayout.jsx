import Image from "@/Components/Elements/Image";
import React from "react";

const AccordionLayout = ({
    title,
    children,
    index,
    activeIndex,
    setActiveIndex,
}) => {
    const handleSetIndex = (index) =>
        activeIndex !== index && setActiveIndex(index);
    return (
        <>
            <div
                onClick={() => handleSetIndex(index)}
                className="flex w-full justify-between items-center p-3 mt-2"
            >
                <div className="text-title font-semibold text-[20px]">{title}</div>

                {activeIndex === index ? (
                    <div>
                        <Image src={"/assets/images/icon-moins.png"} />
                    </div>
                ) : (
                    <div>
                        <Image src={"/assets/images/icon-plus.png"} />
                    </div>
                )}
            </div>
            {activeIndex === index && (
                <div className="p-4 mb-6 border-b border-[#b4c1d6] transition duration-75 ease-out">
                    {children}
                </div>
            )}
        </>
    );
};

export default AccordionLayout;
