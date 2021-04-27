
import PlayerList from "./player-list";
import PlayerFormEditor from "./player-form-editor";


const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/players", "/"]} exact={true}>
                    <PlayerList/>
                </Route>
                <Route path="/players/:id" exact={true}>
                    <PlayerFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
