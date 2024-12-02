import React from 'react';
import { NavLink } from 'react-router-dom';
import { CreditCard, FileCheck, Building2, Wallet, X } from 'lucide-react';
import { useSidebar } from '../contexts/SideBarContext';

const Sidebar = () => {
    const { isOpen, close } = useSidebar();

    const navItems = [
        { path: '/cibil', icon: <CreditCard size={20} />, label: 'CIBIL Score' },
        { path: '/crif', icon: <FileCheck size={20} />, label: 'CRIF Report' },
        { path: '/eligibility', icon: <Building2 size={20} />, label: 'Eligibility' },
        { path: '/loans', icon: <Wallet size={20} />, label: 'All Loans' },
    ];

    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 xl:hidden"
                    onClick={close}
                />
            )}

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white transform transition-transform duration-200 ease-in-out z-40 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} xl:translate-x-0`}
            >
                <div className="p-4">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-xl font-bold">Tally Dashboard</h2>
                        <button
                            onClick={close}
                            className="p-2 hover:bg-gray-800 rounded-lg xl:hidden"
                            aria-label="Close menu"
                        >
                            <X size={20} />
                        </button>
                    </div>
                    <nav>
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={close}
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
        </>
    );
};

export default Sidebar;