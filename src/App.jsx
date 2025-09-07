import './App.css'
import { Provider } from 'react-redux';
import { BrowserRouter} from 'react-router';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import AppRouter from './router/AppRouter';
import { Suspense } from 'react';


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense loading={'loading...'}>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </Suspense>
      </PersistGate>
    </Provider>
  )
}

export default App;
