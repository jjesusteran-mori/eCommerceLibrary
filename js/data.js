// FAKE DATA
function getBooks() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    title: "Crack the Coding Interview",
                    url: "assets/crackTheCodingInterview.png",
                    originalPrice: 49.95,
                    salePrice: 14.95,
                    rating: 4.5,
                },
                {
                    id: 2,
                    title: "Atomic Habits",
                    url: "assets/atomicHabits.jpg",
                    originalPrice: 39,
                    salePrice: null,
                    rating: 2.5,
                },
                {
                    id: 3,
                    title: "Deep Work",
                    url: "assets/deepWork.jpeg",
                    originalPrice: 29,
                    salePrice: 12,
                    rating: 5,
                },
                {
                    id: 4,
                    title: "The 10X Rule",
                    url: "assets/book-1.jpeg",
                    originalPrice: 44,
                    salePrice: 19,
                    rating: 4.5,
                },
                {
                    id: 5,
                    title: "Be Obsessed Or Be Average",
                    url: "assets/book-2.jpeg",
                    originalPrice: 32,
                    salePrice: 17,
                    rating: 4,
                },
                {
                    id: 6,
                    title: "Rich Dad Poor Dad",
                    url: "assets/book-3.jpeg",
                    originalPrice: 70,
                    salePrice: 12.5,
                    rating: 5,
                },
                {
                    id: 7,
                    title: "Cashflow Quadrant",
                    url: "assets/book-4.jpeg",
                    originalPrice: 11,
                    salePrice: 10,
                    rating: 4.5,
                },
                {
                    id: 8,
                    title: "48 Laws of Power",
                    url: "assets/book-5.jpeg",
                    originalPrice: 38,
                    salePrice: 17.95,
                    rating: 4.5,
                },
                {
                    id: 9,
                    title: "The 5 Second Rule",
                    url: "assets/book-6.jpeg",
                    originalPrice: 35,
                    salePrice: null,
                    rating: 4,
                },
                {
                    id: 10,
                    title: "Your Next Five Moves",
                    url: "assets/book-7.jpg",
                    originalPrice: 40,
                    salePrice: null,
                    rating: 4,
                },
                {
                    id: 11,
                    title: "Mastery",
                    url: "assets/book-8.jpeg",
                    originalPrice: 30,
                    salePrice: null,
                    rating: 4.5,
                },
            ]);
        }, 2000);
    });
}
