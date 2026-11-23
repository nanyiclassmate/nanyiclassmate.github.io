function initSpotlight() {
  const box = document.getElementById('spotlight-box');
  const mask = document.getElementById('spotlight-mask');

  if (box && mask) {
    box.addEventListener('mousemove', (e) => {
      const rect = box.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      // 这里的 80px 是探照灯圆圈的大小，你可以随意改
      mask.style.clipPath = `circle(80px at ${x}px ${y}px)`;
    });

    box.addEventListener('mouseleave', () => {
      mask.style.clipPath = `circle(0px at 50% 50%)`;
    });
  }
}

// 页面加载完成后运行
document.addEventListener('DOMContentLoaded', initSpotlight);
// 兼容 Butterfly 的无刷新页面跳转功能
document.addEventListener('pjax:complete', initSpotlight);