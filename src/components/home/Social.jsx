import { AiFillLinkedin, AiOutlineDribbble, AiFillGithub } from 'react-icons/ai'

export const Social = () => {
  return (
    <div className="home__social">
        {/* Social item */}
        <a href="https://www.linkedin.com/in/varcesar/" className="home__social-icon" target={"_blank"}>
            <AiFillLinkedin/>
        </a>
        {/* Social item */}
        <a href="https://twitter.com/CesarV_28" className="home__social-icon" target={"_blank"}>
            <AiOutlineDribbble/>
        </a>
        {/* Social item */}
        <a href="https://github.com/CesarV28" className="home__social-icon" target={"_blank"}>
            <AiFillGithub/>
        </a>
    </div>
  )
}
