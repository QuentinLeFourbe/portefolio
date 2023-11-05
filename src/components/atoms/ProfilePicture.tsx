import { css } from "../../../styled-system/css";

function ProfilePicture() {
  return <img className={imageStyle} src="src\images\photo_profil.png" />;
}

export default ProfilePicture;

const imageStyle = css({
  height: "225px",
  width: "175px",
  objectFit: "cover",
  position: "absolute",
  top: "35px",
});
