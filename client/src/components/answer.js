export default function Answer({ans}){
    return(
        <div className="answer-text" dangerouslySetInnerHTML={{__html: ans}}></div>
    );
}