import { BsMouse } from 'react-icons/bs'

export const ScrollDown = () => {
  return (
    <div className="home__scroll">
        <a href="#about" className="home__scroll-button button--flex">
            <BsMouse className="home__scroll-icon wheel"/>
            <span className="home__scroll-name">Scroll down</span>
            <i className="uil uil-arrow-down home__scroll-arrow"></i>
        </a>
    </div>
  )
}
