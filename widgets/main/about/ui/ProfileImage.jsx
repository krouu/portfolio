const ProfileImage = () => {
    return (  
        <div className="flex">
            <img className="w-24 h-auto md:w-52 lg:w-64 rounded-full z-0" src="/profile1.jpg" alt="" />
            <img className="w-24 h-auto md:w-52 lg:w-64 rounded-full z-1 -ml-10 md:-ml-16 lg:-ml-24" src="/profile2.jpg" alt="" />
        </div>
    );
}
 
export default ProfileImage;