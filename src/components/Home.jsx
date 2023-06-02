import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/me.png";

const Home = () => {
// const Home = ({ ratio }) => {
  // const clientCount = useRef(null);
  const projectCount = useRef(null);

  // const animationClientsCount = () => {
  //   animate(0, 0, {
  //     duration: 2,
  //     onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
  //   });
  // };
  const animationProjectsCount = () => {
    animate(0, 4, {
      duration: 2,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animation = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animation.h1}>
            Hi, I am <br /> Dipankar Barman
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Front-End Developer", "A ReactJS Developer"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typrwriterpara",
            }}
          />

          <div>
            <a href="mailto:dipankar.db37@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          {/* <article>
            <p>
              + */}
              {/* {ratio < 2 && ( */}
                {/* <motion.span
                  whileInView={animationClientsCount}
                  ref={clientCount}
                ></motion.span> */}
              {/* )} */}
            {/* </p>
            <span>Clients</span>
          </article> */}

          <aside>
            <article>
              <p>
                +
                {/* {ratio < 2 && ( */}
                  <motion.span
                    whileInView={animationProjectsCount}
                    ref={projectCount}
                  >
                    4
                  </motion.span>
                {/* )} */}
              </p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>dipankar.db37@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>

      <section>
        <img src={me} alt="Dipankar" />
      </section>

      <BsChevronDown />
    </div>
  );
};

export default Home;
