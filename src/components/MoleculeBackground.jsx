import { memo, useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function MoleculeBackground() {

    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options = useMemo(() => ({
        background: {
            color: {
                value: "#191621"
            }
        },

        fpsLimit: 60,

        particles: {
            number: {
                value: 90,
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
                value: 0.6
            },

            size: {
                value: { min: 1, max: 2 }
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
                speed: 1.2,
                direction: "none",
                outModes: {
                    default: "out"
                }
            }
        },

        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab"
                },
                resize: true
            },

            modes: {
                grab: {
                    distance: 180,
                    links: {
                        opacity: 1
                    }
                },

                repulse: {
                    distance: 200,
                    duration: 0.4
                }
            }
        },

        detectRetina: true

    }), []);

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            options={options}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
            }}
        />
    );
}

export default memo(MoleculeBackground);