import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

interface LoanBarChartProps {
    data: Array<{
        lender: string;
        disbursed: number;
        outstanding: number;
    }>;
}

const LoanBarChart: React.FC<LoanBarChartProps> = ({ data }) => {
    return (
        <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="lender" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="disbursed" name="Disbursed Amount" fill="#8884d8" />
                    <Bar dataKey="outstanding" name="Outstanding Amount" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LoanBarChart;