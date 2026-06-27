// Day 13 - adding interactivity to the shop page
// everything below uses querySelector/querySelectorAll + addEventListener, no inline onclick

// 1. live character counter on the feedback textarea
const feedbackBox = document.querySelector('#feedbackBox');
const charCount = document.querySelector('#charCount');

if (feedbackBox && charCount) {
    feedbackBox.addEventListener('input', () => {
        const length = feedbackBox.value.length;
        charCount.textContent = `${length} / 300 characters`;

        // turns red once the visitor goes past the 300 limit
        if (length > 300) {
            charCount.classList.add('over-limit');
        } else {
            charCount.classList.remove('over-limit');
        }
    });
}

// little extra so the submit button actually does something
const submitFeedbackBtn = document.querySelector('#submitFeedback');
const thanksMsg = document.querySelector('#thanksMsg');

if (submitFeedbackBtn && feedbackBox) {
    submitFeedbackBtn.addEventListener('click', () => {
        if (feedbackBox.value.trim() === '') return;

        thanksMsg.classList.add('show');
        feedbackBox.value = '';
        charCount.textContent = '0 / 300 characters';
        charCount.classList.remove('over-limit');

        setTimeout(() => thanksMsg.classList.remove('show'), 3000);
    });
}

// 2. back to top button - shows after scrolling 200px, smooth scrolls to top on click
const backToTopBtn = document.querySelector('#backToTop');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// 3. tab switcher for the shipping/returns/contact info
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-content');

tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        tabButtons.forEach((b) => b.classList.remove('active'));
        tabPanels.forEach((panel) => panel.classList.remove('active'));

        btn.classList.add('active');

        const targetPanel = document.querySelector(`#${btn.dataset.tab}`);
        if (targetPanel) targetPanel.classList.add('active');
    });
});