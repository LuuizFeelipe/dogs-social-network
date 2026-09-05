import React from 'react'
import UserHeader from './UserHeader'
import { Route, Routes } from 'react-router-dom'
import Feed from '../Feed/Feed.jsx'
import UserPhotoPost from './UserPhotoPost.jsx'
import UserStats from './UserStats.jsx'

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed />} ></Route>
        <Route path='/postar' element={<UserPhotoPost />} ></Route>
        <Route path='/estatisticas' element={<UserStats />} ></Route>
      </Routes>
    </section>
  )
}

export default User
