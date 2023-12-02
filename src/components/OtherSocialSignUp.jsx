import Facebook from "../assets/facebook.svg";
import Google from "../assets/google.svg";
import Apple from "../assets/apple.svg";

import './OtherSocialSignUp.css'

function OtherSocialSignUp() {
  return (
    <div className="other-signup">
      <p>Ou criar usando</p>

      <div className="others-socials">
        <a href="#">
          <img src={Facebook} alt="Facebook" width={30} height={30} />
        </a>

        <a href="#">
          <img src={Google} alt="Google" width={30} height={30} />
        </a>

        <a href="#">
          <img src={Apple} alt="Apple" width={30} height={30} />
        </a>
      </div>
    </div>
  );
}

export default OtherSocialSignUp;
