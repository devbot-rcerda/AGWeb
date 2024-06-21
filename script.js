document.addEventListener('DOMContentLoaded', function ()
{
    const placeholders = document.querySelectorAll('.video-placeholder');

    const loadYouTubeVideo = (placeholder) =>
    {
        const videoId = placeholder.getAttribute('data-video-id');
        const iframe = document.createElement('iframe');
        const containerWidth = placeholder.parentElement.offsetWidth;
        const aspectRatio = 16 / 9;
        const iframeHeight = containerWidth / aspectRatio;

        iframe.setAttribute('width', containerWidth);
        iframe.setAttribute('height', iframeHeight);
        iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        iframe.setAttribute('allowfullscreen', true);
        placeholder.replaceWith(iframe);
    };

    placeholders.forEach(placeholder =>
    {
        placeholder.addEventListener('click', () => loadYouTubeVideo(placeholder));
    });
});