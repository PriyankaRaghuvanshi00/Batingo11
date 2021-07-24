import "./popUp.css"
import ClearIcon from '@material-ui/icons/Clear';

const PopUp = (props) => {
   return props.show ? <div className="background">
      <div className="popUp" >
         <div className="popUp-inner">
            <ClearIcon onClick={props.handler} style={{ cursor: 'pointer', float: 'right' }} />
            {props.children}
         </div>
      </div>
   </div> : null;
}

export default PopUp;