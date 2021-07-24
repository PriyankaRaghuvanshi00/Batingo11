import "./card.css"
import React, { useState, useEffect } from "react";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Card = ({ Text, isDekstop }) => {
   const [postText, setpostText] = useState('');
   const [showMore, setshowMore] = useState(false)
   // image for a avatar
   let image = 'https://cutshort.io/horizontal-og-image?img=https://cutshort-data.s3.amazonaws.com/cloudfront/public/companies/6082e764a273910b7fbb431e/logo-1619626986161-logo.png';

   useEffect(() => {
      function hiddeText(text, n) {
         let len = text?.length;
         if (len > n)
            setshowMore(true)
         else
            setshowMore(false)
         return len > n ? text.substr(0, n) + ' ...' : text
      }
      setpostText(hiddeText(Text, 500))
   }, [Text])

   const showMoreHandler = () => {
      setshowMore(false);
      setpostText(Text)
   }
   return <div className="right-body" style={{ borderRadius: isDekstop ? '10px' : null }}>
      <div className="body-header">
         <div className="body-header-tag">
            <div className="avatar" style={{ backgroundImage: `url('${image}')` }}></div>
            <div className="body-header-tag-text">
               <h4>Batingo11</h4>
               <p>Now</p>
            </div>
         </div>
         <MoreHorizIcon />
      </div>
      <div className="post-text" style={{ color: !postText ? 'gray' : null, textAlign: !postText ? 'center' : null }}>
         {postText ? postText : 'Please Enter SomeThing'}
         {showMore ? <a href='#' id="more" onClick={showMoreHandler}>{isDekstop ? 'See More' : 'More '}</a> : null}
      </div>
      <div className="footer">
         <div className="like"><ThumbUpAltIcon /><p>Like</p></div>
         <div className="comment"><ChatBubbleOutlineIcon /><p>Comment</p></div>
         <div className="share"><NearMeIcon /><p>Share</p></div>
         {isDekstop ?
            <div className="desktopOnly"><div className="avatar2" style={{ backgroundImage: `url('${image}')` }}></div><ArrowDropDownIcon /></div>
            : null}
      </div>
   </div>
}

export default Card;