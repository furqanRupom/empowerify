import Image from 'next/image';
import * as React from 'react';



const Banner: React.FunctionComponent = (props) => {
  return <>
    <div>
      <div className='flex items-center text-center  justify-center max-w-5xl mx-auto py-40 '>
        <div>

          <h3 className='text-3xl sm:text-4xl md:text-5xl py-3 font-semibold tracking-wide leading-relaxed'>Examining Premier Online Fundraising and Crowdfunding Platforms</h3>
          <p className='leading-relaxed py-5 pt-4 '>Empowerify offers individuals and organizations a platform to raise funds through a network of support from family, friends, acquaintances, businesses, and beyond. Leveraging the power of social media, Empowerify enables users to expand their reach to potential donors, surpassing the limitations of conventional fundraising methods.
          </p>
          <p> Ensuring your crowdfunding venture starts off on the right foot involves choosing the ideal platform. With empowerify comprehensive list, you can delve into a thorough comparison of top online fundraising platforms, covering essential aspects like fees, features, customer support, and more, empowering you to make an informed choice</p>
        </div>

      </div>
    </div>
  </>;
};

export default Banner;
