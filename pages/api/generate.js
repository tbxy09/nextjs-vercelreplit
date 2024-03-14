import { renderDiagram } from '../../utils/renderDiagram';
import { uploadDiagram } from '../../utils/uploadDiagram';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { diagramType, diagramData } = req.body;
    
    try {
      const diagramUrl = await renderDiagram(diagramType, diagramData);
      await uploadDiagram(diagramType, diagramUrl);
      
      res.status(200).json({ url: diagramUrl });
    } catch (error) {
      console.error('Error generating diagram:', error);
      res.status(500).json({ error: 'Failed to generate diagram' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}