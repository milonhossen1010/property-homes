'use client';
import { gql } from '@apollo/client';
import Logo from '../Logo/Logo';
import client from '@/client';
import { useEffect, useState } from 'react';
import NavItem from '../NavItem/NavItem';
import { CiMenuFries } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Button from '../Button/Buton';
import ErrorMessage from '../ConnectionError/ConnectionError';
import ConnectionError from '../ConnectionError/ConnectionError';

const QUERY = gql`
  query headerQuery {
    acfOptionsMainMenu {
      header {
        callToActionLabel
        callToActionLink {
          ... on Page {
            uri
          }
        }
        logo {
          altText
          sourceUrl
        }
        menuItems {
          menuItem {
            label
            link {
              ... on Page {
                uri
              }
            }
            submenuItems {
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
  }
`;

export default function Header() {
  const [menus, setMenus] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [logo, setLogo] = useState(null);
  const [callToAction, setCallToAction] = useState({
    label: 'Call to Action',
    link: '#',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false)

  const params = useParams();
  useEffect(() => {
    setShowMobileMenu(false);
  }, [params]);

  useEffect(() => {
    const fetchHeaderData = async () => {
      try {
        setIsLoading(true);
        const { data } = await client.query({
          query: QUERY,
        });
        setMenus(data.acfOptionsMainMenu?.header?.menuItems);
        setLogo(data.acfOptionsMainMenu?.header?.logo);
        setCallToAction({
          label: data.acfOptionsMainMenu?.header?.callToActionLabel,
          link: data.acfOptionsMainMenu?.header?.callToActionLink?.uri,
        });
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
        setIsSuccess(true);
      }
    };

    fetchHeaderData();
  }, []);

  if (isLoading) return false;


  if (isSuccess && !isError && !isLoading) {
    return (
      <div className="  bg-slate-900 px-5 sticky w-full h-16 flex items-center top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo  */}
          <Logo logo={logo} />

          <div className="flex gap-4 items-center">
            {/* Menu  */}
            <div className="  gap-4 font-semibold  hidden lg:flex">
              <NavItem items={menus} />
            </div>
            {/* Call To Action Button  */}
            <Button link={callToAction?.link} label={callToAction?.label} />
          </div>
          {/* Mobile menu  start */}
          {!showMobileMenu && (
            <CiMenuFries
              onClick={() => setShowMobileMenu(true)}
              className="text-white text-3xl lg:hidden cursor-pointer"
            />
          )}
          {showMobileMenu && (
            <div className="h-screen w-screen bg-[#000000b8]   text-white text-xl fixed top-0 left-0">
              <div className=" p-6  w-[80%] h-screen bg-slate-900 opacity-100 relative z-10">
                <NavItem items={menus} />
              </div>
              <IoMdClose
                onClick={() => setShowMobileMenu(false)}
                className="text-white text-3xl lg:hidden absolute top-4 right-4 cursor-pointer"
              />
            </div>
          )}
          {/* Mobile menu end  */}
        </div>
      </div>
    );
  }

 
  
   
}
