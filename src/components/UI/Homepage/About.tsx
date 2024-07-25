import Button from '@/components/other/UI/Button';
import { Slider } from '@/components/other/UI/Slider';
import * as React from 'react';

const About: React.FunctionComponent = (props) => {
  return <section className='grid grid-cols-1 lg:grid-cols-2 gap-x-12 pt-20'>
    <div>
          <h3 className="text-4xl font-bold text-zinc-700">
              Donation for a better <br /> future world
          </h3>
          <p className="my-4  text-zinc-600 leading-relaxed">
              Welcome to Empowerify  a leading crowdfunding platform dedicated to bringing innovative projects to life. Join us in making a difference by supporting initiatives that aim to create a brighter and more sustainable future. Your contributions help turn visionary ideas into reality and foster a community of empowered individuals working towards positive change.
          </p>

          <Button>Start Funding</Button>

    </div>
      <div>
          <Slider />
      </div>
  </section>;
};

export default About;
