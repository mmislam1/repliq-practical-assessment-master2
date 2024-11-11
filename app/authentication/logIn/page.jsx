"use client"

import React from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const logIn = () => {

  const router = useRouter()
 
  async function handleSubmit(event) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const _name = formData.get('_name')
    const email = formData.get('email')
    const password = formData.get('password')
    const phone = formData.get('phone')
 
    const response = await axios.post('/user', {
        name: _name,
        email: email,
        password: password,
        phone: phone,
  })
    
    if (response.ok) {
        localStorage.setItem("RepliqToken", JSON.stringify(response.body.token))
        localStorage.setItem("RepliqUserInfo", JSON.stringify(response.body))
       router.back()
    } 
  }
 
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name="_name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <input type="number" name="phone" placeholder="Phone" required />
      
        <button type="submit">Login</button>
    </form>
  )

}

export default logIn