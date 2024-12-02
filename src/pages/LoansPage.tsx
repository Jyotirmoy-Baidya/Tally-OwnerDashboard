import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/basics/Tabs';
import LoanChart from '../components/loan/LoanChart';
import LoanBarChart from '../components/loan/LoanBarChart';

const mockLoanDistribution = [
    { name: 'Business', value: 45, color: '#FFB800' },
    { name: 'Personal', value: 25, color: '#9333EA' },
    { name: 'Auto', value: 20, color: '#22C55E' },
    { name: 'Home', value: 10, color: '#3B82F6' },
];

const mockLenderData = [
    { lender: 'HDFC', disbursed: 80000, outstanding: 65000 },
    { lender: 'ICICI', disbursed: 120000, outstanding: 100000 },
    { lender: 'SBI', disbursed: 50000, outstanding: 40000 },
];

const LoansPage = () => {
    const [activeTab, setActiveTab] = useState('charts');

    return (
        <div className="p-6 mt-16">
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg p-6 mb-6 text-white">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-sm opacity-80">Total Loan Amount</h3>
                        <p className="text-2xl font-bold">₹811,500.00</p>
                    </div>
                    <div>
                        <h3 className="text-sm opacity-80">Outstanding Amount</h3>
                        <p className="text-2xl font-bold">₹350,000.00</p>
                    </div>
                    <div>
                        <h3 className="text-sm opacity-80">Active Loans</h3>
                        <p className="text-2xl font-bold">4</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-md">
                <Tabs defaultValue="charts" className="w-full">
                    <TabsList className="border-b p-2">
                        <TabsTrigger
                            value="charts"
                            onClick={() => setActiveTab('charts')}
                            className={`px-4 py-2 ${activeTab === 'charts' ? 'text-blue-600 border-b-2 border-blue-600' : ''
                                }`}
                        >
                            Charts
                        </TabsTrigger>
                        <TabsTrigger
                            value="details"
                            onClick={() => setActiveTab('details')}
                            className={`px-4 py-2 ${activeTab === 'details' ? 'text-blue-600 border-b-2 border-blue-600' : ''
                                }`}
                        >
                            Loan Details
                        </TabsTrigger>
                        <TabsTrigger
                            value="enquiry"
                            onClick={() => setActiveTab('enquiry')}
                            className={`px-4 py-2 ${activeTab === 'enquiry' ? 'text-blue-600 border-b-2 border-blue-600' : ''
                                }`}
                        >
                            Enquiry Details
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="charts" className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Loan Distribution By Type</h3>
                                <LoanChart data={mockLoanDistribution} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Disbursed vs Outstanding Amount by Lender</h3>
                                <LoanBarChart data={mockLenderData} />
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="details" className="p-6">
                        <div className="space-y-4">
                            {mockLenderData.map((lender, index) => (
                                <div key={index} className="border rounded-lg p-4">
                                    <h3 className="font-semibold">{lender.lender} Bank</h3>
                                    <div className="grid grid-cols-2 gap-4 mt-2">
                                        <div>
                                            <p className="text-sm text-gray-600">Disbursed Amount</p>
                                            <p className="font-semibold">₹{lender.disbursed.toLocaleString()}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600">Outstanding Amount</p>
                                            <p className="font-semibold">₹{lender.outstanding.toLocaleString()}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="enquiry" className="p-6">
                        <div className="space-y-4">
                            <div className="border rounded-lg p-4">
                                <h3 className="font-semibold mb-2">Recent Enquiries</h3>
                                <table className="w-full">
                                    <thead>
                                        <tr className="text-left text-sm text-gray-600">
                                            <th className="pb-2">Date</th>
                                            <th className="pb-2">Bank</th>
                                            <th className="pb-2">Purpose</th>
                                            <th className="pb-2">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="py-2">2024-03-15</td>
                                            <td>HDFC Bank</td>
                                            <td>Business Loan</td>
                                            <td><span className="text-yellow-600">Pending</span></td>
                                        </tr>
                                        <tr>
                                            <td className="py-2">2024-03-10</td>
                                            <td>ICICI Bank</td>
                                            <td>Personal Loan</td>
                                            <td><span className="text-green-600">Approved</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default LoansPage;