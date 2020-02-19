import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.scss'

interface IMenuProps {
    menuList?: []
    onSelect?: () => void
}

class HeaderMenu extends Component<IMenuProps, {}> {
    handleClick = (menu: object) => {
      // const { onSelect } = this.props
      // onSelect(menu)
      console.log(menu)
    }

    public render() {
      const { menuList = [] } = this.props

      return (
        <nav className={styles.container}>
          {
            menuList.map((menu) => (
              <NavLink
                className={styles.tag}
                activeClassName={styles.active}
                key={menu}
                to={`/${menu}`}
                onClick={this.handleClick}
              >
                { menu }
              </NavLink>
            ))
          }
        </nav>
      )
    }
}

// HeaderMenu.defaultProps = {
//     onSelect: null,
//     menuList: [],
// }

export default HeaderMenu
