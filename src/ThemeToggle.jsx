import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useGlobalContext } from './contex';

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  return (
    <section className='toggle-container'>
      <button className='dark-toggle' onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsFillMoonFill
            className='toggle-icon'
            style={{ color: '#f0f0f0' }}
          />
        ) : (
          <BsFillSunFill className='toggle-icon' />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
