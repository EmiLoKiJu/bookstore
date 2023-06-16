import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import Categories from './components/categories';
import BooksList from './components/bookslist';
import AddBook from './components/addbook';
import { getBooks } from './redux/books/booksSlice';
import userIcon from './img/userIcon.png';

function Layout() {
  return (
    <div className="body">
      <div className="dflex spacebetween navcont">
        <div className="dflex">
          <h1 className="Montserrat">Bookstore CMS</h1>
          <h2 className="navbar-element Montserrat dflex"><a href=".">Books</a></h2>
          <h2 className="navbar-element Montserrat dflex"><a href="./categories">Author</a></h2>
        </div>
        <img src={userIcon} alt="user" className="user-icon" />
      </div>
      <span className="spanline dflex" />
      <div className="not-navbar"><Outlet /></div>
    </div>
  );
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={(
              <div>
                <BooksList />
                <AddBook />
              </div>
            )}
          />
          <Route path="categories" element={<div><Categories /></div>} />
          <Route path="*" element={<div>Error 404: Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
