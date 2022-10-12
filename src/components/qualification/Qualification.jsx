
import { useState } from 'react';
import './qualification.css';

export const Qualification = () => {

    const [qualification, setQualification] = useState(1)

    const onQualification = (index) => {
        setQualification(index);
    }

  return (
    <section className="qualification section" id='qualification'>
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container">
            <div className="qualification__taps">
                <div 
                    className={`${qualification === 1 && 'qualification__active'} qualification__button button--flex`}
                    onClick={() => onQualification(1)}
                >
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Education
                </div>
                <div 
                    className={`${qualification === 2 && 'qualification__active'} qualification__button button--flex`}
                    onClick={() => onQualification(2)}
                >
                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                    Experience
                </div>
            </div>

            <div className="qualification__sections">
                {/* ========= Qualification content EDUCATION ========= */}
                <div className={`${ qualification === 1 && 'qualification__content-active'} qualification__content` }>
                    {/* Qualification data */}
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Information technology</h3>
                            <span className="qualifiction__subtitle">CUCEA - university</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2018 - present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div></div>
                    </div>

                    {/* Qualification data */}
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Web developer</h3>
                            <span className="qualifiction__subtitle">Platzi</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2022 - present
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Project manager</h3>
                            <span className="qualifiction__subtitle">Platzi</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2022 - present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div></div>
                    </div>

                </div>

                {/* ========= Qualification content ========= */}
                <div className={`${ qualification === 2 && 'qualification__content-active'} qualification__content` }>
                    {/* Qualification data */}
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Excel Programmer on </h3>
                            <span className="qualifiction__subtitle">Jaliscoadventours</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2022 - 2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div></div>
                    </div>

                    {/* Qualification data */}
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Web developer</h3>
                            <span className="qualifiction__subtitle">Own projects</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2020 - present
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}
