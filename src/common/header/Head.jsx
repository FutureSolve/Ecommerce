import React from "react"
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>

          <Link
              to="/"
               style={{maxWidth:20, textDecoration: 'none' , color: 'inherit' }}
            >
                       <label> Hambaka</label>
            </Link>
            
          </div>
          <div className='right row RText'>
            <span>🏳️‍⚧️</span>
            <label>EN</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
