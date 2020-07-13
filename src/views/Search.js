import React, { useEffect, useMemo, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { BasicWrapper } from '../components/GridComponents/Grid';
import { getHotelsInformation } from './actions/HotelsActions';

const WrapperSearch = styled.div`
    background: #fff;
    padding: 50px;
    box-shadow: 2px 4px 11px -1px rgba(115, 110, 110, 0.97);
    margin: 50px 0;
`;

const Input = styled.input`
    width: 100%;
    height: 50px;
    border: 1px solid #ccc;
    font-size: 20px;
`;
const WrapperListHotels = styled.div`
    margin-top: 50px;
    padding: 20px 0;
    border: 1px solid #fff;
`;

const WrapperHotel = styled.div`
    height: 100px;
    border: 1px solid #ccc;
    padding: 20px;

    & p {
        font-size: 18px;
    }
`;


const mapStateToProps = (state) => {
    const { infoHotels : { hotels, errorHotels, loadingHotels} } = state;
    return {
        hotels,
        errorHotels,
        loadingHotels,
    };
};

const Search = ({
    dispatch,
    hotels,
    errorHotels,
    loadingHotels,
}) => {
    const [inputSearch, setInputSearch] = useState('');

    const filterList = (val) => {
        const filterElements = hotels.filter(hotel => hotel.information.company_name.toLowerCase().includes(val));
        return filterElements;
    };
    const filterListMemo = useMemo(() => filterList(inputSearch), [inputSearch]);

    const renderListFilter = () => {
        const listRender = filterListMemo.map( element => {
            const { information : { company_name } } = element;
            return (
                <WrapperHotel>
                    <p>Hotel name: {company_name}</p>
                </WrapperHotel>
            );
        });
        return listRender;
    };

    const renderAllHotels = () => {
        const listRender = hotels.map( element => {
            const { information : { company_name } } = element;
            return (
                <WrapperHotel>
                    <p>{company_name}</p>
                </WrapperHotel>
            );
        });

        return listRender;
    }

    const handleRender = () => {
        if (inputSearch === '') {
            return renderAllHotels();
        } else {
            return renderListFilter();
        }
    }

    const handleOnChangeInput = () => (event) => {
        setInputSearch(event.target.value.toLowerCase());
    };

    useEffect(() => {
        if(!hotels.length) {
            dispatch(getHotelsInformation());
        }
    }, []);

    return (
        <WrapperSearch>
            <Input placeholder="Escriba un filtro de busqueda, por ejemplo nombre" onChange={handleOnChangeInput()}></Input>
            <h2>Lista de hoteles </h2>
            <WrapperListHotels>
                {handleRender()}
            </WrapperListHotels>
        </WrapperSearch>
    );
};

export default connect(mapStateToProps)(Search);