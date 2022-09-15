import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { api } from '../../lib/axios'

import { PostInfo } from './components/PostInfo'
import { PostContainer, PostContent } from './styles'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface IssueType {
  id: string
  title: string
  body: string
  created_at: string
  comments: number
  user: {
    login: string
  }
  html_url: string
}

export function Post() {
  const { issueID } = useParams()
  const [issue, setIssue] = useState({} as IssueType)

  async function getIssue() {
    const response = await api.get(
      `repos/Bielgomes/Github-blog/issues/${issueID}`,
    )

    setIssue(response.data)
  }

  useEffect(() => {
    getIssue()
  }, [])

  return (
    <PostContainer>
      <PostInfo issue={issue} />
      <PostContent>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{issue.body}</ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}
