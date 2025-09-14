
import { SnackbarProvider } from "notistack";
import { Provider } from 'react-redux';
import './app.css';
import Router from './routes/Router';
import store from './store/store.js';

function App() {

  return ( 
       <Provider store={store}>
            <SnackbarProvider maxSnack={3} autoHideDuration={2000} anchorOrigin={{ vertical: 'top', horizontal: 'left' }} > 
                      <Router/> 
                </SnackbarProvider>
                
           {/* <Router/> */}
       </Provider>
    )
} 

export default App
