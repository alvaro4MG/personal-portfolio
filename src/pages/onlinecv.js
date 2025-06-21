import Head from 'next/head';

import React, { useRef } from 'react';

import Timeline from '@/components/onlinecv/Timeline';



const OnlineCV = () => {
    const items = [
        {
          title: 'Bachelor\'s degree in Computer Engineering',
          description: 'University of Alicante. Part of the ARA program (High Academic Performance program).',
          //date: '2020 - 2020',
          ref: useRef(null),
        },
        {
          title: 'IES Bachiller Sabuco',
          description: 'International Baccalaureate Diploma. Specialised in Physics, Mathematics, Chemistry and English.',
          date: '2018 - 2020',
          ref: useRef(null),
        },
        {
          title: 'IES Bachiller Sabuco',
          description: 'Spanish Science Baccalaureate. Average grade: 9.9/10',
          date: '2018 - 2020',
          ref: useRef(null),
        },
        {
            title: 'Licenciatura en Ciencias de la Computación',
            description: 'Universidad X, Descripción breve de la licenciatura.',
            date: '2016 - 2020',
            ref: useRef(null),
          },
          {
            title: 'Licenciatura en Ciencias de la Computación',
            description: 'Universidad X, Descripción breve de la licenciatura.',
            date: '2016 - 2020',
            ref: useRef(null),
          },
          {
            title: 'Licenciatura en Ciencias de la Computación',
            description: 'Universidad X, Descripción breve de la licenciatura.',
            date: '2016 - 2020',
            ref: useRef(null),
          },
          {
            title: 'Licenciatura en Ciencias de la Computación',
            description: 'Universidad X, Descripción breve de la licenciatura.',
            date: '2016 - 2020',
            ref: useRef(null),
          },
          {
            title: 'Licenciatura en Ciencias de la Computación',
            description: 'Universidad X, Descripción breve de la licenciatura.',
            date: '2016 - 2020',
            ref: useRef(null),
          },
      ];
    
      return (
        <>
            <Head>
                <title>Álvaro's Online CV</title>
                <meta name="description" content="Explore Álvaro Martínez García's online CV, showcasing his education, work experience, and projects in software and game development." />
            </Head>
            <div>
                <h1>OnlineCV</h1>
                <p>This page will show my Online CV.</p>
                <h1>Education🎓</h1>
                <Timeline items={items} />
            </div>
        </>
    );
}

export default OnlineCV;