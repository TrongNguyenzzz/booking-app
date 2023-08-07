import "./featured.css";
import tucson from "../../assets/cityImg/tucson.png";
import hanoi from "../../assets/cityImg/hanoi.png";
import dongha from "../../assets/cityImg/dongha.png";
import { useNavigate } from "react-router-dom";

const Featured = () => {

    const navigate = useNavigate();

    const handleHanoi = () => {
        navigate("/hanoi");
    }

    const handleDongha = () => {
        navigate("/dongha");
    }

    const handleTucson = () => {
        navigate("/tucson");
    }

    return (
        <div className="featured">
            <div className="featureItem">
                <img className = "featuredImg1" src = { hanoi } alt = "hanoi" onClick={handleHanoi}/>
                <div className="featureTitle">
                    <h1> Hà Nội </h1>
                </div>
            </div>

            <div className="featureItem">
                <img className = "featuredImg2" src = { dongha } alt = "dongha" onClick={handleDongha}/>
                <div className="featureTitle">
                    <h1> Đông Hà </h1>
                </div>
            </div>

            <div className="featureItem">
                <img className = "featuredImg3" src = { tucson } alt = "tucson" onClick={handleTucson}/>
                <div className="featureTitle">
                    <h1> Tucson </h1>
                </div>
            </div>

        </div>
    )
}

export default Featured;