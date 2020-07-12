import React from 'react';
import styled from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon';
import { Close } from '@styled-icons/ionicons-outline';

const ContainerModal = styled.div`
    display: ${props => props.show ? 'block' : 'none'};
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
`;

const BoxOpacity = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 0.6;
    width: 100%;
    height: 100%;
`;

const MainModal = styled.div`
    position:fixed;
    background: white;
    width: 70%;
    height: 500px;
    min-height: 500px;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
`;

const WrapperIconClose = styled.div`
    position: absolute;
    top: -15px;
    right: 0;
    background-color: transparent;
    ${StyledIconBase} {
        color: #6851D8;
    
    &:hover {
        color: ;
        scale: 1.2;
    }
`;

const Modal = ({renderContent, show, setShow}) => {

    const handleClose = () => () => {
        setShow(false);
    };

    return (
        <ContainerModal show={show}>
            <BoxOpacity />
            <MainModal>
                <WrapperIconClose>
                    <button onClick={handleClose()}>
                        <Close size="30"/>
                    </button>
                </WrapperIconClose>
                {renderContent()}
            </MainModal>
        </ContainerModal>
    );
};

export default Modal;