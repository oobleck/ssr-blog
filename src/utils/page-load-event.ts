export function onPageLoad(cb: function) {
  document.addEventListener('astro:page-loaded', cb);
}
