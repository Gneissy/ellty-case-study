"use client";

interface CustomCheckboxProps {
    isSelected: Boolean;
    onChange: () => void;
}

export default function CustomCheckbox({
    isSelected,
    onChange,
}: CustomCheckboxProps) {
    return (
        <>
            <div
                onClick={onChange}
                className={`w-[25px] h-[25px] group flex justify-center items-center cursor-pointer bg-white rounded-md ring-transparent border border-[#E3E3E3] hover:ring-0 active:ring active:ring-offset-[3px] active:ring-offset-[#5087F8]/10 ${
                    isSelected
                        ? "bg-[#2469F6] !border-[#2469F6] hover:bg-[#5087F8] hover:!border-[#5087F8] active:bg-[#2469F6] active:!border-[#2469F6]"
                        : null
                }`}
            >
                <svg
                    width="19"
                    height="14"
                    viewBox="0 0 19 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`hidden group-hover:block ${
                        isSelected ? `!block` : ``
                    }`}
                >
                    <path
                        d="M1 7.6L7.03451 12.9672C7.05497 12.9854 7.08626 12.9837 7.1047 12.9635L18 1"
                        stroke="#E3E3E3"
                        strokeLinecap="round"
                        className={`${
                            !isSelected ? `group-active:stroke-[#878787]` : ``
                        }`}
                    />
                </svg>
            </div>
        </>
    );
}
