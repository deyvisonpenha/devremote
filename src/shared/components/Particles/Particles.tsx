import { useCallback, useMemo } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import useMediaQuery from "@mui/material/useMediaQuery";

export const ParticlesComponent = (props: { id: string }) => {
  const options = useMemo(() => {
    // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
    // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
    return {
      background: {
        color: "#181717", // this sets a background color for the canvas
      },
      fullScreen: {
        enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
        zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
      },
      interactivity: {
        events: {
          onClick: {
            enable: true, // enables the click event
            mode: "push", // adds the particles on click
          },
          onHover: {
            enable: true, // enables the hover event
            mode: "repulse", // make the particles run away from the cursor
          },
        },
        modes: {
          push: {
            quantity: 5, // number of particles to add on click
          },
          repulse: {
            distance: 50, // distance of the particles from the cursor
          },
        },
      },
      particles: {
        number: {
          value: 28,
        },
        color: {
          value: "#f2f2f2",
        },
        links: {
          color: "#6e6c6c",
          enable: true, // enabling this will make particles linked together
          distance: 130, // maximum distance for linking the particles
        },
        move: {
          enable: true, // enabling this will make particles move in the canvas
          speed: { min: 1, max: 4 }, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
        },
        opacity: {
          value: { min: 0.5, max: 0.9 }, // using a different opacity, to have some semitransparent effects
        },
        size: {
          value: { min: 1, max: 3 }, // let's randomize the particles size a bit
        },
      },
    };
  }, []);
  // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
  const particlesInit = useCallback(async (engine) => {
    loadSlim(engine);
  }, []);

  return <Particles id={props.id} init={particlesInit} options={options} />;
};
