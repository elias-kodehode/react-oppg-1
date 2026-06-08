/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import './App.css'
import MenuList from './Components/MenuList';
import { getMenu } from './MenuProvider'

export default function App() {
  const [menu] = useState(getMenu())
  return (
    <MenuList menu={menu}/>
  )
}
