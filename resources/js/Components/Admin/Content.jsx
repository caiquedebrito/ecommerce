import React, { useEffect } from "react";
import "./style.css"

export default function Content({ data, setSelected, refresh, fetchData }) {

    useEffect(() => {
        fetchData()
    }, [refresh])

    return (
        <div className="bg-gray-100 overflow-scroll w-full no-scrollbar">
            <table className="max-w-[1026px] min-w-[600px] overflow-scroll mx-auto">
                <thead className="text-center">
                    <tr>
                        {data.length > 0
                            ? Object.keys(data[0]).map((key, index) => (
                                  <th key={index}>{key}</th>
                              ))
                            : null}
                    </tr>
                </thead>
                <tbody className="text-center">
                    {data.map((item, index) => (
                        <tr onClick={() => {console.log(item); setSelected(item)}} className="cursor-pointer hover:bg-gray-500" key={index}>
                            {Object.values(item).map((value, index) => (
                                <td key={index}>{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
