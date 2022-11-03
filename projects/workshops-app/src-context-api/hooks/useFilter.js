import { useState, useEffect } from 'react';

const useFilter = ( items, keys ) => {
    const [ filterKey, setFilterKey ] = useState( '' );
    const [ filteredItems, setFilteredItems ] = useState( [] );

    useEffect(
        () => {
            setFilteredItems(
                items.filter(
                    session => keys.some(
                        key => session[key].toLowerCase().includes (filterKey.toLowerCase() )
                    )
                )
            );
        },
        [ items, filterKey, keys ]
    );

    return {
        // filterKey: filterKey,
        filterKey,
        setFilterKey,
        filteredItems
    };
};

export default useFilter;