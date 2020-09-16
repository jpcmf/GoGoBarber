import React, { useCallback, useState } from 'react';

import { FiClock } from 'react-icons/fi';
import DayPicker, { DayModifiers } from 'react-day-picker';
import Header from '../../components/Header';
import 'react-day-picker/lib/style.css';

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

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available) {
      setSelectedDate(day);
    }
  }, []);
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

        <Calendar>
          <DayPicker
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6] }]}
            modifiers={{ available: { daysOfWeek: [1, 2, 3, 4, 5] } }}
            selectedDays={selectedDate}
            onDayClick={handleDateChange}
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ]}
          />
        </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
