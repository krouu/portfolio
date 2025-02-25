import Title from "./Title";

const ChapterOne = () => {
    return (  
        <div className="flex flex-col gap-20">
            <Title title={"# 도전을 무서워하지 않음"} />
            <div className="flex justify-between items-center">
                <img src="/jeju.png" alt="" />
                <div className="text-xl text-slate-600">
                    <p>내 나이 19...</p>
                    <p>직장생활을 하기 위해 상경하다..</p>
                    <p>거기서 내 인생의 큰 전환점을 맞게 되는데...</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-3xl py-32">
                <p>"주은씨 개발 배워볼래?"</p>
                <p className="text-red-700">"좋습니다요!!!"</p>
            </div>
            <div className="flex justify-between items-center text-xl text-slate-600">
                <div>
                    <p>그렇게 나는 열심히 노력하여</p>
                    <p>일반 사무직에서 백엔드 개발자로 직무를 변경할 수 있었다</p>
                </div>
                <img src="/vImg.png" alt="" />
            </div>
        </div>
    );
}
 
export default ChapterOne;