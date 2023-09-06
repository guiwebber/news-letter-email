import React, { useState } from "react";
import imageBox from "../../assets/images/desk.svg";
import imageMobile from "../../assets/images/mob.svg";
import imageSuccess from "../../assets/images/icon-success.svg";
import validator from "validator";
import "../../styles.css";
function Main() {
  const [validaEmail, setValidaEmail] = useState("");
  const [valorValidado, setValorValidado] = useState("");
  const [valorAtualizado, setValorAtualizado] = useState("");
  const [invisible, setInvisible] = useState("invisible");
  const [visible, setVisible] = useState("visible");
  const [emailAtt, setEmailAtt] = useState("");

  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setValidaEmail("");
      setEmailAtt(email);
    } else {
      setValidaEmail("Invalid email");
      setEmailAtt(email);
    }
  };
  function buttonValida() {
    if (validaEmail === "Invalid email") {
      setValorValidado("invalidEmail");
      setValorAtualizado(validaEmail);
      setInvisible("invisible");
      setVisible("visible");
    } else {
      setValorValidado("validEmail");
      setValorAtualizado(validaEmail);
      setVisible("invisible");
      setInvisible("visible");
    }
  }
  function buttonDismiss() {
    setInvisible("invisible");
    setVisible("visible");
  }

  return (
    <div
      className={` ${
        visible === "visible"
          ? "containerBox"
          : visible === "invisible"
          ? "tksBox"
          : "containerBox"
      }`}
    >
      <div className={`subContainer ${visible}`}>
        <div className="texts">
          <h1 className="title">Stay updated!</h1>
          <p className="join">
            Join 60,000+ product managers receiving monthly updates on:
          </p>

          <p className="list">
            <img className="successImg" src={imageSuccess} alt="" /> Product
            discovery and building what matters
          </p>
          <p className="list">
            <img className="successImg" src={imageSuccess} alt="" /> Measuring
            to ensure updates are a success
          </p>
          <p className="list">
            <img className="successImg" src={imageSuccess} alt="" /> And much
            more
          </p>

          <div className="inputButton">
            <div className="divInvalidMsg">
              <p className="email">Email address</p>
              <span className="invalidMsg">{valorAtualizado}</span>
            </div>
            <input
              className={valorValidado}
              onChange={(e) => validateEmail(e)}
              type="email"
              placeholder="email@company.com"
            />
            <button onClick={() => buttonValida()}>
              Subscribe to monthly newsletter
            </button>
          </div>
        </div>
        <div>
          <img className="imgRight" src={imageBox} alt="" />
          <img className="imgMobile" src={imageMobile} alt="" />
        </div>
      </div>
      <div className={`boxThanks ${invisible}`}>
        <div>
          <img src={imageSuccess} alt="" />
        </div>
        <div>
          <h1 className="title">Thanks for subscribing!</h1>
          <p className="textTks">
            A confirmation email has been sent to <span>{emailAtt}</span> dd
            Please open it and click the button inside to confirm your
            subscription.
          </p>
          <button onClick={() => buttonDismiss()} className="btnTks">
            Dismiss message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
