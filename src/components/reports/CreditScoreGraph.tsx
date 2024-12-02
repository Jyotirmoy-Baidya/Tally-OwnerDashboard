import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps } from 'recharts';
import { extractMonthNumber, getMonthName } from '../../utils';

interface CreditScoreGraphProps {
    data: Array<{
        date: string;
        score: number;
    }>;
}

// Custom Tooltip Component
const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload as { date: string; score: number }; // Type assertion
        const [month, year] = extractMonthNumber(data.date);
        const monthName = getMonthName(month);
        return (
            <div className="bg-white border border-gray-300 rounded-md p-2.5 shadow-md">
                <p className='font-medium'>{`Score: ${data.score}`}</p>
                <p className='text-xs text-red-400'>Fetched At: {monthName} {year}</p>
            </div>
        );
    }
    return null;
};

const CreditScoreGraph: React.FC<CreditScoreGraphProps> = ({ data }) => {
    return (
        <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis domain={[300, 900]} />
                    <Tooltip content={<CustomTooltip />} />
                    <Line type="monotone" dataKey="score" stroke="#3B82F6" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div >
    );
};

export default CreditScoreGraph;