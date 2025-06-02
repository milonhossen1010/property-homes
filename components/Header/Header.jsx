'use client'
import { gql } from '@apollo/client';
import Logo from '../Logo/Logo';
import client from '@/client';
import { useEffect, useState } from 'react';
import NavItem from '../NavItem/NavItem';

const QUERY = gql`
  query MainMenuQueryy {
    acfOptionsMainMenu {
      menu {
        menuItems {
          menuItem {
            submenuItems {
              label
              link {
                ... on Page {
                  uri
                }
              }
            }
            label
            link {
              ... on Page {
                uri
              }
            }
          }
        }
      }
    }
  }
`;

export default function Header() {
  const [menus, setMenus] = useState(null);

  useEffect(() => {
    client
      .query({
        query: QUERY, 
      })
      .then(({ data }) => {
      
        setMenus(data.acfOptionsMainMenu?.menu?.menuItems);
      })
      .catch(err => {
        console.error('Apollo error:', err);
      });
  }, []);
  return (
    <div className="  bg-slate-900 px-5 sticky h-16 flex items-center to-0% z-20">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <div className="flex gap-4 font-semibold ">
          <NavItem items={menus} />
        </div>
      </div>
    </div>
  );
}
