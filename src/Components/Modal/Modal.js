import React, { useContext } from "react";
import { Context } from "../../AppContext";
import Aux from "../../HOC/Aux";
import Backdrop from "../Backdrop/Backdrop";
import styled from "styled-components";
import ModalContent from "./ModalContent/ModalContent";

const StyledModal = styled.div`
	position: fixed;
	z-index: 500;
	background-color: white;
	width: 90%;
	height: 90%;
	border: 1px solid #ccc;
	box-shadow: 1px 1px 1px black;
	padding: 16px;
	left: 5%;
	top: 5%;
	box-sizing: border-box;
	overflow-y: auto;
	transition: all 0.6s ease-out;
	@media only screen and (min-width: 600px) {
		width: 600px;
		left: calc(50% - 300px);
	}
`;

const Modal = React.memo((props) => {
	const { showModal, closeModal } = useContext(Context);

	return (
		<Aux>
			<Backdrop show={showModal} clicked={closeModal} />
			<StyledModal
				style={{
					transform: showModal ? "translateY(0)" : "translateY(-100vh)",
					opacity: showModal ? "1" : "0",
				}}
			>
				<ModalContent />
			</StyledModal>
		</Aux>
	);
});

export default Modal;
