
import './contact.css';

export const Contact = () => {
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get in touch</h2>
        <span className="section__subtitle">Contact me</span>

        <div className="contact__container container grid">
            <h3 className="contact__title">Talk to me</h3>
            <div className="contact__content">
                {/* Contact card info item */}
                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>
                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">CesarVargas27@outlook.com</span>
                        <a href="" className="contact__button">
                            Write me
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>
                </div>

                {/* Contact card info item */}
                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bxs-phone contact__card-icon"></i>
                        <h3 className="contact__card-title">Phone number</h3>
                        <span className="contact__card-data">+52 317-119-9324</span>

                        <a href="" className="contact__button">
                            Write me
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>
                </div>

                {/* Contact card info item */}
                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bxl-twitter contact__card-icon"></i>
                        <h3 className="contact__card-title">Other</h3>
                        <span className="contact__card-data">Other contact</span>

                        <a href="" className="contact__button">
                            Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>
                </div>

            </div>

            

        </div>
    </section>
  )
}
