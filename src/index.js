import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Preloader from './components/Preloader';
const AppWithPreloader = React.lazy(() => import('./App'));


ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={<Preloader />}>
      <AppWithPreloader />
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
