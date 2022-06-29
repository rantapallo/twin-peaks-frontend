export const dateFormatter = (date) => new Date(date).toLocaleDateString('en-US', {
  day: 'numeric', 
  month: 'short', 
  year: 'numeric'
})