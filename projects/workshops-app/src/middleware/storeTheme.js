const storeCounter = store => next => action => {
    next( action );

    localStorage.setItem( 'theme', store.getState().themeInfo.theme );
};

export default storeCounter;