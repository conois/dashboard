import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { MailOpen } from '@styled-icons/ionicons-outline';
import { setMessageActive } from '../../views/actions/MessagesActions';

const BoxNotificationWrapper = styled.div`
    margin-bottom: 5px;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 6px;

    & > a {
        text-decoration: none;
        color: #000;
    }
    & div {
        display: flex;
        justify-content: space-between;
        align-items: unset;
    }
    & div > p {
        margin: 3px;
        max-height: 40px;
        overflow: hidden;
    }
    & h4 {
        margin: 0;
    }
    & p {
        margin: 5px 0;
    }
`;

const BoxNotification = ({dispatch, id, name, comment}) => {

    const getFecha = () => {
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;

        if(month < 10){
            return (`${day}-0${month}`);
        }else{
            return (`${day}-${month}`);
        }
    };

    const handleOnClickMessage = (id) => () => {
        dispatch(setMessageActive(id));
    };

    return (
        <BoxNotificationWrapper onClick={handleOnClickMessage(id)}>
            <Link 
                to={{
                    pathname: "/messages",
                }}
            >
                <div>
                    <MailOpen size="40"/>
                    <p>{getFecha()}</p>     
                </div>
                <h4>{name}</h4>
                <p>{comment}</p>
            </Link>
        </BoxNotificationWrapper>
    );
};

export default BoxNotification;

