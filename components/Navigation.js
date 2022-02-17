export const Navigation = ({
  target,
  className,
  title
}) => {
    const navigationHeader = document.createElement('a')
    navigationHeader.className = className
    navigationHeader.href = title ? `/browse.html?category=${title}` : '/browse.html'

    navigationHeader.innerText = title || 'All'
    target.appendChild(navigationHeader)
    return navigationHeader
}