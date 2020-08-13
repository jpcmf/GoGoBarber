import AppError from '@shared/errors/AppError';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointment: CreateAppointmentService;

describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to create a new appointment', async () => {
    const appointment = await createAppointment.execute({
      date: new Date(),
      user_id: '131313',
      provider_id: '121212',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('121212');
  });

  it('should not be able to create appointment on the same time', async () => {
    const appointmentDate = new Date();

    await createAppointment.execute({
      date: appointmentDate,
      user_id: '131313',
      provider_id: '121212',
    });

    expect(
      createAppointment.execute({
        date: appointmentDate,
        user_id: '131313',
        provider_id: '121212',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
