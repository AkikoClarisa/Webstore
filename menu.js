console.log('menu.js loaded successfully');

let activeMenu = null;

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    
    // Add event listeners to tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId, this);
        });
    });

    // Add event listeners to contact buttons
    document.querySelectorAll('.contact-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const menuType = this.getAttribute('data-menu');
            openAdminMenu(menuType);
        });
    });

    // Add event listeners to close buttons
    document.querySelectorAll('.close-admin').forEach(btn => {
        btn.addEventListener('click', function() {
            const menuType = this.getAttribute('data-close');
            closeAdminMenu(menuType);
        });
    });

    // Close admin menus when clicking overlay
    document.getElementById('overlay').addEventListener('click', function() {
        closeAllAdminMenus();
    });

    // Prevent admin menus from closing when clicking inside them
    document.querySelectorAll('.admin-menu').forEach(menu => {
        menu.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });

    console.log('All event listeners added');
});

function showSection(sectionId, element) {
    console.log('Showing section:', sectionId);
    
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        console.log('Section activated:', sectionId);
    }
    
    // Add active class to clicked tab
    if (element) {
        element.classList.add('active');
    }
    
    // Close any open admin menu
    closeAllAdminMenus();
}

function openAdminMenu(menuType) {
    console.log('Opening admin menu:', menuType);
    const menu = document.getElementById(menuType + 'Menu');
    const overlay = document.getElementById('overlay');
    
    if (!menu) {
        console.error('Menu not found:', menuType + 'Menu');
        return;
    }
    
    // Close all other menus first
    closeAllAdminMenus();
    
    // Show overlay and menu
    overlay.classList.add('active');
    menu.classList.add('active');
    activeMenu = menu;
    console.log('Menu opened:', menuType);
}

function closeAdminMenu(menuType) {
    console.log('Closing admin menu:', menuType);
    const menu = document.getElementById(menuType + 'Menu');
    const overlay = document.getElementById('overlay');
    
    if (menu) {
        menu.classList.remove('active');
    }
    overlay.classList.remove('active');
    activeMenu = null;
}

function closeAllAdminMenus() {
    console.log('Closing all admin menus');
    document.querySelectorAll('.admin-menu').forEach(menu => {
        menu.classList.remove('active');
    });
    document.getElementById('overlay').classList.remove('active');
    activeMenu = null;
}

// Test function
window.testMenu = function() {
    console.log('Menu functions are working!');
    return true;
};
