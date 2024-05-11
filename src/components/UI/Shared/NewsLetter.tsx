import * as React from 'react';


const NewsLetter: React.FunctionComponent = (props) => {
    return <div className="bg-gray-50 shadow my-20 mx-auto max-w-7xl py-20 rounded-3xl">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
            <div className="max-w-xl text-3xl font-bold tracking-tight  sm:text-4xl lg:col-span-7">
                <h2 className="inline sm:block lg:inline xl:block">Want product news and updates?</h2>
                <p className="inline sm:block lg:inline xl:block">Sign up for our newsletter.</p>
            </div>
            <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
                <div className="flex gap-x-4">
                    <label htmlFor="email-address" className="sr-only">Email address</label><input id="email-address" name="email" type="email" className="min-w-0 flex-auto rounded-md border-0 focus:outline-none px-3.5 py-2  shadow-sm ring-1 ring-inset ring-orange-500 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6" placeholder="Enter your email" /><button type="submit" className="flex rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">Subscribe</button>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">We care about your data. Read our <a
                    href="https://www.swellai.com/privacy" className="font-semibold text-gray-500">privacy&nbsp;policy</a>.</p>
            </form>
        </div>
    </div>
        ;
};

export default NewsLetter;
