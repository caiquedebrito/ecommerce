import React from "react";

export default function Content({ data, setSelected }) {
    return (
        <div className="bg-gray-100 px-5 mx-5 overflow-scroll">
            <table className="w-full overflow-scroll">
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
