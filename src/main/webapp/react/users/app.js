import Users from "./users";

const {HashRouter, Route} = window.ReactRouterDOM;

const App = () => {
    return (
        <div>
            <HashRouter>
                <Route path="/" exact={true}>
                    <Users/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
