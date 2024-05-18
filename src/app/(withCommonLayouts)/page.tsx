import Banner from '@/components/UI/Homepage/Banner';
import Card from '@/components/UI/Homepage/Card';
import Table from '@/components/UI/Homepage/Table';
import NewsLetter from '@/components/UI/Shared/NewsLetter';
import * as React from 'react';



const RootPage: React.FunctionComponent = () => {
    return <>
            <Banner />
        <div className='px-8'>
            <Table />
            <Card />
            <NewsLetter />
        </div>
    </>;
};

export default RootPage;
