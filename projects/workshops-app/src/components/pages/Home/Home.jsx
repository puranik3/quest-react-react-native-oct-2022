import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTheme } from '../../../reducers/theme';
import { selectItems, selectKey } from '../../../reducers/search';
import {
    fetchItems,
    fetchItemsThunk
} from '../../../actions/creators';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const theme = useSelector( selectTheme );
    const items = useSelector( selectItems );
    const searchKey = useSelector( selectKey );

    const fetchSearchItems = ( event ) => {
        // ideally we would like to debounce this dispatch
        // https://www.freecodecamp.org/news/javascript-debounce-example/
        // the action returned by this is a function - so thunk middleware will execute this function
        // dispatch( fetchItemsThunk( event.target.value ) );

        // we are using saga - we display FETCH_ITEMS action - saga will take care of fetching search results, and storing it in the store (side-effect)
        dispatch( fetchItems( event.target.value ) );
    };

    return (
        <div className={`border border-secondary p-5 bg-${theme} text-${theme === 'dark' ? 'light' : 'dark' }`}>
            <h1>{t( "home.title" )}</h1>
            <hr />

            <button onClick={() => i18n.changeLanguage( 'en' )}>English</button>
            <button onClick={() => i18n.changeLanguage( 'fr' )}>French</button>
            <button onClick={() => i18n.changeLanguage( 'ml' )}>Malayalam</button>

            <div className="alert alert-secondary">
                <input
                    type="search"
                    value={searchKey}
                    onChange={fetchSearchItems}
                />
                
                You typed: {searchKey}

                <h3>Suggestions</h3>
                {
                    items.map(
                        item => (
                            <div key={item.id}>{item.name}</div>
                        )
                    )
                }
            </div>

            <p>
                The Workshops application serves details of (fictitious) technical workshops happening in various cities. Every workshop has a broad topic (eg. JavaScript), and a workshop has many sessions (each session covers a sub-topic, eg. Closures in JavaScript).
            </p>

            <p>
                You can view a list of workshops, details of every workshop, sessions in a workshop, and also add a new session for a workshop.
            </p>
        </div>
    );
}
 
export default Home;