
import EndorsementList from "./endorsement-list";
import EndorsementFormEditor from "./endorsement-form-editor";



const {HashRouter, Route} = window.ReactRouterDOM;

const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/endorsements", "/"]} exact={true}>
                    <EndorsementList/>
                </Route>
                <Route path={["/endorsements/:id"]} exact={true}>
                    <EndorsementFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
