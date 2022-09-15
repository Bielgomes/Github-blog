import { useEffect, useState } from 'react'

import { FaGithub } from 'react-icons/fa'
import { HiUsers } from 'react-icons/hi'
import { FiExternalLink } from 'react-icons/fi'

import {
  Avatar,
  Info,
  InfoGroup,
  Name,
  ProfileContainer,
  ProfileContent,
  ProfileGroup,
  ProfileInfo,
} from './styles'

import { Anchor } from '../../../../components/Link/indes'
import { api } from '../../../../lib/axios'

interface UserType {
  avatar_url: string
  html_url: string
  name: string
  login: string
  bio: string
  followers: string
}

export function Profile() {
  const [user, setUser] = useState({} as UserType)

  async function getUser() {
    const response = await api.get(`users/Bielgomes`)

    setUser(response.data)
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <ProfileContainer>
      <ProfileContent>
        <Avatar src={user.avatar_url} />
        <ProfileInfo>
          <ProfileGroup>
            <Name>
              <h1>{user.name}</h1>
              <Anchor
                label="github"
                icon={<FiExternalLink size={12} />}
                travelTo={user.html_url}
                iconPosition="right"
              />
            </Name>
            <span>{user.bio}</span>
          </ProfileGroup>
          <InfoGroup>
            <Info>
              <FaGithub size={18} />
              <span>{user.login}</span>
            </Info>
            <Info>
              <HiUsers size={18} />
              <span>{user.followers} seguidores</span>
            </Info>
          </InfoGroup>
        </ProfileInfo>
      </ProfileContent>
    </ProfileContainer>
  )
}
