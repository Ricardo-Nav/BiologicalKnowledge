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
        <h1 className='font-bold text-[32px] text-center w-full my-8'>Biological knowledge</h1>
        <div className='flex gap-5 items-center my-2'>
          <p className='w-[339px] text-justify'><span className='font-bold'>Biological Knowledge</span> es un espacio diseñado para acercar la ciencia a todos. Desde académicos hasta curiosos en busca de respuestas, ofrecemos información clara, accesible y fascinante. Nuestro objetivo es despertar el interés por la ciencia y hacer del conocimiento una experiencia enriquecedora para todos.</p>
          <Image src={Example} alt='' className='w-[368px] min-h-[137px] object-cover rounded-lg'/>
        </div>
        <p className='text-justify'>Nuestro blog es impulsado por un equipo de apasionados por la ciencia, comprometidos con la difusión del conocimiento y la promoción del pensamiento crítico. Nos dedicamos a explorar los descubrimientos más recientes en diversas disciplinas científicas, brindando análisis accesibles y estimulantes que invitan a la reflexión y al aprendizaje continuo. ¡Gracias por visitarnos y ser parte de esta comunidad de conocimiento! Juntos, podemos hacer que la ciencia sea más accesible, emocionante y relevante para todos.</p>
      </div>
    </Main>
  )
}

export default AboutPage