import { Header, IssueContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface IssueProps {
  id: number
  name: string
  description: string
  publishedAt: string
}

export function Issue({ id, name, description, publishedAt }: IssueProps) {
  const formattedDate = formatDistanceToNow(new Date(publishedAt), {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <IssueContainer onClick={console.log('click')}>
      <Header>
        <h3>{name}</h3>
        <span>{formattedDate}</span>
      </Header>
      <p>{description}</p>
    </IssueContainer>
  )
}
