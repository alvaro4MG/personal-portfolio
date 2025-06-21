import { useEffect, useRef, useState } from 'react';
//import styles from './global.css';

const Timeline = ({ items }) => {
  const timelineRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const timelineTop = timelineRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      const scrollPosition = window.scrollY + windowHeight / 2;
      //const scrollPosition = window.scrollY;
      let newIndex = 0;

      items.forEach((item, index) => {
        const itemPosition = item.ref.current.offsetTop;

        if (scrollPosition >= itemPosition) {
          newIndex = index;
        }
      });

      setActiveIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  return (
    <div ref={timelineRef} className='timelineContainer'>
      {items.map((item, index) => (
        <div
          key={index}
          className={`timelineItem ${index <= activeIndex ? 'active' : ''}`}
          ref={item.ref}
        >
          <div className='timelinePoint'></div>
          <div className='timelineContent'>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span>{item.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
