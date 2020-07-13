import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon';
import { MailOpen, Bed, Card } from '@styled-icons/ionicons-outline';
import Modal from '../components/Modal';
import BoxNotification from '../components/Home/BoxNotification';

import { getHotelsInformation } from './actions/HotelsActions';
import { getMessagesList } from './actions/MessagesActions';


const WrapperHome = styled.div`
    display: grid;
    grid-template-columns: 1fr 250px;
    grid-column-gap: 20px;
    grid-row-gap: 0px;
    justify-items: stretch;
    align-items: stretch;

    @media (max-width: 768px) {
        display: flex;
    }
`;
const Notification = styled.section`
    background: #fff;
    margin-top: 30px;
    box-shadow: 2px 4px 11px -1px rgba(115, 110, 110, 0.97);
    padding: 10px;
`;
const Bienvenidos = styled.div`
    margin-top: 30px;
    background: rgb(175,167,228);
    background: linear-gradient(90deg, rgba(175,167,228,1) 0%, rgba(148,188,243,1) 100%);
    height: 170px;
    padding: 30px;
    box-shadow: 2px 4px 11px -1px rgba(115, 110, 110, 0.97);
    color: #fff;

    &> h3 {
        margin-top: 0;
    }
    & > hr {
        color: #ccc;
    }
`;

const ListHome = styled.div`
    height: 80px;
    background-color: #fff;
    margin-top: 20px;
    box-shadow: 2px 4px 11px -1px rgba(115, 110, 110, 0.97);
    padding: 10px;
    display: flex;

    & > div {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: flex-start;
        padding: 10px;
        border-bottom: 1px solid #6851D8;
        margin: 0 20px;

        & > div > p {
            margin: 3px;
        }
    }
`;

const Hoteles = styled.div`
    & .lt-grid-container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(2, 1fr);
        gap: 10px 10px;
        grid-template-areas: "FirstRow" "Second-row"
    }
      
    & .lt-FirstRow {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        gap: 10px 10px;
        grid-template-areas: ". . ."
        grid-area: lt-FirstRow;
    }
      
    & .lt-SecondRow {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
        gap: 10px 10px;
        grid-template-areas: ". ."
        grid-area: lt-Second-row;
    }
`;

const HotelInfo = styled.div`
    height: ${props => props.inherit ? 'inherit' : '200px'} ;
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.centerContent ? 'center' : 'space-between'};
    align-items: center;
    background: url('/images/default-hotel.jpg');
    background-size: cover;
    background-position: center;

    & > p {
        color: #ffff;
        font-weight: 700;
        font-size: 20px;
        text-transform: uppercase;
        margin-top: 5px;
    }

    & > button {
        height: 50px;
        width: 40%;
        margin: 10px auto;
        color: #fff;
        background-color: #6851D8;
        border-radius: 50px;
        font-size: 20px;
        border: none;
    }
`;

const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    color: #6851D8;
    padding-right: 10px;
    &:hover {
        color: ;
        scale: 1.2;
    }
  }
`;

const mapStateToProps = (state) => {
    const { infoHotels : { hotels, errorHotels, loadingHotels} } = state;
    const { infoMessages : { messages, errorMessages, loadingMessages} } = state;

    return {
        hotels,
        errorHotels,
        loadingHotels,
        messages,
        errorMessages,
        loadingMessages,
    }
};

const Home = ({
    dispatch,
    hotels,
    errorHotels,
    loadingHotels,
    messages,
    errorMessages,
    loadingMessages,
}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [activeElement, setActiveElement] = useState({});

    const arrayServices = [
        {
            service: 'Notificaciones',
            icon: <MailOpen size="40" />,
        },
        {
            service: 'Hoteles',
            icon: <Bed size="40" />,
        },
        {
            service: 'Pagos recibidos',
            icon: <Card size="40" />,
        },
    ];

    const HotelInfoBox = (hotel, center, size) => {
        if (hotel && hotel.information) {
            const {information : { company_name }} = hotel;
            return (
                <HotelInfo centerContent={center} inherit={size}>
                    <p>{company_name}</p>
                    <button onClick={handleButtonReserve(hotel)}>Reservar</button>
                </HotelInfo>
            );
        }
        return null;
    };

    const renderContentModal = () => {
        return HotelInfoBox(activeElement, 'centerContent', 'inherit');
    };

    const renderModal = () => {
        return <Modal renderContent={renderContentModal} show={modalVisible} setShow={setModalVisible}/>
    };
    const handleButtonReserve = (item) => () => {
        setActiveElement(item);
        setModalVisible(true);
    };

    /* renderizado de notificaciones */
    const renderPendingMessage = () => {
        if (messages && messages.length) {
            const listMessages = messages.map(message => {
                return (
                    <BoxNotification dispatch={dispatch} id={message.id} name={message.email} comment={message.body}/>
                );
            });
            return listMessages;
        } else if (errorMessages) {
            return <p>Error al cargar los mensajes</p>
        }
    };

    /* render servicios */
    const renderListServices = (arrayServices) => {
        const list = arrayServices.map( element => {
            return (
                <div>
                    <IconStyleWrapper>
                        {element.icon}
                    </IconStyleWrapper>
                    <div>
                        <p>{element.service}</p>
                        <p>is simple dum</p>
                    </div>
                </div>
            );
        });
        return (
            <ListHome>
                {list}
            </ListHome>
        );
    };

    const renderHotels = () => {
        // Crear un selector de los primeros 5 elementos del arreglo.
        const first = [];
        const second = [];

        if (hotels && hotels.length) {
            hotels.map((hotel, index) => {
                const element = HotelInfoBox(hotel);
                if (index > 4) {
                    return;
                }
                if (index < 3) {
                    return first.push(element);
                } else {
                    return second.push(element);
                }
            });
            return (
                <div className="lt-grid-container">
                    <div className="lt-FirstRow ">
                        {first}
                    </div>
                    <div className="lt-SecondRow">
                        {second}
                    </div>
                </div>
            );
        } else if (errorHotels) {
            return (
                <div>
                    <p> Ha ocurrido un error al cargar los hoteles </p>
                </div>
            );
        }
    };


    useEffect(() => {
        dispatch(getHotelsInformation());
        dispatch(getMessagesList());
    }, [dispatch]);

    return (
        <WrapperHome>
            {renderModal()}
            <div>
                <Bienvenidos>
                    <h3>Bienvenido </h3>
                    <h1>David Anderson </h1>
                    <hr/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatem, aliquam corrupti ducimus suscipit provident dolorum eveniet veritatis vel delectus quos iusto sint?</p>
                </Bienvenidos>
                    {renderListServices(arrayServices)}
                <Hoteles>
                    <h2>Hoteles Disponibles</h2>
                    {renderHotels(hotels)}
                </Hoteles>
            </div>
            <Notification>
                <h3>Notificaciones</h3>
                {renderPendingMessage()}
            </Notification>
        </WrapperHome>
    )
};

export default connect(mapStateToProps)(Home);