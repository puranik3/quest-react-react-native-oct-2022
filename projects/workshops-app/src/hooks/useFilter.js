import { useState, useEffect } from 'react';

const useFilter = ( sessions ) => {
    const [ filterKey, setFilterKey ] = useState( '' );
    const [ filteredSessions, setFilteredSessions ] = useState( [] );

    useEffect(
        () => {
            setFilteredSessions(
                sessions.filter(
                    session => session.name.toLowerCase().includes( filterKey.toLowerCase() ) || session.abstract.toLowerCase().includes( filterKey.toLowerCase() )
                )
            );
        },
        [ sessions, filterKey ]
    );

    return {
        // filterKey: filterKey,
        filterKey,
        setFilterKey,
        filteredSessions
    };
};

export default useFilter;