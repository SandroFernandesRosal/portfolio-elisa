export default function Service({ h1, children }) {
  return (
    <section className="m-[0px_12px_24px_12px] flex h-[200px] w-[200px] flex-col items-center justify-evenly rounded-2xl border-none bg-white	 shadow-lg  shadow-black/40  dark:bg-gray-900 dark:shadow-gray-600/40 ">
      <h1 className="text-2xl text-pink-500">{h1}</h1>

      <div className="items-start">{children}</div>
    </section>
  )
}
