import Image from 'next/image'
import elisa from '../../public/images/elisa.png'
import Background from '@/components/Background'
import Services from '@/components/Services'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-[url(../assets/bg-stars.svg)] bg-cover pb-[20px] pt-[100px] font-Roboto">
      <Background />

      <div className="z-9 flex w-full flex-wrap items-center justify-evenly gap-10">
        <section className="flex w-[400px] flex-col items-center justify-center">
          <h1 className="overflow-hidden font-Cookie text-5xl font-bold text-pink-500">
            Elisa Rosal
          </h1>
          <p>Estudante de Marketing Digital</p>
          <p>Social media e Gestora de trafego pago</p>

          <div className="flex w-[100%] justify-center gap-2 pt-2">
            <Link href="/sobre">
              <button className="text-md z-10 flex h-[30px] w-[100px] items-center justify-center rounded-full  bg-pink-500 text-white hover:bg-pink-300">
                Saiba Mais
              </button>
            </Link>

            <button className="text-md z-10 flex h-[30px] w-[100px] items-center justify-center rounded-full bg-pink-500 text-white hover:bg-pink-300">
              Currículo
            </button>
          </div>
        </section>

        <div className=" z-10 flex h-[225px] w-[200px] items-center justify-center overflow-hidden rounded-bl-[55%] rounded-br-[35%] rounded-tl-[50%]  rounded-tr-[70%] border-[1px] border-solid border-pink-500 hover:bg-gray-400 dark:hover:bg-black">
          <Image src={elisa} alt="" width={200} height={300} />
        </div>
      </div>

      <Services />

      <section className="flex w-full justify-center font-black">
        <Link href="/contato">
          <button className=" flex h-[40px] w-[150px] items-center justify-center rounded-full bg-pink-500 text-lg  font-normal text-white hover:bg-pink-300 ">
            Orçamento
          </button>
        </Link>
      </section>
    </main>
  )
}
