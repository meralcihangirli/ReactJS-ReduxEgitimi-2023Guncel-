import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Courses from './Courses';
import Loading from './Loading';

function App() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

const deleteCourse=(id)=>{
const afterDeletedCourses=courses.filter((course)=>course.id!==id);
setCourses(afterDeletedCourses)
}

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/courses');
      setCourses(response.data);
      setLoading(false);
    }
    catch (error) {
      setLoading(false);
    }


   // debugger;
  };
  useEffect(() => {
    fetchCourses();
  }, [])
  return (
    <div className="App">
      {loading ? <Loading /> : <Courses courses={courses} removeCourse={deleteCourse} />}

    </div>
  );
}

export default App;
