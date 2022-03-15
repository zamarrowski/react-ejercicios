import { useEffect, useState } from 'react'

const FetchData = ({ component, url }) => {
  const [data, setData] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then(res => res.text())
      .then(text => {
        setData(text)
        setLoading(false)
      })
  }, [url])

  return component(data)
}

export default FetchData
