import Link from "next/link";

export const RegisterBenefitsList = () => {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-medium">
          <span>Why login with </span>
          <span className="text-pink-500">notunbazar.com</span>
        </h3>
      </div>

      <div>
        <ul className="space-y-4">
          <div>
            <li className="flex gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12L10 17L20 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <span className="text-sm">
                  Earn points to use as discounts on purchases.
                </span>
              </div>
            </li>
          </div>

          <div>
            <li className="flex gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12L10 17L20 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <span className="text-sm">
                  Get money off all orders once advancing to a gold account.
                </span>
              </div>
            </li>
          </div>

          <div>
            <li className="flex gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12L10 17L20 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <span className="text-sm">
                  Receive points on your birthday to use as a discount.
                </span>
              </div>
            </li>
          </div>

          <div>
            <li className="flex gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12L10 17L20 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <span className="text-sm">
                  Level up and receive a free hoodie.
                </span>
              </div>
            </li>
          </div>

          <div>
            <li className="flex gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12L10 17L20 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <span className="text-sm">
                  Learn about offers before anyone else.
                </span>
              </div>
            </li>
          </div>
        </ul>
      </div>

      <div className="pt-2">
        <div>
          <p className="text-sm">
            <span>Already have an account? </span>
            <Link href="/auth/login" className="text-pink-500 hover:underline">
              Login to your account here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
