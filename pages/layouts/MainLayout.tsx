import SideNavBar from "./SideNavBar";

import styles from "../../styles/MainLayout.module.scss";
import MapSelector from "../view/MapSelector";
import LineupView from "../view/LineupView";

export default function MainLayout(){

    return(
        <div className={styles.main_layout_container}>
            <div className={styles.main_layout_sidebar}>
                <SideNavBar></SideNavBar>
            </div>
            <div className={styles.main_layout_content}>
                <LineupView></LineupView>
                <MapSelector></MapSelector>
            </div>
        </div>
    )

}