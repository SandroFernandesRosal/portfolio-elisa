import Background from '@/components/Background'
import Services from '@/components/Services'

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-[url(../assets/bg-stars.svg)] bg-cover pb-[20px] pt-[100px]">
      <Background />
      <h1 className="text-2xl text-pink-500">Um pouco sobre mim</h1>
      <section className="flex w-[80%] flex-col gap-3 text-justify md:w-[50%]">
        <p>
          Sou <span className="text-pink-500">Elisa Rosal</span>, estudante de
          Marketing Digital, pela Universidade Estácio de Sá.
        </p>

        <p>Atuo como Social Media e Gestora de tráfego pago</p>
        <p>
          Para criação de sites, temos um Desenvolvedor Web, que utiliza tudo
          que há de mais moderno para criação de sites totalmente
          personalizados, rápidos e responsivos (adaptável a qualquer tela).
        </p>
      </section>

      <Services />
    </main>
  )
}
