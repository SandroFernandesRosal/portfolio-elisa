'use client'

import Background from '@/components/Background'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { BiHappyAlt } from 'react-icons/bi'
import Socials from '@/components/Socials'

export default function Contact() {
  const form = useRef()

  const [nameInput, setNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [assuntoInput, setAssuntoInput] = useState('')
  const [textInput, setTextInput] = useState('')
  const [alert, setAlert] = useState(false)

  const timeoutRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'gmailsfr',
        'template_mumsd62',
        form.current,
        'n_VePloj0wX6t-MH9',
      )
      .then(
        () => {
          alert === false ? setAlert(true) : setAlert(false)

          clearTimeout(timeoutRef.current)
          timeoutRef.current = setTimeout(() => {
            setAlert(false)
          }, 2000)
        },
        (error) => {
          alert(error.mensagem)
        },
      )
    setNameInput('')
    setEmailInput('')
    setAssuntoInput('')
    setTextInput('')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-[url(../assets/bg-stars.svg)] bg-cover pb-[20px] pt-[100px]">
      <Background />
      <h1 className="border-b-2 border-pink-500 text-2xl">Entre em contato</h1>
      {alert && (
        <div className="z-40 flex items-center  justify-center gap-1 rounded-lg border-[1px] border-solid p-[10px] font-black">
          Mensagem enviada com sucesso!{' '}
          <BiHappyAlt className="text-[30px] text-pink-500" />
        </div>
      )}

      <form
        ref={form}
        onSubmit={onSubmit}
        name="form"
        className="z-10 flex w-[75%] max-w-[500px] flex-col rounded-br-3xl rounded-tl-3xl border-[1px] border-solid border-pink-500 bg-transparent p-[15px] "
      >
        <Socials />

        <input
          required={true}
          type="text"
          name="nome"
          id="nome"
          placeholder="Digite seu nome"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          className="m-[3px] cursor-pointer rounded-br-3xl  rounded-tl-3xl border-[2px] border-solid border-pink-500 bg-transparent p-[5px] text-center font-black focus:border-pink-500 focus:ring-0"
        />

        <input
          required={true}
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu email"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          className="m-[3px] cursor-pointer rounded-br-3xl  rounded-tl-3xl border-[2px] border-solid border-pink-500 bg-transparent p-[5px] text-center font-black focus:border-pink-500 focus:ring-0 "
        />

        <input
          required={true}
          type="text"
          name="assunto"
          id="assunto"
          placeholder="Digite o assunto"
          value={assuntoInput}
          onChange={(e) => setAssuntoInput(e.target.value)}
          className="m-[3px] cursor-pointer rounded-br-3xl  rounded-tl-3xl border-[2px] border-solid border-pink-500 bg-transparent p-[5px] text-center font-black focus:border-pink-500 focus:ring-0 "
        />

        <textarea
          required={true}
          name="mensagem"
          id="mensagem"
          cols="30"
          rows="10"
          placeholder="Digite sua mensagem"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          className="m-[3px] cursor-pointer rounded-br-3xl  rounded-tl-3xl border-[2px] border-solid border-pink-500 bg-transparent p-[5px] text-center font-black focus:border-pink-500 focus:ring-0 "
        ></textarea>

        <button
          type="submit"
          name="submit"
          className="m-[auto] mt-[10px] h-[10%] w-[40%]  cursor-pointer rounded-lg border-[2px]  border-none bg-pink-500 font-black hover:bg-pink-400"
        >
          Enviar
        </button>
      </form>
    </main>
  )
}
