import React from 'react'
export default function WelcomeIndex() {
  return (
    <>
      <h1>WELCOME TO MY FIRST NEXT APP</h1>
      <p>This is a nextJS app test by Muheez to display Universities in the following Countries</p>
      <ul>
        <li>Nigeria</li>
        <li>United States</li>
        <li>United Kingdom</li>
        <li>Mexico</li>
        <li>Canada</li>
        <li>Russia</li>
      </ul>
      <p>To display universities for any of these countries, add "/country" in front of the url above eg. "/Nigeria" or "/United+States"</p>
    </>
  )
}