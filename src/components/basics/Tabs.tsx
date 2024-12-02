import React from 'react';

interface TabsProps {
    defaultValue: string;
    children: React.ReactNode;
    className?: string;
}

interface TabsListProps {
    children: React.ReactNode;
    className?: string;
}

interface TabsTriggerProps {
    value: string;
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

interface TabsContentProps {
    value: string;
    children: React.ReactNode;
    className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ children, className = '' }) => {
    return <div className={className}>{children}</div>;
};

export const TabsList: React.FC<TabsListProps> = ({ children, className = '' }) => {
    return <div className={className}>{children}</div>;
};

export const TabsTrigger: React.FC<TabsTriggerProps> = ({
    children,
    onClick,
    className = '',
}) => {
    return (
        <button onClick={onClick} className={`${className} focus:outline-none`}>
            {children}
        </button>
    );
};

export const TabsContent: React.FC<TabsContentProps> = ({
    children,
    className = '',
}) => {
    return <div className={className}>{children}</div>;
};