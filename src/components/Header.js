import React from 'react'
import './components-css/Header.css'

function Header() {
    

    return (
        <div className="header">
            <h1>Welcome to Fine Recipes</h1>
            <p>A site where you can exchange your homemade recipes with people from all over the world!</p>
            <div className="header-buttons">
                <div className="popular-recipes">
                    <p>Check out our most popular recipes!</p>
                    <button>Check it out!</button>
                    <p>Or you can scroll through all of our recipes.</p>
                    <button>See Recipes</button>
                </div>
            </div>
        </div>
    )
}

export default Header
