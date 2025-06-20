import { AlertTriangle, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function FacebookReviewPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white px-4 py-3">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-lg">f</span>
            </div>
            <h1 className="text-lg font-semibold">Facebook Account Review</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <HelpCircle className="w-4 h-4" />
              <span className="text-sm">Help Center</span>
            </div>
            <div className="text-sm">
              <div>Language</div>
              <select className="bg-transparent border-none text-xs">
                <option>Select Language</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center min-h-[calc(100vh-80px)] p-4">
        <Card className="w-full max-w-2xl">
          <CardContent className="p-8">
            {/* Warning Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Urgent Account Review Required</h2>

            {/* Description */}
            <p className="text-center text-gray-600 mb-8 leading-relaxed">
              Your account is scheduled for deletion due to policy violations. Request a review to prevent permanent
              loss of your account and data.
            </p>

            {/* Important Notice Box */}
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
                <h3 className="font-semibold text-orange-800">Important Notice</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    Your account is scheduled for deletion in <strong>24 hours</strong>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>This action is due to violations of our community standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>You may request a review of this decision</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>If approved, your account will be restored with full access</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Failure to request a review will result in permanent deletion</span>
                </li>
              </ul>
            </div>

            {/* Instructions */}
            <p className="text-center text-gray-600 mb-8">
              To request a review of your account deletion, click the button below and follow the instructions.
            </p>

            {/* Action Button */}
            <div className="flex justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
                META APPEAL CENTER
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}