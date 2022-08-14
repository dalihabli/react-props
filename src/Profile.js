import PropTypes from "prop-types";


import  "./profile.css"
const Profile =({props, handleClick})=>{
return (
    
    <>
    <div className="container">
       
    <h1>{props.fullName}</h1>
    <h2>{props.bio}</h2>
    <h3>{props.profession}</h3>
    <button onClick = {() => handleClick(props.fullName)}>clickme</button>

    </div>
    </>
    
    
);
   

};

Profile.propTypes={
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string, 
    
}


    
    
   





export default Profile ;