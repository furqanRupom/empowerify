import * as React from 'react';



/* 
1. create account
2. add payment mehtods and your informaiton
3. choose event
4. just donate

*/


const HowItWorks: React.FunctionComponent = (props) => {
  return <section>
    <h3 className='text-5xl font-bold text-center text-zinc-700 capitalize'> how it works </h3>

    <section className='grid grid-cols-2 lg:grid-cols-4 mt-20 gap-3 relative'>
      <div className=" rounded-xl border text-2xl shadow font-bold text-zinc-700 flex  items-center justify-center gap-5 p-3 col-span-2 lg:col-span-1">
        <h3>1</h3>
        <h4 className='capitalize font-thin'>Create Account</h4>
  
      </div>
      <div className=" rounded-xl border text-2xl shadow font-bold text-zinc-700 flex  items-center justify-center gap-5 p-3 col-span-3">
        <h3>2</h3>
        <p className='capitalize font-thin '>add payment methods </p>
      </div>
      <div className=" rounded-xl border text-2xl shadow font-bold text-zinc-700 flex  items-center justify-center gap-5 p-3 col-span-2">
        <h3>3</h3>
        <p className='capitalize font-thin'>choose event</p>
      </div>
      <div className=" rounded-xl border text-2xl shadow font-bold text-zinc-700 flex  items-center justify-center gap-5 p-3 col-span-2">
        <h3>4</h3>
        <p className='capitalize font-thin'>just donate</p>
      </div>
    </section>
  </section>;
};

export default HowItWorks;
