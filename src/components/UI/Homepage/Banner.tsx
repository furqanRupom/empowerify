import Image from 'next/image';
import * as React from 'react';



const Banner: React.FunctionComponent = (props) => {
  return <>
      <Image className='w-full min-h-96 object-cover max-w-7xl mx-auto' src="https://d37y9b4kfek2hl.cloudfront.net/products/crowdfunding/screenshots/campaigns-list.png" alt="logo" width={500} height={500} />
  </>;
};

export default Banner;
