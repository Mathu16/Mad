import React, { useState } from 'react';
import './CSS/System.css'
function System() {

    return (
        <div className="container">
        <h2>Manage Hotel Rooms</h2>
        <form>
            <input type="number" name="price" placeholder="Enter price" required />
            <input type="file" accept="image/*" />
            <textarea name="description" placeholder="Enter description" required></textarea>
            <input type="text" name="address" placeholder="Enter address" required />
            <select name="ac">
                <option value="AC">AC</option>
                <option value="Non-AC">Non-AC</option>
            </select>
            <select name="roomType">
                <option value="Single">Single Room</option>
                <option value="Double">Double Room</option>
                <option value="Triple">Triple Room</option>
            </select>
            <button type="submit">Add Room</button>
        </form>
    </div>
);
}

export default System;
