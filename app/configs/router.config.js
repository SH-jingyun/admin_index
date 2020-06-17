import React from 'react'
import { Router, Route, IndexRoute, browserHistory/* , Redirect */ } from 'react-router'
// browserHistory
import { isLogin } from '@configs/common'

import * as base from '@pages/base' // 基础
import * as sysSet from '@pages/set' // 计步宝
import * as dogs from '@pages/dogs' // 狗狗世界
import * as ad from '@pages/ad' // 广告系统

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={base.app} onEnter={isLogin}>
      <IndexRoute component={sysSet.report} />
      <Route path="/index" component={sysSet.report} />
      <Route path="/list" component={sysSet.user} />
      <Route path="/activity" component={sysSet.activity} />
      <Route path="/version" component={sysSet.version} />
      <Route path="/ad" component={sysSet.ad} />
      <Route path="/withdraw" component={sysSet.withdraw} />
      <Route path="/user" component={sysSet.user} />
      <Route path="/config/:type" component={sysSet.config} />
      <Route path="/gold/:id" component={sysSet.gold} />
      <Route path="/version-ad" component={sysSet.versionAd} />
      <Route path="/feedback" component={sysSet.feedback} />
      <Route path="/sdk-error" component={sysSet.sdkError} />
      <Route path="/invited" component={sysSet.invited} />
      <Route path="/dogs-version" component={dogs.version} />
      <Route path="/dogs-version-ad" component={dogs.versionAd} />
      <Route path="/dogs-interior" component={dogs.interior} />
      <Route path="/dogs-withdraw" component={dogs.withdraw} />
      <Route path="/dogs-user" component={dogs.user} />
      <Route path="/ad-app" component={ad.app} />
      <Route path="/ad-position" component={ad.position} />
      <Route path="/ad-user-group" component={ad.userGroup} />
      <Route path="/ad-strategy" component={ad.strategy} />
      <Route path="/ad-code" component={ad.code} />
    </Route>
    <Route path="/login" component={base.login} />
    <Route path="*" component={base.notfound} />
  </Router>
)
