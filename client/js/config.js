const config = {
    // API Base URL
    apiBaseUrl: `${window.location.protocol}//${window.location.host}/api`,
    
    // API Endpoints
    endpoints: {
        // Auth
        login: '/user/login-validate',
        
        // Dashboard
        dashboardSummary: '/dashboard/summary',
        dashboardRecent: '/dashboard/recent',
        
        // Computers
        getAllComputers: '/computer/all',
        createComputer: '/computer/create',
        updateComputer: '/computer/edit',
        deleteComputer: '/computer/delete',
        getComputer: '/computer',
        
        // Lab Utilities
        getAllLabUtilities: '/lab-utility/all',
        createLabUtility: '/lab-utility/create',
        updateLabUtility: '/lab-utility/edit',
        deleteLabUtility: '/lab-utility/delete',
        getLabUtility: '/lab-utility',
        
        // Rooms
        getAllRooms: '/room/all',
        createRoom: '/room/create',
        updateRoom: '/room/edit',
        deleteRoom: '/room/delete',
        getRoom: '/room',
        uploadRoomImage: '/room/upload-image',
        getRoomWithAssets: '/room/details',
        
        // Categories
        getAllCategories: '/category/all',
        createCategory: '/category/create',
        updateCategory: '/category/edit',
        deleteCategory: '/category/delete',
        getCategory: '/category',
        
        // Smart Boards
        getAllSmartBoards: '/smart-board/all',
        createSmartBoard: '/smart-board/create',
        updateSmartBoard: '/smart-board/edit',
        deleteSmartBoard: '/smart-board/delete',
        getSmartBoard: '/smart-board',
        uploadSmartBoardImage: '/smart-board/upload-image'
    },
    
    // Status Options
    statusOptions: {
        functional: 'Functional',
        maintenance: 'Maintenance',
        retired: 'Retired'
    },
    
    // Toast Notifications Settings
    toastSettings: {
        position: 'top-right',
        autoHide: true,
        delay: 3000
    }
};

// API base URL - update this if your API is hosted elsewhere
const API_BASE_URL = '';

// Configure axios defaults
axios.defaults.baseURL = API_BASE_URL;
axios.defaults.headers.common['Content-Type'] = 'application/json'; 