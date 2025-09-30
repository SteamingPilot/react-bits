import "./Hero.css";
import heroImage from "../assets/hero-image-1.jpg";
import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react";

const Hero = () => {
    return (
        <>
            <div
                className="hero"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="hero__overlay"></div>

                <div className="hero__content">
                    <div className="hero__container">
                        <h1 className="hero__title">Create The Best</h1>
                        <p className="hero__lead">
                            We craft exceptional digital experiences that bring
                            your vision to life with innovative design and
                            cutting-edge technology.
                        </p>
                        <div className="hero__actions">
                            <Dialog.Root size={"md"}>
                                <Dialog.Trigger asChild>
                                    <Button
                                        size={"xl"}
                                        variant={"solid"}
                                        colorPalette={"red"}
                                    >
                                        Contact Us
                                    </Button>
                                </Dialog.Trigger>
                                <Portal>
                                    <Dialog.Backdrop />
                                    <Dialog.Positioner>
                                        <Dialog.Content>
                                            <Dialog.CloseTrigger>
                                                <CloseButton></CloseButton>
                                            </Dialog.CloseTrigger>
                                            <Dialog.Header>
                                                <Dialog.Title >Contact Us</Dialog.Title>
                                            </Dialog.Header>
                                            <Dialog.Body >
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat fugiat mollitia suscipit et, quod neque corporis voluptatum incidunt sunt obcaecati!
                                            </Dialog.Body>
                                            <Dialog.Footer>
                                                <Dialog.ActionTrigger asChild>
                                                    <Button variant={'outline'}>Cancel</Button>
                                                </Dialog.ActionTrigger>
                                                <Button variant={'solid'}>Save</Button>
                                            </Dialog.Footer>
                                        </Dialog.Content>
                                    </Dialog.Positioner>
                                </Portal>
                            </Dialog.Root>
                            <Button size={'xl'} color={'white'} variant={"outline"} colorPalette={'white'}>
                                Watch Portfolio
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
