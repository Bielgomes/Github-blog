import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaGithub,
} from 'react-icons/fa'

import { FiExternalLink } from 'react-icons/fi'
import { Anchor } from '../../../../components/Link/indes'
import { Info, InfoGroup, Links, PostInfoContainer } from './styles'

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

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

interface PostInfoProps {
  issue: IssueType
}

export function PostInfo({ issue }: PostInfoProps) {
  console.log(issue)
  const formattedDate = issue.created_at
    ? formatDistanceToNow(new Date(issue.created_at), {
        locale: ptBR,
        addSuffix: true,
      })
    : null

  return (
    <PostInfoContainer>
      <header>
        <Links>
          <Anchor
            label="voltar"
            icon={<FaChevronLeft size={12} />}
            travelTo={`/`}
            iconPosition="left"
          />
          <Anchor
            label="ver no github"
            icon={<FiExternalLink size={12} />}
            travelTo={issue.html_url}
            iconPosition="right"
          />
        </Links>
        <h1>{issue.title}</h1>
      </header>
      <InfoGroup>
        <Info>
          <FaGithub size={18} />
          <span>{issue.user?.login}</span>
        </Info>
        <Info>
          <FaCalendarDay size={18} />
          <span>{formattedDate}</span>
        </Info>
        <Info>
          <FaComment size={18} />
          <span>{issue.comments} comentários</span>
        </Info>
      </InfoGroup>
    </PostInfoContainer>
  )
}
