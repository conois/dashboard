import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon'
import { Calendar, Search, MailUnread, Settings, BarChart } from '@styled-icons/ionicons-outline';


const WrapperMenu = styled.div`
    height: 80px;
    width: auto;
    padding: 0 20px;
    background-color: #ffff;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 2px 4px 11px -1px rgba(115, 110, 110, 0.97);
`;
const ListMenuDashboard = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 30%;
`

const ItemMenu = styled.li `
    @media (max-width: 768px) {
    }
` 
const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    color: #000;
    
    &:hover {
        color: #ccc;
        scale: 1.2;
    }
  }
`

const ContainerMenu = () => {
    const itemsMenu = [
        {
            path: '/calendar',
            icon: <Calendar size="30"/>,
        },
        {
            path: '/search',
            icon: <Search size="30"/>,
        },
        {
            path: '/messages',
            icon: <MailUnread size="30"/>,
        },
        {
            path: '/settings',
            icon: <Settings size="30"/>,
        },
        {
            path: '/graphics',
            icon: <BarChart size="30"/>,
        },
    ]

    const buildListItem = (arrayList) => {
        const list = arrayList.map((element, index) => {
            return (
                <ItemMenu  key={index} first={element.first}>
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
        <WrapperMenu>
            <h2 as="a" href="/">
                Dashboard
            </h2>
            <ListMenuDashboard>
                {buildListItem(itemsMenu)}
            </ListMenuDashboard>
        </WrapperMenu>
    );
};

export default ContainerMenu;