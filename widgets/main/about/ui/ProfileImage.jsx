const ProfileImage = () => {
    return (  
        <div className="flex">
            <img className="w-64 rounded-full z-0" src="/profile1.jpg" alt="" />
            <img className="w-64 rounded-full z-1 -ml-24" style={{height:"299px"}} src="/profile2.jpg" alt="" />
        </div>
    );
}
 
export default ProfileImage;