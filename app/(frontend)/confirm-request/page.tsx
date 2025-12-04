import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function ConfirmRequestPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 pt-32">
      <Card className="max-w-2xl w-full shadow-xl rounded-2xl border border-slate-200 bg-white/90 backdrop-blur pt-0">
        <div className="w-full h-20 bg-linear-to-r from-amber-500 to-yellow-600 rounded-t-2xl flex items-center justify-center shadow-inner">
          <h1 className="text-white text-xl font-semibold tracking-wide">
            Confirmation Received
          </h1>
        </div>

        <CardContent className="px-8 pb-8 pt-6">
          <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-md">
            <div className="space-y-4 text-slate-800 leading-relaxed text-base md:text-lg font-medium">
              <p> Hi,</p>

              <p>
                Thank you for your submission, we’ve received your details. A
                member of our team will usually contact you within 1-2 hours.
              </p>

              <p>
                If your enquiry was sent outside weekday hours, please allow up
                to 24 hours for a reply. We handle all enquiries Monday to
                Friday 9am to 6:30pm, as well as, secure drop-off appointments.
              </p>

              <p>
                We review your gold or silver based on the current spot price,
                purity, weight and overall condition or rarity. Once assessed,
                we provide a clear, transparent quote so you know exactly what
                your items are worth.
              </p>

              <p>
                Package your items securely, wrap each piece individually and
                include your full name and contact, with package tracking
                details.
              </p>

              <p>
                Drop-offs are available during working hours, at our Bromley
                office. Payment is issued instantly after assessment.
              </p>

              <p>Thank you for choosing We Buy Gold Now.</p>
            </div>

            <div className="mt-6 border-t pt-4 border-slate-100">
              <div className="text-xs text-slate-500 text-center italic">
                This message is an automated confirmation — no reply is needed.
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
