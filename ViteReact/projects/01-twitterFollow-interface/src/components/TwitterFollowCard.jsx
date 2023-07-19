import { useState } from "react"

import "./TwitterFollowCard.css"

export function TwitterFollowCard({ formatUserName, userName = 'unknow', children = 'unknow', initialIsFollowing = false }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const handleClick = () => {
    // Le damos la vuelta al valor
    setIsFollowing(!isFollowing)
  }

  const text = isFollowing ? 'Siguiendo' : 'Seguir'

  const buttonClassName = isFollowing
    ? 'tw-followCard-followButton is-following'
    : 'tw-followCard-followButton'

  const imageSrc = `https://unavatar.io/${userName}`

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={imageSrc}
          alt={userName} />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span>{formatUserName(userName)}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>

    </article>
  )
}