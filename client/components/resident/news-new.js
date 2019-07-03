import React, {useState} from 'react'
import {TextField, makeOnChange} from './utils'
import {connect} from 'react-redux'
import {createNewsThunk} from '../../store/resident'

export const NewsNew = props => {
  const [title, setTitle] = useState(props.title)
  const [body, setBody] = useState(props.body)
  const [photoUrl, setPhotoUrl] = useState(props.photoUrl)
  const date = new Date()
  let month = '' + (date.getMonth() + 1)
  month = month.length === 1 ? '0' + month : month
  let day = '' + date.getDate()
  day = day.length === 1 ? '0' + day : day
  const dateString = `${date.getFullYear()}-${month}-${day}`
  const [expDay, setExpDay] = useState(dateString)

  const onSubmit = event => {
    event.preventDefault()
    props.createNews({
      title,
      body,
      photoUrl,
      expDay
    })
    setTitle('')
    setBody('')
    setPhotoUrl('')
    setExpDay(dateString)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <TextField
          name="title"
          label="Title"
          type="text"
          onChange={makeOnChange(setTitle)}
          value={title}
        />
        <TextField
          name="body"
          label="Content"
          type="text"
          onChange={makeOnChange(setBody)}
          value={body}
        />
        <TextField
          name="photoUrl"
          label="Photos"
          type="text"
          onChange={makeOnChange(setPhotoUrl)}
          value={photoUrl}
        />
        <TextField
          name="expDay"
          label="Expire in days"
          type="date"
          onChange={makeOnChange(setExpDay)}
          value={expDay}
        />
        <button type="submit">Submit Post</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    createNews: news => {
      dispatch(createNewsThunk(news))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsNew)
