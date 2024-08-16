import ValueCard from "./ValueCard";

export default function OurValues() {
  const valueData = [
    {
      Image: "/assets/imgs/value-shape1.svg",
      heading: "Sustainability",
      description:
        "We believe the best way to reach one's potential is by building skills and habits that compound in value over time. Our systems and approach are structured to favor long-term success.",
    },
    {
      Image: "/assets/imgs/value-shape2.svg",
      heading: "Integrity",
      description:
        "In pursuit of building a fair and valuable system, we evaluate our products' value chains across all stakeholders, consider the veil of ignorance framework, and aim to align incentive structures creating synergy towards the common goal of maximizing our society's health and performance.",
    },
    {
      Image: "/assets/imgs/value-shape3.svg",
      heading: "Excellence",
      description:
        "Though perfection won't be found, we are always pursuing better, and asking how else we can add value to the Xelik experience. We instill this mindset in all that we do, and seek out partners who aim to do the same.  ",
    },
    {
      Image: "/assets/imgs/value-shape4.svg",
      heading: "Empowerment",
      description:
        "We aim to provide the means for people to achieve the highest version of themselves, and we look to provide novel solutions that address challenges hindering life quality.",
    },
  ];

  return (
    <div className="flex flex-col xl:px-28 px-10 gap-[20px] items-center ">
      <div className="flex ">
        <div className="flex flex-col  items-center  gap-3">
          <div className="flex gap-6 items-center">
            <div className="xl:hidden">
              <img
                className="w-[8vw] text-center"
                src="/assets/imgs/Arrow Small.svg"
                alt=""
              />
            </div>

            <div className="text-[#fff] text-[40px] ">Our Values</div>
            <div className="xl:hidden">
              <img
                className="w-[8vw] text-center"
                src="/assets/imgs/value-rightarrow.svg"
                alt=""
              />
            </div>
          </div>

          <img
            className="hidden xl:flex"
            src="/assets/imgs/value-line.svg"
            alt=""
          />
        </div>
      </div>
      <div className="xl:flex xl:justify-between grid gap-10 w-full h-full">
        {valueData.map((value, index) => {
          return <ValueCard key={index} content={value} />;
        })}
      </div>
    </div>
  );
}
