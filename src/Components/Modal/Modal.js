import React, { useContext } from "react";
import { Context } from "../../AppContext";
import Aux from "../../HOC/Aux";
import Backdrop from "./Backdrop/Backdrop";
import MonsterModalContent from "./ModalContent/MonsterModalContent";
import InitiativeModalContent from "./ModalContent/InitiativeModalContent";

const Modal = React.memo((props) => {
	const { showModal, closeModal, isMonsterManual } = useContext(Context);

	return (
		<Aux>
			<Backdrop show={showModal} clicked={closeModal} />
			<div
				className='modal'
				style={{
					transform: showModal ? "translateY(0)" : "translateY(-100vh)",
					opacity: showModal ? "1" : "0",
				}}
			>
				{isMonsterManual ? <MonsterModalContent /> : <InitiativeModalContent />}
			</div>
		</Aux>
	);
});

export default Modal;
