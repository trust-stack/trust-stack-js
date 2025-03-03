export const loadExternalCSS = async (url: string, checkSelector?: string): Promise<void> => {
  // Check if already loaded using provided selector or URL match
  const isLoaded = checkSelector ? document.querySelector(checkSelector) : document.querySelector(`link[href="${url}"]`);

  console.log('isLoaded', isLoaded);

  if (isLoaded) return;

  // Load CSS
  const linkEl = document.createElement('link');
  linkEl.rel = 'stylesheet';
  linkEl.href = url;
  document.head.appendChild(linkEl);

  // Wait for the CSS to load
  await new Promise<void>((resolve, reject) => {
    linkEl.onload = () => resolve();
    linkEl.onerror = () => reject(new Error(`Failed to load CSS: ${url}`));
  });
};

export const loadExternalScript = async (url: string, globalVar?: string): Promise<void> => {
  // Check if already loaded using global variable or script tag
  if (globalVar && window[globalVar]) return;
  if (document.querySelector(`script[src="${url}"]`)) return;

  // Load Script
  const scriptEl = document.createElement('script');
  scriptEl.src = url;
  document.head.appendChild(scriptEl);

  // Wait for the script to load
  await new Promise<void>((resolve, reject) => {
    scriptEl.onload = () => resolve();
    scriptEl.onerror = () => reject(new Error(`Failed to load script: ${url}`));
  });
};

export const loadFontAwesome = async () => {
  return loadExternalCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css', 'link[href*="font-awesome"]');
};
