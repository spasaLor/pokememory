export default function Navbar({top, current}){
    return(
        <div className="top-bar">
            <div className="left">
                <h2>Welcome to the Memory Game</h2>
                <p>Get points by clicking on an image but don't click on any more than once!</p>                
            </div>
            <div className="scores">
                <p className="top-score">Top Score: {top}</p>
                <p className="current">Current Score: {current}</p>
            </div>
        </div>
        

    );
}