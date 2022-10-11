
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path : '/', element: <Main></Main>,
      children: [
        {path : '/',
        loader : async () =>{
          return fetch('https://openapi.programming-hero.com/api/quiz')
        },
        element : <Topics></Topics> },
        {path: '/statistics', element : <Statistics></Statistics>},
        {path : '/blog', element: <Blog></Blog> },
        
      ],
    },
  { path :'*', element: <h2>This route not Found</h2> }
    
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
