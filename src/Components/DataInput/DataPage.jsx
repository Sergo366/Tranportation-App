import React from "react"
import s from "./DataPage.module.css";
import Discription from "./Discription/Discription";
import FormDataContainer from "./FormData/FormDataContainer";
import RouteMaps from "./RouteMaps/RouteMaps";
import BG from "../../Images/Data-Header/Big-Photo.png";
import mouseIcon from "../../Images/Data-Header/Mouse-icon.svg";

const DataPage = (props) => {

    return (
        <div className={s.bg} style={{
            backgroundImage: `url(${BG})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: `2000px 700px`,


        }}>
            <div className={s.container}>
                <Discription/>
                <FormDataContainer />
                <RouteMaps/>
            </div>
            <div className={s.mouse}>
                <img src={mouseIcon} alt=""/>
            </div>
        </div>
    )
}
export default DataPage