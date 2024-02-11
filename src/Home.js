import house from './images/house.png';
import star from './images/star.png';
import plane from './images/plane.png';
import heart from './images/heart.png';
import './index.css';
const Home = () => {
    const iconSize = 100;
    return (  
        <div className="home">

                <div className="left">
                
                <div className="first-row">
                <h2>Less stress when sharing</h2>
                <h2>expenses on trips</h2>
                </div>
                  <div className="icon-container">
                  <img src={house} className="icon" />
                  <img src={plane} className="icon" />
                  <img src={heart} className="icon" />
                  <img src={star} className="icon" />
                  </div>

                   <div className="last-row">
                   <h4>Keep track of your shared expenses<h4>
                   </h4> and balances with housemates, trips, groups,<h4>
                   </h4> friends, and family.</h4>
                   </div>
                  

                   <button style={{ width: '100px' ,
                    height: '50px' ,
                    borderRadius: '5px', // Border radius
                    backgroundColor: '#007bff', // Background color
                    color: '#ffffff', // Text color
                    padding: '10px', // Padding
                    border: 'none', // Remove default border
                    cursor: 'pointer', // Change cursor to pointer on hover
                    fontSize: '17px'
                   
                   }}>
                    Sign up
                   </button>
                  </div>
               

        </div>
    );
}
 
export default Home;