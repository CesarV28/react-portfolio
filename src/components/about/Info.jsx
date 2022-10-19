import { BiAward, BiBriefcaseAlt2, BiMailSend} from 'react-icons/bi'

export const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <BiAward className="about__icon"/>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">2 years practicing</span>
        </div>

        <div className="about__box">
            <BiBriefcaseAlt2 className="about__icon"/>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">4 + projects</span>
        </div>

        <div className="about__box">
            <BiMailSend className="about__icon"/>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">16hr/5d</span>
        </div>
    </div>
  )
}
