import { useState } from "react";

export default function Playground() {

    function ToggleItem() {
        const [isVisible, setIsVisible] = useState(true);

        function toggleVisibility() {
            setIsVisible(currentValue => !currentValue);
        }
        return (
            <div>
                {/* <button onClick={toggleVisibility}>Toggle Visibility</button> */}
                <p onClick={toggleVisibility} className={`${isVisible ? "line-through" : "no-underline" }`}>
                    This is visible
                </p>
            </div>
        )
    }
    return (
        <div>
            <div className="flex justify-center">
                <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                    <h1 className="text-md font-medium">Playground</h1>
                    <p>This is a playground for testing and experimenting with React Hooks.</p>
                    <p>The following components are available:</p>
                    <ul className="divide-y divide-gray-200">
                        <li key="1" className="py-4 flex">
                            <div className="ml-3">
                                <ToggleItem />
                            </div>
                        </li>
                        <li key="2" className="py-4 flex">
                            <div className="ml-3">
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}