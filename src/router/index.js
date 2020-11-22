import React, {Component} from 'react'
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'
import asyncComponent from '@/utils/asyncComponent'
const home = asyncComponent(() => import("@/pages/home/home"))
const stage = asyncComponent(() => import("@/pages/stage/stage"))
const daily = asyncComponent(() => import("@/pages/daily/daily"))
const share = asyncComponent(() => import("@/pages/share/share"))
const about = asyncComponent(() => import("@/pages/about/about"))


export default class RouteConfig extends Component {
  render () {
    return (
      <HashRouter>
        <Switch>
          <Route path="/home" component= {home}/>
          <Route path="/stage" component= {stage}/>
          <Route path="/daily" component= {daily}/>
          <Route path="/share" component= {share}/>
          <Route path="/about" component= {about}/>
          <Redirect exact from='/' to='/home'/>
        </Switch>
      </HashRouter>
    )
  }
}