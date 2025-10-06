import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "JSON Doctor — Fix, Explain, and Validate JSON Instantly with AI",
  description:
    "Repair invalid JSON, generate schema, and understand issues with your data using Gemini AI. The fastest online JSON fixer and schema generator for developers.",
  keywords: [
    "JSON fixer",
    "invalid JSON repair",
    "AI JSON validator",
    "JSON schema generator",
    "Next.js Gemini AI",
    "JSON diff viewer",
    "fix JSON online"
  ],
  authors: [{ name: "Sagar Pednekar", url: "https://github.com/sagarpednekar" }],
  creator: "Sagar Pednekar",
  openGraph: {
    title: "JSON Doctor — Fix Invalid JSON with AI",
    description:
      "AI-powered JSON repair, schema generation, and diff viewer. Fix broken JSON instantly with Gemini AI.",
    url: "https://json-doctor.vercel.app/", // your domain
    siteName: "JSON Doctor",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "JSON Doctor — AI JSON Repair Tool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JSON Doctor — Fix Invalid JSON with AI",
    description:
      "Smart JSON repair tool powered by Gemini AI. Fix syntax errors, infer schema, and explain issues.",
    images: ["/og-image.png"],
    creator: "@your_twitter_handle",
  },
  alternates: {
    canonical: "https://json-doctor.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
