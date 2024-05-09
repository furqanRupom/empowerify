import * as React from 'react';

interface IThanksProps {
}

const Thanks: React.FunctionComponent<IThanksProps> = (props) => {
  return <>
      <section className="hidden  success bg-black bg-opacity-80 fixed top-0 left-0 right-0 bottom-0  ">
          <div
              className="flex flex-col  items-center bg-white opacity-100 md:max-w-3xl   sm:max-w-2xl max-w-sm max-h-full px-8  shadow-md border rounded-xl my-10 md:px-8 absolute right-2/4   translate-x-2/4  z-auto"
          >
              <img src="images/icon-check.svg" alt="checked icon" className="fill-current w-12 h-12 my-8"/>

                  <h3 className="md:text-xl text-lg font-semibold"> Thanks for your support!</h3>
                  <p className="md:px-10  text-sm text-gray-400 py-4 text-center "> Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
                      an email once our campaign is completed.
                  </p>
                  <button
                      className="bg-teal-500  text-white font-medium py-2 px-6 mb-8 rounded-full inline-flex items-center success-close"
                  >
                      Got it !
                  </button>

          </div>
      </section>
  </>;
};

export default Thanks;
