import React from 'react';

export default function ContactForm() {
  return (
    <>
      <div>
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text font-semibold">Nombre</span>
          </div>
          <input type="text" placeholder="María Perez" class="input input-bordered w-full" />
          <div class="label">
            <span class="label-text-alt text-danger">Mensaje de error</span>
          </div>
        </label>
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text font-semibold">Correo electrónico</span>
          </div>
          <input type="email" placeholder="mariaperez@gmail.com" class="input input-bordered w-full" />
          <div class="label">
            <span class="label-text-alt text-danger">Mensaje de error</span>
          </div>
        </label>
        <label class="form-control w-full">
          <div class="label">
            <span class="label-text font-semibold">Mensaje</span>
          </div>
          <textarea class="textarea textarea-bordered" placeholder="Escriba su mensaje"></textarea>
          <div class="label">
            <span class="label-text-alt text-danger">Mensaje de error</span>
          </div>
        </label>
        <button class="mt-2 btn bg-secondary hover:bg-primary text-white w-full">Enviar mensaje</button>
      </div>
    </>
  )
}