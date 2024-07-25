import { BannerSlider } from '@/components/other/UI/BannerSlider';
import Button from '@/components/other/UI/Button';
import { Slider } from '@/components/other/UI/Slider';
import Image from 'next/image';
import * as React from 'react';

const mockData = [
  {
    title:"$1M",
    seocndTItle:"Fund Raised"
  },
  {
    title: "500+",
    seocndTItle: " Dedicated Volunteers"
  },
    {
    title: "100%",
    seocndTItle: "Donation Delivered"
  },
    {
    title: "250k",
    seocndTItle: "Charity Participation"
  }
]
const Banner: React.FunctionComponent = (props) => {
  return <>
    <section className='mt-32 mb-8 max-w-6xl mx-auto  py-12  px-4'>
   
     <div className='grid   lg:grid-cols-[0.7fr,1fr]'>
        <div className="text-5xl  font-bold tracking-wide py-3 lg:py-0 text-zinc-700">
          <h3>Giving <span className='text-emerald-500'>Empower.</span></h3>
          <h3>Creating Impact</h3>
        </div>

        <div>
          <p className='leading-relaxed text-zinc-700 mb-1 text-lg'>Join us in making a difference by contributing to our cause. Your support helps us create positive change and build a brighter future together.</p>

          <Button>Donate Now</Button>
        </div>
     </div>

     <div className='my-24'>
      <BannerSlider />
     </div>

     <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12'>
       {
        mockData.map((data,index) => (<div className='flex justify-between items-center border-r border-zinc-200' key={index}>

          <div>
            <h3 className='text-2xl font-semibold text-zinc-700'>{data.title}</h3>
            <h4>{data.seocndTItle}</h4>
          </div>
          <div className='w-4 h-4 rounded-full bg-emerald-300 mx-2'></div>
        
        </div>))
       }
     </div>
    </section>
  </>;
};

export default Banner;
