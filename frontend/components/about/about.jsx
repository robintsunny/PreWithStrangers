import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="about-panel">
        <div className="about-panel-header">WE BRING ATHLETES TOGETHER</div>
        <div className="about-panel-tag">About Pre With Strangers</div>
      </div>

      <div className="about-header">It's good to be STRONG.</div>

      <div className="about-paragraph">
        Pre With Strangers is a community organization that's all about making
        out cities feel more like neighborhoods by breaking the barriers between
        athletes.
      </div>

      <div className="about-paragraph">
        Why? Because we can all afford to learn something from someone else. We
        can share stories, training tips, and much more. We can communicate,
        connect, and collectively combat catabolism.
      </div>

      <div className="about-paragraph">
        There are two massive hurdles that often stop us from smiling at each
        other on the street, taking our headphones out on the bus, or just
        generally treating others with a huge amount of empathy, understanding,
        and awesome.
      </div>

      <div className="about-paragraph">
        <ul className="about-ul">
          <li className="about-li">
            1. We get stuck to our routines. We have our own lives to lead, and
            learning from others is hard when we're stuck in our own heads.
          </li>
          <li className="about-li">
            2. We don't know how to ask for help. We get scared of being judged
            or how others will respond.
          </li>
        </ul>
      </div>

      <div className="about-paragraph">
        So we set up a way to help athletes meet other athletes to sit down and
        chat with no strings attached. It could be deep, it could be funny, it
        could be informative, it could be awkward, it could be vulnerable. It's
        different every time and you can't really plan for that.
      </div>
      <div className="about-paragraph">
        And it's in this that we can be more understanding of the "strangers"
        around us. And if more people can share that experience, we might start
        seeing the objects between us and the rest of our lives as, well, real
        people. And that makes the space we share feel a lot more like home.
      </div>
      <div className="about-header">It starts with a little Pre.</div>
    </div>
  );
};

export default About;
