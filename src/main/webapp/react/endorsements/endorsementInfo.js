const {useParams, useHistory} = window.ReactRouterDOM;
import playerService from "./player-service"
const {useState, useEffect} = React;


const picture_url = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QfsmwZcsVoRDEU2nK5hQ1AHaE8%26pid%3DApi&f=1"

const PlayerInfo = () => {
    /*const {id} = useParams()
    const [player, setPlayer] = useState({})
    useEffect(() => {
            findPlayerById(id)
            console.log(player)
    }, []);

    const findPlayerById = (id) => playerService.findPlayerById(id).then(player => setPlayer(player))
        //<img src=${picture_url} alt="display image" />*/

    return (
        <div>
            <h2>Test</h2>
        </div>
    );

}

export default PlayerInfo;