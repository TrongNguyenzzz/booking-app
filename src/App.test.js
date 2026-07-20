import { render, screen } from '@testing-library/react';
import App from './App';
import { AuthContext } from './context/AuthContext';
import { WishlistContext } from './context/WishlistContext';
import { SearchContext } from './context/SearchContext';

const renderApp = () => {
  const authValue = { user: null, loading: false, error: null, dispatch: jest.fn() };
  const wishlistValue = {
    wishlist: [],
    loading: false,
    error: null,
    addToWishlist: jest.fn(),
    removeFromWishlist: jest.fn(),
    isInWishlist: jest.fn(),
    fetchWishlist: jest.fn(),
  };
  const searchValue = {
    city: undefined,
    dates: [],
    options: { adult: undefined, children: undefined, room: undefined },
    dispatch: jest.fn(),
  };

  return render(
    <AuthContext.Provider value={authValue}>
      <WishlistContext.Provider value={wishlistValue}>
        <SearchContext.Provider value={searchValue}>
          <App />
        </SearchContext.Provider>
      </WishlistContext.Provider>
    </AuthContext.Provider>
  );
};

test('renders the app without crashing', () => {
  renderApp();
  // App should render - check for Register/Login buttons in navbar
  expect(screen.getByText('Register')).toBeInTheDocument();
  expect(screen.getByText('Login')).toBeInTheDocument();
});
