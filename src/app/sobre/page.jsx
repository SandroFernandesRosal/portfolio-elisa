import Background from '@/components/Background'
import { ImRadioChecked } from 'react-icons/im'
import TimeLine from '@/components/TimeLine'

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center  gap-10 bg-[url(../assets/bg-stars.svg)] bg-cover pb-[20px] pt-[100px] font-Roboto">
      <Background />
      <h1 className="border-b-2 border-pink-500 text-2xl">
        Um pouco sobre mim
      </h1>
      <section className="flex w-[80%] flex-col gap-3 text-justify  md:w-[45%] ">
        <p>
          Sou <span className="text-pink-500">Elisa Rosal</span>, estudante de
          Marketing Digital, pela Universidade Estácio de Sá.
        </p>

        <div className="flex items-center gap-3">
          <ImRadioChecked className="min-w-[20px] font-black text-pink-500" />
          <p>Atuo como Social Media e Gestora de tráfego pago.</p>
        </div>

        <div className="flex items-center gap-3">
          <ImRadioChecked className="min-w-[20px] font-black text-pink-500 " />
          <p>
            Convites e Cartoões: Totalmente personalizados, para qualquer
            evento.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <ImRadioChecked className="min-w-[20px] font-black text-pink-500" />
          <p>Tráfego pago: Turbine suas vendas e suas redes sociais.</p>
        </div>

        <div className="flex items-center gap-3">
          <ImRadioChecked className="min-w-[20px] font-black text-pink-500" />
          <p>
            Criação de sites: Temos um Desenvolvedor Web, para criação de sites
            totalmente personalizados, rápidos e responsivos.
          </p>
        </div>
      </section>

      <TimeLine />
    </main>
  )
}
