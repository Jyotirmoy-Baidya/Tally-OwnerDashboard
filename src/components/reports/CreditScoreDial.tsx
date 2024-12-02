import React from "react";
import { RadialBarChart, RadialBar } from "recharts";

const CreditScroreDial: React.FC<{ score: number }> = ({ score }) => {
    const data = [
        { name: "CIBIL Score", value: score, fill: "#3B82F6" }, // Blue color
        { name: "Remaining", value: 900 - score, fill: "#E5E7EB" }, // Light gray
    ];

    return (
        <div className="relative flex flex-col items-center">
            <RadialBarChart
                width={200}
                height={200}
                cx="50%"
                cy="50%"
                innerRadius="70%"
                outerRadius="100%"
                barSize={10}
                startAngle={180}
                endAngle={0}
                data={data}
            >
                <RadialBar dataKey="value" />
            </RadialBarChart>
            <div className="absolute bottom-10 flex flex-col items-center">
                <p className="text-xl mb-3 font-bold">{score}</p>
                <p className="text-sm text-gray-600">CIBIL Score</p>
                <p className="text-xs">Latest fetched at: {'03-2024'}</p>
            </div>
        </div>
    );
};

export default CreditScroreDial;
