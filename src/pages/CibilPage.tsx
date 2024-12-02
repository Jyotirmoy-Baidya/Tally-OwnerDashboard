import { useForm } from 'react-hook-form';
import { GaugeCircle, AlertCircle } from 'lucide-react';
import CreditScoreGraph from '../components/reports/CreditScoreGraph';
import CreditScroreDial from '../components/reports/CreditScoreDial';

const mockData = [
    { date: '01-2024', score: 750 },
    { date: '02-2024', score: 765 },
    { date: '03-2024', score: 780 },
    { date: '04-2024', score: 790 },
    { date: '05-2024', score: 800 },
    { date: '06-2024', score: 810 },
];

const CibilPage = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: unknown) => {
        console.log(data);
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">CIBIL Score Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold">Latest CIBIL Score</h2>
                        <GaugeCircle className="text-blue-600" size={24} />
                    </div>
                    <CreditScroreDial score={790} />
                    <CreditScoreGraph data={mockData} />
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input
                                {...register('fullName')}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                            <input
                                type="date"
                                {...register('dob')}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Update Information
                        </button>
                    </form>
                </div>
            </div>

            <div className="mt-6 bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Credit Report Analysis</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2 text-yellow-600">
                        <AlertCircle size={20} />
                        <span>Fair credit utilization</span>
                    </div>
                    <div className="flex items-center space-x-2 text-green-600">
                        <AlertCircle size={20} />
                        <span>No late payments</span>
                    </div>
                    <div className="flex items-center space-x-2 text-red-600">
                        <AlertCircle size={20} />
                        <span>High number of inquiries</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CibilPage;