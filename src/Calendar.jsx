import Tile from "./Tile";

const Calendar = ({ data }) => {
    const getNovemberDays = () => {
        let content = []
        for (let i = 27; i <= 30; i++) {
            content.push(<Tile day={i} message={null} />)
        }
        return content
    }

    return (
        <div className="calendar">
            <div className="header">
                <div>Hétfő</div>
                <div>Kedd</div>
                <div>Szerda</div>
                <div>Csütörtök</div>
                <div>Péntek</div>
                <div>Szombat</div>
                <div>Vasárnap</div>
            </div>
            <div className="days">
                {getNovemberDays()}
                {data.map(tile => <Tile day={tile.day} message={tile.message} isCurrentDay={new Date().getDate() == tile.day && "current-day"} />)}
            </div>
        </div>
    );
}
 
export default Calendar;