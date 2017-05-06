// @flow
import React from 'react'

export type NavItem = {
  action: Function,
  content: any
}

type Props = {
  rightItems: NavItem[],
  leftItems: NavItem[]
}

export const NavBar = ({ rightItems, leftItems }: Props) =>
  <nav className='navbar navbar-default navbar-static-top'>
    <div className='container-fluid'>
      <div className='navbar-header'>
        <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>
          <span className='sr-only'>Toggle navigation</span>
          <span className='icon-bar' />
          <span className='icon-bar' />
          <span className='icon-bar' />
        </button>
        {leftItems.map((item, index) =>
          <a key={index} onClick={item.action}>
            {item.content}
          </a>
        )}
      </div>

      <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
        <ul className='nav navbar-nav navbar-right'>
          {rightItems.map((item, index) =>
            <li key={index} className='navbar-right'>
              <a onClick={item.action}>
                {item.content}
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  </nav>
