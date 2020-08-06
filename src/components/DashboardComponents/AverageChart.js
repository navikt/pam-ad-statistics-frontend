import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchAdAction} from "../../store/AdActions";

const AverageChart = () => {

  const data = useSelector((state) => state.AdReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdAction())
  }, [dispatch])


  const averageTimeOnPage = data.averageTimeOnPage;

<<<<<<< HEAD
  var totalTimeOnPage = data.averageTimeOnPage.reduce((acc, val)=> acc + val);

  const totalAverage = totalTimeOnPage/averageTimeOnPage.length;
=======
  var totalTimeOnPage = data.averageTimeOnPage.reduce((acc, val, idx) => {
        return acc + val*(data.viewsPerReferral[idx])
    }, 0)

  const totalAverage = totalTimeOnPage/data.pageViews
>>>>>>> 5c7e29940cd2dd137763ec0760eae566e3027bf4

  var minute = Math.floor(totalAverage / 60);
  var seconds = Math.floor(totalAverage - minute * 60);

  return(
    <div className = "text-component">
      {minute === 0 ?
      ( <div className = "text-component__top-right">{seconds} sek</div> ) :
      ( <div className = "text-component__top-right">{minute} m {seconds} sek</div> )
      }
      <div className = "text-component__bot-right">Gjennomsnittlig tid sett på annonsen</div>
    </div>
  );
};

export default AverageChart;
