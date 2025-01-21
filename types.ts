export interface Review {
    bookId: number;
    rating: number;
    comment: string;
  }
 
const reviews: Review[] = [];

function addReview(bookId: number, rating: number, comment: string): void {
  reviews.push({ bookId, rating, comment });
} 