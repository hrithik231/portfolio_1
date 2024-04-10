import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "../style/Common.css";
import "../style/Color.css";
export default function Icons() {
    return (
        <>
            <BiLogoInstagramAlt className="crs-p insta-colo" />
            <FaYoutube className="crs-p youtube-logo" />
            <FaTwitter className="crs-p twitter-logo " />
        </>
    )
}