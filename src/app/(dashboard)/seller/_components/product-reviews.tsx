"use client"

import { useState } from "react"
import { Star, ThumbsUp, ThumbsDown } from "lucide-react"

// Sample review data
const reviewsData = [
  {
    id: 1,
    author: "John D.",
    date: "2023-12-15",
    rating: 5,
    title: "Excellent product, highly recommend!",
    content:
      "These meatballs are absolutely delicious! The Italian seasoning is perfect and they cook up beautifully. My whole family loves them and I'll definitely be ordering again.",
    helpful: 12,
    notHelpful: 2,
    verified: true,
  },
  {
    id: 2,
    author: "Sarah M.",
    date: "2023-11-30",
    rating: 4,
    title: "Great taste, but packaging could be better",
    content:
      "The meatballs themselves are fantastic - juicy and flavorful. My only complaint is that the packaging was slightly damaged when it arrived. The product inside was fine though.",
    helpful: 8,
    notHelpful: 1,
    verified: true,
  },
  {
    id: 3,
    author: "Michael R.",
    date: "2023-10-22",
    rating: 2,
    title: "Disappointed with the quality",
    content:
      "I was expecting better quality given the price. The meatballs were quite dry and lacked flavor. I've had much better from other brands at a lower price point.",
    helpful: 5,
    notHelpful: 3,
    verified: true,
  },
  {
    id: 4,
    author: "Emily L.",
    date: "2023-09-18",
    rating: 5,
    title: "Perfect for quick meals!",
    content:
      "These meatballs are a lifesaver for busy weeknights! They cook quickly and taste homemade. I serve them with pasta or in sandwiches and they're always a hit.",
    helpful: 15,
    notHelpful: 0,
    verified: true,
  },
  {
    id: 5,
    author: "David K.",
    date: "2023-08-05",
    rating: 3,
    title: "Good but not great",
    content:
      "These meatballs are decent, but not exceptional. They're convenient and taste fine, but I was hoping for something that tasted more authentic and homemade.",
    helpful: 7,
    notHelpful: 2,
    verified: false,
  },
]

interface ProductReviewsProps {
  preview?: boolean
}

export default function ProductReviews({ preview = false }: ProductReviewsProps) {
  const [helpfulClicks, setHelpfulClicks] = useState<Record<string, string>>({})

  const handleHelpfulClick = (reviewId: number, type: "helpful" | "notHelpful") => {
    const key = `${reviewId}`

    if (helpfulClicks[key] === type) {
      // User is clicking the same button again, so remove their vote
      const newHelpfulClicks = { ...helpfulClicks }
      delete newHelpfulClicks[key]
      setHelpfulClicks(newHelpfulClicks)
    } else {
      // User is voting or changing their vote
      setHelpfulClicks({
        ...helpfulClicks,
        [key]: type,
      })
    }
  }

  // For preview mode, only show first 2 reviews
  const displayedReviews = preview ? reviewsData.slice(0, 2) : reviewsData

  return (
    <div>
      {/* Reviews Summary */}
      {!preview && (
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">2.5</div>
                <div className="flex justify-center mb-2">
                  {[1, 2].map((i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                  <Star size={20} className="text-yellow-400 fill-yellow-400" strokeWidth={0} fill="url(#half-star)" />
                  {[4, 5].map((i) => (
                    <Star key={i} size={20} className="text-gray-300" />
                  ))}
                </div>
                <div className="text-sm text-gray-500">Based on 5 reviews</div>
              </div>

              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="text-sm text-gray-600 w-12">5 stars</div>
                  <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-green-600 h-full rounded-full" style={{ width: "40%" }}></div>
                  </div>
                  <div className="text-sm text-gray-600 w-8">2</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-sm text-gray-600 w-12">4 stars</div>
                  <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-green-600 h-full rounded-full" style={{ width: "20%" }}></div>
                  </div>
                  <div className="text-sm text-gray-600 w-8">1</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-sm text-gray-600 w-12">3 stars</div>
                  <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-green-600 h-full rounded-full" style={{ width: "20%" }}></div>
                  </div>
                  <div className="text-sm text-gray-600 w-8">1</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-sm text-gray-600 w-12">2 stars</div>
                  <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-green-600 h-full rounded-full" style={{ width: "20%" }}></div>
                  </div>
                  <div className="text-sm text-gray-600 w-8">1</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-sm text-gray-600 w-12">1 star</div>
                  <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-green-600 h-full rounded-full" style={{ width: "0%" }}></div>
                  </div>
                  <div className="text-sm text-gray-600 w-8">0</div>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <h3 className="font-medium mb-4">Review this product</h3>
              <p className="text-sm text-gray-600 mb-4">Share your thoughts with other customers</p>
              <button className="w-full border border-gray-300 rounded-md py-2 px-4 text-sm hover:bg-gray-50">
                Write a customer review
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reviews List */}
      <div className="space-y-6">
        {displayedReviews.map((review) => (
          <div key={review.id} className="border-b pb-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-gray-600 font-medium">{review.author.charAt(0)}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center">
                  <span className="font-medium">{review.author}</span>
                  {review.verified && (
                    <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">
                      Verified Purchase
                    </span>
                  )}
                </div>

                <div className="flex items-center mt-1">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-2">
                    {new Date(review.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>

                <h4 className="font-medium mt-2">{review.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{review.content}</p>

                <div className="flex items-center mt-3 text-sm">
                  <span className="mr-3">Was this review helpful?</span>
                  <button
                    onClick={() => handleHelpfulClick(review.id, "helpful")}
                    className={`flex items-center gap-1 px-3 py-1 rounded-md mr-2 ${
                      helpfulClicks[review.id] === "helpful" ? "bg-green-600 text-white" : "border hover:bg-gray-50"
                    }`}
                  >
                    <ThumbsUp size={14} />
                    <span>{review.helpful + (helpfulClicks[review.id] === "helpful" ? 1 : 0)}</span>
                  </button>
                  <button
                    onClick={() => handleHelpfulClick(review.id, "notHelpful")}
                    className={`flex items-center gap-1 px-3 py-1 rounded-md ${
                      helpfulClicks[review.id] === "notHelpful" ? "bg-gray-600 text-white" : "border hover:bg-gray-50"
                    }`}
                  >
                    <ThumbsDown size={14} />
                    <span>{review.notHelpful + (helpfulClicks[review.id] === "notHelpful" ? 1 : 0)}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show more reviews button in preview mode */}
      {preview && reviewsData.length > 2 && (
        <div className="mt-6 text-center">
          <button className="text-green-600 hover:text-green-700 font-medium">
            View all {reviewsData.length} reviews
          </button>
        </div>
      )}
    </div>
  )
}
