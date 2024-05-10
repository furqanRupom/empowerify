import * as React from 'react';


const NewsLetter: React.FunctionComponent= (props) => {
    return <div className="mx-auto  max-w-7xl px-6 sm:mt-4 lg:px-8">
        <div className="relative isolate overflow-hidden px-6 py-24 shadow-lg rounded-2xl sm:rounded-3xl sm:px-24 ">
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight  sm:text-4xl">
                Keep Updated
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-600">

                Stay ahead of the curve with the latest developments in Empoerify! Sign up for our crowdfunding newsletter to receive exclusive and impactful updates firsthand.
            </p>
            <form className="mx-auto mt-10 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                    Email address
                </label>
                <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-orange-500 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                    placeholder="Enter your email"
                />
                <button
                    type="submit"
                    className="flex-none rounded-md  px-3.5 py-2.5 text-sm font-semibold text-white bg-orange-500 shadow-sm hover:bg-orange-600 duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                    Notify me
                </button>
            </form>
          
        </div>
    </div>
;
};

export default NewsLetter;
