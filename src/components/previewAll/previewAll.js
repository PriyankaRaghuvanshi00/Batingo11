import Card from "../card/card"
import "./previewAll.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import image from '../../asserts/icons8-folder.svg'
import InstagramIcon from '@material-ui/icons/Instagram';

const PreviewAll = (props) => {
   return <div className="preview">
      <div className="desktop">
         <div className="header-text-p">
            <FacebookIcon /> <p>Desktop News Feed</p>
         </div>
         <Card isDekstop={true} Text={props.Text} />
      </div>
      <div className="mobile">
         <div className="header-text-p">
            <FacebookIcon /> <p>Mobile  News Feed</p>
         </div>
         <Card Text={props.Text} isDekstop={false} />
      </div>
      <div className="insta">
         <div className="header-text-p">
            <InstagramIcon /> <p>Instagram Feed</p>
         </div>
         <div className="insta-body">
            <div style={{ backgroundImage: `url('${image}')` }} className="previewimage"></div>
            <div className="inta-body-text">
               <h3>Preview Unavailable</h3>
               <p>The post can't be displayed right now</p>
            </div>
         </div>
      </div>

   </div>
}

export default PreviewAll;