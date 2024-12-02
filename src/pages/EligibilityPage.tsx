import { useForm } from 'react-hook-form';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Building2, IndianRupee, Calculator } from 'lucide-react';

const mockOfferData = [
    { date: '2024-01', amount: 125000 },
    { date: '2024-02', amount: 150000 },
    { date: '2024-03', amount: 165000 },
];

const EligibilityPage = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Loan Eligibility</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-green-100 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-green-800">Tally offer amount</span>
                        <Building2 size={20} className="text-green-600" />
                    </div>
                    <div className="text-2xl font-bold text-green-800">₹165,000</div>
                </div>
                <div className="bg-blue-100 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-blue-800">Bank statement based</span>
                        <IndianRupee size={20} className="text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-blue-800">₹150,000</div>
                </div>
                <div className="bg-yellow-100 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-yellow-800">Due Amount</span>
                        <Calculator size={20} className="text-yellow-600" />
                    </div>
                    <div className="text-2xl font-bold text-yellow-800">₹15,000</div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">Tally Eligibility Offer Amount</h2>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={mockOfferData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="amount" stroke="#3B82F6" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">Check Eligibility</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Monthly Income</label>
                            <input
                                type="number"
                                {...register('monthlyIncome')}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Business Vintage (years)</label>
                            <input
                                type="number"
                                {...register('businessVintage')}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Calculate Eligibility
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EligibilityPage;