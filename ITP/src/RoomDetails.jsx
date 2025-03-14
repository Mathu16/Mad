import React from "react";
import './CSS/RoomDetails.css';
import r1 from './assets/images/r1.jpeg';
import R from './assets/images/R.jpeg';
import bedroom from './assets/images/bedroom.jpg';


function RoomDetails() {
    return (
        <div className="main">

            <div className="r1">
                <img src={r1} alt="Room 1" className="room-img" />
                <div className="room-details">
                    <h3>Room1</h3>
                    <p><strong>Phone:</strong> 123-456-7890</p>
                    <p><strong>Location:</strong> Colombo, Sri Lanka</p>
                    <p className="price"><strong>Price:</strong> $100 per night</p>
                </div>
                <button className="book-room-btn">Book Room</button>
            </div>

            <div className="r1">
                <img src={R} alt="Room 2" className="room-img" />
                <div className="room-details">
                    <h3>Room2</h3>
                    <p><strong>Phone:</strong> 123-456-7890</p>
                    <p><strong>Location:</strong> Colombo, Sri Lanka</p>
                    <p className="price"><strong>Price:</strong> $120 per night</p>
                </div>
                <button className="book-room-btn">Book Room</button>
            </div>

            <div className="r1">
                <img src={bedroom} alt="Room 3" className="room-img" />
                <div className="room-details">
                    <h3>Room3</h3>
                    <p><strong>Phone:</strong> 123-456-7890</p>
                    <p><strong>Location:</strong> Colombo, Sri Lanka</p>
                    <p className="price"><strong>Price:</strong> $150 per night</p>
                </div>
                <button className="book-room-btn">Book Room</button>
            </div>

            <div className="r1">
                <img src={bedroom} alt="Room 3" className="room-img" />
                <div className="room-details">
                    <h3>Room4</h3>
                    <p><strong>Phone:</strong> 123-456-7890</p>
                    <p><strong>Location:</strong> Colombo, Sri Lanka</p>
                    <p className="price"><strong>Price:</strong> $150 per night</p>
                </div>
                <button className="book-room-btn">Book Room</button>
            </div>

            <div className="r1">
                <img src={bedroom} alt="Room 3" className="room-img" />
                <div className="room-details">
                    <h3>Room5</h3>
                    <p><strong>Phone:</strong> 123-456-7890</p>
                    <p><strong>Location:</strong> Colombo, Sri Lanka</p>
                    <p className="price"><strong>Price:</strong> $150 per night</p>
                </div>
                <button className="book-room-btn">Book Room</button>
            </div>

            <div className="r1">
                <img src={bedroom} alt="Room 3" className="room-img" />
                <div className="room-details">
                    <h3>Room6</h3>
                    <p><strong>Phone:</strong> 123-456-7890</p>
                    <p><strong>Location:</strong> Colombo, Sri Lanka</p>
                    <p className="price"><strong>Price:</strong> $150 per night</p>
                </div>
                <button className="book-room-btn">Book Room</button>
            </div>

            <div className="r1">
                <img src={bedroom} alt="Room 3" className="room-img" />
                <div className="room-details">
                    <h3>Room7</h3>
                    <p><strong>Phone:</strong> 123-456-7890</p>
                    <p><strong>Location:</strong> Colombo, Sri Lanka</p>
                    <p className="price"><strong>Price:</strong> $150 per night</p>
                </div>
                <button className="book-room-btn">Book Room</button>
            </div>

            

        </div>
    );
}

export default RoomDetails;
