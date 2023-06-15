import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import Categories from './components/categories';
import BooksList from './components/bookslist';
import AddBook from './components/addbook';
import { getBooks } from './redux/books/booksSlice';

function Layout() {
  return (
    <div className="body">
      <div className="dflex spacebetween navcont">
        <h1>Bookstore</h1>
        <div className="dflex mr10">
          <h2 className="h2-class"><a href=".">Books</a></h2>
          <h2 className="h2-class"><a href="./categories">Author</a></h2>
        </div>
      </div>
      <div><Outlet /></div>
    </div>
  );
}

function App() {
  const { isLoading } = useSelector((store) => store.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

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
