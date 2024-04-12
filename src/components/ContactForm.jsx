import React, { useState } from 'react';
import { useForm } from "react-hook-form"

export default function ContactForm() {

  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const sendEmail = async (data) => {

    const response = await fetch(`https://expressjs-production-c0bb.up.railway.app/send?name=${data.name}&email=${data.email}&message=${data.message}`);

    if (response.ok) {
      console.log('Email sent');
      setSent(true);
    } else {
      console.error('Error sending email');
    }

  };

  const onSubmit = async (data) => {
    setSent(false);
    setLoading(true);
    await sendEmail(data);
    reset();
    setLoading(false);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Nombre</span>
          </div>
          <input {...register('name', {required: true})} type="text" placeholder="María Perez" className="input input-bordered w-full" />
          {errors.name && <span className="pt-1 label-text-alt text-danger">Este campo es requerido</span>}
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Correo electrónico</span>
          </div>
          <input {...register('email', {required: true})} type="email" placeholder="mariaperez@gmail.com" className="input input-bordered w-full" />
          {errors.email && (<span className="pt-1 label-text-alt text-danger">Este campo es requerido</span>)}
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Mensaje</span>
          </div>
          <textarea {...register('message', {required: true})} className="textarea textarea-bordered" placeholder="Escriba su mensaje"></textarea>
          {errors.message && (<span className="pt-1 label-text-alt text-danger">Este campo es requerido</span>)}
        </label>
        <button type='submit' disabled={loading} className="mt-2 btn bg-secondary hover:bg-primary text-white w-full">
          {loading && <span className="loading loading-spinner"></span>}
          Enviar mensaje
        </button>
      </form>
      {sent && (
        <div role="alert" className="alert alert-success mt-4 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>Hemos recibido su mensaje. ¡Gracias por escribir!</span>
        </div>
      )}
    </>
  )
}