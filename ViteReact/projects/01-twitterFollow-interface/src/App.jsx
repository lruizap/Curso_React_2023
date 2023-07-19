import { TwitterFollowCard } from "./components/TwitterFollowCard"

export function App() {

  const formatUserName = (userName) => `@${userName}`

  return (
    <div className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName={"midudev"}
        name={"midudev"}
        initialIsFollowing={true}
      />

      <TwitterFollowCard
        formatUserName={formatUserName}
        userName={"shanksfgc"}
        name={"shanks"}
      />

      <TwitterFollowCard
        formatUserName={formatUserName}
        userName={"Guillem_Frutem"}
        name={"Guillem The Frutem"}
        initialIsFollowing={true}
      />

      <TwitterFollowCard
        formatUserName={formatUserName}
      />
      {/* Así se usan comentarios dentro de jsx */}
    </div>
  )
}