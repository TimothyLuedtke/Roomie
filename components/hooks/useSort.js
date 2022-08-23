import { useState, useEffect } from "react";

export function useSort(dataSet, sortState) {
    const [sortedData, setSortedData] = useState(dataSet);

    useEffect(() => {
        if (sortState === "ascending") {
            setSortedData(dataSet.sort((a, b) => (a.due_date < b.due_date) ? 1 : -1));
        } else if (sortState === "descending") {
            setSortedData(dataSet.sort((a, b) => (a.due_date > b.due_date) ? 1 : -1));
        } else {
            setSortedData(dataSet);
        }
    }, [dataSet, sortState]);

    return sortedData;
}

