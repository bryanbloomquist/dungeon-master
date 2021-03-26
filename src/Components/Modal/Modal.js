import React, { useContext } from "react";
import { Context } from "../../AppContext";
import Aux from "../../HOC/Aux";
import Backdrop from "./Backdrop/Backdrop";
import MonsterModalContent from "./MonsterModalContent/MonsterModalContent";
import CharacterModalContent from "./CharacterModalContent/CharacterModalContent";

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
				{isMonsterManual ? <MonsterModalContent /> : <CharacterModalContent />}
			</div>
		</Aux>
	);
});

export default Modal;
