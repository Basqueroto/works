import {useEffect, useMemo, useState} from "react";
import "particles.js";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadSlim} from "@tsparticles/slim"

export default function MoleculeBackground() {

    const [atons, setAtons] = useState(false)

    useEffect(() => {
        initParticlesEngine(async (engines) => {
            await loadSlim(engines)
        }).then(() => {setAtons(true);})

    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    }

    const options = useMemo(() => ({
        background: {
            color: {
                value: "transparent"
            }
        },

        fpsLimit: 60,

        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    area: 800
                }
            },

            color: {
                value: "#88c8ff"
            },

            shape: {
                type: "circle"
            },

            opacity: {
                value: 0.5
            },

            size: {
                value: { min: 1, max: 3 }
            },

            links: {
                enable: true,
                distance: 150,
                color: "#88c8ff",
                opacity: 0.4,
                width: 1
            },

            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                outModes: {
                    default: "out"
                }
            }
        },

        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse"
                },
                resize: true
            },

            modes: {
                repulse: {
                    distance: 200,
                    duration: 0.4
                }
            }
        },

        detectRetina: true
    }), []);


    return (
        <Particles options={options} particlesLoaded={particlesLoaded}/>
    );
}