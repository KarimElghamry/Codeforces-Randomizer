export function getPromblemsList() {
  const result: string | null = localStorage.getItem('problemsList');
  if (!result) return [];

  const problemsList: Array<any> = JSON.parse(result).problemsList;
  return problemsList;
}
