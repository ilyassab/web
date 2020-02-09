import styled from '@emotion/styled'
import { Theme } from '@ui/theme/src/theme/index'

interface Props {
  theme?: Theme
}

const Header = styled.div<Props>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  minHeight: '40px',
  backgroundColor: theme.colors.white,
  boxShadow: '0 2px 4px 0 rgba(131, 144, 173, 0.15)',
}))

export default Header
