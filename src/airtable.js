const URL = 'https://api.airtable.com/v0/app3N9Rcex36r1bbc/Inscriptions'
const API_KEY = 'keyNyrwsjMbMZmIkt'
const headers = new Headers()
headers.append('Content-Type', 'application/json')
headers.append('Authorization', `Bearer ${API_KEY}`)

const insert = async (method, id = false, fields) => {
  const body = id ? JSON.stringify({ records: [{ id, fields }] }) : JSON.stringify({ records: [{ fields }] })
  const  response = await fetch(URL, {
    method,
    headers,
    body, 
  })
  const data = await response.json()

  console.log(data)
  return data.records[0].id
}

const save = async (id = false, data) => {
  if (data.birthday === '') {
    data.birthday = '1982-03-06'
  } else {
    data.age = 2022 - (new Date(data.birthday)).getFullYear()
  }

  console.log(data)
  if (id) {
    return await insert('PUT', id, data)
  }

  return await insert('POST', false, data)
}

export default save
