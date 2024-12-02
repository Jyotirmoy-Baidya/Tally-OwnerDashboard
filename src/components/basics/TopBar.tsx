import { CircleUserRound, Menu } from 'lucide-react';
import { useSidebar } from '../contexts/SideBarContext';

const TopBar = () => {
    const { toggle } = useSidebar();

    return (
        <div className="h-16 bg-white shadow-sm fixed top-0 right-0 left-0 xl:left-64 z-20">
            <div className="h-full px-4 md:px-6 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <button
                        onClick={toggle}
                        className="p-2 hover:bg-gray-100 rounded-lg xl:hidden"
                        aria-label="Toggle menu"
                    >
                        <Menu size={24} />
                    </button>
                    <img src="/tally-logo.svg" alt="Tally Logo" className="h-8 w-8" />
                    <span className="text-xl font-semibold text-gray-800">Tally</span>
                </div>
                <div className="flex items-center space-x-4">
                    <CircleUserRound className="h-8 w-8 text-gray-600 cursor-pointer hover:text-blue-600 transition-colors" />
                </div>
            </div>
        </div>
    );
}

export default TopBar;