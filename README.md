# 🪨 Pet Rocko Simulator

A tiny virtual pet rock — built with **React Native + Expo** — created originally at my university’s ACM chapter and later expanded as a project to test, experiment, and improve my skills.

Pet Rocko sits.  
Pet Rocko vibes.  
Pet Rocko depends on you… kind of.

---

## 🎮 What is Pet Rocko?

**Pet Rocko Simulator** is a lightweight virtual pet app where you care for a majestic rock named **Rocko**.

You can:

- 👐 Pet Rocko to raise happiness  
- 🍔 Feed Rocko to reduce hunger  
- 😐 Watch Rocko’s mood change (Happy → Content → Sad)  
- 📉 See hunger slowly drain over time  
- 💔 Experience happiness drop when Rocko is starving  
- 🔄 Restart at any time  

This project intentionally stays simple so I can experiment with:

- React state management  
- Animation and UI feedback  
- Component structure  
- Hooks and timed updates  
- Deploying React Native apps on the web (Netlify)  

---

## 🧠 Why This Project Exists

I started this in my **ACM (Association for Computing Machinery)** club as a fun mini-project.

Since then, I’ve been iterating on it to:

- Learn more about React Native  
- Practice clean code and UI design  
- Understand passive state updates with intervals  
- Experiment with deploying RN apps to the web  
- Build a silly but charming little demo  

*If you're viewing this repo — feel free to fork, break, extend, or memeify Rocko.*

---

## 🚀 Try It Online

I plan to deploy this project via **Netlify**, so that anyone can play with Rocko directly in the browser — without needing Expo Go or a simulator.

*(Link will appear here once deployed.)*

---

## 🛠️ Running Locally

This is an Expo project created with `create-expo-app`.

To run it:

### 1️⃣ Install dependencies
```bash
npm install
```

### 2️⃣ Start the development server
```bash
npx expo start
```

You can launch using:

- 📱 Expo Go app
- 🧪 Android emulator
- 🍎 iOS simulator
- 🌐 Web browser (great for quick testing, and used for Netlify deploy)

## 📁 Project Structure
``` bash
app/
  └── PetRockSimulator.tsx   # Main game logic + UI
assets/                      # (Future) images, fonts, sounds
README.md                    # You are here
```

The app uses file-based routing provided by Expo Router.

---

## ✨ Features & Learning Highlights

- `useState` for interactive stats
- `useEffect` + intervals for passive hunger decay
- Dynamic mood calculation
- Color-interpolated stat bars (green → yellow → red)
- Responsive layout
- Clean component separation
- Experiment-friendly codebase

### Future ideas:

- 🪨 Rock skins
- 🎵 Mood-based sound effects
- 🌑 Rocko “sleeps” when ignored
- 💀 Death / revive mode (maybe)
- 📈 More stat types (energy, boredom, grime)
- 🫂 Social mode — trade rocks?? (why not)
- 📺 More types of entertainment (tv, sports, etc)

---

## 🧰 Useful Expo Resources

- [Expo Docs](https://docs.expo.dev)
- [Expo Router Guide](https://docs.expo.dev/router/introduction/)
- [Learn Expo Tutorial](https://docs.expo.dev/tutorial/introduction/)

---

## 🤝 Contributing

If someone wants to add a feature, improve/fix something, or give Rocko a personality crisis — contributions are welcome.

---

## 🪨 Final Notes

This is a small project, but it’s been a fun way to learn, test ideas, break things, and grow as a developer.

Hope you enjoy caring for Rocko as much as I enjoy building him.

**Keep Rocko fed. Keep Rocko happy. Or don’t. He’s a rock.**
