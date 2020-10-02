import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { isToday, format, isAfter } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { FiClock } from 'react-icons/fi';
import DayPicker, { DayModifiers } from 'react-day-picker';
import { parseISO } from 'date-fns/esm';
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
  EmptyContent,
} from './styles';

import { useAuth } from '../../hooks/auth';
import LoadingSpinner from '../../components/LoadingSpinner';

import api from '../../services/api';

interface MonthAvailabilityItem {
  day: number;
  available: boolean;
}

interface Appointment {
  id: string;
  date: string;
  hourFormatted: string;
  user: {
    name: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const [loading, setLoading] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const [monthAvailability, setMonthAvailability] = useState<
    MonthAvailabilityItem[]
  >([]);

  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available && !modifiers.disabled) {
      setSelectedDate(day);
    }
  }, []);

  const handleMonthChange = useCallback((month: Date) => {
    setCurrentMonth(month);
  }, []);

  useEffect(() => {
    api
      .get(`/providers/${user.id}/month-availability`, {
        params: {
          year: currentMonth.getFullYear(),
          month: currentMonth.getMonth() + 1,
        },
      })
      .then((response) => {
        setMonthAvailability(response.data);
      });
  }, [currentMonth, user.id]);

  useEffect(() => {
    async function loadAppointments() {
      try {
        setLoading(true);

        const response = await api.get<Appointment[]>('/appointments/me', {
          params: {
            year: selectedDate.getFullYear(),
            month: selectedDate.getMonth() + 1,
            day: selectedDate.getDate(),
          },
        });

        const appointmentsFormatted = response.data.map((appointment) => {
          return {
            ...appointment,
            hourFormatted: format(parseISO(appointment.date), 'HH:mm'),
          };
        });

        setAppointments(appointmentsFormatted);
      } catch (err) {
        // toast error
      } finally {
        setLoading(false);
      }
    }

    loadAppointments();
  }, [selectedDate]);

  const disabledDays = useMemo(() => {
    const dates = monthAvailability
      .filter((monthDay) => monthDay.available === false)
      .map((monthDay) => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();

        return new Date(year, month, monthDay.day);
      });

    return dates;
  }, [currentMonth, monthAvailability]);

  const selectedDateAsText = useMemo(() => {
    return format(selectedDate, "'Dia' dd 'de' MMMM", { locale: ptBR });
  }, [selectedDate]);

  const selectedWeekDay = useMemo(() => {
    return format(selectedDate, 'cccc', { locale: ptBR });
  }, [selectedDate]);

  const morningAppointments = useMemo(() => {
    return appointments.filter((appointment) => {
      return parseISO(appointment.date).getHours() < 12;
    });
  }, [appointments]);

  const afternoonAppointments = useMemo(() => {
    return appointments.filter((appointment) => {
      return parseISO(appointment.date).getHours() >= 12;
    });
  }, [appointments]);

  const nextAppointment = useMemo(() => {
    return appointments.find((appointment) =>
      isAfter(parseISO(appointment.date), new Date()),
    );
  }, [appointments]);

  return (
    <Container>
      <Header />

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            {isToday(selectedDate) && <span>Hoje</span>}
            <span>{selectedDateAsText}</span>
            <span>{selectedWeekDay}</span>
          </p>

          {isToday(selectedDate) && nextAppointment && (
            <NextAppointment>
              <h2>Agendamento a seguir</h2>

              <div>
                <img
                  src={
                    nextAppointment.user.avatar_url
                      ? nextAppointment.user.avatar_url
                      : `https://api.adorable.io/avatars/80/${nextAppointment.user.name}.png`
                  }
                  alt={nextAppointment?.user.name}
                />

                <strong>{nextAppointment.user.name}</strong>

                <span>
                  <FiClock size={20} /> {nextAppointment.hourFormatted}
                </span>
              </div>
            </NextAppointment>
          )}

          <Section>
            <strong>Manhã</strong>

            {loading ? (
              <div className="spinner">
                <LoadingSpinner />
              </div>
            ) : (
              morningAppointments.map((appointment) => (
                <Appointment key={appointment.id}>
                  <span>
                    <FiClock size={16} /> {appointment.hourFormatted}
                  </span>
                  <div>
                    <img
                      src={
                        appointment.user.avatar_url
                          ? appointment.user.avatar_url
                          : `https://api.adorable.io/avatars/56/${appointment.user.name}.png`
                      }
                      alt={appointment.user.name}
                    />
                    <strong>{appointment.user.name}</strong>
                  </div>
                </Appointment>
              ))
            )}

            {!morningAppointments.length && !loading && (
              <EmptyContent>
                <span role="img" aria-label="calendário">
                  📅
                </span>{' '}
                Nenhum agendamento para esta manhã
              </EmptyContent>
            )}
          </Section>

          <Section>
            <strong>Tarde</strong>

            {loading ? (
              <div className="spinner">
                <LoadingSpinner />
              </div>
            ) : (
              afternoonAppointments.map((appointment) => (
                <Appointment key={appointment.id}>
                  <span>
                    <FiClock size={16} /> {appointment.hourFormatted}
                  </span>
                  <div>
                    <img
                      src={
                        appointment.user.avatar_url
                          ? appointment.user.avatar_url
                          : `https://api.adorable.io/avatars/56/${appointment.user.name}.png`
                      }
                      alt={appointment.user.name}
                    />
                    <strong>{appointment.user.name}</strong>
                  </div>
                </Appointment>
              ))
            )}

            {!afternoonAppointments.length && !loading && (
              <EmptyContent>
                <span role="img" aria-label="calendário">
                  📅
                </span>{' '}
                Nenhum agendamento para esta tarde
              </EmptyContent>
            )}
          </Section>
        </Schedule>

        <Calendar>
          <DayPicker
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6] }, ...disabledDays]}
            modifiers={{ available: { daysOfWeek: [1, 2, 3, 4, 5] } }}
            selectedDays={selectedDate}
            onDayClick={handleDateChange}
            onMonthChange={handleMonthChange}
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
