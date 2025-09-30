import "./Hero.css";
import heroImage1 from "../../assets/hero-image-1.jpg"
import heroImage2 from "../../assets/hero-image-2.jpg"
import heroImage3 from "../../assets/hero-image-3.jpg"
import HeroSlide from "./HeroSlide";

const Hero = () => {
    const hero_slide_data = [
        {
            heroImage: heroImage1,
            title: "Create The Best",
            subtitle:
                "We craft exceptional digital experiences that bring your vision to life with innovative design and cutting-edge technology.",
            button1: "Contact Us",
            button2: "Watch Portfolio",
        },
        {
            heroImage: heroImage2,
            title: "Quality Work",
            subtitle: "We believe you want the best value, that's why we provide the quality work that you deserve. We work as a team on each and every project to make sure that our client always gets to know"
        },
        {
            heroImage: heroImage3,
            title: "We Value Your Time",
            subtitle: "We realize that time is meaningful to you as much it is to us. That is why we always work day and night without wasting time so that you can get your website within the shortest possible time"
        },
    ];

    return (
        <>
            {hero_slide_data.map((hero_slide) => {
                const { heroImage, title, subtitle, button1, button2 } =
                    hero_slide;
                return (
                    <HeroSlide
                        key={heroImage}
                        heroImage={heroImage}
                        title={title}
                        subtitle={subtitle}
                        button1={button1}
                        button2={button2}
                    />
                );
            })}
        </>
    );
};

export default Hero;
