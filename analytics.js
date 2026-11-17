/* Set the public Clarity project ID in index.html to enable collection. */
(() => {
  'use strict';
  const projectId = document.querySelector('meta[name="clarity-project-id"]')?.content.trim();
  if (!projectId || !/^[a-z0-9]+$/i.test(projectId)) return;
  window.clarity = window.clarity || function () {
    (window.clarity.q = window.clarity.q || []).push(arguments);
  };
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.clarity.ms/tag/' + encodeURIComponent(projectId);
  document.head.appendChild(script);

  // Use bounded campaign labels rather than passing arbitrary URL contents.
  const source = new URLSearchParams(window.location.search).get('utm_source');
  const channels = {xiaohongshu: 'xiaohongshu', bilibili: 'bilibili'};
  if (Object.prototype.hasOwnProperty.call(channels, source)) {
    window.clarity('set', 'promotion_source', channels[source]);
  }
  const track = name => window.clarity('event', name);
  document.querySelectorAll('[data-analytics-event]').forEach(link => {
    link.addEventListener('click', () => track(link.dataset.analyticsEvent));
  });
  const video = document.querySelector('#trailer video');
  if (video) {
    video.addEventListener('play', () => track('gameplay_video_play'), {once: true});
    video.addEventListener('ended', () => track('gameplay_video_complete'), {once: true});
  }
})();
