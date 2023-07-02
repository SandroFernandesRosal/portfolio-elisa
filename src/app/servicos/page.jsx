import Services from '@/components/Services'
import Background from '@/components/Background'

export default function MyServices() {
  return (
    <main className="bg-[url(../assets/bg-stars.svg) flex min-h-screen flex-col items-center gap-10 pt-[100px] font-Roboto">
      <Background />
      <h1 className="border-b-2 border-pink-500 text-2xl">Meus serviços</h1>
      <Services />
    </main>
  )
}
