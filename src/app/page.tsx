import Image from "next/image";
import Landing from "./components/Landing";


export default function Home() {
  return (
    <main>
      <div>
        <Landing/>
      </div>
      <section className="h-[100vh] bg-white">
        <div className="md:mx-[10rem] 2xl:mx-[30rem]">
          <div>
            <div className="mt-[4rem] mx-4 md:mx-0">
              <h1 className="font-Montserrat text-[2rem] md:text-[40px] text-black uppercase">Discover the joy of <span
                className="multiColor">creating</span>, somthing.</h1>
              <p className="mt-3 md:mt-0 lg:mr-[17rem] md:text-[20px] text-black">Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Hic placeat dolore asperiores nulla. Cupiditate veniam provident, iste a sint eum ab eaque
                explicabo aspernatur maxime consectetur nemo, itaque tempora et?</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
