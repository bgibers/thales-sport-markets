import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import { Container } from './styled-components';
import Positions from './components/Positions';
import { navItems } from './components/NavigationBar/NavigationBar';
import TransactionsHistory from './components/TransactionsHistory';
import UserStats from './components/UserStats';

const Profile: React.FC = () => {
    const [navItem, setNavItem] = useState<number>(1);

    return (
        <Container>
            <UserStats />
            <NavigationBar itemSelected={navItem} onSelectItem={(index) => setNavItem(index)} />
            {navItems[1].id == navItem && <Positions />}
            {navItems[0].id == navItem && <TransactionsHistory />}
        </Container>
    );
};

export default Profile;
