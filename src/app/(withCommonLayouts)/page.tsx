import About from '@/components/UI/Homepage/About';
import Banner from '@/components/UI/Homepage/Banner';
import Card from '@/components/UI/Homepage/Card';
import HowItWorks from '@/components/UI/Homepage/HowItWorks';
import Table from '@/components/UI/Homepage/Table';
import NewsLetter from '@/components/UI/Shared/NewsLetter';
import * as React from 'react';



const RootPage: React.FunctionComponent = () => {
    return <section className='max-w-6xl mx-auto px-8'>
        <Banner />
        <About />
        <Card />
        <HowItWorks />
        <NewsLetter />
    </section>;
};

export default RootPage;
