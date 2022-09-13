import { Publications, SearchFormContainer } from './styles'
import { useForm } from 'react-hook-form'

export function SearchForm() {
  const { register, watch } = useForm()

  const NameInput = watch('name')

  console.log(NameInput)

  return (
    <SearchFormContainer>
      <Publications>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </Publications>
      <input type="text" placeholder="Buscar conteúdo" {...register('name')} />
    </SearchFormContainer>
  )
}
