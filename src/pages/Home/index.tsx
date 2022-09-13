import { Issue } from './components/Issue'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { HomeContainer, IssuesContainer } from './styles'

const issues = [
  {
    id: 1,
    name: 'JavaScript data types and data structures',
    description:
      'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',
    publishedAt: '2022-09-13T17:41:48.258Z',
  },
  {
    id: 2,
    name: 'JavaScript data types and data structures',
    description:
      'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',
    publishedAt: '2022-09-13T17:41:48.258Z',
  },
  {
    id: 3,
    name: 'JavaScript data types and data structures',
    description:
      'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',
    publishedAt: '2022-09-13T17:41:48.258Z',
  },
  {
    id: 4,
    name: 'JavaScript data types and data structures',
    description:
      'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',
    publishedAt: '2022-09-12T17:41:48.258Z',
  },
]

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <SearchForm />
      <IssuesContainer>
        {issues.map((issue) => {
          return (
            <Issue
              key={issue.id}
              id={issue.id}
              name={issue.name}
              description={issue.description}
              publishedAt={issue.publishedAt}
            />
          )
        })}
      </IssuesContainer>
    </HomeContainer>
  )
}
