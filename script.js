document.addEventListener('DOMContentLoaded', () => {
  
  // Smooth Scroll
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      if (targetId && targetId !== '#') {
        const element = document.querySelector(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // FAQ Toggle
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      // Close other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const icon = otherItem.querySelector('.toggle-icon');
          if (icon) icon.style.transform = 'rotate(0deg)';
        }
      });

      // Toggle current
      item.classList.toggle('active');
      const icon = item.querySelector('.toggle-icon');
      if (icon) {
        icon.style.transform = item.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
      }
    });
  });

  // Buy Button Alert
  const buyButtons = document.querySelectorAll('.btn-checkout, .btn-primary');
  buyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Only alert if it's the actual checkout button or we want to simulate logic
      // Here we just let the anchor link work for smooth scroll buttons, 
      // but for the checkout button (which might not be a link) we can add an alert.
      if (btn.tagName === 'BUTTON') {
        alert("Redirecionando para o checkout...");
      }
    });
  });
});
