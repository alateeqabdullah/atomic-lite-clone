import Image from "next/image";
import Img from "@/public/banner.jpg";

const contents = [
  {
    title: "Module Heading",
    heading: "Atomic Content",
    contentlabel1:
      "Essent accumsan invidunt in pri. Pri enim tincidunt no, ubique doming expetenda te mei. Forensibus voluptaria efficiantur sed ut, mei unum volumus ad.",

    contentlabel2:
      "Sint oratio at per, diam saepe dicam ei sea.At civibus appetere cum, quem habeo in.Eam modo apeirian te, ut altera iisque evertitur sit.Cu saperet inermis aliquando nam, per impetus qualisque interesset ex, vix at omittantur instructior disputationi.",
  },
];

export default function Content() {
  return (
    <main className="  bg-white  ">
      <section className=" mx-5 py-16  ">
        <div className="mb-36 ">
          <ul>
            {contents.map((content, index) => (
              <li key={index} className=" flex justify-between items-center ">
                <div className=" w-[26rem] ">
                  <p className=" uppercase text-sm ">{content.title}</p>
                  <h2 className=" text-3xl my-2 font-bold text-black opacity-90 ">
                    {content.heading}
                  </h2>
                  <p className=" text-lg opacity-90 mt-4 ">
                    {content.contentlabel1}
                  </p>
                  <p className=" text-sm leading-7  opacity-90 mt-4 ">
                    {content.contentlabel2}
                  </p>
                </div>
                <div>
                  <Image
                    src={Img}
                    alt="Content Image"
                    width={640}
                    height={100}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="gap-y-20 " >
          <ul>
            {contents.map((content, index) => (
              <li key={index} className=" flex justify-between items-center ">
                <div>
                  <Image
                    src={Img}
                    alt="Content Image"
                    width={640}
                    height={100}
                  />
                </div>
                <div className=" w-[26rem] ">
                  <p className=" uppercase text-sm ">{content.title}</p>
                  <h2 className=" text-3xl my-2 font-bold text-black opacity-90 ">
                    {content.heading}
                  </h2>
                  <p className=" text-lg opacity-90 mt-4 ">
                    {content.contentlabel1}
                  </p>
                  <p className=" text-sm leading-7  opacity-90 mt-4 ">
                    {content.contentlabel2}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
