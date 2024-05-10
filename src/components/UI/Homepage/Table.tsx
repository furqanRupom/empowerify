import * as React from 'react';


const Table: React.FunctionComponent = (props) => {
    const data = [
        {
            Platform: "Empowerify",
            TotalRaised: "$200,000",
            Supporters: "600",
            PlatformFee: "15%",
            PaymentFee: "12.9%"
        },
        {
            Platform: "KickStartYou",
            TotalRaised: "$100,000",
            Supporters: "500",
            PlatformFee: "5%",
            PaymentFee: "2.9%"
        },
        {
            Platform: "FundRaisia",
            TotalRaised: "$150,000",
            Supporters: "700",
            PlatformFee: "4%",
            PaymentFee: "3.5%"
        },
        {
            Platform: "GivifyNow",
            TotalRaised: "$80,000",
            Supporters: "400",
            PlatformFee: "6%",
            PaymentFee: "2.5%"
        },
        {
            Platform: "CharityBoost",
            TotalRaised: "$200,000",
            Supporters: "1000",
            PlatformFee: "3.5%",
            PaymentFee: "2.8%"
        },
        {
            Platform: "HelpingHandsHub",
            TotalRaised: "$120,000",
            Supporters: "600",
            PlatformFee: "4.5%",
            PaymentFee: "3%"
        },
        {
            Platform: "GenerosityGuild",
            TotalRaised: "$90,000",
            Supporters: "450",
            PlatformFee: "5.5%",
            PaymentFee: "2.7%"
        },
        {
            Platform: "HopeFundraiser",
            TotalRaised: "$180,000",
            Supporters: "900",
            PlatformFee: "3%",
            PaymentFee: "3.2%"
        },
        {
            Platform: "ImpactfulGivers",
            TotalRaised: "$250,000",
            Supporters: "1200",
            PlatformFee: "2.5%",
            PaymentFee: "2.6%"
        },
        {
            Platform: "ChangeMakersOnline",
            TotalRaised: "$300,000",
            Supporters: "1500",
            PlatformFee: "2%",
            PaymentFee: "2.3%"
        },]

    

  return <>
      <>
          {/* component */}
          <div className="sm:px-6 w-full max-w-7xl mx-auto">
              {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
           
              <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
                
                  <div className="mt-7 overflow-x-auto">
                      <table className="w-full whitespace-nowrap table">
                          <thead>
                            <tr>

                                  <th className="px-4 py-3">Platform</th>
                                  <th className="px-4 py-3">Total Funds</th>
                                  <th className="px-4 py-3">Supporters</th>
                                  <th className="px-4 py-3">Platform Commission</th>
                                  <th className="px-4 py-3">Processing Charge</th>

                        
                            </tr>


                          </thead>
                          <tbody>
                             {
                                data.map((crowdData) => (
                                    <tr key={crowdData.PlatformFee} className="text-gray-700 text-center">
                                        <td className="px-4 py-3 border text-center">
                                          
                                               
                                                   <p>{crowdData.Platform}</p>
                                               
                                         
                                        </td>
                                        <td className="px-4 py-3 text-ms font-semibold border">{crowdData.TotalRaised}</td>
                                        <td className="px-4 py-3 text-xs border">
                                            {crowdData.Supporters}
                                        </td>
                                        <td className="px-4 py-3 text-sm border">{crowdData.PlatformFee}</td>
                                        <td className="px-4 py-3 text-sm border">{crowdData.PaymentFee}</td>
                                    </tr>
                                ))
                             }
                            
                 
                                 
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
         
      </>

  </>;
};

export default Table;
