import React from 'react'

export default function User(props) {
    // console.log(props.data)

    const {data}=props
  return (
    <div><h3>{data.age}</h3></div>
  )
}
