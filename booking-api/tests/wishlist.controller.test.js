import { jest, describe, it, expect, beforeEach } from "@jest/globals";

// Mock the Wishlist model
const mockSave = jest.fn();
const mockFindOne = jest.fn();
const mockFindOneAndDelete = jest.fn();
const mockFind = jest.fn();

jest.unstable_mockModule("../api/models/wishlist.js", () => {
    const MockWishlist = jest.fn().mockImplementation((data) => ({
        ...data,
        _id: "wishlist123",
        createdAt: new Date().toISOString(),
        save: mockSave,
    }));
    MockWishlist.findOne = mockFindOne;
    MockWishlist.findOneAndDelete = mockFindOneAndDelete;
    MockWishlist.find = mockFind;
    return { default: MockWishlist };
});

const { addToWishlist, removeFromWishlist, getUserWishlist, checkWishlistItem } =
    await import("../api/controllers/wishlist.js");

describe("Wishlist Controller", () => {
    let req, res, next;

    beforeEach(() => {
        jest.clearAllMocks();
        req = {
            params: {},
            body: {},
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
        };
        next = jest.fn();
    });

    describe("addToWishlist", () => {
        it("should return 400 if hotelId is missing", async () => {
            req.params.userId = "user1";
            req.body = { hotelName: "Test Hotel" };

            await addToWishlist(req, res, next);

            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({
                message: "hotelId and hotelName are required.",
            });
        });

        it("should return 400 if hotelName is missing", async () => {
            req.params.userId = "user1";
            req.body = { hotelId: "hotel1" };

            await addToWishlist(req, res, next);

            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({
                message: "hotelId and hotelName are required.",
            });
        });

        it("should return 409 if hotel already in wishlist", async () => {
            req.params.userId = "user1";
            req.body = { hotelId: "hotel1", hotelName: "Test Hotel" };
            mockFindOne.mockResolvedValue({ _id: "existing123" });

            await addToWishlist(req, res, next);

            expect(mockFindOne).toHaveBeenCalledWith({
                userId: "user1",
                hotelId: "hotel1",
            });
            expect(res.status).toHaveBeenCalledWith(409);
            expect(res.json).toHaveBeenCalledWith({
                message: "Hotel is already in wishlist.",
            });
        });

        it("should create a new wishlist item successfully", async () => {
            req.params.userId = "user1";
            req.body = {
                hotelId: "hotel1",
                hotelName: "Grand Hotel",
                hotelPhoto: "photo.jpg",
                hotelCity: "Paris",
                hotelPrice: 150,
                hotelRating: 8.5,
            };
            mockFindOne.mockResolvedValue(null);
            const savedItem = {
                _id: "wishlist123",
                userId: "user1",
                hotelId: "hotel1",
                hotelName: "Grand Hotel",
                hotelPhoto: "photo.jpg",
                hotelCity: "Paris",
                hotelPrice: 150,
                hotelRating: 8.5,
            };
            mockSave.mockResolvedValue(savedItem);

            await addToWishlist(req, res, next);

            expect(mockFindOne).toHaveBeenCalledWith({
                userId: "user1",
                hotelId: "hotel1",
            });
            expect(mockSave).toHaveBeenCalled();
            expect(res.status).toHaveBeenCalledWith(201);
        });

        it("should call next with error if save fails", async () => {
            req.params.userId = "user1";
            req.body = { hotelId: "hotel1", hotelName: "Test Hotel" };
            mockFindOne.mockResolvedValue(null);
            const error = new Error("DB Error");
            mockSave.mockRejectedValue(error);

            await addToWishlist(req, res, next);

            expect(next).toHaveBeenCalledWith(error);
        });
    });

    describe("removeFromWishlist", () => {
        it("should return 404 if wishlist item not found", async () => {
            req.params.userId = "user1";
            req.params.hotelId = "hotel999";
            mockFindOneAndDelete.mockResolvedValue(null);

            await removeFromWishlist(req, res, next);

            expect(mockFindOneAndDelete).toHaveBeenCalledWith({
                userId: "user1",
                hotelId: "hotel999",
            });
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({
                message: "Wishlist item not found.",
            });
        });

        it("should remove item and return success message", async () => {
            req.params.userId = "user1";
            req.params.hotelId = "hotel1";
            mockFindOneAndDelete.mockResolvedValue({ _id: "wishlist123" });

            await removeFromWishlist(req, res, next);

            expect(mockFindOneAndDelete).toHaveBeenCalledWith({
                userId: "user1",
                hotelId: "hotel1",
            });
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({
                message: "Hotel removed from wishlist.",
            });
        });

        it("should call next with error if delete fails", async () => {
            req.params.userId = "user1";
            req.params.hotelId = "hotel1";
            const error = new Error("DB Error");
            mockFindOneAndDelete.mockRejectedValue(error);

            await removeFromWishlist(req, res, next);

            expect(next).toHaveBeenCalledWith(error);
        });
    });

    describe("getUserWishlist", () => {
        it("should return empty array if user has no wishlist items", async () => {
            req.params.userId = "user1";
            mockFind.mockReturnValue({ sort: jest.fn().mockResolvedValue([]) });

            await getUserWishlist(req, res, next);

            expect(mockFind).toHaveBeenCalledWith({ userId: "user1" });
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith([]);
        });

        it("should return user wishlist items sorted by date", async () => {
            req.params.userId = "user1";
            const items = [
                { _id: "w1", hotelId: "h1", hotelName: "Hotel A" },
                { _id: "w2", hotelId: "h2", hotelName: "Hotel B" },
            ];
            mockFind.mockReturnValue({
                sort: jest.fn().mockResolvedValue(items),
            });

            await getUserWishlist(req, res, next);

            expect(mockFind).toHaveBeenCalledWith({ userId: "user1" });
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(items);
        });

        it("should call next with error if find fails", async () => {
            req.params.userId = "user1";
            const error = new Error("DB Error");
            mockFind.mockReturnValue({
                sort: jest.fn().mockRejectedValue(error),
            });

            await getUserWishlist(req, res, next);

            expect(next).toHaveBeenCalledWith(error);
        });
    });

    describe("checkWishlistItem", () => {
        it("should return isInWishlist true when item exists", async () => {
            req.params.userId = "user1";
            req.params.hotelId = "hotel1";
            mockFindOne.mockResolvedValue({ _id: "wishlist123" });

            await checkWishlistItem(req, res, next);

            expect(mockFindOne).toHaveBeenCalledWith({
                userId: "user1",
                hotelId: "hotel1",
            });
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({ isInWishlist: true });
        });

        it("should return isInWishlist false when item does not exist", async () => {
            req.params.userId = "user1";
            req.params.hotelId = "hotel999";
            mockFindOne.mockResolvedValue(null);

            await checkWishlistItem(req, res, next);

            expect(mockFindOne).toHaveBeenCalledWith({
                userId: "user1",
                hotelId: "hotel999",
            });
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({ isInWishlist: false });
        });

        it("should call next with error if findOne fails", async () => {
            req.params.userId = "user1";
            req.params.hotelId = "hotel1";
            const error = new Error("DB Error");
            mockFindOne.mockRejectedValue(error);

            await checkWishlistItem(req, res, next);

            expect(next).toHaveBeenCalledWith(error);
        });
    });
});
