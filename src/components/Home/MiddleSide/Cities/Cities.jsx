const Cities = () => {
    return (
        <div className="bg-primary rounded-[10px] w-full h-fit">
            <div className="flex flex-col gap-[17.5px] py-8">
                {citiesData.map((city, idx) => (
                    <>
                        <div key={idx} className="grid grid-cols-3 gap-5 px-10">
                            {city.places.map((place, index) => (
                                <div key={index}>
                                    <p className="text-btnColor underline font-poppins text-[14px]">{place}</p>
                                </div>))}
                        </div>
                        {idx !== citiesData.length - 1 && <div className="w-full h-[1px] bg-borderOne"></div>}
                    </>
                ))}
            </div>
        </div>
    );
};

export default Cities;

const citiesData = [
    {
        places: [
            "Atlanta, GA",
            "Indianapolis, IN",
            "Philadelphia, PA"
        ]
    },
    {
        places: [
            "Boston, MA",
            "Jacksonville, FL",
            "Queens, NY"
        ]
    },
    {
        places: [
            "Chicago, IL",
            "Kansas City, MO",
            "Raleigh, NC"
        ]
    },
    {
        places: [
            "Chicago, IL",
            "Los Angeles, CA",
            "San Antonio, TX"
        ]
    },
    {
        places: [
            "El Paso, TX",
            "Miami, FL",
            "Tucson, AZ"
        ]
    },
    {
        places: [
            "Fresno, CA",
            "Nashville, TN",
            "Upland, CA"
        ]
    },
    {
        places: [
            "Houston, TX",
            "Oklahoma City, OK",
            "Washington, D.C."
        ]
    }
];


