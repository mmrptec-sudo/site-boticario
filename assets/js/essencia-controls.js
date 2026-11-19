/* Controles da nova interface. Apenas aprimora a vitrine: sem checkout real. */
(function () {
  'use strict';
  if (!CATALOG_MODE) return;

  const brandSelect = document.getElementById('brandSelect');
  const reviewSelect = document.getElementById('catalogReview');
  const clearButton = document.getElementById('clearCatalogFilters');
  const countNode = document.getElementById('resultCount');
  const activeNode = document.getElementById('activeFilterLabel');
  const brands = [...new Set(PRODUCTS.map(p => p.brand))].sort((a, b) => a.localeCompare(b, 'pt-BR'));
  const counts = { identified: PRODUCTS.filter(p => p.cat !== 'A conferir').length,
    pending: PRODUCTS.filter(p => p.cat === 'A conferir').length,
    all: PRODUCTS.length };

  brands.forEach(brand => {
    const opt = document.createElement('option');
    opt.value = brand;
    opt.textContent = brand;
    brandSelect.appendChild(opt);
    const count = document.querySelectorAll('[data-brand-count]');
    count.forEach(el => {
      if (el.dataset.brandCount === brand) {
        const n = PRODUCTS.filter(p => p.brand === brand).length;
        el.textContent = `${n.toLocaleString('pt-BR')} referências · Explorar`;
      }
    });
  });
  reviewSelect.options[0].textContent = `Identificados (${counts.identified.toLocaleString('pt-BR')})`;
  reviewSelect.options[1].textContent = `Todo o catálogo (${counts.all.toLocaleString('pt-BR')})`;
  reviewSelect.options[2].textContent = `A conferir (${counts.pending.toLocaleString('pt-BR')})`;
  document.getElementById('heroProductCount').textContent = counts.all.toLocaleString('pt-BR');

  window.syncCatalogControls = function () {
    brandSelect.value = brandFilter;
    reviewSelect.value = reviewMode;
  };
  window.updateCatalogView = function (view) {
    const n = view.length;
    countNode.textContent = `${n.toLocaleString('pt-BR')} ${n === 1 ? 'referência encontrada' : 'referências encontradas'}`;
    const labels = [];
    if (brandFilter !== 'Todos') labels.push(brandFilter);
    if (filter !== 'Todos') labels.push(filter);
    if (query.trim()) labels.push(`Busca: “${query.trim().slice(0, 35)}”`);
    if (favMode) labels.push('Seus favoritos');
    if (!query.trim()) labels.push(reviewMode === 'identified' ? 'com nome identificado' : reviewMode === 'pending' ? 'pendentes de revisão' : 'todos os registros');
    activeNode.textContent = labels.join(' · ');
    clearButton.hidden = !(filter !== 'Todos' || brandFilter !== 'Todos' || query.trim() || favMode || reviewMode !== 'identified' || sort !== 'featured');
  };
  brandSelect.addEventListener('change', e => {
    brandFilter = e.target.value;
    filter = 'Todos';
    favMode = false;
    render();
  });
  reviewSelect.addEventListener('change', e => {
    reviewMode = e.target.value;
    if (reviewMode === 'identified' && filter === 'A conferir') filter = 'Todos';
    render();
  });
  clearButton.addEventListener('click', () => {
    filter = 'Todos'; brandFilter = 'Todos'; reviewMode = 'identified'; sort = 'featured';
    favMode = false; query = '';
    document.getElementById('search').value = '';
    document.getElementById('sort').value = 'featured';
    window.syncCatalogControls();
    render();
  });
  window.syncCatalogControls();
  render();
})();
