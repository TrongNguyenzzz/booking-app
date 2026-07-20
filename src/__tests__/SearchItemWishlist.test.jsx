import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import SearchItem from "../components/searchItem/SearchItem";
import { AuthContext } from "../context/AuthContext";
import { WishlistContext } from "../context/WishlistContext";

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

describe("SearchItem Wishlist Integration", () => {
    const mockAddToWishlist = jest.fn();
    const mockRemoveFromWishlist = jest.fn();
    const mockIsInWishlist = jest.fn();

    const defaultWishlistContext = {
        wishlist: [],
        loading: false,
        error: null,
        addToWishlist: mockAddToWishlist,
        removeFromWishlist: mockRemoveFromWishlist,
        isInWishlist: mockIsInWishlist,
        fetchWishlist: jest.fn(),
    };

    const sampleHotel = {
        _id: "hotel1",
        name: "Ocean View Hotel",
        type: "Hotel",
        city: "LA",
        address: "123 Beach Rd",
        distance: "500m",
        photos: ["ocean.jpg"],
        title: "Ocean View",
        desc: "Beautiful ocean view",
        rating: 8.5,
        subSearch: "Pool, Spa",
        cheapestPrice: 250,
        featured: true,
    };

    beforeEach(() => {
        jest.clearAllMocks();
        mockIsInWishlist.mockReturnValue(false);
    });

    it("should not show wishlist button when user is not logged in", () => {
        const authValue = { user: null, dispatch: jest.fn() };

        renderWithProviders(<SearchItem item={sampleHotel} />, {
            authValue,
            wishlistValue: defaultWishlistContext,
        });

        expect(
            screen.queryByLabelText("Add to wishlist")
        ).not.toBeInTheDocument();
        expect(
            screen.queryByLabelText("Remove from wishlist")
        ).not.toBeInTheDocument();
    });

    it("should show outline heart when hotel is not in wishlist", () => {
        const authValue = {
            user: { details: { _id: "user1", username: "test" } },
            dispatch: jest.fn(),
        };
        mockIsInWishlist.mockReturnValue(false);

        renderWithProviders(<SearchItem item={sampleHotel} />, {
            authValue,
            wishlistValue: defaultWishlistContext,
        });

        expect(
            screen.getByLabelText("Add to wishlist")
        ).toBeInTheDocument();
    });

    it("should show filled heart when hotel is in wishlist", () => {
        const authValue = {
            user: { details: { _id: "user1", username: "test" } },
            dispatch: jest.fn(),
        };
        mockIsInWishlist.mockReturnValue(true);

        renderWithProviders(<SearchItem item={sampleHotel} />, {
            authValue,
            wishlistValue: defaultWishlistContext,
        });

        expect(
            screen.getByLabelText("Remove from wishlist")
        ).toBeInTheDocument();
    });

    it("should call addToWishlist when clicking outline heart", () => {
        const authValue = {
            user: { details: { _id: "user1", username: "test" } },
            dispatch: jest.fn(),
        };
        mockIsInWishlist.mockReturnValue(false);

        renderWithProviders(<SearchItem item={sampleHotel} />, {
            authValue,
            wishlistValue: defaultWishlistContext,
        });

        fireEvent.click(screen.getByLabelText("Add to wishlist"));
        expect(mockAddToWishlist).toHaveBeenCalledWith(sampleHotel);
    });

    it("should call removeFromWishlist when clicking filled heart", () => {
        const authValue = {
            user: { details: { _id: "user1", username: "test" } },
            dispatch: jest.fn(),
        };
        mockIsInWishlist.mockReturnValue(true);

        renderWithProviders(<SearchItem item={sampleHotel} />, {
            authValue,
            wishlistValue: defaultWishlistContext,
        });

        fireEvent.click(screen.getByLabelText("Remove from wishlist"));
        expect(mockRemoveFromWishlist).toHaveBeenCalledWith("hotel1");
    });

    it("should still render hotel details correctly", () => {
        const authValue = {
            user: { details: { _id: "user1", username: "test" } },
            dispatch: jest.fn(),
        };

        renderWithProviders(<SearchItem item={sampleHotel} />, {
            authValue,
            wishlistValue: defaultWishlistContext,
        });

        expect(screen.getByText("Ocean View Hotel")).toBeInTheDocument();
        expect(screen.getByText("$250")).toBeInTheDocument();
        expect(screen.getByText("See availability")).toBeInTheDocument();
    });
});
