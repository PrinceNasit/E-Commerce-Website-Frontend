import React from "react";
import MainCarosel from "../../Customer/Components/HomeCarosel/MainCarosel";
import HomeSectionCarosel from "../../Customer/Components/HomeSectionCarosel/HomeSectionCarosel";
import { mens_kurta } from "../../Data/mens_kurta";
import { Shoes } from "../../Data/shoes";
import { mens_shirt } from "../../Data/mens_shirt";
import { women_top } from "../../Data/women_saree";
import { women_dress } from "../../Data/women_dress";


const HomePage = ()=>{
    // console.log(mens_kurta);
    return(
        <div>
            <MainCarosel></MainCarosel>
            <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
                <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shirt"}/>
                <HomeSectionCarosel data={Shoes} sectionName={"Men's Shoes"}/>
                <HomeSectionCarosel data={mens_shirt} sectionName={"Men's Shirt"}/>
                <HomeSectionCarosel data={women_top} sectionName={"Women's Saree"}/>
                <HomeSectionCarosel data={women_dress} sectionName={"Women's Dress"}/>
                {/* <HomeSectionCarosel data={mens_kurta}/> */}
            </div>
        </div>
    )
}

export default HomePage;