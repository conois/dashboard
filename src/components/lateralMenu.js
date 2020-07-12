import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon'
import { Fitness } from '@styled-icons/ionicons-outline/Fitness';
import { Calendar, Apps, Person, DocumentText, BarChart } from '@styled-icons/ionicons-outline';


const Wrapper = styled.section`
  height: 100vh;
  background: #6851D8;
  width: 70px;

  @media (max-width: 768px) {
        height: 70px;
        width: 100vw;
    }
`;
const ListMenu = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    padding-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 768px) {
        flex-direction: row;
        justify-content: space-around;
    }
`;
const ItemMenu = styled.li `
    padding-bottom: ${props => props.first ? "70px" : "30px"};
    padding-left: 0;

    @media (max-width: 768px) {
        padding-bottom: 0;
        flex-direction: row;
    }
` 
const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    color: #fff;

    &:hover {
        scale: 1.2;
    }
  }
`

const LateralMenu = () => {
    const itemsMenu = [
        {
            path: '/',
            icon: <Fitness size="30"/>,
            first: true,
        },
        {
            path: '/calendar',
            icon: <Calendar size="30"/>,
        },
        {
            path: '/apps',
            icon: <Apps size="30"/>,
        },
        {
            path: '/users',
            icon: <Person size="30"/>,
        },
        {
            path: '/reports',
            icon: <DocumentText size="30"/>,
        },
        {
            path: '/graphics',
            icon: <BarChart size="30"/>,
        },

    ];

    const buildListItem = (arrayList) => {
        const list = arrayList.map((element, index)=> {
            return (
                <ItemMenu key={index} first={element.first}>
                    <Link to={element.path} component={element.component}>
                        <IconStyleWrapper>
                            {element.icon}
                        </IconStyleWrapper>
                    </Link>
                </ItemMenu>
            )
        });
        return list;
    }

    return (
        <Wrapper>
            <ListMenu>
                {buildListItem(itemsMenu)}
            </ListMenu>
        </Wrapper>
    );
};

export default LateralMenu;
