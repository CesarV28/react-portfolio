import { FiSend } from 'react-icons/fi'


export const Data = () => {
  return (
    <div className="home__data">
        <h1 className="home__title">
            Cesar <br/> Vargas
            
        </h1>
        <h3 className="home__subtitle">
            Bachelor's Degree in Information technology
        </h3>
        <p className="home__description">
            I am studying information technology, I am specialized in management and frontend development with ReactJs
        </p>
        <a href="#contact" className="home__button button button--flex">
            Let's talk
            <FiSend className="button__icon"/>
        </a>
    </div>
  )
}
