import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTheme } from '../../../reducers/theme';
import { selectItems } from '../../../reducers/search';
import {
    fetchItemsThunk
} from '../../../actions/creators';

const Home = () => {
    const dispatch = useDispatch();
    const theme = useSelector( selectTheme );
    const items = useSelector( selectItems );
    const [ searchKey, setSearchKey ] = useState( '' );

    const fetchSearchItems = ( event ) => {
        setSearchKey( event.target.value );

        // the action returned by this is a function - so thunk middleware will execute this function
        dispatch( fetchItemsThunk( event.target.value ) );
    };

    return (
        <div className={`border border-secondary p-5 bg-${theme} text-${theme === 'dark' ? 'light' : 'dark' }`}>
            <h1>Workshops App</h1>
            <hr />

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