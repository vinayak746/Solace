# 📈 Solace

<div align="center">
  <p><strong>Your intelligent companion for stock market tracking and analysis</strong></p>
  <p>Track real-time stock prices, get personalized alerts, and explore detailed company insights all in one place.</p>
</div>

---

## ✨ Features

### 🔴 Real-Time Stock Tracking
- Live stock price updates with interactive charts powered by TradingView
- Multi-symbol tracking for comprehensive portfolio monitoring
- Dynamic chart customization with multiple timeframes

### 🔔 Personalized Alerts
- Custom price alerts for your watchlist stocks
- Real-time notifications for significant market movements
- Configurable alert thresholds

### 📊 Company Insights
- Detailed company information and fundamentals
- Historical performance data
- Market analytics and trends

### 🎨 Modern User Experience
- Clean, intuitive interface built with Next.js 15
- Responsive design for seamless mobile and desktop experience
- Fast page loads with optimized server-side rendering
- Smooth navigation with custom UI components

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (React 19)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** CSS Modules with modern CSS features
- **Charts:** [TradingView Widget](https://www.tradingview.com/widget/)
- **UI Components:** Custom React components with shadcn/ui
- **Font Optimization:** next/font with Geist font family

---

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed (v18 or higher recommended).

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/vinayak746/Solace.git
cd Solace
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

---

## 📁 Project Structure

```
Solace/
├── app/                 # Next.js app directory (pages and layouts)
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── NavItems.tsx    # Navigation items
│   ├── TradingViewWidget.tsx  # Stock chart widget
│   └── UserDropdown.tsx       # User menu dropdown
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and configurations
├── types/              # TypeScript type definitions
├── public/             # Static assets
└── README.md           # Project documentation
```

---

## 🎯 Usage

### Tracking Stocks

1. Navigate to the stock search section
2. Enter the stock symbol or company name
3. View real-time charts and data

### Setting Alerts

1. Select a stock from your watchlist
2. Click on "Set Alert"
3. Configure your price thresholds
4. Receive notifications when conditions are met

### Viewing Company Insights

1. Click on any stock to view detailed information
2. Explore fundamentals, news, and analysis
3. Make informed investment decisions

---

## 🔧 Configuration

The project uses several configuration files:

- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript compiler options
- `components.json` - UI components configuration
- `eslint.config.mjs` - ESLint rules

---

## 🌐 Deployment

### Deploy on Vercel

The easiest way to deploy Solace is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Your app will be live in minutes!

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---

## 📚 Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial
- [React Documentation](https://react.dev) - Learn React fundamentals
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - Master TypeScript
- [TradingView Widgets](https://www.tradingview.com/widget/) - Explore chart customization options

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve Solace:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Vinayak**

- GitHub: [@vinayak746](https://github.com/vinayak746)

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Charts powered by [TradingView](https://www.tradingview.com/)
- UI components inspired by [shadcn/ui](https://ui.shadcn.com/)
- Font optimization with [Geist](https://vercel.com/font)

---

<div align="center">
  <p>Made with ❤️ for stock market enthusiasts</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
