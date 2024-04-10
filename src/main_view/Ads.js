import "../style/Font.css";
import "../style/Common.css";
import "../style/Color.css";
import "../style/Animation/moving.css";
import { SiAeromexico } from "react-icons/si";
import { GiRunningNinja } from "react-icons/gi";
import { BsMeta } from "react-icons/bs";

export default function Ads() {
    return (
        <>
            <div className="vertical-text-container bdr-1p-solid-none  pad-2p p-rel left2p bg-color-purple">
                <span className="vertical-text f-s-xl f-w-b moving-text">Events Osis Bus <GiRunningNinja /> tour JLN staium Delhi <SiAeromexico /> Collection Live: Meta Verse <BsMeta /></span>
            </div>
        </>
    )
}