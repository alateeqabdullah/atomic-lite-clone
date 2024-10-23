import { FaCalendarCheck, FaRocket, FaTrophy } from "react-icons/fa";

const glanceList = [
  {
    number: 3250,
    icon: <FaRocket />,
    title: "Active Clients",
    description: "Efficiently manage your sales and track customer orders.",
  },

  {
    title: "Years Experience",
    number: 25,
    icon: <FaCalendarCheck />,
    description:
      "Experience the power of Atomic Lite in your sales and marketing.",
  },
  {
    title: "Awards Won",
    number: 10,
    icon: <FaTrophy />,
    description: "Showcase your sales success and achieve your goals.",
  },
];

export default function Current() {
  return (
    <main className=" bg-[#682670]  ">
      <section className=" text-white flex items-center py-12 px-6 ">
        <div>
          <h1 className=" text-3xl font-bold w-40 ">At a Glance</h1>
        </div>

        <div className=" ml-28 " >
          <ul className=" flex font-[550]  ">
            {glanceList.map((glance, index) => (
              <li key={index} className=" flex  ">
                <span className="text-4xl mx-4 text-red-500 ">
                  {glance.icon}
                </span>
                <div className="flex flex-col ">
                  <h3 className=" flex  mb-4  ">
                    <span className=" text-4xl font-bold  ">
                      {glance.number}
                    </span>
                    <p className=" mt-3 mx-2 ">{glance.title}</p>
                  </h3>
                  <label>{glance.description}</label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
