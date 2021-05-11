import { PetQuery } from 'types/gql-types'

export const QUERY = gql`
  query PetQuery {
    pets {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ pets }: PetQuery) => {
  return <div>{JSON.stringify(pets)}</div>
}
