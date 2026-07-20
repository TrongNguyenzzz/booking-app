import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import WishlistCard from "../pages/wishlist/WishlistCard";
import { WishlistContext } from "../context/WishlistContext";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate,
}));

const renderWithProviders = (ui, { wishlistValue }) => {
    return render(
        <BrowserRouter>
            <WishlistContext.Provider value={wishlistValue}>
                {ui}
            </WishlistContext.Provider>
        </BrowserRouter>
    );
};

describe("WishlistCard Component", () => {
    const mockRemoveFromWishlist = jest.fn();
    const defaultWishlistContext = {
        wishlist: [],
        loading: false,
        error: null,
        addToWishlist: jest.fn(),
        removeFromWishlist: mockRemoveFromWishlist,
        isInWishlist: jest.fn(),
        fetchWishlist: jest.fn(),
    };

    const sampleItem = {
        _id: "w1",
        hotelId: "hotel123",
        hotelName: "Sunset Resort",
        hotelCity: "Tucson",
        hotelPrice: 175,
        hotelRating: 8.2,
        hotelPhoto: "sunset.jpg",
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should render hotel name, city, price, and rating", () => {
        renderWithProviders(<WishlistCard item={sampleItem} />, {
            wishlistValue: defaultWishlistContext,
        });

        expect(screen.getByText("Sunset Resort")).toBeInTheDocument();
        expect(screen.getByText("Tucson")).toBeInTheDocument();
        expect(screen.getByText("From $175/night")).toBeInTheDocument();
        expect(screen.getByText("Rating: 8.2/10")).toBeInTheDocument();
    });

    it("should render hotel image when photo is available", () => {
        renderWithProviders(<WishlistCard item={sampleItem} />, {
            wishlistValue: defaultWishlistContext,
        });

        const img = screen.getByAltText("Sunset Resort");
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute("src", "sunset.jpg");
    });

    it("should show placeholder when no photo is available", () => {
        const itemWithoutPhoto = { ...sampleItem, hotelPhoto: "" };

        renderWithProviders(<WishlistCard item={itemWithoutPhoto} />, {
            wishlistValue: defaultWishlistContext,
        });

        expect(screen.getByText("No Image")).toBeInTheDocument();
    });

    it("should navigate to hotel details when card is clicked", () => {
        renderWithProviders(<WishlistCard item={sampleItem} />, {
            wishlistValue: defaultWishlistContext,
        });

        fireEvent.click(screen.getByText("Sunset Resort"));
        expect(mockNavigate).toHaveBeenCalledWith("/hotels/hotel123");
    });

    it("should call removeFromWishlist when heart button is clicked", async () => {
        mockRemoveFromWishlist.mockResolvedValue();

        renderWithProviders(<WishlistCard item={sampleItem} />, {
            wishlistValue: defaultWishlistContext,
        });

        const removeBtn = screen.getByLabelText("Remove from wishlist");
        fireEvent.click(removeBtn);

        expect(mockRemoveFromWishlist).toHaveBeenCalledWith("hotel123");
    });

    it("should not navigate when remove button is clicked (stopPropagation)", () => {
        mockRemoveFromWishlist.mockResolvedValue();

        renderWithProviders(<WishlistCard item={sampleItem} />, {
            wishlistValue: defaultWishlistContext,
        });

        const removeBtn = screen.getByLabelText("Remove from wishlist");
        fireEvent.click(removeBtn);

        // Navigate should not be called with hotel path from remove click
        expect(mockNavigate).not.toHaveBeenCalledWith("/hotels/hotel123");
    });

    it("should handle items without rating gracefully", () => {
        const itemNoRating = { ...sampleItem, hotelRating: null };

        renderWithProviders(<WishlistCard item={itemNoRating} />, {
            wishlistValue: defaultWishlistContext,
        });

        expect(screen.queryByText(/Rating:/)).not.toBeInTheDocument();
    });

    it("should handle items without price gracefully", () => {
        const itemNoPrice = { ...sampleItem, hotelPrice: null };

        renderWithProviders(<WishlistCard item={itemNoPrice} />, {
            wishlistValue: defaultWishlistContext,
        });

        expect(screen.queryByText(/From \$/)).not.toBeInTheDocument();
    });
});
