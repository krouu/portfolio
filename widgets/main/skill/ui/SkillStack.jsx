const SkillStack = ({name, color}) => {
    return (  
        <div style={{backgroundColor:`${color}`}} className="p-2 md:p-3 rounded-lg md:rounded-xl text-xs md:text-base font-black text-white">{name}</div>
    );
}
 
export default SkillStack;