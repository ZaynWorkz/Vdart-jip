let activeFilter = 'all';

function setFilter(filter, btn) {
  activeFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  filterTools();
}

function filterTools() {
  const search = document.getElementById('searchInput').value.toLowerCase();
  const rows = document.querySelectorAll('#tableBody tr[data-group]');
  let visible = 0;

  rows.forEach(row => {
    const group = row.getAttribute('data-group');
    const domain = row.getAttribute('data-domain') || '';
    const text = row.textContent.toLowerCase();

    let groupMatch = (activeFilter === 'all') ||
                     (activeFilter === 'kids' && group === 'kids') ||
                     (activeFilter === 'teens' && group === 'teens') ||
                     (domain.includes(activeFilter.toLowerCase())) ||
                     (activeFilter.toLowerCase() === 'coding' && domain === 'coding') ||
                     (activeFilter.toLowerCase() === 'research' && domain === 'research') ||
                     (activeFilter.toLowerCase() === 'creativity' && domain === 'creativity') ||
                     (activeFilter.toLowerCase() === 'learning' && domain === 'learning') ||
                     (activeFilter.toLowerCase() === 'video' && domain === 'video');

    const domainMatch = (activeFilter === 'all' || activeFilter === 'kids' || activeFilter === 'teens') ? true :
                        domain.includes(activeFilter.toLowerCase()) || activeFilter.toLowerCase() === domain;

    const searchMatch = !search || text.includes(search);

    const finalMatch = (activeFilter === 'kids' || activeFilter === 'teens')
      ? (groupMatch && searchMatch)
      : (domainMatch && searchMatch && (activeFilter === 'all' ? true : domain === activeFilter.toLowerCase()));

    if ((activeFilter === 'all' || activeFilter === 'kids' || activeFilter === 'teens') ? (groupMatch && searchMatch) : (domainMatch && searchMatch)) {
      row.style.display = '';
      visible++;
    } else {
      row.style.display = 'none';
    }
  });

  document.getElementById('countBadge').textContent = `Showing ${visible} tool${visible !== 1 ? 's' : ''}`;
  document.getElementById('noResults').style.display = visible === 0 ? 'block' : 'none';
}