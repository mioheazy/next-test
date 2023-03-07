import React from 'react'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

interface urlParam extends ParsedUrlQuery {
  [id: string]: string
}
export default function Welcome(props: any) {
  const universities = props.universities
  let firstObj: any = universities[0]
  const country: string = firstObj.country
  return (
    <>
      <h1>WELCOME TO MY FIRST NEXT APP</h1>
      <p>This is a nextJS app test by Muheez to display Universities in {country}</p>
      <ul>
        {universities.map((university: any) => {
          return (<li key={university.name}><a href={university['web_pages'][0]} target='_blank' rel='noreferrer'>{university.name}</a></li>)
        })}
      </ul>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const countries = ['Nigeria', 'United+Kingdom', 'United+States', 'Canada', 'Mexico']
  
  const paths = countries.map((country) => {
    return {
      params: { id: country }
    }
  })

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const country = context.params as urlParam
  const res = await fetch(`http://universities.hipolabs.com/search?country=${country.id}`)

  const universities = await res.json()

  return { props: { universities } }
}