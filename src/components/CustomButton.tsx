"use client";

interface CustomButtonProps {
    children?: React.ReactNode;
    handleButtonClick?: () => any;
}

export default function CustomButton({
    children,
    handleButtonClick,
}: CustomButtonProps) {
    return (
        <button
            onClick={handleButtonClick}
            className="flex items-center justify-center bg-[#FFCE22] rounded w-[340px] h-10 px-5 py-2.5 font-['Montserrat'] font-normal text-sm text-[#1F2128] hover:bg-[#FFD84D] active:bg-[#FFCE22]"
        >
            {children}
        </button>
    );
}
