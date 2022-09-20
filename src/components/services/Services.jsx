
import { useState } from 'react';
import './services.css';

export const Services = () => {

    const [toggle, setToggle] = useState(0);

    const onToggleTap = (index) => {
        setToggle(index);
    }

  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I offer</span>

        <div className="services__container container grid">
            {/* services content */}
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">
                        Lorem<br/>Ipsum
                    </h3>
                </div>

                <span 
                    className="services__button"
                    onClick={() => onToggleTap(1)}
                >
                    View more
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div 
                    className={`${toggle === 1 ? 'services__modal active-modal' : 'services__modal'}`} 
                    onClick={() => setToggle(0)}
                >
                    <div className="services__modal-content">
                        <i 
                            className="uil uil-times services__modal-close"
                            onClick={() => setToggle(0)}
                        ></i>
                        <h3 className="services__modal-title">Lorem Ipsum</h3>
                        <p className="services__modal-description">
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Placeat ab, corrupti 
                            temporibus explicabo architecto tenetur
                        </p>
                        <ul className="services__modal-services grid">
                            {/* li services modal item */}
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </li>
                            {/* li services modal item */}
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </li>
                            {/* li services modal item */}
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </li>
                            {/* li services modal item */}
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </li>
                            {/* li services modal item */}
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* services content */}
            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">
                        Lorem<br/>Ipsum
                    </h3>
                </div>

                <span 
                    className="services__button"
                    onClick={() => onToggleTap(2)}
                >
                    View more
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div 
                    className={`${toggle === 2 ? 'services__modal active-modal' : 'services__modal'}`}
                    onClick={() => setToggle(0)}
                >
                    <div className="services__modal-content">
                        <i 
                            className="uil uil-times services__modal-close"
                            onClick={() => setToggle(0)}
                        ></i>
                        <h3 className="services__modal-title">Lorem Ipsum2</h3>
                        <p className="services__modal-description">
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Placeat ab, corrupti 
                            temporibus explicabo architecto tenetur
                        </p>
                        <ul className="services__modal-services grid">
                            {/* li services modal item */}
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </li>
                            {/* li services modal item */}
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </li>
                            {/* li services modal item */}
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </li>
                            {/* li services modal item */}
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </li>
                            {/* li services modal item */}
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* services content */}
            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">
                        Lorem<br/>Ipsum
                    </h3>
                </div>

                <span 
                    className="services__button"
                    onClick={() => onToggleTap(3)}
                >
                    View more
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div 
                    className={`${toggle === 3 ? 'services__modal active-modal' : 'services__modal'}`}
                    onClick={() => setToggle(0)}
                >
                    <div className="services__modal-content">
                        <i 
                            className="uil uil-times services__modal-close"
                            onClick={() => setToggle(0)}
                        ></i>
                        <h3 className="services__modal-title">Lorem Ipsum3</h3>
                        <p className="services__modal-description">
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Placeat ab, corrupti 
                            temporibus explicabo architecto tenetur
                        </p>
                        <ul className="services__modal-services grid">
                            {/* li services modal item */}
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </li>
                            {/* li services modal item */}
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </li>
                            {/* li services modal item */}
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </li>
                            {/* li services modal item */}
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </li>
                            {/* li services modal item */}
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle"></i>
                                <p className="services__modal-info">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}
