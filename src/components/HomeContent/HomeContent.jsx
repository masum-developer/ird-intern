import Image from "next/image";
import React from "react";
import facebook from "../../assets/HomeContentImage/facebook.jpg";
import linkedin from "../../assets/HomeContentImage/linkedin.jpg";
import twitter from "../../assets/HomeContentImage/twitter.jpg";
import link from "../../assets/HomeContentImage/link.jpg";
import vegetable from "../../assets/HomeContentImage/vegetable.jpg";
import apple from "../../assets/HomeContentImage/apple.jpg";
const HomeContent = () => {
  return (
    
    <div className="w-full flex lg:flex-row flex-col-reverse">
      <div className="w-full lg:w-[8%] flex lg:flex-col mt-20 flex-row gap-4">
        <Image className="mb-4" src={facebook} alt="facebook" />
        <Image className="mb-4" src={linkedin} alt="facebook" />
        <Image className="mb-4" src={twitter} alt="facebook" />
        <Image className="mb-4" src={link} alt="facebook" />
      </div>
      <div className="w-full lg:w-[90%]">
        <div className="flex flex-col lg:flex-row mt-5">
            <div className="w-full lg:w-1/2">
                <div><h1 className="text-2xl capitalize text-[#212121] font-black">Health benefits of an avocado</h1></div>
                <div>
                    <h3 className="text-sm font-black">Supports eye health: </h3>
                    <p className="text-sm font-normal">Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.</p>
                </div>
                <div>
                    <h3 className="text-sm font-black">Supports eye health: </h3>
                    <p className="text-sm font-normal">
                    Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.
                    </p>
                </div>

            </div> 
            <div className="w-full lg:w-1/2">
            <Image className="mb-4" src={vegetable} alt="apple" />
            </div>
        </div>
        <div className="mt-5">
          <h3>Supports eye health</h3>
          <p className="text-sm text-justify font-normal">
            Spinach contains high levels of vitamin A and other antioxidants
            that help maintain healthy vision and protect against age-related
            macular degeneration.. Spinach contains high levels of vitamin A and
            other antioxidants that help maintain healthy vision and protect
            against age-related macular degeneration.. Spinach contains high
            levels of vitamin A and other antioxidants that help maintain
            healthy vision and protect against age-related macular
            degeneration.. Spinach contains high levels of vitamin A and other
            antioxidants that help maintain healthy vision and protect against
            age-related macular degeneration.. Spinach contains high levels of
            vitamin A and other antioxidants that help maintain healthy vision
            and protect against age-related macular degeneration.. Spinach
            contains high levels of vitamin A and other antioxidants that help
            maintain healthy vision and protect against age-related macular
            degeneration.. Spinach contains high levels of vitamin A and other
            antioxidants that help maintain healthy vision and protect against
            age-related macular degeneration..
          </p>
        </div>
        <div className="flex flex-col lg:flex-row mt-5 gap-2">
          <div className="w-full lg:w-[55%]">
            <Image className="mb-4 h-[320px]" src={apple} alt="apple" />
          </div>
          <div className="w-full lg:w-[45%]">
            <h3 className="font-black">Supports eye health</h3>
            <p className="text-sm text-justify">
            Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.. Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy 
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default HomeContent;
