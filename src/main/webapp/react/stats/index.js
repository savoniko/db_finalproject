
import StatList from "./stat-list";
import StatFormEditor from "./stat-form-editor";


const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/stats", "/"]} exact={true}>
                    <StatList/>
                </Route>
                <Route path={["/stats/:id"]} exact={true}>
                    <StatFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
