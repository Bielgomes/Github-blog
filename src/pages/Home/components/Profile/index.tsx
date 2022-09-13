import { FaGithub } from 'react-icons/fa'
import { BiBuilding } from 'react-icons/bi'
import { HiUsers } from 'react-icons/hi'
import { FiExternalLink } from 'react-icons/fi'

import {
  Avatar,
  Info,
  InfoGroup,
  Link,
  Name,
  ProfileContainer,
  ProfileContent,
  ProfileInfo,
} from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileContent>
        <Avatar src="https://avatars.githubusercontent.com/u/72311029?v=4" />
        <ProfileInfo>
          <Name>
            <h1>Bielgomes</h1>
            <Link target="self" href="https://github.com/Bielgomes">
              GITHUB
              <span>
                <FiExternalLink size={12} />
              </span>
            </Link>
          </Name>
          <span>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </span>
          <InfoGroup>
            <Info>
              <FaGithub size={18} />
              Bielgomes
            </Info>
            <Info>
              <BiBuilding size={18} />
              CodifyCom
            </Info>
            <Info>
              <HiUsers size={18} />
              32 seguidores
            </Info>
          </InfoGroup>
        </ProfileInfo>
      </ProfileContent>
    </ProfileContainer>
  )
}
