import { NavLink } from 'react-router-dom';
import { CreditCard, FileCheck, Building2, Wallet } from 'lucide-react';

const Sidebar = () => {
    const navItems = [
        { path: '/cibil', icon: <CreditCard size={20} />, label: 'CIBIL Score' },
        { path: '/crif', icon: <FileCheck size={20} />, label: 'CRIF Report' },
        { path: '/eligibility', icon: <Building2 size={20} />, label: 'Eligibility' },
        { path: '/loans', icon: <Wallet size={20} />, label: 'All Loans' },
    ];

    return (
        <div className="h-screen w-64 bg-gray-900 text-white fixed left-0 top-0">
            <div className="p-4">
                <h2 className="text-xl font-bold mb-8">Tally Dashboard</h2>
                <nav className='flex flex-col gap-2'>
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center space-x-3 p-3 rounded-lg transition-colors ${isActive
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-300 hover:bg-gray-800'
                                }`
                            }
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </NavLink>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;