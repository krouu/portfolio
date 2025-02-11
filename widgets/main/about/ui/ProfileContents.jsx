const ProfileContents = ({title, contents}) => {
    return (  
        <div className="flex flex-col gap-1 text-xl font-black">
            <p>{title}</p>
            <p className="text-gray-600">{contents}</p>
        </div>
    );
}
 
export default ProfileContents;