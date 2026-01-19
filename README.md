# 🚀 Thumblify - AI Thumbnail Generator

![Thumblify Logo](client/public/logo.svg)

Thumblify is a cutting-edge AI-powered thumbnail generator built with the MERN stack. Create stunning, click-worthy YouTube thumbnails in seconds with our intuitive interface and advanced AI technology.

## ✨ Features

- 🎨 **AI-Powered Generation**: Advanced AI creates professional thumbnails based on your descriptions
- 📱 **Responsive Design**: Fully responsive design that works on all devices
- 🎯 **Multiple Styles**: Choose from various artistic styles (Bold & Graphic, Minimalist, Photorealistic, Illustrated, Tech/Futuristic)
- 🎨 **Color Schemes**: Pre-defined color palettes or custom color selection
- 📐 **Aspect Ratios**: Support for 16:9, 1:1, and 9:16 ratios
- 💾 **My Generations**: Save and manage all your generated thumbnails
- 🔍 **Preview Mode**: See your thumbnails in YouTube-style preview
- 🔐 **Authentication**: Secure user authentication system
- 📊 **Dashboard**: Personal dashboard to track your creations

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Router** - Client-side routing
- **React Hot Toast** - Beautiful toast notifications
- **Lucide React** - Beautiful icons

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Multer** - File upload handling
- **CORS** - Cross-origin resource sharing

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB database
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/thumblify.git
   cd thumblify
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Environment Setup**

   Create `.env` files in both server and client directories:

   **Server (.env)**
   ```env
   PORT=4000
   MONGODB_URI=mongodb://localhost:27017/thumblify
   JWT_SECRET=your-super-secret-jwt-key-here
   CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
   CLOUDINARY_API_KEY=your-cloudinary-api-key
   CLOUDINARY_API_SECRET=your-cloudinary-api-secret
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   ```

   **Client (.env)**
   ```env
   VITE_BASE_URL=http://localhost:4000
   VITE_GOOGLE_CLIENT_ID=your-google-client-id
   ```

5. **Start MongoDB**
   Make sure MongoDB is running on your system.

6. **Start the development servers**

   **Terminal 1 - Start Backend:**
   ```bash
   cd server
   npm run dev
   ```

   **Terminal 2 - Start Frontend:**
   ```bash
   cd client
   npm run dev
   ```

7. **Open your browser**
   Navigate to `http://localhost:5173` to see the application running!

## 📁 Project Structure

```
thumblify/
├── client/                    # React frontend
│   ├── public/               # Static assets
│   │   ├── assets/          # Images and icons
│   │   └── favicon.svg
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── sections/       # Section components
│   │   ├── data/           # Static data files
│   │   ├── configs/        # API configuration
│   │   ├── context/        # React context
│   │   ├── assets/         # Imported assets and types
│   │   ├── globals.css     # Global styles
│   │   └── main.tsx        # App entry point
│   └── package.json
├── server/                   # Node.js backend
│   ├── config/             # Database and AI configuration
│   ├── controllers/        # Route controllers
│   ├── middlewares/        # Custom middlewares
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── server.ts          # Server entry point
│   └── package.json
├── .gitignore              # Git ignore rules
└── README.md              # Project documentation
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/verify` - Verify user session
- `POST /api/auth/google` - Google OAuth login

### Thumbnails
- `POST /api/thumbnail/generate` - Generate new thumbnail
- `GET /api/thumbnail/my` - Get user's thumbnails
- `DELETE /api/thumbnail/delete/:id` - Delete thumbnail

### Users
- `GET /api/user/thumbnail/:id` - Get specific thumbnail

## 🎨 Usage

### Creating Thumbnails
1. Navigate to the Generate page
2. Enter your video title or topic
3. Select aspect ratio (16:9, 1:1, 9:16)
4. Choose a style (Bold & Graphic, Minimalist, etc.)
5. Pick a color scheme
6. Add additional prompts (optional)
7. Click "Generate Thumbnail"

### Managing Thumbnails
- View all your generated thumbnails in "My Generation"
- Download thumbnails directly from the preview
- Delete unwanted thumbnails

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Icons by [Lucide React](https://lucide.dev/)
- UI components inspired by modern design principles
- AI thumbnail generation powered by advanced machine learning models

## 📞 Contact

- **Author**: Rohan Hudati
- **Email**: rohanabcd0305@gmail.com
- **GitHub**: [rohanhudati](https://github.com/rohanhudati)

---

**⭐ Star this repo if you found it helpful!**

Made with ❤️ by Rohan Hudati