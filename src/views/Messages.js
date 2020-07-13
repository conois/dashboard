import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { clearMessageActive, getMessagesList, setMessageActive } from './actions/MessagesActions';

const WrapperMessages = styled.div`
    background: #fff;
    padding: 50px;
    box-shadow: 2px 4px 11px -1px rgba(115, 110, 110, 0.97);
    margin: 50px 0;

    & button {
        height: 40px:
        width: 300px;
        font-size: 22px;
        border: none;
        background: #6851D8;
        padding: 20px;
        color: white;
    }
`;

const WrapperMessage = styled.div`
    height: auto;
    border: 1px solid #ccc;
    box-shadow: 2px 4px 11px -1px rgba(115, 110, 110, 0.97);
    padding: 20px;
    margin-bottom: 20px;
`;

const mapStateToProps = (state) => {
    const { infoMessages : { messages, errorMessages, loadingMessages, messageActive} } = state;
    return {
        messages,
        errorMessages,
        loadingMessages,
        messageActive
    }
};

const Messages = ({
    dispatch,
    messages,
    errorMessages,
    loadingMessages,
    messageActive
}) => {

    const renderMessageActive = () => {
        const message = messages.find(message => message.id === messageActive);
        return (
            <WrapperMessage>
                <h3>From : {message.email}</h3>
                <h2>Subject: {message.name}</h2>
                <p>{message.body}</p>
            </WrapperMessage>
        );
    };

    const renderAllMessage = () => {
        if (messages && messages.length) {
            const listMessage = messages.map(message => {
                return (
                    <WrapperMessage onClick={handleOnClickMessage(message.id)}>
                        <p>From : {message.email}</p>
                        <p>Subject: {message.name}</p>
                        <p>{message.body}</p>
                    </WrapperMessage>
                );
            });
            return listMessage;
        }

        return null;
    };
    
    const handleRenderContentMessage = () => {
        if (messageActive) {
            return renderMessageActive();
        }
        return renderAllMessage();
    };

    const handleClear = () => () => {
        dispatch(clearMessageActive());
    };

    const handleOnClickMessage = (id) => () => {
        dispatch(setMessageActive(id));
    };

    useEffect(() => {
        handleRenderContentMessage();
    }, [messageActive, messages]);

    useEffect(() => {
        if(!messages.length){
            dispatch(getMessagesList());
        }
    }, []);

    return (
        <WrapperMessages>
            <button onClick={handleClear()}>Ver todos los mensajes </button>
            <h1>Messages</h1>
            {handleRenderContentMessage()}
        </WrapperMessages>
    );
};

export default connect(mapStateToProps)(Messages);