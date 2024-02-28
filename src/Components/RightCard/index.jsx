import './index.css';

export default function RightCards({value,hours,period,bgColor="white"}){


    return(
        
        <div className='right-container' style={{backgroundColor:bgColor}}>
            <div className='card'>
                <div className='header'>
                    <h2>{value}</h2>
                    <p>...</p>
            </div>
            <div className='time'>
                <h1>{hours}hrs</h1> 
                <h3>last {period} {hours}hrs</h3>
            </div>
            </div>
        </div>
        
        
        
    )
}
