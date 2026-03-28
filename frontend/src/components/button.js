export default function Button({value,handleNext}){
    return (
      <button className="btn" onClick={()=>handleNext()}>{value}</button>
    );
}