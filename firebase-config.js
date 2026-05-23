// === 把這裡換成你的 Firebase Web App config ===
// Firebase Console → 專案設定 → 一般 → 你的應用程式 → Web app → SDK setup → 複製 config
// 注意：這些 key 是公開的（瀏覽器會看到），靠 Firestore Security Rules 保護資料
//
// 小蜜蜂與打地鼠共用同一個 Firebase 專案（whack-a-mole-v2-shun），
// 但用同一個 collection "scores" + 一個 game: "bee" 欄位來區分。
// 排行榜會自動只顯示 game === "bee" 的紀錄。
export const firebaseConfig = {
  apiKey: "AIzaSyBmNh-JAmEgdPynhuBxfGsEe6A7vYk9kjM",
  authDomain: "whack-a-mole-v2-shun.firebaseapp.com",
  projectId: "whack-a-mole-v2-shun",
  storageBucket: "whack-a-mole-v2-shun.firebasestorage.app",
  messagingSenderId: "832944754457",
  appId: "1:832944754457:web:d0b3b01a924a799960ff88"
};

// Firestore collection 名稱
export const SCORES_COLLECTION = "scores";
