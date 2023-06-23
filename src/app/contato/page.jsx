"use client"

import Background from "@/components/Background"
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import {BiHappyAlt} from "react-icons/bi";

export default function Contact () {

  const form = useRef();

 const [nameInput, setNameInput] = useState('')
 const [emailInput, setEmailInput] = useState('')
 const [assuntoInput, setAssuntoInput] = useState('')
 const [textInput, setTextInput] = useState('')
 const [alert , setAlert ] = useState(false)

 const timeoutRef = useRef()

 const onSubmit = (e) => {
  e.preventDefault();
  
    emailjs.sendForm('gmailsfr', 'template_mumsd62', form.current, 'n_VePloj0wX6t-MH9')
      .then(() => {
        
        alert === false ? setAlert(true) : setAlert(false)
          
        clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => {
          setAlert(false)
        }, 2000);

      }, (error) => {
          alert(error.mensagem);
      });
      setNameInput('');
      setEmailInput('');
      setAssuntoInput('');
      setTextInput('');
      
      
 }

  return(
    <main className="flex min-h-screen flex-col items-center justify-center pt-[100px] pb-[20px] gap-10 bg-[url(../assets/bg-stars.svg)] bg-cover">
      <Background />
      <h1 className="text-2xl">Contato</h1>
      {alert && <div className="flex items-center justify-center  z-40 font-black border-[1px] border-solid rounded-lg p-[10px] gap-1" >Mensagem enviada com sucesso! <BiHappyAlt className="text-[30px] text-pink-500" /></div>} 

      <form ref={form} onSubmit={onSubmit}  name="form" className="flex flex-col w-[75%] max-w-[500px] rounded-tl-3xl rounded-br-3xl p-[15px] border-solid border-pink-500 border-[1px] bg-transparent z-10 ">
            
            <input required={true}  type="text" name="nome" id="nome" placeholder="Digite seu nome" value={nameInput} onChange={(e) => setNameInput(e.target.value)} className="m-[3px] p-[5px] text-center  border-solid border-[2px] border-pink-500 rounded-tl-3xl rounded-br-3xl cursor-pointer font-black bg-transparent focus:outline-none " />

            <input  required={true} type="email" name="email" id="email" placeholder="Digite seu email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} className="m-[3px] p-[5px] text-center  border-solid border-[2px] border-pink-500 rounded-tl-3xl rounded-br-3xl cursor-pointer font-black bg-transparent focus:outline-none " />

            <input required={true} type="text" name="assunto" id="assunto" placeholder="Digite o assunto" value={assuntoInput} onChange={(e) => setAssuntoInput(e.target.value)} className="m-[3px] p-[5px] text-center  border-solid border-[2px] border-pink-500 rounded-tl-3xl rounded-br-3xl cursor-pointer font-black bg-transparent focus:outline-none "/>

            <textarea required={true} name="mensagem" id="mensagem" cols="30" rows="10" placeholder="Digite sua mensagem" value={textInput} onChange={(e) => setTextInput(e.target.value)} className="m-[3px] p-[5px] text-center  border-solid border-[2px] border-pink-500 rounded-tl-3xl rounded-br-3xl cursor-pointer font-black bg-transparent focus:outline-none " ></textarea>

            <button type="submit" name="submit" className="w-[40%] h-[10%] m-[auto] mt-[10px]  bg-transparent rounded-lg border-[2px] border-solid border-pink-500 cursor-pointer font-black hover:bg-pink-500">Enviar</button>
          </form>
    </main>
  )
}