import Gallery from './Gallery';
import SearchForm from './SearchForm';
import ThemeToggle from './ThemeToggle';

// const secretKey = 'Us8iBZMzobgIfEkEirQnscy3-k70l-9lGlJfB7PzexM'
// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
// GET /search/photos
// https://api.unsplash.com/search/photos?page=1&query=office

const App = () => {
  return (
    <main>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  );
};
export default App;
