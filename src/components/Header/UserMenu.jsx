import { useState } from 'react';

export default function UserMenu({ loggedIn, user, onWishlistClick, onCartClick, onProfileClick }) {
  const [menuVisible, setMenuVisible] = useState(false);

  // Toggle menu visibility on button click
  const toggleMenu = () => setMenuVisible((menuVisible) => !menuVisible);

  return (
    <>
      {loggedIn && (
        <div className="relative group">
          <button
            className="font-semibold underline cursor-pointer"
            onClick={toggleMenu}
            onBlur={(e) => {
              // close menu if focus leaves button and submenu
              // using setTimeout to wait for focus switch to submenu buttons
              setTimeout(() => {
                if (!e.currentTarget.contains(document.activeElement)) {
                  setMenuVisible(false);
                }
              }, 100);
            }}
          >
            {user.username}
          </button>

          {/* Show submenu on hover (group-hover) or if menuVisible is true */}
          <div
            className={`absolute left-0 mt-2 bg-white shadow rounded p-2 z-10 ${
              menuVisible ? 'block' : 'hidden'
            } group-hover:block`}
          >
            <button className="block mb-2" onClick={onWishlistClick}>
              My Wishlist
            </button>
            <button className="block mb-2" onClick={onCartClick}>
              Cart
            </button>
            <button className="block" onClick={onProfileClick}>
              Profile
            </button>
          </div>
        </div>
      )}
    </>
  );
}
