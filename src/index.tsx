import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Users } from './components/users/Users';
import { store } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        // path: "todos",
        element: <App />,
      },
      {
        path: "users",
        element: <Users />,
      },
    ]
  },
  
]);

root.render(
  <Provider store={store} >
    <RouterProvider router={router} />
  </Provider>
);