const pad = n => ( n + '' ).padStart( 2, '0' );

// units = 'minutes' | 'hours' | 'hh:mm:ss'
const formatDuration = ( durationInHours, units = 'split' ) => {
    let seconds, minutes, hours;

    switch( units ) {
        case 'split':
            seconds = Math.round( durationInHours * 3600 );
            
            hours = Math.floor( seconds / 3600 );
            seconds -= hours * 3600;
            
            minutes = Math.floor( seconds / 60 );
            seconds -= minutes * 60;
            
            return `${pad( hours )}:${pad( minutes )}:${pad( seconds )}`;
        case 'minutes':
            minutes = Math.round( durationInHours * 60 );
            return  `${minutes} minutes`;
        case 'hours':
            return `${durationInHours} hours`;
        default:
            return `${durationInHours} hours`;
    }
};

export {
    formatDuration
}