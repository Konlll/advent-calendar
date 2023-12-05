import { useState } from "react";
import Modal from "./Modal";

const Tile = ({ day, message, isCurrentDay }) => {

    const [tileOpen, setTileOpen] = useState(false)
    const toggleModal = () => {
        setTileOpen(!tileOpen)
    }

    return (
        <>
            <div onClick={toggleModal} className={`${message == null ? "day border-none" : "day"} ${isCurrentDay && "current-day"} ${new Date().getDate() >= day && "clickable"}`}>
                <h2>{day}.</h2>
            </div>
            {new Date().getDate() >= day && <Modal isOpen={tileOpen} onClose={toggleModal} children={
                <div className="modal-content">
                    <h2>December {day}</h2>
                    <p>{message}</p>
                </div>
            } />}
        </>
    );
}
 
export default Tile;