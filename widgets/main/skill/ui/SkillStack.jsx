const SkillStack = ({name, color}) => {
    return (  
        <div style={{backgroundColor:`${color}`}} className="p-3 rounded-xl font-black text-white">{name}</div>
    );
}
 
export default SkillStack;