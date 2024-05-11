import Banner from '@/components/UI/Homepage/Banner';
import Card from '@/components/UI/Homepage/Card';
import Table from '@/components/UI/Homepage/Table';
import NewsLetter from '@/components/UI/Shared/NewsLetter';
import * as React from 'react';



const RootPage: React.FunctionComponent = () => {
    return <div className='px-8'>
        <Banner />
        <Table />
        <Card />
        <NewsLetter />
    </div>;
};

export default RootPage;
