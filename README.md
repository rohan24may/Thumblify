# 🚀 Thumblify - AI Thumbnail Generator

![Thumblify Logo](client/public/logo.svg)

AI-powered YouTube thumbnail generator built with MERN stack. Create stunning, click-worthy thumbnails in seconds!

## ✨ Features

- 🎨 AI-powered thumbnail generation
- 📱 Fully responsive design
- 🎯 Multiple artistic styles (Bold, Minimalist, Photorealistic, Illustrated, Tech)
- 🎨 Color scheme selection
- 📐 Multiple aspect ratios (16:9, 1:1, 9:16)
- 💾 Save and manage generations
- 🔐 User authentication

## 🛠️ Tech Stack

**Frontend:** React 19, TypeScript, Vite, Tailwind CSS, Framer Motion  
**Backend:** Node.js, Express.js, MongoDB, JWT

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/your-username/thumblify.git
cd thumblify

# Install dependencies
cd server && npm install
cd ../client && npm install

# Setup environment variables (see .env.example)
# Start MongoDB

# Start servers
cd server && npm run dev    # Backend on port 4000
cd ../client && npm run dev # Frontend on port 5173
```

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