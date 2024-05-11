import Navbar from '@/components/UI/Homepage/Navbar';
import Footer from '@/components/UI/Shared/Footer';
import * as React from 'react';

interface ICommonLayoutProps {
    children:React.ReactNode
}

const CommonLayout: React.FunctionComponent<ICommonLayoutProps> = ({children}) => {
  return <section className='bg-gray-50'>
    <Navbar />
    <main>
        {children}
    </main>
    <Footer />
  
  </section>;
};

export default CommonLayout;
