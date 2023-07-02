export default function TimeLine() {
  return (
    <ul className="relative  w-[75%] overflow-visible border-l border-gray-700 dark:border-gray-700 md:w-[45%]">
      <li className="mb-10 ml-6">
        <span className="absolute  -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-pink-500 ring-8 ring-pink-400/20 ">
          <svg
            aria-hidden="true"
            className="h-3 w-3 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
        <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
          Marketing Digital
          <span className="ml-3 mr-2 rounded bg-pink-500 px-2.5 py-0.5 text-sm font-medium text-white dark:bg-pink-500 dark:text-white">
            2° Período
          </span>
        </h3>
        <time className="mb-2 block overflow-hidden text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          Universidade Estácio de Sá
        </time>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Iniciei o curso em 01/23, com previsão de término em 12/24.
        </p>
      </li>
      <li className="mb-10 ml-6">
        <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-pink-500 ring-8 ring-pink-400/20">
          <svg
            aria-hidden="true"
            className="h-3 w-3 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          Social Media
        </h3>
        <time className=" mb-2 block overflow-hidden text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          Nome da Instituião
        </time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          Descrição do curso.
        </p>
      </li>
      <li className="ml-6">
        <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-pink-500 ring-8 ring-pink-400/20">
          <svg
            aria-hidden="true"
            className="h-3 w-3 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          Tráfego Pago
        </h3>
        <time className="mb-2 block overflow-hidden text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          Nome da instituição
        </time>
        <p className="overflow-hidden text-base font-normal text-gray-500 dark:text-gray-400">
          Descrição do curso.
        </p>
      </li>
    </ul>
  )
}
