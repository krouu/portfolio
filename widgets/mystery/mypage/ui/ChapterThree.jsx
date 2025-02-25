import Title from "./Title";

const ChapterThree = () => {
    return (  
        <div className="flex flex-col gap-20">
            <Title title={"# 첫인상은 shy girl, 친해지면 못말리는 아가씨"} />
            <div className="flex flex-col gap-10 text-xl pb-36">
                <p>수줍..</p>
                <p style={{paddingLeft:"30%"}}>수줍..</p>
                <p style={{paddingLeft:"60%"}}>부끄..</p>
                <p style={{paddingLeft:"90%"}}>부끄..</p>
            </div>
            <div>
                <div className="flex justify-between items-center">
                    <img className="w-1/2" src="/jueun2.jpg" alt="" />
                    <p className="text-5xl">?</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-5xl">??</p>
                    <img className="w-1/2" src="/jueun3.jpg" alt="" />
                </div>
            </div>
        </div>
    );
}
 
export default ChapterThree;