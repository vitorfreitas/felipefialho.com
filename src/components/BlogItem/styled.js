import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import * as V from 'styles/variables'
import * as T from 'styles/typography'

export const BlogItem = styled(AniLink)`
  color: var(--primaryColor);
  display: block;

  &:not(:last-child) {
    margin-bottom: ${V.Space.default};
  }
`

const TitleSmall = `
  ${T.Heading4}
`

export const Title = styled.h1`
  ${props => (props.isMini ? `${TitleSmall}` : `${T.Heading1}`)}

  &:not(:first-child) {
    margin-top: ${V.Space.sm};
  }

  &:not(:last-child) {
    margin-bottom: ${V.Space.xs};
  }
`

export const Subtitle = styled.h2`
  ${T.Subtitle2}

  &:not(:last-child) {
    margin-bottom: ${V.Space.default};
  }
`
