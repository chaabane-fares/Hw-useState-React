import './index.css';
import personImg from '../../Assets/ramos.jpg'
import App from '../../App'

export default function LeftCard(){

    
    return(
        <div className='left-container'>
            <div className='presentation'>
                <img src={personImg} alt="person" />
                <h3 className='text' id='report'>Report for</h3>
                <h1 className='text'>Jeremy Robson</h1>
            </div>
            <div className='period'>
                <h2 onClick={()=>App.handleDailyClick()}>Daily</h2>
                <h2 onClick={()=>App.handleWeeklyClick()}>Weekly</h2>
                <h2 onClick={()=>App.handleMonthlyClick()}>Monthly</h2>
            </div>
        </div>
    )
}
