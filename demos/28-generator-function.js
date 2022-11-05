function *get() {
    yield 104;
    yield 105;
}

// A generator function can be paused and resumed
function *getCounter() {
    console.log( 1 );

    yield 100; // a yield is like an intermediate return value - the function is paused but does not complete yet

    yield 101;

    yield 102;

    yield 103;

    yield get();

    return;
}

// we get an iterator (we are NOT executing the function yet)
const iter = getCounter();

// we execute the function till it "yields"
let result;

result = iter.next();
console.log( result ); // { value: 100, done: false }
result = iter.next();
console.log( result ); // { value: 101, done: false }
result = iter.next();
console.log( result ); // { value: 102, done: false }
result = iter.next();
console.log( result ); // { value: 103, done: false }
result = iter.next();
console.log( result ); // { value: undefined, done: true }