import Cta from "./cta";
import Navs from "./navs";

export default function Header() {
  return (
    <header className=" h-screen tracking-wide relative   ">
      <Navs />
      <section className="text-center w-[600px] text-white mx-auto items-center justify-center my-[30vh]  ">
        <div className=" absolute top-[35%] h-10  bg-slate-300 w-[1px] text-center right-[50vw] " />
        <h1 className=" m-2 font-bold text-5xl  ">Atomic Lite - Home</h1>
        <p className=" mt-3 ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum eum
          illum ullam ea, ex laudantium!
        </p>
       <Cta />
        <div className=" absolute h-10 mt-8  bg-slate-300 w-[1px] text-center right-[50vw] " >
          
        </div>
      </section>
    </header>
  );
}
