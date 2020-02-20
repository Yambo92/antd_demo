import React from "react";
import {Route, Switch, Redirect} from 'react-router-dom'

import WrappedHorizontalLoginForm from './form'
import WrappedNormalLoginForm from './form2'



//sandbox中引入antd.css 不生效的解决办法
if(process.env.NODE_ENV === 'production'){
  import ("./styles.css")
}else{
  import("antd/dist/antd.css").then(() => import("./styles.css"));
}

export default function App() {
  return (
       <Switch>
          <Redirect exact from='/'  to="/login" />
         <Route  path="/login" component={WrappedNormalLoginForm} />
         <Route path="/inlineForm" component={WrappedHorizontalLoginForm} />
       </Switch>
  );
}
