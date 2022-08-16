import { useState, useDebugValue } from "react";

export default function useToggle(defaultValue) {
    const [value, setValue] = useState(defaultValue);

    function toggleValue(value) {
        setValue(currentValue =>
            typeof value === "boolean" ? value : !currentValue
        )
    }

    useDebugValue(value ?? "undefined/non-boolean toggleValue value");

    return [value, toggleValue];
}