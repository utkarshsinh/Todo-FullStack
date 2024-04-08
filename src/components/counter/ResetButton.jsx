export default function ResetButton({resetmethod}){
    return (
        <div>
            <button className="resetButton" onClick={resetmethod}>Reset</button>
        </div>
    )
}