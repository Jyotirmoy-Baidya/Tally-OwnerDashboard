import { CircleUserRound } from 'lucide-react';

const TopBar = () => {
    return (
        <div className="h-16 bg-white shadow-sm fixed top-0 right-0 left-64 z-10">
            <div className="h-full px-6 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <img src="/tally-logo.svg" alt="Tally Logo" className="h-8 w-8" />
                    <span className="text-xl font-semibold text-gray-800">Tally</span>
                </div>
                <div className="flex items-center space-x-4">
                    <CircleUserRound className="h-8 w-8 text-gray-600 cursor-pointer hover:text-blue-600 transition-colors" />
                </div>
            </div>
        </div>
    );
};

export default TopBar;