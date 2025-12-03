import { StaticImageData } from "next/image";
import NewsImage1 from "@/public/image/News 1.png";
import NewsImage2 from "@/public/image/News 2.png";
import NewsImage3 from "@/public/image/News 3.png";
import NewsImage4 from "@/public/image/News 4.png";
import NewsImage5 from "@/public/image/News 5.png";
import NewsImage6 from "@/public/image/News 6.png";
import NewsImage7 from "@/public/image/News 7.png";
import NewsImage8 from "@/public/image/News 8.png";
import NewsImage9 from "@/public/image/News 9.png";
import { NewsPost } from "../types/blog-types";

export type NewsItem = {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: StaticImageData;
  createdAt: string;
  content: string;
};

export const News: NewsItem[] = [
  {
    id: 1,
    slug: "making-selling-your-gold-easier",
    title: "Making Selling Your Gold Easier",
    description:
      "Selling gold shouldn’t feel complicated. Whether it’s investment bars or inherited pieces, many people delay selling simply because the process feels overwhelming. Here’s how we remove the stress and make the experience simple, safe and transparent.",
    image: NewsImage1,
    createdAt: "2025-10-01",
    content: `
      <p>Selling gold shouldn’t feel complicated. Whether it’s investment bars or inherited pieces, many people delay selling simply because the process feels overwhelming. Here’s how we remove the stress and make the experience simple, safe and transparent.</p>

      <h2>A Clear, Straightforward Process</h2>
      <p>We outline every step from the moment you request a valuation to the moment you receive payment. No hidden fees, no jargon, just a smooth, streamlined process.</p>

      <h2>Fast &amp; Accurate Valuations</h2>
      <p>Our experts assess purity, weight and current market value using industry-standard testing. You always know exactly what your gold is worth at the live price.</p>

      <h2>Secure Insured Shipping</h2>
      <p>We provide an insured mailing pack or collection option, giving you peace of mind from start to finish.</p>

      <h2>Same-Day Payments</h2>
      <p>Once your gold is assessed and you accept the quote, we pay you the same day. No delays, no waiting around.</p>

      <p>We believe selling your gold and silver should be quick, simple and stress-free and that’s exactly what we deliver. Ready to turn your gold or silver into cash? You can deliver it safely using our insured service or drop it off directly at our Bromley office.</p>

      <p><strong>Visit us:</strong> Old Town Hall, 30 Tweedy Rd, Bromley BR1 3FE. <strong>Call:</strong> 0208 080 2848 <strong>Email:</strong> info@webuygoldnow.co.uk</p>
    `,
  },

  {
    id: 2,
    slug: "a-trusted-global-buyer",
    title: "A Trusted Global Buyer",
    description:
      "With gold trading at record highs, choosing the right buyer matters more than ever. As a global gold-buying company, you’re working with an internationally trusted buyer built on reputation, expertise and committed to fairness and transparency.",
    image: NewsImage2,
    createdAt: "2025-10-02",
    content: `
      <p>With gold trading at record highs, choosing the right buyer matters more than ever. As a global gold-buying company, you’re working with an internationally trusted buyer built on reputation, expertise and committed to fairness and transparency.</p>

      <h2>International Market Access</h2>
      <p>Our scale allows us to operate across global markets, ensuring we always offer fair, real-time pricing.</p>

      <h2>Professional Testing &amp; Compliance</h2>
      <p>Every item is tested by trained gold specialists using internationally recognised methods, guaranteeing accurate valuations.</p>

      <h2>Millions Paid Out to Clients Worldwide</h2>
      <p>Clients around the world trust us for honest appraisals, fast payments, and consistently high buy-back prices.</p>

      <h2>Why Global Matters</h2>
      <p>A global buyer isn’t restricted by local limitations. We have access to broader demand, which means better rates for sellers.</p>

      <p>Sell your gold with confidence. We offer insured delivery options or private drop-off appointments at our Bromley office: Old Town Hall, 30 Tweedy Rd, Bromley BR1 3FE. Contact us on 0208 080 2848 or info@webuygoldnow.co.uk to arrange your secure valuation today.</p>
    `,
  },

  {
    id: 3,
    slug: "friendly-uk-support-team",
    title: "Friendly UK Support Team",
    description:
      "Selling gold can raise questions and our UK support team is here to help with every step.",
    image: NewsImage3,
    createdAt: "2025-10-03",
    content: `
      <p>Selling gold can raise questions and our UK support team is here to help with every step.</p>

      <h2>Local Knowledge, National Service</h2>
      <p>Our team understands UK regulations, hallmarks, shipping requirements and customer needs.</p>

      <h2>Real People, Real Support</h2>
      <p>No long waits or confusing automated systems. Our advisors offer clear guidance, tailored to your items.</p>

      <h2>Fast Communication</h2>
      <p>Whether by phone, email or live chat, our specialists respond quickly and professionally.</p>

      <h2>Guidance for First-Time Sellers</h2>
      <p>We’re especially supportive of clients who are selling gold for the first time, helping them feel confident and informed.</p>

      <p>Friendly, experienced and UK-based, we’re here to ensure every customer feels supported. Whether you want to deliver your gold or drop it off in person, we’re ready when you are.</p>

      <p><strong>Visit:</strong> Old Town Hall, 30 Tweedy Rd, Bromley BR1 3FE. <strong>Call:</strong> 0208 080 2848 <strong>Email:</strong> info@webuygoldnow.co.uk</p>
    `,
  },

  {
    id: 4,
    slug: "risk-management-plan-for-selling-gold",
    title: "Risk Management Plan for Selling Gold",
    description:
      "Selling precious metals involves financial decisions and we help clients manage risks effectively.",
    image: NewsImage4,
    createdAt: "2025-10-04",
    content: `
      <p>Selling precious metals involves financial decisions and we help clients manage risks effectively.</p>

      <h2>Market Volatility Awareness</h2>
      <p>Gold prices move daily. We help sellers understand live pricing so they can time their sale confidently.</p>

      <h2>Secure Shipping &amp; Handling</h2>
      <p>All packages are tracked and insured, protecting clients from loss or damage.</p>

      <h2>Transparent Valuations</h2>
      <p>No hidden margins or surprise deductions, preventing valuation disputes or miscommunication.</p>

      <h2>Compliance &amp; Anti-Fraud Measures</h2>
      <p>We follow strict security procedures to protect your items and your identity.</p>

      <h2>Payment Security</h2>
      <p>Funds are transferred safely through verified banking systems, avoiding scams or delays.</p>

      <p>A solid risk-management approach ensures every customer enjoys a safe, smooth and protected selling journey. If you sell your gold with us today, we offer secure delivery or convenient drop-off at our Bromley location.</p>

      <p><strong>Visit:</strong> Old Town Hall, 30 Tweedy Rd, Bromley BR1 3FE. <strong>Call:</strong> 0208 080 2848 <strong>Email:</strong> info@webuygoldnow.co.uk</p>
    `,
  },

  {
    id: 5,
    slug: "the-essential-guide-to-selling-your-gold",
    title: "The Essential Guide to Selling Your Gold",
    description:
      "Check hallmarks, purity and weight—these factors determine value.",
    image: NewsImage5,
    createdAt: "2025-10-05",
    content: `
      <h2>Step 1: Identify Your Gold</h2>
      <p>Check hallmarks, purity and weight—these factors determine value.</p>

      <h2>Step 2: Understand Gold Prices</h2>
      <p>Gold is priced per ounce or gram. Live market prices change throughout the day.</p>

      <h2>Step 3: Choose a Trusted Buyer</h2>
      <p>Look for transparent pricing, insured postage, great reviews and expertise.</p>

      <h2>Step 4: Get a Valuation</h2>
      <p>Your buyer should check purity, weight and authenticity professionally.</p>

      <h2>Step 5: Approve the Offer &amp; Receive Payment</h2>
      <p>Once you’re happy with the quote, payment should be fast and secure.</p>

      <p>Ready to turn your gold into cash? Choose our secure insured delivery service or drop your items off at our Bromley office for a fast, trusted valuation.</p>

      <p><strong>Visit:</strong> Old Town Hall, 30 Tweedy Rd, Bromley BR1 3FE. <strong>Call:</strong> 0208 080 2848 <strong>Email:</strong> info@webuygoldnow.co.uk</p>
    `,
  },

  {
    id: 6,
    slug: "buying-and-selling-gold-and-silver",
    title: "Buying and Selling Gold & Silver",
    description:
      "Gold and silver are two of the world’s most traded precious metals but understanding how to buy or sell them can unlock even greater value.",
    image: NewsImage6,
    createdAt: "2025-10-06",
    content: `
      <p>Gold and silver are two of the world’s most traded precious metals but understanding how to buy or sell them can unlock even greater value.</p>

      <h2>The Appeal of Gold</h2>
      <p>Safe-haven asset, inflation hedge and long-term store of value.</p>

      <h2>The Appeal of Silver</h2>
      <p>More affordable, industrial demand and strong long-term growth potential.</p>

      <h2>When to Buy</h2>
      <p>Many investors buy during market dips or when inflation rises.</p>

      <h2>When to Sell</h2>
      <p>Selling during price peaks or personal financial milestones often yields best value.</p>

      <p>Selling your gold has never been easier and understanding the process can help you maximize its value with minimal effort. Whether you have bars, coins or scrap gold, the first step is to identify the purity and hallmarks of each item, as these determine its market value. Trusted buyers, like our Bromley location, ensure a secure, transparent selling experience. You can choose to drop off your items in person or use our insured delivery service, both designed to keep your gold safe throughout the transaction. Once your items are assessed by our experienced team, you’ll receive a fair, competitive offer based on current market prices and real-time gold valuations.</p>

      <p>Payments are quick and reliable, either on the spot or via bank transfer, giving you immediate access to your funds. By selling through reputable buyers, you remove the stress of negotiating with unknown buyers or waiting weeks for payment, making the process not only simple but also highly rewarding. Our team is always available to guide you through every step, answer your questions and ensure you feel confident about selling your precious metals.</p>

      <h3>Tips for Maximizing Value</h3>
      <ul>
        <li>Check purity</li>
        <li>Understand spot prices</li>
        <li>Compare buyers</li>
        <li>Keep receipts and certificates</li>
      </ul>

      <p><strong>Visit:</strong> Old Town Hall, 30 Tweedy Rd, Bromley BR1 3FE. <strong>Call:</strong> 0208 080 2848 <strong>Email:</strong> info@webuygoldnow.co.uk</p>
    `,
  },

  {
    id: 7,
    slug: "technical-analysis-on-gold",
    title: "Technical Analysis on Gold",
    description:
      "Technical analysis is a key tool for understanding market trends and price movements, helping investors and sellers alike make informed decisions about when to buy or sell gold. Over the past few years, gold has experienced significant upward momentum due to factors such as inflation, global uncertainty, and strong investor demand. This makes now an opportune time for anyone looking to sell their gold and get the best value.",
    image: NewsImage7,
    createdAt: "2025-10-07",
    content: `
      <p>Technical analysis is a key tool for understanding market trends and price movements, helping investors and sellers alike make informed decisions about when to buy or sell gold. Over the past few years, gold has experienced significant upward momentum due to factors such as inflation, global uncertainty, and strong investor demand. This makes now an opportune time for anyone looking to sell their gold and get the best value.</p>

      <h2>Price Trends (2023–2025)</h2>
      <p>Gold prices have remained robust, with rising inflation, geopolitical tensions, and fluctuating currencies driving demand. Investors have consistently turned to gold as a safe-haven asset, pushing prices higher. For sellers, this upward trend presents a valuable opportunity to maximise returns from your gold holdings.</p>

      <h2>Key Technical Indicators</h2>
      <ul>
        <li>Moving Averages: Demonstrate the strength of upward trends.</li>
        <li>RSI (Relative Strength Index): Shows whether gold is overbought or oversold.</li>
        <li>Support &amp; Resistance Levels: Help predict potential price breakouts.</li>
        <li>MACD Indicators: Highlight momentum shifts that can influence selling decisions.</li>
      </ul>

      <h2>Why Selling Your Gold Now Makes Sense</h2>
      <p>Understanding hallmarks is essential when selling gold. A hallmark is a legally required mark that confirms the purity and fineness of gold, silver, platinum or palladium. WeBuyAnyGold, the UK’s leading gold buyers, emphasise the importance of hallmarks in assessing value.</p>

      <h3>Typical Hallmarks Include</h3>
      <ul>
        <li>Sponsor’s Mark: Identifies the maker or sender of the item.</li>
        <li>Standard Mark: Indicates metal purity in parts per thousand.</li>
        <li>Assay Mark: Shows the UK office where the metal was tested.</li>
      </ul>

      <p>Recognising these marks ensures your gold is accurately valued, allowing you to receive fair market prices. Even items with special commemorative or international marks are considered, broadening opportunities for sellers.</p>

      <p>Market drivers include interest rates, geopolitical risk, currency strength, and investor sentiment. Rising global uncertainty and inflation trends suggest that gold will likely remain a strong investment in the near term, making it an ideal time to sell and benefit from current market conditions.</p>

      <p>The selling process is safe and rewarding with trusted buyers providing secure, insured delivery, fast payments and full market value for your items.</p>

      <p><strong>Contact:</strong> 0208 080 2848 or visit Old Town Hall, 30 Tweedy Rd, Bromley BR1 3FE for a fast, no-obligation valuation.</p>
    `,
  },

  {
    id: 8,
    slug: "know-your-hallmarks",
    title: "Know Your Hallmarks",
    description:
      "A hallmark is your guarantee of authenticity. It confirms purity, origin and compliance with UK law. A hallmark is your assurance that a gold or silver item is genuine. Whether it’s a bar or coin, hallmarks confirm the metal’s purity and authenticity, giving both buyers and sellers confidence.",
    image: NewsImage8,
    createdAt: "2025-10-08",
    content: `
      <p>A hallmark is your guarantee of authenticity. It confirms purity, origin and compliance with UK law. A hallmark is your assurance that a gold or silver item is genuine. Whether it’s a bar or coin, hallmarks confirm the metal’s purity and authenticity, giving both buyers and sellers confidence.</p>

      <h2>What a Hallmark Typically Includes</h2>
      <ul>
        <li>Purity or Fineness Mark (e.g., 999.9, 999, 916, 900, 750, 585, 375) — Indicates the percentage of pure gold or silver in the item.</li>
        <li>Assay Office or Mint Mark — Depending on the country, this could be from a national mint (e.g., Royal Mint, US Mint, Perth Mint, Rand Refinery) or an assay office (e.g., London, Birmingham, Edinburgh, Sheffield).</li>
        <li>Manufacturer or Sponsor’s Mark — Identifies the company or institution responsible for producing or submitting the item for testing.</li>
        <li>Optional Additional Marks — These may include date marks, commemorative symbols, or country-specific certification stamps.</li>
      </ul>

      <p><!-- image should appear mid-content --></p>
      <p><img src="/images/know-your-hallmarks-figure.jpg" alt="Hallmark example" style="display:block;margin:1rem auto;max-width:100%;" /></p>

      <h2>Why Hallmarks Matter When Selling Gold or Silver</h2>
      <p>Hallmarks provide immediate clarity about authenticity and purity. This makes the valuation process quicker, more accurate, and more transparent. Whether you're selling gold coins, silver bars, bullion rounds, or investment-grade pieces, clear hallmarks help ensure you receive a fair and competitive price.</p>

      <h2>Items Without Hallmarks</h2>
      <p>If your gold or silver doesn’t have any visible hallmarks, don’t worry - it can still be assessed.</p>

      <p>We use professional, industry-standard testing methods such as:</p>
      <ul>
        <li>XRF (X-ray fluorescence) testing</li>
        <li>Acid testing</li>
        <li>Electronic conductivity and purity analysis</li>
      </ul>

      <p>These methods allow us to determine the exact metal content and offer an accurate valuation.</p>

      <p>Understanding hallmarks is important to know exactly what you own and the value of your gold and silver. Looking to sell your gold and silver, or simply need some guidance or advice? We're here to help.</p>

      <p><strong>Contact:</strong> 0208 080 2848, <strong>Email:</strong> info@webuygoldnow.co.uk, or visit Old Town Hall, 30 Tweedy Rd, Bromley BR1 3FE.</p>
    `,
  },

  {
    id: 9,
    slug: "testimonial-a-clients-profit-journey",
    title: "Testimonial — A Client’s Profit Journey",
    description:
      "What Made the Difference? Patience, rising gold prices and a trusted buyer offering full market value all played key roles, alongside a secure selling process that ensured confidence and peace of mind throughout the transaction.",
    image: NewsImage9,
    createdAt: "2025-10-09",
    content: `
      <blockquote>
        “I bought £20,000 worth of gold bars around 12 oz worth, this was two years ago as a way of protecting my savings. I couldn’t be happier because selling with We Buy Gold Now has been absolutely seamless from start to finish. The team explained everything clearly, gave me a fair price based on the live market and processed my payment the same day. I walked away with a profit I honestly didn’t expect over £17,000. I couldn’t be happier and I’ll definitely be recommending to any family or friends looking to sell their gold for instant cash.”
        <br /><strong>— Maria-leigh Hilton, Verified Client, 2025</strong>
      </blockquote>

      <h2>The Client’s Purchase (October 2023)</h2>
      <ul>
        <li>Investment amount: £20,000</li>
        <li>Gold price at the time: £1,631.72 per ounce</li>
        <li>Gold purchased: ≈ 12.26 oz</li>
      </ul>

      <h2>The Sale (October 2025)</h2>
      <ul>
        <li>Gold price: £3,035–£3,040 per ounce</li>
        <li>Value of their gold: ≈ £37,300</li>
      </ul>

      <h2>Total Profit</h2>
      <ul>
        <li>Initial investment: £20,000</li>
        <li>Sale value: £37,300</li>
        <li>Profit: approximately £17,300</li>
      </ul>

      <p>What Made the Difference? Patience, rising gold prices and a trusted buyer offering full market value all played key roles, alongside a secure selling process that ensured confidence and peace of mind throughout the transaction.</p>

      <p>Real clients, real gains. With the right timing and a reliable buyer, gold continues to deliver strong returns. Looking to sell your gold &amp; silver, or simply need some guidance or advice? We're here to help.</p>

      <p><strong>Contact:</strong> 0208 080 2848, <strong>Email:</strong> info@webuygoldnow.co.uk, or visit Old Town Hall, 30 Tweedy Rd, Bromley BR1 3FE.</p>
    `,
  },
];

// In-memory storage for demo (replace with database)
export const posts: NewsPost[] = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    slug: "getting-started-nextjs",
    excerpt:
      "Learn the fundamentals of building modern web applications with Next.js and React.",
    content:
      "<h2>Introduction</h2><p>Next.js is a powerful React framework that makes it easy to build production-ready applications.</p>",
    category: "Development",
    author: "John Doe",
    image: "/nextjs-logo.png",
    featured: true,
    published: true,
    publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
  },
];
