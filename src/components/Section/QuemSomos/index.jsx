import React from "react";
import Button from "../../Button";

export default function QuemSomos() {
  return (
    <div className="px-10 py-10 bg-dark-green mt-20">
      <div className="flex mt-10 justify-between">
        <div className="max-w-3xl flex flex-col items-start gap-6">
          <h1 className="text-beige uppercase font-bold">quemsomo</h1>
          <h1 className="text-[#BCFFAD] uppercase font-bold text-3xl">
            primeirairgj
          </h1>
          <p className="text-beige">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, sed
            quaerat quod dolor odit dolores provident, magni exercitationem
            optio tenetur dignissimos aperiam, mollitia dolorem iure voluptatum.
            Similique, aut quae? Tenetur? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aut sint quis numquam aliquam cumque praesentium
            labore perspiciatis corrupti accusamus porro quia, magni ut atque.
            Repellat ab repudiandae placeat debitis a! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Error, sed quaerat quod dolor
            odit dolores provident, magni exercitationem optio tenetur
            dignissimos aperiam, mollitia dolorem iure voluptatum. Similique,
            aut quae? Tenetur? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aut sint quis numquam aliquam cumque praesentium
            labore perspiciatis corrupti accusamus porro quia, magni ut atque.
            Repellat ab repudiandae placeat debitis a!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Error, sed quaerat quod dolor odit
            dolores provident, magni exercitationem optio tenetur dignissimos
            aperiam, mollitia dolorem iure voluptatum. Similique, aut quae?
            Tenetur? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aut sint quis numquam aliquam cumque praesentium labore perspiciatis
            corrupti accusamus porro quia, magni ut atque. Repellat ab
            repudiandae placeat debitis a!
          </p>
          <Button>Saiba mais</Button>
        </div>
        <div className="flex">
          <img src="https://placehold.co/500" alt="" />
        </div>
      </div>
    </div>
  );
}
