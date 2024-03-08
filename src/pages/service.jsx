import { useNavigate } from "react-router-dom";
import { PinContainer } from "../components/ui/3d-pin";

export default function Services() {

  const navigate = useNavigate();


  return (
    <div className="h-max my-6 w-full flex items-center justify-center flex-col gap-16">
      <PinContainer
        title="Order Me"
        href="https://wa.me/6283870915417"

      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[16rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-white tracking-wide">
            Wedding Web
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-400 text-[.9rem]">
              Menciptakan kenangan yang tak terlupakan. Dengan desain yang elegan✨.
            </span>
          </div>
          <div className="mt-3">
            <img src="/wedding.jpg" alt="" className="w-full h-[140px] object-cover rounded-lg" />
          </div>
        </div>
      </PinContainer>

      <div className="w-[85%] -mt-2">
        <button className="bg-violet-500 text-[.9rem] px-4 rounded-md text-white py-[4px] hover:bg-violet-700 duration-300">
          <a href="https://web-wedding-v1.vercel.app/" target="_blank">View</a>
        </button>
      </div>

      <PinContainer
        title="Order Me"
        href="https://wa.me/6283870915417"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[16rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100 tracking-wider">
            Web Skripsi
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 text-[.9rem]">
              Membantu Mewujudkan Skripsi Anda Menjadi Lebih Berkesan! 🖥️🎓
            </span>
          </div>
          <div className="mt-6">
            <img src="/class.jpg" alt="" className="w-full h-[140px] object-cover rounded-lg" />
          </div>
        </div>
      </PinContainer>

      <div className="w-[85%] -mt-2">
        <button className="bg-violet-500 text-[.9rem] px-4 rounded-md text-white py-[4px] hover:bg-violet-700 duration-300">
          <a href="https://classcrafter.vercel.app/" target="_blank">View</a>
        </button>
      </div>

      <div className="w-[90%] flex flex-col items-center gap-3 mt-4">
        <a href="https://wa.me/6283183679470" className='w-full' target='_blank'>
          <button className="relative w-full inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl tracking-wider">
              Order Me
            </span>
          </button>
        </a>

        <button className="relative w-full inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={() => navigate('/')}>
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-red-600 backdrop-blur-3xl ">
            Back To Home
          </span>
        </button>

      </div>
    </div>
  );
}