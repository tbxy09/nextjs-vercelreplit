export async function renderDiagram(diagramType, diagramData) {
  console.log('diagramType: in renderDiagram:', diagramType);
  fetch('https://1ad820b6-84f2-4e63-986b-ccb43aafa494-00-9jqplxzycc1m.janeway.replit.dev/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ diagramType, diagramData }),
  })
    .then(response => response.json())
    .then(data => {
      console.log("data:", data);
      return data.svgContent;
      // Use the svgContent as needed (e.g., display it on the page)
    })
    .catch(error => console.error('Error:', error));
}