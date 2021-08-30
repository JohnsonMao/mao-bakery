/* 
import formateDate from '../../utils/dateUtils';
const [currentTime, setCurrentTime] = useState(formateDate( Date.now() ))
const getTime = () => {
  setInterval(() => {
    const newTime = formateDate( Date.now() );
    setCurrentTime(currentTime => currentTime = newTime)
  }, 1000);
}

useEffect(() => {
  getTime()
},[currentTime])
 */