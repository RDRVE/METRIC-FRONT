import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Home from './pages/home'
import Error404 from './pages/404'

import ScrollToTop from './globalComponents/ScrollToTop'
import { useSelector/* , useDispatch  */} from "react-redux";
import Registro from './pages/registro'
import Pokemones from './pages/pokemones'
//const { EndPoint } = Global

const Routes = () => {

    const LoginState = useSelector(reducers => reducers.loginReducer).Login;
    //const dispatch = useDispatch();
    console.log('LoginState:', LoginState)

    return (
        <BrowserRouter>
            <ScrollToTop />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/registro" component={Registro} />
                <Route exact path="/pokemones" component={Pokemones} />
                <Route component={Error404} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes

