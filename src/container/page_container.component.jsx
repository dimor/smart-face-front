import React from 'react';
import Form from '../pages/form/form.component';
import HomePage from '../pages/home/home.component';
import Main from '../pages/main/main.component';
import {Switch, Route,Redirect,useHistory,useLocation,useRouteMatch} from "react-router-dom";
import {connect} from 'react-redux';


const PageContainer =({user})=>{


return(
    <Switch>
    <Route path={`/`} component={Main} exact/>
    <Route path={`/signin`} component={Form} exact />
    <PrivateRoute user={user} path={'/face'}>   <HomePage />   </PrivateRoute>
    <Route path={`/register`} component={Form} exact />
  </Switch>
);
}





const mapStateToProps=state=>{

  return{user:state.form.user} 

}




const PrivateRoute =({ children, ...rest })=>{

  const recievedUser = window.sessionStorage.getItem('user')

  return (

  
    <Route
      {...rest}
      render={({ location }) =>
     recievedUser? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}



export default connect(mapStateToProps,null)(PageContainer);