document.addEventListener('DOMContentLoaded', () => {
  const folders = document.querySelectorAll('.folder');

  folders.forEach(folder => {
    folder.addEventListener('click', function() {
      // Toggle the expanded class on the folder
      this.classList.toggle('expanded');
      
      // Get the next sibling element (which should be the <ul>)
      const siblingUl = this.nextElementSibling;
      
      if (siblingUl && siblingUl.tagName === 'UL') {
        // Toggle the hidden class to show/hide the contents
        siblingUl.classList.toggle('hidden');
      }
    });
  });
});
