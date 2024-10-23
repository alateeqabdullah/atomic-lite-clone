import { IoDiamondOutline } from "react-icons/io5";

const description =
  "Nullam pretium sapien commodo ipsum pulvinar, ut cursus nulla pellentesque.";

const headlineList = [
  {
    title: "Atomic Feature ",
    icon: <IoDiamondOutline />,
    description: description,
  },
  {
    title: "Atomic Feature ",
    icon: <IoDiamondOutline />,
    description: description,
  },
  {
    title: "Atomic Feature ",
    icon: <IoDiamondOutline />,
    description: description,
  },
  {
    title: "Atomic Feature ",
    icon: <IoDiamondOutline />,
    description: description,
  },
  {
    title: "Atomic Feature ",
    icon: <IoDiamondOutline />,
    description: description,
  },
  {
    title: "Atomic Feature ",
    icon: <IoDiamondOutline />,
    description: description,
  },
];
export default function Headline() {
  return (
    <main className=" bg-white h-[130vh] text-black   ">
      <section className=" flex py-14 px-8 justify-between relative items-start  ">
        <div className=" w-14 sticky top-0 ">
          <h2 className=" text-5xl font-bold my-10  ">Atomic Headline</h2>
        </div>
        <div>
          <ul className=" grid grid-cols-3 ">
            {headlineList.map((headline, index) => (
              <li
                key={index}
                className=" p-12  border-none shadow-xl items-center text-left w-72 m-3"
              >
                <div>
                  <i
                    className=" text-red-500 text-4xl
                   "
                  >
                    {headline.icon}
                  </i>
                  <h4 className=" font-bold text-2xl my-4 ">
                    {headline.title}
                  </h4>
                  <label className=" text-[#85868c] ">
                    {headline.description}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
