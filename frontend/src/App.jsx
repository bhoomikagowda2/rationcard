
import { useState } from "react";
import "./App.css";

const translations = {
  English: {
    dashboard: "Dashboard", beneficiaries: "Beneficiaries", shops: "Ration Shops",
    transactions: "Transactions", offline: "Offline Monitoring", reports: "Reports",
    complaints: "Complaints", settings: "Settings", mainMenu: "MAIN MENU",
    welcome: "Welcome to Smart Ration System 👋",
    subtitle: "Your ration services in one place",
    overview: "Dashboard Overview", administrator: "Administrator",
    admin: "Government Admin", active: "Active", inactive: "Inactive",
    pending: "Pending", resolved: "Resolved", completed: "Completed",
    download: "Download CSV", update: "Update Status",
    search: "Search by ID, name or card number",
    beneficiaryDesc: "View and manage registered beneficiaries.",
    shopDesc: "View and monitor registered ration shops.",
    transactionDesc: "View ration distribution transaction history.",
    offlineDesc: "Monitor offline ration transactions and synchronization status.",
    reportsDesc: "View and download ration distribution summary reports.",
    complaintDesc: "Review beneficiary complaints and update their status.",
    settingsDesc: "Manage your dashboard preferences.",
    beneficiaryID: "Beneficiary ID", name: "Name", card: "Ration Card Number",
    status: "Status", shopID: "Shop ID", shopName: "Shop Name",
    location: "Location", transactionID: "Transaction ID",
    beneficiary: "Beneficiary", date: "Date", issue: "Issue", action: "Action",
    viewDetails: "View Details →", viewShops: "View Shops →",
    viewHistory: "View History →", viewStatus: "View Status →",
    viewReports: "View Reports →", viewComplaints: "View Complaints →",
    manageBeneficiaries: "View and manage registered beneficiaries.",
    monitorShops: "Monitor registered fair price shops.",
    monitorTransactions: "Monitor ration distribution transactions.",
    monitorOffline: "Monitor offline transactions and synchronization.",
    reviewComplaints: "Review and manage beneficiary complaints.",
    offlineTransactions: "Offline Transactions",
    waitingSync: "Transactions waiting for synchronization.",
    synchronization: "Synchronization",
    waitingNetwork: "Waiting for network connection.",
    syncedTransactions: "Synced Transactions",
    successfullySynced: "Transactions successfully synchronized.",
    offlineInfo: "Offline System Information",
    offlineMessage: "Transactions recorded during network interruptions can be synchronized when connectivity is restored. These are sample monitoring values for the project demonstration.",
    totalBeneficiaries: "Total Beneficiaries",
    totalShops: "Total Ration Shops",
    totalTransactions: "Total Transactions",
    languageSettings: "Language Settings",
    chooseLanguage: "Choose your preferred dashboard language.",
    account: "Administrator Account",
    role: "Role: Government Administrator",
    system: "System: Smart Ration Distribution System",
    completedMessage: "Completed",
    biometric: "Biometric authentication failed",
    rationNotReceived: "Ration not received",
    incorrectDetails: "Ration card details incorrect",
    searchShop: "Search shop ID, name or location",
    searchTransaction: "Search transaction or beneficiary",
    searchComplaint: "Search complaint or beneficiary",
    report: "Report", value: "Value",
    registered: "Registered Beneficiaries",
    pendingCount: "2 Pending"
  },

  Kannada: {
    dashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್", beneficiaries: "ಫಲಾನುಭವಿಗಳು",
    shops: "ಪಡಿತರ ಅಂಗಡಿಗಳು", transactions: "ವಹಿವಾಟುಗಳು",
    offline: "ಆಫ್‌ಲೈನ್ ಮೇಲ್ವಿಚಾರಣೆ", reports: "ವರದಿಗಳು",
    complaints: "ದೂರುಗಳು", settings: "ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
    mainMenu: "ಮುಖ್ಯ ಮೆನು",
    welcome: "ಸ್ಮಾರ್ಟ್ ರೇಷನ್ ವ್ಯವಸ್ಥೆಗೆ ಸ್ವಾಗತ 👋",
    subtitle: "ನಿಮ್ಮ ಪಡಿತರ ಸೇವೆಗಳು ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ",
    overview: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ವಿವರಗಳು",
    administrator: "ನಿರ್ವಾಹಕರು", admin: "ಸರ್ಕಾರಿ ನಿರ್ವಾಹಕರು",
    active: "ಸಕ್ರಿಯ", inactive: "ನಿಷ್ಕ್ರಿಯ",
    pending: "ಬಾಕಿ ಇದೆ", resolved: "ಪರಿಹರಿಸಲಾಗಿದೆ",
    completed: "ಪೂರ್ಣಗೊಂಡಿದೆ", download: "CSV ಡೌನ್‌ಲೋಡ್",
    update: "ಸ್ಥಿತಿ ಬದಲಾಯಿಸಿ",
    search: "ID, ಹೆಸರು ಅಥವಾ ಕಾರ್ಡ್ ಸಂಖ್ಯೆಯಿಂದ ಹುಡುಕಿ",
    beneficiaryDesc: "ನೋಂದಾಯಿತ ಫಲಾನುಭವಿಗಳನ್ನು ವೀಕ್ಷಿಸಿ ಮತ್ತು ನಿರ್ವಹಿಸಿ.",
    shopDesc: "ನೋಂದಾಯಿತ ಪಡಿತರ ಅಂಗಡಿಗಳನ್ನು ವೀಕ್ಷಿಸಿ.",
    transactionDesc: "ಪಡಿತರ ವಿತರಣೆಯ ವಹಿವಾಟಿನ ಇತಿಹಾಸವನ್ನು ವೀಕ್ಷಿಸಿ.",
    offlineDesc: "ಆಫ್‌ಲೈನ್ ವಹಿವಾಟುಗಳು ಮತ್ತು ಸಿಂಕ್ರೊನೈಸೇಶನ್ ಸ್ಥಿತಿಯನ್ನು ಗಮನಿಸಿ.",
    reportsDesc: "ಪಡಿತರ ವಿತರಣೆಯ ವರದಿಗಳನ್ನು ವೀಕ್ಷಿಸಿ ಮತ್ತು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ.",
    complaintDesc: "ಫಲಾನುಭವಿಗಳ ದೂರುಗಳನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಸ್ಥಿತಿಯನ್ನು ಬದಲಾಯಿಸಿ.",
    settingsDesc: "ನಿಮ್ಮ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಆದ್ಯತೆಗಳನ್ನು ನಿರ್ವಹಿಸಿ.",
    beneficiaryID: "ಫಲಾನುಭವಿ ID", name: "ಹೆಸರು",
    card: "ಪಡಿತರ ಚೀಟಿ ಸಂಖ್ಯೆ", status: "ಸ್ಥಿತಿ",
    shopID: "ಅಂಗಡಿ ID", shopName: "ಅಂಗಡಿ ಹೆಸರು",
    location: "ಸ್ಥಳ", transactionID: "ವಹಿವಾಟು ID",
    beneficiary: "ಫಲಾನುಭವಿ", date: "ದಿನಾಂಕ",
    issue: "ಸಮಸ್ಯೆ", action: "ಕ್ರಿಯೆ",
    viewDetails: "ವಿವರಗಳನ್ನು ವೀಕ್ಷಿಸಿ →", viewShops: "ಅಂಗಡಿಗಳನ್ನು ವೀಕ್ಷಿಸಿ →",
    viewHistory: "ಇತಿಹಾಸ ವೀಕ್ಷಿಸಿ →", viewStatus: "ಸ್ಥಿತಿ ವೀಕ್ಷಿಸಿ →",
    viewReports: "ವರದಿಗಳನ್ನು ವೀಕ್ಷಿಸಿ →",
    viewComplaints: "ದೂರುಗಳನ್ನು ವೀಕ್ಷಿಸಿ →",
    manageBeneficiaries: "ನೋಂದಾಯಿತ ಫಲಾನುಭವಿಗಳನ್ನು ವೀಕ್ಷಿಸಿ ಮತ್ತು ನಿರ್ವಹಿಸಿ.",
    monitorShops: "ನ್ಯಾಯಬೆಲೆ ಅಂಗಡಿಗಳನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ.",
    monitorTransactions: "ಪಡಿತರ ವಿತರಣೆಯ ವಹಿವಾಟುಗಳನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ.",
    monitorOffline: "ಆಫ್‌ಲೈನ್ ವಹಿವಾಟು ಮತ್ತು ಸಿಂಕ್ರೊನೈಸೇಶನ್ ಗಮನಿಸಿ.",
    reviewComplaints: "ಫಲಾನುಭವಿಗಳ ದೂರುಗಳನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ನಿರ್ವಹಿಸಿ.",
    offlineTransactions: "ಆಫ್‌ಲೈನ್ ವಹಿವಾಟುಗಳು",
    waitingSync: "ಸಿಂಕ್ರೊನೈಸೇಶನ್‌ಗಾಗಿ ಕಾಯುತ್ತಿರುವ ವಹಿವಾಟುಗಳು.",
    synchronization: "ಸಿಂಕ್ರೊನೈಸೇಶನ್",
    waitingNetwork: "ನೆಟ್‌ವರ್ಕ್ ಸಂಪರ್ಕಕ್ಕಾಗಿ ಕಾಯುತ್ತಿದೆ.",
    syncedTransactions: "ಸಿಂಕ್ರೊನೈಸ್ ಮಾಡಿದ ವಹಿವಾಟುಗಳು",
    successfullySynced: "ಯಶಸ್ವಿಯಾಗಿ ಸಿಂಕ್ರೊನೈಸ್ ಮಾಡಿದ ವಹಿವಾಟುಗಳು.",
    offlineInfo: "ಆಫ್‌ಲೈನ್ ವ್ಯವಸ್ಥೆಯ ಮಾಹಿತಿ",
    offlineMessage: "ನೆಟ್‌ವರ್ಕ್ ಸಮಸ್ಯೆಯ ಸಮಯದಲ್ಲಿ ದಾಖಲಾದ ವಹಿವಾಟುಗಳನ್ನು ಸಂಪರ್ಕ ಮರಳಿದಾಗ ಸಿಂಕ್ರೊನೈಸ್ ಮಾಡಬಹುದು. ಇವು ಯೋಜನೆಯ ಪ್ರದರ್ಶನಕ್ಕಾಗಿ ಮಾದರಿ ಮೌಲ್ಯಗಳಾಗಿವೆ.",
    totalBeneficiaries: "ಒಟ್ಟು ಫಲಾನುಭವಿಗಳು",
    totalShops: "ಒಟ್ಟು ಪಡಿತರ ಅಂಗಡಿಗಳು",
    totalTransactions: "ಒಟ್ಟು ವಹಿವಾಟುಗಳು",
    languageSettings: "ಭಾಷಾ ಸೆಟ್ಟಿಂಗ್‌ಗಳು",
    chooseLanguage: "ನಿಮ್ಮ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
    account: "ನಿರ್ವಾಹಕರ ಖಾತೆ",
    role: "ಪಾತ್ರ: ಸರ್ಕಾರಿ ನಿರ್ವಾಹಕರು",
    system: "ವ್ಯವಸ್ಥೆ: ಸ್ಮಾರ್ಟ್ ರೇಷನ್ ವಿತರಣಾ ವ್ಯವಸ್ಥೆ",
    completedMessage: "ಪೂರ್ಣಗೊಂಡಿದೆ",
    biometric: "ಬಯೋಮೆಟ್ರಿಕ್ ದೃಢೀಕರಣ ವಿಫಲವಾಗಿದೆ",
    rationNotReceived: "ಪಡಿತರ ದೊರೆತಿಲ್ಲ",
    incorrectDetails: "ಪಡಿತರ ಚೀಟಿ ವಿವರಗಳು ತಪ್ಪಾಗಿವೆ",
    searchShop: "ಅಂಗಡಿ ID, ಹೆಸರು ಅಥವಾ ಸ್ಥಳ ಹುಡುಕಿ",
    searchTransaction: "ವಹಿವಾಟು ಅಥವಾ ಫಲಾನುಭವಿಯನ್ನು ಹುಡುಕಿ",
    searchComplaint: "ದೂರು ಅಥವಾ ಫಲಾನುಭವಿಯನ್ನು ಹುಡುಕಿ",
    report: "ವರದಿ", value: "ಮೌಲ್ಯ",
    registered: "ನೋಂದಾಯಿತ ಫಲಾನುಭವಿಗಳು",
    pendingCount: "2 ಬಾಕಿ ಇದೆ"
  },

  Hindi: {
    dashboard: "डैशबोर्ड", beneficiaries: "लाभार्थी",
    shops: "राशन की दुकानें", transactions: "लेन-देन",
    offline: "ऑफलाइन निगरानी", reports: "रिपोर्ट",
    complaints: "शिकायतें", settings: "सेटिंग्स",
    mainMenu: "मुख्य मेनू",
    welcome: "स्मार्ट राशन सिस्टम में आपका स्वागत है 👋",
    subtitle: "आपकी राशन सेवाएँ एक ही स्थान पर",
    overview: "डैशबोर्ड विवरण",
    administrator: "प्रशासक", admin: "सरकारी प्रशासक",
    active: "सक्रिय", inactive: "निष्क्रिय",
    pending: "लंबित", resolved: "हल किया गया",
    completed: "पूरा हुआ", download: "CSV डाउनलोड",
    update: "स्थिति बदलें",
    search: "ID, नाम या कार्ड नंबर से खोजें",
    beneficiaryDesc: "पंजीकृत लाभार्थियों को देखें और प्रबंधित करें।",
    shopDesc: "पंजीकृत राशन दुकानों को देखें।",
    transactionDesc: "राशन वितरण लेन-देन का इतिहास देखें।",
    offlineDesc: "ऑफलाइन लेन-देन और सिंक्रनाइज़ेशन की निगरानी करें।",
    reportsDesc: "राशन वितरण रिपोर्ट देखें और डाउनलोड करें।",
    complaintDesc: "लाभार्थियों की शिकायतें देखें और स्थिति बदलें।",
    settingsDesc: "अपनी डैशबोर्ड प्राथमिकताएँ प्रबंधित करें।",
    beneficiaryID: "लाभार्थी ID", name: "नाम",
    card: "राशन कार्ड नंबर", status: "स्थिति",
    shopID: "दुकान ID", shopName: "दुकान का नाम",
    location: "स्थान", transactionID: "लेन-देन ID",
    beneficiary: "लाभार्थी", date: "तारीख",
    issue: "समस्या", action: "कार्रवाई",
    viewDetails: "विवरण देखें →", viewShops: "दुकानें देखें →",
    viewHistory: "इतिहास देखें →", viewStatus: "स्थिति देखें →",
    viewReports: "रिपोर्ट देखें →",
    viewComplaints: "शिकायतें देखें →",
    manageBeneficiaries: "पंजीकृत लाभार्थियों को देखें और प्रबंधित करें।",
    monitorShops: "उचित मूल्य की दुकानों की निगरानी करें।",
    monitorTransactions: "राशन वितरण लेन-देन की निगरानी करें।",
    monitorOffline: "ऑफलाइन लेन-देन और सिंक्रनाइज़ेशन की निगरानी करें।",
    reviewComplaints: "लाभार्थियों की शिकायतों की समीक्षा और प्रबंधन करें।",
    offlineTransactions: "ऑफलाइन लेन-देन",
    waitingSync: "सिंक्रनाइज़ेशन की प्रतीक्षा कर रहे लेन-देन।",
    synchronization: "सिंक्रनाइज़ेशन",
    waitingNetwork: "नेटवर्क कनेक्शन की प्रतीक्षा है।",
    syncedTransactions: "सिंक किए गए लेन-देन",
    successfullySynced: "सफलतापूर्वक सिंक किए गए लेन-देन।",
    offlineInfo: "ऑफलाइन सिस्टम की जानकारी",
    offlineMessage: "नेटवर्क बाधित होने पर दर्ज किए गए लेन-देन को कनेक्शन वापस आने पर सिंक किया जा सकता है। ये परियोजना प्रदर्शन के लिए नमूना मान हैं।",
    totalBeneficiaries: "कुल लाभार्थी",
    totalShops: "कुल राशन दुकानें",
    totalTransactions: "कुल लेन-देन",
    languageSettings: "भाषा सेटिंग्स",
    chooseLanguage: "अपनी पसंदीदा डैशबोर्ड भाषा चुनें।",
    account: "प्रशासक खाता",
    role: "भूमिका: सरकारी प्रशासक",
    system: "सिस्टम: स्मार्ट राशन वितरण प्रणाली",
    completedMessage: "पूरा हुआ",
    biometric: "बायोमेट्रिक प्रमाणीकरण विफल",
    rationNotReceived: "राशन प्राप्त नहीं हुआ",
    incorrectDetails: "राशन कार्ड का विवरण गलत है",
    searchShop: "दुकान ID, नाम या स्थान खोजें",
    searchTransaction: "लेन-देन या लाभार्थी खोजें",
    searchComplaint: "शिकायत या लाभार्थी खोजें",
    report: "रिपोर्ट", value: "मान",
    registered: "पंजीकृत लाभार्थी",
    pendingCount: "2 लंबित"
  }
};

const menuItems = [
  { id: "Dashboard", icon: "🏠", key: "dashboard" },
  { id: "Beneficiaries", icon: "👥", key: "beneficiaries" },
  { id: "Ration Shops", icon: "🏪", key: "shops" },
  { id: "Transactions", icon: "📋", key: "transactions" },
  { id: "Offline Monitoring", icon: "📡", key: "offline" },
  { id: "Reports", icon: "📊", key: "reports" },
  { id: "Complaints", icon: "📝", key: "complaints" },
  { id: "Settings", icon: "⚙️", key: "settings" }
];

function App() {
  const [page, setPage] = useState("Dashboard");
  const [language, setLanguage] = useState("English");
  const [search, setSearch] = useState("");

  const [beneficiaries] = useState([
    { id: "BEN001", name: "Ramesh Kumar", card: "RC10001", status: "Active" },
    { id: "BEN002", name: "Lakshmi Devi", card: "RC10002", status: "Active" }
  ]);

  const [shops] = useState([
    { id: "FPS001", name: "Sri Lakshmi Ration Shop", location: "Bengaluru", status: "Active" },
    { id: "FPS002", name: "Government Fair Price Shop", location: "Mysuru", status: "Active" },
    { id: "FPS003", name: "Janatha Ration Store", location: "Mandya", status: "Inactive" }
  ]);

  const [transactions] = useState([
    { id: "TRX001", beneficiary: "Ramesh Kumar", shop: "FPS001", date: "06/11/2026", status: "Completed" },
    { id: "TRX002", beneficiary: "Lakshmi Devi", shop: "FPS002", date: "06/11/2026", status: "Pending" },
    { id: "TRX003", beneficiary: "Anitha", shop: "FPS001", date: "05/11/2026", status: "Completed" }
  ]);

  const [complaints, setComplaints] = useState([
    { id: "CMP001", name: "Ramesh Kumar", issueKey: "biometric", status: "Pending" },
    { id: "CMP002", name: "Lakshmi Devi", issueKey: "rationNotReceived", status: "Resolved" },
    { id: "CMP003", name: "Suresh Gowda", issueKey: "incorrectDetails", status: "Pending" }
  ]);

  const t = translations[language];

  const filterData = (data, fields) =>
    data.filter(item =>
      fields.some(field =>
        String(item[field] || "").toLowerCase().includes(search.toLowerCase())
      )
    );

  const filteredBeneficiaries = filterData(beneficiaries, ["id", "name", "card"]);
  const filteredShops = filterData(shops, ["id", "name", "location"]);
  const filteredTransactions = filterData(transactions, ["id", "beneficiary", "shop"]);
  const filteredComplaints = filterData(complaints, ["id", "name", "issueKey", "status"]);

  function downloadCSV(headers, rows, filename) {
    const csv = [headers, ...rows]
      .map(row => row.map(value =>
        `"${String(value).replace(/"/g, '""')}"`
      ).join(","))
      .join("\n");

    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }

  function exportCurrentPage() {
    if (page === "Beneficiaries") {
      downloadCSV(
        [t.beneficiaryID, t.name, t.card, t.status],
        filteredBeneficiaries.map(b => [b.id, b.name, b.card, t[b.status.toLowerCase()]]),
        "beneficiaries.csv"
      );
    } else if (page === "Ration Shops") {
      downloadCSV(
        [t.shopID, t.shopName, t.location, t.status],
        filteredShops.map(s => [s.id, s.name, s.location, t[s.status.toLowerCase()]]),
        "ration-shops.csv"
      );
    } else if (page === "Transactions") {
      downloadCSV(
        [t.transactionID, t.beneficiary, t.shopID, t.date, t.status],
        filteredTransactions.map(tr => [tr.id, tr.beneficiary, tr.shop, tr.date, t[tr.status.toLowerCase()] || tr.status]),
        "transactions.csv"
      );
    } else if (page === "Complaints") {
      downloadCSV(
        [t.issue, t.name, t.issue, t.status],
        filteredComplaints.map(c => [c.id, c.name, t[c.issueKey], t[c.status.toLowerCase()]]),
        "complaints.csv"
      );
    } else {
      downloadCSV(
        [t.report, t.value],
        [[t.registered, beneficiaries.length], [t.totalShops, shops.length], [t.totalTransactions, transactions.length]],
        "smart-ration-report.csv"
      );
    }
  }

  function updateComplaint(id) {
    setComplaints(previous =>
      previous.map(c =>
        c.id === id
          ? { ...c, status: c.status === "Pending" ? "Resolved" : "Pending" }
          : c
      )
    );
  }

  const pageTitle = () => {
    const item = menuItems.find(m => m.id === page);
    return item ? t[item.key] : t.dashboard;
  };

  function renderDashboard() {
    const cards = [
      ["👥", "beneficiaries", t.beneficiaries, t.manageBeneficiaries, beneficiaries.length, "Beneficiaries", t.viewDetails],
      ["🏪", "shops", t.shops, t.monitorShops, shops.length, "Ration Shops", t.viewShops],
      ["📋", "transactions", t.transactions, t.monitorTransactions, transactions.length, "Transactions", t.viewHistory],
      ["📡", "offline", t.offline, t.monitorOffline, t.pendingCount, "Offline Monitoring", t.viewStatus],
      ["📊", "reports", t.reports, t.reportsDesc, null, "Reports", t.viewReports],
      ["📝", "complaints", t.complaints, t.reviewComplaints, complaints.length, "Complaints", t.viewComplaints]
    ];

    return (
      <>
        <div className="welcome-banner">
          <h2>{t.welcome}</h2>
          <p>{t.subtitle}</p>
        </div>
        <h2 className="section-title">{t.overview}</h2>
        <div className="dashboard-grid">
          {cards.map(([icon, key, title, desc, count, target, action]) => (
            <div className="dashboard-card" key={key}>
              <div className="card-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
              {count !== null && <div className="card-number">{count}</div>}
              <button onClick={() => setPage(target)}>{action}</button>
            </div>
          ))}
        </div>
      </>
    );
  }

  function renderTable(headers, rows) {
    return (
      <div className="table-container">
        <table>
          <thead>
            <tr>{headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }

  function toolbar(placeholder = t.search) {
    return (
      <div className="table-toolbar">
        <input
          className="search-input"
          placeholder={placeholder}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button onClick={exportCurrentPage}>{t.download}</button>
      </div>
    );
  }

  function statusLabel(status) {
    return t[status.toLowerCase()] || status;
  }

  function renderBeneficiaries() {
    return (
      <>
        <p className="page-description">{t.beneficiaryDesc}</p>
        {toolbar()}
        {renderTable(
          [t.beneficiaryID, t.name, t.card, t.status],
          filteredBeneficiaries.map(b => (
            <tr key={b.id}>
              <td>{b.id}</td><td>{b.name}</td><td>{b.card}</td>
              <td><span className={`status ${b.status.toLowerCase()}`}>{statusLabel(b.status)}</span></td>
            </tr>
          ))
        )}
      </>
    );
  }

  function renderShops() {
    return (
      <>
        <p className="page-description">{t.shopDesc}</p>
        {toolbar(t.searchShop)}
        {renderTable(
          [t.shopID, t.shopName, t.location, t.status],
          filteredShops.map(s => (
            <tr key={s.id}>
              <td>{s.id}</td><td>{s.name}</td><td>{s.location}</td>
              <td><span className={`status ${s.status.toLowerCase()}`}>{statusLabel(s.status)}</span></td>
            </tr>
          ))
        )}
      </>
    );
  }

  function renderTransactions() {
    return (
      <>
        <p className="page-description">{t.transactionDesc}</p>
        {toolbar(t.searchTransaction)}
        {renderTable(
          [t.transactionID, t.beneficiary, t.shopID, t.date, t.status],
          filteredTransactions.map(tr => (
            <tr key={tr.id}>
              <td>{tr.id}</td><td>{tr.beneficiary}</td><td>{tr.shop}</td><td>{tr.date}</td>
              <td><span className={`status ${tr.status.toLowerCase()}`}>{statusLabel(tr.status)}</span></td>
            </tr>
          ))
        )}
      </>
    );
  }

  function renderOffline() {
    return (
      <>
        <p className="page-description">{t.offlineDesc}</p>
        <div className="dashboard-grid">
          <div className="dashboard-card"><div className="card-icon">📡</div><h3>{t.offlineTransactions}</h3><div className="card-number">2</div><p>{t.waitingSync}</p></div>
          <div className="dashboard-card"><div className="card-icon">🔄</div><h3>{t.synchronization}</h3><div className="card-number">{t.pending}</div><p>{t.waitingNetwork}</p></div>
          <div className="dashboard-card"><div className="card-icon">✅</div><h3>{t.syncedTransactions}</h3><div className="card-number">18</div><p>{t.successfullySynced}</p></div>
        </div>
        <div className="information-box">
          <strong>{t.offlineInfo}</strong>
          <p>{t.offlineMessage}</p>
        </div>
      </>
    );
  }

  function renderReports() {
    return (
      <>
        <p className="page-description">{t.reportsDesc}</p>
        <div className="dashboard-grid">
          <div className="dashboard-card"><div className="card-icon">👥</div><h3>{t.totalBeneficiaries}</h3><div className="card-number">{beneficiaries.length}</div></div>
          <div className="dashboard-card"><div className="card-icon">🏪</div><h3>{t.totalShops}</h3><div className="card-number">{shops.length}</div></div>
          <div className="dashboard-card"><div className="card-icon">📋</div><h3>{t.totalTransactions}</h3><div className="card-number">{transactions.length}</div></div>
        </div>
        <button onClick={exportCurrentPage}>{t.download}</button>
      </>
    );
  }

  function renderComplaints() {
    return (
      <>
        <p className="page-description">{t.complaintDesc}</p>
        {toolbar(t.searchComplaint)}
        {renderTable(
          [t.issue, t.name, t.issue, t.status, t.action],
          filteredComplaints.map(c => (
            <tr key={c.id}>
              <td>{c.id}</td><td>{c.name}</td><td>{t[c.issueKey]}</td>
              <td><span className={`status ${c.status.toLowerCase()}`}>{statusLabel(c.status)}</span></td>
              <td><button className="small-button" onClick={() => updateComplaint(c.id)}>{t.update}</button></td>
            </tr>
          ))
        )}
      </>
    );
  }

  function renderSettings() {
    return (
      <>
        <p className="page-description">{t.settingsDesc}</p>
        <div className="settings-card">
          <h3>{t.languageSettings}</h3>
          <p>{t.chooseLanguage}</p>
          <select value={language} onChange={e => setLanguage(e.target.value)}>
            <option value="English">English</option>
            <option value="Kannada">ಕನ್ನಡ</option>
            <option value="Hindi">हिन्दी</option>
          </select>
        </div>
        <div className="settings-card">
          <h3>{t.account}</h3>
          <p>{t.role}</p>
          <p>{t.system}</p>
        </div>
      </>
    );
  }

  function renderPage() {
    switch (page) {
      case "Dashboard": return renderDashboard();
      case "Beneficiaries": return renderBeneficiaries();
      case "Ration Shops": return renderShops();
      case "Transactions": return renderTransactions();
      case "Offline Monitoring": return renderOffline();
      case "Reports": return renderReports();
      case "Complaints": return renderComplaints();
      case "Settings": return renderSettings();
      default: return renderDashboard();
    }
  }

  return (
    <div className="app-container">
      <aside className="sidebar">
        <h2 className="logo">🏛 Smart Ration</h2>
        <p className="system-name">{t.system}</p>
        <h3 className="menu-heading">{t.mainMenu}</h3>
        <nav>
          {menuItems.map(item => (
            <button
              key={item.id}
              className={`menu-item ${page === item.id ? "active" : ""}`}
              onClick={() => {
                setPage(item.id);
                setSearch("");
              }}
            >
              <span>{item.icon}</span>
              {t[item.key]}
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <span>👤</span><span>{t.admin}</span>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div className="topbar-title">{pageTitle()}</div>
          <div className="admin-info">
            <span>{t.admin}</span>
            <small>{t.administrator}</small>
          </div>
        </header>
        <section className="page-content">
          {page !== "Dashboard" && (
            <div className="page-heading"><h1>{pageTitle()}</h1></div>
          )}
          {renderPage()}
        </section>
      </main>
    </div>
  );
}

export default App;
