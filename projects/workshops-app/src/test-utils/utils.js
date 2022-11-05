import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../store';

const AllProviders = ( { children } ) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                {children}
            </BrowserRouter>
        </Provider>
    );
}

export {
    AllProviders
};