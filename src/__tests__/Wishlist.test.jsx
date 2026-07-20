import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Wishlist from "../pages/wishlist/Wishlist";
import { AuthContext } from "../context/AuthContext";
import { WishlistContext } from "../context/WishlistContext";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate,
}));

const renderWithProviders = (ui, { authValue, wishlistValue }) => {
    return render(
        <BrowserRouter>
            <AuthContext.Provider value={authValue}>
                <WishlistContext.Provider value={wishlistValue}>
                    {ui}
                </WishlistContext.Provider>
            </AuthContext.Provider>
        </BrowserRouter>
    );
};

describe("Wishlist Page", () => {
    const defaultWishlistContext = {
        wishlist: [],
        loading: false,
        error: null,
        addToWishlist: jest.fn(),
        removeFromWishlist: jest.fn(),
        isInWishlist: jest.fn(),
        fetchWishlist: jest.fn(),
    };

    it("should show login prompt when user is not authenticated", () => {
        const authValue = { user: null, dispatch: jest.fn() };

        renderWithProviders(<Wishlist />, {
            authValue,
            wishlistValue: defaultWishlistContext,
        });

        expect(
            screen.getByText("Please log in to view your wishlist")
        ).toBeInTheDocument();
        expect(screen.getByText("Log in")).toBeInTheDocument();
    });

    it("should navigate to login page when login button is clicked", () => {
        const authValue = { user: null, dispatch: jest.fn() };

        renderWithProviders(<Wishlist />, {
            authValue,
            wishlistValue: defaultWishlistContext,
        });

        fireEvent.click(screen.getByText("Log in"));
        expect(mockNavigate).toHaveBeenCalledWith("/login");
    });

    it("should show empty state when user has no wishlist items", () => {
        const authValue = {
            user: { details: { _id: "user1", username: "testuser" } },
            dispatch: jest.fn(),
        };

        renderWithProviders(<Wishlist />, {
            authValue,
            wishlistValue: defaultWishlistContext,
        });

        expect(screen.getByText("testuser's Wishlist")).toBeInTheDocument();
        expect(screen.getByText("0 saved properties")).toBeInTheDocument();
        expect(
            screen.getByText("Your wishlist is empty")
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                "Start saving hotels you love by clicking the heart icon!"
            )
        ).toBeInTheDocument();
    });

    it("should show loading state when fetching wishlist", () => {
        const authValue = {
            user: { details: { _id: "user1", username: "testuser" } },
            dispatch: jest.fn(),
        };
        const wishlistValue = {
            ...defaultWishlistContext,
            loading: true,
        };

        renderWithProviders(<Wishlist />, {
            authValue,
            wishlistValue,
        });

        expect(
            screen.getByText("Loading your wishlist...")
        ).toBeInTheDocument();
    });

    it("should display wishlist items when user has saved hotels", () => {
        const authValue = {
            user: { details: { _id: "user1", username: "testuser" } },
            dispatch: jest.fn(),
        };
        const wishlistValue = {
            ...defaultWishlistContext,
            wishlist: [
                {
                    _id: "w1",
                    hotelId: "h1",
                    hotelName: "Grand Hotel Paris",
                    hotelCity: "Paris",
                    hotelPrice: 200,
                    hotelRating: 9.0,
                    hotelPhoto: "photo1.jpg",
                },
                {
                    _id: "w2",
                    hotelId: "h2",
                    hotelName: "Berlin Suites",
                    hotelCity: "Berlin",
                    hotelPrice: 120,
                    hotelRating: 8.5,
                    hotelPhoto: "photo2.jpg",
                },
            ],
        };

        renderWithProviders(<Wishlist />, {
            authValue,
            wishlistValue,
        });

        expect(screen.getByText("2 saved properties")).toBeInTheDocument();
        expect(screen.getByText("Grand Hotel Paris")).toBeInTheDocument();
        expect(screen.getByText("Berlin Suites")).toBeInTheDocument();
        expect(screen.getByText("Paris")).toBeInTheDocument();
        expect(screen.getByText("Berlin")).toBeInTheDocument();
        expect(screen.getByText("From $200/night")).toBeInTheDocument();
        expect(screen.getByText("From $120/night")).toBeInTheDocument();
    });

    it("should show singular 'property' text for 1 item", () => {
        const authValue = {
            user: { details: { _id: "user1", username: "testuser" } },
            dispatch: jest.fn(),
        };
        const wishlistValue = {
            ...defaultWishlistContext,
            wishlist: [
                {
                    _id: "w1",
                    hotelId: "h1",
                    hotelName: "Grand Hotel",
                    hotelCity: "Paris",
                    hotelPrice: 200,
                    hotelRating: 9.0,
                    hotelPhoto: "photo.jpg",
                },
            ],
        };

        renderWithProviders(<Wishlist />, {
            authValue,
            wishlistValue,
        });

        expect(screen.getByText("1 saved property")).toBeInTheDocument();
    });

    it("should navigate to browse hotels when Browse button is clicked", () => {
        const authValue = {
            user: { details: { _id: "user1", username: "testuser" } },
            dispatch: jest.fn(),
        };

        renderWithProviders(<Wishlist />, {
            authValue,
            wishlistValue: defaultWishlistContext,
        });

        fireEvent.click(screen.getByText("Browse hotels"));
        expect(mockNavigate).toHaveBeenCalledWith("/");
    });
});
