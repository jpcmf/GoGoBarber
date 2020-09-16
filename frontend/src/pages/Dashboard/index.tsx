import React, { useState } from 'react';
import { FiClock } from 'react-icons/fi';

import Header from '../../components/Header';

import {
  Container,
  Content,
  Schedule,
  Calendar,
  NextAppointment,
  Section,
  Appointment,
} from './styles';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Container>
      <Header />

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <h2>Atendimento a seguir</h2>

            <div>
              <img src="https://via.placeholder.com/80" alt="avatar" />

              <strong>Leonardo Minatti</strong>

              <span>
                <FiClock size={20} /> 08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock size={16} /> 08:00
              </span>
              <div>
                <img src="https://via.placeholder.com/80" alt="avatar" />
                <strong>Leonardo Minatti</strong>
              </div>
            </Appointment>
            <Appointment>
              <span>
                <FiClock size={16} /> 08:00
              </span>
              <div>
                <img src="https://via.placeholder.com/80" alt="avatar" />
                <strong>Leonardo Minatti</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>

            <Appointment>
              <span>
                <FiClock size={16} /> 08:00
              </span>
              <div>
                <img src="https://via.placeholder.com/80" alt="avatar" />
                <strong>Leonardo Minatti</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>

        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
