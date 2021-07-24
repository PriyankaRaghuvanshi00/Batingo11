import "./leftSide.css"

const Leftside = ({val,handleChange}) => {
   return (<div className="left-side">
      {/* buttons */}
      <div className="button">
         <button className="btn active">Facebook</button>
         <button className="btn">Instagram</button>
      </div>
      {/* buttons */}
      {/* introduction text */}
      <div className="intro-text">
         <h2>Customize Your Post</h2>
         <p>These features and text will only appear in your facebook post</p>
      </div>
      {/* introduction text */}
      {/* input section */}
      <div className="input">
         <h3>Sample Text</h3>
         <textarea value={val} onChange={handleChange}></textarea>
      </div>
      {/* input section */}
   </div>
   )
}

export default Leftside;