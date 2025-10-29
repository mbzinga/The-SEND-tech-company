# The SEND Tech Company Landing Website

A sleek, minimalist landing website for The SEND Tech Company built with Next.js 15, TypeScript, and Tailwind CSS.

## 🎯 Overview

This website serves as the official organisational hub for all products owned by The SEND Tech Company, showcasing our commitment to technology for inclusive education.

### Products Featured
- **SEN-AI**: AI powered curriculum and intervention platform for schools
- **Lighthouse Consultancy**: Expert SEND consultancy and training
- **Leif**: Parent-facing app for supporting children with additional needs

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd send-tech-company
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.example .env.local
```

4. Add your Resend API key to `.env.local`:
```bash
RESEND_API_KEY=your_resend_api_key_here
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── products/          # Product pages
│   ├── legal/             # Legal document pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── layout.tsx         # Root layout
├── components/            # Reusable React components
├── data/                  # Static data files
├── content/               # Markdown content
└── public/               # Static assets
```

## 🎨 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Meta tags, OpenGraph, and structured data
- **Contact Form**: Working contact form with Resend email integration
- **Legal Pages**: Comprehensive legal documentation
- **Product Showcase**: Dynamic product pages with static generation
- **Modern UI**: Clean, minimalist design with smooth animations

## 🔧 Configuration

### Email Integration
The contact form uses [Resend](https://resend.com) for email delivery. To set up:

1. Create a Resend account
2. Get your API key
3. Add it to your `.env.local` file
4. Optionally configure a custom domain

### Customization
- **Colors**: Modify the primary color palette in `tailwind.config.ts`
- **Content**: Update product information in `data/products.js`
- **Legal**: Edit legal documents in `content/legal/` or `app/legal/[document]/page.tsx`

## 📄 Pages

- `/` - Landing page with hero, products, and mission
- `/products` - Products overview page
- `/products/[slug]` - Individual product detail pages
- `/about` - Company information and story
- `/contact` - Contact form and information
- `/legal` - Legal documents index
- `/legal/[document]` - Individual legal documents

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms
This is a standard Next.js application and can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | API key for email functionality | Yes |
| `RESEND_DOMAIN` | Custom domain for Resend (optional) | No |

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Email**: Resend
- **Icons**: Heroicons (SVG)
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel (recommended)

## 📞 Support

For questions or support, please contact us through our [contact page](http://localhost:3000/contact) or email hello@sendtechcompany.com.

## 📄 License

© 2025 The SEND Tech Company. All rights reserved.
