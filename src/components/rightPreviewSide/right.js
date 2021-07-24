import "./right.css"
import Card from "../card/card";
import FacebookIcon from '@material-ui/icons/Facebook';
import React, { useState } from "react";
import PopUp from "../popUp/popUp";
import PreviewAll from "../previewAll/previewAll"

const Right = ({ Text }) => {
   const [showPopUp, setshowPopUp] = useState(false);
   const showPopUpHandle = () => {
      setshowPopUp(!showPopUp);
   }
   return <React.Fragment>
      <div className="right">
         <header>
            <div className="header-text">
               <h3>Preview</h3>
               <div className="header-text-p">
                  <FacebookIcon /> <p>Mobile  News Feed</p>
               </div>
            </div>
            <button className="btn" onClick={showPopUpHandle}>Preview All</button>
         </header>
         <Card Text={Text} />
      </div>
      {
         showPopUp ? <PopUp show="true" handler={showPopUpHandle}>
            <PreviewAll Text={Text}  />
         
         </PopUp> : null
      }
   </React.Fragment>
}

export default Right;