import styled from '@emotion/styled'
import { ifProp } from 'styled-tools'
import { Theme } from '@ui/theme/src/theme/types'
import { Text } from '@ui/text'

interface LinkProps {
  href?: string
  hoverColor?: string
  underline?: boolean
  onClick?: () => void
  theme?: Theme
}

const Link = styled(Text.withComponent('a'), {
  shouldForwardProp: prop =>
    !['lineHeight', 'hoverColor', 'underline'].includes(prop),
})<LinkProps>(
  ({ theme, hoverColor }) => ({
    textDecoration: 'none',
    cursor: 'pointer',
    [':hover']: {
      color: theme.colors[hoverColor],
    },
  }),
  ifProp('underline', {
    textDecoration: 'underline',
    [':hover']: {
      textDecoration: 'none',
    },
  }),
)

export default Link
