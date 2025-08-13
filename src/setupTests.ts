import "@testing-library/jest-dom/vitest"

window.HTMLElement.prototype.scrollIntoView = function() {}
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserver;
