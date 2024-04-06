import React from 'react';
import { useForm } from "react-hook-form"

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

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
        <button type='submit' className="mt-2 btn bg-secondary hover:bg-primary text-white w-full">Enviar mensaje</button>
      </form>
    </>
  )
}