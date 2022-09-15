import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { api } from '../../lib/axios'

import { Issue } from './components/Issue'
import { Profile } from './components/Profile'
import {
  HomeContainer,
  IssuesContainer,
  Publications,
  SearchFormContainer,
} from './styles'

interface IssueType {
  id: string
  title: string
  body: string
  updated_at: string
}

export function Home() {
  const [issues, setIssues] = useState<IssueType[]>([])
  const { register, watch } = useForm()

  const filter = watch('name')

  const filteredissues = issues.filter((issue) => {
    return issue.title.toLowerCase().includes(filter.toLowerCase())
  })

  async function getIssues() {
    const response = await api.get('search/issues', {
      params: {
        q: `repo:Bielgomes/Github-blog`,
      },
    })

    setIssues(response.data.items)
  }

  useEffect(() => {
    getIssues()
  }, [])

  return (
    <HomeContainer>
      <Profile />

      <SearchFormContainer>
        <Publications>
          <h2>Publicações</h2>
          <span>{issues.length} publicações</span>
        </Publications>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('name')}
        />
      </SearchFormContainer>

      <IssuesContainer>
        {filteredissues.map((issue: any) => {
          return (
            <Issue
              key={issue.number}
              id={issue.number}
              title={issue.title}
              description={issue.body}
              updatedAt={issue.updated_at}
            />
          )
        })}
      </IssuesContainer>
    </HomeContainer>
  )
}
