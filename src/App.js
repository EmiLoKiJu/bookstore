import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';

import './App.css';
import BooksLogic from './components/bookslogic';
import Categories from './components/categories';

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
      <div className="dflex spacebetween"><Outlet /></div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div><BooksLogic /></div>} />
          <Route path="categories" element={<div><Categories /></div>} />
          <Route path="*" element={<div>Error 404: Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
