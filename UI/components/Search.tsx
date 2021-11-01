import styles from '@/styles/Search.module.css';
import { useState, MouseEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/router';

export default function Search() {
  const [term, setTerm] = useState('');
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTerm(e.target.value);
  };

  const handleSubmit = (e: MouseEvent<HTMLFormElement>): void => {
    e.preventDefault();
    router.push(`/events/search?term=${term}`);
    setTerm('');
  };

  return (
    <div className={styles.search}>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={term}
          onChange={handleChange}
          placeholder='Search for events'
        />
      </form>
    </div>
  );
}
