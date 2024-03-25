import Angular from './images/angular.jpg';
import Bootstrap from './images/bootstrap5.png';
import Csharp from './images/csharp.png';
import KompleWeb from './images/kompleweb.jpg';
import './Course.css';

const courseMap = {
    Angular,
    Bootstrap,
    Csharp,
    KompleWeb,
}

function Course({courseName}) {
    return (<div className='courseDiv'>
        <img className='course' src={courseMap[courseName]} alt="course"></img>
    </div>);
}

export default Course;