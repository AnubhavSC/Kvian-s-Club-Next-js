

export default function leanding() {
    return (
      <main className="bg-white">
        <div className="mainBackgound h-[75vh] md:h-[90vh] ">
          <div className="">
            <div  className="fixed top-0 z-50 mx-auto md:w-[100vw] h-[3.5rem] md:bg-white/90">
              <nav  className=" py-4 bg-transparent  w-[100vw]  md:bg-transparent md:w-0 lg:ml-[60rem] ">
                <div className="lg:hidden">
                  <button id="navbar-burger" className="navbar-burger flex  text-white p-3">
                    <svg className="block h-6 w-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <title>Mobile menu</title>
                      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                  </button>
                </div>
                <ul 
                  className="hidden absolute text-white top-1/2 left-1/2 transform -translate-y-1/2 font-mono -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-16">
                  <li><a className="text-[17px] hover:border-b-2 hover:border-black text-black cursor-pointer" href="Clubs">Clubs</a></li>
                  <li><a className="text-[17px] hover:border-b-2 hover:border-black text-black cursor-pointer" href="Mambers">Mambers</a></li>
                  <li><a className="text-[17px] hover:border-b-2 hover:border-black text-black cursor-pointer" href="Canvas">Canvas</a></li>
                  <li><a className="text-[17px] hover:border-b-2 hover:border-black text-black cursor-pointer" href="plans">Plans</a></li>
                  <li><a className="text-[17px] hover:border-b-2 hover:border-black text-black cursor-pointer" href="School">School</a></li>
                  <li><a className="text-[17px] hover:border-b-2 hover:border-black text-black cursor-pointer" href="Learning">Learning</a></li>
                  <li><a className="text-[17px] hover:border-b-2 hover:border-black text-black cursor-pointer" href="connect">Connect</a></li>
                </ul>
  
              </nav>
            </div>
            <div className="navbar-menu relative z-50 hidden">
              <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
              <nav id="navbar"
                className="fixed top-0  left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                <div className="flex items-center mb-8">
                  <button className="navbar-close">
                    <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                      </path>
                    </svg>
                  </button>
                </div>
                <div>
                  <ul className="space-y-6">
                    <li><a className="text-[18px] cursor-pointer" href="Clubs">Clubs</a></li>
                    <li><a className="text-[18px] cursor-pointer" href="Mambers">Mambers</a></li>
                    <li><a className="text-[18px] cursor-pointer" href="Canvas">Canvas</a></li>
                    <li><a className="text-[17px] cursor-pointer" href="plans">Plans</a></li>
                    <li><a className="text-[17px] cursor-pointer" href="School">School</a></li>
                    <li><a className="text-[17px] cursor-pointer" href="Learning">Learning</a></li>
                    <li><a className="text-[17px] cursor-pointer" href="connect">Connect</a></li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="mx-auto left-[10%] top-[15%] md:top-[25%] 2xl:mx-[10rem] absolute ">
          <div>
            <div>
              <h1 className="uppercase text-white font-kanit text-[2rem]">wellcome to<span className="span-back"><span
                aria-hidden="true" className="centerText">KVIAN's clubs </span>KVIAN's clubs </span></h1>
              <h2
                className=" text-[1.3rem] md:text-[3rem] xl:text-[1.5rem] 2xl:text-[2.5rem] mt-4 md:mt-0 font-bold font-Bebas md:mr-[53rem] 2xl:mr-[50rem] text-white">
             We are branch of clubs from Kendriya Vidyalaya Mangaldai who works together</h2>
            </div>
            <div className="mt-5 md:mt-0">
              <button className="buttonExp"><a className="py-3 px-3 uppercase text-white font-Montserrat" href="">Express
                your thoughts</a></button>
            </div>
          </div>
        </div>
      </main>
    );
  }
  