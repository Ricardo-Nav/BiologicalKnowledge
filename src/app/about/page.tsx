import Main from '@/components/General/Main'
import Image from 'next/image'
import React from 'react'
import LOGO_PRIMARY from '../../../public/images/Biological_know_primary.png'
import Example from '../../../public/images/example.jpg'


const AboutPage = () => {
  return (
    <Main primary>
      <div className='text-base font-normal w-[710px]'>
        <Image src={LOGO_PRIMARY} alt='' className='w-[216px] h-auto m-auto'/>
        <h1 className='font-bold text-[32px] text-center w-full my-5'>Biological knowledge</h1>
        <h2 className='font-bold text-2xl'>Acerca de</h2>
        <div className='flex gap-2 items-center my-2'>
          <p className='w-[339px]'>Bienvenido a Journal of Digital Ergonomics, un espacio dedicado a explorar la relación entre la tecnología y la comodidad visual. Nuestro objetivo es compartir investigaciones, consejos y buenas prácticas para mejorar la experiencia de lectura y el diseño en pantallas digitales.</p>
          <Image src={Example} alt='' className='w-[368px] h-[137px] object-cover rounded-lg'/>
        </div>
        <p>Este blog es dirigido por el Dr. Javier Martínez, investigador en ergonomía digital y especialista en usabilidad web. Con más de una década de experiencia en el estudio de la percepción visual y la interacción humano-computadora, busca ayudar a diseñadores, desarrolladores y usuarios a optimizar sus entornos digitales para una mejor legibilidad y menor fatiga ocular.
        Aquí encontrarás artículos basados en estudios científicos, guías prácticas y recomendaciones para que tu tiempo frente a la pantalla sea más cómodo y eficiente. ¡Gracias por visitarnos y ser parte de esta comunidad!</p>
      </div>
    </Main>
  )
}

export default AboutPage