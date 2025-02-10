"use client"
import React , {useState} from 'react'
import Calender from '@/components/calenderCompo/Calender'
import {BiTime} from 'react-icons/bi'

import toast, { Toaster } from 'react-hot-toast';
import { startOfToday } from 'date-fns'
import emailjs from 'emailjs-com';
import { DigitalTime  } from "react-clock-select";

import { useSelector } from 'react-redux';

const CalenderPage = () => {
  const state = useSelector(state => state.lang)  
  
  let today = startOfToday()
    let [selectedDay, setSelectedDay] = useState(today)
    const [selectedTime , setSelectedTime] = useState()
  
    const [fields , setFields] = useState({
      name : "",
      email : '',
      phone : "",
      callMode : "",
      textMessageNum : ""      
    })
  
    const [step , setStep] = useState(false)
    const handleSubmit = (e) => {
      e.preventDefault();
    
      const { name, email, phone, callMode, textMessageNum } = fields;
    
      // Construct the mailto URL
      const mailtoLink = `mailto:example@gmail.com?subject=New Inquiry from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0ACall Mode: ${callMode}%0D%0AMessage Number: ${textMessageNum}%0D%0ASelected Date: ${selectedDay}%0D%0ASelected Time: ${selectedTime}`;
    
      // Open the mailto link to send the email using the user's default email client
      window.location.href = mailtoLink;
    
      // Optionally clear the form fields after submission
      setFields({ name: '', email: '', phone: '', callMode: '', textMessageNum: '' });
    
      // Show a success message

    };
    
  
    return (
      <div className='w-full flex flex-col min-h-fit gap-y-10  items-center  py-20 ' >
        <Toaster/>  
          <div className='w-full flex max-lg:flex-col  max-lg:items-center items-start justify-center ' >
            <div className='max-lg:w-[100%] max-lg:items-center max-lg:flex max-lg:flex-col  w-[30%] px-3 ' >
                <div>
                   <small className='text-[#ffffff]'> {state.value === "Eng" ? "Programantum infoSystem" : "Programantum sistema de información"} </small>
                   <h1 className='text-[#ffffff] text-2xl capitalize max-lg:mt-[20px] '> {state.value === "Eng" ? "Introduction Call With Programantum infosystem" : "Introducción Llamada con Programantum sistema de información"} </h1>
                   <div className='py-2' >
                      <p className='flex items-center text-gray' ><span><BiTime/></span> {state.value === "Eng" ? "30 min" : "30 minutos" }</p>
                   </div>
                   <div>
                    <h3 className='max-lg:mt-[20px]' > {state.value === "Eng" ? "Agenda" : "Orden del día"}:</h3>
                    <ul className='list-disc ps-4 mt-3 '  >
                      <li> {state.value === "Eng" ? "Introduction of Programantum infoSystem" : "Introducción de Programantum sistema de información"}</li>
                      <li> {state.value === "Eng" ? "Requirement understanding" : "Comprensión de requisitos"} </li>
                      <li> {state.value === "Eng" ? "Similar work showcase" : "Muestra de trabajos similares"} </li>
                      <li> {state.value === "Eng" ? "Next actions" : "Próximas acciones"} </li>
                    </ul>
                   </div>
                </div>
  
            </div>
            <div className='flex flex-col border bg-purple-500/5 backdrop-blur-[100px] border-[#DBE600] max-sm:w-full  rounded-xl max-lg:flex-col gap-[40px] max-lg:mt-[40px]   min-w-[30%]  ' >
              {
                !step ?
                <>
                <Calender selectedDay = {selectedDay} setSelectedDay = {setSelectedDay} />
                <div className='px-6 flex flex-col gap-3' >
                  <h1 className='text-[#ffffff] text-2xl' > {state.value === "Eng" ? "Select Time" : "Seleccionar hora"} </h1>
                <DigitalTime               
             type={"picker"}
             value={selectedTime}
             placeholder={"Select Time.."}
             hoursFormat={12}
             color  = {"#000"}
             size={2}
             selectorPosition={"top"}
             liveUpdater={true}
             baseColor={"black"}
             hourHandColor={"white"}
             minuteHandColor={"#000"}
             secondHandColor={"#000"}
             onConfirm={(e,value)=>{
              console.log('time' , value.time_string)
              setSelectedTime(value.time_string)
            
             }}
          />
              </div>
              </>
              :
              <div className='px-5'   >
                 <h1 className='text-2xl text-gray py-3' >{state.value === "Eng" ? "Enter Details" : "Ingrese detalles"}:</h1>
                <form className='flex  shadow-md px-3 max-sm:w-full  max-lg:w-[400px] rounded-[20px]  py-3 flex-col gap-y-4 ' >
                  <div className='flex flex-col' >
                    <label >
                       {state.value === "Eng" ? "Name" : "Nombre"}  <span className='text-red-500' >*</span>
                    </label>
                      <input name='name' value={fields.name} onChange={e => setFields({...fields , name : e.target.value})}  type="text" className='py-2 border-blue border rounded-md px-3' placeholder='Enter Your Name'  />
                  </div>
                  <div className='flex flex-col' >
                    <label >
                       {state.value === "Eng" ? "Email" : "Correo electrónico"} <span className='text-red-500' >*</span>
                    </label>
                      <input type="email" name='email' value={fields.email} onChange={e => setFields({...fields , email : e.target.value})} className='py-2 border-blue border rounded-md px-3' placeholder='Enter Your Email'  />
                  </div>
                  <div className='flex flex-col' >
                    <label >
                      {state.value === "Eng" ? "Phone Number" : "Número de teléfono"}
                        <span className='text-red-500' >*</span>
                    </label>
                      <input type="text" name='phone' value={fields.phone} onChange={e => setFields({...fields , phone : e.target.value})} className='py-2 border-blue border rounded-md px-3' placeholder='Enter Your Phone'  />
                  </div>
               
                  <div className='flex flex-col' >
                  <label>
                      {state.value === "Eng" ? "Preferred Contact Mode" : "Modo de contacto preferido"}  <span className='text-red-500' >*</span>
                    
                    </label>
                    <select  className='py-2 text-[#000] w-full overflow-hidden border-blue border rounded-md px-3'  name='name' value={fields.callMode} onChange={e => setFields({...fields , callMode : e.target.value})} >
                        <option style={{width : '100px'}} value="Zoom_Call" > {state.value === "Eng"  ? "Zoom Conference Call" : "Llamada de conferencia de Zoom"}  </option>
                        <option  style={{width : '100px'}} value="phone_Call" > {state.value === "Eng" ? "Phone Call" : "Llamada telefónica"}  </option>
                        <option  style={{width : '100px'}} value="whatsApp_Call" > {state.value === "Eng" ? "Whatsapp Call" : "llamada whatsapp"} </option>
                      </select>
                  </div>
                  <div className='flex flex-col' >
                  <label>
                        {state.value === "Eng" ? "Send text messages to" : "Enviar mensajes de texto a"}<span className='text-red-500' >*</span>
                    
                    </label>
                    <input type="text" name='textMessageNum' value={fields.textMessageNum} onChange={e => setFields({...fields , textMessageNum : e.target.value})}  className='py-2 border-blue border text-black rounded-md px-3' placeholder='Enter Your Text Number'  />
                  </div>
               
                  
                    <button onClick={handleSubmit} className='bg-[#DBE600] text-black font-semibold rounded-xl px-8 py-2 mt-4' >{state.value === "Eng" ? "Schedule Event" : "Programar evento"}</button>
                </form>
              </div>
              }
              <div className='flex justify-center py-[20px]' >
                {
                  !step ?
                <button className=' text-white border border-[#fff] h-[40px] px-10 py-2' onClick={()=>setStep(!step)} > {state.value === "Eng" ? "Next" : "Próximo"}</button>
               :
                <button className=' text-white border border-[#fff]  h-[40px] px-10 py-2' onClick={()=>setStep(!step)} > {state.value === "Eng" ? "Prev" : "Anterior"} </button>
               }
              </div>
            </div>
          </div>
      </div>
      
    )
}

export default CalenderPage
