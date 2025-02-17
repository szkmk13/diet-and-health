'use client'; // ✅ Required for using hooks like useState and useRouter

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // ✅ Correct import for App Router
import { Button, Center, Loader, PasswordInput, TextInput } from '@mantine/core';
import { InlineInputClasses } from '@mantine/core/lib/components/InlineInput';
import classes from './page.module.css';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); // ✅ Now works in App Router
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    console.log(username, password);
    e.preventDefault();
    setError('');

    const result = await signIn('credentials', {
      username,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError('Invalid username or password');
    } else {
      router.push('/admin'); // ✅ Redirect works correctly
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Center>
        <form onSubmit={handleLogin}>
          <TextInput
            label="nazwa użytkownika"
            placeholder="monia"
            required
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <PasswordInput
            label="hasło"
            placeholder="haslo123"
            required
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            classNames={{ input: classes.passwordInput, label: classes.inputLabel }}
          />

          <Button type="submit" disabled={loading} className={classes.button}>
            {loading ? <Loader size="sm" /> : 'Zaloguj się'}
          </Button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </Center>
    </div>
  );
}
