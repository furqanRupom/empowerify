import * as React from 'react';

interface IButtonProps {
   children:React.ReactNode
}

const Button: React.FunctionComponent<IButtonProps> = ({children}) => {
    return <div className="hidden md:flex items-center space-x-5">
        <button className={` px-4 py-2    border border-emerald-500 hover:bg-emerald-500 hover:bg-opacity-10  rounded-3xl text-emerald-500 `}>{children}</button>
    </div>;
};

export default Button;
