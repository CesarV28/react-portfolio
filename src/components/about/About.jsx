import { TbFileDownload} from 'react-icons/tb'

import './about.css';

import AboutImg from '../../assets/about.png';
import CV from '../../assets/CesarVargas-CV.pdf'
import { Info } from './Info';

export const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About me</h2>
        <span className="section__subtitle">My introduction</span>

        <div className="about__container container grid">
            <img src={AboutImg} alt="about me image" className="about__img" />
            <div className="about__data">
                <Info/>
                <p className="about__description">
                    Responsible, self-taught, empathic, proactive. I am passionate about what I like, I am interested
                    much in the area of ​​technology, Web development, data analysis or resolution
                    of problems using technology, so I am looking for a position that
                    test my knowledge and contribute to solve problems. I enjoy
                    learn new things, play video games, watch a series or go for walks.
                </p>

                <a download="" href={CV} className="button button--flex">
                    Download CV
                    <TbFileDownload className="button__icon"/>
                </a>
            </div>
        </div>
    </section>
  )
}
