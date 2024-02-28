
import './App.css'
import { BackgroundGradient } from './components/ui/background-gradient'
import { Meteors } from './components/ui/meteors'
import image from '/men-user.jfif'
import { useNavigate } from "react-router-dom";

import { FaTiktok } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook, FaLinkedin, } from "react-icons/fa6";

export default function App() {

  const navigate = useNavigate();


  return (
    <section className='w-[100%] h-[100vh] p-4 flex justify-center items-center '>
      <BackgroundGradient className="flex flex-col items-center rounded-[22px] w-[100%] min-h-[430px] p-4 sm:p-10 bg-white dark:bg-zinc-900  gap-3">
        <div className="w-max p-1 h-max flex justify-center bg-slate-300 rounded-full">
          <img src={image} alt="uhuy" className='w-[120px] h-[120px] object-cover rounded-full' />
        </div>
        <div className="w-full flex flex-col items-center">
          <p className='text-[.9rem]'>Sastra Pradana</p>
          <h1 className='text-[1.3rem] text-violet-400 font-semibold tracking-wider'>Web Developer</h1>
        </div>
        <div className="w-full flex items-center justify-center gap-4 cursor-pointer">
          <div className="p-1 rounded-full hover:-translate-y-1 duration-200">
            <a href="https://instagram.com/sastrapradn?igshid=NTc4MTIwNjQ2YQ==">
              <RiInstagramFill size={25} fill='white' />
            </a>
          </div>
          <div className="p-1 rounded-full hover:-translate-y-1 duration-200">
            <a href="https://www.facebook.com/sastra.pradana.96?mibextid=ZbWKwL">
              <FaFacebook size={25} fill='white' />
            </a>
          </div>
          <div className="p-1 rounded-full ">
            <a href="https://www.tiktok.com/@sstra_pradana?_t=8di62kSoL34&_r=1">
              <FaTiktok className='hover:-translate-y-1 duration-200' size={23} fill='white' />
            </a>
          </div>
          <div className="p-1 rounded-full ">
            <a href="https://www.linkedin.com/in/sastra-pradana-a9a486297/">
              <FaLinkedin size={23} fill='white' className='hover:-translate-y-1 duration-200' />
            </a>
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-3 mt-4">
          <a href="https://sastrapradana.vercel.app/" className='w-full' target='_blank'>
            <button className="relative w-full inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                My Portfolio
              </span>
            </button>
          </a>

          <button className="relative w-full inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={() => navigate('/services')}>
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              My Services
            </span>
          </button>

        </div>
      </BackgroundGradient>
      <Meteors number={20} />
    </section>
  )
}