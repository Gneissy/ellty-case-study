"use client";

import { useState } from "react";
import CustomButton from "./CustomButton";
import PageSelectionElement from "./PageSelectionElement";

export default function PageSelectionForm() {
    // Use an object to keep track of selected states
    const [selectedPages, setSelectedPages] = useState<Record<string, boolean>>(
        {
            "All Pages": false,
            "Page 1": false,
            "Page 2": false,
            "Page 3": false,
            "Page 4": false,
        }
    );

    const handleCheckboxChange = (pageName: string) => {
        if (pageName === "All Pages") {
            const newSelectedPages = !selectedPages["All Pages"];
            setSelectedPages({
                "All Pages": newSelectedPages,
                "Page 1": newSelectedPages,
                "Page 2": newSelectedPages,
                "Page 3": newSelectedPages,
                "Page 4": newSelectedPages,
            });
        } else {
            setSelectedPages((prev) => {
                const newSelectedPages = {
                    ...prev,
                    [pageName]: !prev[pageName],
                };

                // Check if all are checked one by one
                const allPagesSelected = Object.keys(newSelectedPages)
                    .filter((key) => key !== "All Pages")
                    .every((key) => newSelectedPages[key]);

                return {
                    ...newSelectedPages,
                    "All Pages": allPagesSelected,
                };
            });
        }
    };

    const handleButtonClick = function () {
        if (selectedPages["All Pages"])
            alert(`You have selected these pages: All Pages`);
        else {
            const trueKeys = Object.keys(selectedPages).filter(
                (key) => selectedPages[key] === true
            );
            if (trueKeys.length === 0)
                alert(`You have not selected any pages.`);
            else alert(`You have selected these pages: ${trueKeys}`);
        }
    };

    return (
        <div className="flex flex-col items-center justify-start select-none w-[370px] h-[326px] py-2.5 border border-[#EEEEEE] rounded-md shadow-[0px_0px_4px_rgba(20,20,20,0.1),_0px_8px_15px_rgba(20,20,20,0.12)]">
            <PageSelectionElement
                pageName="All Pages"
                isSelected={selectedPages["All Pages"]}
                onChange={() => handleCheckboxChange("All Pages")}
            />
            <div className="w-[340px] h-0 border border-[0.7px] border-[#CDCDCD] my-2.5" />
            <PageSelectionElement
                pageName="Page 1"
                isSelected={selectedPages["Page 1"]}
                onChange={() => handleCheckboxChange("Page 1")}
            />
            <PageSelectionElement
                pageName="Page 2"
                isSelected={selectedPages["Page 2"]}
                onChange={() => handleCheckboxChange("Page 2")}
            />
            <PageSelectionElement
                pageName="Page 3"
                isSelected={selectedPages["Page 3"]}
                onChange={() => handleCheckboxChange("Page 3")}
            />
            <PageSelectionElement
                pageName="Page 4"
                isSelected={selectedPages["Page 4"]}
                onChange={() => handleCheckboxChange("Page 4")}
            />
            <div className="w-[340px] h-0 border border-[0.7px] border-[#CDCDCD] my-2.5" />
            <div className="my-2.5">
                <CustomButton handleButtonClick={handleButtonClick}>
                    Done
                </CustomButton>
            </div>
        </div>
    );
}
