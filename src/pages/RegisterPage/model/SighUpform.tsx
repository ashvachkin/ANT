import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

import { signUp } from '~/shared/api';

type Role = 'student' | 'mentor' | 'admin';

interface FormData {
  email: string;
  password: string;
  role: Role;
  firstname: string;
  lastname: string;
}

const SignUpForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [form, setForm] = useState<FormData>({
    email: '',
    password: '',
    role: 'student',
    firstname: '',
    lastname: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value as string,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setLoading(true);

    try {
      await signUp(form);
      setSuccess(true);
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error: unknown) {
      const err = error as { response?: { data?: { message?: string } } };
      const message = err.response?.data?.message || 'Ошибка регистрации';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    padding: '8px 12px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: '40px auto',
        padding: '20px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        borderRadius: '8px',
      }}
    >
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>{t('auth.registration')}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <input
            name='firstname'
            placeholder='Имя'
            value={form.firstname}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            name='lastname'
            placeholder='Фамилия'
            value={form.lastname}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={form.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type='password'
            name='password'
            placeholder='Пароль'
            value={form.password}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <select name='role' value={form.role} onChange={handleChange} style={inputStyle}>
            <option value='student'>{t('role.student')}</option>
            <option value='mentor'>{t('role.mentor')}</option>
            <option value='admin'>{t('role.admin')}</option>
          </select>
        </div>
        <button
          type='submit'
          disabled={loading}
          style={{
            padding: '10px',
            backgroundColor: '#52c41a',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? 'Регистрируем...' : 'Зарегистрироваться'}
        </button>
        {success && (
          <p style={{ color: 'green', textAlign: 'center', margin: '10px 0' }}>
            {t('auth.registrationSuccess')}
          </p>
        )}
        {error && <p style={{ color: 'red', textAlign: 'center', margin: '10px 0' }}> {error}</p>}
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p style={{ color: '#666', marginBottom: '10px' }}>{t('auth.alreadyHaveAccount')}</p>
          <Link
            to='/login'
            style={{
              display: 'inline-block',
              padding: '8px 16px',
              backgroundColor: '#1890ff',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              transition: 'background-color 0.2s',
            }}
          >
            {t('auth.login')}
          </Link>
        </div>
      </form>
    </div>
  );
};

export { SignUpForm };
