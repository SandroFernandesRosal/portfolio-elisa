import Socials from './Socials'

export default function Footer() {
  return (
    <footer className="flex h-[100px] flex-col items-center justify-evenly border-t-2 border-solid border-y-black bg-pink-500  font-bold text-white dark:border-y-pink-900 dark:bg-black ">
      <p>Elisa Rosal - Social media e Gestora de tráfego pago</p>

      <Socials />
    </footer>
  )
}
