import { TwitterFollowCard } from "./components/TwitterFollowCard"

const users = [
  {
    id: 1,
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    id: 2,
    userName: 'Guillem_Frutem',
    name: 'Guillem The Frutem',
    isFollowing: false
  },
  {
    id: 3,
    isFollowing: true
  },
  {
    id: 4,
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]

export function App() {

  const formatUserName = (userName) => `@${userName}`

  return (
    <section className='App'>
      {
        users.map(({ id, userName, name, isFollowing }) => (
          <TwitterFollowCard
            formatUserName={formatUserName}
            key={id}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}

// export function App() {

//   const formatUserName = (userName) => `@${userName}`


//   return (
//     <div className="App">
//       <TwitterFollowCard
//         formatUserName={formatUserName}
//         userName={"midudev"}
//         name={"midudev"}
//         initialIsFollowing={true}
//       />

//       <TwitterFollowCard
//         formatUserName={formatUserName}
//         userName={"shanksfgc"}
//         name={"shanks"}
//       />

//       <TwitterFollowCard
//         formatUserName={formatUserName}
//         userName={"Guillem_Frutem"}
//         name={"Guillem The Frutem"}
//         initialIsFollowing={true}
//       />

//       <TwitterFollowCard
//         formatUserName={formatUserName}
//       />
//       {/* Así se usan comentarios dentro de jsx */}
//     </div>
//   )
// }