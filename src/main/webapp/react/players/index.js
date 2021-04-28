
import PlayerList from "./player-list";
import PlayerFormEditor from "./player-form-editor";
import PlayerInfo from "./playerInfo"
import StatFormEditor from "../stats/stat-form-editor"
import EndorsementList from "../endorsements/endorsement-list";
import EndorsementFormEditor from "../endorsements/endorsement-form-editor";

const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/players", "/"]} exact={true}>
                    <PlayerList/>
                </Route>
                <Route path={["/players/:id"]} exact={true}>
                    <PlayerInfo/>
                </Route>
                <Route path="/player/editor/:id" exact={true}>
                    <PlayerFormEditor/>
                </Route>
                <Route path="/player/stat/editor/:id" exact={true}>
                    <StatFormEditor/>
                </Route>
                <Route path="/player/endorsements/:id" exact={true}>
                    <EndorsementList/>
                </Route>
                <Route path="/player/endorsements/editor/:id" exact={true}>
                    <EndorsementFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
