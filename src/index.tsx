import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './presentation/stores';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Users } from './presentation/components/users/Users';
import { Layout } from './presentation/components/Layout';

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