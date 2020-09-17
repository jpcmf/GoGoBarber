import React from 'react';
import { FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { useAuth } from '../../context/AuthContext';

import { Container, Content, Profile, Logout } from './styles';

const Header: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={logo} alt="GoBaber" />
        </Link>

        <Profile>
          <img
            src={
              user.avatar_url
                ? user.avatar_url
                : `https://api.adorable.io/avatars/56/${user.name}.png`
            }
            alt={user.name}
          />

          <div>
            <span>Bem-vindo,</span>
            <strong>{user.name}</strong>
          </div>
        </Profile>

        <Logout onClick={signOut}>
          <FiPower size={20} />
        </Logout>
      </Content>
    </Container>
  );
};

export default Header;
