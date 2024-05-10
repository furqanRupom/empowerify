import * as React from 'react';
import Image from 'next/image';


;

const bestServices = [
    {
        title: "Personalized Support",
        description: "Our team of dedicated support staff is available to assist project creators and backers at every step of their crowdfunding journey, offering personalized guidance and assistance."
    },
    {
        title: "Marketing and Promotion",
        description: "Empowerify offers marketing and promotion services to help creators increase visibility and attract backers, leveraging social media, email campaigns, and other channels."
    },
    {
        title: "Project Verification",
        description: "We conduct thorough verification checks on projects to ensure their legitimacy and viability, providing added assurance to backers and promoting trust within the community."
    },
    {
        title: "Educational Resources",
        description: "We provide creators with access to educational resources and guides on crowdfunding best practices, empowering them to optimize their campaigns for success."
    },
    {
        title: "Flexible Funding Options",
        description: "Empowerify offers flexible funding options such as all-or-nothing and keep-it-all models, allowing creators to choose the approach that best suits their project's needs."
    },
    {
        title: "Global Reach",
        description: "With a worldwide audience of backers and creators, Empowerify offers a platform for projects to gain exposure and support from individuals across the globe."
    }
];

const Card: React.FunctionComponent = (props) => {
    return (
        <section className=" dark:bg-gray-100 dark:text-gray-800 max-w-7xl mx-auto py-20">
            <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                <h2 className="text-5xl font-bold">We Try to Provide our Best Services</h2>
                <p className="dark:text-gray-600">But we need your hand. to make happen to others smile . that is why we are doing this</p>
            </div>
            <div className="container mx-auto grid justify-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
             {
                bestServices.map((service) => (
                    <div key={service.title} className="flex flex-col items-center p-5 rounded-3xl shadow">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-orange-600 text-orange-500">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                        </svg>
                        <h3 className="my-3 text-xl font-semibold">{service.title}</h3>
                        <div className="space-y-1 text-sm leading-relaxed">
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))
             }
               </div>
        </section>
    );
};

export default Card;
