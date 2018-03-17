// use php -S localhost:3500
// don't faff using something else when above works fine!
// semicolons not in tut. Just put them in.

// note below does not work. See error on console:
// Uncaught SyntaxError: Unexpected token <
// Babel will transpile in next iteration
// fixed with additions in html babel cdn and script type="text/babel"
const {
    render
} = ReactDOM;

// const style = {
//     backgroundColor: 'orange',
//     color: 'white',
//     fontFamily: 'verdana'
// };

// JSX below
render(
    <h1 id='title' className='header' style={{backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'verdana'}}>
    Hello World
    </h1>,
    document.getElementById('react-container')
);