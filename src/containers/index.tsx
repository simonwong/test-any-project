import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import GlobalLoading from '@/components/GlobalLoading'

const IndexApp = () => (
  <div>
    <h1>主页</h1>
    <GlobalLoading show />
  </div>
)

export default hot(IndexApp)
