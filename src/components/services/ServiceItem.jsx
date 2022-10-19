import { useState } from "react";
import { useEffect } from "react";

import { AiOutlineCheckCircle } from 'react-icons/ai'


export const ServiceItem = ({itemIndex, serviceOf, toggle, onToggleTap, setToggle }) => {
    
    const [data, setData] = useState({})

    const { service, icon, offer } = data;
    
    useEffect(() => {
        setData(serviceOf)
    }, [])
    

  return (
    <div className="services__content">
        <div>
            <i className={`${icon} services__icon`}></i>
            <h3 className="services__title">
                { service }
            </h3>
        </div>

        <span 
            className="services__button"
            onClick={() => onToggleTap(itemIndex)}
        >
            View more
            <i className="uil uil-arrow-right services__button-icon"></i>
        </span>

        <div 
            className={`${toggle === itemIndex ? 'services__modal active-modal' : 'services__modal'}`} 
            onClick={() => setToggle(-1)}
        >
            <div className="services__modal-content">
                <i 
                    className="uil uil-times services__modal-close"
                    onClick={() => setToggle(-1)}
                ></i>
                <h3 className="services__modal-title">{ offer?.title }</h3>
                <p className="services__modal-description">
                    { offer?.desc }
                </p>
                <ul className="services__modal-services grid">
                    {/* li services modal item */}
                    {offer?.list.map( (item, index) => (
                        <li key={index} className="services__modal-service">
                            <AiOutlineCheckCircle className="services__modal-icon"/>
                            <p className="services__modal-info">
                                { item }
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}
