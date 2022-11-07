const items = [];

// 1 million fake items
for( let i = 1; i <= 1e6; i++ ) {
    items.push({
        id: i,
        name: 'ITEM ' + i
    });
}

const search = ( key ) => {
    console.log( 'search called' );
    
    return new Promise(resolve => {
        setTimeout(() => {
            const results = [];

            for( let i = 0; i < items.length; i++ ) {
                if( items[i].name.toLowerCase().includes( key.toLowerCase() ) ) {
                    results.push( items[i] );
                }

                if( results.length === 5 ) {
                    break;
                }
            }

            resolve( results );
        }, Math.floor( Math.random() * 5000 ) );
    });
};

export {
    search
};