import {v4 as uuid} from 'uuid'

import {useState} from 'react'
import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

import CommentItem from '../CommentItem'

const Comments = () => {
  const [name, changeName] = useState('')

  const [commentText, changeComment] = useState('')

  const TapChangeComment = event => {
    changeComment(event.target.value)
  }

  const TapChange = event => {
    changeName(event.target.value)
  }

  const [commentList, setCommentList] = useState([])

  const onPress = event => {
    event.preventDefault()
    const newComment = {
      id: uuid(),
      name,
      commentText,
    }

    setCommentList(previousCommentList => [...previousCommentList, newComment])

    changeName('')
    changeComment('')
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onPress}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={TapChange}
        />
        <CommentTextInput
          placeholder="Your comment"
          value={commentText}
          onChange={TapChangeComment}
          rows="6"
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentsList>
        {commentList.map(each => (
          <CommentItem key={each.id} commentDetails={each} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}

export default Comments
