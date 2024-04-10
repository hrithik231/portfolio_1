import "../style/Font.css";
import "../style/Common.css";
import "../style/Position.css";
import WatchingList from "./WatchingList";
import { IoLogoElectron } from "react-icons/io5";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import music from '../style/Images/music.jpg';

export default function Details() {

    function hanfleJoinList(){
        alert("Site Is Under Maintenance")
    }
    return (
        <>
            <div className="p-rel f-right pad-2p bdr-1p-solid-none bg-black-light " style={{ right: "2%" }}><IoLogoElectron className="clr-white f-right f-s-xl" />
                <span className="f-w-b clr-white ">Explore Your First <br></br> Colletible</span>
                <div className="f-s-xxl clr-white f-w-b">
                    <p>Meta <br></br> Lives</p>
                </div>
                <div className="clr-white">
                    <p className="f-w-b f-s-xl">Live in Astrix</p>
                    <span>Lorem 是缅因州常见的 aof interset</span><br></br>
                    <span>i=可以发生在主要城市 可以添加</span><br></br>
                    <span>嗨，我叫 Ritik，我是前端开发人员</span><br></br>
                    <span>我知道你无法理解这一点，但没关系.我爱你，</span>
                </div>
                <div className="margin-top10p">
                    <WatchingList />
                </div>

                <div className="margin-top10p bdr-1p-solid-none brd-rad20px pad-2p txt-cnt bg-color-orange">
                    <span className="f-w-b crs-p" onClick={hanfleJoinList}>Join Waitlist</span>
                </div>
            </div>
        </>
    )
}