/* The official snippet in index.html owns SDK loading; this file only records events. */
(() => {
  'use strict';
  if (typeof window.clarity !== 'function') return;

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
