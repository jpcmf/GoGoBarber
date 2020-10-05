import { renderHook } from '@testing-library/react-hooks';
import { AuthProvider, useAuth } from '../../hooks/auth';

describe('Auth hook', () => {
  it('should be able to signn in', () => {
    const { result } = renderHook(() => useAuth(), { wrapper: AuthProvider });

    result.current.signIn({
      email: 'fulano@email.com',
      password: '123456',
    });

    expect(result.current.user.email).toEqual('fulano@email.com');
  });
});
