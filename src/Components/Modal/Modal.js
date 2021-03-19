import React, { useContext } from "react";
import { Context } from "../../AppContext";
import Aux from "../../HOC/Aux";
import Backdrop from "../Backdrop/Backdrop";
import styled from "styled-components";

const StyledModal = styled.div`
	position: fixed;
	z-index: 500;
	background-color: white;
	width: 70%;
	border: 1px solid #ccc;
	box-shadow: 1px 1px 1px black;
	padding: 16px;
	left: 15%;
	top: 30%;
	box-sizing: border-box;
	transition: all 0.6s ease-out;
	@media (min-width: 600px) {
		width: 500px;
		left: calc(50% - 250px);
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
				{props.children}
			</StyledModal>
		</Aux>
	);
});

export default Modal;
