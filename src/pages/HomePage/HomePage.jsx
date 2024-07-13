import React from "react";
import MainCarosel from "../../Customer/Components/HomeCarosel/MainCarosel";
import HomeSectionCarosel from "../../Customer/Components/HomeSectionCarosel/HomeSectionCarosel";
import { mens_kurta } from "../../Data/mens_kurta";


const HomePage = ()=>{
    // console.log(mens_kurta);
    return(
        <div>
            <MainCarosel></MainCarosel>
            <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
                <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"}/>
                <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shoes"}/>
                <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shirt"}/>
                <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Saree"}/>
                <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Dress"}/>
                {/* <HomeSectionCarosel data={mens_kurta}/> */}
            </div>
        </div>
    )
}

export default HomePage;