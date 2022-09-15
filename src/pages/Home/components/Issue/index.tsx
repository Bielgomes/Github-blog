import { Header, IssueContainer, IssueContent } from './styles'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Link } from 'react-router-dom'

interface IssueProps {
  id: number
  title: string
  description: string
  updatedAt: string
}

export function Issue({ id, title, description, updatedAt }: IssueProps) {
  const formattedDate = formatDistanceToNow(new Date(updatedAt), {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <IssueContainer>
      <Link to={`/${id}`}>
        <IssueContent>
          <Header>
            <h3>{title}</h3>
            <span>{formattedDate}</span>
          </Header>
          <p>{description}</p>
        </IssueContent>
      </Link>
    </IssueContainer>
  )
}
