interface Props {
    heroImage: string;
    title: string;
    subtitle: string;
    button1?: string;
    button2?: string;
}

const HeroSlide = ({ heroImage, title, subtitle, button1, button2 }: Props) => {
    return (
        <div className="hero mb-4" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="hero__overlay"></div>
            <div className="hero__content">
                <div className="hero__container">
                    <h1 className="hero__title">{title}</h1>
                    <p className="hero__lead">
                        {subtitle}
                    </p>
                    {button1 && (

                    <div className="hero__actions">
                        <a href="#portfolio" className="btn btn--primary">
                            {button1}
                        </a>
                        <a href="#contact" className="btn btn--outline">
                            {button2}
                        </a>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HeroSlide;
