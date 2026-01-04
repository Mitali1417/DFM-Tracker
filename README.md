# Daily Fetal Movement Tracker (DFM)

A React Native mobile application to track and store daily fetal movements (kick counts).

---

## 📱 Features

- Track fetal movements using a simple timer
- Save sessions locally (no backend required)
- View past records with date and time taken
- Persistent data storage across app restarts
- Informational bottom sheet explaining tracking steps

---

## 🧩 Screens

### Home Screen

- Displays a list of all saved tracking sessions
- Each record shows:
  - Date
  - Time taken to record 10 movements (in minutes)
- Data persists using local storage

### Counter Screen

- Timer starts from 00:00
- User can:
  - Save the session
  - Go back without saving
- Saved sessions appear immediately on Home screen

### Information Sheet

- Accessible via the “i” icon
- Displays guidance text exactly as provided in the Figma file

---

## 🛠️ Tech Stack & Libraries

- **React Native**
- **Expo**
- **TypeScript**
- **React Navigation (Native Stack)**
- **AsyncStorage** – local data persistence
- **Expo Vector Icons**
- **Bottom Sheet / Modal** (custom implementation)

---

## 💾 Data Storage Structure

Each session is stored as an object:

```ts
{
  id: string,
  date: string,
  duration: number
}

```

---

## ▶️ How to Run the Project Locally

### 1. Clone the repository

```
git clone <your-repo-url>
cd kick-tracker
```

### 2. Install dependencies

```
npm install
```

### 3. Start the app

```
npx expo start
```

Scan the QR code using Expo Go on Android.   

---

## SnapShots 📷
| Home | Record Page | Instruction Modal | Save Alert |
|------|--------|---------------|---------------|
| <img src="https://res.cloudinary.com/duju3bhds/image/upload/v1767537296/Screenshot_2026-01-04-20-03-01-284_host.exp.exponent_mnpui6.jpg" width="220"/> | <img src="https://res.cloudinary.com/duju3bhds/image/upload/v1767537296/Screenshot_2026-01-04-20-03-10-961_host.exp.exponent_pco3br.jpg" width="220"/> | <img src="https://res.cloudinary.com/duju3bhds/image/upload/v1767537296/Screenshot_2026-01-04-20-03-15-558_host.exp.exponent_cbpcnq.jpg" width="220"/> | <img src="https://res.cloudinary.com/duju3bhds/image/upload/v1767537296/Screenshot_2026-01-04-20-03-21-559_host.exp.exponent_caufyf.jpg" width="220"/> |



---

## 📦 APK Build

The APK was generated using Expo EAS Build.

**Download APK:**
👉 https://expo.dev/accounts/mitali1417/projects/kick-tracker/builds/87f68152-6a71-447e-a0c6-f55dc26dffb0
