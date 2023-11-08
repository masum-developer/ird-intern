import Image from "next/image";
import React from "react";
import facebook from "../../assets/HomeContentImage/facebook.jpg";
import apple from "../../assets/HomeContentImage/apple.jpg";
const HomeContent = () => {
  return (
    <div className="w-full flex">
      <div className="w-[8%] flex-col mt-20">
        <Image className="mb-4" src={facebook} alt="facebook" />
        <Image className="mb-4" src={facebook} alt="facebook" />
        <Image className="mb-4" src={facebook} alt="facebook" />
        <Image className="mb-4" src={facebook} alt="facebook" />
      </div>
      <div className="w-[90%]">
        <div className="flex mt-5">
            <div className="w-1/2">
                <div><h1>Health benefits of an avocado</h1></div>
                <div>
                    <h3>Supports eye health: </h3>
                    <p className="text-sm">Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.</p>
                </div>
                <div>
                    <h3>Supports eye health: </h3>
                    <p className="text-sm">
                    Spinach contains high levels of vitamin A and other antioxidants that help maintain healthy vision and protect against age-related macular degeneration.
                    </p>
                </div>

            </div>
            <div className="w-1/2">
            <Image className="mb-4" src={apple} alt="apple" />
            </div>
        </div>
        <div className="mt-5">
          <h3>Supports eye health</h3>
          <p className="text-sm">
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
        <div className="flex mt-5 gap-2">
          <div className="w-1/2">
            <Image className="mb-4" src={apple} alt="apple" />
          </div>
          <div className="w-1/2">
            <h3>Supports eye health</h3>
            <p className="text-sm">
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
