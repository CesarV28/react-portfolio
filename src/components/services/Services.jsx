
import { useEffect } from 'react';
import { useState } from 'react';
import { servicesData } from './data';
import { ServiceItem } from './ServiceItem';

import './services.css';

export const Services = () => {

    const [toggle, setToggle] = useState(-1);
    const [data, setData] = useState([]);

    const onToggleTap = (index) => {
        setToggle(index);
    }

    useEffect(() => {
      setData(servicesData);
    }, [])
    

  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I offer</span>

        <div className="services__container container grid">

            {data.map( (serviceOf, index) => 
                <ServiceItem 
                key={index}
                    itemIndex={index}
                    serviceOf={serviceOf}
                    toggle={toggle}
                    setToggle={setToggle}
                    onToggleTap={onToggleTap}
                />
            )}

 
        </div>

    </section>
  )
}
