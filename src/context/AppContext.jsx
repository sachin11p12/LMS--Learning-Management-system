import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from  'humanize-duration';

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();

  const [allCourses, setAllcourses] = useState([]);
  const [isEducator, setIsEducator] = useState(true);

  const fetchAllCourses = async () => {
    setAllcourses(dummyCourses);
  };


  //funtion to calculate rating
  const calculaterating = (course )=> {
    if(course.courseRatings.length === 0 ){
      return 0;
    }
    let totalRating = 0;
    course.courseRatings.forEach(rating => {
      totalRating += rating.rating
    })
    return totalRating / course.courseRatings.length;
  }
  //function to calculate course chapter time
  const calculateChapterTime = () => {
    let time = 0
    chapter.chapterContent.map((lecture)=> time += lecture.lectureDuration)
    return humanizeDuration(time * 60 * 1000, {units:["h", "m"]})
  }

  //function to calculate Course duration
  const calculteCourseDuration = (course)=> {

    let time =0;

    course.courseContent.map((chapter)=> chapter.chapterContent.map(
      (lecture)=> time += lecture.lectureDuration 
    ))
    return humanizeDuration(time * 60 * 1000, {units:["h", "m"]})
  }

  // function calculate to No of Lectures in the course

  const calculateNoOfLectures = (course)=> {
    let totalLectures = 0;
    course.courseContent.forEach(chapter => {
      if(Array.isArray(chapter.chapterContent)){
        totalLectures += chapter.chapterContent.lengtrh
      }
    });
    return totalLectures
  }

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const value = {
    currency,
    allCourses,
    navigate,
    calculaterating,
    isEducator,
    setIsEducator, calculateNoOfLectures, calculteCourseDuration, calculateChapterTime
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
