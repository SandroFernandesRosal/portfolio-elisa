import {
  BsPersonVcard,
  BsPostcardHeart,
  BsCardImage,
  BsInstagram,
} from 'react-icons/bs'
import { ImGoogle2 } from 'react-icons/im'
import {
  FaFacebookSquare,
  FaBlogger,
  FaGlobe,
  FaHouseUser,
  FaLandmark,
} from 'react-icons/fa'
import Service from './ServiceItem'

export default function Services() {
  return (
    <section className="z-10 flex  flex-wrap justify-center font-Roboto">
      <Service h1="Convites">
        <div className="flex flex-row items-center justify-between gap-3">
          <p>Casamento</p>{' '}
          <BsPostcardHeart className="text-[30px] text-pink-500" />
        </div>

        <div className="flex flex-row items-center justify-between gap-3">
          <p>Aniversário</p>{' '}
          <BsPersonVcard className="text-[30px] text-pink-500" />
        </div>

        <div className="flex flex-row items-center justify-between gap-3">
          <p>Outros eventos</p>{' '}
          <BsCardImage className="text-[30px] text-pink-500" />
        </div>
      </Service>

      <Service h1="Cartões">
        <div className="flex flex-row items-center justify-between gap-3">
          <p>Aniversário</p>{' '}
          <BsPostcardHeart className="text-[30px] text-pink-500" />
        </div>

        <div className="flex flex-row items-center justify-between gap-3">
          <p>Visita</p> <BsPersonVcard className="text-[30px] text-pink-500" />
        </div>

        <div className="flex flex-row items-center justify-between gap-3">
          <p>Outros eventos</p>{' '}
          <BsCardImage className="text-[30px] text-pink-500" />
        </div>
      </Service>

      <Service h1="Tráfego pago">
        <div className="flex flex-row items-center justify-between gap-3 pb-[5px]">
          <p>Google</p> <ImGoogle2 className="text-[25px] text-pink-500" />
        </div>

        <div className="flex flex-row items-center justify-between gap-3 pb-[5px]">
          <p>Facebook</p>{' '}
          <FaFacebookSquare className="text-[25px] text-pink-500" />
        </div>

        <div className="flex flex-row items-center justify-between gap-3">
          <p>Instagram</p> <BsInstagram className="text-[25px] text-pink-500" />
        </div>
      </Service>

      <Service h1="Criação de logo">
        <div className="flex flex-row items-center justify-between gap-3 pb-[5px]">
          <p>Site pessoal</p> <FaGlobe className="text-[25px] text-pink-500" />
        </div>

        <div className="flex flex-row items-center justify-between gap-3 pb-[5px]">
          <p>Empresa</p> <FaLandmark className="text-[25px] text-pink-500" />
        </div>

        <div className="flex flex-row items-center justify-between gap-3">
          <p>Blog</p> <FaBlogger className="text-[25px] text-pink-500" />
        </div>
      </Service>

      <Service h1="Criação de sites">
        <div className="flex flex-row items-center justify-between gap-3  pb-[5px]">
          <p>Site pessoal</p> <FaGlobe className="text-[25px] text-pink-500" />
        </div>

        <div className="flex flex-row items-center justify-between gap-3  pb-[5px]">
          <p>Site institucional</p>{' '}
          <FaLandmark className="text-[25px] text-pink-500" />
        </div>

        <div className="flex flex-row items-center justify-between gap-3 ">
          <p>Landing page</p>{' '}
          <FaHouseUser className="text-[25px] text-pink-500" />
        </div>
      </Service>
    </section>
  )
}
