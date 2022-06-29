import { useState } from 'react';

const CountryDropDown = () => {
    const [isList, setIsList] = useState(false);
    const [isSubList, setIsSubList] = useState(3);
    console.log(isSubList);
    return (
        <div>
            <div
                onClick={() => setIsList(!isList)}
                className="flex items-center justify-between p-4 text-sm font-medium leading-none text-gray-800 bg-white rounded shadow cursor-pointer w-50"
            >
                Year : 2016
                <div>
                    {isList ? (
                        <div>
                            <svg
                                width={10}
                                height={6}
                                viewBox="0 0 10 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5.00016 0.666664L9.66683 5.33333L0.333496 5.33333L5.00016 0.666664Z"
                                    fill="#1F2937"
                                />
                            </svg>
                        </div>
                    ) : (
                        <div>
                            <svg
                                width={10}
                                height={6}
                                viewBox="0 0 10 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5.00016 5.33333L0.333496 0.666664H9.66683L5.00016 5.33333Z"
                                    fill="#1F2937"
                                />
                            </svg>
                        </div>
                    )}
                </div>
            </div>
            {isList && (
                <div className="p-4 mt-2 bg-white rounded shadow w-60">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <svg
                                onClick={() => setIsSubList(1)}
                                width={12}
                                height={12}
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4.5 3L7.5 6L4.5 9"
                                    stroke="#4B5563"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <div className="flex items-center pl-4">
                                <div className="relative flex items-center justify-center flex-shrink-0 w-3 h-3 bg-gray-100 border border-gray-200 rounded-sm dark:bg-gray-800 dark:border-gray-700">
                                    <input
                                        type="checkbox"
                                        className="absolute w-full h-full opacity-0 cursor-pointer checkbox"
                                    />
                                    <div className="hidden text-white bg-indigo-700 rounded-sm check-icon">
                                        <svg
                                            className="icon icon-tabler icon-tabler-check"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={12}
                                            height={12}
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M5 12l5 5l10 -10" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="ml-2 text-sm leading-normal text-gray-800">2017</p>
                            </div>
                        </div>
                        <p className="w-8 text-xs leading-3 text-right text-indigo-700">2,381</p>
                    </div>
                    <div>
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center">
                                <svg
                                    onClick={() => setIsSubList(2)}
                                    width={12}
                                    height={12}
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4.5 3L7.5 6L4.5 9"
                                        stroke="#4B5563"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <div className="flex items-center pl-4">
                                    <div className="relative flex items-center justify-center flex-shrink-0 w-3 h-3 bg-gray-100 border border-gray-200 rounded-sm dark:bg-gray-800 dark:border-gray-700">
                                        <input
                                            type="checkbox"
                                            className="absolute w-full h-full opacity-0 cursor-pointer checkbox"
                                        />
                                        <div className="hidden text-white bg-indigo-700 rounded-sm check-icon">
                                            <svg
                                                className="icon icon-tabler icon-tabler-check"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={12}
                                                height={12}
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="ml-2 text-sm leading-normal text-gray-800">
                                        2018
                                    </p>
                                </div>
                            </div>
                            <p className="w-8 text-xs leading-3 text-right text-indigo-700">
                                3,521
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center">
                                <svg
                                    onClick={() => setIsSubList(3)}
                                    width={12}
                                    height={12}
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4.5 3L7.5 6L4.5 9"
                                        stroke="#4B5563"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <div className="flex items-center pl-4">
                                    <div className="relative flex items-center justify-center flex-shrink-0 w-3 h-3 bg-gray-100 border border-gray-200 rounded-sm dark:bg-gray-800 dark:border-gray-700">
                                        <input
                                            type="checkbox"
                                            className="absolute w-full h-full opacity-0 cursor-pointer checkbox"
                                        />
                                        <div className="hidden text-white bg-indigo-700 rounded-sm check-icon">
                                            <svg
                                                className="icon icon-tabler icon-tabler-check"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={12}
                                                height={12}
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M5 12l5 5l10 -10" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="ml-2 text-sm leading-normal text-gray-800">
                                        2019
                                    </p>
                                </div>
                            </div>
                            <p className="w-8 text-xs leading-3 text-right text-indigo-700">
                                5,142
                            </p>
                        </div>
                    </div>
                    <button className="w-full py-2 mt-6 text-xs font-medium leading-3 bg-gray-100 rounded-md text-b-700 hover:bg-gray-200">
                        Select Year
                    </button>
                </div>
            )}
            <style>
                {` .checkbox:checked + .check-icon {
                display: flex;
            }`}
            </style>
        </div>
    );
};
export default CountryDropDown;
