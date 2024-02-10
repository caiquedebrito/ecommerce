import React, { useEffect } from "react";

export default function Content({ data, setSelected, refresh, fetchData }) {

    useEffect(() => {
        fetchData()
    }, [refresh])

    return (
        <div className="overflow-scroll mx-4 no-scroll border">
            <table className="w-full">
                <thead className="bg-blue-500 text-white">
                    <tr>
                        {data.length > 0
                            ? Object.keys(data[0]).map((key, index) => (
                                  <th key={index} className="px-6 py-3">{key}</th>
                              ))
                            : null}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr onClick={() => {setSelected(item)}} key={index}>
                            {Object.values(item).map((value, index) => (
                                <td key={index} className="px-6 py-3">{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
