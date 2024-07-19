"use client";

import CustomCheckbox from "./CustomCheckbox";

interface PageSelectionFormProps {
    pageName: String;
    isSelected: Boolean;
    onChange: () => void;
}

export default function PageSelectionElement({
    pageName,
    isSelected,
    onChange,
}: PageSelectionFormProps) {
    return (
        <div className="flex justify-between items-center gap-[5px] w-[370px] h-[42px] py-2 pr-[15px] pl-[22px] pb- font-['Montserrat'] font-normal text-sm text-[#1F2128]">
            <p>{pageName}</p>
            <CustomCheckbox isSelected={isSelected} onChange={onChange} />
        </div>
    );
}
