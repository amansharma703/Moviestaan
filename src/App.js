import { Container } from "@mui/material";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";

import Movies from "./components/Pages/Movies/Movies";
import Series from "./components/Pages/Series/Series";
import Trending from "./components/Pages/Trending/Trending";
import Search from "./components/Pages/Search/Search";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <div className='App'>
                    <Container>
                        <Switch>
                            <Route exact path='/movies' component={Movies} />
                            <Route exact path='/series' component={Series} />
                            <Route exact path='/search' component={Search} />
                            <Route exact path='/' component={Trending} />
                            <Route path='/*'>
                                <Redirect to='/' />
                            </Route>
                        </Switch>
                    </Container>
                </div>
                <SimpleBottomNavigation />
            </BrowserRouter>
        </>
    );
}

export default App;
